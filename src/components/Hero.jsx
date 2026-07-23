
import { FaGithub, FaEnvelope, FaDownload } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section className="hero" id="hero" data-aos="fade-up">
      <div className="hero-image">
        <img src="/profile.jpg" alt="Amos Opiyo" />
      </div>

      <div className="status-badge">
        Available for Internship
        <h1>
          Hi, I'm <span>Amos Opiyo</span>
        </h1>

        <TypeAnimation
          sequence={[
            "Bachelor of Information Technology",
            2000,
            "Full-Stack Developer",
            2000,
            "Android Developer",
            2000,
            "Network Administrator",
            2000,
            "IoT Enthusiast",
            2000,
          ]}
          wrapper="h2"
          speed={50}
          repeat={Infinity}
          className="typing"
        />

        <p>
          Passionate software developer with experience in web development,
          Android applications, networking, Windows Server administration, and
          Internet of Things (IoT). I enjoy building solutions that solve
          real-world problems.
        </p>

        <div className="hero-buttons">
          <a
            href="https://github.com/amosopiyo994-prog"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            <FaGithub /> GitHub
          </a>

          <a
            href="mailto:amosopiyo994@gmail.com"
            className="btn"
          >
            <FaEnvelope /> Email
          </a>

          <a
            href="/Amos_Opiyo_CV.pdf"
            download
            className="btn"
          >
            <FaDownload /> Download CV
          </a>

          <a
            href="/Amos_Opiyo_Cover_Letter.pdf"
            download
            className="btn"
          >
            <FaDownload /> Download Cover Letter
          </a>
        </div>
      </div>

    </section>
  );
}

export default Hero;