// Smooth scrolling and section highlighting
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
        });
    }
    
    // Scroll to top button
    const scrollToTopBtn = document.createElement('div');
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(scrollToTopBtn);
    
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
        }
    });
    
    // Add scroll animation attributes
    const animateOnScroll = [
        { selector: '.about-text', animation: 'slideRight', delay: 'delay-1' },
        { selector: '.about-image', animation: 'slideLeft', delay: 'delay-2' },
        { selector: '.product-card:nth-child(1)', animation: 'slideUp', delay: 'delay-1' },
        { selector: '.product-card:nth-child(2)', animation: 'slideUp', delay: 'delay-2' },
        { selector: '.product-card:nth-child(3)', animation: 'slideUp', delay: 'delay-3' },
        { selector: '.product-card:nth-child(4)', animation: 'slideUp', delay: 'delay-4' },
        { selector: '.product-card:nth-child(5)', animation: 'slideUp', delay: 'delay-5' },
        { selector: '.product-card:nth-child(6)', animation: 'slideUp', delay: 'delay-1' },
        { selector: '.contact-info', animation: 'slideLeft', delay: 'delay-1' },
        { selector: '.contact-map', animation: 'slideRight', delay: 'delay-2' }
    ];
    
    animateOnScroll.forEach(item => {
        const elements = document.querySelectorAll(item.selector);
        elements.forEach(el => {
            el.setAttribute('data-animate', item.animation);
            if (item.delay) {
                el.classList.add(item.delay);
            }
        });
    });
});