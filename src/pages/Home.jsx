import "../styles/home.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";   // import this

function Home() {

  // 1. runs once (page load)
  useEffect(() => {
    console.log("Home page loaded");
    document.title = "Home | Portfolio";  // also satisfies title requirement
  }, []);

  return (
    <section className="hero">
      <h1 className="hero-title">Ruhma Yasir</h1>

      <h2 className="hero-subtitle">
        Software Engineering Student | Frontend Developer | UI/UX Enthusiast
      </h2>

      <p className="hero-description">
        Passionate software engineering student with a strong interest in
        frontend development and user experience design. Skilled in building
        responsive, user-friendly web applications and continuously exploring
        modern technologies to create impactful digital solutions.
      </p>

      <div className="hero-buttons">
        <a href="/Ruhma_Yasir_cv.pdf" download className="btn-primary">
          Download CV
        </a>

        <Link to="/projects" className="btn-secondary">
          View Projects
        </Link>
      </div>
    </section>
  );
}

export default Home;