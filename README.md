# Francky Créas — Portfolio

Portfolio one-page responsive en HTML, CSS et JavaScript vanilla.

## Lancer le projet
1. Décompresse le dossier.
2. Ouvre `index.html` dans ton navigateur.
3. Pour travailler confortablement, ouvre le dossier dans VS Code et utilise l'extension Live Server.

## Personnalisation rapide

### 1. Couleurs
Dans `css/style.css`, modifie les variables au début du fichier :
- `--navy` : couleur principale
- `--sand` : couleur d'accent
- `--paper` : couleur de fond
- `--ink` : couleur du texte

### 2. Images
Place tes images dans `assets/images/` en conservant les noms suivants, ou modifie les chemins dans `index.html` :
- `profile.jpg` : ton portrait
- `project-branding.jpg`
- `project-website.jpg`
- `project-social.jpg`
- `project-print.jpg`
- `project-interface.jpg`
- `project-content.jpg`

Privilégie des images JPG ou WebP optimisées. Pour le portrait, choisis une photo verticale. Pour les projets, des images horizontales de bonne qualité (environ 1400 × 1000 px) fonctionnent bien.

### 3. Textes et liens
Modifie directement les textes dans `index.html`. Remplace :
- `tonadresse@email.com` par ton adresse réelle ;
- les liens `href="#"` des réseaux sociaux par tes profils ;
- les exemples d'expériences par tes dates, missions et intitulés exacts ;
- les titres, descriptions et années des projets par tes réalisations réelles.

### 4. Ajouter un projet
Duplique un bloc `<article class="project-card ...">` dans `.project-grid`.
Choisis une catégorie parmi `design`, `social` ou `web` dans `data-category`.
Ajoute son image dans `assets/images/`, puis adapte le titre et la description.

## Fonctionnalités incluses
- mise en page responsive ordinateur / tablette / mobile ;
- menu mobile ;
- filtres de projets par domaine ;
- animations d'apparition au scroll ;
- navigation avec section active ;
- année automatique dans le footer ;
- respect de la préférence système de réduction des animations.

Le formulaire de contact n'est pas inclus : le bouton utilise `mailto:` pour rester simple et sans backend.
