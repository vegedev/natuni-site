# Configuração dos Vídeos de Depoimentos

## Arquivos Necessários

Para que a seção de depoimentos em vídeo funcione corretamente, você precisa adicionar os seguintes arquivos:

### Thumbnails dos Vídeos (Imagens)
Adicione estas imagens na pasta `assets/images/`:

1. **video-thumb-1.jpg** - Thumbnail do depoimento da Maria Silva
2. **video-thumb-2.jpg** - Thumbnail do depoimento do João Santos  
3. **video-thumb-3.jpg** - Thumbnail do depoimento da Ana Costa

**Especificações das imagens:**
- Formato: JPG ou PNG
- Tamanho recomendado: 400x300 pixels
- Qualidade: Alta resolução
- Conteúdo: Foto do cliente ou frame do vídeo

### Vídeos dos Depoimentos
Crie a pasta `assets/videos/` e adicione:

1. **depoimento-maria.mp4** - Vídeo da Maria Silva
2. **depoimento-joao.mp4** - Vídeo do João Santos
3. **depoimento-ana.mp4** - Vídeo da Ana Costa

**Especificações dos vídeos:**
- Formato: MP4 (H.264)
- Duração: 30-60 segundos
- Resolução: 720p ou 1080p
- Tamanho: Máximo 10MB por vídeo

## Como Personalizar

### Adicionar Mais Depoimentos

1. **No HTML** (`index.html`):
   - Copie um bloco `.video-slide` existente
   - Altere o `onclick="openVideoModal('video4')"` para um novo ID
   - Atualize as informações do cliente

2. **No JavaScript** (`assets/js/script.js`):
   - Adicione uma nova entrada no objeto `videoData`:
   ```javascript
   'video4': {
       src: 'assets/videos/depoimento-cliente4.mp4',
       title: 'Depoimento - Nome do Cliente'
   }
   ```

3. **Adicione um novo dot** no carrossel:
   ```html
   <span class="carousel-dot" onclick="currentSlide(4)"></span>
   ```

### Alterar Informações dos Clientes

Edite diretamente no HTML:
- `.video-client-name` - Nome do cliente
- `.video-client-location` - Cidade/Estado
- `.video-testimonial-text` - Texto do depoimento
- `alt` da imagem - Descrição para acessibilidade

## Funcionalidades

### Carrossel Automático
- Troca de slide a cada 8 segundos
- Pode ser pausado ao interagir com os controles

### Controles
- **Setas**: Navegação manual
- **Dots**: Ir direto para um slide específico
- **Touch/Swipe**: Suporte para dispositivos móveis

### Modal de Vídeo
- Abre em tela cheia ao clicar no botão play
- Fecha com ESC ou clicando fora do vídeo
- Controles nativos do navegador

### Responsividade
- Desktop: Mostra 3 vídeos lado a lado
- Mobile: Mostra 1 vídeo por vez com navegação

## Dicas de Produção

### Para os Vídeos:
1. **Iluminação**: Use luz natural ou ring light
2. **Áudio**: Ambiente silencioso, fale claramente
3. **Enquadramento**: Busto ou meio corpo
4. **Duração**: 30-45 segundos é ideal
5. **Roteiro**: Prepare pontos principais antes de gravar

### Para os Thumbnails:
1. **Expressão**: Sorrisos genuínos funcionam melhor
2. **Qualidade**: Use a melhor câmera disponível
3. **Fundo**: Prefira fundos neutros ou desfocados
4. **Texto**: Evite texto sobre a imagem

## Otimização

### Performance:
- Comprima os vídeos antes de fazer upload
- Use ferramentas como HandBrake ou FFmpeg
- Mantenha qualidade boa mas tamanho pequeno

### SEO:
- Use nomes descritivos para os arquivos
- Adicione `alt` text nas imagens
- Considere adicionar legendas nos vídeos

## Troubleshooting

### Vídeo não carrega:
1. Verifique se o arquivo existe no caminho correto
2. Confirme se o formato é MP4
3. Teste se o arquivo não está corrompido

### Thumbnail não aparece:
1. Verifique o caminho da imagem
2. Confirme se o formato é JPG ou PNG
3. Teste se a imagem não está corrompida

### Carrossel não funciona:
1. Verifique se o JavaScript está carregando
2. Abra o console do navegador para ver erros
3. Confirme se os IDs dos elementos estão corretos