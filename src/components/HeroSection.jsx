function HeroSection({ name, title, intro }) {
  return (
    <div className="hero">
      <h1>{name}</h1>
      <h2>{title}</h2>
      <p>{intro}</p>

      <div className="hero-buttons">
        <a href="/cv.pdf" download>
          <button>Download CV</button>
        </a>

        <button>View Projects</button>
      </div>
    </div>
  );
}

export default HeroSection;