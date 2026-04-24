import "../styles/skills.css";

function Skills() {

  useEffect(() => {
      console.log("Skills page loaded");
      document.title = "Skills | Portfolio";  // also satisfies title requirement
    }, []);

  const skills = [
    { title: "C++", desc: "Strong foundation in programming and logic building." },
    { title: "Object-Oriented Programming", desc: "Concepts like classes, inheritance, and polymorphism." },
    { title: "Data Structures & Algorithms", desc: "Efficient problem solving and optimization techniques." },
    { title: "Software Design", desc: "Scalable and structured application architecture." },
    { title: "Git & GitHub", desc: "Version control and collaborative development." },
    { title: "Docker", desc: "Basic containerization for applications." },
    { title: "Kubernetes", desc: "Basic orchestration concepts." },
    { title: "Problem Solving", desc: "Analytical thinking and debugging skills." },
    { title: "Team Collaboration", desc: "Experience working in team environments." }
  ];

  return (
    <section className="skills">
      <h1>My Skills</h1>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <strong>{skill.title}</strong>
            <p>{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;