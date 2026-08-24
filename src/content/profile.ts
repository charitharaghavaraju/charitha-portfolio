export const profile = {
  name: "Charitha Raghavaraju",
  role: "Machine Learning Engineer",
  location: "Tampere, Finland",
  relocation: "Open to Relocation",
  email: "charitharaghavaraju@gmail.com",
  github: "https://github.com/charitharaghavaraju",
  githubHandle: "charitharaghavaraju",
  linkedin: "https://www.linkedin.com/in/charitha-raghavaraju",
  tagline:
    "Machine learning researcher and engineer working across applied research and production AI.",
  about: [
    "Motivated machine learning researcher and engineer with an M.Sc. in signal processing and machine learning from Tampere University and experience spanning applied research and production AI. Contributed to research on automated audio captioning and sound event detection within the EU MARVEL project, resulting in peer-reviewed IEEE publications, alongside hands-on work developing, fine-tuning, and deploying deep learning systems.",
    "Comfortable across the full research cycle, from literature-driven problem formulation and dataset construction to model development and rigorous evaluation. Motivated to pursue doctoral research that advances machine learning methods and their real-world impact.",
  ],
  languages: [
    { name: "English", level: "Fluent" },
    { name: "Telugu", level: "Native" },
    { name: "Finnish", level: "Intermediate" },
    { name: "Norwegian", level: "Basic" },
  ],
} as const;

export const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "publications", label: "Publications" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "connect", label: "Connect" },
] as const;
