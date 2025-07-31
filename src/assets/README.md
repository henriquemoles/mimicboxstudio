# Assets Directory

Esta pasta estava sendo usada incorretamente. As imagens são importadas diretamente das referências `figma:asset/...` nos componentes.

Os arquivos que estavam aqui continham apenas texto de referência, não imagens reais, por isso estavam quebrados.

As imagens agora são importadas corretamente usando:
```typescript
import heroImage1 from 'figma:asset/fabb1e874279664e14b0b9a16e243d937a7437d7.png';
import pedroImage from 'figma:asset/60bea9167c34a4c74713ed73294b7f7f394c6ede.png';
// etc...
```

Para futuras imagens que não sejam do Figma, use o componente `ImageWithFallback` do caminho `./components/figma/ImageWithFallback`.