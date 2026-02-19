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
    title: "Resume",
    url: "/superlite_v2/assets/ezra-stjarna-shively-resume.pdf",
    external: true,
  },
  {
    title: "The Lab",
    url: "/superlite_v2/lab",
  },
  {
    title: "Thinking",
    url: "/superlite_v2/thinking",
  },
];

export const socialLinks: SocialLink[] = [
  {
    title: "Call or Text Ezra",
    url: "tel:+14153359911",
    icon: "mdi:phone",
  },
  {
    title: "GitHub",
    url: "https://github.com/chromaglow",
    icon: "mdi:github",
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
    title: "Ezra Stjärna-Shively | Director TPM · AI/ML Automation · Seattle",
    description:
      "Director-level TPM who removed 600K+ labor hours via AI/ML automation. AWS Bedrock, global operations, open to Director & VP roles in Seattle.",
    image: identity.logo,
  },
  role: "Director-Level TPM | Removed 600K+ Labor Hours via AI/ML Automation | AWS Bedrock | Global Operations | Open to Director, VP & Senior Roles",
  description:
    "If you need someone who has removed 600,000+ labor hours through AI-enabled automation, redesigned global operations for 3.5x productivity gains, and can still architect technical solutions from AWS cloud infrastructure to physical prototyping - that's the intersection I live in.",
  socialLinks: [],
  links: [
    {
      title: "The Lab",
      url: "/superlite_v2/lab",
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
    title: "About | Ezra Stjärna-Shively - Director TPM · AI/ML Automation · Seattle",
    description:
      "Director-level TPM with 600K+ labor hours removed via AI/ML automation. AWS Bedrock, global operations leadership, open to Director & VP roles in Seattle.",
    image: identity.logo,
  },
  subtitle: "Director-Level TPM · AI/ML Automation · AWS Bedrock · Global Operations",
  about: {
    description: `<p>If you need someone who has removed 600,000+ labor hours through AI-enabled automation, redesigned global operations for 3.5x productivity gains, and can still architect technical solutions from AWS cloud infrastructure to physical prototyping - that's the intersection I live in.</p>

<p>At Amazon, I built the Associate Idea Share program from a 2-person pilot into a 22-person global engine spanning 5 regions and serving 1M+ Amazon sellers. Over five years, I drove $17M in budget impact, prevented $8.6M in cost leakage, and architected systems now running 386,000 automated cases per year - without human intervention.</p>

<p>I was also the first person in a 2,200-person organization to leverage AWS Bedrock (Claude, Titan) for advanced statistical modeling. Using generative AI, I diagnosed a capacity planning problem that had defeated every prior approach for 5+ years, restoring forecasting accuracy from a 71% error rate to 95%+.</p>

<p>What makes me different: I don't just manage technical programs - I understand the systems underneath them. I can map end-to-end distributed architecture, partner with L7 engineers to scope SDE-weeks and define API integration points, and build proof-of-concepts from scratch to validate feasibility before committing resources. Whether that's a 3-phase routing automation serving 5M contacts or a serverless NFC-enabled product prototype built for $20 in materials.</p>

<p>My career arc is intentional: user-centered design research, then operational transformation, then AI/ML-enabled global programs, then technical leadership. The through-line has always been the same: understand the human system, map the technical system, find the intervention point, measure everything.</p>

<p>Currently exploring Director TPM, VP Technical Operations, and Senior Program Management opportunities in Seattle where AI fluency, systems thinking, and global operational leadership create transformational impact. Let's talk.</p>`,
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
    description: `A career built on understanding systems, human and technical, and redesigning them for scale.`,
    items: [
      {
        title: "Global Technical Program Manager II | AI/ML Automation | Process Engineering | Operations Technology",
        company: {
          name: "Amazon",
          image: "/superlite_v2/assets/amazon-logo.jpg",
          url: "/superlite_v2/work/amazon",
        },
        date: "2020 - Present",
      },
      {
        title: "Digital Operations & Sales Strategy Manager",
        company: {
          name: "Carter Motors",
          url: "#",
        },
        date: "2016 - 2020",
      },
      {
        title: "Founder / Creative Director",
        company: {
          name: "TFG Label Consulting",
          url: "#",
        },
        date: "2013 - 2016",
      },
      {
        title: "Program Manager - Innovation & Training",
        company: {
          name: "Inspired by Food",
          url: "#",
        },
        date: "2010 - 2013",
      },
      {
        title: "Design Researcher",
        company: {
          name: "NU Research + Design",
          url: "#",
        },
        date: "2007 - 2011",
      },
    ],
  },
  connect: {
    description: `I'm actively exploring Director TPM, VP Technical Operations, and Senior Program Management roles in Seattle. If you're working on hard operational or AI/ML problems at scale, I'd love to connect.`,
    links: socialLinks,
  },
};

// Lab (/lab)
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "The Lab | Ezra Stjärna-Shively",
    description: "Automation systems, AI/ML tools, physical prototypes, and operational programs - built end-to-end.",
    image: identity.logo,
  },
  subtitle: "Automation systems, AI/ML tools, physical prototypes, and operational programs - built end-to-end. Intentional capability maintenance: staying grounded in implementation reality.",
  projects: [],
};

// Thinking (/thinking)
export const blogPageContent: BlogPageContent = {
  seo: {
    title: "Thinking | Ezra Stjärna-Shively",
    description: "Writing on AI/ML automation, technical program management, and building systems that scale.",
    image: identity.logo,
  },
  subtitle: "Writing on AI/ML automation, technical program management, and building systems that scale.",
};
