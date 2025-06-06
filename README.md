# QuickCinema

QuickCinema is a React application built with Vite that displays movies from the TMDB API (or an alternative API) using a sleek carousel interface. It features Redux for state management, Firebase for user authentication, and Tailwind CSS for styling.

## Features

- **React + Vite:** Fast development with Hot Module Replacement (HMR)
- **Redux Toolkit:** Simplified state management
- **Firebase Authentication:** Secure user login and authentication
- **Movie Carousel:** Display movies using a custom React carousel
- **Tailwind CSS:** Responsive and modern UI
- **Backend Proxy (Optional):** A Node.js/Express backend for securely handling TMDB API requests

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js) or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone <https://github.com/imgaurav-17/QuickCinema>
   cd QuickCinema
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the project root with your Firebase and TMDB credentials:
   ```env
   # Vite exposes env variables starting with VITE_ to the client side.
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_firebase_app_id

   # For backend proxy (if used)
   TMDB_API_KEY=your_tmdb_api_key
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

## Building for Production

To create an optimized production build, run:

```bash
npm run build
```

The output will be in the `dist` folder.

## Deployment Guide

### Deploying the Frontend

Your production build can be deployed to any static hosting provider. Here are a few popular options:

#### Vercel

1. **Sign up** at [Vercel](https://vercel.com/) and import your Git repository.
2. **Configure Build Settings:**
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
3. **Set Environment Variables:**  
   In the Vercel dashboard, add the same environment variables defined in your `.env` file.
4. **Deploy:** Vercel will build and deploy your project automatically.

#### Netlify

1. **Sign up** at [Netlify](https://www.netlify.com/) and link your Git repository.
2. **Set Build Commands:**
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`
3. **Configure Environment Variables:**  
   Add your environment variables via the Netlify dashboard.
4. **Deploy:** Netlify will build and host your application.

#### Render

1. **Create a New Static Site** on [Render](https://render.com/).
2. **Configure Build Settings:**
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`
3. **Add Environment Variables:**  
   Include your variables in Render's dashboard.
4. **Deploy:** Render will handle the build and deployment process.

### Deploying the Backend Proxy (Optional)

If you are using a Node.js/Express backend to proxy TMDB API requests:

1. **Create a separate backend folder** (if not already created) and add your server code (e.g., `server.js`).

2. **Install Backend Dependencies:**
   ```bash
   cd backend
   npm install express node-fetch cors dotenv
   ```

3. **Create a `.env` file** in your backend folder:
   ```env
   TMDB_API_KEY=your_tmdb_api_key
   PORT=3001
   ```

4. **Run Your Server Locally:**
   ```bash
   node server.js
   ```

5. **Deploying the Backend:**

   - **Heroku:**  
     Push your backend code to a Heroku app. Configure the environment variables in the Heroku dashboard.
   - **Render:**  
     Create a new Web Service, set the **build command** (`npm install`) and **start command** (`node server.js`), then add the required environment variables.

## Contributing

Contributions are welcome! Please open an issue or a pull request for any enhancements or bug fixes.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- [TMDB](https://www.themoviedb.org) for providing movie data.
- [Firebase](https://firebase.google.com/) for authentication and backend services.
- [Vite](https://vitejs.dev/) for a fast development environment.
- [Tailwind CSS](https://tailwindcss.com/) for modern styling.# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
