# 🚀 Muhammad Abdul Rafay — Developer Portfolio

[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat&logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/CSS3-Modern-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

A modern, responsive personal portfolio website built with **React** and **Vite**, showcasing my skills, projects, and experience as a Software Engineering student and backend developer with a growing focus on AI.


---

## 📸 Preview

<img width="1909" height="1096" alt="image" src="https://github.com/user-attachments/assets/560e5f4e-21bb-4dcd-ad12-fa26b8cd740f" />


---

## ✨ Features

- 🎨 **Dark gradient UI** with glassmorphism card effects
- 📱 **Fully responsive** — works on mobile, tablet, and desktop
- 🧩 **Component-based architecture** using React
- 🚦 **Client-side routing** with React Router DOM
- ⚡ **Fast development & build** powered by Vite
- 🧠 **React Hooks** — `useState`, `useEffect` (all three patterns)
- 📋 **Controlled contact form** with validation and success state
- 🎯 **Props-driven components** for clean, reusable code
- 📂 **Centralized data files** for easy content updates
- 🔲 **404 Not Found** page for unmatched routes

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | React 18 |
| Build Tool | Vite |
| Routing | React Router DOM |
| Styling | CSS3 (Custom, no UI library) |
| Language | JavaScript ES6+ |
| Version Control | Git & GitHub |
| Editor | VS Code |

---

## 📁 Project Structure

```
portfolio-app/
├── public/
│   ├── images/
│   └── cv.pdf                  # Downloadable resume
│
├── src/
│   ├── assets/
│   │   └── images/
│   │       └── profile.jpg     # Profile photo
│   │
│   ├── components/             # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── SkillCard.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ContactForm.jsx
│   │   └── ScrollToTop.jsx
│   │
│   ├── pages/                  # Route-level page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   │
│   ├── data/                   # Static data files
│   │   ├── profileData.js
│   │   ├── skillsData.js
│   │   └── projectsData.js
│   │
│   ├── styles/                 # Component-scoped CSS files
│   │   ├── navbar.css
│   │   ├── footer.css
│   │   ├── home.css
│   │   ├── about.css
│   │   ├── skills.css
│   │   ├── projects.css
│   │   └── contact.css
│   │
│   ├── App.jsx                 # Root component with routing
│   ├── main.jsx                # React DOM entry point
│   └── index.css               # Global styles & CSS variables
│
├── package.json
├── vite.config.js
└── .gitignore
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm (comes with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/My-Portfolio-Mini-Project.git

# 2. Navigate into the project directory
cd portfolio-app

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will be running at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

---

## 📄 Pages Overview

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero section with name, title, intro, and CV download |
| About | `/about` | Bio with expandable "Read More" toggle using `useState` |
| Skills | `/skills` | Skill badges rendered dynamically from `skillsData.js` |
| Projects | `/projects` | Project cards with title and description from `projectsData.js` |
| Contact | `/contact` | Controlled form with submit confirmation |
| 404 | `*` | Custom not-found page for unmatched routes |

---

## 🧠 React Concepts Demonstrated

| Concept | Where Used |
|---------|-----------|
| **Components** | Navbar, Footer, HeroSection, SkillCard, ProjectCard, ContactForm |
| **Props** | Data passed from `profileData.js` → `HeroSection` |
| **useState** | About page toggle, Contact form state management |
| **useEffect (on mount)** | `document.title` update on Home page load |
| **useEffect (dependency)** | Logs when `show` state changes in About page |
| **useEffect (no deps)** | Runs on every render in Contact page |
| **List Rendering** | `skills.map()` and `projects.map()` with `SkillCard` / `ProjectCard` |
| **Controlled Forms** | Name/email/message inputs bound to state |
| **Conditional Rendering** | Success message after form submit, expanded bio text |
| **React Router** | Page navigation without full reload |

---

## 🎯 Featured Projects

| Project | Description |
|---------|------------|
| **Startup Website** | Responsive frontend for a real tech startup |
| **AI Agents** | Python-based intelligent agents using NLP concepts |
| **Hotel Management System** | OOP-based employee & data management system |
| **E-Learning Platform** | Backend system with user roles and course management |

---

## 🙋‍♂️ About Me

I'm **Muhammad Abdul Rafay**, a Software Engineering student at ITU with hands-on experience in backend development, web projects, and AI exploration. I enjoy building scalable systems and solving real-world problems through code.

---

## 📫 Contact

| Platform | Link |
|----------|------|
| 📧 Email | rafaykhan55555@gmail.com |
| 💼 LinkedIn | https://www.linkedin.com/in/muhammad-abdul-rafay-khan-/ |
| 💻 GitHub | https://github.com/RKAnalytics |

---

## 🔮 Future Improvements

- [ ] Connect contact form to a backend (Node.js + Nodemailer)
- [ ] Add page transition animations (Framer Motion)
- [ ] Deploy with a custom domain
- [ ] Add project filtering by tech stack
- [ ] Integrate a GitHub API to auto-fetch repositories
- [ ] Dark / Light mode toggle

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

<p align="center">Designed & built by <strong>Muhammad Abdul Rafay</strong> • SE302T Assignment 3</p>
