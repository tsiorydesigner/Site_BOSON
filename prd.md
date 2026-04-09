# Product Requirements Document (PRD) - BOSON

## 1. Vue d'ensemble du projet

### 1.1 Nom du projet
**BOSON - Meubles sur Mesure en Mélamine**

### 1.2 Localisation
**Antananarivo, Madagascar**

### 1.3 Description générale
BOSON est une plateforme de présentation de meubles sur mesure en mélamine de haute qualité. L'entreprise se spécialise dans la création de solutions d'aménagement intérieur personnalisées et propose une gamme variée de produits finis, du mobilier classique aux pièces design contemporain.

### 1.4 Objectif
Créer un site web moderne et responsive présentant le catalogue de meubles BOSON avec une galerie interactive permettant aux clients de visualiser les produits en détail.

---

## 2. Architecture du projet

### 2.1 Structure des fichiers
```
Site meuble/
├── homepage.html          # Page principale
├── css/
│   └── style.css         # Feuille de styles complète
├── js/
│   └── script.js         # Logique JavaScript interactive
└── image/
    └── [18 catégories de meubles avec images numérotées]
```

### 2.2 Dépendances
- **Font Awesome 6.4.0** : Icônes vectorielles (CDN)
- **CSS Personnalisé** : Animations et responsive design
- **JavaScript Vanilla** : Galerie interactive sans framework

---

## 3. Catalogue de produits

### 3.1 Catégories de meubles (18 produits)

| # | Nom du produit | Variantes | Prix de départ |
|----|---|---|---|
| 1 | buffet bas | 1 image | 850.000 Ar |
| 2 | buffet haut | 2 images | 650.000 Ar |
| 3 | bureau sous escalier | 2 images | 550.000 Ar |
| 4 | Chaise de bureau noir | 1 image | 500.000 Ar |
| 5 | comptoir d'accueil | 1 image | 750.000 Ar |
| 6 | lampe de table en bois | 3 images | 1.100.000 Ar |
| 7 | meuble de salle de bain | 4 images | 1.200.000 Ar |
| 8 | mini chaise de conférence | 1 image | 875.000 Ar |
| 9 | Montre en Bois | 2 images | 850.000 Ar |
| 10 | porte de style grange | 4 images | 550.000 Ar |
| 11 | Porte | 1 image | 500.000 Ar |
| 12 | Pose casque | 1 image | 750.000 Ar |
| 13 | Table à manger | 1 image | 1.100.000 Ar |
| 14 | Table de bureau élégant | 1 image | 950.000 Ar |
| 15 | table de bureau | 1 image | 1.200.000 Ar |
| 16 | Table restaurant | 3 images | 875.000 Ar |
| 17 | Vestiaire d'entrée | 1 image | 850.000 Ar |
| 18 | étagère | 2 images | 550.000 Ar |

**Total d'images produits** : 35 images

### 3.2 Caractéristiques des produits
- Tous les produits sont en **mélamine de haute qualité**
- **Finitions premium** personnalisables
- **Rangement optimisé** pour chaque catégorie
- **Design moderne** adapté aux espaces intérieurs actuels

---

## 4. Fonctionnalités principales

### 4.1 Section Héros
- **Titre accrocheur** : "Modern Furniture for Your House"
- **Description** : Présentation de la collection exclusive
- **Call-to-action** : Bouton "Buy Now"
- **Design** : Gradient et cercles décératifs
- **Responsive** : Adapté à tous les écrans

### 4.2 Barre de navigation
- **Logo** : BOSON (accueil)
- **Menu principal** :
  - Home
  - Services
  - Galerie
  - Contact
- **Icônes réseaux sociaux** :
  - Facebook
  - Instagram
  - Pinterest
  - Twitter

### 4.3 Section Services
- **Titre** : "Nos Services"
- **Description** : Présentation de BOSON et ses services
- **Image de service** : nos-service.jpg
- **Liste des services** :
  - ✅ Conception personnalisée de meubles
  - ✅ Meubles en mélamine de haute qualité
  - ✅ Livraison et installation gratuite
  - ✅ Garantie de 5 ans sur tous les produits
  - ✅ Consultation design gratuite
  - ✅ Finitions premium et personnalisées

### 4.4 Section Galerie Interactive

#### Affichage des cartes
- **Grille responsive** : Adaptation automatique selon l'écran
- **18 cartes produits** avec :
  - Image principale
  - Badge affichant le nombre d'images/variantes
  - Titre du produit
  - Description courte
  - Prix de départ
  - Curseur "pointer" (indication cliquable)

#### Modale de galerie
**Déclencheur** : Clic sur une card produit

**Contenu** :
- Affichage de l'image agrandie
- Navigation multi-images :
  - Bouton flèche précédent (←)
  - Bouton flèche suivant (→)
  - Compteur d'images (ex: "2 / 4")
- Vignettes des images du produit
  - Galerie déroulante des variantes
  - Sélection rapide par clic
  - Indication de l'image active
- **Titre** et **description** du produit
- **Prix** du produit
- **Fermeture** :
  - Bouton X en haut à droite
  - Clic en dehors de la modale
  - Touche Échap du clavier

#### Navigation au clavier
- **Flèche gauche** : Image précédente
- **Flèche droite** : Image suivante
- **Échap** : Fermer la modale

### 4.5 Section Fonctionnalités
**"Pourquoi Nous Choisir?"** - 4 cartes :
- 🛋️ **Qualité Premium** : Matériaux de la plus haute qualité
- 🎨 **Design Moderne** : Designs contemporains adaptés à tout espace
- 🚚 **Livraison Rapide** : Service rapide et sécurisé
- 📞 **Support 24/7** : Service client dédié disponible

### 4.6 Footer
- Copyright et informations légales
- Tous droits réservés 2025 BOSON

---

## 5. Design et UX

### 5.1 Palette de couleurs
- Dégradés modernes pour les sections
- Contraste élevé pour la lisibilité
- Accent sur les éléments importants

### 5.2 Typographie
- **Famille** : Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Comportement** : Responsive et lisible

### 5.3 Animations
- **Fade-in** sur les éléments (fade-in-up, fade-in-left, fade-in-right)
- **Transitions fluides** sur les interactions
- **Scroll smooth** pour la navigation

### 5.4 Responsive Design
- **Mobile** : Adaptation complète
- **Tablette** : Layout optimisé
- **Desktop** : Vue complète avec grille multi-colonnes
- **Break-points** : CSS media queries incluses

---

## 6. Structure des données

### 6.1 Objet produit JavaScript
```javascript
furniture = {
    id: {
        title: 'Nom du produit',
        description: 'Description détaillée',
        price: 'À partir de XXXXX Ar',
        images: ['image/path-01.jpg', 'image/path-02.jpg', ...]
    }
}
```

### 6.2 Chemins d'images
- **Format** : `image/nom-du-produit-numero.jpg`
- **Exemple** : `image/buffet bas-01.jpg`
- **Localisation** : Dossier `/image` à la racine du projet

---

## 7. Interactions utilisateur

### 7.1 Parcours utilisateur principal
1. **Arrivée** : Section héros avec appel à l'action
2. **Découverte** : Lecture des services et avantages
3. **Exploration** : Navigation dans la galerie
4. **Interaction** : Clic sur un produit intéressant
5. **Détail** : Visualisation complète avec variantes
6. **Engagement** : Contact ou achat

### 7.2 Points d'interaction
- Clic sur logo → Accueil
- Navigation menu → Sections
- Bouton "Buy Now" → Action
- Cards produits → Galerie modale
- Flèches dans modale → Navigation d'images
- Vignettes → Sélection d'image
- Réseaux sociaux → Redirection externes

---

## 8. Performance et optimisation

### 8.1 Optimisations implémentées
- ✅ CSS minifié et organisé
- ✅ JavaScript vanilla (pas de dépendance lourde)
- ✅ Images optimisées nommées explicitement
- ✅ Chargement asynchrone Font Awesome (CDN)
- ✅ Layout CSS Grid/Flexbox pour performance

### 8.2 Points à considérer
- Optimiser les images (compression, WebP)
- Implémenter lazy-loading pour les images
- Cache navigateur pour ressources statiques
- Minification CSS/JS pour production

---

## 9. Maintenance et évolution

### 9.1 Ajouter un nouveau produit
1. Créer les images : `image/nom-produit-01.jpg`, `nom-produit-02.jpg`, etc.
2. Ajouter entrée dans `furniture` (script.js)
3. Créer card HTML correspondante dans la galerie
4. Augmenter le compteur de produits

### 9.2 Modifier un produit existant
1. Mettre à jour les données dans `furniture` (script.js)
2. Ajouter/retirer images du dossier
3. Modifier la card HTML si nécessaire

### 9.3 Changements de design
1. Modifier `css/style.css` pour les styles
2. Mettre à jour les couleurs/fonts/animations
3. Tester la responsivité

---

## 10. Contenu et textes

### 10.1 Titre principal
**"Modern Furniture for Your House"**
*"Meubles modernes pour votre maison"*

### 10.2 Description d'accueil
*"Découvrez notre collection exclusive de meubles modernes qui transforment votre espace en un chef-d'œuvre de design et de confort."*

### 10.3 Description de l'entreprise
*"Bienvenue chez BOSON, basée à Antananarivo ! Nous sommes spécialisés dans la création de meubles sur mesure en mélamine de haute qualité. Au-delà des meubles, nous vous proposons aussi une gamme complète de solutions d'aménagement intérieur pour transformer votre espace."*

---

## 11. Considérations techniques

### 11.1 Navigateurs supportés
- ✅ Chrome (récent)
- ✅ Firefox (récent)
- ✅ Safari (récent)
- ✅ Edge (récent)
- ✅ Mobile browsers

### 11.2 Accessibilité
- ✅ Texte alternatif sur images
- ✅ Contraste des couleurs respecté
- ✅ Navigation au clavier fonctionnelle
- ⚠️ À améliorer : Labels ARIA, structure sémantique

### 11.3 SEO
- ✅ Meta description
- ✅ Titres structurés (H1, H2, H3)
- ✅ Images avec alt text
- ⚠️ À ajouter : Schema.org, sitemap, robots.txt

---

## 12. Points de contact

### 12.1 Réseau sociaux
- Facebook
- Instagram
- Pinterest
- Twitter

### 12.2 Services mentionnés
- Conception personnalisée
- Livraison et installation
- Consultation design
- Support client 24/7

---

## 13. Versions et historique

### Version 1.0
- ✅ Site vitrine complet
- ✅ Galerie interactive avec 18 produits
- ✅ 35 images produits au total
- ✅ Design responsive
- ✅ Modale de visualisation complète

---

## 14. Checklisté de déploiement

- [ ] Tester sur tous les navigateurs
- [ ] Vérifier les liens externes (réseaux sociaux)
- [ ] Compresser les images
- [ ] Minifier CSS et JavaScript
- [ ] Configurer le SSL/HTTPS
- [ ] Mettre en cache les ressources statiques
- [ ] Configurer les en-têtes de sécurité
- [ ] Tester la performance mobile
- [ ] Valider le HTML/CSS/JS
- [ ] Mettre en place Google Analytics

---

## 15. Contact et support

**Entreprise** : BOSON - Solutions d'Aménagement Intérieur et Extérieur
**Localisation** : Antananarivo, Madagascar
**Année** : 2025
**Tous droits réservés** : © 2025 BOSON

---

*Document créé le : 9 avril 2026*
*Dernière mise à jour : 9 avril 2026*
