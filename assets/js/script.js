// ===== SMOOTH SCROLLING FOR NAVIGATION LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.offsetTop;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// ===== FADE IN ANIMATION ON SCROLL =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add fade-in class to elements and observe them
document.addEventListener('DOMContentLoaded', function() {
    const elementsToAnimate = document.querySelectorAll('.product-card, .benefit-card, .testimonial-card, .contact-card, .feature-item, .mini-product-card');
    
    elementsToAnimate.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// ===== ACTIVE NAVIGATION HIGHLIGHT =====
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link[href^="#"]');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// ===== PRODUCT CARD HOVER EFFECTS =====
document.addEventListener('DOMContentLoaded', function() {
    const productCards = document.querySelectorAll('.product-card, .mini-product-card');
    
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// ===== WHATSAPP BUTTON ANALYTICS =====
document.addEventListener('DOMContentLoaded', function() {
    const whatsappButtons = document.querySelectorAll('a[href*="wa.me"]');
    
    whatsappButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Track WhatsApp clicks (you can integrate with Google Analytics here)
            console.log('WhatsApp button clicked:', this.textContent.trim());
            
            // Optional: Add a small animation feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
});

// ===== LOADING SCREEN (Optional) =====
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Add staggered animation to hero elements
    const heroElements = document.querySelectorAll('.hero-content > *');
    heroElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// ===== MOBILE MENU CLOSE ON LINK CLICK =====
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth < 992) {
                navbarCollapse.classList.remove('show');
            }
        });
    });
});

// ===== SCROLL TO TOP FUNCTIONALITY =====
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show/hide scroll to top button
window.addEventListener('scroll', function() {
    const scrollButton = document.querySelector('.scroll-to-top');
    if (scrollButton) {
        if (window.scrollY > 300) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    }
});

// ===== FORM VALIDATION (if you add contact forms later) =====
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ===== LAZY LOADING FOR IMAGES =====
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

// ===== PRODUCT QUICK VIEW (Future enhancement) =====
function openProductModal(productId) {
    // This function can be used to open a modal with product details
    console.log('Opening product modal for:', productId);
}

// ===== NEWSLETTER SUBSCRIPTION (Future enhancement) =====
function subscribeNewsletter(email) {
    if (validateEmail(email)) {
        // Handle newsletter subscription
        console.log('Subscribing email:', email);
        return true;
    }
    return false;
}

// ===== SEARCH FUNCTIONALITY (Future enhancement) =====
function searchProducts(query) {
    // This function can be used to implement product search
    console.log('Searching for:', query);
}

// ===== CART FUNCTIONALITY (Future enhancement) =====
let cart = [];

function addToCart(productId, quantity = 1) {
    // Since we're redirecting to WhatsApp, this is for future use
    console.log('Adding to cart:', productId, quantity);
}

function removeFromCart(productId) {
    console.log('Removing from cart:', productId);
}

function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

// ===== VIDEO TESTIMONIALS CAROUSEL =====
let currentVideoSlide = 0;
const videoSlides = document.querySelectorAll('.video-slide');
const totalVideoSlides = videoSlides.length;

// Video data mapping
const videoData = {
    'video1': {
        src: 'assets/videos/depoimento-maria.mp4',
        title: 'Depoimento - Maria Silva'
    },
    'video2': {
        src: 'assets/videos/depoimento-joao.mp4',
        title: 'Depoimento - João Santos'
    },
    'video3': {
        src: 'assets/videos/depoimento-ana.mp4',
        title: 'Depoimento - Ana Costa'
    }
};

// Initialize video carousel
document.addEventListener('DOMContentLoaded', function() {
    if (videoSlides.length > 0) {
        showVideoSlide(currentVideoSlide);
        
        // Auto-play carousel every 8 seconds
        setInterval(() => {
            changeSlide(1);
        }, 8000);
    }
});

// Show specific video slide
function showVideoSlide(n) {
    const dots = document.querySelectorAll('.carousel-dot');
    
    if (n >= totalVideoSlides) currentVideoSlide = 0;
    if (n < 0) currentVideoSlide = totalVideoSlides - 1;
    
    // Hide all slides
    videoSlides.forEach(slide => {
        slide.style.display = 'none';
    });
    
    // Remove active class from all dots
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    
    // Show current slide and activate corresponding dot
    if (videoSlides[currentVideoSlide]) {
        videoSlides[currentVideoSlide].style.display = 'block';
    }
    
    if (dots[currentVideoSlide]) {
        dots[currentVideoSlide].classList.add('active');
    }
    
    // Update navigation buttons
    updateNavigationButtons();
}

// Change slide function
function changeSlide(n) {
    currentVideoSlide += n;
    showVideoSlide(currentVideoSlide);
}

// Go to specific slide
function currentSlide(n) {
    currentVideoSlide = n - 1;
    showVideoSlide(currentVideoSlide);
}

// Update navigation buttons state
function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (prevBtn && nextBtn) {
        prevBtn.disabled = currentVideoSlide === 0;
        nextBtn.disabled = currentVideoSlide === totalVideoSlides - 1;
    }
}

// Open video modal
function openVideoModal(videoId) {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('modalVideo');
    const videoInfo = videoData[videoId];
    
    if (modal && video && videoInfo) {
        video.src = videoInfo.src;
        modal.classList.add('active');
        
        // Pause any playing video when opening modal
        video.currentTime = 0;
        
        // Add event listener to close modal when clicking outside
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeVideoModal();
            }
        });
        
        // Add keyboard event listener for ESC key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeVideoModal();
            }
        });
    }
}

// Close video modal
function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('modalVideo');
    
    if (modal && video) {
        modal.classList.remove('active');
        video.pause();
        video.src = '';
        
        // Remove event listeners
        document.removeEventListener('keydown', closeVideoModal);
    }
}

// Touch/Swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.video-carousel');
    
    if (carousel) {
        carousel.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        carousel.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });
    }
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - next slide
            changeSlide(1);
        } else {
            // Swipe right - previous slide
            changeSlide(-1);
        }
    }
}

// Responsive carousel adjustments
function adjustCarouselForMobile() {
    if (window.innerWidth <= 768) {
        // Show one slide at a time on mobile
        videoSlides.forEach((slide, index) => {
            if (index === currentVideoSlide) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
    } else {
        // Show all slides on desktop
        videoSlides.forEach(slide => {
            slide.style.display = 'block';
        });
    }
}

// Listen for window resize
window.addEventListener('resize', adjustCarouselForMobile);

// Initialize responsive behavior
document.addEventListener('DOMContentLoaded', adjustCarouselForMobile);
    }
}

// ===== TESTIMONIALS CAROUSEL (if you want to add more testimonials) =====
function initTestimonialsCarousel() {
    // This can be used to create a carousel for testimonials
    console.log('Initializing testimonials carousel');
}

// ===== PRODUCT COMPARISON (Future enhancement) =====
function compareProducts(product1, product2) {
    console.log('Comparing products:', product1, product2);
}

// ===== WISHLIST FUNCTIONALITY (Future enhancement) =====
let wishlist = [];

function addToWishlist(productId) {
    if (!wishlist.includes(productId)) {
        wishlist.push(productId);
        updateWishlistUI();
    }
}

function removeFromWishlist(productId) {
    wishlist = wishlist.filter(id => id !== productId);
    updateWishlistUI();
}

function updateWishlistUI() {
    // Update wishlist UI elements
    console.log('Updating wishlist UI');
}

// ===== PERFORMANCE OPTIMIZATION =====
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Use debounced scroll for better performance
const debouncedScroll = debounce(function() {
    // Scroll-based animations and effects
}, 10);

window.addEventListener('scroll', debouncedScroll);

// ===== ACCESSIBILITY IMPROVEMENTS =====
document.addEventListener('DOMContentLoaded', function() {
    // Add keyboard navigation support
    const focusableElements = document.querySelectorAll('a, button, input, textarea, select');
    
    focusableElements.forEach(element => {
        element.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                if (this.tagName === 'A' || this.tagName === 'BUTTON') {
                    this.click();
                }
            }
        });
    });
});

// ===== ERROR HANDLING =====
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // You can send error reports to your analytics service here
});

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('Natuni website loaded successfully!');
    
    // Initialize all components
    // initTestimonialsCarousel();
    // updateCartCount();
    // updateWishlistUI();
    
    // Set initial styles for animated elements
    const heroElements = document.querySelectorAll('.hero-content > *');
    heroElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
    });
});