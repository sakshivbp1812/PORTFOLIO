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
  cng,
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
    title: "Machine Learning Intern",
    company_name: "Reliance Jio",
    // icon: starbucks,
    iconBg: "#383E56",
    date: "June 2024 - Present",
    points: [
      "Contributing to machine learning initiatives under the IT department in Aadhar Team in TC 23.",
      "Developing a Personal Identifiable Information NER system using Presidio and spaCy models.",
      "Lead to Enhance data privacy across 90% of Jio’s 10,000 projects.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "TUSK Oralcare",
    // icon: starbucks,
    iconBg: "#383E56",
    date: "March 2024 - June 2024",
    points: [
      "Initiated the implementation of new features, contributing to an early 15% increase in user engagement.",
      "Assisted in optimizing website performance, resulting in a noticeable 10% reduction in page load times and enhanced user satisfaction.",
    ],
  },
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
  // {
  //   title: "Software Development Intern",
  //   company_name: "Prodigy Infotech",
  //   // icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "October 2023 - November 2023",
  //   points: [
  //     "Actively contributed to various software development projects, gaining hands-on experience in diverse domains and technologies.",
  //     "Acquired significant coding experience through active participation in the development lifecycle, from project inception to implementation and testing.",
  //   ],
  // },
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
    name: "FIND MY CNG",
    description:
      "The project includes an admin panel, a user app, and a gas owner app. Admins can log in via a web interface to add CNG stations and view users. The user app allows registration, viewing CNG stations, navigating with Google Maps, and making CNG payments. The gas owner app lets owners log in to check CNG availability at their stations.",
    tags: [
      {
        name: "Android App",
        color: "blue-text-gradient",
      },
      {
        name: "Java",
        color: "green-text-gradient",
      },
      {
        name: "Xampp Server",
        color: "pink-text-gradient",
      },
    ],
    image: cng,
    // source_code_link: "https://github.com/sakshivbp1812/Shortest_Path_Finder",
  },
];

export { services, technologies, experiences, testimonials, projects };
