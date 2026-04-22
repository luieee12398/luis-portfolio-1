export const profile = {
  name: "Luis E. Ceja Abrica",
  title: "Data Analyst | Aspiring Software Engineer & Data Scientist",
  location: "California, USA",
  email: "eduardoabrica@gmail.com",
  github: "https://github.com/luieee12398",
  linkedin: "https://www.linkedin.com/in/luis-cejaab/",
  website: "https://eduardoabrica.wixsite.com/luisecejaabrica",
  resume: "/luis-portfolio-1/resume.pdf",
};

export const skills = [
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
  "Data Cleaning",
  "ETL",
  "Object-Oriented Programming",
  "Survey Analysis",
  "Data Visualization",
  "Mixed-Methods Research",
  "Quantitative Research",
];

export const experience = [
  {
    role: "Data Analyst",
    org: "STEM Center USA",
    date: "2024 - Present",
    bullets: [
      "Built and maintained scalable datasets and evaluation pipelines.",
      "Designed ETL workflows for data cleaning, validation, and transformation.",
      "Performed statistical analysis on STEM program outcomes and learning data.",
    ],
  },
  {
    role: "Data Evaluation Intern",
    org: "MAEC",
    date: "2024 - 2025",
    bullets: [
      "Developed automated reporting workflows and dashboards for equity-focused projects.",
      "Analyzed large-scale survey and evaluation datasets.",
      "Managed data cleaning, integration, and quality assurance processes.",
    ],
  },
  {
    role: "Data Analyst",
    org: "Evitarus",
    date: "2021 - 2022",
    bullets: [
      "Performed statistical analysis using R for research and opinion projects.",
      "Improved data workflows for consistency and efficiency.",
      "Supported survey data processing, QA, and reporting.",
    ],
  },
];

export const additionalExperience = [
  "Certified Substitute Teacher - Coachella Valley Unified School District",
  "STEM Instructor - Migrant Education Program",
  "English Teacher - Come On Out Japan",
  "Language Assistant - Spanish Ministry of Education",
  "Research Assistant - UCLA",
];

export const featuredCaseStudy = {
  slug: "mefena",
  name: "MEFENA: Centering Family Voice Across Maine’s Public Schools",
  role: "Data Analyst & Report Co-Author",
  organization: "Mid-Atlantic Equity Consortium (MAEC)",
  timeline: "March 2025 - July 2025",
  type: "Mixed-Methods Statewide Equity Assessment",
  shortDescription:
    "Statewide family engagement needs assessment combining survey analysis, mixed-methods synthesis, mapping, and public-facing reporting.",
  tech: [
    "R",
    "ArcGIS",
    "Data Visualization",
    "Statistical Analysis",
    "Mixed-Methods Research",
    "Data Storytelling",
  ],
  logo: "/luis-portfolio-1/mefena/maec_logo.avif",
  heroImage: "/luis-portfolio-1/mefena/map.png",
  buttons: [
    {
      label: "View StoryMap",
      href: "https://storymaps.arcgis.com/stories/2f23b76e6534481cbb1013b96a2b544e",
    },
    {
      label: "View PDF Report",
      href: "/luis-portfolio-1/mefena/pdf_report.pdf",
    },
  ],
  overview:
    "The Maine Family Engagement Needs Assessment (MEFENA) is a statewide equity initiative examining how families experience communication, learning supports, enrichment opportunities, and systemic barriers across Maine’s public schools. The project collected 865 survey responses, including both quantitative and open-ended questions, and integrated insights from focus groups, interviews, and document reviews. The final deliverable was a publicly published ArcGIS StoryMap designed to guide policy, family-engagement strategy, and statewide equity efforts. I served as a primary data analyst and co-author on the report, responsible for the full quantitative analysis pipeline, visualization development, and narrative drafting.",
  problemStatement:
    "Despite ongoing investments in family engagement, state leaders lacked a comprehensive, data-driven understanding of how families experience Maine’s schools, especially across racial groups, geographic regions, and socioeconomic contexts. The project needed to answer what supports families need to help their children learn, what barriers prevent access to enrichment programs, how experiences differ across rural versus non-rural counties, where equity gaps exist between White families and Families of Color, and how findings could inform statewide strategy and local school improvement.",
  dataSources: [
    "Statewide family survey (865 responses across 15 counties)",
    "Multiple-choice items",
    "Select-all questions",
    "Open-ended responses coded qualitatively",
    "Focus group and interview notes",
    "District and state demographic context",
    "County-level rurality classifications",
    "District and state policy documentation",
    "Public ArcGIS StoryMaps deliverable platform",
  ],
  methods: [
    "Data validation and recoding",
    "Treatment of missingness and skipped items",
    "Cross-tabulation by race and rural versus non-rural counties",
    "Proportion and percentage analysis",
    "Categorization and aggregation of similar response types",
    "Identification of equity gaps in enrichment access, learning at home, communication, school climate, and basic needs",
    "Thematic coding of open-ended responses",
    "Extraction of representative quotes",
    "County-level choropleths, bar charts, stacked bars, and summary tables",
    "Translation of findings into plain-language public-facing reporting",
  ],
  contributions: [
    "Cleaned and restructured the entire survey dataset.",
    "Standardized grade bands, enrichment categories, communication needs, and basic-needs items.",
    "Ensured consistency across race and rurality classification fields.",
    "Identified racial disparities in device access, enrichment participation, and communication gaps.",
    "Detected rural-specific barriers such as transportation and program availability.",
    "Highlighted statewide strengths such as high internet access and positive family-school relationships.",
    "Produced nearly all preliminary and final charts included in the report.",
    "Built county-level maps for geographic pattern identification.",
    "Drafted and revised major report sections including Learning at Home, Communication & Engagement, Enrichment Access, Non-Academic Needs, School Climate, and equity gap sections.",
  ],
  selectedFindings: [
    "Most families reported reliable internet, but a significant share lacked quiet or consistent spaces for learning, disproportionately affecting rural households.",
    "Families wanted clearer and more predictable communication systems and more proactive outreach from schools.",
    "Families of Color were more likely to report unclear or inconsistent communication.",
    "Top enrichment barriers included not knowing who to contact, cost, lack of transportation, and limited rural offerings.",
    "Families of Color and rural families reported higher barriers and fewer enrichment opportunities.",
    "Many families expressed needs around mental health support, food security, and transportation resources.",
  ],
  challenges: [
    {
      challenge: "Inconsistent or missing survey fields",
      solution:
        "Developed standardized recoding rules, merged similar categories, and documented all transformation steps.",
    },
    {
      challenge: "Small sample sizes in some subgroups",
      solution:
        "Presented findings with contextual disclaimers and emphasized directional insights rather than overclaiming precision.",
    },
    {
      challenge: "Interpreting hundreds of open-text responses",
      solution:
        "Built thematic clusters and extracted representative quotes that strengthened the narrative.",
    },
    {
      challenge: "Creating a story accessible to non-technical audiences",
      solution:
        "Crafted a clear structure emphasizing key takeaways and real family voices.",
    },
  ],
  impact: [
    "Used by the Maine Department of Education to refine family-engagement strategies.",
    "Useful to district administrators expanding enrichment access.",
    "Shared with community-based organizations partnering with families.",
    "Supports MAEC teams conducting ongoing equity audits.",
    "The public StoryMap remains a foundational resource for Maine’s family-engagement planning.",
  ],
  skillsDemonstrated: [
    "Statistical analysis (R)",
    "Data cleaning and wrangling",
    "Geographic mapping (ArcGIS)",
    "Mixed-methods research",
    "Data storytelling",
    "Equity-centered evaluation",
    "Visualization design",
    "Public-facing report writing",
    "Cross-functional collaboration",
  ],
  gallery: [
    "/luis-portfolio-1/mefena/access.png",
    "/luis-portfolio-1/mefena/map.png",
    "/luis-portfolio-1/mefena/barriers.png",
    "/luis-portfolio-1/mefena/rural.png",
  ],
};

export const featuredProjects = [
  {
    slug: "stem",
    name: "STEM Learning Outcomes Analysis (2020-2024)",
    role: "Data Analyst & Report Author",
    organization: "STEM Center USA",
    timeline: "Dec 2024 - Nov 2025",
    type: "Mixed-Methods Multi-Year Assessment",
    shortDescription:
      "Built a unified multi-year STEM dataset and produced evaluation reports measuring learning growth and program effectiveness.",
    tech: [
      "R",
      "Statistics",
      "Data Engineering",
      "Visualization",
      "Program Evaluation",
      "Survey Processing",
    ],
    banner: "/luis-portfolio-1/stem/logo.png",
    image: "/luis-portfolio-1/stem/overall.png",
    overview:
      "This multi-year STEM evaluation project analyzed five years of K-12 STEM assessment data (2020-2024) across multiple hands-on and digital learning programs. I was responsible for transforming a fragmented, inconsistent dataset into a reliable analytical foundation, producing several comprehensive evaluation reports that measured learning growth, program effectiveness, and demographic patterns.",
    problemStatement:
      "STEM Center USA needed a comprehensive, data-driven understanding of how its programs affected student learning across schools, grade levels, and program tracks. Existing data posed major challenges: no standardized schema, no unique student identifier, high missingness in demographic variables, inconsistent program naming, and widely varying score distributions. The goal was to measure effectiveness, identify strong and weak program areas, and guide future data collection and curriculum design.",
    dataSources: [
      "Five years of STEM assessment data (2020-2024)",
      "Pre-assessment and post-assessment scores",
      "Program type data across VR, HOM, Circuits, CAD, Microbit, Scratch, and Minecraft",
      "Course and session indicators",
      "Season and year fields",
      "Grade level, college interest, coding interest, favorite subject, and partner organization fields where available",
    ],
    methods: [
      "Construction of a clean unified master dataset from 2020-2024",
      "Regex-based program classification",
      "Standardization of score variables and demographic fields",
      "Wilcoxon rank-sum tests, Welch t-tests, and distribution diagnostics",
      "Cramer's V and polychoric correlations",
      "Program-by-grade comparisons and subgroup analyses",
      "Comparative bar charts, distributions, heatmaps, and grade-level progressions",
    ],
    contributions: [
      "Built the entire data-cleaning workflow to unify five years of raw data.",
      "Performed program classification using custom string-detection pipelines.",
      "Created consistent score variables, valid ranges, and QA checks.",
      "Designed and executed the full pre/post learning outcomes evaluation.",
      "Conducted grade-level and program-level statistical tests.",
      "Identified programmatic strengths and weaknesses across STEM offerings.",
      "Wrote all narrative sections, limitations, and recommendations in each report.",
      "Created charts, tables, and visual summaries for leadership and stakeholders.",
    ],
    selectedFindings: [
      "Across all programs, mean score increased from 57.3% pre to 65.1% post, a +7.8 percentage-point gain that was statistically significant.",
      "VR, Circuits, HOM, and CAD demonstrated the strongest impact.",
      "Minecraft consistently showed no observable learning effect.",
      "Grades 6-9 showed the highest levels of improvement.",
      "Students with higher college interest performed better overall when that variable was available.",
      "System limitations such as missing demographics and no student IDs restricted deeper analysis.",
    ],
    challenges: [
      {
        challenge: "Five years of fragmented, inconsistent datasets",
        solution:
          "Built a full R-based data engineering pipeline using standardization, harmonization, and regex-based classification.",
      },
      {
        challenge: "No unique student identifiers",
        solution:
          "Used program-level and grade-level unpaired statistical methods to preserve validity while still extracting insight.",
      },
      {
        challenge: "Missing and inconsistent demographic variables",
        solution:
          "Performed structured missingness analysis and documented redesign recommendations for future data collection.",
      },
      {
        challenge: "Small sample sizes in some programs",
        solution:
          "Used nonparametric methods, reported limitations transparently, and tied findings to curriculum recommendations.",
      },
      {
        challenge: "Misalignment between curriculum and assessment content",
        solution:
          "Compared programs and items closely to diagnose where content and assessment were mismatched.",
      },
    ],
    impact: [
      "Reinforced investment in high-performing programs such as VR, Circuits, HOM, and CAD.",
      "Informed revision of weaker-aligned programs like Minecraft and Scratch.",
      "Highlighted grade bands where STEM instruction is most effective.",
      "Supported recommendations for unique student IDs and standardized survey design.",
      "Created a reproducible pipeline for future evaluations.",
    ],
    skillsDemonstrated: [
      "Data engineering",
      "Statistical testing",
      "Visualization design",
      "Survey and research design",
      "Program evaluation",
      "Reporting and communication",
      "Project management",
    ],
    buttons: [
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
    gallery: [
      "/luis-portfolio-1/stem/overall.png",
      "/luis-portfolio-1/stem/scores.png",
      "/luis-portfolio-1/stem/college.jpg",
      "/luis-portfolio-1/stem/ungrouped.png",
    ],
  },
  {
    slug: "telpas",
    name: "TELPAS Data Quality & Performance Analysis",
    role: "Data Analyst",
    organization: "Mid-Atlantic Equity Consortium (MAEC)",
    timeline: "2024 - 2025",
    type: "Mixed-Methods Equity Assessment",
    shortDescription:
      "Cleaned and analyzed district-level education data to identify performance patterns and support equity-focused reporting.",
    tech: [
      "R",
      "Data Cleaning",
      "Statistical Analysis",
      "Reproducible Reporting",
      "Equity Analysis",
    ],
    banner: "/luis-portfolio-1/mefena/maec_logo.avif",
    overview:
      "This project analyzed Texas English Language Proficiency Assessment System (TELPAS) data for a 50,000+ student dataset from El Paso ISD to evaluate English proficiency trends, identify score anomalies, and assess alignment between district-level demographics and TELPAS outcomes. My work focused on validation, diagnostics, cleaning, recoding, anomaly detection, and exploratory analysis.",
    problemStatement:
      "The district needed a trustworthy, analysis-ready TELPAS dataset that could feed into a broader equity audit. Raw data included inconsistent formatting across submissions, duplicate student records, missing or incorrect demographic fields, irregular score distributions, and non-standard categorical inputs. The goal was to produce one clean validated dataset with documented decisions ready for descriptive and inferential analysis.",
    dataSources: [
      "District-provided TELPAS composite and domain scores",
      "Student demographic files including race/ethnicity, EL status, special populations, and school ID",
      "Campus-level descriptive information",
      "Crosswalk files for campus renaming and consolidation",
    ],
    methods: [
      "Duplicate detection and removal based on student ID and testing window",
      "Recoding and standardizing categorical fields",
      "Score validity checks and QA flags",
      "Outlier and anomaly detection using boxplots and z-score thresholds",
      "Campus-level comparison of composite and domain scores",
      "Equity-focused subgroup comparisons",
      "Creation of a clean merge-ready file for a broader evaluation framework",
    ],
    contributions: [
      "Built a full data-wrangling pipeline to clean and merge multiple TELPAS files.",
      "Standardized inconsistent school names, codes, and categorical fields.",
      "Resolved duplicate student entries based on district guidelines.",
      "Validated score ranges and constructed QA flags for suspicious values.",
      "Conducted descriptive analysis of composite and domain scores.",
      "Identified unusual score distributions and subgroup differences.",
      "Drafted narrative findings for MAEC’s internal white paper.",
    ],
    selectedFindings: [
      "Score distributions varied significantly across campuses.",
      "Speaking and writing scores showed the lowest averages across the district, while listening tended to be strongest.",
      "Several demographic subgroups consistently scored lower than district peers.",
      "The analysis uncovered mislabeled campus codes, identical-score clustering, and inconsistent EL classification coding.",
    ],
    challenges: [
      {
        challenge: "Non-standard categorical fields",
        solution:
          "Built recoding dictionaries in R for consistent formatting.",
      },
      {
        challenge: "Duplicate student files",
        solution:
          "Automated duplicate detection using ID and testing-window logic.",
      },
      {
        challenge: "Score anomalies",
        solution:
          "Created QA flags and visual diagnostics to catch outliers.",
      },
      {
        challenge: "Missing demographic data",
        solution:
          "Merged external demographic files and documented unavoidable gaps.",
      },
      {
        challenge: "Campus mergers and renamings",
        solution:
          "Developed an internal crosswalk file for consistent linking.",
      },
    ],
    impact: [
      "Provided the first cleaned and validated TELPAS dataset ready for deeper modeling.",
      "Improved accuracy of subgroup analysis for English learner outcomes.",
      "Identified data system weaknesses and informed future data collection improvements.",
      "Produced insights used in MAEC’s white paper and leadership presentations.",
    ],
    skillsDemonstrated: [
      "Advanced R data cleaning and recoding",
      "Statistical anomaly detection",
      "Descriptive and subgroup analysis",
      "Equity-centered interpretation",
      "Reproducible analysis",
      "Professional reporting",
    ],
    buttons: [],
    gallery: [],
  },
  {
    slug: "survey-optimization",
    name: "Survey Optimization Pipeline",
    role: "Data Analyst",
    organization: "Evitarus",
    timeline: "July 2022 - September 2022",
    type: "Survey Data Engineering and Operations",
    shortDescription:
      "Designed a respondent deduplication and outreach optimization pipeline to improve survey efficiency.",
    tech: [
      "R",
      "Data Engineering",
      "ETL",
      "Deduplication Logic",
      "Survey Data Management",
    ],
    banner: "/luis-portfolio-1/survey_opt/code_pic.png",
    image: "/luis-portfolio-1/survey_opt/workflow.png",
    overview:
      "This project focused on designing and implementing an internal survey optimization pipeline aimed at improving respondent targeting, reducing duplicate outreach, and increasing response efficiency across political and public opinion research projects. I consolidated historical survey data, identified duplicates across projects, and built a reusable pipeline to generate a clean likely-respondent universe for future research.",
    problemStatement:
      "The company needed a scalable way to understand who had already responded to past surveys, how often, and how to target them more effectively in future outreach. The main challenges included survey data spread across many independent files, no universal respondent ID, inconsistent naming and contact formats, multiple contact methods, and duplicate respondents appearing under slightly different records.",
    dataSources: [
      "Historical quantitative survey datasets from multiple projects",
      "Respondent contact information across different instruments",
      "Project-level metadata indicating survey type and time period",
    ],
    methods: [
      "Standardization of contact fields including email, phone, and name",
      "Rule-based deduplication using multiple identifiers",
      "Cross-project respondent matching",
      "Construction of a master respondent table with participation flags",
      "Validation checks to ensure no loss of legitimate unique respondents",
      "Reusable scripting and documentation",
    ],
    contributions: [
      "Consolidated survey datasets spanning multiple years and projects.",
      "Built cleaning pipelines to standardize contact and identifier fields.",
      "Designed rule-based matching logic to identify duplicate respondents.",
      "Created a unified respondent table with participation history.",
      "Defined matching criteria to balance precision and recall.",
      "Validated outputs through manual and programmatic QA checks.",
      "Documented pipeline logic for future analysts and handoff.",
    ],
    selectedFindings: [
      "Reduced duplicate outreach by identifying repeat respondents across projects.",
      "Enabled targeted sampling and improved response efficiency.",
      "Preserved institutional knowledge across independent survey efforts.",
      "Created a reusable internal tool rather than a one-time analysis.",
    ],
    challenges: [
      {
        challenge: "No universal respondent ID",
        solution:
          "Built rule-based matching using multiple identifiers.",
      },
      {
        challenge: "Inconsistent contact formats",
        solution:
          "Implemented aggressive standardization and cleaning.",
      },
      {
        challenge: "Risk of false duplicate removal",
        solution:
          "Used conservative matching rules and QA validation.",
      },
      {
        challenge: "Fragmented project data",
        solution:
          "Designed a scalable master dataset structure.",
      },
    ],
    impact: [
      "Reduced duplicate survey contact attempts.",
      "Enabled targeted outreach to previously responsive participants.",
      "Improved response efficiency by shifting from broad sampling to informed targeting.",
      "Established a reusable analytical framework for future surveys.",
    ],
    skillsDemonstrated: [
      "Data engineering and pipeline design",
      "Entity resolution and deduplication logic",
      "Applied R programming",
      "Survey data management",
      "Reproducible workflows",
      "Ethical handling of proprietary data",
    ],
    buttons: [
      {
        label: "View Workflow Summary",
        href: "/luis-portfolio-1/survey_opt/workflow_summary.pdf",
      },
    ],
    gallery: ["/luis-portfolio-1/survey_opt/workflow.png"],
  },
];

export const softwareProjects = [
  {
    slug: "nim",
    name: "Game of Nim - C++ Strategy Game",
    role: "Student Software Developer",
    organization: "Programming Concepts and Methodology I - Chaffey College",
    timeline: "November 2025",
    type: "Software Engineering Coursework Project",
    shortDescription:
      "Built a command-line version of the Game of Nim in C++ with input validation and both random and optimal computer play.",
    tech: [
      "C++",
      "Algorithms",
      "Input Validation",
      "Modular Design",
      "Control Flow",
      "Game Logic",
    ],
    banner: "/luis-portfolio-1/nim/code_pic.png",
    overview:
      "This project implements a command-line version of the classic Game of Nim using C++. The program simulates a two-player game between a human user and a computer opponent, featuring both randomized easy mode and optimal hard mode. It demonstrates foundational computer science skills including control flow, modular programming, input validation, algorithmic reasoning, and terminal-based user interaction.",
    problemStatement:
      "The objective was to design and implement a complete, playable game that enforces the rules of Nim, supports multiple difficulty modes, handles invalid user input safely, uses algorithmic logic to implement an optimal strategy, and provides clear feedback and game-state updates to the player. The challenge was not only to make the game functional, but to ensure it was robust, user-friendly, and logically correct under all gameplay conditions.",
    methods: [
      "Randomly seed the game using system time",
      "Generate an initial pile size between 10 and 21 stones",
      "Randomly assign the first turn",
      "Prompt the user to select difficulty mode",
      "Alternate turns between human and computer",
      "Validate inputs to prevent illegal moves",
      "Update and display remaining stones after each move",
      "Detect game-ending conditions and declare the winner",
      "Use the mathematical Nim strategy in hard mode to force the pile into 4k + 1 positions",
    ],
    contributions: [
      "Implemented full gameplay logic and rule enforcement.",
      "Added difficulty modes with both randomized and mathematically optimal computer strategy.",
      "Created modular functions to separate different gameplay behaviors.",
      "Added defensive input validation and clear terminal output.",
    ],
    selectedFindings: [
      "Hard mode uses deterministic logic rather than heuristics.",
      "The project demonstrates how abstract mathematical strategy can be translated into working software.",
      "The design balances usability, correctness, and modularity.",
    ],
    challenges: [
      {
        challenge: "Preventing invalid moves and negative stone counts",
        solution:
          "Implemented input validation loops and bounds checking.",
      },
      {
        challenge: "Implementing optimal computer play",
        solution:
          "Applied mathematical Nim strategy using modulo arithmetic.",
      },
      {
        challenge: "Maintaining clean control flow",
        solution:
          "Broke logic into well-defined functions for readability and reuse.",
      },
    ],
    impact: [
      "Demonstrates the ability to translate abstract rules and mathematical logic into a functioning software application.",
      "Highlights foundational strength in programming, algorithmic thinking, and software design.",
      "Shows how modular problem-solving and validation skills transfer to larger systems work.",
    ],
    skillsDemonstrated: [
      "C++ programming fundamentals",
      "Algorithmic problem-solving",
      "Defensive programming",
      "Modular software design",
      "Debugging and edge-case handling",
      "Game theory implementation",
    ],
    buttons: [
      {
        label: "View Nim Report",
        href: "/luis-portfolio-1/nim/game_of_nim_report.pdf",
      },
      {
        label: "View Nim Code PDF",
        href: "/luis-portfolio-1/nim/game_of_nim_code.pdf",
      },
    ],
    gallery: [],
  },
  {
    slug: "lc4-assembler",
    name: "LC4 Assembler",
    role: "Student Systems Programmer",
    timeline: "2026",
    shortDescription:
      "Implemented a two-pass assembler in C with parsing, file I/O, and memory management.",
    tech: ["C", "Systems Programming"],
    overview:
      "The LC4 Assembler project focused on low-level systems programming concepts such as parsing, translation, file I/O, and memory management. It strengthened my understanding of how higher-level instructions map into machine-readable formats.",
    bullets: [
      "Implemented a two-pass assembly workflow.",
      "Worked with parsing, file handling, and low-level memory logic.",
      "Applied systems programming fundamentals in C.",
    ],
    buttons: [],
    gallery: [],
  },
  {
    slug: "java-suite",
    name: "Java Project Suite",
    role: "Student Developer",
    timeline: "2026",
    shortDescription:
      "Developed multiple Java applications using object-oriented programming, including games, simulations, and small systems applications.",
    tech: ["Java", "OOP"],
    overview:
      "This section groups several Java projects completed during my first MCIT semester, including games, simulations, and small systems applications. Together, they reflect my growth in object-oriented design, application logic, and program structure.",
    bullets: [
      "Built projects including Battleship, RPG-style games, Movie Trivia, and a Student Management System.",
      "Applied object-oriented programming concepts such as encapsulation and modular design.",
      "Strengthened my ability to structure programs and reason through application logic.",
    ],
    subprojects: [
      "Battleship",
      "RPG-style game",
      "Movie Trivia",
      "Student Management System",
      "Library Catalog System",
      "Supermarket simulation",
      "Ice cream stand project",
      "Water tank game",
      "Small website",
    ],
    buttons: [],
    gallery: [],
  },
];

export const researchProjects = [
  {
    slug: "ucla-honors",
    name: "UCLA Honors Thesis – Political Behavior & Public Opinion",
    role: "Honors Researcher and Data Analyst",
    organization: "UCLA Department of Political Science",
    timeline: "2020 - 2021",
    type: "Mixed-Methods Independent Honors Thesis",
    shortDescription:
      "Conducted geospatial and statistical analysis of voter access and turnout using election, census, and polling place data.",
    tech: ["R", "ArcGIS", "Statistical Modeling", "Research Design"],
    banner: "/luis-portfolio-1/ucla_honors/ucla_royce.png",
    overview:
      "For my departmental honors thesis at UCLA, I conducted an independent mixed-methods research study examining how changes to ballot box access following Shelby County v. Holder affected minority voter turnout in U.S. presidential elections. The project focused on voter ID law strictness and geographic access to polling places, combining survey data, geospatial analysis, and census demographics.",
    problemStatement:
      "The research asked whether stricter voter ID laws affect minority turnout differently than White turnout, whether changes in polling place locations increased travel burdens for minority communities, and whether geographic and institutional barriers are distributed evenly across racial and ethnic groups.",
    dataSources: [
      "2016 Collaborative Multiracial Post-Election Survey (CMPS)",
      "Polling place location data from 2012 and 2016",
      "U.S. Census and ACS data",
      "State-level voter identification law classifications and policy histories",
    ],
    methods: [
      "Logistic regression modeling",
      "Interaction effects analysis",
      "Distance-based analysis using K-nearest neighbors",
      "ArcGIS geocoding and spatial processing",
      "Merging survey, policy, and geospatial data",
      "Robustness checks and limitation analysis",
    ],
    contributions: [
      "Developed a replicable methodology integrating CMPS survey data with geospatial access measures.",
      "Created a distance-based polling place access metric using census block group centroids.",
      "Demonstrated how CMPS data can be paired with policy-level variables such as voter ID law strictness.",
      "Produced a clean documented workflow for merging CMPS with external datasets.",
      "Generated findings extending existing scholarship on structural voting barriers.",
    ],
    selectedFindings: [
      "Latino voter turnout was significantly more sensitive to voter ID law strictness than White or Black turnout.",
      "Polling place closures increased travel distances disproportionately in majority Black and Latino communities.",
      "Distance increases aligned with lower turnout, consistent with voting-cost research.",
      "White voters were least affected by both voter ID strictness and polling place distance changes.",
    ],
    challenges: [
      {
        challenge: "No individual-level voter address data available",
        solution:
          "Used census block group centroids as population proxies.",
      },
      {
        challenge: "Polling place datasets varied in completeness and formatting",
        solution:
          "Applied KNN algorithms to approximate voter-to-polling-place distance.",
      },
      {
        challenge: "Required extensive manual geocoding and validation",
        solution:
          "Built reproducible data pipelines for cleaning and merging.",
      },
      {
        challenge: "Complex spatial joins across multiple years and states",
        solution:
          "Documented assumptions and limitations transparently.",
      },
    ],
    impact: [
      "Demonstrates ability to manage complex real-world datasets.",
      "Shows depth in applied political data science.",
      "Highlights experience translating analysis into policy insights.",
      "Provides a reusable methodological framework for future voting-access research.",
    ],
    skillsDemonstrated: [
      "Advanced data wrangling",
      "Applied statistical modeling",
      "Geospatial analysis and GIS workflows",
      "Policy-oriented quantitative research",
      "Technical writing and academic communication",
    ],
    buttons: [
      {
        label: "View Honors Thesis",
        href: "/luis-portfolio-1/ucla_honors/honors_thesis.pdf",
      },
    ],
    gallery: [
      "/luis-portfolio-1/ucla_honors/table1.png",
      "/luis-portfolio-1/ucla_honors/table4.png",
      "/luis-portfolio-1/ucla_honors/table5.png",
      "/luis-portfolio-1/ucla_honors/table6.png",
      "/luis-portfolio-1/ucla_honors/table7.png",
    ],
  },
  {
    slug: "ps125",
    name: "Public Opinion on Nuclear Policy in Japan and U.S. Security Commitments",
    role: "Lead Researcher and Data Analyst",
    organization: "UCLA Department of Political Science",
    timeline: "2021",
    type: "Mixed-Methods Independent Research",
    shortDescription:
      "Used quantitative analysis to study public opinion, nuclear policy attitudes, and support for international disarmament commitments.",
    tech: ["R", "Quantitative Analysis", "Public Opinion Research"],
    banner: "/luis-portfolio-1/ps125/ucla_royce.png",
    overview:
      "This research project examined how Japanese public perceptions of nuclear weapons relate to support for the United States joining the Treaty on the Prohibition of Nuclear Weapons (TPNW). Using original survey data from a nationally representative Japanese public opinion experiment, I conducted a full empirical analysis combining political theory, statistical modeling, and policy interpretation.",
    problemStatement:
      "The core research question was how Japanese perceptions of nuclear weapons influence support for the United States joining the TPNW, within the broader context of Japan’s historical relationship to nuclear weapons, reliance on the U.S. nuclear umbrella, and contemporary disarmament debates.",
    dataSources: [
      "Japanese Public Opinion Survey from the Yale ISPS Data Archive",
      "Survey experiment with five treatment groups",
      "Attitudinal variables related to nuclear danger, deterrence, treaty compliance, and support for U.S. participation in the TPNW",
    ],
    methods: [
      "Logistic regression modeling",
      "Data cleaning and factor recoding",
      "Model diagnostics using VIF and model selection",
      "Probability interpretation and marginal comparisons",
      "Integration of statistical results with political theory and policy context",
    ],
    contributions: [
      "Designed and executed an independent research study on Japanese nuclear attitudes and treaty support.",
      "Conducted literature review across nuclear policy, alliance politics, and public opinion theory.",
      "Cleaned and analyzed survey-based political opinion data.",
      "Applied quantitative analysis to compare support patterns across perceptions and groups.",
      "Produced a full academic paper synthesizing findings with theory and historical context.",
    ],
    selectedFindings: [
      "Perceiving nuclear weapons as dangerous strongly increased support for U.S. participation in the TPNW.",
      "Believing nuclear weapons are unacceptable in any circumstance also increased support.",
      "Believing countries will always cheat on treaties reduced support.",
      "Treatment cues and gender did not meaningfully influence support.",
    ],
    challenges: [
      {
        challenge: "Complex policy context",
        solution:
          "Grounded the analysis in political science and international relations scholarship.",
      },
      {
        challenge: "Survey data limitations",
        solution:
          "Used careful subgroup analysis and documented sample limitations transparently.",
      },
      {
        challenge: "Translating quantitative results into policy insight",
        solution:
          "Integrated statistical findings with broader historical and institutional analysis.",
      },
    ],
    impact: [
      "Demonstrates ability to manage a research question end-to-end.",
      "Shows how public opinion can diverge from elite security doctrine.",
      "Provides a framework that can be reused for comparative nuclear policy opinion research.",
    ],
    skillsDemonstrated: [
      "Quantitative political analysis",
      "Logistic regression and model selection",
      "Survey data cleaning and validation",
      "Policy-relevant interpretation",
      "Academic writing",
      "Bridging theory and data",
    ],
    buttons: [
      {
        label: "View Full Report",
        href: "/luis-portfolio-1/ps125/ps125_report.pdf",
      },
    ],
    gallery: [
      "/luis-portfolio-1/ps125/q1.png",
      "/luis-portfolio-1/ps125/q2.png",
      "/luis-portfolio-1/ps125/q3.png",
      "/luis-portfolio-1/ps125/q4.png",
      "/luis-portfolio-1/ps125/figure.png",
      "/luis-portfolio-1/ps125/figure2.png",
    ],
  },
];

export const allProjects = [
  featuredCaseStudy,
  ...featuredProjects,
  ...softwareProjects,
  ...researchProjects,
];