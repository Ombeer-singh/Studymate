
import { Link, useParams } from "react-router-dom";

function TopicDetails() {
  const { topicId } = useParams();

  const topics = [
    {
      id: 1,
      name: "Normalization",
      subject: "DBMS",
      description:
        "Database normalization is a process of organizing data to reduce redundancy and improve data integrity.",
      frequency: "8 Times",
      priority: "High Priority",
      difficulty: "Medium",
      questions: [
        {
          id: 1,
          question:
            "Explain Database Normalization. Discuss 1NF, 2NF and 3NF with suitable examples.",
          year: "2025",
          marks: "10 Marks",
        },
        {
          id: 6,
          question:
            "Explain transaction states and ACID properties in DBMS.",
          year: "2023",
          marks: "8 Marks",
        },
      ],
      notes: [
        "Introduction to Normalization",
        "First Normal Form (1NF)",
        "Second Normal Form (2NF)",
        "Third Normal Form (3NF)",
      ],
      strategy:
        "Focus on 1NF, 2NF and 3NF definitions with examples. Practice normalization problems because this topic is frequently asked in exams.",
    },

    {
      id: 2,
      name: "SQL",
      subject: "DBMS",
      description:
        "SQL is used to create, manage and retrieve data from relational databases.",
      frequency: "7 Times",
      priority: "High Priority",
      difficulty: "Easy",
      questions: [
        {
          id: 2,
          question:
            "Explain different types of SQL commands with suitable examples.",
          year: "2024",
          marks: "8 Marks",
        },
      ],
      notes: [
        "DDL Commands",
        "DML Commands",
        "DCL Commands",
        "TCL Commands",
        "SQL Queries",
      ],
      strategy:
        "Learn all major SQL command categories and practice common queries such as SELECT, INSERT, UPDATE and DELETE.",
    },

    {
      id: 3,
      name: "CPU Scheduling",
      subject: "Operating System",
      description:
        "CPU scheduling determines which process gets CPU time and in what order.",
      frequency: "6 Times",
      priority: "High Priority",
      difficulty: "Medium",
      questions: [
        {
          id: 3,
          question:
            "Explain CPU Scheduling algorithms and compare FCFS, SJF and Round Robin.",
          year: "2025",
          marks: "10 Marks",
        },
      ],
      notes: [
        "FCFS Scheduling",
        "SJF Scheduling",
        "Round Robin",
        "Priority Scheduling",
        "Scheduling Criteria",
      ],
      strategy:
        "Understand each scheduling algorithm with examples. Practice numerical problems involving waiting time, turnaround time and response time.",
    },

    {
      id: 4,
      name: "OSI Model",
      subject: "Computer Networks",
      description:
        "The OSI model divides network communication into seven different layers.",
      frequency: "6 Times",
      priority: "High Priority",
      difficulty: "Easy",
      questions: [
        {
          id: 4,
          question:
            "Explain the OSI reference model and describe all seven layers.",
          year: "2024",
          marks: "10 Marks",
        },
      ],
      notes: [
        "Physical Layer",
        "Data Link Layer",
        "Network Layer",
        "Transport Layer",
        "Session Layer",
        "Presentation Layer",
        "Application Layer",
      ],
      strategy:
        "Remember all seven OSI layers in order and learn the main function of each layer along with important protocols and devices.",
    },

    {
      id: 5,
      name: "Sorting Algorithms",
      subject: "DAA",
      description:
        "Sorting algorithms arrange data in a particular order and are important for efficient data processing.",
      frequency: "5 Times",
      priority: "Medium Priority",
      difficulty: "Medium",
      questions: [
        {
          id: 5,
          question:
            "Explain different sorting algorithms and compare their time complexities.",
          year: "2023",
          marks: "8 Marks",
        },
      ],
      notes: [
        "Bubble Sort",
        "Selection Sort",
        "Insertion Sort",
        "Merge Sort",
        "Quick Sort",
      ],
      strategy:
        "Learn the working and time complexity of common sorting algorithms. Compare best, average and worst-case complexities.",
    },

    {
      id: 6,
      name: "Transactions",
      subject: "DBMS",
      description:
        "A database transaction is a logical unit of work that follows properties such as Atomicity, Consistency, Isolation and Durability.",
      frequency: "5 Times",
      priority: "Medium Priority",
      difficulty: "Medium",
      questions: [
        {
          id: 6,
          question:
            "Explain transaction states and ACID properties in DBMS.",
          year: "2023",
          marks: "8 Marks",
        },
      ],
      notes: [
        "Transaction States",
        "Atomicity",
        "Consistency",
        "Isolation",
        "Durability",
      ],
      strategy:
        "Learn the ACID properties with simple real-world examples and understand different transaction states.",
    },
  ];

  const topic = topics.find(
    (item) => item.id === Number(topicId)
  );

  // Topic not found
  if (!topic) {
    return (
      <div className="min-h-screen bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">
          <div className="text-5xl">🔍</div>

          <h1 className="mt-5 text-2xl font-bold text-slate-900">
            Topic Not Found
          </h1>

          <p className="mt-2 text-slate-500">
            The topic you are looking for does not exist.
          </p>

          <Link
            to="/topics"
            className="mt-6 inline-block rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-700"
          >
            ← Back to Topics
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-7xl">

        {/* Back Button */}
        <Link
          to="/topics"
          className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-700"
        >
          ← Back to Topics
        </Link>

        {/* Topic Header */}
        <div className="mt-6 rounded-3xl bg-white p-6 shadow-sm md:p-10">

          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">
              {topic.subject}
            </span>

            <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600">
              {topic.priority}
            </span>

            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
              {topic.difficulty}
            </span>
          </div>

          <h1 className="mt-5 text-3xl font-bold text-slate-900 md:text-4xl">
            {topic.name}
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
            {topic.description}
          </p>

          {/* Stats */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">

            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm text-slate-500">
                Exam Frequency
              </p>

              <p className="mt-2 text-xl font-bold text-indigo-600">
                🔥 {topic.frequency}
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm text-slate-500">
                Priority
              </p>

              <p className="mt-2 text-xl font-bold text-slate-900">
                {topic.priority}
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm text-slate-500">
                Difficulty
              </p>

              <p className="mt-2 text-xl font-bold text-slate-900">
                {topic.difficulty}
              </p>
            </div>

          </div>
        </div>

        {/* Important PYQs */}
        <section className="mt-10">

          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
              Previous Year Questions
            </span>

            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              Important PYQs
            </h2>

            <p className="mt-2 text-slate-500">
              Questions related to this topic that are useful for exam preparation.
            </p>
          </div>

          <div className="mt-6 space-y-5">

            {topic.questions.map((question) => (
              <div
                key={question.id}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >

                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">
                    {topic.subject}
                  </span>

                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                    {question.year}
                  </span>

                  <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600">
                    {question.marks}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-bold leading-7 text-slate-900">
                  {question.question}
                </h3>

                <Link
                  to={`/questions/${question.id}`}
                  className="mt-5 inline-block rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
                >
                  View Question →
                </Link>

              </div>
            ))}

          </div>
        </section>

        {/* Related Notes */}
        <section className="mt-12">

          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
              Study Material
            </span>

            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              Related Notes
            </h2>

            <p className="mt-2 text-slate-500">
              Important concepts you should study for this topic.
            </p>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {topic.notes.map((note, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-xl">
                  📝
                </div>

                <h3 className="mt-5 font-bold text-slate-900">
                  {note}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Important concept for {topic.name}.
                </p>

                <Link
                  to="/notes"
                  className="mt-4 inline-block text-sm font-semibold text-indigo-600 hover:text-indigo-700"
                >
                  Read Notes →
                </Link>

              </div>
            ))}

          </div>
        </section>

        {/* Exam Strategy */}
        <section className="mt-12">

          <div className="rounded-3xl border border-indigo-100 bg-indigo-50 p-6 md:p-8">

            <div className="flex items-start gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-2xl">
                🎯
              </div>

              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Exam Strategy
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  {topic.strategy}
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* Bottom CTA */}
        <section className="mt-12 rounded-3xl bg-slate-900 p-8 text-center md:p-10">

          <h2 className="text-2xl font-bold text-white">
            Ready to practice?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-slate-300">
            Practice more previous year questions and improve your exam preparation.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">

            <Link
              to="/questions"
              className="rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-700"
            >
              Practice PYQs
            </Link>

            <Link
              to="/topics"
              className="rounded-xl border border-slate-700 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Explore More Topics
            </Link>

          </div>

        </section>

      </div>
    </div>
  );
}

export default TopicDetails;

