# Portfolio — Driss Bahammou (BTS SIO SISR)

Site statique HTML / CSS / JavaScript (aucune dépendance, aucun build).

## Structure
- `index.html` : toutes les sections (Accueil, À propos, Certifications, Parcours, Projets, Veille, E5/E6, CV, Contact)
- `css/style.css` : design (thème clair/sombre, responsive)
- `js/script.js` : menu mobile, thème, fenêtres "En savoir plus"
- `assets/docs/` : ton CV → `cv-driss-bahammou.pdf`
- `assets/img/` : attestations, captures d'écran, schémas

## À compléter
- [ ] CV PDF dans `assets/docs/`
- [ ] Email / LinkedIn / GitHub (sections Contact et footer) + URL du formulaire
- [ ] Détails des 2 projets (difficultés & solutions)
- [ ] Certifications, Veille, pages E5 / E6
- [ ] Nom de ton établissement et dates de formation (vérifie 2025 – 2027)

## Publier sur GitHub Pages
```bash
git init && git add . && git commit -m "Version initiale"
git branch -M main
git remote add origin https://github.com/<pseudo>/<repo>.git
git push -u origin main
```
Puis Settings → Pages → branche `main`, dossier `/ (root)`.
