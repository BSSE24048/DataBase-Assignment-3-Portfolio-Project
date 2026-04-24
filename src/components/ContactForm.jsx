import { useState } from "react";
// import "../styles/navbar.css";


function ContactForm() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <button type="submit">Submit</button>
      </form>

      {submitted && <p>Form submitted!</p>}
    </div>
  );
}

export default ContactForm;