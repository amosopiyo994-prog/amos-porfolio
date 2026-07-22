import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "IoT Temperature Monitoring System",
      description:
        "An ESP32-based smart temperature monitoring system with LCD display, DHT11 sensor, buzzer alerts, MQTT communication and real-time monitoring.",
      tech: "ESP32 • Arduino • MQTT • DHT11",
      github: "https://github.com/amosopiyo994-prog",
      demo: "#",
    },
    {
      title: "Windows Server Administration",
      description:
        "Configured Active Directory Domain Services, created users and groups, joined client PCs to the domain, configured Group Policy and managed Windows Server 2019.",
      tech: "Windows Server • Active Directory • VMware",
      github: "https://github.com/amosopiyo994-prog",
      demo: "#",
    },
    {
      title: "Personal Portfolio Website",
      description:
        "A modern responsive portfolio built using React, Vite and CSS featuring animations, responsive design and smooth scrolling.",
      tech: "React • Vite • CSS",
      github: "https://github.com/amosopiyo994-prog",
      demo: "#",
    },
  ];

  return (
    <section className="projects" id="projects" data-aos="fade-left">
      <h2>Featured Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <h4>{project.tech}</h4>

            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
              >
                <FaGithub /> GitHub
              </a>

              <a
                href={project.demo}
                className="project-btn demo-btn"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;