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
      description: "Analyzed student outcomes across programs using R and statistical methods.",
      tech: ["R", "Statistics"],
    },
    {
      name: "Equity Reporting Dashboard",
      description: "Built reporting workflows and dashboards for education equity projects.",
      tech: ["R", "Data Visualization"],
    },
    {
      name: "WordyPy Game",
      description: "Developed a Wordle-style game using object-oriented programming.",
      tech: ["Python", "OOP"],
    },
  ];

  return (
    <div style={{ fontFamily: "Arial", padding: "40px", maxWidth: "900px", margin: "auto" }}>
      
      <h1>{profile.name}</h1>
      <h3>{profile.title}</h3>

      <p>
        {profile.location} | {profile.email}
      </p>

      <div style={{ marginBottom: "20px" }}>
        <a href={profile.github} target="_blank">GitHub</a> |{" "}
        <a href={profile.linkedin} target="_blank">LinkedIn</a>
      </div>

      <h2>About Me</h2>
      <p>
        UCLA Statistics & Political Science graduate. Currently pursuing computer science
        while transitioning into software engineering and data science.
      </p>

      <h2>Projects</h2>
      {projects.map((project, i) => (
        <div key={i} style={{ marginBottom: "20px" }}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <p><strong>Tech:</strong> {project.tech.join(", ")}</p>
        </div>
      ))}

    </div>
  );
}