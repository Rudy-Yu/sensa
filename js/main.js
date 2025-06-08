// Korean Style Landing Page for Sensa Shirataki Rice - Main JavaScript

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    initScrollAnimations();
    initFAQAccordion();
    initCustomCursor();
    initScrollProgress();
    initWhatsAppButton();
    initParallaxEffect();
    initCounterAnimation();
});

// Navigation functionality
function initNavigation() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const header = document.querySelector('.header');
    
    // Mobile menu toggle
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                if (mobileMenuBtn) mobileMenuBtn.classList.remove('active');
            }
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Scroll animations for elements
function initScrollAnimations() {
    // Get all elements with animation classes
    const fadeElements = document.querySelectorAll('.fade-in');
    const slideLeftElements = document.querySelectorAll('.slide-in-left');
    const slideRightElements = document.querySelectorAll('.slide-in-right');
    const zoomElements = document.querySelectorAll('.zoom-in');
    const revealSections = document.querySelectorAll('.reveal-section');
    
    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
            rect.bottom >= 0
        );
    }
    
    // Function to handle scroll animation
    function handleScrollAnimation() {
        // Handle fade-in elements
        fadeElements.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add('active');
            }
        });
        
        // Handle slide-in-left elements
        slideLeftElements.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add('active');
            }
        });
        
        // Handle slide-in-right elements
        slideRightElements.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add('active');
            }
        });
        
        // Handle zoom-in elements
        zoomElements.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add('active');
            }
        });
        
        // Handle reveal sections
        revealSections.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add('active');
            }
        });
    }
    
    // Initial check on load
    handleScrollAnimation();
    
    // Check on scroll
    window.addEventListener('scroll', handleScrollAnimation);
}

// FAQ accordion functionality
function initFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
}

// Custom cursor effect
function initCustomCursor() {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);
    
    // Update cursor position
    document.addEventListener('mousemove', e => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    
    // Add hover effect on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .faq-question, .benefit-card');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('active');
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('active');
        });
    });
    
    // Hide cursor when leaving window
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
    });
    
    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '0.5';
    });
}

// Scroll progress indicator
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.classList.add('scroll-progress');
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / scrollHeight) * 100;
        
        progressBar.style.width = scrollPercent + '%';
    });
}

// WhatsApp button functionality
function initWhatsAppButton() {
    const whatsappButtons = document.querySelectorAll('.whatsapp-btn');
    
    whatsappButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // WhatsApp number from the data attribute or default
            const whatsappNumber = this.getAttribute('data-whatsapp') || '628123456789';
            const message = encodeURIComponent('Halo, saya tertarik dengan produk Beras Shirataki Sensa. Boleh info lebih lanjut?');
            
            // Open WhatsApp link
            window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
        });
    });
}

// Parallax effect for hero section
function initParallaxEffect() {
    const heroSection = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    const heroImg = document.querySelector('.hero-img');
    
    if (heroSection && window.innerWidth > 768) {
        window.addEventListener('scroll', () => {
            const scrollValue = window.scrollY;
            
            if (heroContent) {
                heroContent.style.transform = `translateY(${scrollValue * 0.2}px)`;
            }
            
            if (heroImg) {
                heroImg.style.transform = `translateY(${scrollValue * 0.1}px)`;
            }
        });
    }
}

// Counter animation for statistics
function initCounterAnimation() {
    const counters = document.querySelectorAll('.counter');
    
    function animateCounter(counter) {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const step = target / (duration / 16); // 60fps
        let current = 0;
        
        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.textContent = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    }
    
    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
            rect.bottom >= 0
        );
    }
    
    // Start animation when counter is in viewport
    function handleCounterAnimation() {
        counters.forEach(counter => {
            if (isInViewport(counter) && !counter.classList.contains('animated')) {
                counter.classList.add('animated');
                animateCounter(counter);
            }
        });
    }
    
    // Check on scroll
    window.addEventListener('scroll', handleCounterAnimation);
    
    // Initial check
    handleCounterAnimation();
}

// Create wave SVG for decorative elements
function createWaveSVG() {
    // This function creates SVG wave patterns for decorative elements
    // It's called by the HTML when needed
    const waveContainer = document.querySelector('.wave-container');
    if (!waveContainer) return;
    
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100');
    svg.setAttribute('viewBox', '0 0 1200 120');
    svg.setAttribute('preserveAspectRatio', 'none');
    
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute('d', 'M0,0 C150,90 350,0 500,100 C650,200 750,0 900,100 C1050,200 1150,90 1200,0 L1200,120 L0,120 Z');
    path.setAttribute('fill', '#4a90e2');
    path.setAttribute('opacity', '0.2');
    
    svg.appendChild(path);
    waveContainer.appendChild(svg);
}

// Typing effect for hero section
function initTypingEffect() {
    const element = document.querySelector('.typing-effect');
    if (!element) return;
    
    const text = element.textContent;
    element.textContent = '';
    
    let i = 0;
    const speed = 100; // typing speed in milliseconds
    
    function typeWriter() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    
    // Start typing effect
    typeWriter();
}

// Product image hover effect
function initProductImageEffect() {
    const productImages = document.querySelectorAll('.product-img img');
    
    productImages.forEach(img => {
        img.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) rotate(2deg)';
        });
        
        img.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });
}
