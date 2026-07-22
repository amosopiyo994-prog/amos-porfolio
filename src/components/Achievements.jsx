function Achievements() {
  const achievements = [
    "🏆 Built an IoT Temperature Monitoring System using ESP32",
    "🖥️ Configured Windows Server 2019 and Active Directory",
    "🌐 Completed Cisco Networking and VLAN Configuration",
    "💻 Developed a Professional React Portfolio Website",
    "📱 Built Java and Android Applications",
    "🛠️ Experienced with VMware Virtualization",
  ];

  return (
    <section className="achievements" id="achievements" data-aos="zoom-in">
      <h2>Achievements</h2>

      <div className="achievement-grid">
        {achievements.map((item, index) => (
          <div className="achievement-card" key={index}>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;