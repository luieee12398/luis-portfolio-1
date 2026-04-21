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
        "Cleaned, analyzed, and visualized statewide survey data for Maine’s Education Department to identify trends in family needs by race, county, and region. Created statistical tables, charts, and ArcGIS maps, and contributed major sections of the final report used to inform statewide equity initiatives and resource allocation.",
      tech: ["R", "ArcGIS", "Data Visualization", "Statistical Analysis"],
    },
    {
      name: "STEM Programs Evaluation - Post-Assessment Analysis",
      description:
        "Built a consolidated master dataset across multiple K-12 STEM programs, performed statistical testing including Wilcoxon, Chi-square, and Cramer’s V, and created data visualizations to measure student learning outcomes. Produced reports that supported curriculum refinement and long-term program evaluation.",
      tech: ["R", "Statistics", "Data Analysis", "Reporting"],
    },
    {
      name: "TELPAS Alignment Study (MAEC)",
      description:
        "Conducted data cleaning, score analysis, and performance comparisons across student groups using district-level TELPAS data. Produced reproducible scripts, summary tables, and visualizations that highlighted language proficiency patterns and supported district recommendations.",
      tech: ["R", "Data Cleaning", "Visualization", "Reproducible Analysis"],
    },
    {
      name: "Respondent Matching & Survey Optimization Pipeline (Evitarus)",
      description:
        "Developed an R-based pipeline to merge datasets across political research projects, remove duplicate respondents, and generate likely respondent lists. Improved sampling efficiency, reduced survey costs, and created documentation that supported long-term organizational use.",
      tech: ["R", "Data Engineering", "ETL", "Automation"],
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
        "Built a complete playable version of the Game of Nim in C++ with modular program structure, algorithmic logic, and dynamic user interaction. This was a major software project from my community college coursework.",
      tech: ["C++", "Algorithms", "Game Logic"],
    },
    {
      name: "Student Management System",
      description:
        "Built a CRUD-style Java application for managing student records, with modular components for storing, retrieving, and updating data.",
      tech: ["Java", "OOP", "CRUD"],
    },
    {
      name: "Object-Oriented Java Project Suite",
      description:
        "Developed multiple Java applications during my first MCIT semester, including Battleship, an RPG-style game, Movie Trivia, a library catalog system, a supermarket simulation, an ice cream stand project, a water tank game, and a small website. These projects strengthened my understanding of object-oriented programming, application logic, and program structure.",
      tech: ["Java", "OOP", "Application Development"],
    },
  ];

  const researchProjects = [
    {
      name: "UCLA Honors Thesis – Political Behavior & Public Opinion",
      description:
        "Conducted an independent research study on voter access and political participation by combining polling place locations, precinct-level election data, census variables, and historical voting patterns. The project involved geospatial analysis, statistical modeling, research design, and academic writing.",
      tech: ["R", "ArcGIS", "Statistical Modeling", "Research Design"],
    },
    {
      name: "Japan Nuclear Policy & U.S. Security Perceptions",
      description:
        "Analyzed public-opinion data to study Japanese attitudes toward nuclear weapons and U.S. treaty participation. Used quantitative analysis and data visualization to connect historical context with contemporary geopolitical attitudes.",
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
          maxWidth: "1050px",
          margin: "0 auto",
          padding: "48px 24px",
        }}
      >
        <section style={heroCard}>
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

          <p style={{ fontSize: "18px", lineHeight: "1.6", maxWidth: "780px" }}>
            University of Pennsylvania MAS-CS student and UCLA Statistics and Political
            Science graduate with experience across data analysis, software engineering,
            evaluation, and research. I enjoy building tools, analyzing complex data,
            and translating technical work into clear insights and impact.
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

            <a
              href={profile.website}
              target="_blank"
              rel="noreferrer"
              style={buttonStyleLight}
            >
              Personal Website
            </a>

            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              style={buttonStyleLight}
            >
              Resume PDF
            </a>
          </div>
        </section>

        <section style={sectionCard}>
          <h2 style={sectionTitle}>About Me</h2>
          <p style={bodyText}>
            My work spans data analytics, software development, and applied research
            across education, public policy, health-related data, and STEM programs.
            I’m especially interested in software engineering and data science roles
            where I can combine programming, analytical thinking, and communication to
            solve real-world problems.
          </p>
        </section>

        <section style={sectionCard}>
          <h2 style={sectionTitle}>Skills</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {skills.map((skill) => (
              <span key={skill} style={skillPill}>
                {skill}
              </span>
            ))}
          </div>
        </section>

        <ProjectSection
          title="Featured Data & Evaluation Projects"
          projects={featuredProjects}
        />

        <ProjectSection
          title="Software Engineering Projects"
          projects={softwareProjects}
        />

        <ProjectSection
          title="Research & Academic Projects"
          projects={researchProjects}
        />
      </div>
    </div>
  );
}

function ProjectSection({ title, projects }) {
  return (
    <section style={sectionCard}>
      <h2 style={sectionTitle}>{title}</h2>
      <div style={{ display: "grid", gap: "18px" }}>
        {projects.map((project) => (
          <div key={project.name} style={projectCard}>
            <h3 style={{ marginTop: 0, marginBottom: "10px" }}>{project.name}</h3>
            <p style={bodyText}>{project.description}</p>
            <p style={{ color: "#475569", marginBottom: 0 }}>
              <strong>Tech:</strong> {project.tech.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

const heroCard = {
  backgroundColor: "white",
  borderRadius: "20px",
  padding: "40px",
  marginBottom: "24px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
};

const sectionCard = {
  backgroundColor: "white",
  borderRadius: "20px",
  padding: "32px",
  marginBottom: "24px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
};

const projectCard = {
  border: "1px solid #e2e8f0",
  borderRadius: "16px",
  padding: "20px",
};

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

const skillPill = {
  backgroundColor: "#e2e8f0",
  padding: "10px 14px",
  borderRadius: "999px",
  fontSize: "14px",
  fontWeight: "bold",
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