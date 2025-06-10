document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        window.addEventListener('load', function() {
            preloader.classList.add('fade-out');
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        });
    }

    // Mobile Menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Product Filter
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');
    
    if (filterButtons.length && productCards.length) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                const filterValue = this.getAttribute('data-filter');
                
                // Filter products
                productCards.forEach(card => {
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                        }, 50);
                    } else {
                        card.style.opacity = '0';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
                
                // Reinicializa o AOS após o filtro
                setTimeout(() => {
                    AOS.refresh();
                }, 350);
            });
        });
        
        // Dispara o click em "Todos" ao carregar a página
        const allButton = document.querySelector('.filter-btn[data-filter="all"]');
        if (allButton) {
            allButton.click();
        }
    }

    // Initialize AOS Animation
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });

    // Scroll to Top Button
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    if (scrollToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.add('active');
            } else {
                scrollToTopBtn.classList.remove('active');
            }
        });
        
        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Product Quick View Modal
    const quickViewButtons = document.querySelectorAll('.quick-view-btn');
    const productModal = document.querySelector('.product-modal');
    const modalOverlay = document.querySelector('.modal-overlay');
    const modalClose = document.querySelector('.modal-close');
    
    if (quickViewButtons.length && productModal) {
        // Product data - atualizado para 18 produtos (6 por categoria)
        const products = [
            // Roupas (1-6)
            {
                id: 1,
                title: 'Nike Sportswear Tênis Camiseta',
                price: 'R$ 20,00',
                description: 'Camiseta esportiva premium da Nike, ideal para atividades físicas ou uso casual. Tecido respirável e confortável.',
                images: [
                    'Img/Roupas 1.png',
                    'Img/Roupas 1.png',
                    'Img/Roupas 1.png'
                ]
            },
            {
                id: 2,
                title: 'Camiseta Estampada Masculina X Txc',
                price: 'R$ 20,00',
                description: 'Camiseta masculina com estampa moderna, tecido de algodão de alta qualidade e durabilidade.',
                images: [
                    'Img/Roupass2.jpg',
                    'Img/ROUPAS 2.png',
                    'Img/Roupasss2.jpg'
                ]
            },
            {
                id: 3,
                title: 'Camiseta Country Gringa\'s',
                price: 'R$ 20,00',
                description: 'Camiseta temática country com design exclusivo, perfeita para eventos e festas temáticas.',
                images: [
                    'Img/Roupas 3.png',
                    'Img/Roupass3.jpg',
                    'Img/Roupasss3.jpg'
                ]
            },
            {
                id: 4,
                title: 'Camisa Camiseta The Countries Farm Usa',
                price: 'R$ 25,00',
                description: 'Camisa Camiseta The Countries Farm Usa premium, ideal para dias mais frescos ou proteção solar.',
                images: [
                    'Img/Roupass4.jpg',
                    'Img/Roupas 4.png',
                    'Img/Roupasss4.jpg'
                ]
            },
            {
                id: 5,
                title: 'Camiseta Caveira de Vaca do Velho Oeste',
                price: 'R$ 45,00',
                description: 'Camiseta Caveira de Vaca do Velho Oeste fit com elastano para maior conforto e modelagem moderna.',
                images: [
                    'Img/Roupass5.jpg',
                    'Img/Roupas 5.png',
                    'Img/Roupasss5.jpg'
                ]
            },
            {
                id: 6,
                title: 'Camiseta Lobo Touch Masculina Acostamento',
                price: 'R$ 35,00',
                description: 'Camiseta Lobo Touch Masculina Acostamento com tecido leve e arejado, perfeito para o verão com modelagem confortável.',
                images: [
                    'Img/Roupass6.jpg',
                    'Img/Roupas 6.png',
                    'Img/Roupasss6.jpg'
                ]
            },
            
            // Infantil (7-12)
            {
                id: 7,
                title: 'Carrinho de boneca infantil com cesta inferior',
                price: 'R$ 20,00',
                description: 'Brinquedo educativo que estimula a coordenação motora das crianças de forma divertida.',
                images: [
                    'Img/Infantil 1.png',
                    'Img/Playground1.jpg',
                    'Img/Playground11.jpg'
                ]
            },
            {
                id: 8,
                title: 'Boneca miraculous ladybug',
                price: 'R$ 35,00',
                description: 'Boneca miraculous ladybug super confortável e resistente, perfeito para o dia a dia das crianças.',
                images: [
                    'Img/Infantil 2.png',
                    'Img/Playground2.jpg',
                    'Img/Playground22.jpg'
                ]
            },
            {
                id: 9,
                title: 'Boneca mirabel encanto disney',
                price: 'R$ 25,00',
                description: 'Brinquedo que estimula o aprendizado e desenvolvimento cognitivo das crianças.',
                images: [
                    'Img/Infantil 2.jpg',
                    'Img/Playground3.jpg',
                    'Img/Playground33.jpg'
                ]
            },
            {
                id: 10,
                title: 'BASQUETE DIVERTIDO Brinquedos Pica-Pau',
                price: 'R$ 30,00',
                description: 'BASQUETE DIVERTIDO Brinquedos Pica-Pau.',
                images: [
                    'Img/Infantil 4.png',
                    'Img/Playground4.jpg',
                    'Img/Playground44.jpg'
                ]
            },
            {
                id: 11,
                title: 'Brinquedo Boneca Borboleta Fada',
                price: 'R$ 28,00',
                description: 'Brinquedo Boneca Borboleta Fada resistente e ergonômica, com divisórias e design atrativo para crianças.',
                images: [
                    'Img/Infantil 5.png',
                    'Img/Playground5.jpg',
                    'Img/Infantil 5.png'
                ]
            },
            {
                id: 12,
                title: 'Boneca de Plástico Com Vestido Princesa',
                price: 'R$ 40,00',
                description: 'Boneca de Plástico Com Vestido Princesa durável, ideal para o dia a dia e atividades escolares.',
                images: [
                    'Img/Infantil 6.png',
                    'Img/Playground6.jpg',
                    'Img/Playground66.jpg'
                ]
            },
            
            // Acessórios (13-18)
            {
                id: 13,
                title: 'Quadro Decorativo Torre Eiffel',
                price: 'R$ 20,00',
                description: 'Quadro decorativo da Torre Eiffel, perfeito para dar um toque elegante à sua decoração.',
                images: [
                    'Img/Acessory 4.png',
                    'Img/Acessoriotore.jpg',
                    'Img/Acessoriotorre.jpg'
                ]
            },
            {
                id: 14,
                title: 'Peça Decoração Gesso Coruja',
                price: 'R$ 20,00',
                description: 'Peça decorativa em gesso com tema de coruja, ideal para enfeitar prateleiras e mesas.',
                images: [
                    'Img/Acessory 7.png',
                    'Img/Coruja1.jpg',
                    'Img/Coruja.jpg'
                ]
            },
            {
                id: 15,
                title: 'Copo Térmico 473ml Inox Quente e Gelado',
                price: 'R$ 35,00',
                description: 'Copo Térmico 473ml Inox Quente e Gelado com design elegante para qualquer ambiente.',
                images: [
                    'Img/Acessory 3.png',
                    'Img/cup.jpg',
                    'Img/Cup1.jpg'
                ]
            },
            {
                id: 16,
                title: 'Conjunto de caipirinha - Stolf',
                price: 'R$ 28,00',
                description: 'Conjunto de caipirinha - Stolf artesanal, perfeito para celebra com os amigos.',
                images: [
                    'Img/Caipirinha.png',
                    'Img/Caipirinha1.jpg',
                    'Img/Caipirinha2.jpg'
                ]
            },
            {
                id: 17,
                title: 'Bone Lancamento Bordo Txc Masculino Original',
                price: 'R$ 45,00',
                description: 'Bone Lancamento Bordo Txc Masculino Original, aconchegante e sofisticado.',
                images: [
                    'Img/Acessory 5.png',
                    'Img/Boné.jpg',
                    'Img/Acessory 5.png'
                ]
            },
            {
                id: 18,
                title: 'Gel Candles Holder - Diwali Candles',
                price: 'R$ 22,00',
                description: 'Gel Candles Holder - Diwali Candles decorativa que cria um ambiente aconchegante e sofisticado.',
                images: [
                    'Img/Acessory 6.png',
                    'Img/Luminaria.jpg',
                    'Img/Luminaria1.jpg'
                ]
            }
        ];

        quickViewButtons.forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-product'));
                const product = products.find(p => p.id === productId);
                
                if (product) {
                    // Format the WhatsApp message
                    const whatsappMessage = `Olá! Gostaria de comprar o produto: ${product.title} por ${product.price}. Poderia me ajudar?`;
                    const encodedMessage = encodeURIComponent(whatsappMessage);
                    const whatsappLink = `https://wa.me/5544999838995?text=${encodedMessage}`;
                    
                    // Set product details in modal
                    document.querySelector('.product-modal .product-title').textContent = product.title;
                    document.querySelector('.product-modal .product-price').textContent = product.price;
                    document.querySelector('.product-modal .product-description p').textContent = product.description;
                    
                    // Set WhatsApp link with correct product info
                    const whatsappBtn = document.querySelector('.product-modal .whatsapp-link');
                    whatsappBtn.href = whatsappLink;
                    whatsappBtn.setAttribute('target', '_blank');
                    
                    // Set main image
                    const mainImage = document.querySelector('.product-modal .main-image img');
                    mainImage.src = product.images[0];
                    mainImage.alt = product.title;
                    
                    // Set thumbnails
                    const thumbnails = document.querySelectorAll('.product-modal .thumbnail');
                    thumbnails.forEach((thumb, index) => {
                        if (product.images[index]) {
                            thumb.querySelector('img').src = product.images[index];
                            thumb.querySelector('img').alt = `${product.title} - Foto ${index + 1}`;
                            thumb.style.display = 'block';
                            
                            // Thumbnail click event
                            thumb.addEventListener('click', function() {
                                // Update main image
                                mainImage.src = this.querySelector('img').src;
                                
                                // Update active thumbnail
                                thumbnails.forEach(t => t.classList.remove('active'));
                                this.classList.add('active');
                            });
                        } else {
                            thumb.style.display = 'none';
                        }
                    });
                    
                    // Activate first thumbnail
                    thumbnails[0].classList.add('active');
                    
                    // Configure social sharing
                    const productUrl = encodeURIComponent(window.location.href.split('#')[0] + `?product=${productId}`);
                    const shareText = encodeURIComponent(`Olhe este produto da Loja do Vinte: ${product.title} - ${product.price}`);
                    
                    // Facebook
                    const fbShare = document.querySelector('.fb-share');
                    fbShare.href = `https://www.facebook.com/sharer/sharer.php?u=${productUrl}`;
                    fbShare.setAttribute('target', '_blank');
                    
                    // Instagram
                    const igShare = document.querySelector('.ig-share');
                    igShare.href = `https://www.instagram.com/`;
                    igShare.setAttribute('target', '_blank');
                    
                    // WhatsApp compartilhamento
                    const waShare = document.querySelector('.wa-share');
                    waShare.href = `https://wa.me/?text=${shareText}%20${productUrl}`;
                    waShare.setAttribute('target', '_blank');
                    
                    // Open modal
                    productModal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            });
        });
        
        // Close modal
        function closeModal() {
            productModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
        
        if (modalOverlay) modalOverlay.addEventListener('click', closeModal);
        if (modalClose) modalClose.addEventListener('click', closeModal);
        
        // Close modal with ESC key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && productModal.classList.contains('active')) {
                closeModal();
            }
        });
    }

    // Testimonials Slider
    const testimonialsSlider = document.querySelector('.testimonials-slider');
    if (testimonialsSlider) {
        let isDown = false;
        let startX;
        let scrollLeft;
        
        testimonialsSlider.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - testimonialsSlider.offsetLeft;
            scrollLeft = testimonialsSlider.scrollLeft;
            testimonialsSlider.style.cursor = 'grabbing';
        });
        
        testimonialsSlider.addEventListener('mouseleave', () => {
            isDown = false;
            testimonialsSlider.style.cursor = 'grab';
        });
        
        testimonialsSlider.addEventListener('mouseup', () => {
            isDown = false;
            testimonialsSlider.style.cursor = 'grab';
        });
        
        testimonialsSlider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - testimonialsSlider.offsetLeft;
            const walk = (x - startX) * 2;
            testimonialsSlider.scrollLeft = scrollLeft - walk;
        });
        
        // Touch events for mobile
        testimonialsSlider.addEventListener('touchstart', (e) => {
            isDown = true;
            startX = e.touches[0].pageX - testimonialsSlider.offsetLeft;
            scrollLeft = testimonialsSlider.scrollLeft;
        });
        
        testimonialsSlider.addEventListener('touchend', () => {
            isDown = false;
        });
        
        testimonialsSlider.addEventListener('touchmove', (e) => {
            if (!isDown) return;
            const x = e.touches[0].pageX - testimonialsSlider.offsetLeft;
            const walk = (x - startX) * 2;
            testimonialsSlider.scrollLeft = scrollLeft - walk;
        });
    }
    
    // Configuração do mapa de contato
    const storeMap = document.getElementById('storeMap');
    if (storeMap) {
        // Atualiza o iframe com a localização correta
        storeMap.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.123456789012!2d-52.12345678901234!3d-23.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDA3JzI0LjQiUyA1MsKwMDcnMTIuMyJX!5e0!3m2!1spt-BR!2sbr!4v1621234567890!5m2!1spt-BR!2sbr";
        
        // Adiciona evento de clique para abrir no Google Maps
        storeMap.addEventListener('click', function(e) {
            e.preventDefault();
            window.open('https://www.google.com/maps?q=AV.+Plínio+Arion+Pessoa,+692,+Floresta+-+PR', '_blank');
        });
    }
    
    // Category links in footer
    const categoryLinks = document.querySelectorAll('.footer-links a[data-filter]');
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const filterValue = this.getAttribute('data-filter');
            const filterButton = document.querySelector(`.filter-btn[data-filter="${filterValue}"]`);
            if (filterButton) {
                filterButton.click();
                window.scrollTo({
                    top: document.getElementById('produtos').offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // WhatsApp float button animation
    const whatsappFloat = document.querySelector('.whatsapp-float');
    if (whatsappFloat) {
        whatsappFloat.addEventListener('mouseenter', function() {
            this.classList.add('hover');
        });
        
        whatsappFloat.addEventListener('mouseleave', function() {
            this.classList.remove('hover');
        });
    }
});

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