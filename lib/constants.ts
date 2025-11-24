import {
  Globe,
  Server,
  Database,
  Cloud,
  Palette,
  Headphones,
} from "lucide-react";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiReact,
  SiGreensock,
  SiFramer,
  SiPusher,
  SiNodedotjs,
  SiExpress,
  SiClerk,
} from "react-icons/si";
import { TbBrandThreejs, TbBrandSocketIo } from "react-icons/tb";
import { imgIcon } from "@/helpers/icon";

export const techStacksMap: any = {
  NextJS: { icon: SiNextdotjs, color: "#000000" },
  TailwindCSS: { icon: SiTailwindcss, color: "#06B6D4" },
  Typescript: { icon: SiTypescript, color: "#3178C6" },
  NodeJS: { icon: SiNodedotjs, color: "#68A063" },
  ExpressJS: { icon: SiExpress, color: "#000120" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  ReactJS: { icon: SiReact, color: "#61DAFB" },
  ThreeJS: { icon: TbBrandThreejs, color: "#101010" },
  FramerMotion: { icon: SiFramer, color: "#9147c9" },
  SocketIO: { icon: TbBrandSocketIo, color: "#9147c9" },
  Pusher: { icon: SiPusher, color: "#5B00BA" },
  Stream: {
    icon: imgIcon("/assets/icons/stream.png"),
    color: "#0000FF",
  },
  Liveblocks: {
    icon: imgIcon("/assets/icons/liveblocks.png"),
    color: "#101010",
  },
  GSAP: {
    icon: imgIcon("/assets/icons/gsap.png"),
    color: "#88CE02",
  },
  Clerk: {
    icon: imgIcon("/assets/icons/clerk.png"),
    color: "#4B32B3",
  },
};

export const projects = [
  {
    id: "1",
    title: "CodeConnect",
    slug: "codeconnect",
    link: "https://code-connect-v1.vercel.app/",
    images: [
      "/assets/projects/code-connect/images/1.png",
      "/assets/projects/code-connect/images/2.png",
      "/assets/projects/code-connect/images/6.png",
      "/assets/projects/code-connect/images/3.png",
      "/assets/projects/code-connect/images/4.png",
      "/assets/projects/code-connect/images/5.png",
    ],
    shortVideo: "/assets/projects/code-connect/video.mp4",
    description:
      "A full-stack Collaborative Interview Platform for virtual technical interviews, integrating live video conferencing, collaborative coding, and instant code evaluations.",
    shortDescription:
      "Real-time technical interview platform with video and collaborative coding.",
    detailedDescription:
      "CodeConnect is a comprehensive platform designed to revolutionize remote technical interviews. Built with Next.js 15 and TypeScript, it creates a seamless environment where audio, video, and code coexist. The platform integrates the Stream Video SDK for low-latency video conferencing and uses Liveblocks with the Monaco Editor to enable real-time, multi-user collaborative coding. \n\nIt features secure role-based access control via Clerk, distinguishing between Interviewers and Candidates to manage permissions effectively. Interviewers have access to a dedicated dashboard for structured feedback, live code execution capabilities, and automatic meeting recordings for post-interview review. The UI is crafted with Tailwind CSS and animated with Framer Motion and GSAP for a polished, professional experience.",
    githubRepositoryUrl: "https://github.com/mohnishgorana1/code-connect",
    techStacks: [
      "NextJS",
      "Typescript",
      "TailwindCSS",
      "MongoDB",
      "Clerk",
      "Stream",
      "Liveblocks",
      "FramerMotion",
    ],
  },
  {
    id: "2",
    title: "Examify",
    slug: "examify",
    link: "https://examify-three.vercel.app/",
    // thumbnail: "/assets/projects/examify.png",
    images: [
      "/assets/projects/examify/images/1.png",
      "/assets/projects/examify/images/2.png",
      "/assets/projects/examify/images/3.png",
      "/assets/projects/examify/images/4.png",
      "/assets/projects/examify/images/6.png",
      "/assets/projects/examify/images/7.png",
      "/assets/projects/examify/images/8.png",
      "/assets/projects/examify/images/9.png",
      "/assets/projects/examify/images/10.png",
      "/assets/projects/examify/images/11.png",
      "/assets/projects/examify/images/12.png",
    ],
    shortVideo: "/assets/projects/examify/gif.mp4",
    description:
      "A full-stack online examination platform with role-based features, enabling seamless exam creation, participation, and evaluation.",
    shortDescription: "Online exam platform for students and instructors.",
    detailedDescription:
      "Examify is a full-stack online examination platform built with Next.js (App Router) and powered by a MongoDB database. It features secure, role-based access control integrated through Clerk authentication, ensuring seamless management for students, instructors, and admins. \n\n The platform combines a robust backend (implemented using Next.js API routes) with an elegant, responsive UI for a smooth and interactive exam experience. Instructors can create, publish, and manage exams, design questions, and analyze results, while students can enroll in exams, take timed assessments with real-time tracking, and view instant results and performance analytics.\n\n With features like auto-save during exams, live timers, real-time dashboards, and instant scoring, Examify delivers reliability and engagement for both learners and educators.\n\nBuilt using modern technologies like Next.js 15, TypeScript, Tailwind CSS, Framer Motion, and Mongoose, the platform ensures exceptional performance, scalability, and developer experience.",
    githubRepositoryUrl: "https://github.com/mohnishgorana1/Examify",
    techStacks: [
      "NextJS",
      "TailwindCSS",
      "Typescript",
      "MongoDB",
      "FramerMotion",
    ],
  },
  {
    id: "3",
    title: "DocStream",
    slug: "docstream",
    link: "https://docstream.vercel.app/",
    // thumbnail: "/assets/projects/doc-stream.png",
    images: ["/assets/projects/doc-stream.png"],
    shortVideo: "",

    description:
      "Doc Stream enables users to upload, store, and organize their files effortlessly while providing real-time collaboration tools for team projects. With features like file sharing, version history, and secure cloud storage, users can access their documents from any device, anytime.",
    shortDescription:
      "A cloud-based document management solution with real-time collaboration.",
    detailedDescription:
      "DocStream is a comprehensive file management platform inspired by Google Drive. It allows users to upload, organize, and store documents in the cloud, while offering powerful real-time collaboration features. Team members can collaborate on documents simultaneously, track changes through version control, and share files securely with external users. The platform ensures that all files are stored safely in the cloud, making them accessible from any device. DocStream's intuitive interface and rich collaboration features make it ideal for businesses, teams, and individuals looking for a streamlined solution to manage and share files efficiently.",
    githubRepositoryUrl:
      "https://github.com/mohnishgorana1/DocStream--realtime-docs",
    techStacks: ["NextJS", "Typescript", "TailwindCSS", "Liveblocks"],
  },
  {
    id: "4",
    title: "Career Hub",
    slug: "careerhub",
    link: "https://career-hub-sooty.vercel.app/",
    // thumbnail: "/assets/projects/career-hub.png",
    images: ["/assets/projects/career-hub.png"],
    shortVideo: "",

    description:
      "Career Hub is optimized for fast, intuitive user experiences, helping individuals find their next career opportunity and companies their ideal candidates.",
    shortDescription:
      "A job portal optimized for seamless user experience and recruitment.",
    detailedDescription:
      "Career Hub is a job portal designed to bridge the gap between job seekers and recruiters. The platform features advanced filtering options, enabling users to quickly find job opportunities based on parameters like location, company, industry, and job type. For recruiters, Career Hub provides tools to manage job postings, track applicants, and streamline the recruitment process. The platform is optimized for speed and efficiency, making it easy for individuals to find their ideal job and companies to connect with top talent. Its user-friendly interface ensures a smooth experience for both job seekers and employers.",
    githubRepositoryUrl: "https://github.com/mohnishgorana1/career-hub",
    techStacks: [
      "NextJS",
      "Typescript",
      "MongoDB",
      "TailwindCSS",
      "ExpressJS",
      "NodeJS",
    ],
  },
  {
    id: "5",
    title: "Carewell",
    slug: "carewell",
    link: "https://carewell-eight.vercel.app/",
    // thumbnail: "/assets/projects/care-well.png",
    images: ["/assets/projects/care-well.png"],
    shortVideo: "",

    description:
      "An appointment booking platform designed specifically for patients. While an admin manages and oversees all appointment details to ensure smooth and efficient operations.",
    shortDescription:
      "A healthcare appointment booking platform with admin oversight.",
    detailedDescription:
      "Carewell is an intuitive platform designed to make healthcare appointment booking easier for patients and healthcare providers. It allows patients to schedule appointments seamlessly, with features like appointment reminders and status updates. On the administrative side, Carewell gives administrators full control over managing patient bookings, tracking appointment statuses, and ensuring that healthcare professionals are efficiently scheduled. With its focus on reducing administrative tasks, Carewell enhances patient care by freeing up time for healthcare providers to focus on treatment. Its clean, easy-to-navigate interface ensures that both patients and admins have a smooth experience.",
    githubRepositoryUrl: "https://github.com/mohnishgorana1/carewell",
    techStacks: ["NextJS", "Typescript", "TailwindCSS"],
  },
  {
    id: "6",
    title: "Chat App",
    slug: "chatapp",
    link: "https://chat-app-two-flame.vercel.app/",
    // thumbnail: "/assets/projects/chat-app.png",
    images: ["/assets/projects/chat-app.png"],
    shortVideo: "",
    description:
      "This Chat App enables seamless communication between users. With features like instant messaging.",
    shortDescription:
      "A real-time messaging app supporting instant communication.",
    detailedDescription:
      "Chat App is a fast, real-time messaging platform that facilitates seamless communication between users. It supports a wide range of features such as instant messaging. The app is optimized for speed and reliability, ensuring that messages are delivered instantly, even in low-bandwidth conditions. Its user-friendly interface makes it easy to stay connected across multiple devices, and its secure messaging system ensures privacy and data protection. Whether for personal communication or business collaboration, Chat App offers a smooth and efficient user experience.",
    githubRepositoryUrl: "https://github.com/mohnishgorana1/chat-app",
    techStacks: [
      "NextJS",
      "Typescript",
      "MongoDB",
      "ExpressJS",
      "NodeJS",
      "TailwindCSS",
      "Pusher",
    ],
  },
  {
    id: "7",
    title: "Ignite LMS",
    slug: "ignite-lms",
    link: "https://ignite-lms.vercel.app/",
    // thumbnail: "/assets/projects/ignite-lms.png",
    images: ["/assets/projects/ignite-lms.png"],
    shortVideo: "",

    description:
      "It empowers educators to create, manage, and deliver courses effortlessly, while providing students with a seamless learning experience.",
    shortDescription:
      "A comprehensive platform for educators to manage courses and students.",
    detailedDescription:
      "Ignite LMS is a robust learning management system designed for both educators and students. It streamlines the entire course creation process with tools that make managing educational content easy and efficient. Educators can create interactive learning modules, track student performance through quizzes and assignments, and maintain real-time communication with students. The system also supports role-based access, enabling tailored user experiences for instructors, students, and administrators. With its user-friendly design, Ignite LMS enhances the online learning experience, allowing educators to focus on teaching and students to focus on learning.",
    githubRepositoryUrl: "https://github.com/mohnishgorana1/ignite-lms",
    techStacks: [
      "NextJS",
      "Typescript",
      "MongoDB",
      "ExpressJS",
      "NodeJS",
      "TailwindCSS",
    ],
  },
  {
    id: "8",

    title: "Mega Drive",
    slug: "megadrive",
    link: "https://mega-drive-nine.vercel.app/",
    // thumbnail: "/assets/projects/mega-drive.png",
    images: ["/assets/projects/mega-drive.png"],
    shortVideo: "",

    description:
      "A secure and scalable cloud-based file storage platform that allows users to upload, organize, and access their files from anywhere.",
    shortDescription: "A cloud-based file storage and management platform.",
    detailedDescription:
      "Mega Drive is a secure and scalable cloud-based file storage platform designed to help users manage their files efficiently. It supports multi-format file uploads, advanced folder organization, and tagging systems, allowing users to keep their files neatly organized and easily accessible from any device. With remote access capabilities, users can collaborate on files, share folders with other users, and manage permissions for enhanced security. Mega Drive is built with scalability in mind, ensuring it can accommodate both individual users and large teams. Its intuitive design simplifies file management, while offering robust data protection and security.",
    githubRepositoryUrl: "https://github.com/mohnishgorana1/mega-drive",
    techStacks: [
      "NextJS",
      "Typescript",
      "MongoDB",
      "ExpressJS",
      "NodeJS",
      "TailwindCSS",
    ],
  },

  {
    id: "9",

    title: "Phantom Feedback",
    slug: "phantom-feedback",
    link: "https://phantom-feedback.vercel.app/",
    // thumbnail: "/assets/projects/phantom-message.png",
    images: ["/assets/projects/phantom-message.png"],
    shortVideo: "",

    description:
      "Phantom Feedback allows users to receive honest, anonymous feedback from others, whether for personal insights, team improvements, or open communication.",
    shortDescription: "An anonymous feedback platform for open communication.",
    detailedDescription:
      "Phantom Feedback is a platform designed to foster open and honest communication by allowing users to provide anonymous feedback. It is particularly useful in professional environments, where team members may hesitate to offer constructive criticism or praise due to fear of judgment. Phantom Feedback ensures complete anonymity, enabling users to freely share insights that can help individuals or teams improve. The platform is ideal for both personal and team-based feedback, making it a valuable tool for organizations looking to promote transparency and continuous improvement.",
    githubRepositoryUrl: "https://github.com/mohnishgorana1/phantom-feedback",
    techStacks: ["NextJS", "Typescript", "TailwindCSS"],
  },
  {
    id: "10",

    title: "Gymate UI",
    slug: "gymate",
    link: "https://gym-website-ui-clone.vercel.app/",
    // thumbnail: "/assets/projects/gymate.png",
    images: ["/assets/projects/gymate.png"],
    shortVideo: "",

    description:
      "Gymate features an elegant layout, providing users with essential information about each gym, including location, amenities, membership options, and available classes. Designed for easy navigation.",
    shortDescription:
      "A sleek user interface showcasing gym services and details.",
    detailedDescription:
      "Gymate UI is a clean and intuitive user interface designed to present gym-related information. Users can browse different gyms, check out available membership plans, view class schedules, and access detailed information about amenities and facilities. The UI is designed to be easy to navigate, ensuring users can quickly find the information they need. Gymate UI is perfect for gyms looking to provide their customers with a seamless online experience that reflects the quality of their physical facilities.",
    githubRepositoryUrl: "",
    techStacks: ["ReactJS", "TailwindCSS"],
  },
  {
    id: "11",

    title: "Iphone15 UI Clone",
    slug: "iphone15-clone",
    link: "https://dev-mohnishgorana-iphone15-ui-clone.netlify.app/",
    // thumbnail: "/assets/projects/iphone-website-ui-clone.png",
    images: ["/assets/projects/iphone-website-ui-clone.png"],
    shortVideo: "",

    description:
      "An immersive UI clone of the iPhone 15 website, featuring a stunning 3D model and innovative animations that bring the product to life.",
    shortDescription:
      "A dynamic clone of the iPhone 15 website with 3D animations.",
    detailedDescription:
      "This project is a pixel-perfect clone of the official iPhone 15 product website, featuring cutting-edge 3D animations and transitions. The website showcases the iPhone 15 with an immersive 3D model that users can interact with, simulating the experience of exploring the product in real life. With smooth animations and detailed visuals, this UI clone brings the premium look and feel of Apple's design to the web. The project highlights the power of creative front-end development, pushing the boundaries of user interaction on the web.",
    githubRepositoryUrl: "",
    techStacks: ["ReactJS", "ThreeJS", "GSAP", "TailwindCSS"],
  },
];

export const services = [
  {
    title: "Web Development",
    description:
      "I create responsive, user-friendly websites using technologies like HTML, CSS, JavaScript, React and Next.js.",
    icon: Globe,
    bgImageSrc: "/assets/images/service-frontend.svg",
  },
  {
    title: "Backend Development",
    description:
      "I build efficient backend systems using Node.js, Express, and MongoDB for API and server-side logic.",
    icon: Server,
    bgImageSrc: "/assets/images/service-backend.jpeg",
  },
  {
    title: "Database Designing",
    description:
      "Design scalable and normalized database schemas ensuring long-term performance and security.",
    icon: Database,
    bgImageSrc: "/assets/images/service-database.jpg",
  },
  {
    title: "Cloud Integration",
    description:
      "Integrate cloud services like AWS and Firebase for secure, scalable applications.",
    icon: Cloud,
    bgImageSrc: "/assets/images/service-cloud.jpg",
  },
  {
    title: "Website Designing",
    description:
      "Design modern, clean, and intuitive UI/UX ensuring the best user experience.",
    icon: Palette,
    bgImageSrc: "/assets/images/service-design.jpeg",
  },
  {
    title: "IT-enabled Services",
    description:
      "Provide various IT-enabled services including business support, data handling, and technical operations.",
    icon: Headphones,
    bgImageSrc: "/assets/images/service-it-enabled.jpg",
  },
];
export const academics = [
  {
    title: "Master of Computer Application (MCA)",
    board: "RGPV, Bhopal",
    institutions: "Gyanodaya Institute of Professional Studies",
    institutionLocation: "Neemuch, MP",
    year: "2022-2024",
    result: "8.07 CGPA",
  },
  {
    title: "Bachelor's of  Science (B.sc CS)",
    board: "Vikram University, Ujjain",
    institutions: "Balkavi Bairagee Mahavidhyalaya",
    institutionLocation: "Neemuch, MP",
    year: "2018-2021",
    result: "79.8%",
  },
  {
    title: "12th Grade",
    board: "CBSE",
    institutions: "SpringWood Sr. Sec. School",
    institutionLocation: "Neemuch, MP",
    year: "2017-2018",
    result: "73.4%",
  },
  {
    title: "10th Grade",
    board: "CBSE",
    institutions: "SpringWood Sr. Sec. School",
    institutionLocation: "Neemuch, MP",
    year: "2015-2016",
    result: "74.1%",
  },
];

export const contactBgImages = [
  "/assets/contact/bg1.jpg",
  "/assets/contact/bg2.jpg",
  "/assets/contact/bg3.jpg",
];

export const machineCodingTaskConfigs = [
  { name: "CINEMA TICKET BOOKING", path: "cinema-ticket-booking" },
  { name: "PAGINATION", path: "pagination" },
  { name: "INFINITE SCROLL", path: "infinite-scroll" },
  { name: "OTP INPUT", path: "otp-input" },
  { name: "PROGRESS BAR", path: "progress-bar" },
  { name: "NESTED CHECKBOX", path: "nested-checkbox" },
  { name: "CHIPS INPUT", path: "chips-input" },
  { name: "TAB FORM", path: "tab-form" },
  { name: "ACCORDION", path: "accordion" },
];
