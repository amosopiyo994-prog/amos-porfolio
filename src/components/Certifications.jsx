function Certifications() {
  const certificates = [
    {
      title: "IBM AI Fundamentals",
      file: "/AI_Fundamentals.pdf",
    },
    {
      title: "Introduction to Artificial Intelligence",
      file: "/Introduction_to_AI.pdf",
    },
    {
      title: "Machine Learning",
      file: "/Machine_Learning.pdf",
    },
  ];

  return (
    <section className="certifications" id="certifications">
      <h2>🏆 Certifications</h2>

      <div className="certifications-container">
        {certificates.map((cert, index) => (
          <div className="certificate-card" key={index}>
            <h3>{cert.title}</h3>

            <a
              href={cert.file}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="certificate-btn">
                📄 View Certificate
              </button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;