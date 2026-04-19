# Déploiement Matelas PEB

## 🚀 Option 1: Déploiement sur Vercel (Recommandé)

### Étape 1: Créer un compte Vercel
1. Allez sur https://vercel.com
2. Connectez-vous avec GitHub (créez un compte si nécessaire)

### Étape 2: Déployer le site
Option A - Via CLI:
```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login

# Déployer (dans le dossier matelas-peb-site)
cd matelas-peb-site
vercel --prod
```

Option B - Upload manuel:
1. Allez sur https://vercel.com/dashboard
2. Cliquez "Add New..." → "Project"
3. Importez le dossier ou glissez-déposez le dossier `matelas-peb-site`

### Étape 3: Configurer le domaine
1. Dans le dashboard Vercel, allez dans "Settings" → "Domains"
2. Ajoutez votre domaine: `matelaspeb-bj.com`
3. Suivez les instructions DNS

---

## 🌐 Option 2: Déploiement sur Netlify

### Via Drag & Drop:
1. Allez sur https://netlify.com
2. Connectez-vous
3. Glissez-déposez le dossier `dist/` dans la zone de déploiement

---

## 📁 Structure du build

Le dossier `dist/` contient:
- `index.html` - Page d'accueil
- `a-propos/index.html` - Page À propos
- `produits/index.html` - Page Produits
- `contact/index.html` - Page Contact
- `cgv/index.html` - Conditions générales
- `confidentialite/index.html` - Politique de confidentialité
- `_next/` - Fichiers JS/CSS optimisés
- `sitemap.xml` - Sitemap SEO
- `robots.txt` - Instructions robots

---

## 🔧 Configuration SEO

### 1. Google Search Console
1. Allez sur https://search.google.com/search-console
2. Ajoutez votre propriété: `matelaspeb-bj.com`
3. Vérifiez via la méthode DNS ou fichier HTML
4. Soumettez le sitemap: `https://matelaspeb-bj.com/sitemap.xml`

### 2. Google Analytics
1. Créez un compte sur https://analytics.google.com
2. Ajoutez le code de suivi dans `src/app/layout.tsx`

---

## 📱 WhatsApp Business

Pour optimiser les commandes:
1. Créez un compte WhatsApp Business
2. Configurez les messages automatiques
3. Ajoutez le lien WhatsApp sur tous vos supports

---

## 🎯 Prochaines étapes recommandées

1. ✅ Acheter le domaine `matelaspeb-bj.com`
2. ✅ Configurer le domaine sur Vercel/Netlify
3. ✅ Ajouter Google Analytics
4. ✅ S'inscrire sur Google My Business
5. ✅ Créer une page Facebook Business
6. ✅ Poster régulièrement du contenu
7. ✅ Demander des avis clients

---

## 📞 Support

Si vous avez des questions:
- WhatsApp: +229 67 61 18 44
- Email: contact@matelaspeb-bj.com

---

**Site créé avec Next.js + Tailwind CSS**
**Optimisé SEO pour le Bénin**
