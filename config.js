// ===== CONFIGURAÇÕES DO SITE NATUNI =====

const NATUNI_CONFIG = {
    // Informações de Contato
    whatsapp: {
        number: "5511988128903", // Substitua pelo número real
        defaultMessage: "Olá! Gostaria de saber mais sobre os produtos Natuni"
    },
    
    email: "contato@natuni.com.br",
    
    // Horário de Atendimento
    businessHours: {
        weekdays: "Segunda a Sexta: 8h às 18h",
        saturday: "Sábado: 8h às 12h",
        sunday: "Domingo: Fechado"
    },
    
    // Redes Sociais
    socialMedia: {
        instagram: "https://instagram.com/natuni.suplementos",
        facebook: "https://facebook.com/natuni",
        youtube: "https://youtube.com/natuni"
    },
    
    // Produtos
    products: {
        magnati: {
            name: "Magnati",
            price: 249.90,
            oldPrice: 299.99,
            installments: "10x de R$ 24,99",
            description: "Suplemento de magnésio de alta absorção",
            benefits: [
                "Reduz cãibras musculares",
                "Melhora a qualidade do sono",
                "Fortalece ossos e dentes",
                "Diminui o estresse e ansiedade"
            ],
            specs: {
                composition: "Magnésio Dimalato 500mg",
                presentation: "60 cápsulas",
                dosage: "2 cápsulas ao dia",
                anvisa: "123.456.789"
            }
        },
        
        visionati: {
            name: "Visionati",
            price: 129.90,
            oldPrice: 149.90,
            installments: "4x de R$ 32,48",
            description: "Complexo vitamínico para saúde dos olhos",
            benefits: [
                "Protege contra luz azul",
                "Melhora a acuidade visual",
                "Previne degeneração macular",
                "Reduz fadiga ocular"
            ],
            specs: {
                composition: "Luteína 20mg, Zeaxantina 4mg, Vitamina A",
                presentation: "30 cápsulas",
                dosage: "1 cápsula ao dia",
                anvisa: "987.654.321"
            }
        },
        
        omega3: {
            name: "Ômega 3",
            price: 79.90,
            description: "Ácidos graxos essenciais EPA e DHA",
            benefits: [
                "Saúde cardiovascular",
                "Função cerebral",
                "Anti-inflamatório natural"
            ]
        },
        
        oraProNobis: {
            name: "Ora Pro Nobis",
            price: 69.90,
            description: "Superalimento rico em proteínas",
            benefits: [
                "Rico em proteínas",
                "Vitaminas A, B, C",
                "Fortalece imunidade"
            ]
        },
        
        multivitaminico: {
            name: "Multivitamínico",
            price: 59.90,
            description: "Complexo completo de vitaminas e minerais",
            benefits: [
                "25 vitaminas e minerais",
                "Energia e disposição",
                "Suporte imunológico"
            ]
        }
    },
    
    // Configurações de SEO
    seo: {
        siteName: "Natuni - Produtos Naturais",
        description: "Natuni oferece produtos naturais de alta qualidade como Magnati e Visionati. Cuide da sua saúde com suplementos naturais.",
        keywords: "produtos naturais, suplementos, magnésio, vitaminas, saúde natural, Magnati, Visionati",
        author: "Natuni",
        ogImage: "assets/images/og-natuni.jpg"
    },
    
    // Configurações de Analytics (para futuro uso)
    analytics: {
        googleAnalytics: "G-XXXXXXXXXX", // Substitua pelo ID real
        facebookPixel: "XXXXXXXXXX",
        hotjar: "XXXXXXX"
    },
    
    // Configurações de Entrega
    shipping: {
        freeShippingMinValue: 150.00,
        estimatedDays: "5-10 dias úteis",
        regions: ["Todo o Brasil"]
    },
    
    // Mensagens WhatsApp Personalizadas
    whatsappMessages: {
        magnati: "Olá! Gostaria de comprar o Magnati",
        visionati: "Olá! Gostaria de comprar o Visionati",
        omega3: "Olá! Gostaria de comprar Ômega 3",
        oraProNobis: "Olá! Gostaria de comprar Ora Pro Nobis",
        multivitaminico: "Olá! Gostaria de comprar Multivitamínico",
        general: "Olá! Gostaria de saber mais sobre os produtos Natuni",
        support: "Olá! Preciso de ajuda para escolher um produto"
    }
};

// ===== FUNÇÕES UTILITÁRIAS =====

// Função para gerar link do WhatsApp
function generateWhatsAppLink(productKey = 'general') {
    const number = NATUNI_CONFIG.whatsapp.number;
    const message = NATUNI_CONFIG.whatsappMessages[productKey] || NATUNI_CONFIG.whatsappMessages.general;
    return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

// Função para formatar preço
function formatPrice(price) {
    return `R$ ${price.toFixed(2).replace('.', ',')}`;
}

// Função para calcular parcelas
function calculateInstallments(price, installments) {
    const installmentValue = price / installments;
    return `${installments}x de ${formatPrice(installmentValue)}`;
}

// Função para validar email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Função para validar telefone brasileiro
function validatePhone(phone) {
    const re = /^(\+55|55)?[\s-]?(\(?\d{2}\)?[\s-]?)[\s-]?(\d{4,5}[\s-]?\d{4})$/;
    return re.test(phone);
}

// ===== EXPORT PARA USO EM OUTROS ARQUIVOS =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = NATUNI_CONFIG;
}