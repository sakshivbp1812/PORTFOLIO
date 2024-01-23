import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  aiimg,
  contentcondenser,
  shortpath,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Cloud Computing",
    icon: mobile,
  },
  {
    title: "MERN Stack",
    icon: backend,
  },
  {
    title: "Open Source Contributor/ HacktoberFest2023",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Project Intern",
    company_name: "JNPA",
    // icon: starbucks,
    iconBg: "#383E56",
    date: "December 2023 - January 2024",
    points: [
      "Contributed to JNPA's event management system using Laravel for efficient and elegant PHP development.",
      "Designed and optimized the MySQL database structure with phpMyAdmin, ensuring seamless data management.",
      "Developed and tested the application locally using XAMPP, which integrates Apache, MySQL, PHP, and phpMyAdmin.",
      "Implemented robust backend logic in PHP to facilitate smooth communication between the front end and MySQL.",
    ],
  },
  {
    title: "Software Development Intern",
    company_name: "Prodigy Infotech",
    // icon: tesla,
    iconBg: "#E6DEDD",
    date: "October 2023 - November 2023",
    points: [
      "Actively contributed to various software development projects, gaining hands-on experience in diverse domains and technologies.",
      "Acquired significant coding experience through active participation in the development lifecycle, from project inception to implementation and testing.",
    ],
  },
  {
    title: "Cloud Computing Intern",
    company_name: "Acmegrade",
    // icon: shopify,
    iconBg: "#383E56",
    date: "June 2023 - August 2023",
    points: [
      "Interned on cloud computing, gaining hands-on experience with both AWS (Amazon Web Services) and Azure platforms.",
      "Contributed to the implementation of Infrastructure as Code (IaC) principles, automating deployment and management tasks on both AWS and Azure.",
      "Worked on configuring and optimizing cloud services such as virtual machines, storage solutions, and networking components on AWS and Azure.",
      
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //   name: "Sara Lee",
  //   designation: "CFO",
  //   company: "Acme Co",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
  
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
 ];

const projects = [
  {
    name: "AI Image Generation App ",
    description:
      "A powerful MERN stack project that combines the capabilities of Node.js, Express.js, MongoDB, React.js, OpenAI's DALL-E model, and Cloudinary to generate stunning images from textual descriptions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
    ],
    image: aiimg,
    source_code_link: "https://github.com/sakshivbp1812/AI-Image-Generation-App",
  },
  {
    name: "Content Condenser",
    description:
      "Content Condenser is a cutting-edge YouTube video summarization application that leverages advanced technologies to provide professionals with quick and informative video summaries.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "NLP - ML",
        color: "pink-text-gradient",
      },
    ],
    image: contentcondenser,
    source_code_link: "https://github.com/sakshivbp1812/Content_Condenser",
  },
  {
    name: "Shortest Path",
    description:
      "This project combines Node.js and React with JSX to create a web app that calculates and displays the shortest path in a graph. Users can input obstacle nodes between source and destination and the application will find shortest path using dijikstras.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: shortpath,
    source_code_link: "https://github.com/sakshivbp1812/Shortest_Path_Finder",
  },
];

export { services, technologies, experiences, testimonials, projects };
