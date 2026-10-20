# Archive d’images — Jetour Haïti

Cet outil collecte les images publiques référencées par les pages de `jetourhaiti.com`, en respectant `robots.txt`, à raison d’au moins 500 ms entre les requêtes.

## Installation et lancement

```powershell
npm install
npm run scrape
```

Les images sont dans `images-jetourhaiti/`, avec un dossier par page source. `manifest.json` relie chaque fichier téléchargé à son URL d’origine et liste les éventuelles erreurs.

Pour lancer depuis une autre page de départ du même site :

```powershell
node scrape-images.mjs https://jetourhaiti.com/index.html
```

Pour enregistrer toutes les images dans **un unique dossier** (sans sous-dossiers par page) :

```powershell
node scrape-images.mjs https://jetourglobal.com/ --flat
```

Si le site publie un sitemap d’images, `--sitemap-only` télécharge directement ces images officielles sans parcourir les pages une à une :

```powershell
node scrape-images.mjs https://jetourglobal.com/ --flat --sitemap-only
```
