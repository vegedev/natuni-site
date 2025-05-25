# 🎨 Guia de Personalização - Site Natuni

## 📱 1. Configurar WhatsApp

### Alterar Número do WhatsApp
No arquivo `config.js`, linha 6:
```javascript
number: "5511999999999", // Substitua pelo seu número real
```

**Formato correto:** `55` + `DDD` + `número`
- Exemplo: `5511987654321` (São Paulo)
- Exemplo: `5521987654321` (Rio de Janeiro)

### Personalizar Mensagens
No arquivo `config.js`, seção `whatsappMessages`:
```javascript
whatsappMessages: {
    magnati: "Olá! Gostaria de comprar o Magnati",
    visionati: "Olá! Gostaria de comprar o Visionati",
    // ... personalize as mensagens
}
```

## 🎨 2. Personalizar Cores

### Cores Principais
No arquivo `assets/css/style.css`, seção `:root`:
```css
:root {
    --primary-color: #2d5a27;      /* Verde escuro principal */
    --secondary-color: #7cb342;     /* Verde claro */
    --accent-color: #ff8f00;        /* Laranja de destaque */
    --text-dark: #2c3e50;          /* Texto escuro */
    --text-light: #6c757d;         /* Texto claro */
}
```

### Sugestões de Paletas Alternativas

**Paleta Azul Natural:**
```css
--primary-color: #1e3a8a;
--secondary-color: #3b82f6;
--accent-color: #f59e0b;
```

**Paleta Terra:**
```css
--primary-color: #92400e;
--secondary-color: #d97706;
--accent-color: #059669;
```

## 📧 3. Configurar E-mail e Contatos

### E-mail Principal
No arquivo `config.js`:
```javascript
email: "contato@natuni.com.br",
```

### Horários de Atendimento
```javascript
businessHours: {
    weekdays: "Segunda a Sexta: 8h às 18h",
    saturday: "Sábado: 8h às 12h",
    sunday: "Domingo: Fechado"
}
```

## 🌐 4. Redes Sociais

### Configurar Links
No arquivo `config.js`:
```javascript
socialMedia: {
    instagram: "https://instagram.com/natuni",
    facebook: "https://facebook.com/natuni",
    youtube: "https://youtube.com/natuni"
}
```

### Adicionar Novas Redes
No arquivo `index.html`, seção footer:
```html
<div class="social-links">
    <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
    <a href="#" class="social-link"><i class="fab fa-facebook"></i></a>
    <a href="#" class="social-link"><i class="fab fa-tiktok"></i></a> <!-- Nova rede -->
</div>
```

## 💰 5. Preços e Produtos

### Atualizar Preços
No arquivo `config.js`, seção `products`:
```javascript
magnati: {
    name: "Magnati",
    price: 89.90,           // Preço atual
    oldPrice: 109.90,       // Preço anterior (opcional)
    installments: "3x de R$ 29,97",
    // ...
}
```

### Adicionar Novo Produto
```javascript
novoSuplemento: {
    name: "Novo Suplemento",
    price: 99.90,
    description: "Descrição do produto",
    benefits: [
        "Benefício 1",
        "Benefício 2",
        "Benefício 3"
    ]
}
```

## 🖼️ 6. Imagens e Logo

### Tamanhos Recomendados
- **Logo principal:** 200x60px (PNG transparente)
- **Logo footer:** 150x45px (PNG branco transparente)
- **Produtos principais:** 600x400px (JPG alta qualidade)
- **Mini produtos:** 400x300px (JPG)
- **Hero image:** 800x600px (PNG transparente)
- **Testimoniais:** 100x100px (JPG circular)

### Otimização de Imagens
Use ferramentas como:
- **TinyPNG** - Compressão sem perda de qualidade
- **Squoosh** - Otimização avançada
- **Photoshop** - "Save for Web"

## 📝 7. Textos e Conteúdo

### Título Principal (Hero)
No arquivo `index.html`:
```html
<h1 class="hero-title">
    Cuide da sua <span class="text-primary">saúde</span> 
    com produtos <span class="text-secondary">naturais</span>
</h1>
```

### Descrição da Empresa
```html
<p class="hero-subtitle">
    Sua nova descrição da empresa aqui...
</p>
```

### Sobre a Empresa
Seção `#about`:
```html
<p class="section-subtitle">
    História e missão da sua empresa...
</p>
```

## 🔍 8. SEO e Meta Tags

### Título da Página
```html
<title>Natuni - Produtos Naturais para sua Saúde</title>
```

### Meta Description
```html
<meta name="description" content="Sua descrição otimizada para SEO">
```

### Palavras-chave
No arquivo `config.js`:
```javascript
seo: {
    keywords: "produtos naturais, suplementos, magnésio, vitaminas, saúde natural"
}
```

## 📊 9. Analytics e Tracking

### Google Analytics
No arquivo `config.js`:
```javascript
analytics: {
    googleAnalytics: "G-XXXXXXXXXX", // Seu ID do GA4
}
```

### Adicionar ao HTML (antes do `</head>`):
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🎯 10. Call-to-Actions (CTAs)

### Personalizar Botões
```html
<!-- Botão principal -->
<a href="#products" class="btn btn-primary btn-lg">
    Seu Texto Aqui
</a>

<!-- Botão WhatsApp -->
<a href="LINK_WHATSAPP" class="btn btn-outline-light btn-lg">
    <i class="fab fa-whatsapp"></i> Seu Texto
</a>
```

## 📱 11. Responsividade

### Testar em Diferentes Dispositivos
- **Desktop:** 1920x1080, 1366x768
- **Tablet:** 768x1024, 1024x768
- **Mobile:** 375x667, 414x896, 360x640

### Ajustar Breakpoints
No CSS:
```css
/* Mobile */
@media (max-width: 576px) { }

/* Tablet */
@media (max-width: 768px) { }

/* Desktop */
@media (max-width: 992px) { }
```

## 🚀 12. Performance

### Otimizações Implementadas
- ✅ CSS e JS minificados
- ✅ Imagens otimizadas
- ✅ Lazy loading
- ✅ CDN para bibliotecas
- ✅ Compressão GZIP (servidor)

### Ferramentas de Teste
- **PageSpeed Insights**
- **GTmetrix**
- **WebPageTest**

## 🔒 13. Segurança

### Headers de Segurança (configurar no servidor)
```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
```

### HTTPS
Sempre use HTTPS em produção.

## 📞 14. Suporte Técnico

### Problemas Comuns

**WhatsApp não abre:**
- Verifique o formato do número
- Teste em diferentes dispositivos

**Imagens não carregam:**
- Verifique os caminhos dos arquivos
- Confirme se as imagens existem

**Layout quebrado:**
- Verifique se todos os arquivos CSS estão carregando
- Teste em diferentes navegadores

### Contato para Suporte
Para dúvidas técnicas ou customizações avançadas, entre em contato.

---

**💡 Dica:** Sempre faça backup dos arquivos antes de fazer alterações!