export default function App() {
  const profile = {
    name: "Luis E. Ceja Abrica",
    title: "Data Analyst | Aspiring Software Engineer & Data Scientist",
    location: "California, USA",
    email: "eduardoabrica@gmail.com",
    github: "https://github.com/luieee12398",
    linkedin: "https://www.linkedin.com/in/luis-cejaab/",
    website: "https://eduardoabrica.wixsite.com/luisecejaabrica",
    resume: "/luis-portfolio-1/resume.pdf",
  };

  const featuredProjects = [
    {
      name: "MEFENA – Statewide Family Needs Assessment (MAEC)",
      description:
        "Led quantitative analysis and visualization for a statewide equity assessment, producing charts, maps, and narrative findings used to inform family engagement strategy and statewide equity efforts.",
      tech: ["R", "ArcGIS", "Data Visualization", "Statistical Analysis"],
      link: "https://storymaps.arcgis.com/stories/2f23b76e6534481cbb1013b96a2b544e",
    },
    {
      name: "STEM Learning Outcomes Analysis (2020-2024)",
      description:
        "Built a unified multi-year dataset across STEM programs, conducted statistical testing, and produced reports that measured learning growth and informed curriculum and evaluation improvements.",
      tech: ["R", "Statistics", "Data Engineering", "Visualization"],
    },
    {
      name: "TELPAS Data Quality & Performance Analysis",
      description:
        "Cleaned and validated a large district-level dataset, identified anomalies, and produced analysis supporting equity-focused reporting on English learner outcomes.",
      tech: ["R", "Data Cleaning", "Statistical Analysis"],
    },
    {
      name: "Survey Optimization Pipeline (Evitarus)",
      description:
        "Designed a respondent deduplication and outreach optimization pipeline that improved survey efficiency and reduced duplicate contact across projects.",
      tech: ["R", "Data Engineering", "ETL"],
    },
  ];

  const softwareProjects = [
    {
      name: "LC4 Assembler",
      description:
        "Implemented a two-pass assembler in C to translate assembly code into machine instructions. Focused on parsing, file I/O, dynamic memory management, and low-level systems logic.",
      tech: ["C", "Systems Programming", "Memory Management", "File I/O"],
    },
    {
      name: "Game of Nim",
      description:
        "Built a complete playable version of the Game of Nim in C++ with modular structure, input validation, algorithmic game logic, and both easy and optimal-strategy computer modes.",
      tech: ["C++", "Algorithms", "Game Logic"],
    },
    {
      name: "Student Management System",
      description:
        "Built a CRUD-style Java application for managing student records with modular components for storing, retrieving, and updating data.",
      tech: ["Java", "OOP", "CRUD"],
    },
    {
      name: "Object-Oriented Java Project Suite",
      description:
        "Developed multiple Java applications during my first MCIT semester, including Battleship, RPG-style games, Movie Trivia, a library catalog system, and simulation-based applications. Strengthened object-oriented programming and application design skills.",
      tech: ["Java", "OOP", "Application Development"],
    },
  ];

  const researchProjects = [
    {
      name: "UCLA Honors Thesis – Political Behavior & Public Opinion",
      description:
        "Conducted an independent honors thesis combining geospatial analysis, election data, census variables, and statistical modeling to study voter access and political participation.",
      tech: ["R", "ArcGIS", "Statistical Modeling", "Research Design"],
    },
    {
      name: "Public Opinion on Nuclear Policy in Japan and U.S. Security Commitments",
      description:
        "Analyzed public opinion data using quantitative methods to study how attitudes toward nuclear weapons influence support for international disarmament policy.",
      tech: ["R", "Data Analysis", "Visualization", "Political Research"],
    },
  ];

  const skills = [
    "Python",
    "Java",
    "C++",
    "C",
    "R",
    "SQL",
    "Git",
    "GitHub",
    "React",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Tableau",
    "ArcGIS",
    "ETL Pipelines",
    "Data Analysis",
    "Statistical Modeling",
    "Object-Oriented Programming",
    "Debugging",
    "Testing",
  ];

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        
        {/* HERO */}
        <section style={card}>
          <h1 style={{ fontSize: "48px" }}>{profile.name}</h1>
          <h2>{profile.title}</h2>
          <p>{profile.location} | {profile.email}</p>

          <div style={buttonContainer}>
            <a href={profile.github} target="_blank" rel="noreferrer" style={buttonDark}>GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" style={buttonLight}>LinkedIn</a>
            <a href={profile.website} target="_blank" rel="noreferrer" style={buttonLight}>Personal Website</a>
            <a href={profile.resume} target="_blank" rel="noreferrer" style={buttonLight}>Resume PDF</a>
          </div>
        </section>

        {/* ABOUT */}
        <section style={card}>
          <h2>About Me</h2>
          <p>
            My work spans data analytics, software development, and applied research across education,
            public policy, and STEM programs. I focus on building systems, analyzing data, and translating
            technical work into actionable insights.
          </p>
        </section>

        {/* SKILLS */}
        <section style={card}>
          <h2>Skills</h2>
          <div style={skillsContainer}>
            {skills.map((s) => <span key={s} style={skill}>{s}</span>)}
          </div>
        </section>

        <ProjectSection title="Featured Data & Evaluation Projects" projects={featuredProjects} />
        <ProjectSection title="Software Engineering Projects" projects={softwareProjects} />
        <ProjectSection title="Research & Academic Projects" projects={researchProjects} />

      </div>
    </div>
  );
}

/* COMPONENT */

function ProjectSection({ title, projects }) {
  return (
    <section style={card}>
      <h2>{title}</h2>
      {projects.map((p) => (
        <div key={p.name} style={projectCard}>
          <h3>{p.name}</h3>
          <p>{p.description}</p>
          <p><strong>Tech:</strong> {p.tech.join(", ")}</p>

          {p.link && (
            <a href={p.link} target="_blank" rel="noreferrer" style={projectLink}>
              View Project Details
            </a>
          )}
        </div>
      ))}
    </section>
  );
}

/* STYLES */

const pageStyle = { background: "#f8fafc", minHeight: "100vh" };

const containerStyle = { maxWidth: "1000px", margin: "auto", padding: "40px" };

const card = {
  background: "white",
  padding: "30px",
  borderRadius: "20px",
  marginBottom: "20px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
};

const projectCard = {
  border: "1px solid #e2e8f0",
  padding: "20px",
  borderRadius: "15px",
  marginBottom: "15px",
};

const buttonContainer = { marginTop: "15px", display: "flex", gap: "10px", flexWrap: "wrap" };

const buttonDark = {
  background: "#0f172a",
  color: "white",
  padding: "10px 15px",
  borderRadius: "10px",
  textDecoration: "none",
};

const buttonLight = {
  background: "#e2e8f0",
  color: "#0f172a",
  padding: "10px 15px",
  borderRadius: "10px",
  textDecoration: "none",
};

const projectLink = {
  display: "inline-block",
  marginTop: "10px",
  color: "#2563eb",
  fontWeight: "bold",
};

const skillsContainer = { display: "flex", flexWrap: "wrap", gap: "10px" };

const skill = {
  background: "#e2e8f0",
  padding: "8px 12px",
  borderRadius: "999px",
  fontWeight: "bold",
};