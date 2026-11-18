require("dotenv").config();

const mongoose = require("mongoose");

const connectDB = require("../config/db");
const Subject = require("../models/subject.model");
const Topic = require("../models/topic.model");

const topicData = {
  "Engineering Mathematics-I": [
    ["Matrices", "Matrix operations, rank, eigenvalues and eigenvectors.", 8, "High"],
    ["Differential Calculus", "Limits, continuity, differentiation and applications.", 7, "High"],
    ["Integral Calculus", "Integration techniques and applications.", 6, "High"],
    ["Differential Equations", "First and higher order differential equations.", 6, "High"],
  ],

  "Engineering Physics": [
    ["Quantum Mechanics", "Basic concepts of quantum mechanics and wave functions.", 7, "High"],
    ["Wave Optics", "Interference, diffraction and polarization.", 6, "High"],
    ["Electromagnetic Theory", "Electric and magnetic fields and electromagnetic waves.", 5, "Medium"],
    ["Lasers and Fiber Optics", "Laser principles and optical fiber communication.", 6, "High"],
  ],

  "Engineering Chemistry": [
    ["Water Treatment", "Hardness, purification and water treatment methods.", 7, "High"],
    ["Electrochemistry", "Electrochemical cells, electrodes and applications.", 6, "High"],
    ["Polymers", "Types, properties and applications of polymers.", 5, "Medium"],
    ["Fuels", "Types of fuels, calorific value and fuel analysis.", 5, "Medium"],
  ],

  "Fundamentals of Electrical Engineering": [
    ["DC Circuits", "Basic DC circuits and circuit analysis.", 7, "High"],
    ["AC Circuits", "AC quantities, impedance, power and resonance.", 7, "High"],
    ["Transformers", "Construction, working and applications of transformers.", 6, "High"],
    ["Electrical Machines", "Basic concepts of electrical machines.", 5, "Medium"],
  ],

  "Fundamentals of Electronics Engineering": [
    ["Semiconductor Devices", "Diodes, transistors and semiconductor fundamentals.", 7, "High"],
    ["Digital Electronics", "Digital circuits and basic digital concepts.", 6, "High"],
    ["Amplifiers", "Basic amplifier concepts and configurations.", 5, "Medium"],
    ["Communication Systems", "Basic communication system concepts.", 4, "Medium"],
  ],

  "Programming for Problem Solving": [
    ["C Programming Basics", "Variables, data types, operators and basic C programming.", 8, "High"],
    ["Control Statements", "if, else, switch, loops and control flow.", 8, "High"],
    ["Functions", "Functions, parameters and recursion.", 7, "High"],
    ["Arrays and Strings", "Arrays and string operations in C.", 8, "High"],
  ],

  "Data Structures": [
    ["Arrays", "Array operations and applications.", 7, "High"],
    ["Linked Lists", "Singly, doubly and circular linked lists.", 8, "High"],
    ["Stacks and Queues", "Implementation and applications of stacks and queues.", 8, "High"],
    ["Trees", "Binary trees, BST and tree traversal.", 8, "High"],
  ],

  "Engineering Mathematics-II": [
    ["Laplace Transform", "Laplace transforms and applications.", 8, "High"],
    ["Fourier Series", "Fourier series and periodic functions.", 6, "High"],
    ["Partial Differential Equations", "Basic PDE concepts and solution methods.", 7, "High"],
    ["Multiple Integrals", "Double and triple integration.", 5, "Medium"],
  ],

  "Engineering Mechanics": [
    ["Force System", "Types of forces and force system analysis.", 6, "High"],
    ["Friction", "Laws of friction and applications.", 6, "High"],
    ["Centroid and Centre of Gravity", "Centroid and centre of gravity calculations.", 5, "Medium"],
    ["Moment of Inertia", "Area moment of inertia and related concepts.", 6, "High"],
  ],

  "Fundamentals of Computer Engineering": [
    ["Computer Basics", "Basic components and working of computers.", 5, "Medium"],
    ["Number Systems", "Binary, decimal, octal and hexadecimal systems.", 7, "High"],
    ["Logic Gates", "Basic logic gates and truth tables.", 7, "High"],
    ["Computer Organization Basics", "Basic organization and functioning of computers.", 5, "Medium"],
  ],

  "Universal Human Values-II": [
    ["Harmony in Human Being", "Understanding harmony within the individual.", 5, "Medium"],
    ["Harmony in Family", "Values and harmony in family relationships.", 5, "Medium"],
    ["Harmony in Society", "Understanding harmony in society.", 5, "Medium"],
    ["Harmony with Nature", "Human relationship with nature.", 5, "Medium"],
  ],

  "Computer Organization and Architecture": [
    ["Computer Organization", "Basic organization and functional units.", 7, "High"],
    ["CPU Organization", "CPU structure, registers and instruction execution.", 8, "High"],
    ["Memory Organization", "Memory hierarchy and cache.", 8, "High"],
    ["Input Output Organization", "I/O systems and data transfer techniques.", 6, "High"],
  ],

  "Data Structures and Algorithms": [
    ["Complexity Analysis", "Time complexity, space complexity and Big O.", 8, "High"],
    ["Searching", "Linear search and binary search.", 7, "High"],
    ["Sorting", "Bubble, selection, insertion, merge and quick sort.", 9, "High"],
    ["Graph Algorithms", "Graph traversal and graph algorithms.", 7, "High"],
  ],

  "Digital Logic Design": [
    ["Boolean Algebra", "Boolean laws and simplification.", 8, "High"],
    ["Logic Gates", "Basic and universal logic gates.", 7, "High"],
    ["Combinational Circuits", "Adders, subtractors, multiplexers and decoders.", 8, "High"],
    ["Sequential Circuits", "Flip-flops, counters and registers.", 8, "High"],
  ],

  "Discrete Mathematics": [
    ["Set Theory", "Sets, operations and basic set concepts.", 7, "High"],
    ["Logic", "Propositional logic and logical reasoning.", 8, "High"],
    ["Relations and Functions", "Relations, functions and their properties.", 7, "High"],
    ["Graph Theory", "Graphs, trees and graph concepts.", 8, "High"],
  ],

  "Object Oriented Programming": [
    ["Classes and Objects", "Classes, objects and constructors.", 8, "High"],
    ["Inheritance", "Types of inheritance and code reuse.", 8, "High"],
    ["Polymorphism", "Compile-time and runtime polymorphism.", 8, "High"],
    ["Exception Handling", "Handling runtime errors and exceptions.", 6, "Medium"],
  ],

  "Database Management System": [
    ["ER Model", "Entities, attributes, relationships and ER diagrams.", 8, "High"],
    ["Relational Model", "Relations, keys, tuples and relational concepts.", 8, "High"],
    ["Normalization", "1NF, 2NF, 3NF, BCNF and dependencies.", 9, "High"],
    ["SQL", "SQL queries, joins, functions and operations.", 10, "High"],
    ["Transactions", "Transactions, ACID properties and concurrency.", 7, "High"],
  ],

  "Computer Networks": [
    ["OSI Model", "Seven layers of the OSI model.", 9, "High"],
    ["TCP/IP Model", "TCP/IP architecture and protocol layers.", 8, "High"],
    ["Data Link Layer", "Framing and error detection.", 7, "High"],
    ["Routing Algorithms", "Routing concepts and algorithms.", 8, "High"],
  ],

  "Operating Systems": [
    ["Process Management", "Processes, threads and process states.", 9, "High"],
    ["CPU Scheduling", "FCFS, SJF, Priority and Round Robin.", 9, "High"],
    ["Deadlocks", "Deadlock conditions, prevention and avoidance.", 9, "High"],
    ["Memory Management", "Paging, segmentation and virtual memory.", 9, "High"],
  ],

  "Software Engineering": [
    ["SDLC", "Software development life cycle models.", 8, "High"],
    ["Requirement Engineering", "Requirement gathering and analysis.", 7, "High"],
    ["Software Design", "Software architecture and design principles.", 6, "Medium"],
    ["Software Testing", "Testing techniques and test cases.", 8, "High"],
  ],

  "Compiler Design": [
    ["Lexical Analysis", "Tokens and lexical analyzer.", 8, "High"],
    ["Syntax Analysis", "Parsing and grammars.", 9, "High"],
    ["Semantic Analysis", "Semantic checking.", 6, "Medium"],
    ["Code Generation", "Intermediate and target code generation.", 7, "High"],
  ],

  "Web Technology": [
    ["HTML", "HTML structure, elements and forms.", 7, "High"],
    ["CSS", "CSS selectors, layouts and responsive design.", 7, "High"],
    ["JavaScript", "JavaScript fundamentals, DOM and events.", 8, "High"],
    ["Web Architecture", "Client-server architecture and web basics.", 6, "Medium"],
  ],
};

const genericTopics = [
  ["Introduction and Fundamentals", "Important introductory concepts and fundamentals.", 5, "Medium"],
  ["Core Concepts", "Important core concepts of the subject.", 6, "High"],
  ["Applications", "Important applications and practical concepts.", 4, "Medium"],
  ["Important Problems", "Important exam-oriented problems.", 5, "High"],
];

const seedTopics = async () => {
  try {
    await connectDB();

    const subjects = await Subject.find();

    if (subjects.length === 0) {
      console.log("❌ No subjects found.");
      process.exit(1);
    }

    let total = 0;

    for (const subject of subjects) {
      const topics =
        topicData[subject.name] || genericTopics;

      for (const [name, description, frequency, priority] of topics) {
        await Topic.updateOne(
          {
            subject: subject._id,
            name: name,
          },
          {
            $set: {
              subject: subject._id,
              name: name,
              description: description,
              frequency: frequency,
              priority: priority,
            },
          },
          {
            upsert: true,
          }
        );

        total++;
      }

      console.log(
        `✅ ${subject.name} → ${topics.length} topics`
      );
    }

    console.log(
      `\n🎉 ${total} topics inserted/updated successfully.`
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