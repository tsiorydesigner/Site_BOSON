# 🚀 Quick Start Guide - BOSON Furniture Features

## 🛒 Shopping Cart

### How to Test:
1. Open `homepage.html` in browser
2. Click on any product card
3. Click the green "Ajouter au panier" button
4. Check the cart badge in navbar (shows count)
5. Click cart button in navbar to view cart
6. Use +/- buttons to adjust quantity
7. Click "Supprimer" to remove items
8. Cart persists after page reload (check browser localStorage)

### Cart Storage:
```javascript
localStorage.getItem('cart')
// Returns: [{"id":1,"title":"buffet bas","price":"850.000 Ar","image":"...","quantity":1}]
```

---

## ❤️ Wishlist

### How to Test:
1. Click the heart icon on any product card (top-right)
2. Heart will fill with red color
3. Wishlist badge updates in navbar
4. Click wishlist button to view saved items
5. Click "Ajouter" to move to cart
6. Click "Retirer" to remove from wishlist
7. Wishlist persists after page reload

### Wishlist Storage:
```javascript
localStorage.getItem('wishlist')
// Returns: [1, 3, 5, 7]
```

---

## 🌍 Multi-Language

### How to Test:
1. Look for language selector in navbar (top-left)
2. Select "FR" for French
3. Select "EN" for English
4. Select "MG" for Malagasy
5. Selection is saved and persists on reload

### Language Storage:
```javascript
localStorage.getItem('language')
// Returns: "fr" or "en" or "mg"
```

### Add Language to More Text:
To make language switching affect more text, add `data-lang` attributes:
```html
<h1 data-lang="home">Accueil</h1>
<!-- Will auto-translate with changeLanguage() -->
```

---

## 📊 SEO Features

### Sitemap
- File: `sitemap.xml`
- Contains 22 URLs (homepage + sections + 18 products)
- Submit to: Google Search Console
- Format: XML (standard sitemap format)

### Robots.txt
- File: `robots.txt`
- Controls: Which pages search engines can crawl
- Location: Must be at `/robots.txt` on server
- Includes: Crawl delay, user-agent rules

### Meta Tags
- In `homepage.html` `<head>` section
- Includes: Description, keywords, Open Graph
- Schema.org: LocalBusiness type with contact info

---

## 💾 localStorage Reference

| Key | Value | Persists | Example |
|-----|-------|----------|---------|
| cart | Array | Yes | `[{id, title, price, image, quantity}]` |
| wishlist | Array | Yes | `[1, 3, 5]` |
| darkMode | String | Yes | `"enabled"` or `"disabled"` |
| language | String | Yes | `"fr"` or `"en"` or `"mg"` |

### Clear localStorage (for testing):
```javascript
localStorage.clear()  // Clears all
localStorage.removeItem('cart')  // Clear cart only
localStorage.removeItem('wishlist')  // Clear wishlist only
```

---

## 🎯 All 18 Products

| ID | Product Name | Category | Price |
|----|--------------|----------|-------|
| 1 | buffet bas | Buffet | 850.000 Ar |
| 2 | buffet haut | Buffet | 650.000 Ar |
| 3 | bureau sous escalier | Bureau | 550.000 Ar |
| 4 | Chaise de bureau noir | Chaise | 500.000 Ar |
| 5 | comptoir d'accueil | Comptoir | 750.000 Ar |
| 6 | lampe de table en bois | Lampe | 1.100.000 Ar |
| 7 | meuble de salle de bain | Salle de bain | 1.200.000 Ar |
| 8 | mini chaise de conférence | Chaise | 875.000 Ar |
| 9 | Montre en Bois | Montre | 850.000 Ar |
| 10 | porte de style grange | Porte | 550.000 Ar |
| 11 | Porte | Porte | 500.000 Ar |
| 12 | Pose casque | Support | 750.000 Ar |
| 13 | Table a manger | Table | 1.100.000 Ar |
| 14 | Table de bureau élégant | Table | 950.000 Ar |
| 15 | table de bureau | Table | 1.200.000 Ar |
| 16 | Table restaurant | Table | 875.000 Ar |
| 17 | Vestiaire d'entrée | Vestiaire | 850.000 Ar |
| 18 | étagère | Étagère | 550.000 Ar |

---

## 🧪 Browser Console Testing

### Test Cart Function:
```javascript
// Add product 1 to cart
addToCart(1);

// View cart
console.log(JSON.parse(localStorage.getItem('cart')));

// Get cart count
document.getElementById('cart-count').textContent;

// Clear cart
localStorage.removeItem('cart');
```

### Test Wishlist Function:
```javascript
// Add product 1 to wishlist
addToWishlist(1, event);

// View wishlist
console.log(JSON.parse(localStorage.getItem('wishlist')));

// Get wishlist count
document.getElementById('wishlist-count').textContent;

// Clear wishlist
localStorage.removeItem('wishlist');
```

### Test Language:
```javascript
// Change to English
changeLanguage('en');

// Change to Malagasy
changeLanguage('mg');

// Change to French
changeLanguage('fr');

// Check current language
localStorage.getItem('language');
```

---

## 🎨 CSS Classes for Styling

### Cart Classes:
```css
.cart-btn          /* Cart button in navbar */
.cart-count        /* Badge counter */
.cartModal         /* Cart modal */
.cart-item         /* Individual item in cart */
.item-image        /* Product image */
.item-details      /* Product info */
.quantity-control  /* +/- buttons */
```

### Wishlist Classes:
```css
.wishlist-btn           /* Wishlist button in navbar */
.wishlist-count         /* Badge counter */
.wishlist-btn-card      /* Heart icon on product */
.wishlist-btn-card.active  /* Filled heart when in wishlist */
.wishlistModal          /* Wishlist modal */
.wishlist-item          /* Item in wishlist */
```

### Language Classes:
```css
.language-selector  /* Language dropdown */
```

---

## 📱 Mobile Testing

### Responsive Breakpoints:
- **Mobile:** < 480px - Hamburger menu active
- **Tablet:** 480px - 768px - Medium layout
- **Desktop:** > 768px - Full layout

### Test on Mobile:
1. Open DevTools (F12)
2. Click "Toggle device toolbar" (Ctrl+Shift+M)
3. Select device (iPhone 12, iPad, etc.)
4. Test cart, wishlist, language selector

---

## 🐛 Troubleshooting

### Cart not persisting?
- Check if localStorage is enabled in browser
- Open DevTools > Application > localStorage
- Verify `cart` key exists

### Language not switching?
- Ensure language selector is visible in navbar
- Check if `language` key in localStorage
- Verify translations object is loaded

### Wishlist heart not filling?
- Check CSS for `.wishlist-btn-card.active`
- Verify wishlist array in localStorage
- Clear cache and reload page

### Notifications not showing?
- Check if `showNotification()` function is defined
- Verify toast notification CSS is loaded
- Check browser console for errors

---

## 📞 Contact & Support

**For questions about features:**
- Review `FEATURE_INTEGRATION.md` for detailed documentation
- Check `VALIDATION_REPORT.md` for implementation details
- Review inline code comments in HTML, CSS, JS files

**For bugs or issues:**
1. Check browser console (F12 > Console tab)
2. Check localStorage (F12 > Application > localStorage)
3. Verify all files are loaded (F12 > Network tab)
4. Clear browser cache and try again

---

**Created:** 2024-01-15  
**Status:** ✅ All Features Implemented and Tested
