# jbDev-Tech · Portfolio

Portfolio de **Jean Baptiste**, développeur web full-stack en formation, basé à Lomé (Togo). Il présente mon parcours, mes compétences et mes projets, et regroupe mes coordonnées pour un stage.

**Démo en ligne : https://jbdev-tech.vercel.app**

<img width="959" height="455" alt="image" src="https://github.com/user-attachments/assets/306349a1-9aea-4f78-b2f5-b1e358897e36" />

<img width="959" height="458" alt="image" src="https://github.com/user-attachments/assets/8d49536f-21eb-4442-8050-deec90ba3d90" />

## Fonctionnalités

- Sections : accueil, à propos, compétences (avec onglets), projets, services, contact et pied de page
- Navigation par ancres entre les sections
- Compétences classées par catégorie (Frontend, Backend, Outils) avec les logos des technologies
- Téléchargement de mon CV en PDF
- Formulaire de contact fonctionnel : le message est envoyé par email grâce à une Server Action et au service Resend
  - validation des champs côté serveur
  - champ piège contre le spam
  - message de confirmation ou d'erreur qui disparaît après quelques secondes
- Design sombre et responsive, d'abord conçu sur Figma

## Technologies

- [Next.js](https://nextjs.org/) (App Router), React et TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- [Resend](https://resend.com/) pour l'envoi des emails
- [lucide-react](https://lucide.dev/) et [Devicon](https://devicon.dev/) pour les icônes
- Maquette réalisée avec Figma
- Déploiement sur [Vercel](https://vercel.com/)

## Lancer le projet en local

```bash
git clone https://github.com/JbDev-tech/My-portfolio.git
cd My-portfolio
npm install
```

Crée ensuite un fichier `.env.local` à la racine du projet :

```env
RESEND_API_KEY=ta_cle_api_resend
CONTACT_TO_EMAIL=adresse_qui_recoit_les_messages
```

Puis lance le serveur de développement :

```bash
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000).

> Le formulaire de contact a besoin de ces deux variables pour envoyer les messages. Le fichier `.env.local` n'est pas versionné : ne publie jamais ta clé API sur GitHub.

## Structure du projet

```text
app/
  actions/
    Contact.ts      Server Action : validation et envoi de l'email
  layout.tsx        Police, langue et titre du site
  page.tsx          Assemblage des sections
  globals.css       Tailwind et couleurs de base
  Components/       Navbar, Hero, About, Skills, Projects, Services, Contact, Footer
public/             Images et CV
```

## Ce que j'ai appris

- Transformer une maquette Figma en composants React réutilisables
- Mettre en page avec Tailwind CSS (flex, grid, classes responsive)
- Gérer un état avec `useState` (les onglets des compétences)
- Créer un formulaire avec une Server Action Next.js et `useActionState`
- Envoyer des emails avec Resend et valider les données côté serveur
- Gérer les variables d'environnement en local et sur Vercel
- Optimiser les images avec `next/image` et déployer un projet sur Vercel
- Déboguer les différences entre Windows et Linux (par exemple la casse des noms de fichiers)

## Pistes d'amélioration

- Version anglaise du site
- Nom de domaine personnalisé 
- Ajout de nouveaux projets 

## Crédits

- Les illustrations de profil ont été générées avec un outil d'IA à partir d'une photo, puis retravaillées.
- Les logos des technologies appartiennent à leurs propriétaires respectifs et servent uniquement à indiquer les outils utilisés.

## Contact

- LinkedIn : https://www.linkedin.com/in/yawo-jeanb-ahli/
- GitHub : https://github.com/JbDev-tech
