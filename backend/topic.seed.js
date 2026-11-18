require("dotenv").config();

const mongoose = require("mongoose");

const connectDB = require("../config/db");
const Subject = require("../models/subject.model");
const Topic = require("../models/topic.model");

const topicData = {
  "Engineering Mathematics-I": [
    {
      name: "Matrices",
      description: "Matrix operations, rank, eigenvalues and eigenvectors.",
      frequency: 8,
      priority: "High",
    },
    {
      name: "Differential Calculus",
      description: "Limits, continuity, differentiation and applications.",
      frequency: 7,
      priority: "High",
    },
    {
      name: "Integral Calculus",
      description: "Integration techniques and applications of integration.",
      frequency: 6,
      priority: "High",
    },
    {
      name: "Differential Equations",
      description: "First and higher order differential equations.",
      frequency: 6,
      priority: "High",
    },
  ],

  "Engineering Physics": [
    {
      name: "Quantum Mechanics",
      description: "Basic concepts of quantum mechanics and wave functions.",
      frequency: 7,
      priority: "High",
    },
    {
      name: "Wave Optics",
      description: "Interference, diffraction and polarization.",
      frequency: 6,
      priority: "High",
    },
    {
      name: "Electromagnetic Theory",
      description: "Electric and magnetic fields and electromagnetic waves.",
      frequency: 5,
      priority: "Medium",
    },
    {
      name: "Lasers and Fiber Optics",
      description: "Laser principles and optical fiber communication.",
      frequency: 6,
      priority: "High",
    },
  ],

  "Engineering Chemistry": [
    {
      name: "Water Treatment",
      description: "Hardness of water, purification and water treatment methods.",
      frequency: 7,
      priority: "High",
    },
    {
      name: "Electrochemistry",
      description: "Electrochemical cells, electrodes and applications.",
      frequency: 6,
      priority: "High",
    },
    {
      name: "Polymers",
      description: "Types, properties and applications of polymers.",
      frequency: 5,
      priority: "Medium",
    },
    {
      name: "Fuels",
      description: "Types of fuels, calorific value and fuel analysis.",
      frequency: 5,
      priority: "Medium",
    },
  ],

  "Fundamentals of Electrical Engineering": [
    {
      name: "DC Circuits",
      description: "Basic DC circuits, laws and circuit analysis.",
      frequency: 7,
      priority: "High",
    },
    {
      name: "AC Circuits",
      description: "AC quantities, impedance, power and resonance.",
      frequency: 7,
      priority: "High",
    },
    {
      name: "Transformers",
      description: "Construction, working and applications of transformers.",
      frequency: 6,
      priority: "High",
    },
    {
      name: "Electrical Machines",
      description: "Basic concepts of electrical machines.",
      frequency: 5,
      priority: "Medium",
    },
  ],

  "Fundamentals of Electronics Engineering": [
    {
      name: "Semiconductor Devices",
      description: "Diodes, transistors and semiconductor fundamentals.",
      frequency: 7,
      priority: "High",
    },
    {
      name: "Digital Electronics",
      description: "Digital circuits and basic digital concepts.",
      frequency: 6,
      priority: "High",
    },
    {
      name: "Amplifiers",
      description: "Basic amplifier concepts and configurations.",
      frequency: 5,
      priority: "Medium",
    },
    {
      name: "Communication Systems",
      description: "Basic communication system concepts.",
      frequency: 4,
      priority: "Medium",
    },
  ],

  "Programming for Problem Solving": [
    {
      name: "C Programming Basics",
      description: "Variables, data types, operators and basic C programming.",
      frequency: 8,
      priority: "High",
    },
    {
      name: "Control Statements",
      description: "if, else, switch, loops and control flow.",
      frequency: 8,
      priority: "High",
    },
    {
      name: "Functions",
      description: "Function declaration, definition, parameters and recursion.",
      frequency: 7,
      priority: "High",
    },
    {
      name: "Arrays and Strings",
      description: "One-dimensional, multidimensional arrays and strings.",
      frequency: 8,
      priority: "High",
    },
  ],

  "Data Structures": [
    {
      name: "Arrays",
      description: "Array operations, searching and basic applications.",
      frequency: 7,
      priority: "High",
    },
    {
      name: "Linked Lists",
      description: "Singly, doubly and circular linked lists.",
      frequency: 8,
      priority: "High",
    },
    {
      name: "Stacks and Queues",
      description: "Stack and queue implementation and applications.",
      frequency: 8,
      priority: "High",
    },
    {
      name: "Trees",
      description: "Binary trees, BST and tree traversal techniques.",
      frequency: 8,
      priority: "High",
    },
  ],

  "Engineering Mathematics-II": [
    {
      name: "Laplace Transform",
      description: "Laplace transforms and their applications.",
      frequency: 8,
      priority: "High",
    },
    {
      name: "Fourier Series",
      description: "Fourier series and representation of periodic functions.",
      frequency: 6,
      priority: "High",
    },
    {
      name: "Partial Differential Equations",
      description: "Basic PDE concepts and solution methods.",
      frequency: 7,
      priority: "High",
    },
    {
      name: "Multiple Integrals",
      description: "Double and triple integration with applications.",
      frequency: 5,
      priority: "Medium",
    },
  ],

  "Engineering Mechanics": [
    {
      name: "Force System",
      description: "Types of forces and force system analysis.",
      frequency: 6,
      priority: "High",
    },
    {
      name: "Friction",
      description: "Laws of friction and applications.",
      frequency: 6,
      priority: "High",
    },
    {
      name: "Centroid and Centre of Gravity",
      description: "Calculation of centroid and centre of gravity.",
      frequency: 5,
      priority: "Medium",
    },
    {
      name: "Moment of Inertia",
      description: "Area moment of inertia and related concepts.",
      frequency: 6,
      priority: "High",
    },
  ],

  "Fundamentals of Computer Engineering": [
    {
      name: "Computer Basics",
      description: "Basic components and working of computers.",
      frequency: 5,
      priority: "Medium",
    },
    {
      name: "Number Systems",
      description: "Binary, decimal, octal and hexadecimal number systems.",
      frequency: 7,
      priority: "High",
    },
    {
      name: "Logic Gates",
      description: "Basic logic gates and truth tables.",
      frequency: 7,
      priority: "High",
    },
    {
      name: "Computer Organization Basics",
      description: "Basic organization and functioning of computers.",
      frequency: 5,
      priority: "Medium",
    },
  ],

  "Universal Human Values-II": [
    {
      name: "Harmony in Human Being",
      description: "Understanding harmony within the individual.",
      frequency: 5,
      priority: "Medium",
    },
    {
      name: "Harmony in Family",
      description: "Values and harmony in family relationships.",
      frequency: 5,
      priority: "Medium",
    },
    {
      name: "Harmony in Society",
      description: "Understanding harmony and values in society.",
      frequency: 5,
      priority: "Medium",
    },
    {
      name: "Harmony with Nature",
      description: "Human relationship with nature and existence.",
      frequency: 5,
      priority: "Medium",
    },
  ],

  "Computer Organization and Architecture": [
    {
      name: "Computer Organization",
      description: "Basic organization and functional units of computers.",
      frequency: 7,
      priority: "High",
    },
    {
      name: "CPU Organization",
      description: "CPU structure, registers and instruction execution.",
      frequency: 8,
      priority: "High",
    },
    {
      name: "Memory Organization",
      description: "Memory hierarchy, cache and memory organization.",
      frequency: 8,
      priority: "High",
    },
    {
      name: "Input Output Organization",
      description: "I/O systems and data transfer techniques.",
      frequency: 6,
      priority: "High",
    },
  ],

  "Data Structures and Algorithms": [
    {
      name: "Complexity Analysis",
      description: "Time complexity, space complexity and Big O notation.",
      frequency: 8,
      priority: "High",
    },
    {
      name: "Searching",
      description: "Linear search, binary search and related techniques.",
      frequency: 7,
      priority: "High",
    },
    {
      name: "Sorting",
      description: "Bubble, selection, insertion, merge and quick sort.",
      frequency: 9,
      priority: "High",
    },
    {
      name: "Graph Algorithms",
      description: "Graph traversal and common graph algorithms.",
      frequency: 7,
      priority: "High",
    },
  ],

  "Digital Logic Design": [
    {
      name: "Boolean Algebra",
      description: "Boolean laws, expressions and simplification.",
      frequency: 8,
      priority: "High",
    },
    {
      name: "Logic Gates",
      description: "Basic and universal logic gates.",
      frequency: 7,
      priority: "High",
    },
    {
      name: "Combinational Circuits",
      description: "Adders, subtractors, multiplexers and decoders.",
      frequency: 8,
      priority: "High",
    },
    {
      name: "Sequential Circuits",
      description: "Flip-flops, counters and registers.",
      frequency: 8,
      priority: "High",
    },
  ],

  "Discrete Mathematics": [
    {
      name: "Set Theory",
      description: "Sets, operations and basic set concepts.",
      frequency: 7,
      priority: "High",
    },
    {
      name: "Logic",
      description: "Propositional logic, predicates and logical reasoning.",
      frequency: 8,
      priority: "High",
    },
    {
      name: "Relations and Functions",
      description: "Relations, functions and their properties.",
      frequency: 7,
      priority: "High",
    },
    {
      name: "Graph Theory",
      description: "Graphs, trees and graph-related concepts.",
      frequency: 8,
      priority: "High",
    },
  ],

  "Object Oriented Programming": [
    {
      name: "Classes and Objects",
      description: "Classes, objects, constructors and basic OOP concepts.",
      frequency: 8,
      priority: "High",
    },
    {
      name: "Inheritance",
      description: "Types of inheritance and code reuse.",
      frequency: 8,
      priority: "High",
    },
    {
      name: "Polymorphism",
      description: "Compile-time and runtime polymorphism.",
      frequency: 8,
      priority: "High",
    },
    {
      name: "Exception Handling",
      description: "Handling runtime errors and exceptions.",
      frequency: 6,
      priority: "Medium",
    },
  ],

  "Database Management System": [
    {
      name: "ER Model",
      description: "Entities, attributes, relationships and ER diagrams.",
      frequency: 8,
      priority: "High",
    },
    {
      name: "Relational Model",
      description: "Relations, keys, tuples and relational concepts.",
      frequency: 8,
      priority: "High",
    },
    {
      name: "Normalization",
      description: "1NF, 2NF, 3NF, BCNF and dependency concepts.",
      frequency: 9,
      priority: "High",
    },
    {
      name: "SQL",
      description: "SQL queries, joins, functions and database operations.",
      frequency: 10,
      priority: "High",
    },
    {
      name: "Transactions",
      description: "Transactions, ACID properties and concurrency.",
      frequency: 7,
      priority: "High",
    },
  ],

  "Computer Networks": [
    {
      name: "OSI Model",
      description: "Seven layers of the OSI reference model.",
      frequency: 9,
      priority: "High",
    },
    {
      name: "TCP/IP Model",
      description: "TCP/IP architecture and protocol layers.",
      frequency: 8,
      priority: "High",
    },
    {
      name: "Data Link Layer",
      description: "Framing, error detection and data link protocols.",
      frequency: 7,
      priority: "High",
    },
    {
      name: "Routing Algorithms",
      description: "Routing concepts and common routing algorithms.",
      frequency: 8,
      priority: "High",
    },
  ],

  "Operating Systems": [
    {
      name: "Process Management",
      description: "Processes, threads and process states.",
      frequency: 9,
      priority: "High",
    },
    {
      name: "CPU Scheduling",
      description: "FCFS, SJF, Priority and Round Robin scheduling.",
      frequency: 9,
      priority: "High",
    },
    {
      name: "Deadlocks",
      description: "Deadlock conditions, prevention and avoidance.",
      frequency: 9,
      priority: "High",
    },
    {
      name: "Memory Management",
      description: "Paging, segmentation and virtual memory.",
      frequency: 9,
      priority: "High",
    },
  ],

  "Software Engineering": [
    {
      name: "SDLC",
      description: "Software development life cycle models and phases.",
      frequency: 8,
      priority: "High",
    },
    {
      name: "Requirement Engineering",
      description: "Requirement gathering, analysis and specification.",
      frequency: 7,
      priority: "High",
    },
    {
      name: "Software Design",
      description: "Software architecture and design principles.",
      frequency: 6,
      priority: "Medium",
    },
    {
      name: "Software Testing",
      description: "Testing techniques, levels and test cases.",
      frequency: 8,
      priority: "High",
    },
  ],

  "Compiler Design": [
    {
      name: "Lexical Analysis",
      description: "Tokens, lexical analyzer and regular expressions.",
      frequency: 8,
      priority: "High",
    },
    {
      name: "Syntax Analysis",
      description: "Parsing, grammars and syntax analysis.",
      frequency: 9,
      priority: "High",
    },
    {
      name: "Semantic Analysis",
      description: "Semantic checking and syntax-directed concepts.",
      frequency: 6,
      priority: "Medium",
    },
    {
      name: "Code Generation",
      description: "Intermediate and target code generation.",
      frequency: 7,
      priority: "High",
    },
  ],

  "Web Technology": [
    {
      name: "HTML",
      description: "HTML structure, elements, forms and semantic HTML.",
      frequency: 7,
      priority: "High",
    },
    {
      name: "CSS",
      description: "CSS selectors, layouts, flexbox and responsive design.",
      frequency: 7,
      priority: "High",
    },
    {
      name: "JavaScript",
      description: "JavaScript fundamentals, DOM and events.",
      frequency: 8,
      priority: "High",
    },
    {
      name: "Web Architecture",
      description: "Client-server architecture and web application basics.",
      frequency: 6,
      priority: "Medium",
    },
  ],
};

// Generic topics for subjects that don't have
// a custom topic list above.
const genericTopics = [
  {
    name: "Introduction and Fundamentals",
    description: "Important introductory concepts and fundamentals.",
    frequency: 5,
    priority: "Medium",
  },
  {
    name: "Core Concepts",
    description: "Important core concepts of the subject.",
    frequency: 6,
    priority: "High",
  },
  {
    name: "Applications",
    description: "Important applications and practical concepts.",
    frequency: 4,
    priority: "Medium",
  },
  {
    name: "Important Problems",
    description: "Important problems and exam-oriented concepts.",
    frequency: 5,
    priority: "High",
  },
];

const seedTopics = async () => {
  try {
    await connectDB();

    const subjects = await Subject.find();

    if (subjects.length === 0) {
      console.log("❌ No subjects found in database.");
      process.exit(1);
    }

    let insertedCount = 0;

    for (const subject of subjects) {
      const topicsForSubject =
        topicData[subject.name] || genericTopics;

      for (const topic of topicsForSubject) {
        await Topic.updateOne(
          {
            subject: subject._id,
            name: topic.name,
          },
          {
            $set: {
              subject: subject._id,
              name: topic.name,
              description: topic.description,
              frequency: topic.frequency,
              priority: topic.priority,
            },
          },
          {
            upsert: true,
          }
        );

        insertedCount++;
      }

      console.log(
        `✅ ${subject.name} → ${topicsForSubject.length} topics`
      );
    }

    console.log(
      `\n🎉 ${insertedCount} topics inserted/updated successfully.`
    );

    await mongoose.connection.close();

    process.exit(0);
  } catch (error) {
    console.error(
      "❌ Topic Seed Error:",
      error.message
    );

    await mongoose.connection.close();

    process.exit(1);
  }
};

seedTopics();