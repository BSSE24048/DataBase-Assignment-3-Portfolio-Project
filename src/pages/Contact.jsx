import { useState } from "react";
import "../styles/contact.css";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="contact">
      <h1>Contact Me</h1>

      {/* 🔥 IMPORTANT: form MUST be direct child */}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Your name" required />
        <input type="email" placeholder="Your email" required />
        <textarea placeholder="Your message" required />

        <button type="submit" className="btn-primary">
          Send Message
        </button>
      </form>

      {submitted && (
        <p className="success-msg">
          ✅ Message sent successfully!
        </p>
      )}
    </section>
  );
}

export default Contact;