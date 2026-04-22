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
      "Led quantitative analysis and visualization for a statewide equity assessment examining family needs across Maine’s public schools. Built charts, maps, and narrative reporting used to inform family engagement strategy and statewide equity efforts.",
    bullets: [
      "Analyzed statewide family survey data across race, county, and rurality.",
      "Created visuals and maps to communicate barriers, access patterns, and equity gaps.",
      "Helped translate quantitative findings into public-facing, policy-relevant reporting.",
    ],
    tech: ["R", "ArcGIS", "Data Visualization", "Statistical Analysis"],
    link: "https://storymaps.arcgis.com/stories/2f23b76e6534481cbb1013b96a2b544e",
    pdf: "/luis-portfolio-1/mefena/pdf_report.pdf",
    logo: "/luis-portfolio-1/mefena/maec_logo.avif",
    images: [
      "/luis-portfolio-1/mefena/access.png",
      "/luis-portfolio-1/mefena/map.png",
      "/luis-portfolio-1/mefena/barriers.png",
      "/luis-portfolio-1/mefena/rural.png",
    ],
  };

  const stemShowcase = {
    title: "STEM Learning Outcomes Analysis (2020-2024)",
    role: "Data Analyst & Report Author",
    timeline: "2024 - 2025",
    summary:
      "Built a unified multi-year dataset across STEM programs, conducted statistical testing, and produced multiple evaluation reports used to measure learning growth and inform curriculum and program improvement.",
    bullets: [
      "Unified fragmented STEM assessment data across multiple years and programs.",
      "Conducted statistical analysis to identify gains, strengths, and weak points across programs.",
      "Produced multiple reports and visualizations used for program evaluation and decision-making.",
    ],
    tech: ["R", "Statistics", "Data Engineering", "Visualization"],
    logo: "/luis-portfolio-1/stem/logo.png",
    images: [
      "/luis-portfolio-1/stem/overall.png",
      "/luis-portfolio-1/stem/scores.png",
      "/luis-portfolio-1/stem/college.jpg",
      "/luis-portfolio-1/stem/ungrouped.png",
    ],
    reports: [
      {
        label: "STEM Data Intern Report",
        href: "/luis-portfolio-1/stem/stem-data-intern-v5.pdf",
      },
      {
        label: "Post-Assessment Report v3",
        href: "/luis-portfolio-1/stem/stem-post-assessment-v3.pdf",
      },
      {
        label: "HOM Deep-Dive Report",
        href: "/luis-portfolio-1/stem/stem-hom-report.pdf",
      },
    ],
  };

  const experience = [
    {
      role: "Data Analyst",
      org: "STEM Center USA",
      date: "2024 - Present",
      bullets: [
        "Built and maintained scalable datasets and evaluation pipelines.",
        "Designed ETL workflows for data cleaning and transformation.",
        "Performed statistical analysis on STEM program outcomes.",
      ],
    },
    {
      role: "Data Evaluation Intern",
      org: "MAEC",
      date: "2024 - 2025",
      bullets: [
        "Developed automated reporting workflows and dashboards.",
        "Analyzed large-scale survey datasets for equity evaluation.",
        "Managed data cleaning and integration processes.",
      ],
    },
    {
      role: "Data Analyst",
      org: "Evitarus",
      date: "2021 - 2022",
      bullets: [
        "Performed statistical analysis using R.",
        "Improved data workflows for research projects.",
        "Supported survey data processing and reporting.",
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
        "Conducted statewide data analysis and built public-facing visuals to inform policy and equity planning.",
      tech: ["R", "ArcGIS", "Data Visualization"],
      link: "https://storymaps.arcgis.com/stories/2f23b76e6534481cbb1013b96a2b544e",
      image: "/luis-portfolio-1/mefena/map.png",
    },
    {
      name: "STEM Learning Outcomes Analysis",
      description:
        "Analyzed multi-year student outcome data using statistical methods to measure growth and improve program design.",
      tech: ["R", "Statistics", "Program Evaluation"],
      image: "/luis-portfolio-1/stem/overall.png",
    },
    {
      name: "TELPAS Analysis",
      description:
        "Cleaned and analyzed district-level education data to identify performance patterns and support equity-focused reporting. This project focused more on data quality, cleaning, validation, and summary analysis than on visual deliverables.",
      tech: ["R", "Data Cleaning", "Statistical Analysis"],
      image: "/luis-portfolio-1/mefena/maec_logo.avif",
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
        "Built a C++ strategy game with optimal algorithmic logic, modular structure, and multiple difficulty modes.",
      tech: ["C++", "Algorithms", "Game Logic"],
    },
    {
      name: "Java Project Suite",
      description:
        "Developed multiple Java applications using object-oriented programming, including games, simulations, and small data systems.",
      tech: ["Java", "OOP"],
    },
  ];

  const researchProjects = [
    {
      name: "UCLA Honors Thesis",
      description:
        "Conducted geospatial and statistical analysis of voter access and turnout using election, census, and polling place data.",
      tech: ["R", "ArcGIS", "Statistical Modeling"],
    },
    {
      name: "Japan Nuclear Policy Study",
      description:
        "Used quantitative analysis to study public opinion, nuclear policy attitudes, and international security commitments.",
      tech: ["R", "Political Data Analysis"],
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
          <h1 style={heroName}>{profile.name}</h1>
          <h2 style={heroTitle}>{profile.title}</h2>
          <p style={mutedText}>
            {profile.location} | {profile.email}
          </p>

          <div style={buttons}>
            <a href={profile.github} target="_blank" rel="noreferrer" style={btnDark}>
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" style={btnLight}>
              LinkedIn
            </a>
            <a href={profile.website} target="_blank" rel="noreferrer" style={btnLight}>
              Website
            </a>
            <a href={profile.resume} target="_blank" rel="noreferrer" style={btnLight}>
              Resume
            </a>
          </div>
        </section>

        <section style={card}>
          <h2>About</h2>
          <p style={bodyText}>
            I combine data analysis, software engineering, and research to solve
            real-world problems across education, policy, and STEM programming. My
            work focuses on building useful systems, analyzing complex datasets, and
            translating technical work into clear insights.
          </p>
        </section>

        <section style={card}>
          <h2>Skills</h2>
          <div style={skillsBox}>
            {skills.map((s) => (
              <span key={s} style={skill}>
                {s}
              </span>
            ))}
          </div>
        </section>

        <section style={card}>
          <h2>Featured Case Study</h2>
          <div style={project}>
            <div style={caseStudyHeader}>
              {featuredCaseStudy.logo && (
                <img
                  src={featuredCaseStudy.logo}
                  alt="MAEC logo"
                  style={logoStyle}
                />
              )}
              <div>
                <h3 style={{ marginTop: 0, marginBottom: "6px" }}>
                  {featuredCaseStudy.title}
                </h3>
                <p style={mutedText}>
                  <strong>{featuredCaseStudy.role}</strong> | {featuredCaseStudy.timeline}
                </p>
              </div>
            </div>

            <p style={bodyText}>{featuredCaseStudy.summary}</p>

            <ul style={listStyle}>
              {featuredCaseStudy.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>

            <p style={{ marginBottom: "14px" }}>
              <strong>Tech:</strong> {featuredCaseStudy.tech.join(", ")}
            </p>

            <div style={buttons}>
              <a
                href={featuredCaseStudy.link}
                target="_blank"
                rel="noreferrer"
                style={btnDark}
              >
                View StoryMap
              </a>
              <a
                href={featuredCaseStudy.pdf}
                target="_blank"
                rel="noreferrer"
                style={btnLight}
              >
                View PDF Report
              </a>
            </div>

            <div style={galleryGrid}>
              {featuredCaseStudy.images.map((img, index) => (
                <img
                  key={img}
                  src={img}
                  alt={`${featuredCaseStudy.title} visual ${index + 1}`}
                  style={galleryImage}
                />
              ))}
            </div>
          </div>
        </section>

        <section style={card}>
          <h2>STEM Project Gallery</h2>
          <div style={project}>
            <div style={caseStudyHeader}>
              {stemShowcase.logo && (
                <img
                  src={stemShowcase.logo}
                  alt="STEM logo"
                  style={logoStyle}
                />
              )}
              <div>
                <h3 style={{ marginTop: 0, marginBottom: "6px" }}>
                  {stemShowcase.title}
                </h3>
                <p style={mutedText}>
                  <strong>{stemShowcase.role}</strong> | {stemShowcase.timeline}
                </p>
              </div>
            </div>

            <p style={bodyText}>{stemShowcase.summary}</p>

            <ul style={listStyle}>
              {stemShowcase.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>

            <p style={{ marginBottom: "14px" }}>
              <strong>Tech:</strong> {stemShowcase.tech.join(", ")}
            </p>

            <div style={buttons}>
              {stemShowcase.reports.map((report) => (
                <a
                  key={report.label}
                  href={report.href}
                  target="_blank"
                  rel="noreferrer"
                  style={btnLight}
                >
                  {report.label}
                </a>
              ))}
            </div>

            <div style={galleryGrid}>
              {stemShowcase.images.map((img, index) => (
                <img
                  key={img}
                  src={img}
                  alt={`${stemShowcase.title} visual ${index + 1}`}
                  style={galleryImage}
                />
              ))}
            </div>
          </div>
        </section>

        <section style={card}>
          <h2>Experience</h2>
          {experience.map((job) => (
            <div key={job.role + job.org} style={project}>
              <h3 style={{ marginTop: 0, marginBottom: "6px" }}>{job.role}</h3>
              <p style={mutedText}>
                <strong>{job.org}</strong> - {job.date}
              </p>
              <ul style={listStyle}>
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section style={card}>
          <h2>Additional Experience</h2>
          <ul style={listStyle}>
            {additionalExperience.map((e) => (
              <li key={e}>{e}</li>
            ))}
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
      {projects.map((p) => (
        <div key={p.name} style={project}>
          {p.image && <img src={p.image} alt={p.name} style={projectImage} />}
          <h3 style={{ marginTop: 0 }}>{p.name}</h3>
          <p style={bodyText}>{p.description}</p>
          <p style={{ marginBottom: p.link ? "12px" : 0 }}>
            <strong>Tech:</strong> {p.tech.join(", ")}
          </p>
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

const page = {
  background: "#f8fafc",
  minHeight: "100vh",
};

const container = {
  maxWidth: "1080px",
  margin: "auto",
  padding: "40px 24px",
};

const card = {
  background: "white",
  padding: "30px",
  borderRadius: "20px",
  marginBottom: "20px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
};

const project = {
  border: "1px solid #ddd",
  padding: "20px",
  borderRadius: "12px",
  marginBottom: "15px",
};

const heroName = {
  fontSize: "44px",
  margin: "0 0 8px 0",
};

const heroTitle = {
  margin: "0 0 12px 0",
  color: "#334155",
};

const mutedText = {
  color: "#64748b",
  marginTop: 0,
};

const bodyText = {
  lineHeight: "1.7",
  color: "#334155",
};

const buttons = {
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
};

const btnDark = {
  background: "#0f172a",
  color: "white",
  padding: "10px 15px",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: "bold",
};

const btnLight = {
  background: "#e2e8f0",
  color: "#0f172a",
  padding: "10px 15px",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: "bold",
};

const link = {
  display: "inline-block",
  marginTop: "10px",
  color: "#2563eb",
  fontWeight: "bold",
  textDecoration: "none",
};

const skillsBox = {
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
};

const skill = {
  background: "#e2e8f0",
  padding: "6px 10px",
  borderRadius: "999px",
  fontWeight: "bold",
};

const projectImage = {
  width: "100%",
  maxHeight: "260px",
  objectFit: "cover",
  borderRadius: "10px",
  marginBottom: "15px",
  border: "1px solid #e2e8f0",
};

const galleryGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "14px",
  marginTop: "20px",
};

const galleryImage = {
  width: "100%",
  height: "190px",
  objectFit: "cover",
  borderRadius: "10px",
  border: "1px solid #e2e8f0",
};

const caseStudyHeader = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
  marginBottom: "10px",
  flexWrap: "wrap",
};

const logoStyle = {
  width: "72px",
  height: "72px",
  objectFit: "contain",
  borderRadius: "10px",
  background: "#fff",
  border: "1px solid #e2e8f0",
  padding: "8px",
};

const listStyle = {
  lineHeight: "1.7",
};

