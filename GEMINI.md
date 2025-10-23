# Project Overview

This project is a static website for "Grupo Constructor LMV", a construction company. The website is designed to be professional and modern, showcasing the company's services and projects.

**Main Technologies:**
- HTML5 for structure
- CSS3 for styling
- JavaScript for interactive elements (e.g., title animations)

**Architecture:**
The website follows a standard static site structure with:
- `index.html`: The main entry point of the website, containing the overall structure and content for various sections (Inicio, Nosotros, Servicios, Proyectos, Contacto).
- `css/style.css`: Contains the global styles, including a color palette derived from the company logo, and font definitions.
- `js/main.js`: Handles client-side interactivity, specifically animations for section titles.
- `IMAGES/`: Directory containing project images, further organized into `FOTOS`, `FOTOS2`, and `V` subdirectories.
- `VIDEOS/`: Intended for video content (currently empty).
- `CV.pdf`: Contains detailed information about the company's projects and services, used as a source for website content.
- `LOGO.jpeg`: The company's logo.

# Building and Running

This is a static website and does not require a complex build process.

**To run the project locally:**
1. Open the `index.html` file in your preferred web browser.

# Development Conventions

**Styling:**
- Uses CSS variables for consistent color management.
- Employs Google Fonts: 'Montserrat' for headings and 'Roboto' for body text.
- Basic responsive design principles are applied.

**Scripting:**
- JavaScript is used for enhancing user experience, such as animating section titles when they come into view using the Intersection Observer API.

**Content Organization:**
- Project images are categorized and stored in subdirectories within the `IMAGES/` folder (`FOTOS`, `FOTOS2`, `V`).
- Company mission, vision, services, and contact information are integrated directly into `index.html`, sourced from `CV.pdf`.

# Deployment

The website is intended for deployment on static hosting platforms like GitHub Pages.

**Steps for GitHub Pages deployment (assuming Git is installed and configured):**
1.  **Initialize Git repository (if not already done):**
    ```bash
    git init
    ```
2.  **Add all project files:**
    ```bash
    git add .
    ```
3.  **Commit the changes:**
    ```bash
    git commit -m "Initial commit: Static website for Grupo Constructor LMV"
    ```
4.  **Create a new repository on GitHub:**
    - Go to [github.com/new](https://github.com/new).
    - Choose a repository name (e.g., `grupo-constructor-lmv`).
    - Do NOT initialize with a README, .gitignore, or license.
5.  **Link local repository to GitHub:**
    ```bash
    git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
    git branch -M main
    git push -u origin main
    ```
    (Replace `YOUR_USERNAME` and `YOUR_REPOSITORY_NAME` with your actual GitHub username and repository name.)
6.  **Enable GitHub Pages:**
    - On GitHub, navigate to your repository.
    - Click on "Settings".
    - In the left sidebar, click on "Pages".
    - Under "Build and deployment", select "Deploy from a branch".
    - For "Branch", select `main` (or `master`) and choose the `/ (root)` folder.
    - Click "Save".
    - Your site will be deployed shortly, and the URL will be provided on the Pages settings page.
