require("dotenv").config();

const connectDB = require("../config/db");
const Subject = require("../models/subject.model");

const subjects = [
  // =========================
  // SEMESTER 1
  // =========================
  {
    university: "AKTU",
    branch: "CSE",
    semester: 1,
    name: "Engineering Mathematics-I",
    code: "KAS101T",
    description: "Fundamentals of engineering mathematics.",
    icon: "📐",
  },
  {
    university: "AKTU",
    branch: "CSE",
    semester: 1,
    name: "Engineering Physics",
    code: "KAS102T",
    description: "Basic concepts of engineering physics.",
    icon: "⚛️",
  },
  {
    university: "AKTU",
    branch: "CSE",
    semester: 1,
    name: "Engineering Chemistry",
    code: "KAS103T",
    description: "Basic concepts of engineering chemistry.",
    icon: "🧪",
  },
  {
    university: "AKTU",
    branch: "CSE",
    semester: 1,
    name: "Fundamentals of Electrical Engineering",
    code: "KAS104T",
    description: "Basic electrical engineering concepts.",
    icon: "⚡",
  },
  {
    university: "AKTU",
    branch: "CSE",
    semester: 1,
    name: "Fundamentals of Electronics Engineering",
    code: "KAS105T",
    description: "Basic electronics and electronic devices.",
    icon: "🔌",
  },
  {
    university: "AKTU",
    branch: "CSE",
    semester: 1,
    name: "Programming for Problem Solving",
    code: "KCS101T",
    description: "Programming fundamentals and problem solving using C.",
    icon: "💻",
  },

  // =========================
  // SEMESTER 2
  // =========================
  {
    university: "AKTU",
    branch: "CSE",
    semester: 2,
    name: "Engineering Mathematics-II",
    code: "KAS201T",
    description: "Advanced engineering mathematics.",
    icon: "📐",
  },
  {
    university: "AKTU",
    branch: "CSE",
    semester: 2,
    name: "Engineering Mechanics",
    code: "KME201T",
    description: "Fundamentals of engineering mechanics.",
    icon: "⚙️",
  },
  {
    university: "AKTU",
    branch: "CSE",
    semester: 2,
    name: "Fundamentals of Mechanical Engineering",
    code: "KME202T",
    description: "Basic concepts of mechanical engineering.",
    icon: "🔧",
  },
  {
    university: "AKTU",
    branch: "CSE",
    semester: 2,
    name: "Fundamentals of Computer Engineering",
    code: "KCS201T",
    description: "Fundamentals of computer systems and programming.",
    icon: "🖥️",
  },
  {
    university: "AKTU",
    branch: "CSE",
    semester: 2,
    name: "Data Structures",
    code: "KCS202T",
    description: "Arrays, linked lists, stacks, queues, trees and graphs.",
    icon: "🌳",
  },
  {
    university: "AKTU",
    branch: "CSE",
    semester: 2,
    name: "Universal Human Values-II",
    code: "KNC201",
    description: "Human values and professional ethics.",
    icon: "🤝",
  },

  // =========================
  // SEMESTER 3
  // =========================
  {
    university: "AKTU",
    branch: "CSE",
    semester: 3,
    name: "Data Structures",
    code: "KCS301T",
    description: "Advanced data structures and algorithms.",
    icon: "🌳",
  },
  {
    university: "AKTU",
    branch: "CSE",
    semester: 3,
    name: "Discrete Mathematics",
    code: "KCS302T",
    description: "Logic, sets, relations, functions and graph theory.",
    icon: "🔢",
  },
  {
    university: "AKTU",
    branch: "CSE",
    semester: 3,
    name: "Computer Organization and Architecture",
    code: "KCS303T",
    description: "Computer architecture and organization.",
    icon: "🖥️",
  },
  {
    university: "AKTU",
    branch: "CSE",
    semester: 3,
    name: "Object Oriented Programming",
    code: "KCS304T",
    description: "Object-oriented programming concepts.",
    icon: "☕",
  },
  {
    university: "AKTU",
    branch: "CSE",
    semester: 3,
    name: "Digital Logic Design",
    code: "KCS305T",
    description: "Digital circuits, logic gates and Boolean algebra.",
    icon: "🔲",
  },

  // =========================
  // SEMESTER 4
  // =========================
  {
    university: "AKTU",
    branch: "CSE",
    semester: 4,
    name: "Operating System",
    code: "KCS401T",
    description: "Processes, memory management, scheduling and file systems.",
    icon: "⚙️",
  },
  {
    university: "AKTU",
    branch: "CSE",
    semester: 4,
    name: "Database Management System",
    code: "KCS402T",
    description: "Database concepts, SQL, normalization and transactions.",
    icon: "🗄️",
  },
  {
    university: "AKTU",
    branch: "CSE",
    semester: 4,
    name: "Computer Networks",
    code: "KCS403T",
    description: "Networking concepts, protocols and communication.",
    icon: "🌐",
  },
  {
    university: "AKTU",
    branch: "CSE",
    semester: 4,
    name: "Theory of Computation",
    code: "KCS404T",
    description: "Automata, formal languages and computability.",
    icon: "🧠",
  },
  {
    university: "AKTU",
    branch: "CSE",
    semester: 4,
    name: "Web Technology",
    code: "KCS405T",
    description: "HTML, CSS, JavaScript and web development concepts.",
    icon: "🌍",
  },

  // =========================
  // SEMESTER 5
  // =========================
  {
    university: "AKTU",
    branch: "CSE",
    semester: 5,
    name: "Analysis and Design of Algorithms",
    code: "KCS501T",
    description: "Algorithm design, complexity and optimization.",
    icon: "🧩",
  },
  {
    university: "AKTU",
    branch: "CSE",
    semester: 5,
    name: "Database Management System",
    code: "KCS502T",
    description: "Advanced database concepts and SQL.",
    icon: "🗄️",
  },
  {
    university: "AKTU",
    branch: "CSE",
    semester: 5,
    name: "Computer Networks",
    code: "KCS503T",
    description: "Network architecture and communication protocols.",
    icon: "🌐",
  },
  {
    university: "AKTU",
    branch: "CSE",
    semester: 5,
    name: "Web Technology",
    code: "KCS504T",
    description: "Modern web development technologies.",
    icon: "🌍",
  },
  {
    university: "AKTU",
    branch: "CSE",
    semester: 5,
    name: "Compiler Design",
    code: "KCS505T",
    description: "Lexical analysis, parsing and compiler construction.",
    icon: "🔤",
  },

  // =========================
  // SEMESTER 6
  // =========================
  {
    university: "AKTU",
    branch: "CSE",
    semester: 6,
    name: "Software Engineering",
    code: "KCS601T",
    description: "Software development lifecycle and methodologies.",
    icon: "🛠️",
  },
  {
    university: "AKTU",
    branch: "CSE",
    semester: 6,
    name: "Machine Learning",
    code: "KCS602T",
    description: "Machine learning fundamentals and algorithms.",
    icon: "🤖",
  },
  {
    university: "AKTU",
    branch: "CSE",
    semester: 6,
    name: "Artificial Intelligence",
    code: "KCS603T",
    description: "AI concepts, search techniques and intelligent systems.",
    icon: "🧠",
  },
  {
    university: "AKTU",
    branch: "CSE",
    semester: 6,
    name: "Cloud Computing",
    code: "KCS604T",
    description: "Cloud architecture, services and deployment.",
    icon: "☁️",
  },
  {
    university: "AKTU",
    branch: "CSE",
    semester: 6,
    name: "Information Security",
    code: "KCS605T",
    description: "Security fundamentals, threats and protection mechanisms.",
    icon: "🔐",
  },

  // =========================
  // SEMESTER 7
  // =========================
  {
    university: "AKTU",
    branch: "CSE",
    semester: 7,
    name: "Big Data Analytics",
    code: "KCS701T",
    description: "Big data processing and analytics.",
    icon: "📊",
  },
  {
    university: "AKTU",
    branch: "CSE",
    semester: 7,
    name: "Distributed Systems",
    code: "KCS702T",
    description: "Distributed computing and system architecture.",
    icon: "🌐",
  },
  {
    university: "AKTU",
    branch: "CSE",
    semester: 7,
    name: "Internet of Things",
    code: "KCS703T",
    description: "IoT architecture, sensors and communication.",
    icon: "📡",
  },
  {
    university: "AKTU",
    branch: "CSE",
    semester: 7,
    name: "Cyber Security",
    code: "KCS704T",
    description: "Cyber threats, security controls and protection.",
    icon: "🛡️",
  },

  // =========================
  // SEMESTER 8
  // =========================
  {
    university: "AKTU",
    branch: "CSE",
    semester: 8,
    name: "Project",
    code: "KCS801",
    description: "Final year major project.",
    icon: "🚀",
  },
  {
    university: "AKTU",
    branch: "CSE",
    semester: 8,
    name: "Technical Seminar",
    code: "KCS802",
    description: "Technical presentation and research seminar.",
    icon: "🎤",
  },
  {
    university: "AKTU",
    branch: "CSE",
    semester: 8,
    name: "Industrial Training",
    code: "KCS803",
    description: "Industry-oriented practical training.",
    icon: "🏢",
  },
];

const seedSubjects = async () => {
  try {
    await connectDB();

    for (const subject of subjects) {
      await Subject.updateOne(
        {
          university: subject.university,
          branch: subject.branch,
          semester: subject.semester,
          code: subject.code,
        },
        {
          $set: subject,
        },
        {
          upsert: true,
        }
      );
    }

    console.log(
      `✅ ${subjects.length} subjects inserted/updated successfully.`
    );

    process.exit(0);
  } catch (error) {
    console.error("❌ Subject Seed Error:", error.message);
    process.exit(1);
  }
};

seedSubjects();