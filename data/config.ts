export const personalInfo = {
  name: "Matilda Wasing",
  title: "Software Engineer",
  location: "Stockholm, Sweden",
  email: "",
  github: "https://github.com/MatildaWasing",
  linkedin: "https://www.linkedin.com/in/matilda-wasing-7bb4a1179/",
  bio: "Software Engineer with designer background. I'm passionate about creating exceptional user experiences through clean, maintainable code.",
};

export const skills = {
  languages: ["TypeScript", "JavaScript", "Python", "Java"],
  frontend: ["React", "HTML5", "CSS3", "Tailwind CSS"],
  tools: ["Git", "Docker", "Jira", "Confluence", "Figma", "Miro"],
  other: ["Responsive Design", "UI/UX", "Accessibility", "Email on Acid"],
};

export const projects = [
  {
    id: 1,
    name: "Klarna: Comms Design Library",
    description: "Part of developing and rolling out the design system for Klarnas transactional communications. Creating a library of communication design assets for Klarnas transactional communications.",
    technologies: ["React", "TypeScript", "Javascript", "Github"],
    githubUrl: null, //"://github.com/yourusername/project1",
    liveUrl: null, //"https://project1-demo.com",
    featured: true,
    // Add your project screenshots here - replace with your actual image paths
    // Images should be placed in the public folder (e.g., /images/project1-1.jpg)
    images: [
      "/images/project1-1.jpg", // Replace with your actual image path
      "/images/project1-2.jpg", // Replace with your actual image path
      "/images/project1-3.jpg", // Replace with your actual image path
    ],
  },
  {
    id: 2,
    name: "OnePay x Klarna",
    description: "Designing and implementing email components and visuals for the collaboration between Walmart and Klarna through their payment solution OnePay.",
    technologies: ["JavaScript", "TypeScript", "Github", "React", "Figma"],
    githubUrl: null,
    liveUrl: null,
    featured: true,
    // Add your project screenshots here
    images: [
      "/images/project2-1.jpg", // Replace with your actual image path
      "/images/project2-2.jpg", // Replace with your actual image path
    ],
  },
  {
    id: 3,
    name: "Klarna: Dunning Library ",
    description: "A Figma design component library for aligning the visual identity of the dunning processes for Klarna payment methods. Creating intuative and user friendly building blocks for anyone to visualize the dunning processes without having a background in the technicalities.",
    technologies: ["Figma"],
    githubUrl: null,
    liveUrl: null,
    featured: false,
    images: [
      "/images/project3-1.jpg", // Replace with your actual image path
    ],
  },
  {
    id: 4,
    name: "Klarna: Settlement calendar",
    description: "Designing and implementing App and Communication visuals for the Monthly invoice product for Klarna. Part of evolving the visual identity and a communication strategy. Including implementing the frontend of the Monthly invoice transactional communications.",
    technologies: ["JavaScript", "Github", "React", "Figma"],
    githubUrl: null,
    liveUrl: null,
    featured: false,
    images: [
      "/images/project4-1.jpg", // Replace with your actual image path
    ],
  },
  {
    id: 5,
    name: "Klarna: Monthly invoice Product design & implementation",
    description: "Designing and implementing App and Communication visuals for the Monthly invoice product for Klarna. Part of evolving the visual identity and a communication strategy. Including implementing the frontend of the Monthly invoice transactional communications.",
    technologies: ["JavaScript", "Github", "React", "Figma"],
    githubUrl: null,
    liveUrl: null,
    featured: false,
    images: [
      "/images/project5-1.jpg", // Replace with your actual image path
    ],
  },
];

export const experience = [
  {
    id: 1,
    role: "Software Engineer",
    company: "Klarna",
    period: "2025 - Present",
    description: "Developing the frontend for the Klarna transactional communications. Including email, SMS, letter and push notifications. Building a new design system for the transactional communications.",
    technologies: ["TypeScript", "React", "Javascript", "Java"],
  },
  {
    id: 2,
    role: "Senior Frontend Designer",
    company: "Klarna",
    period: "2023 - 2025",
    description: "Designing and developing the frontend for the Klarna transactional communications.",
    technologies: ["JavaScript", "TypeScript", "React", "HTML", "CSS", "Figma"],
  },
  {
    id: 3,
    role: "Frontend Designer",
    company: "Klarna",
    period: "2019 - 2023",
    description: "Designing and developing the frontend for the Klarna transactional communications.",
    technologies: ["JavaScript", "React", "HTML", "CSS", "Figma"],
  },
];
