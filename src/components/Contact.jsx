import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_aasry8l",
        "template_vh2y2d9",
        form.current,
        "9CG1ddaJ5HdP8jXsY"
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to send message.");
          console.log(error);
        }
      );
  };

  return (
    <section className="contact" id="contact" data-aos="fade-up">
      <h2>📞 Contact Me</h2>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
        />

        <textarea
          name="message"
          rows="6"
          placeholder="Your Message"
          required
        />

        <button type="submit">Send Message</button>
      </form>

      <div className="contact-info">
        <p>📧 amosopiyo994@gmail.com</p>
        <p>📱 0702063678</p>
      </div>
    </section>
  );
}

export default Contact;