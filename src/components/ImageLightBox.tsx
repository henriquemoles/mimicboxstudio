'use client'
import { useState, useEffect, useRef, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ImageLightboxProps {
  images: string[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
}

interface PanState {
  x: number;
  y: number;
}

interface TouchState {
  startX: number;
  startY: number;
  startDistance: number;
  startZoom: number;
  startPan: PanState;
}

const ZOOM_LEVELS = [0.5, 0.75, 1, 1.25, 1.5, 2, 2.5, 3];
const MIN_ZOOM = 0.5;
const MAX_ZOOM = 3;

export function ImageLightbox({ images, initialIndex, isOpen, onClose, projectTitle }: ImageLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState<PanState>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState<PanState>({ x: 0, y: 0 });
  const [panStart, setPanStart] = useState<PanState>({ x: 0, y: 0 });
  const [touchState, setTouchState] = useState<TouchState | null>(null);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  // Update current index when initialIndex changes
  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  // Reset zoom and pan when image changes
  useEffect(() => {
    resetTransform();
  }, [currentIndex]);

  // Close lightbox and keyboard controls
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrevious();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === '=' || e.key === '+') {
        zoomIn();
      } else if (e.key === '-') {
        zoomOut();
      } else if (e.key === '0') {
        resetTransform();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, zoom]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const resetTransform = useCallback(() => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
    setIsDragging(false);
  }, []);

  const getImageBounds = useCallback(() => {
    if (!imageRef.current || !containerRef.current) return null;
    
    const container = containerRef.current.getBoundingClientRect();
    const image = imageRef.current.getBoundingClientRect();
    
    return {
      containerWidth: container.width,
      containerHeight: container.height,
      imageWidth: image.width,
      imageHeight: image.height,
    };
  }, []);

  const constrainPan = useCallback((newPan: PanState, newZoom: number) => {
    const bounds = getImageBounds();
    if (!bounds) return newPan;

    const { containerWidth, containerHeight, imageWidth, imageHeight } = bounds;
    const scaledWidth = imageWidth * newZoom;
    const scaledHeight = imageHeight * newZoom;

    // Calculate maximum pan values
    const maxPanX = Math.max(0, (scaledWidth - containerWidth) / 2);
    const maxPanY = Math.max(0, (scaledHeight - containerHeight) / 2);

    return {
      x: Math.max(-maxPanX, Math.min(maxPanX, newPan.x)),
      y: Math.max(-maxPanY, Math.min(maxPanY, newPan.y))
    };
  }, [getImageBounds]);

  const handlePrevious = useCallback(() => {
    setCurrentIndex(prev => prev === 0 ? images.length - 1 : prev - 1);
  }, [images.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex(prev => prev === images.length - 1 ? 0 : prev + 1);
  }, [images.length]);

  const zoomIn = useCallback(() => {
    setZoom(prevZoom => {
      const newZoom = Math.min(MAX_ZOOM, prevZoom * 1.25);
      const constrainedPan = constrainPan(pan, newZoom);
      setPan(constrainedPan);
      return newZoom;
    });
  }, [pan, constrainPan]);

  const zoomOut = useCallback(() => {
    setZoom(prevZoom => {
      const newZoom = Math.max(MIN_ZOOM, prevZoom / 1.25);
      const constrainedPan = constrainPan(pan, newZoom);
      setPan(constrainedPan);
      return newZoom;
    });
  }, [pan, constrainPan]);

  const handleZoomToLevel = useCallback((level: number) => {
    setZoom(level);
    if (level === 1) {
      setPan({ x: 0, y: 0 });
    } else {
      const constrainedPan = constrainPan(pan, level);
      setPan(constrainedPan);
    }
  }, [pan, constrainPan]);

  // Mouse events
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (zoom <= 1) return;
    
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
    setPanStart(pan);
    e.preventDefault();
  }, [zoom, pan]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging || zoom <= 1) return;

    const deltaX = e.clientX - dragStart.x;
    const deltaY = e.clientY - dragStart.y;
    
    const newPan = {
      x: panStart.x + deltaX,
      y: panStart.y + deltaY
    };

    const constrainedPan = constrainPan(newPan, zoom);
    setPan(constrainedPan);
  }, [isDragging, dragStart, panStart, zoom, constrainPan]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Wheel zoom
  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    const newZoom = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, zoom + delta));
    
    setZoom(newZoom);
    const constrainedPan = constrainPan(pan, newZoom);
    setPan(constrainedPan);
  }, [zoom, pan, constrainPan]);

  // Touch events
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    const touches = e.touches;
    
    if (touches.length === 1) {
      // Single touch - start pan
      if (zoom > 1) {
        setIsDragging(true);
        setDragStart({ x: touches[0].clientX, y: touches[0].clientY });
        setPanStart(pan);
      }
    } else if (touches.length === 2) {
      // Two touches - start pinch zoom
      const touch1 = touches[0];
      const touch2 = touches[1];
      const distance = Math.sqrt(
        Math.pow(touch2.clientX - touch1.clientX, 2) +
        Math.pow(touch2.clientY - touch1.clientY, 2)
      );
      
      setTouchState({
        startX: (touch1.clientX + touch2.clientX) / 2,
        startY: (touch1.clientY + touch2.clientY) / 2,
        startDistance: distance,
        startZoom: zoom,
        startPan: pan
      });
    }
    
    e.preventDefault();
  }, [zoom, pan]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    const touches = e.touches;
    
    if (touches.length === 1 && isDragging && zoom > 1) {
      // Single touch pan
      const deltaX = touches[0].clientX - dragStart.x;
      const deltaY = touches[0].clientY - dragStart.y;
      
      const newPan = {
        x: panStart.x + deltaX,
        y: panStart.y + deltaY
      };

      const constrainedPan = constrainPan(newPan, zoom);
      setPan(constrainedPan);
    } else if (touches.length === 2 && touchState) {
      // Two touch pinch zoom
      const touch1 = touches[0];
      const touch2 = touches[1];
      const distance = Math.sqrt(
        Math.pow(touch2.clientX - touch1.clientX, 2) +
        Math.pow(touch2.clientY - touch1.clientY, 2)
      );
      
      const scale = distance / touchState.startDistance;
      const newZoom = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, touchState.startZoom * scale));
      
      setZoom(newZoom);
      const constrainedPan = constrainPan(touchState.startPan, newZoom);
      setPan(constrainedPan);
    }
    
    e.preventDefault();
  }, [isDragging, zoom, dragStart, panStart, touchState, constrainPan]);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 0) {
      setIsDragging(false);
      setTouchState(null);
    }
  }, []);

  // Mouse event listeners
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const getCurrentZoomLevel = () => {
    return Math.round(zoom * 100);
  };

  if (!isOpen) return null;

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-sm flex items-center justify-center select-none"
      onClick={handleBackdropClick}
    >
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/80 to-transparent p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-anton text-xl text-white uppercase tracking-wide mb-1">
              {projectTitle}
            </h2>
            <p className="font-inter text-sm text-white/70">
              {currentIndex + 1} de {images.length}
            </p>
          </div>
          
          <div className="flex items-center space-x-2">
            {/* Zoom Level Indicator */}
            <div className="bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1 border border-white/20">
              <span className="font-inter text-sm text-white">
                {getCurrentZoomLevel()}%
              </span>
            </div>

            {/* Zoom Controls */}
            <Button
              onClick={zoomOut}
              variant="ghost"
              size="sm"
              disabled={zoom <= MIN_ZOOM}
              className="text-white hover:text-mimicbox-yellow hover:bg-white/10 disabled:opacity-50"
            >
              <ZoomOut className="w-5 h-5" />
            </Button>

            <Button
              onClick={zoomIn}
              variant="ghost"
              size="sm"
              disabled={zoom >= MAX_ZOOM}
              className="text-white hover:text-mimicbox-yellow hover:bg-white/10 disabled:opacity-50"
            >
              <ZoomIn className="w-5 h-5" />
            </Button>

            {/* Reset Button */}
            <Button
              onClick={resetTransform}
              variant="ghost"
              size="sm"
              className="text-white hover:text-mimicbox-yellow hover:bg-white/10"
            >
              <RotateCcw className="w-5 h-5" />
            </Button>

            {/* Close Button */}
            <Button
              onClick={onClose}
              variant="ghost"
              size="sm"
              className="text-white hover:text-mimicbox-yellow hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Image Container */}
      <div className="relative w-full h-full flex items-center justify-center p-16 overflow-hidden">
        {/* Navigation Buttons */}
        {images.length > 1 && (
          <>
            <Button
              onClick={handlePrevious}
              variant="ghost"
              size="lg"
              className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 hover:text-mimicbox-yellow border border-white/20 backdrop-blur-sm z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            
            <Button
              onClick={handleNext}
              variant="ghost"
              size="lg"
              className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 hover:text-mimicbox-yellow border border-white/20 backdrop-blur-sm z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </>
        )}

        {/* Image */}
        <div 
          className="relative transition-transform duration-200 ease-out"
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
            cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in'
          }}
          onMouseDown={handleMouseDown}
          onWheel={handleWheel}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onClick={zoom === 1 ? zoomIn : undefined}
        >
          <ImageWithFallback
            src={images[currentIndex]}
            alt={`${projectTitle} - Image ${currentIndex + 1}`}
            className="max-w-[90vw] max-h-[80vh] object-contain pointer-events-none"
            draggable={false}
          />
        </div>
      </div>

      {/* Zoom Level Buttons */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10">
        <div className="flex space-x-2 bg-black/50 backdrop-blur-sm rounded-lg p-2 border border-white/20">
          {ZOOM_LEVELS.map((level) => (
            <Button
              key={level}
              onClick={() => handleZoomToLevel(level)}
              variant="ghost"
              size="sm"
              className={`text-xs px-3 py-1 ${
                Math.abs(zoom - level) < 0.1
                  ? 'text-mimicbox-yellow bg-mimicbox-yellow/20'
                  : 'text-white hover:text-mimicbox-yellow hover:bg-white/10'
              }`}
            >
              {level === 1 ? 'Fit' : `${Math.round(level * 100)}%`}
            </Button>
          ))}
        </div>
      </div>

      {/* Bottom Thumbnail Strip */}
      

      {/* Instructions */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 text-center z-10 pointer-events-none">
        <p className="font-inter text-xs text-white/50">
          {zoom > 1 ? 'Arraste para mover' : 'Clique para ampliar'} • Scroll/Pinch para zoom • Teclas: +/- para zoom, 0 para reset
        </p>
      </div>
    </div>
  );
}