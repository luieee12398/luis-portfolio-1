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

  const experience = [
    {
      role: "Data Analyst",
      org: "STEM Center USA",
      date: "October 2024 - Present",
      bullets: [
        "Built and maintained scalable datasets and evaluation pipelines across STEM programs.",
        "Designed ETL workflows for cleaning, validation, and transformation of large datasets.",
        "Conducted statistical analysis to measure student outcomes and program effectiveness.",
      ],
    },
    {
      role: "Data Evaluation Intern",
      org: "Mid-Atlantic Equity Consortium (MAEC)",
      date: "November 2024 - July 2025",
      bullets: [
        "Developed automated reporting workflows and dashboards for statewide data analysis.",
        "Analyzed large survey datasets to support equity-focused evaluation initiatives.",
        "Managed data integration, cleaning, and QA for multi-source datasets.",
      ],
    },
    {
      role: "Data Analyst",
      org: "EVITARUS",
      date: "October 2021 - September 2022",
      bullets: [
        "Analyzed datasets using R and statistical techniques to generate insights for research projects.",
        "Improved data workflows for consistency and efficiency across multiple studies.",
        "Supported survey design, data cleaning, and reporting processes.",
      ],
    },
  ];

  const additionalExperience = [
    "Certified Substitute Teacher - CVUSD",
    "STEM Instructor - Migrant Education Program",
    "English Instructor - Global English Camp (Japan)",
  ];

  const featuredProjects = [
    {
      name: "MEFENA – Statewide Family Needs Assessment (MAEC)",
      description:
        "Led quantitative analysis and visualization for a statewide equity assessment, producing ArcGIS StoryMaps used to inform policy and resource allocation.",
      tech: ["R", "ArcGIS", "Data Visualization"],
      link: "https://storymaps.arcgis.com/stories/2f23b76e6534481cbb1013b96a2b544e",
    },
    {
      name: "STEM Learning Outcomes Analysis",
      description:
        "Built a multi-year dataset and conducted statistical testing to measure student learning outcomes and improve program design.",
      tech: ["R", "Statistics", "Data Analysis"],
    },
    {
      name: "TELPAS Analysis",
      description:
        "Cleaned and analyzed district-level data to identify patterns in English learner performance.",
      tech: ["R", "Data Cleaning"],
    },
  ];

  const softwareProjects = [
    {
      name: "LC4 Assembler",
      description:
        "Implemented a two-pass assembler in C with parsing, file I/O, and memory management.",
      tech: ["C", "Systems Programming"],
    },
    {
      name: "Game of Nim",
      description:
        "Built a C++ strategy game with optimal algorithmic logic and multiple difficulty modes.",
      tech: ["C++", "Algorithms"],
    },
    {
      name: "Java Project Suite",
      description:
        "Developed multiple Java applications including Battleship, RPG games, and data systems using object-oriented programming.",
      tech: ["Java", "OOP"],
    },
  ];

  const researchProjects = [
    {
      name: "UCLA Honors Thesis",
      description:
        "Conducted geospatial and statistical analysis to study voter access and turnout.",
      tech: ["R", "ArcGIS"],
    },
    {
      name: "Japan Nuclear Policy Study",
      description:
        "Analyzed public opinion data to study attitudes toward nuclear policy and international agreements.",
      tech: ["R", "Statistical Modeling"],
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
    "React",
    "Tableau",
    "ArcGIS",
    "Data Analysis",
    "Statistical Modeling",
  ];

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>

        {/* HERO */}
        <section style={card}>
          <h1>{profile.name}</h1>
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
            I combine data analysis, software engineering, and research to solve real-world problems.
            My work spans education, policy, and technology, with a focus on building systems and
            generating insights from complex data.
          </p>
        </section>

        {/* SKILLS */}
        <section style={card}>
          <h2>Skills</h2>
          <div style={skillsContainer}>
            {skills.map((s) => <span key={s} style={skill}>{s}</span>)}
          </div>
        </section>

        {/* EXPERIENCE */}
        <ExperienceSection experience={experience} />

        {/* ADDITIONAL EXPERIENCE */}
        <section style={card}>
          <h2>Additional Experience</h2>
          <ul>
            {additionalExperience.map((e) => <li key={e}>{e}</li>)}
          </ul>
        </section>

        {/* PROJECTS */}
        <ProjectSection title="Featured Projects" projects={featuredProjects} />
        <ProjectSection title="Software Engineering Projects" projects={softwareProjects} />
        <ProjectSection title="Research Projects" projects={researchProjects} />

      </div>
    </div>
  );
}

/* COMPONENTS */

function ExperienceSection({ experience }) {
  return (
    <section style={card}>
      <h2>Experience</h2>
      {experience.map((job) => (
        <div key={job.role} style={projectCard}>
          <h3>{job.role}</h3>
          <p><strong>{job.org}</strong> - {job.date}</p>
          <ul>
            {job.bullets.map((b) => <li key={b}>{b}</li>)}
          </ul>
        </div>
      ))}
    </section>
  );
}

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

const buttonContainer = { display: "flex", gap: "10px", flexWrap: "wrap" };

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