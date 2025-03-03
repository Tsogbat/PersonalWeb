import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Tsogbat Bat-Erdene",
  initials: "TB",
  url: "https://dillion.io",
  location: "Taichung, TW",
  locationLink: "hhttps://maps.app.goo.gl/gmDD7E6cj4GH4RES9",
  description:
    "Majoring data analysis",
  summary:
  "3rd year data analysis student at Asia University, Taiwan. Skilled in MS SQL and visualizing data through Python. Have an experience in data cleaning. Proficient in Python and Java, and self learning web development.",
  email:
    "✉️ tsogbatb@yahoo.com",
  current:
    "📍 Taichung, Taiwan",
  avatarUrl: "/me.png",
  skills: [
    "Python",
    "Pandas",
    "React",
    "Java",
    "MsSQL",
    "MongoDB",
    "EViews",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Tsogbat",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/tsogbatb/:",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Cafe Numur",
      href: "",
      badges: [],
      location: "Ulaanbaatar, Mongolia",
      title: "Cafe Manager",
      logoUrl: "/cafenumur.png",
      start: "May 2024",
      end: "Aug 2024",
      description:
        "Overlooked team of 7",
    },
    {
      company: "iO Technology",
      badges: [],
      href: "https://www.iotech.mn/",
      location: "Ulaanbaatar, Mongolia",
      title: "Intern",
      logoUrl: "/iotech.png",
      start: "Jan 2024",
      end: "Feb 2024",
      description:
        "Conducted UAT for the new flutter app for both iOS and Android in agile dev",
    },
    {
      company: "University of Finance and Economy",
      href: "https://www.ufe.edu.mn/c/88?groupName=2023",
      badges: [],
      location: "Ulaanbaatar, Mongolia",
      title: "Content creator",
      logoUrl: "/ufe.png",
      start: "Sep 2023",
      end: "Dec 2023",
      description:
        "Created content for anti vape campaign and other campaigns",
    },
  ],
  education: [
    {
      school: "Asia University",
      href: "https://www.asia.edu.tw/",
      degree: "Bachelor's Degree of Computer Science (BCs)",
      logoUrl: "/asia.png",
      start: "2024",
      end: "2026",
    },
    {
      school: "University of Finance and Economics",
      href: "https://www.ufe.edu.mn/",
      degree: "Bachelor's Degree of Computer Science (BCs)",
      logoUrl: "/ufe.png",
      start: "2022",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Portfolio",
      href: "https://magicui.design",
      dates: "Dec 2024 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "Statistics on Mental Health",
      dates: "Feb 2023 - May 2023",
      active: true,
      description:
        "Did a research on statistics on mental health and created a dashboard for it.",
      technologies: [
        "Eviews",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
    },
    {
      title: "Statistics on UB air quality",
      dates: "Sep 2023 - Dec 2023",
      active: true,
      description:
        "Did a research on statistics on UB air quality and created a dashboard for it.",
      technologies: [
        "Eviews",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
    },
    {
      title: "Laptop price prediction",
      dates: "Nov 2024 - Jan 2025",
      active: true,
      description:
        "Cleaned, visualized and applied machine learning as well as deep learning models on top of the dataset to create a model that predicts the laptop prices from specs.",
      technologies: [
        "Python",
        "Pandas",
        "Matplotlib",
        "Seaborn",
        "Scikit-learn",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
    }
  ],
  hackathons: [
  ],
} as const;
