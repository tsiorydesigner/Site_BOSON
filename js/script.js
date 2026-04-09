// Données des meubles avec leurs images
const furniture = {
    1: {
        title: 'Buffet bas',
        description: 'Buffet bas en mélamine avec finition premium et rangement optimisé.',
        price: 'À partir de 850.000 Ar',
        images: [
            'image/buffet bas-01.jpg'
        ]
    },
    2: {
        title: 'Buffet haut',
        description: 'Buffet haut spacieux idéal pour un espace de rangement moderne et pratique.',
        price: 'À partir de 650.000 Ar',
        images: [
            'image/buffet haut-01.jpg',
            'image/buffet haut -02.jpg'
        ]
    },
    3: {
        title: 'Bureau sous escalier',
        description: 'Bureau design parfait pour maximiser votre espace sous escalier.',
        price: 'À partir de 550.000 Ar',
        images: [
            'image/bureau sous escalier-01.jpg',
            'image/bureau sous escalier-02.jpg'
        ]
    },
    4: {
        title: 'Chaise de bureau noir',
        description: 'Chaise de bureau moderne en mélamine avec finitions raffinées.',
        price: 'À partir de 500.000 Ar',
        images: [
            'image/Chaise de bureau noir.jpg'
        ]
    },
    5: {
        title: 'Comptoir d\'accueil',
        description: 'Comptoir d\'accueil spacieux avec étagères intégrées et finitions élégantes.',
        price: 'À partir de 750.000 Ar',
        images: [
            'image/comptoir d\'accueil.jpg'
        ]
    },
    6: {
        title: 'Lampe de table en bois',
        description: 'Lampe de table en bois équipée d\'un éclairage moderne et discret.',
        price: 'À partir de 1.100.000 Ar',
        images: [
            'image/lampe de table en bois-01.jpg',
            'image/lampe de table en bois-02.jpg',
            'image/lampe de table en bois-03.jpg'
        ]
    },
    7: {
        title: 'Meuble de salle de bain',
        description: 'Meuble de salle de bain complet en mélamine avec tous les équipements.',
        price: 'À partir de 1.200.000 Ar',
        images: [
            'image/meuble de salle de bain-01.jpg',
            'image/meuble de salle de bain-02.jpg',
            'image/meuble de salle de bain-03.jpg',
            'image/meuble de salle de bain-04.jpg'
        ]
    },
    8: {
        title: 'Mini chaise de conférence',
        description: 'Mini chaise de conférence compacte avec rangements intégrés.',
        price: 'À partir de 875.000 Ar',
        images: [
            'image/mini chaise de conférence.jpg'
        ]
    },
    9: {
        title: 'Montre en bois',
        description: 'Montre en bois avec finition artisanale et rangement optimisé.',
        price: 'À partir de 850.000 Ar',
        images: [
            'image/Montre en Bois-01.jpg',
            'image/Montre en Bois-02.jpg'
        ]
    },
    10: {
        title: 'Porte de style grange',
        description: 'Porte de style grange design avec finitions rustiques et modernes.',
        price: 'À partir de 550.000 Ar',
        images: [
            'image/porte de style grange-01.jpg',
            'image/porte de style grange-02.jpg',
            'image/porte de style grange-03.jpg',
            'image/porte de style grange-04.jpg'
        ]
    },
    11: {
        title: 'Porte',
        description: 'Porte en mélamine avec finitions premium.',
        price: 'À partir de 500.000 Ar',
        images: [
            'image/Porte.jpg'
        ]
    },
    12: {
        title: 'Porte-casque',
        description: 'Support porte-casque avec étagères intégrées et câblage discret.',
        price: 'À partir de 750.000 Ar',
        images: [
            'image/Pose casque.jpg'
        ]
    },
    13: {
        title: 'Table à manger',
        description: 'Table à manger équipée de rangements pratiques et discrets.',
        price: 'À partir de 1.100.000 Ar',
        images: [
            'image/Table a manger.jpg'
        ]
    },
    14: {
        title: 'Table de bureau élégant',
        description: 'Table de bureau élégante personnalisée avec miroir et finitions intégrées.',
        price: 'À partir de 950.000 Ar',
        images: [
            'image/Table de bureau élégant.jpg'
        ]
    },
    15: {
        title: 'Table de bureau',
        description: 'Table de bureau complète en mélamine avec tous les équipements.',
        price: 'À partir de 1.200.000 Ar',
        images: [
            'image/table de bureau.jpg'
        ]
    },
    16: {
        title: 'Table de restaurant',
        description: 'Table de restaurant compacte avec rangements intégrés.',
        price: 'À partir de 875.000 Ar',
        images: [
            'image/Table restaurant-01.jpg',
            'image/Table restaurant-02.jpg',
            'image/Table restaurant-03.jpg'
        ]
    },
    17: {
        title: 'Vestiaire d\'entrée',
        description: 'Vestiaire d\'entrée avec finition artisanale et rangement optimisé.',
        price: 'À partir de 850.000 Ar',
        images: [
            'image/Vestiaire d\'entrée.jpg'
        ]
    },
    18: {
        title: 'Étagère',
        description: 'Étagère design parfaite pour maximiser votre espace de rangement.',
        price: 'À partir de 550.000 Ar',
        images: [
            'image/étagère-01.jpg',
            'image/étagère-02.jpg'
        ]
    }
};

let currentFurnitureId = 1;
let currentImageIndex = 0;

function openModal(furnitureId) {
    const item = furniture[furnitureId];
    const modal = document.getElementById('imageModal');
    
    currentFurnitureId = furnitureId;
    currentImageIndex = 0;

    document.getElementById('modalTitle').textContent = item.title;
    document.getElementById('modalDescription').textContent = item.description;
    document.getElementById('modalPrice').textContent = item.price;
    document.getElementById('totalImages').textContent = item.images.length;
    
    updateModalImage();
    updateThumbnails();
    
    modal.classList.add('active');
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('active');
}

function updateModalImage() {
    const item = furniture[currentFurnitureId];
    document.getElementById('modalImage').src = item.images[currentImageIndex];
    document.getElementById('currentImageIndex').textContent = currentImageIndex + 1;
}

function updateThumbnails() {
    const item = furniture[currentFurnitureId];
    const container = document.getElementById('thumbnailsContainer');
    container.innerHTML = '';
    
    item.images.forEach((imgSrc, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = 'thumbnail' + (index === currentImageIndex ? ' active' : '');
        thumbnail.innerHTML = `<img src="${imgSrc}" alt="Thumbnail">`;
        thumbnail.onclick = () => {
            currentImageIndex = index;
            updateModalImage();
            updateThumbnails();
        };
        container.appendChild(thumbnail);
    });
}

function nextImage() {
    const item = furniture[currentFurnitureId];
    currentImageIndex = (currentImageIndex + 1) % item.images.length;
    updateModalImage();
    updateThumbnails();
}

function previousImage() {
    const item = furniture[currentFurnitureId];
    currentImageIndex = (currentImageIndex - 1 + item.images.length) % item.images.length;
    updateModalImage();
    updateThumbnails();
}

// Fermer la modal en cliquant en dehors
window.onclick = function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target == modal) {
        closeModal();
    }
}

// Navigation au clavier
document.addEventListener('keydown', function(event) {
    const modal = document.getElementById('imageModal');
    if (modal.classList.contains('active')) {
        if (event.key === 'ArrowLeft') previousImage();
        if (event.key === 'ArrowRight') nextImage();
        if (event.key === 'Escape') closeModal();
    }
});

/* ============================================ */
/* DARK MODE FUNCTIONALITY */
/* ============================================ */

// Initialize dark mode from localStorage
function initDarkMode() {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'enabled') {
        document.body.classList.add('dark-mode');
        updateThemeIcon();
    }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
    updateThemeIcon();
}

function updateThemeIcon() {
    const themeBtn = document.querySelector('.theme-toggle i');
    if (document.body.classList.contains('dark-mode')) {
        themeBtn.classList.remove('fa-moon');
        themeBtn.classList.add('fa-sun');
    } else {
        themeBtn.classList.remove('fa-sun');
        themeBtn.classList.add('fa-moon');
    }
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', initDarkMode);

/* ============================================ */
/* MOBILE MENU FUNCTIONALITY */
/* ============================================ */

function toggleMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

// Close menu when a link is clicked
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const hamburger = document.querySelector('.hamburger');
            const navMenu = document.querySelector('.nav-menu');
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});

/* ============================================ */
/* TESTIMONIALS CAROUSEL */
/* ============================================ */

let currentTestimonialIndex = 0;
const testimonialCount = 5;

function showTestimonial(index) {
    const track = document.querySelector('.testimonial-track');
    const offset = -index * 100;
    track.style.transform = `translateX(${offset}%)`;
    
    // Update dots
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
    
    currentTestimonialIndex = index;
}

function nextTestimonial() {
    const nextIndex = (currentTestimonialIndex + 1) % testimonialCount;
    showTestimonial(nextIndex);
}

function prevTestimonial() {
    const prevIndex = (currentTestimonialIndex - 1 + testimonialCount) % testimonialCount;
    showTestimonial(prevIndex);
}

function goToTestimonial(index) {
    showTestimonial(index);
}

// Auto-scroll testimonials every 8 seconds
setInterval(() => {
    nextTestimonial();
}, 8000);

/* ============================================ */
/* GALLERY FILTERS */
/* ============================================ */

function filterGallery() {
    const categoryFilter = document.getElementById('category-filter').value;
    const priceFilter = document.getElementById('price-filter').value;
    const popularityFilter = document.getElementById('popularity-filter').value;
    
    const cards = document.querySelectorAll('.gallery-card');
    
    cards.forEach(card => {
        let show = true;
        
        // Category filter
        if (categoryFilter && card.getAttribute('data-category') !== categoryFilter) {
            show = false;
        }
        
        // Price filter
        if (priceFilter && show) {
            const price = parseInt(card.getAttribute('data-price'));
            if (priceFilter === '0-600000' && price >= 600000) show = false;
            if (priceFilter === '600000-1000000' && (price < 600000 || price > 1000000)) show = false;
            if (priceFilter === '1000000+' && price < 1000000) show = false;
        }
        
        // Popularity filter
        if (popularityFilter && card.getAttribute('data-popularity') !== popularityFilter) {
            show = false;
        }
        
        // Show or hide card with animation
        if (show) {
            card.style.display = 'block';
            card.style.animation = 'fadeInUp 0.5s ease';
        } else {
            card.style.display = 'none';
        }
    });
}

function resetFilters() {
    document.getElementById('category-filter').value = '';
    document.getElementById('price-filter').value = '';
    document.getElementById('popularity-filter').value = '';
    
    const cards = document.querySelectorAll('.gallery-card');
    cards.forEach(card => {
        card.style.display = 'block';
        card.style.animation = '';
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission handling
document.querySelector('.contact-form form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    
    alert(`Merci ${name} ! Votre message a été envoyé.\n\nNous vous contacterons bientôt à ${email}.`);
    
    this.reset();
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply to feature cards and gallery cards
document.querySelectorAll('.feature-card, .gallery-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255,255,255,0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'transparent';
        navbar.style.boxShadow = 'none';
    }
});

/* ============================================ */
/* CART FUNCTIONALITY */
/* ============================================ */

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productId) {
    const product = furniture[productId];
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: productId,
            title: product.title,
            price: product.price,
            image: product.images[0],
            quantity: 1
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showNotification(`${product.title} ajouté au panier`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    renderCart();
}

function updateCartQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = Math.max(1, quantity);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        renderCart();
    }
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = count;
}

function renderCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    
    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p class="empty-cart">Votre panier est vide</p>';
        document.getElementById('total-price').textContent = '0 Ar';
        return;
    }
    
    let total = 0;
    cartItemsDiv.innerHTML = cart.map(item => {
        const price = parseInt(item.price.replace(/\D/g, ''));
        const itemTotal = price * item.quantity;
        total += itemTotal;
        
        return `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.title}" class="item-image">
                <div class="item-details">
                    <h4>${item.title}</h4>
                    <p>${item.price}</p>
                    <p>Quantité: ${item.quantity}</p>
                </div>
                <div class="item-actions">
                    <div class="quantity-control">
                        <button onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})">+</button>
                    </div>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})">Supprimer</button>
                </div>
            </div>
        `;
    }).join('');
    
    document.getElementById('total-price').textContent = formatPrice(total);
}

function toggleCart() {
    const modal = document.getElementById('cartModal');
    if (modal.classList.contains('active')) {
        closeCart();
    } else {
        renderCart();
        modal.classList.add('active');
    }
}

function closeCart() {
    document.getElementById('cartModal').classList.remove('active');
}

/* ============================================ */
/* WISHLIST FUNCTIONALITY */
/* ============================================ */

let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

function addToWishlist(productId, event) {
    event.stopPropagation();
    
    if (wishlist.includes(productId)) {
        wishlist = wishlist.filter(id => id !== productId);
    } else {
        wishlist.push(productId);
    }
    
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    updateWishlistCount();
    updateWishlistIcons();
    renderWishlist();
}

function removeFromWishlist(productId) {
    wishlist = wishlist.filter(id => id !== productId);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    updateWishlistCount();
    updateWishlistIcons();
    renderWishlist();
}

function updateWishlistCount() {
    document.getElementById('wishlist-count').textContent = wishlist.length;
}

function updateWishlistIcons() {
    document.querySelectorAll('.wishlist-btn-card').forEach((btn, index) => {
        const productId = parseInt(btn.getAttribute('data-product-id'));
        if (wishlist.includes(productId)) {
            btn.classList.add('active');
            btn.innerHTML = '<i class="fas fa-heart"></i>';
        } else {
            btn.classList.remove('active');
            btn.innerHTML = '<i class="far fa-heart"></i>';
        }
    });
}

function renderWishlist() {
    const wishlistItemsDiv = document.getElementById('wishlist-items');
    
    if (wishlist.length === 0) {
        wishlistItemsDiv.innerHTML = '<p class="empty-wishlist">Aucun article en favoris</p>';
        return;
    }
    
    wishlistItemsDiv.innerHTML = wishlist.map(productId => {
        const product = furniture[productId];
        return `
            <div class="wishlist-item">
                <img src="${product.images[0]}" alt="${product.title}" class="item-image">
                <div class="item-details">
                    <h4>${product.title}</h4>
                    <p>${product.price}</p>
                    <p>${product.description}</p>
                </div>
                <div class="item-actions">
                    <button class="remove-btn" onclick="removeFromWishlist(${productId})">Retirer</button>
                    <button class="btn-checkout" onclick="addToCart(${productId})">Ajouter</button>
                </div>
            </div>
        `;
    }).join('');
}

function toggleWishlist() {
    const modal = document.getElementById('wishlistModal');
    if (modal.classList.contains('active')) {
        closeWishlist();
    } else {
        renderWishlist();
        modal.classList.add('active');
    }
}

function closeWishlist() {
    document.getElementById('wishlistModal').classList.remove('active');
}

/* ============================================ */
/* MULTI-LANGUAGE SUPPORT */
/* ============================================ */

const translations = {
    fr: {
        home: 'Accueil',
        services: 'Services',
        gallery: 'Galerie',
        contact: 'Contact',
        cart: 'Panier',
        wishlist: 'Favoris',
        myWishlist: 'Mes Favoris',
        myCart: 'Panier d\'Achat',
        total: 'Total',
        order: 'Commander',
        empty: 'Votre panier est vide',
        emptyWishlist: 'Aucun article en favoris',
        testimonials: 'Avis de Nos Clients'
    },
    en: {
        home: 'Home',
        services: 'Services',
        gallery: 'Gallery',
        contact: 'Contact',
        cart: 'Cart',
        wishlist: 'Wishlist',
        myWishlist: 'My Wishlist',
        myCart: 'Shopping Cart',
        total: 'Total',
        order: 'Order',
        empty: 'Your cart is empty',
        emptyWishlist: 'No items in wishlist',
        testimonials: 'Customer Reviews'
    },
    mg: {
        home: 'Lokoko',
        services: 'Tolotra',
        gallery: 'Sarin-tsary',
        contact: 'Hamoina',
        cart: 'Karà',
        wishlist: 'Andrainitrao',
        myWishlist: 'Ny andranitrao',
        myCart: 'Ny karà zanay',
        total: 'Totalin',
        order: 'Manasa',
        empty: 'Foana ny karà',
        emptyWishlist: 'Tsy misy sangan-dahatsoratra',
        testimonials: 'Hevitra avy amin\'ny mpanjifa'
    }
};

let currentLanguage = localStorage.getItem('language') || 'fr';

function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    updatePageLanguage();
}

function updatePageLanguage() {
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
}

function formatPrice(price) {
    return price.toLocaleString('mg-MG') + ' Ar';
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #6c5ce7;
        color: white;
        padding: 15px 20px;
        border-radius: 6px;
        z-index: 9999;
        animation: notificationIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'notificationOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    updateWishlistCount();
    updateWishlistIcons();
    updatePageLanguage();
});

// Close modals on outside click
document.getElementById('cartModal').addEventListener('click', function(e) {
    if (e.target === this) closeCart();
});

document.getElementById('wishlistModal').addEventListener('click', function(e) {
    if (e.target === this) closeWishlist();
});
