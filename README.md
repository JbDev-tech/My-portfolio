# jbDev-Tech · Portfolio

Portfolio de **Jean Baptiste**, développeur web full-stack en formation, basé à Lomé (Togo). Il présente mon parcours, mes compétences et mes projets, et regroupe mes coordonnées pour un stage.

**Démo en ligne : https://my-portfolio-seven-nu-kn04cdtdrv.vercel.app/**

<img width="959" height="455" alt="image" src="https://github.com/user-attachments/assets/306349a1-9aea-4f78-b2f5-b1e358897e36" />

<img width="959" height="458" alt="image" src="https://github.com/user-attachments/assets/8d49536f-21eb-4442-8050-deec90ba3d90" />


## Fonctionnalités

- Sections : accueil, à propos, compétences (avec onglets), projets, services, contact et pied de page
- Navigation par ancres entre les sections
- Compétences classées par catégorie (Frontend, Backend, Outils) avec les logos des technologies
- Formulaire de contact qui ouvre la messagerie du visiteur (`mailto:`)
- Design sombre et responsive, d'abord conçu sur Figma
<!-- Ajoute ou retire des lignes pour que tout soit vrai : menu mobile, bouton de téléchargement du CV, etc. -->

## Technologies

- [Next.js](https://nextjs.org/) (App Router), React et TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- [lucide-react](https://lucide.dev/) et [Devicon](https://devicon.dev/) pour les icônes
- Maquette réalisée avec Figma
- Déploiement sur [Vercel](https://vercel.com/)

## Lancer le projet en local

```bash
git clone https://github.com/JbDev-tech/My-portfolio.git
cd NOM-DU-DEPOT
npm install
npm run dev
```

Ouvre ensuite [http://localhost:3000](http://localhost:3000).


## Structure du projet

```text
app/
  layout.tsx        Police, langue et titre du site
  page.tsx          Assemblage des sections
  globals.css       Tailwind et couleurs de base
  Components/       Navbar, Hero, About, Skills, Projects, Services, Contact, Footer
public/             Images et CV
```


## Ce que j'ai appris

- Transformer une maquette Figma en composants React réutilisables
- Mettre en page avec Tailwind CSS (flex, grid, classes responsive)
- Gérer un état avec `useState` (les onglets des compétences) et un formulaire contrôlé
- Optimiser les images avec `next/image` et déployer un projet sur Vercel
- Envoie d'email (Resend) 

## Pistes d'amélioration
- Version anglaise du site

## Crédits

- Les illustrations de profil ont été générées avec un outil d'IA à partir d'une photo, puis retravaillées.
- Les logos des technologies appartiennent à leurs propriétaires respectifs et servent uniquement à indiquer les outils utilisés.

## Contact

- LinkedIn : https://www.linkedin.com/in/yawo-jeanb-ahli/
- GitHub : https://github.com/JbDev-tech
