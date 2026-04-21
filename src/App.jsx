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

  const featuredCaseStudy = {
    title: "MEFENA – Statewide Family Needs Assessment (MAEC)",
    role: "Data Analyst & Report Co-Author",
    timeline: "2025",
    summary:
      "Led quantitative analysis and visualization for a statewide equity assessment examining family needs across Maine’s public schools.",
    bullets: [
      "Analyzed 865+ survey responses across demographic groups",
      "Created charts, tables, and ArcGIS StoryMaps visualizations",
      "Translated complex findings into public-facing insights",
    ],
    tech: ["R", "ArcGIS", "Data Visualization", "Statistical Analysis"],
    link: "https://storymaps.arcgis.com/stories/2f23b76e6534481cbb1013b96a2b544e",
  };

  const experience = [
    {
      role: "Data Analyst",
      org: "STEM Center USA",
      date: "2024 - Present",
      bullets: [
        "Built and maintained scalable datasets and evaluation pipelines",
        "Designed ETL workflows for data cleaning and transformation",
        "Performed statistical analysis on STEM program outcomes",
      ],
    },
    {
      role: "Data Evaluation Intern",
      org: "MAEC",
      date: "2024 - 2025",
      bullets: [
        "Developed automated reporting workflows and dashboards",
        "Analyzed large-scale survey datasets for equity evaluation",
        "Managed data cleaning and integration processes",
      ],
    },
    {
      role: "Data Analyst",
      org: "Evitarus",
      date: "2021 - 2022",
      bullets: [
        "Performed statistical analysis using R",
        "Improved data workflows for research projects",
        "Supported survey data processing and reporting",
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
      name: "MEFENA Statewide Analysis",
      description:
        "Conducted statewide data analysis and built StoryMaps to inform policy decisions.",
      tech: ["R", "ArcGIS"],
      link: "https://storymaps.arcgis.com/stories/2f23b76e6534481cbb1013b96a2b544e",
    },
    {
      name: "STEM Program Evaluation",
      description:
        "Analyzed multi-year student outcome data using statistical methods.",
      tech: ["R", "Statistics"],
    },
    {
      name: "TELPAS Analysis",
      description:
        "Cleaned and analyzed district-level education data for performance insights.",
      tech: ["R"],
    },
  ];

  const softwareProjects = [
    {
      name: "LC4 Assembler",
      description:
        "Implemented a two-pass assembler in C with parsing and memory management.",
      tech: ["C", "Systems"],
    },
    {
      name: "Game of Nim",
      description:
        "Built a C++ strategy game with optimal algorithmic logic.",
      tech: ["C++", "Algorithms"],
    },
    {
      name: "Java Project Suite",
      description:
        "Developed multiple Java applications using object-oriented programming.",
      tech: ["Java", "OOP"],
    },
  ];

  const researchProjects = [
    {
      name: "UCLA Honors Thesis",
      description:
        "Geospatial and statistical analysis of voter access and turnout.",
      tech: ["R", "ArcGIS"],
    },
    {
      name: "Japan Nuclear Policy Study",
      description:
        "Quantitative analysis of public opinion and policy attitudes.",
      tech: ["R"],
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
    <div style={page}>
      <div style={container}>

        <section style={card}>
          <h1>{profile.name}</h1>
          <h2>{profile.title}</h2>
          <p>{profile.location} | {profile.email}</p>

          <div style={buttons}>
            <a href={profile.github} target="_blank" rel="noreferrer" style={btnDark}>GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" style={btnLight}>LinkedIn</a>
            <a href={profile.website} target="_blank" rel="noreferrer" style={btnLight}>Website</a>
            <a href={profile.resume} target="_blank" rel="noreferrer" style={btnLight}>Resume</a>
          </div>
        </section>

        <section style={card}>
          <h2>About</h2>
          <p>
            I combine data analysis, software engineering, and research to solve real-world problems across education and policy.
          </p>
        </section>

        <section style={card}>
          <h2>Skills</h2>
          <div style={skillsBox}>
            {skills.map(s => <span key={s} style={skill}>{s}</span>)}
          </div>
        </section>

        <section style={card}>
          <h2>Featured Case Study</h2>
          <div style={project}>
            <h3>{featuredCaseStudy.title}</h3>
            <p><strong>{featuredCaseStudy.role}</strong> | {featuredCaseStudy.timeline}</p>
            <p>{featuredCaseStudy.summary}</p>
            <ul>
              {featuredCaseStudy.bullets.map(b => <li key={b}>{b}</li>)}
            </ul>
            <p><strong>Tech:</strong> {featuredCaseStudy.tech.join(", ")}</p>
            <a href={featuredCaseStudy.link} target="_blank" rel="noreferrer" style={link}>
              View Full Case Study
            </a>
          </div>
        </section>

        <section style={card}>
          <h2>Experience</h2>
          {experience.map(job => (
            <div key={job.role} style={project}>
              <h3>{job.role}</h3>
              <p><strong>{job.org}</strong> - {job.date}</p>
              <ul>
                {job.bullets.map(b => <li key={b}>{b}</li>)}
              </ul>
            </div>
          ))}
        </section>

        <section style={card}>
          <h2>Additional Experience</h2>
          <ul>
            {additionalExperience.map(e => <li key={e}>{e}</li>)}
          </ul>
        </section>

        <ProjectSection title="Featured Projects" projects={featuredProjects} />
        <ProjectSection title="Software Projects" projects={softwareProjects} />
        <ProjectSection title="Research Projects" projects={researchProjects} />

      </div>
    </div>
  );
}

function ProjectSection({ title, projects }) {
  return (
    <section style={card}>
      <h2>{title}</h2>
      {projects.map(p => (
        <div key={p.name} style={project}>
          <h3>{p.name}</h3>
          <p>{p.description}</p>
          <p><strong>Tech:</strong> {p.tech.join(", ")}</p>
          {p.link && (
            <a href={p.link} target="_blank" rel="noreferrer" style={link}>
              View Details
            </a>
          )}
        </div>
      ))}
    </section>
  );
}

/* STYLES */

const page = { background: "#f8fafc", minHeight: "100vh" };
const container = { maxWidth: "1000px", margin: "auto", padding: "40px" };

const card = {
  background: "white",
  padding: "30px",
  borderRadius: "20px",
  marginBottom: "20px",
};

const project = {
  border: "1px solid #ddd",
  padding: "20px",
  borderRadius: "10px",
  marginBottom: "15px",
};

const buttons = { display: "flex", gap: "10px", flexWrap: "wrap" };

const btnDark = { background: "#0f172a", color: "white", padding: "10px", borderRadius: "8px", textDecoration: "none" };
const btnLight = { background: "#e2e8f0", padding: "10px", borderRadius: "8px", textDecoration: "none" };

const link = { display: "inline-block", marginTop: "10px", color: "blue" };

const skillsBox = { display: "flex", flexWrap: "wrap", gap: "10px" };
const skill = { background: "#e2e8f0", padding: "6px 10px", borderRadius: "999px" };