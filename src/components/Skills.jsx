import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaWindows,
} from "react-icons/fa";

import {
  SiMysql,
  SiCplusplus,
  SiAndroid,
  SiArduino,
} from "react-icons/si";

function Skills() {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 />, level: 95 },
    { name: "CSS3", icon: <FaCss3Alt />, level: 90 },
    { name: "JavaScript", icon: <FaJs />, level: 90 },
    { name: "React", icon: <FaReact />, level: 85 },
    { name: "Java", icon: <FaJava />, level: 88 },
    { name: "MySQL", icon: <SiMysql />, level: 85 },
    { name: "C++", icon: <SiCplusplus />, level: 78 },
    { name: "Android", icon: <SiAndroid />, level: 80 },
    { name: "Windows Server", icon: <FaWindows />, level: 90 },
    { name: "Arduino", icon: <SiArduino />, level: 85 },
    { name: "Git", icon: <FaGitAlt />, level: 88 },
    { name: "GitHub", icon: <FaGithub />, level: 90 },
  ];

  return (
    <section className="skills" id="skills">
      <h2 data-aos="fade-up">Technical Skills</h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div
            className="skill-card"
            key={skill.name}
            data-aos="zoom-in"
          >
            <span className="skill-percent">{skill.level}%</span>

            <div className="skill-icon">
              {skill.icon}
            </div>

            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;