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
  tools: ["Git", "Docker", "Jira", "Confluence", "Figma", "Miro", "Email on Acid"],
  other: ["Responsive Design", "UI/UX", "Accessibility"],
};

export const projects = [
  {
    id: 1,
    name: "Email Components Library",
    description: "Implementing and evolving email components used for all transactional communicationscomponent at Klarna. Currently part of rolling out the new component library. Built using atomic design methodology with atoms, molecules, and organisms to create a comprehensive design system.",
    technologies: ["React", "TypeScript", "JavaScript", "Github"],
    githubUrl: null, //"://github.com/yourusername/project1",
    liveUrl: null, //"https://project1-demo.com",
    featured: true,
    images: [
      "/images/component-library.avif",
      "/images/design-test.mp4",
      "/images/monthly-comms.avif",
    ],
  },
  {
    id: 2,
    name: "Dunning Library",
    description: "A Figma design library for aligning the visual identity of the dunning processes for Klarna payment methods. Creating intuitive and user-friendly building blocks that enable anyone to visualize dunning processes without technical expertise.",
    technologies: ["Figma"],
    githubUrl: null,
    liveUrl: null,
    featured: false,
    images: [
      "/images/dunning-design.avif",
      "/images/dunning-test.mp4",
    ],
  },
  {
    id: 3,
    name: "OnePay x Klarna",
    description: "Designing and implementing email components and visuals for the collaboration between Walmart and Klarna through their payment solution OnePay.",
    technologies: ["JavaScript", "TypeScript", "Github", "React", "Figma"],
    githubUrl: null,
    liveUrl: "https://www.klarna.com/us/klarna-onepay/",
    featured: true,
    images: [
      "/images/comms-op.avif",
      "/images/comms-op-2.avif",
      "/images/onepay.avif"
    ],
  },
  {
    id: 4,
    name: "Settlement calendar",
    description: "Designing and implementing communication visuals for Klarna's settlement calendar feature. Focused on creating clear, user-friendly interfaces that help users understand payment schedules and settlement dates.",
    technologies: ["JavaScript", "Github", "React", "Figma"],
    githubUrl: null,
    liveUrl: null,
    featured: false,
    images: [
      "/images/scal-comms.avif",
      "/images/scal-test.mp4",
    ],
  },
  {
    id: 5,
    name: "Monthly invoice",
    description: "Evolved the visual identity and communication strategy across app interfaces and transactional communications, ensuring consistent user experience across all touchpoints.",
    technologies: ["JavaScript", "Github", "React", "Figma"],
    githubUrl: null,
    liveUrl: null,
    featured: false,
    images: [
      "/images/monthly-overview.avif",
      "/images/monthly-design.avif",
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
