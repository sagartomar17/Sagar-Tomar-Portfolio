// Central place for all portfolio content.
// Edit the values below to personalize the site — no need to touch components.
import heroPhoto from '../assets/images/sagar-tomar-photo.jpeg';
import universityPhoto from '../assets/images/university-garhwal.jpg';
import institutePhoto from '../assets/images/cetpa-institute.jpg';

export const personalInfo = {
  name: "Sagar Tomar",
  designation: "Full Stack Developer",
  role: "Full Stack Python Developer",
  age: "25",
  phone: "+91 7217285903",
  location: "Meerut, Uttar Pradesh, India",
  email: "sagartomar7217@gmail.com",
  resumeUrl: "/resume/Sagar_Tomar_Resume.pdf",
  avatar: heroPhoto,
  about:
    "I am '25 BCA graduate student at Maharaja Agrasen Himalayan Garhwal University, Uttarakhan and i am Full Stack Python Developer. I love coding & building web applications. Working on myself every day to improve my skills.",
};

export const socialLinks = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/sagartomar17',
    icon: 'FaLinkedin',
  },
  {
    id: 'github',
    label: 'GitHub',
    url: 'https://github.com/sagartomar17',
    icon: 'FaGithub',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    url: 'https://www.instagram.com/sagar_rajput__1917?igsh=MTdheDdhN2l1YTl0NQ==',
    icon: 'FaInstagram',
  },
];

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
];

export const skillGroups = [
  {
    id: 'skills',
    title: 'Skills',
    items: [
      'Major programming language, skilled in JAVA and Python',
      'Web Development (HTML, CSS, JavaScript, ReactJs, Python, Fast Api, MySQL)',
    ],
  },
  {
    id: 'major-skills',
    title: 'Major Skills',
    items: [
      'Web dev: Proficiency in HTML, CSS, JS. Also I have backend knowledge in Python and frontend in ReactJs.',
      'Full-Stack Web Development, Python, FastAPI, React.js, JavaScript, HTML5, CSS3, REST APIs, SQL, Git & GitHub.',
    ],
  },
];

export const projectsData = [
  {
    id: 1,
    title: 'SRS PDF',
    description: 'Full Frontend + Backend Project.',
    icon: 'FaFilePdf',
  },
  {
    id: 2,
    title: 'Amazon Clone',
    description: 'An E-Commerce Storefront Clone Built From Scratch.',
    icon: 'FaShoppingCart',
  },
  {
    id: 3,
    title: 'Landing Page Website',
    description: 'A Modern, Responsive Landing Page.',
    icon: 'FaGlobe',
  },
  {
    id: 4,
    title: 'Card Gallery',
    description: 'An Interactive Gallery Built With Animated Cards.',
    icon: 'FaImages',
  },
];


export const educationData = [
  {
    id: 1,
    degree: 'BCA',
    institute: 'Maharaja Agrasen Himalayan Garhwal University',
    grade: '',
    status: '2025 Completed',
    image: universityPhoto,
  },
  {
    id: 2,
    degree: 'Python Full Stack Training',
    institute: 'CETPA Infotech',
    grade: 'React.js, FastAPI, PostgreSQL',
    status: '2026 Completed',
    image: institutePhoto,
  },
];
