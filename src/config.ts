import type {
  NavBarLink,
  SocialLink,
  Identity,
  AboutPageContent,
  ProjectPageContent,
  BlogPageContent,
  HomePageContent,
} from "./types/config";

export const identity: Identity = {
  name: "Ezra Stjärna-Shively",
  logo: "/superlite_v2/profile.jpg",
  email: "chromaglow@gmail.com",
};

export const navBarLinks: NavBarLink[] = [
  {
    title: "Home",
    url: "/superlite_v2/",
  },
  {
    title: "About",
    url: "/superlite_v2/about",
  },
  {
    title: "Projects",
    url: "/superlite_v2/projects",
  },
  {
    title: "Blog",
    url: "/superlite_v2/blog",
  },
];

export const socialLinks: SocialLink[] = [
  {
    title: "GitHub",
    url: "https://github.com/chromaglow",
    icon: "mdi:github",
    external: true,
  },
  {
    title: "Support Me",
    url: "https://www.buymeacoffee.com/chromaglow",
    icon: "mdi:coffee",
    external: true,
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/eshively/",
    icon: "mdi:linkedin",
    external: true,
  },
  {
    title: "Mail",
    url: "mailto:chromaglow@gmail.com",
    icon: "mdi:email",
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Ezra Stjärna-Shively",
    description:
      "Global Program Manager & Process Engineer building systems that bridge technology and people. 600,000+ labor hours removed via automation-first delivery.",
    image: identity.logo,
  },
  role: "Global Program Manager & Process Engineer",
  description:
    "I'm Ezra Stjärna-Shively, a Global Program Manager building systems that bridge technology and people. I turn frontline reality into scalable, tech-enabled mechanisms that improve business performance.",
  socialLinks: socialLinks,
  links: [
    {
      title: "My Projects",
      url: "/superlite_v2/projects",
    },
    {
      title: "About Me",
      url: "/superlite_v2/about",
    },
  ],
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "About | Ezra Stjärna-Shively",
    description:
      "Global Program Manager & Process Engineer with 600,000+ labor hours removed via automation. Technical program management, systems mapping, and mechanism design.",
    image: identity.logo,
  },
  subtitle: "Building systems that bridge technology and people",
  about: {
    description: `
I am a Global Program Manager with a track record of turning frontline reality into scalable, tech-enabled mechanisms that improve business performance.
<br/><br/>
<strong>Impact:</strong> 600,000+ labor hours removed/avoided (2021-2026) via global mechanisms and automation-first delivery. Most recent year: 111,800 annualized labor hours removed (≈62 FTE capacity) with 50% YoY output increase through workflow redesign.
<br/><br/>
<strong>Core Skills:</strong> Technical program management • Process engineering • Systems mapping & root cause discovery • Requirements & phased roadmaps • Mechanism design (SOPs, SLAs, governance) • Metrics integrity & capacity planning • Change management • Global stakeholder influence
<br/><br/>
<strong>Design Philosophy:</strong> Good design should be as little design as possible. I believe the best solutions work so seamlessly that people don't even notice them. They just work. That's how I approach global program management: building systems that drive efficiency without creating friction. As a Global Program Manager, I focus on business transformation, strategy, and operational excellence—leading programs that remove complexity, streamline operations, and scale across global teams. I work at the intersection of data, automation, and human behavior, ensuring that every initiative is impactful, intuitive, and built for the long haul.`,
    image_l: {
      url: "/superlite_v2/profile.jpg",
      alt: "Ezra Stjärna-Shively",
    },
    image_r: {
      url: "/superlite_v2/profile.jpg",
      alt: "Ezra Stjärna-Shively",
    },
  },
  work: {
    description: `A career spanning design research, program management, and technical operations—always focused on understanding systems and improving outcomes.`,
    items: [
      {
        title: "Program Manager II | Global Technical Programs (Automation, AI, Process Engineering, Ops Tech)",
        company: {
          name: "Amazon",
          image: "/superlite_v2/profile.jpg",
          url: "/superlite_v2/work/amazon",
        },
        date: "2020 - Present",
      },
      {
        title: "Internet Sales Manager (Sales Strategy & Digital Operations)",
        company: {
          name: "Carter Motors",
          image: "/superlite_v2/profile.jpg",
          url: "#",
        },
        date: "2016 - 2020",
      },
      {
        title: "Founder / Creative Director",
        company: {
          name: "TFG Label Consulting",
          image: "/superlite_v2/profile.jpg",
          url: "#",
        },
        date: "2013 - 2016",
      },
      {
        title: "Program Manager - Innovation & Training",
        company: {
          name: "Inspired by Food",
          image: "/superlite_v2/profile.jpg",
          url: "#",
        },
        date: "2010 - 2013",
      },
      {
        title: "Design Researcher",
        company: {
          name: "NU Research + Design",
          image: "/superlite_v2/profile.jpg",
          url: "#",
        },
        date: "2007 - 2011",
      },
    ],
  },
  connect: {
    description: `I'm always interested in connecting with others working on automation, process engineering, or bridging the gap between technology and operations. Feel free to reach out.`,
    links: socialLinks,
  },
};

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "Projects | Ezra Stjärna-Shively",
    description: "Selected projects and work samples.",
    image: identity.logo,
  },
  subtitle: "Selected projects and work samples.",
  projects: [
    {
      title: "Coming Soon",
      description: "Projects will be added here.",
      image: "/superlite_v2/demo-2.jpg",
      year: "2026",
      url: "#",
    },
  ],
};

// Blog (/blog)
export const blogPageContent: BlogPageContent = {
  seo: {
    title: "Blog | Ezra Stjärna-Shively",
    description: "Thoughts on automation, process engineering, and building systems that work.",
    image: identity.logo,
  },
  subtitle: "Thoughts on automation, process engineering, and building systems.",
};
