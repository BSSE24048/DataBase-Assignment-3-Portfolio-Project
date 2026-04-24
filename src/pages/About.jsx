import { useState } from "react";
import "../styles/about.css";

function About() {
  useEffect(() => {

      console.log("About page loaded");
      document.title = "About | Portfolio";  // also satisfies title requirement
    }, []);

  const [showMore, setShowMore] = useState(false);

  return (
    <section className="about">
      <div className="about-container">
        <h1>About Me</h1>

        {/* SHORT BIO (ALWAYS VISIBLE) */}
        <p>
          I am a Software Engineering student passionate about backend
          development, data structures, and scalable system design.
        </p>

        {/* CONDITIONAL CONTENT */}
        {showMore && (
          <div className="extra-content">
            <p>
              <strong>Education:</strong> Currently pursuing Software
              Engineering with focus on modern development practices.
            </p>

            <p>
              <strong>Career Goals:</strong> To become a skilled backend
              engineer and work on AI-driven scalable systems.
            </p>

            <p>
              <strong>Hobbies:</strong> Coding, exploring new technologies,
              problem-solving, and learning AI concepts.
            </p>
          </div>
        )}

        {/* BUTTON */}
        <button
          className="read-btn"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Read Less" : "Read More"}
        </button>
      </div>
    </section>
  );
}

export default About;