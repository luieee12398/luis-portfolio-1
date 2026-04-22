import { Routes, Route, Link, useParams } from "react-router-dom";
import {
  profile,
  skills,
  experience,
  additionalExperience,
  featuredCaseStudy,
  featuredProjects,
  softwareProjects,
  researchProjects,
  allProjects,
} from "./projectData";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects/:slug" element={<ProjectPage />} />
    </Routes>
  );
}

function HomePage() {
  return (
    <div style={page}>
      <TopNav />

      <div style={container}>
        <section id="top" style={heroSection}>
          <div style={heroLeft}>
            <div style={eyebrow}>Portfolio</div>
            <h1 style={heroName}>{profile.name}</h1>
            <h2 style={heroTitle}>{profile.title}</h2>
            <p style={heroMeta}>
              {profile.location} | {profile.email}
            </p>
            <p style={heroSummary}>
              University of Pennsylvania computer science graduate student and UCLA
              Statistics + Political Science graduate building at the intersection of
              data, software, and research. My work spans education, equity evaluation,
              public policy, and programming, with a focus on turning complex problems
              into clear, usable systems and insights.
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
          </div>

          <div style={heroRight}>
            <div style={heroStatCard}>
              <div style={heroStatLabel}>Focus Areas</div>
              <div style={heroStatValue}>Data + SWE + Research</div>
            </div>
            <div style={heroStatCard}>
              <div style={heroStatLabel}>Current Goal</div>
              <div style={heroStatValue}>SWE / Data Science Roles</div>
            </div>
            <div style={heroStatCard}>
              <div style={heroStatLabel}>Strength</div>
              <div style={heroStatValue}>Technical + Applied Impact</div>
            </div>
          </div>
        </section>

        <section id="about" style={sectionCard}>
          <SectionHeading
            title="About"
            subtitle="A technical portfolio built around applied analytics, software foundations, and public-impact research."
          />
          <p style={bodyText}>
            My background combines data analysis, software development, and research
            across education and policy settings. I’ve worked on statewide equity
            assessments, student learning evaluations, research pipelines, and
            programming coursework that strengthened my foundations in object-oriented
            design, systems thinking, and algorithmic problem-solving.
          </p>
          <p style={bodyText}>
            I’m especially interested in software engineering, data science, and
            technical analytics roles where I can build useful tools, reason through
            messy data, and communicate findings clearly to both technical and
            non-technical audiences.
          </p>
        </section>

        <section id="skills" style={sectionCard}>
          <SectionHeading
            title="Skills"
            subtitle="Core tools and concepts I use across data, research, and software work."
          />
          <div style={skillsBox}>
            {skills.map((s) => (
              <span key={s} style={skill}>
                {s}
              </span>
            ))}
          </div>
        </section>

        <section id="featured" style={sectionCard}>
          <SectionHeading
            title="Featured Case Study"
            subtitle="A deeper example of how I structure analysis, communicate findings, and build public-facing deliverables."
          />
          <ProjectCard project={featuredCaseStudy} />
        </section>

        <section id="experience" style={sectionCard}>
          <SectionHeading
            title="Experience"
            subtitle="The most relevant roles for software, analytics, and data-focused work."
          />
          {experience.map((job) => (
            <div key={job.role + job.org} style={timelineCard}>
              <div style={timelineTopRow}>
                <div>
                  <h3 style={timelineRole}>{job.role}</h3>
                  <p style={timelineOrg}>{job.org}</p>
                </div>
                <div style={timelineDate}>{job.date}</div>
              </div>
              <ul style={listStyle}>
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section id="additional" style={sectionCard}>
          <SectionHeading
            title="Additional Experience"
            subtitle="Selected teaching and academic roles that strengthen communication, instructional design, and research experience."
          />
          <div style={additionalGrid}>
            {additionalExperience.map((e) => (
              <div key={e} style={additionalCard}>
                {e}
              </div>
            ))}
          </div>
        </section>

        <ProjectSection
          id="featured-projects"
          title="Featured Projects"
          subtitle="Applied analytics, evaluation, and systems work with real-world organizational impact."
          projects={featuredProjects}
        />

        <ProjectSection
          id="software-projects"
          title="Software Projects"
          subtitle="Programming projects that highlight algorithmic reasoning, systems foundations, and object-oriented design."
          projects={softwareProjects}
        />

        <ProjectSection
          id="research-projects"
          title="Research Projects"
          subtitle="Independent and academic research using quantitative, geospatial, and policy-oriented analysis."
          projects={researchProjects}
        />

        <section id="contact" style={footerCard}>
          <SectionHeading
            title="Contact"
            subtitle="Open to software engineering, data science, technical analytics, and research-oriented opportunities."
          />
          <div style={contactGrid}>
            <a href={`mailto:${profile.email}`} style={contactItem}>
              <strong>Email</strong>
              <span>{profile.email}</span>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" style={contactItem}>
              <strong>LinkedIn</strong>
              <span>View profile</span>
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" style={contactItem}>
              <strong>GitHub</strong>
              <span>See code and repos</span>
            </a>
            <a href={profile.resume} target="_blank" rel="noreferrer" style={contactItem}>
              <strong>Resume</strong>
              <span>Open PDF</span>
            </a>
          </div>

          <p style={footerNote}>
            Built with React and GitHub Pages.
          </p>
        </section>
      </div>
    </div>
  );
}

function TopNav() {
  return (
    <nav style={nav}>
      <div style={navInner}>
        <Link to="/" style={brand}>
          Luis E. Ceja Abrica
        </Link>

        <div style={navLinks}>
          <a href="#featured" style={navLink}>Featured</a>
          <a href="#experience" style={navLink}>Experience</a>
          <a href="#featured-projects" style={navLink}>Projects</a>
          <a href="#software-projects" style={navLink}>Software</a>
          <a href="#research-projects" style={navLink}>Research</a>
          <a href="#contact" style={navLink}>Contact</a>
        </div>
      </div>
    </nav>
  );
}

function SectionHeading({ title, subtitle }) {
  return (
    <div style={sectionHeader}>
      <h2 style={sectionTitle}>{title}</h2>
      {subtitle && <p style={sectionSubtitle}>{subtitle}</p>}
    </div>
  );
}

function ProjectSection({ id, title, subtitle, projects }) {
  return (
    <section id={id} style={sectionCard}>
      <SectionHeading title={title} subtitle={subtitle} />
      <div style={projectGrid}>
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <div style={projectCard}>
      <div style={projectTop}>
        <div style={caseStudyHeader}>
          {project.logo && <img src={project.logo} alt="logo" style={logoStyle} />}
          {project.banner && (
            <img src={project.banner} alt={`${project.name} banner`} style={bannerStyle} />
          )}
          <div style={{ flex: 1 }}>
            <h3 style={projectTitle}>{project.name}</h3>
            {project.role && (
              <p style={projectMeta}>
                <strong>{project.role}</strong>
                {project.timeline ? ` | ${project.timeline}` : ""}
              </p>
            )}
          </div>
        </div>

        <p style={projectSummary}>{project.shortDescription || project.summary}</p>

        <div style={techWrap}>
          {project.tech.map((t) => (
            <span key={t} style={techPill}>
              {t}
            </span>
          ))}
        </div>
      </div>

      <div style={projectActionRow}>
        <Link to={`/projects/${project.slug}`} style={btnLight}>
          View Project
        </Link>
      </div>
    </div>
  );
}

function ProjectPage() {
  const { slug } = useParams();
  const project = allProjects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div style={page}>
        <TopNav />
        <div style={container}>
          <section style={sectionCard}>
            <h2>Project not found</h2>
            <Link to="/" style={btnLight}>
              Back to Home
            </Link>
          </section>
        </div>
      </div>
    );
  }

  return (
    <div style={page}>
      <TopNav />
      <div style={container}>
        <section style={sectionCard}>
          <Link to="/" style={backLink}>
            ← Back to Home
          </Link>

          <div style={detailHero}>
            <div style={caseStudyHeader}>
              {project.logo && <img src={project.logo} alt="logo" style={logoStyle} />}
              {project.banner && (
                <img src={project.banner} alt={`${project.name} banner`} style={detailBanner} />
              )}
              <div>
                <h1 style={detailTitle}>{project.name}</h1>
                {project.role && (
                  <p style={detailMeta}>
                    <strong>{project.role}</strong>
                    {project.organization ? ` | ${project.organization}` : ""}
                    {project.timeline ? ` | ${project.timeline}` : ""}
                  </p>
                )}
                {project.type && <p style={mutedText}>{project.type}</p>}
              </div>
            </div>
          </div>

          {project.heroImage && (
            <img src={project.heroImage} alt={project.name} style={detailHeroImage} />
          )}
          {project.image && (
            <img src={project.image} alt={project.name} style={detailHeroImage} />
          )}

          {(project.link || project.pdf || project.buttons?.length) && (
            <div style={buttons}>
              {project.link && (
                <a href={project.link} target="_blank" rel="noreferrer" style={btnDark}>
                  View External Project
                </a>
              )}

              {project.pdf && (
                <a href={project.pdf} target="_blank" rel="noreferrer" style={btnLight}>
                  View PDF
                </a>
              )}

              {project.buttons &&
                project.buttons.map((button) => (
                  <a
                    key={button.label}
                    href={button.href}
                    target="_blank"
                    rel="noreferrer"
                    style={btnLight}
                  >
                    {button.label}
                  </a>
                ))}
            </div>
          )}

          <DetailBlock title="Project Overview">
            <p style={bodyText}>{project.overview || project.summary}</p>
          </DetailBlock>

          {project.problemStatement && (
            <DetailBlock title="Problem Statement">
              <p style={bodyText}>{project.problemStatement}</p>
            </DetailBlock>
          )}

          {project.researchQuestions && project.researchQuestions.length > 0 && (
            <DetailBlock title="Research Questions">
              <ul style={listStyle}>
                {project.researchQuestions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </DetailBlock>
          )}

          {project.rules && project.rules.length > 0 && (
            <DetailBlock title="Game Rules / Core Requirements">
              <ul style={listStyle}>
                {project.rules.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </DetailBlock>
          )}

          {project.dataSources && project.dataSources.length > 0 && (
            <DetailBlock title="Data Sources">
              <ul style={listStyle}>
                {project.dataSources.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </DetailBlock>
          )}

          {project.methods && project.methods.length > 0 && (
            <DetailBlock title="Methods / Approach">
              <ul style={listStyle}>
                {project.methods.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </DetailBlock>
          )}

          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <DetailBlock title="Key Features">
              <ul style={listStyle}>
                {project.keyFeatures.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </DetailBlock>
          )}

          {project.subprojects && (
            <DetailBlock title="Included Projects">
              <ul style={listStyle}>
                {project.subprojects.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </DetailBlock>
          )}

          {project.bullets && (
            <DetailBlock title="Highlights">
              <ul style={listStyle}>
                {project.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </DetailBlock>
          )}

          {project.contributions && project.contributions.length > 0 && (
            <DetailBlock title="My Key Contributions">
              <ul style={listStyle}>
                {project.contributions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </DetailBlock>
          )}

          {project.selectedFindings && project.selectedFindings.length > 0 && (
            <DetailBlock title="Selected Findings / Outcomes">
              <ul style={listStyle}>
                {project.selectedFindings.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </DetailBlock>
          )}

          {project.challenges && project.challenges.length > 0 && (
            <DetailBlock title="Challenges & Solutions">
              <div style={challengeGrid}>
                {project.challenges.map((item) => (
                  <div key={item.challenge} style={challengeCard}>
                    <p style={{ margin: "0 0 8px 0" }}>
                      <strong>Challenge:</strong> {item.challenge}
                    </p>
                    <p style={{ margin: 0 }}>
                      <strong>Solution:</strong> {item.solution}
                    </p>
                  </div>
                ))}
              </div>
            </DetailBlock>
          )}

          {project.impact && project.impact.length > 0 && (
            <DetailBlock title="Impact">
              <ul style={listStyle}>
                {project.impact.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </DetailBlock>
          )}

          {project.whyThisMatters && (
            <DetailBlock title="Why This Project Matters">
              <p style={bodyText}>{project.whyThisMatters}</p>
            </DetailBlock>
          )}

          {project.skillsDemonstrated && project.skillsDemonstrated.length > 0 && (
            <DetailBlock title="Skills Demonstrated">
              <div style={skillsBox}>
                {project.skillsDemonstrated.map((item) => (
                  <span key={item} style={skill}>
                    {item}
                  </span>
                ))}
              </div>
            </DetailBlock>
          )}

          <DetailBlock title="Tech">
            <div style={techWrap}>
              {project.tech.map((t) => (
                <span key={t} style={techPill}>
                  {t}
                </span>
              ))}
            </div>
          </DetailBlock>

          {project.gallery && project.gallery.length > 0 && (
            <DetailBlock title="Visuals">
              <div style={galleryGrid}>
                {project.gallery.map((img, index) => (
                  <img
                    key={img}
                    src={img}
                    alt={`${project.name} visual ${index + 1}`}
                    style={galleryImage}
                  />
                ))}
              </div>
            </DetailBlock>
          )}
        </section>
      </div>
    </div>
  );
}

function DetailBlock({ title, children }) {
  return (
    <section style={detailBlock}>
      <h3 style={detailSectionTitle}>{title}</h3>
      {children}
    </section>
  );
}

/* STYLES */

const page = {
  background: "#f8fafc",
  minHeight: "100vh",
  color: "#0f172a",
};

const nav = {
  position: "sticky",
  top: 0,
  zIndex: 50,
  backdropFilter: "blur(12px)",
  background: "rgba(248, 250, 252, 0.86)",
  borderBottom: "1px solid #e2e8f0",
};

const navInner = {
  maxWidth: "1120px",
  margin: "0 auto",
  padding: "14px 24px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "20px",
};

const brand = {
  color: "#0f172a",
  textDecoration: "none",
  fontWeight: 800,
  fontSize: "15px",
};

const navLinks = {
  display: "flex",
  gap: "16px",
  flexWrap: "wrap",
};

const navLink = {
  color: "#475569",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: 600,
};

const container = {
  maxWidth: "1120px",
  margin: "0 auto",
  padding: "28px 24px 48px",
};

const heroSection = {
  display: "grid",
  gridTemplateColumns: "1.6fr 0.9fr",
  gap: "20px",
  background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
  padding: "34px",
  borderRadius: "24px",
  marginBottom: "22px",
  boxShadow: "0 12px 30px rgba(15,23,42,0.08)",
  border: "1px solid #e2e8f0",
};

const heroLeft = {
  minWidth: 0,
};

const heroRight = {
  display: "grid",
  gap: "12px",
  alignContent: "start",
};

const heroStatCard = {
  background: "#ffffff",
  border: "1px solid #e2e8f0",
  borderRadius: "18px",
  padding: "16px",
};

const heroStatLabel = {
  color: "#64748b",
  fontSize: "13px",
  fontWeight: 700,
  marginBottom: "6px",
};

const heroStatValue = {
  fontSize: "16px",
  fontWeight: 700,
  color: "#0f172a",
  lineHeight: 1.4,
};

const eyebrow = {
  display: "inline-block",
  background: "#e2e8f0",
  color: "#334155",
  padding: "6px 10px",
  borderRadius: "999px",
  fontWeight: 700,
  fontSize: "12px",
  marginBottom: "14px",
};

const sectionCard = {
  background: "white",
  padding: "30px",
  borderRadius: "24px",
  marginBottom: "22px",
  boxShadow: "0 10px 25px rgba(15,23,42,0.06)",
  border: "1px solid #e2e8f0",
};

const footerCard = {
  background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
  padding: "30px",
  borderRadius: "24px",
  marginBottom: "22px",
  boxShadow: "0 10px 25px rgba(15,23,42,0.06)",
  border: "1px solid #e2e8f0",
};

const card = sectionCard;

const sectionHeader = {
  marginBottom: "18px",
};

const sectionTitle = {
  fontSize: "30px",
  lineHeight: 1.15,
  margin: "0 0 8px 0",
};

const sectionSubtitle = {
  margin: 0,
  color: "#64748b",
  lineHeight: 1.6,
};

const projectGrid = {
  display: "grid",
  gap: "16px",
};

const projectCard = {
  border: "1px solid #e2e8f0",
  padding: "20px",
  borderRadius: "18px",
  background: "#ffffff",
  display: "flex",
  flexDirection: "column",
  gap: "14px",
};

const projectTop = {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
};

const projectActionRow = {
  marginTop: "auto",
};

const timelineCard = {
  border: "1px solid #e2e8f0",
  padding: "20px",
  borderRadius: "18px",
  marginBottom: "14px",
  background: "#ffffff",
};

const timelineTopRow = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "16px",
  flexWrap: "wrap",
};

const timelineRole = {
  margin: "0 0 4px 0",
  fontSize: "20px",
};

const timelineOrg = {
  margin: 0,
  color: "#334155",
  fontWeight: 700,
};

const timelineDate = {
  color: "#64748b",
  fontWeight: 700,
};

const additionalGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "12px",
};

const additionalCard = {
  border: "1px solid #e2e8f0",
  borderRadius: "16px",
  padding: "14px 16px",
  background: "#ffffff",
  color: "#334155",
  fontWeight: 600,
  lineHeight: 1.5,
};

const heroName = {
  fontSize: "50px",
  lineHeight: 1.05,
  margin: "0 0 10px 0",
};

const heroTitle = {
  margin: "0 0 12px 0",
  color: "#334155",
  fontSize: "24px",
  lineHeight: 1.25,
};

const heroMeta = {
  color: "#64748b",
  marginTop: 0,
  marginBottom: "16px",
  fontWeight: 600,
};

const heroSummary = {
  lineHeight: 1.8,
  color: "#334155",
  fontSize: "17px",
  maxWidth: "760px",
};

const projectTitle = {
  marginTop: 0,
  marginBottom: "6px",
  fontSize: "22px",
};

const projectMeta = {
  color: "#64748b",
  margin: 0,
  fontSize: "14px",
};

const projectSummary = {
  lineHeight: 1.7,
  color: "#334155",
  margin: 0,
};

const detailHero = {
  marginBottom: "10px",
};

const detailTitle = {
  marginTop: 0,
  marginBottom: "8px",
  fontSize: "38px",
  lineHeight: 1.12,
};

const detailMeta = {
  color: "#64748b",
  marginTop: 0,
  marginBottom: "6px",
  fontSize: "15px",
};

const detailBlock = {
  marginTop: "26px",
};

const detailSectionTitle = {
  margin: "0 0 12px 0",
  fontSize: "24px",
};

const challengeGrid = {
  display: "grid",
  gap: "12px",
};

const challengeCard = {
  border: "1px solid #e2e8f0",
  padding: "14px",
  borderRadius: "12px",
  background: "#ffffff",
};

const mutedText = {
  color: "#64748b",
  marginTop: 0,
};

const bodyText = {
  lineHeight: "1.8",
  color: "#334155",
  margin: 0,
};

const buttons = {
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
  marginTop: "14px",
};

const btnDark = {
  background: "#0f172a",
  color: "white",
  padding: "11px 16px",
  borderRadius: "10px",
  textDecoration: "none",
  fontWeight: "700",
  display: "inline-block",
};

const btnLight = {
  background: "#e2e8f0",
  color: "#0f172a",
  padding: "11px 16px",
  borderRadius: "10px",
  textDecoration: "none",
  fontWeight: "700",
  display: "inline-block",
};

const backLink = {
  display: "inline-block",
  marginBottom: "22px",
  color: "#2563eb",
  textDecoration: "none",
  fontWeight: "700",
};

const skillsBox = {
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
};

const skill = {
  background: "#e2e8f0",
  padding: "7px 11px",
  borderRadius: "999px",
  fontWeight: "700",
  color: "#334155",
};

const techWrap = {
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
};

const techPill = {
  background: "#f1f5f9",
  color: "#334155",
  padding: "7px 10px",
  borderRadius: "999px",
  fontWeight: "700",
  fontSize: "13px",
  border: "1px solid #e2e8f0",
};

const detailHeroImage = {
  width: "100%",
  maxHeight: "320px",
  objectFit: "cover",
  borderRadius: "16px",
  marginTop: "18px",
  border: "1px solid #e2e8f0",
};

const galleryGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "14px",
  marginTop: "18px",
};

const galleryImage = {
  width: "100%",
  height: "190px",
  objectFit: "cover",
  borderRadius: "14px",
  border: "1px solid #e2e8f0",
  background: "#fff",
};

const caseStudyHeader = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
  marginBottom: "4px",
  flexWrap: "wrap",
};

const logoStyle = {
  width: "72px",
  height: "72px",
  objectFit: "contain",
  borderRadius: "12px",
  background: "#fff",
  border: "1px solid #e2e8f0",
  padding: "8px",
};

const bannerStyle = {
  width: "120px",
  height: "72px",
  objectFit: "cover",
  borderRadius: "12px",
  border: "1px solid #e2e8f0",
  background: "#fff",
};

const detailBanner = {
  width: "160px",
  height: "90px",
  objectFit: "cover",
  borderRadius: "12px",
  border: "1px solid #e2e8f0",
  background: "#fff",
};

const listStyle = {
  lineHeight: "1.8",
  color: "#334155",
  paddingLeft: "20px",
};

const contactGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "12px",
};

const contactItem = {
  display: "flex",
  flexDirection: "column",
  gap: "6px",
  border: "1px solid #e2e8f0",
  borderRadius: "16px",
  padding: "16px",
  textDecoration: "none",
  color: "#0f172a",
  background: "#ffffff",
};

const footerNote = {
  marginTop: "18px",
  color: "#64748b",
};