import { Icons } from "@/components/icons";
import { HomeIcon, Icon, NotebookIcon } from "lucide-react";
import { SlPaperPlane } from "react-icons/sl";

export const DATA = {
  name: "Jawad",
  initials: "JS",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "I am a 4th-Year Major Honours Computer Science Co-op student at the University of Guelph.",
  summary:
    "As a 4th-year Computer Science Co-op student at the University of Guelph, I am passionate about applying my technical knowledge to build innovative and efficient software solutions. I am driven to write clean, maintainable code and continuously improve my programming skills, while also leveraging my strong foundation in mathematics to approach complex problems with precision and creativity. I am actively seeking a Co-op opportunity for the W25 and S25 season where I can contribute to a team, solve real-world challenges, and gain hands-on experience in software engineering. I bring a dependable and collaborative attitude, a strong work ethic, and a genuine passion for technology and learning. Whether it's designing algorithms, optimizing code, or developing software from the ground up, I am committed to delivering high-quality work and making a meaningful impact. I look forward to working at a forward-thinking company where I can not only apply my skills but also grow and contribute to building something extraordinary.",
  avatarUrl: "/JawadShaikhProfilePicture.jpg",
  skills: [
    "Java", "Python", "C", "JavaScript", "HTML/CSS", "R", "Bash", "SQL", 
    "C++", "GitLab", "GitHub", "Docker", "Terminal", "VSCode", "Nano", "JUnit", 
    "Valgrind", "Vercel", "React.js", "Node.js", "Express.js", "Tailwind.css", 
    "Flask", "MongoDB", "PostgreSQL", "SQLite3", "Redux", "Spring Boot 3", "Formik", "SASS"
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
        url: "https://github.com/ShaikhJ18",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jawad-shaikh-04480b24b/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:j.shklinkedin@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
        {
      company: "Data Inn Technologies",
      href: "https://datainn.io/",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/DataInnLogo.png",
      start: "Jun 2025",
      end: "Sep 2025",
      description: "Prompted and guided AI agents to generate UI components, backend logic, and database schemas, ensuring alignment with functional requirements and user experience goals. Developed and maintained backend services using Node.js and Drizzle ORM, ensuring efficient data access and secure handling of user-generated content. Performed rigorous testing, debugging, and integration validation across the stack, delivering a stable and reliable experience for end users.",
    },
    {
      company: "Simpleaccounts.io",
      href: "https://simpleaccounts.io/",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/ssimpleaccountsLogo.png",
      start: "May 2024",
      end: "Dec 2024",
      description:
        "I developed and maintained key features for an accounting application designed to help businesses manage balance sheets, quotations, and other financial data. Working with technologies like React.js, Redux, Spring Boot 3, and PostgreSQL, I collaborated closely with senior engineers to troubleshoot and resolve critical bugs, ensuring timely solutions for stakeholders. I also implemented advanced reporting features, including customizable filters and support for file uploads and CSV data downloads, enhancing the financial reporting experience. By utilizing GitHub and Git for version control, I ensured smooth collaboration and efficient deployment, consistently submitting high-quality pull requests. Additionally, I created dynamic, user-friendly forms using Formik and JavaScript, streamlining data entry and improving user workflow within the application.",
    },
    {
      company: "McDonald's Canada",
      badges: [],
      href: "https://www.mcdonalds.com/ca/en-ca.html",
      location: "Mississauga, Ontario",
      title: "Crew Member",
      logoUrl: "/mcDonaldsLogo.jpg",
      start: "Sep 2021",
      end: "Dec 2021",
      description:
        "I worked closely with team members to streamline task coordination during high-demand periods, ensuring efficient and smooth operations in a fast-paced environment. My role required a strong attention to detail, particularly in processing data accurately and handling complex transactions, which helped maintain high standards of quality and precision. These experiences enhanced my ability to manage multiple priorities, adapt quickly to changing demands, and consistently deliver reliable outcomes under pressure.",
    },
  ],

  education: [
    {
      school: "University of Guelph",
      href: "https://www.uoguelph.ca/",
      degree: "Bachelor of Computing",
      logoUrl: "/guelph_university_logo.jpg",
      start: "2022",
      end: "2027",
    },
    {
      school: "Erindale Secondary School",
      href: "https://erindale.peelschools.org/",
      degree: "OSSD",
      logoUrl: "/erindale-secondary-school-logo.jpg",
      start: "2019",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "TeamFlow",
      href: "https://github.com/ShaikhJ18/Employee-Management-Application",
      dates: "Dec 2024",
      active: true,
      description: 'Teamflow is a lightweight, self-hosted solution designed for small businesses and startups to manage employee information and performance',
      technologies: [
        "React.js",
        "TailwindCSS",
        "Flask",
        "Formik",
        "Sqlite3",
        "Github",
        "Git",
        "JavaScript",
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/ShaikhJ18/Employee-Management-Application",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "",
    },
    {
      title: "ShaikStockDataViz",
      href: "https://github.com/ShaikhJ18/ShaikhStockDataViz",
      dates: "January 2024",
      active: true,
      description:
        "Developed a Web application using Pandas, matplotlib, yfinance API, and streamlit to visualize real world stock data",
      technologies: [
        "Python", "streamlit", "pandas", "yfinance","matplotlib",
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/ShaikhJ18/ShaikhStockDataViz",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ShaikhJ18/ShaikhStockDataViz",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
   
  ],
  
} as const;
