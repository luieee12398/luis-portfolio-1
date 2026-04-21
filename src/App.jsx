export default function App() {
  const profile = {
    name: "Luis E. Ceja Abrica",
    title: "Data Analyst | Aspiring Software Engineer & Data Scientist",
    location: "California, USA",
    email: "eduardoabrica@gmail.com",
    github: "https://github.com/luieee12398",
    linkedin: "https://www.linkedin.com/in/luis-cejaab/",
  };

  const projects = [
    {
      name: "STEM Program Data Analysis",
      description:
        "Analyzed student outcomes across programs using R and statistical methods to support data-informed decision making.",
      tech: ["R", "Statistics", "Data Analysis"],
      link: "https://github.com/luieee12398",
    },
    {
      name: "Equity Reporting Dashboard",
      description:
        "Built reporting workflows and dashboards for education equity projects, translating data into accessible insights.",
      tech: ["R", "Data Visualization", "Reporting"],
      link: "https://github.com/luieee12398",
    },
    {
      name: "WordyPy Game",
      description:
        "Developed a Wordle-style game using object-oriented programming and Python.",
      tech: ["Python", "OOP"],
      link: "https://github.com/luieee12398",
    },
  ];

  const skills = [
    "Python",
    "R",
    "SQL",
    "Java",
    "Git",
    "GitHub",
    "React",
    "Data Analysis",
    "Statistics",
    "Data Visualization",
  ];

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f8fafc",
        color: "#0f172a",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "48px 24px",
        }}
      >
        <section
          style={{
            backgroundColor: "white",
            borderRadius: "20px",
            padding: "40px",
            marginBottom: "24px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          }}
        >
          <p style={{ color: "#475569", marginBottom: "8px", fontWeight: "bold" }}>
            Portfolio
          </p>
          <h1 style={{ fontSize: "48px", margin: "0 0 12px 0" }}>{profile.name}</h1>
          <h2 style={{ fontSize: "24px", margin: "0 0 16px 0", color: "#334155" }}>
            {profile.title}
          </h2>
          <p style={{ color: "#475569", marginBottom: "20px" }}>
            {profile.location} | {profile.email}
          </p>
          <p style={{ fontSize: "18px", lineHeight: "1.6", maxWidth: "750px" }}>
            UCLA Statistics and Political Science graduate currently building toward
            software engineering and data science roles. I enjoy using code, data,
            and communication to solve real-world problems.
          </p>

          <div style={{ marginTop: "24px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              style={buttonStyleDark}
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              style={buttonStyleLight}
            >
              LinkedIn
            </a>
          </div>
        </section>

        <section
          style={{
            backgroundColor: "white",
            borderRadius: "20px",
            padding: "32px",
            marginBottom: "24px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          }}
        >
          <h2 style={sectionTitle}>About Me</h2>
          <p style={bodyText}>
            I have experience in data analysis, reporting, education, and research.
            My background combines technical analysis with communication and public-facing
            impact. I’m especially interested in software engineering, data science,
            and building tools that make information more useful and accessible.
          </p>
        </section>

        <section
          style={{
            backgroundColor: "white",
            borderRadius: "20px",
            padding: "32px",
            marginBottom: "24px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          }}
        >
          <h2 style={sectionTitle}>Skills</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {skills.map((skill) => (
              <span
                key={skill}
                style={{
                  backgroundColor: "#e2e8f0",
                  padding: "10px 14px",
                  borderRadius: "999px",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section
          style={{
            backgroundColor: "white",
            borderRadius: "20px",
            padding: "32px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          }}
        >
          <h2 style={sectionTitle}>Projects</h2>
          <div style={{ display: "grid", gap: "18px" }}>
            {projects.map((project) => (
              <div
                key={project.name}
                style={{
                  border: "1px solid #e2e8f0",
                  borderRadius: "16px",
                  padding: "20px",
                }}
              >
                <h3 style={{ marginTop: 0, marginBottom: "10px" }}>{project.name}</h3>
                <p style={bodyText}>{project.description}</p>
                <p style={{ color: "#475569", marginBottom: "14px" }}>
                  <strong>Tech:</strong> {project.tech.join(", ")}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  style={projectLink}
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

const sectionTitle = {
  fontSize: "28px",
  marginTop: 0,
  marginBottom: "16px",
};

const bodyText = {
  fontSize: "17px",
  lineHeight: "1.7",
  color: "#334155",
};

const buttonStyleDark = {
  display: "inline-block",
  backgroundColor: "#0f172a",
  color: "white",
  textDecoration: "none",
  padding: "12px 18px",
  borderRadius: "12px",
  fontWeight: "bold",
};

const buttonStyleLight = {
  display: "inline-block",
  backgroundColor: "#e2e8f0",
  color: "#0f172a",
  textDecoration: "none",
  padding: "12px 18px",
  borderRadius: "12px",
  fontWeight: "bold",
};

const projectLink = {
  display: "inline-block",
  color: "#2563eb",
  textDecoration: "none",
  fontWeight: "bold",
};