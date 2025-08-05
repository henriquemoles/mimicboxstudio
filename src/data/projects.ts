export interface Project {
  id: string;
  title: string;
  category: string[];
  description: string;
  detailedDescription: {
    pt: string;
    en: string;
  };
  image: string;
  tags: string[];
  // Detailed information
  overview: {
    pt: string;
    en: string;
  };
  challenge: {
    pt: string;
    en: string;
  };
  solution: {
    pt: string;
    en: string;
  };
  technologies: string[];
  duration: string;
  team: string[];
  client: string;
  year: string;
  gallery: string[];
  process: {
    pt: string[];
    en: string[];
  };
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Splash Art - Nidalee',
    category: ['illustration'],
    tags: ['ilustration'],
    client: 'Personal Project',
    year: '2023',
    duration: '3 weeks',
    description: 'Splash Art Illustration from league of legends',
    technologies: ['Photoshop'],
    team: ['Pedro - 2D Artist'],
    detailedDescription: {
      pt: 'Este projeto representou um marco importante em nossa jornada como estúdio, sendo nossa primeira grande colaboração com a Dire Wolf Digital. O guerreiro criado não era apenas uma ilustração, mas a alma visual de um personagem que os jogadores encontrariam repetidamente ao longo de sua jornada no jogo.\n\nO processo criativo envolveu múltiplas iterações onde exploramos desde armaduras clássicas medievais até elementos mais fantásticos. A versão final conseguiu equilibrar perfeitamente a necessidade de impacto visual para marketing com a funcionalidade dentro do jogo, resultando em uma das nossas peças mais reconhecidas até hoje.',
      en: 'Illustration focused on developing development and better learning the aesthetics of Legends of Runeterra.'
    },
    image:   '/assets/projects/nidalee/nida1.jpg?w=600&h=400&fit=crop&auto=format',
    overview: {
      pt: 'Este projeto envolveu a criação de uma splash art épica para um personagem guerreiro em um card game fantasy. O objetivo era capturar a essência heroica e poderosa do personagem, transmitindo sua força e determinação através de uma composição dinâmica e cores vibrantes.',
      en: 'This project involved creating an epic splash art for a warrior character in a fantasy card game. The goal was to capture the heroic and powerful essence of the character, conveying their strength and determination through dynamic composition and vibrant colors.'
    },
    challenge: {
      pt: 'O principal desafio foi equilibrar detalhes intrincados da armadura com legibilidade em tamanhos reduzidos, mantendo o impacto visual necessário para um card game competitivo.',
      en: 'The main challenge was balancing intricate armor details with readability at reduced sizes, while maintaining the visual impact necessary for a competitive card game.'
    },
    solution: {
      pt: 'Desenvolvemos uma abordagem de iluminação dramática com foco no rosto e arma do personagem, usando contrastes fortes e uma paleta de cores limitada mas impactante. A composição foi estruturada para direcionar o olhar do jogador.',
      en: 'We developed a dramatic lighting approach focusing on the character\'s face and weapon, using strong contrasts and a limited but impactful color palette. The composition was structured to guide the player\'s eye.'
    },
    gallery: [
  '/assets/projects/nidalee/nida1.jpg?w=500&h=500&fit=crop',
  '/assets/projects/nidalee/nida2.jpg?w=500&h=500&fit=clip',
  '/assets/projects/nidalee/nida3.jpg?w=500&h=500&fit=clip',
    ],
    process: {
      pt: [
        'Pesquisa de referências e desenvolvimento do conceito inicial',
        'Criação de thumbnails e exploração de composições',
        'Desenvolvimento do sketch detalhado',
        'Aplicação de cores base e estabelecimento da paleta',
        'Refinamento de detalhes e iluminação final',
        'Testes de legibilidade em diferentes tamanhos'
      ],
      en: [
        'Reference research and initial concept development',
        'Thumbnail creation and composition exploration',
        'Detailed sketch development',
        'Base color application and palette establishment',
        'Detail refinement and final lighting',
        'Readability tests at different sizes'
      ]
    }
  },
    {
    id: 'project-2',
    title: 'Alice Samurai',
    category: ['environment','concept'],
    tags: ['Concept Art', 'Environment'],
    client: 'Personal',
    year: '2024',
    duration: '12 semanas',
    description: 'WorldBuilding Development: Characters and Scenarios',
    technologies: ['Photoshop', 'Blender'],
    team: ['Pedro - 2D/3D Artist'],
    detailedDescription: {
      pt:'',
      en: 'This project explores the creation of a fictional universe inspired by the story of Alice in Wonderland, but with an Asian theme. The characters are reimagined and inserted into a 3D environment created with Blender and finalized with Photoshop.'
    },
    image:   '/assets/projects/AliceSamurai/alice1.png?w=600&h=400&fit=crop',
    overview: {
      pt: 'Este projeto envolveu a criação de uma splash art épica para um personagem guerreiro em um card game fantasy. O objetivo era capturar a essência heroica e poderosa do personagem, transmitindo sua força e determinação através de uma composição dinâmica e cores vibrantes.',
      en: 'This project involved creating an epic splash art for a warrior character in a fantasy card game. The goal was to capture the heroic and powerful essence of the character, conveying their strength and determination through dynamic composition and vibrant colors.'
    },
    challenge: {
      pt: 'O principal desafio foi equilibrar detalhes intrincados da armadura com legibilidade em tamanhos reduzidos, mantendo o impacto visual necessário para um card game competitivo.',
      en: 'The main challenge was balancing intricate armor details with readability at reduced sizes, while maintaining the visual impact necessary for a competitive card game.'
    },
    solution: {
      pt: 'Desenvolvemos uma abordagem de iluminação dramática com foco no rosto e arma do personagem, usando contrastes fortes e uma paleta de cores limitada mas impactante. A composição foi estruturada para direcionar o olhar do jogador.',
      en: 'We developed a dramatic lighting approach focusing on the character\'s face and weapon, using strong contrasts and a limited but impactful color palette. The composition was structured to guide the player\'s eye.'
    },
    gallery: [
  '/assets/projects/AliceSamurai/alice1.png',
    '/assets/projects/AliceSamurai/alice2.png',
      '/assets/projects/AliceSamurai/alice3.png',
        '/assets/projects/AliceSamurai/alice4.jpg',
          '/assets/projects/AliceSamurai/alice5.png',
            '/assets/projects/AliceSamurai/alice6.jpg',
              '/assets/projects/AliceSamurai/alice7.png',
                '/assets/projects/AliceSamurai/alice8.png',
                  '/assets/projects/AliceSamurai/alice9.png',
    ],
    process: {
      pt: [
        'Pesquisa de referências e desenvolvimento do conceito inicial',
        'Criação de thumbnails e exploração de composições',
        'Desenvolvimento do sketch detalhado',
        'Aplicação de cores base e estabelecimento da paleta',
        'Refinamento de detalhes e iluminação final',
        'Testes de legibilidade em diferentes tamanhos'
      ],
      en: [
        'Reference research and initial concept development',
        'Thumbnail creation and composition exploration',
        'Detailed sketch development',
        'Base color application and palette establishment',
        'Detail refinement and final lighting',
        'Readability tests at different sizes'
      ]
    }
  },
      {
    id: 'project-3',
    title: 'SW MECHA',
    category: ['concept', 'illustration'],
    tags: ['concept', 'illustration'],
    client: 'Personal',
    year: '2024/2025',
    duration: '12 semanas',
    description: 'WorldBuilding Development: Characters and Scenarios',
    technologies: ['Photoshop'],
    team: ['Pedro - 2D Artist'],
    detailedDescription: {
      pt:'',
      en: 'In a futuristic world, there is a society based on mining through the use of mechs. SW, abandoned and raised by 7 dwarves in a mecha workshop, grows up to become a pilot. Inspired by Snow White, this project merges fairy tale with sci-fi.'
    },
    image: '/assets/projects/SWMecha/sw1.png?w=600&h=400&fit=crop',
    overview: {
      pt: 'Este projeto envolveu a criação de uma splash art épica para um personagem guerreiro em um card game fantasy. O objetivo era capturar a essência heroica e poderosa do personagem, transmitindo sua força e determinação através de uma composição dinâmica e cores vibrantes.',
      en: 'This project involved creating an epic splash art for a warrior character in a fantasy card game. The goal was to capture the heroic and powerful essence of the character, conveying their strength and determination through dynamic composition and vibrant colors.'
    },
    challenge: {
      pt: 'O principal desafio foi equilibrar detalhes intrincados da armadura com legibilidade em tamanhos reduzidos, mantendo o impacto visual necessário para um card game competitivo.',
      en: 'The main challenge was balancing intricate armor details with readability at reduced sizes, while maintaining the visual impact necessary for a competitive card game.'
    },
    solution: {
      pt: 'Desenvolvemos uma abordagem de iluminação dramática com foco no rosto e arma do personagem, usando contrastes fortes e uma paleta de cores limitada mas impactante. A composição foi estruturada para direcionar o olhar do jogador.',
      en: 'We developed a dramatic lighting approach focusing on the character\'s face and weapon, using strong contrasts and a limited but impactful color palette. The composition was structured to guide the player\'s eye.'
    },
    gallery: [
      '/assets/projects/SWMecha/sw1.png',
      '/assets/projects/SWMecha/sw2.png',
      '/assets/projects/SWMecha/sw3.png',
      '/assets/projects/SWMecha/sw4.png',
      '/assets/projects/SWMecha/sw5.png',
      '/assets/projects/SWMecha/sw6.png',
      '/assets/projects/SWMecha/sw7.png',
      '/assets/projects/SWMecha/sw8.png',
    ],
    process: {
      pt: [
        'Pesquisa de referências e desenvolvimento do conceito inicial',
        'Criação de thumbnails e exploração de composições',
        'Desenvolvimento do sketch detalhado',
        'Aplicação de cores base e estabelecimento da paleta',
        'Refinamento de detalhes e iluminação final',
        'Testes de legibilidade em diferentes tamanhos'
      ],
      en: [
        'Reference research and initial concept development',
        'Thumbnail creation and composition exploration',
        'Detailed sketch development',
        'Base color application and palette establishment',
        'Detail refinement and final lighting',
        'Readability tests at different sizes'
      ]
    }
  },
  {
    id: 'project-4',
    title: 'Popota',
    category: ['concept'],
    tags: ['Character Design'],
    client: 'Nebula',
    year: '2024',
    duration: '2 weeks',
    description: 'Character concepts for animation',
    technologies: ['Photoshop'],
    team: ['Hygor Domingues'],
    detailedDescription: {
      pt: '',
      en: 'Developed character concept art for a Christmas commercial by the Portuguese supermarket Continente. The project included designing an outfit inspired by singer Ana Castela, for the mascot Popota. Here is the video of the commercial: https://www.youtube.com/watch?v=EapdZAiEfPY&list=PLqdfFpDax4_4PtMZuCi5Y0vP6wg2tjlTa&index=2'
    },
    image: '/assets/projects/Popota/Nebula 1.png',
    overview: {
      pt: 'Este projeto envolveu a criação de uma splash art épica para um personagem guerreiro em um card game fantasy. O objetivo era capturar a essência heroica e poderosa do personagem, transmitindo sua força e determinação através de uma composição dinâmica e cores vibrantes.',
      en: 'This project involved creating an epic splash art for a warrior character in a fantasy card game. The goal was to capture the heroic and powerful essence of the character, conveying their strength and determination through dynamic composition and vibrant colors.'
    },
    challenge: {
      pt: 'O principal desafio foi equilibrar detalhes intrincados da armadura com legibilidade em tamanhos reduzidos, mantendo o impacto visual necessário para um card game competitivo.',
      en: 'The main challenge was balancing intricate armor details with readability at reduced sizes, while maintaining the visual impact necessary for a competitive card game.'
    },
    solution: {
      pt: 'Desenvolvemos uma abordagem de iluminação dramática com foco no rosto e arma do personagem, usando contrastes fortes e uma paleta de cores limitada mas impactante. A composição foi estruturada para direcionar o olhar do jogador.',
      en: 'We developed a dramatic lighting approach focusing on the character\'s face and weapon, using strong contrasts and a limited but impactful color palette. The composition was structured to guide the player\'s eye.'
    },
    gallery: [
      '/assets/projects/Popota/Nebula 1.png',
      '/assets/projects/Popota/Nebula 2.png',
      '/assets/projects/Popota/Nebula 3.png',
      '/assets/projects/Popota/Nebula 4.png',
    ],
    process: {
      pt: [
        'Pesquisa de referências e desenvolvimento do conceito inicial',
        'Criação de thumbnails e exploração de composições',
        'Desenvolvimento do sketch detalhado',
        'Aplicação de cores base e estabelecimento da paleta',
        'Refinamento de detalhes e iluminação final',
        'Testes de legibilidade em diferentes tamanhos'
      ],
      en: [
        'Reference research and initial concept development',
        'Thumbnail creation and composition exploration',
        'Detailed sketch development',
        'Base color application and palette establishment',
        'Detail refinement and final lighting',
        'Readability tests at different sizes'
      ]
    }
    
  },
    {
    id: 'project-5',
    title: 'Aetherprotocol',
    category: ['illustration'],
    tags: ['Nft', 'Card Game'],
    client: 'Aetherprotocol',
    year: '2023',
    description: 'Illustration for a card game',
    technologies: ['Photoshop'],
    team: ['Hygor'],
    duration: '2 weeks',
    detailedDescription: {
      pt: '',
      en: 'Developed character concept art for a Christmas commercial by the Portuguese supermarket Continente. The project included designing an outfit inspired by singer Ana Castela, for the mascot Popota.'
    },
    image:  '/assets/projects/Aetherprotocol/1.png?w=600&h=400&fit=crop',
    overview: {
      pt: 'Este projeto envolveu a criação de uma splash art épica para um personagem guerreiro em um card game fantasy. O objetivo era capturar a essência heroica e poderosa do personagem, transmitindo sua força e determinação através de uma composição dinâmica e cores vibrantes.',
      en: 'This project involved creating an epic splash art for a warrior character in a fantasy card game. The goal was to capture the heroic and powerful essence of the character, conveying their strength and determination through dynamic composition and vibrant colors.'
    },
    challenge: {
      pt: 'O principal desafio foi equilibrar detalhes intrincados da armadura com legibilidade em tamanhos reduzidos, mantendo o impacto visual necessário para um card game competitivo.',
      en: 'The main challenge was balancing intricate armor details with readability at reduced sizes, while maintaining the visual impact necessary for a competitive card game.'
    },
    solution: {
      pt: 'Desenvolvemos uma abordagem de iluminação dramática com foco no rosto e arma do personagem, usando contrastes fortes e uma paleta de cores limitada mas impactante. A composição foi estruturada para direcionar o olhar do jogador.',
      en: 'We developed a dramatic lighting approach focusing on the character\'s face and weapon, using strong contrasts and a limited but impactful color palette. The composition was structured to guide the player\'s eye.'
    },
    gallery: [
      '/assets/projects/Aetherprotocol/1.png',
      '/assets/projects/Aetherprotocol/2.png',
      '/assets/projects/Aetherprotocol/3.png',
    ],
    process: {
      pt: [
        'Pesquisa de referências e desenvolvimento do conceito inicial',
        'Criação de thumbnails e exploração de composições',
        'Desenvolvimento do sketch detalhado',
        'Aplicação de cores base e estabelecimento da paleta',
        'Refinamento de detalhes e iluminação final',
        'Testes de legibilidade em diferentes tamanhos'
      ],
      en: [
        'Reference research and initial concept development',
        'Thumbnail creation and composition exploration',
        'Detailed sketch development',
        'Base color application and palette establishment',
        'Detail refinement and final lighting',
        'Readability tests at different sizes'
      ]
    }
  },
   {
        id: 'project-6',
    title: 'Fae Village',
    category: ['gameArt'],
    tags: ['Board Game'],
    client: 'Gravitation Games',
    year: '2024',
    description: 'Illustrations and assets for a board game',
    technologies: ['Photoshop'],
    team: ['Hygor'],
    duration: '2 weeks',
    detailedDescription: {
      pt: '',
      en: 'Created a full set of illustrations and assets for Fae Village, a lighthearted, family-friendly resource management board game, featuring a colorful and whimsical visual style.'
    },
    image:  '/assets/projects/FaeVillage/BoxCover.jpg?w=600&h=400&fit=crop',
    overview: {
      pt: 'Este projeto envolveu a criação de uma splash art épica para um personagem guerreiro em um card game fantasy. O objetivo era capturar a essência heroica e poderosa do personagem, transmitindo sua força e determinação através de uma composição dinâmica e cores vibrantes.',
      en: 'This project involved creating an epic splash art for a warrior character in a fantasy card game. The goal was to capture the heroic and powerful essence of the character, conveying their strength and determination through dynamic composition and vibrant colors.'
    },
    challenge: {
      pt: 'O principal desafio foi equilibrar detalhes intrincados da armadura com legibilidade em tamanhos reduzidos, mantendo o impacto visual necessário para um card game competitivo.',
      en: 'The main challenge was balancing intricate armor details with readability at reduced sizes, while maintaining the visual impact necessary for a competitive card game.'
    },
    solution: {
      pt: 'Desenvolvemos uma abordagem de iluminação dramática com foco no rosto e arma do personagem, usando contrastes fortes e uma paleta de cores limitada mas impactante. A composição foi estruturada para direcionar o olhar do jogador.',
      en: 'We developed a dramatic lighting approach focusing on the character\'s face and weapon, using strong contrasts and a limited but impactful color palette. The composition was structured to guide the player\'s eye.'
    },
    gallery: [
      '/assets/projects/FaeVillage/BoxCover.jpg',
      '/assets/projects/FaeVillage/press1.png',
      '/assets/projects/FaeVillage/press2.png',
      '/assets/projects/FaeVillage/mockup.png',
      '/assets/projects/FaeVillage/buildings 1.png',
      '/assets/projects/FaeVillage/buildings 2.png',
      '/assets/projects/FaeVillage/buildings 3.png',
      '/assets/projects/FaeVillage/buildings 4.png',
    ],
    process: {
      pt: [
        'Pesquisa de referências e desenvolvimento do conceito inicial',
        'Criação de thumbnails e exploração de composições',
        'Desenvolvimento do sketch detalhado',
        'Aplicação de cores base e estabelecimento da paleta',
        'Refinamento de detalhes e iluminação final',
        'Testes de legibilidade em diferentes tamanhos'
      ],
      en: [
        'Reference research and initial concept development',
        'Thumbnail creation and composition exploration',
        'Detailed sketch development',
        'Base color application and palette establishment',
        'Detail refinement and final lighting',
        'Readability tests at different sizes'
      ]
    }
  }
];

export async function getProjectById(id: string): Promise<Project | null> {
  const project = projects.find(p => p.id === id);
  return project ?? null;
}

export function getRelatedProjects(
  currentId: string,
  tags: string[],
  limit: number = 3
): Project[] {
  const currentTags = new Set(tags);
  return projects
    .filter(p => p.id !== currentId && p.tags.some(t => currentTags.has(t)))
    .slice(0, limit);
}

export function getNextProject(currentId: string): Project | undefined {
  const currentIndex = projects.findIndex(project => project.id === currentId);
  if (currentIndex === -1) return undefined;
  return projects[(currentIndex + 1) % projects.length];
}

export function getPreviousProject(currentId: string): Project | undefined {
  const currentIndex = projects.findIndex(project => project.id === currentId);
  if (currentIndex === -1) return undefined;
  return projects[(currentIndex - 1 + projects.length) % projects.length];
}
export async function getAllProjectsIds(): Promise<string[]> {
  return projects.map(p => p.id);
}