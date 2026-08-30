import profileImg from '../public/chauhan.png';

export const portfolioData = {
  personal: {
    name: "Khushboo Chauhan",
    title: "Full stack web developer",
    tagline: "[WRITE YOUR TAGLINE]",
    about: "I am a Computer Science and Engineering student at Lovely Professional University with a strong interest in software development and problem-solving. I enjoy building practical projects that help me strengthen my programming, web development, and data structures skills. My projects include a LiFi-based highway navigation system, a student record management system using linked lists, and web-based applications using HTML and CSS. I am continuously learning new technologies, improving my coding skills, and looking for opportunities to apply my knowledge to real-world software development challenges.",
    academicBackground: "B.Tech CSE at Lovely Professional University",
    careerInterests: "Software Development and Full-Stack Web Development",
    technicalInterests: "Web Development, Software Engineering, and AI-powered Solutions",
    location: "Phagwara, Punjab, India",
    email: "khushboochauhan172007@gmail.com",
    profileImage: profileImg,
  },
  socials: {
    github: "https://github.com/Khushboochauhan-17",
    linkedin: "https://www.linkedin.com/in/khushboo-chauhan-507003298/",
  },
  resume: {
    resumeUrl: "https://drive.google.com/file/d/1XmC3Z1V8W1i6M5m5J1Q5F5v5F5v5F5F5F5/view?usp=sharing", // Link to your resume PDF
    education: [
      {
        degree: "B.Tech in Computer Science and Engineering",
        institution: "Lovely Professional University",
        year: "2025-2029",
        cgpa: "8.67",
      },
    ],
  },
  projects: [
    {
      title: "LiFi Highway – LiFi Based Highway Navigation System",
      description:
        "An embedded-system based highway navigation and communication prototype that uses LiFi technology to transmit information through LED light. The system demonstrates how light-based communication can be used for highway navigation and information transmission.",
      technologies:
        "Arduino Uno, C/C++, LiFi, LCD, Light Sensor, Solar Panel, Embedded Systems",
      features: [
        "LiFi-based wireless communication using LED light",
        "Arduino Uno based embedded system",
        "LCD display for navigation information",
        "Light sensor for detecting optical signals",
        "Solar-powered communication concept",
        "Smart highway navigation prototype",
      ],
      github: "https://github.com/Khushboochauhan-17",
      demo: "",
      image: "",
    },

    {
      title: "Registration Form Web-Based Application",
      description:
        "A simple web-based registration form application developed using HTML and CSS for collecting and displaying basic candidate details through a structured and user-friendly form.",
      technologies: "HTML, CSS",
      features: [
        "Candidate registration form",
        "Input fields for basic personal details",
        "Structured and user-friendly form layout",
        "CSS-based styling and page design",
        "Web-based form interface",
      ],
      github:
        "https://github.com/Khushboochauhan-17/Registration-form-web-based-application",
      demo: "",
      image: "",
    },

    {
      title: "Student Record Management System",
      description:
        "A DSA-based web application for managing student records using linked lists. The project demonstrates the practical implementation of data structures for storing, managing, and organizing student information.",
      technologies: "HTML, CSS, C/C++, Data Structures, Linked List",
      features: [
        "Student record management",
        "Linked list based data storage",
        "Adding and managing student records",
        "Searching and organizing student information",
        "Web-based user interface",
        "Practical implementation of data structures",
      ],
      github:
        "https://github.com/Khushboochauhan-17/Student-record-managment-system",
      demo: "",
      image: "",
    },
  ],
  certifications: [
    {
      title: "Programming Web Development",
      organization: "Mindluster",
      date: "January 9, 2026",
      verifyLink:
        "https://drive.google.com/file/d/1EBNWCLopvfzFDFF1EVRI7cIp1xq0H0Ae/view?usp=sharing",
      image: "",
    },
    {
      title: "Introduction to Cyber Security",
      organization: "Infosys Springboard",
      date: "February 27, 2026",
      verifyLink:
        "https://drive.google.com/file/d/1EdVdg9WkYE8BKQmmsimkaO7KqkiSLkpc/view?usp=sharing",
      image: "",
    },
    {
      title: "CS105: Introduction to Python",
      organization: "Saylor Academy",
      date: "January 24, 2026",
      verifyLink:
        "https://drive.google.com/file/d/1WLVErK5iqvQvxX93PKu8TDiS1kJ69-XY/view?usp=sharing",
      image: "",
    },
  ],
  skills: {
    programming: ["C", "C++", "Python"],
    webDevelopment: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    database: ["PostgreSQL", "SQL", "MySql"],
    tools: ["Git", "GitHub", "Arduino"],
  },
  experience: [
    {
      role: "Student Developer",
      organization: "Academic & Personal Projects",
      duration: "2025 – Present",
      description:
        "Developing practical software and web-based projects as part of my Computer Science and Engineering learning journey, with a focus on programming, web development, and data structures.",
      responsibilities:
        "Designed and developed web applications using HTML and CSS, implemented student record management using linked lists, and worked on an Arduino-based LiFi highway navigation system.",
      skillsGained:
        "C/C++, HTML, CSS, JavaScript, Data Structures & Algorithms, Linked Lists, Arduino, LiFi, Git, GitHub, and problem-solving",
    },
  ],
  achievements: [
    {
      type: "Project",
      title: "Developed a LiFi-Based Highway Navigation System",
      organization: "Academic Project",
      year: "2025",
      description:
        "Developed an embedded-system prototype using Arduino Uno and LiFi technology to demonstrate light-based communication for highway navigation.",
    },
    {
      type: "Project",
      title: "Built a Student Record Management System",
      organization: "Academic Project",
      year: "2025",
      description:
        "Implemented a student record management application using linked lists to apply data structures concepts to a practical problem.",
    },
    {
      type: "Project",
      title: "Developed a Web-Based Registration Form",
      organization: "Personal Project",
      year: "2025",
      description:
        "Created a structured and user-friendly registration form using HTML and CSS for collecting basic candidate information.",
    },
  ],
  blog: [
    {
      title: "[ADD BLOG TITLE]",
      date: "[DATE]",
      description: "[SHORT DESCRIPTION]",
      link: "#",
      thumbnail: "",
    },
  ],
  youtube: [
    {
      title: "[ADD VIDEO TITLE]",
      date: "[DATE]",
      description: "[SHORT DESCRIPTION]",
      link: "#",
      thumbnail: "",
    },
  ],
};
