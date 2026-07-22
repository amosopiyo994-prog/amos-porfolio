function Timeline() {
  const timeline = [
    {
      year: "2024",
      title: "Started Bachelor of Information Technology",
      description:
        "Began studying at Masinde Muliro University of Science and Technology (MMUST).",
    },
    {
      year: "2025",
      title: "Networking & Windows Server",
      description:
        "Learned Cisco Networking, VMware virtualization, Windows Server and Active Directory.",
    },
    {
      year: "2026",
      title: "IoT Projects",
      description:
        "Developed an ESP32-based wireless temperature monitoring system using MQTT, LCD and DHT11.",
    },
    {
      year: "2026",
      title: "React Developer",
      description:
        "Built responsive websites and a professional portfolio using React and Vite.",
    },
  ];

  return (
    <section className="timeline" id="timeline" data-aos="fade-up">
      <h2>My Journey</h2>

      <div className="timeline-container">
        {timeline.map((item, index) => (
          <div className="timeline-card" key={index}>
            <h3>{item.year}</h3>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Timeline;