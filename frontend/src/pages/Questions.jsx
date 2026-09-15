
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import QuestionCard from "../components/QuestionCard";

function Questions() {
  // URL Search
  const [searchParams, setSearchParams] = useSearchParams();

  // Search & Filters
  const [search, setSearch] = useState(
    searchParams.get("search") || ""
  );

  const [subjectFilter, setSubjectFilter] =
    useState("All Subjects");

  const [yearFilter, setYearFilter] =
    useState("All Years");

  const [marksFilter, setMarksFilter] =
    useState("All Marks");

  // URL se search value read karna
  useEffect(() => {
    const urlSearch = searchParams.get("search") || "";
    setSearch(urlSearch);
  }, [searchParams]);

  const questions = [
    {
      id: 1,
      question:
        "Explain Database Normalization. Discuss 1NF, 2NF and 3NF with suitable examples.",
      subject: "DBMS",
      topic: "Normalization",
      year: "2025",
      marks: "10 Marks",
      frequency: "8 Times",
      priority: "High Priority",
    },

    {
      id: 2,
      question:
        "Explain different types of SQL commands with suitable examples.",
      subject: "DBMS",
      topic: "SQL",
      year: "2024",
      marks: "8 Marks",
      frequency: "7 Times",
      priority: "High Priority",
    },

    {
      id: 3,
      question:
        "Explain CPU Scheduling algorithms and compare FCFS, SJF and Round Robin.",
      subject: "Operating System",
      topic: "CPU Scheduling",
      year: "2025",
      marks: "10 Marks",
      frequency: "6 Times",
      priority: "High Priority",
    },

    {
      id: 4,
      question:
        "Explain the OSI reference model and describe all seven layers.",
      subject: "Computer Networks",
      topic: "OSI Model",
      year: "2024",
      marks: "10 Marks",
      frequency: "6 Times",
      priority: "High Priority",
    },

    {
      id: 5,
      question:
        "Explain different sorting algorithms and compare their time complexities.",
      subject: "DAA",
      topic: "Sorting Algorithms",
      year: "2023",
      marks: "8 Marks",
      frequency: "5 Times",
      priority: "Medium Priority",
    },

    {
      id: 6,
      question:
        "Explain transaction states and ACID properties in DBMS.",
      subject: "DBMS",
      topic: "Transactions",
      year: "2023",
      marks: "8 Marks",
      frequency: "5 Times",
      priority: "Medium Priority",
    },
  ];

  // Filter Questions
  const filteredQuestions = questions.filter((item) => {
    const matchesSearch =
      item.question
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      item.subject
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      item.topic
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesSubject =
      subjectFilter === "All Subjects" ||
      item.subject === subjectFilter;

    const matchesYear =
      yearFilter === "All Years" ||
      item.year === yearFilter;

    const matchesMarks =
      marksFilter === "All Marks" ||
      item.marks === marksFilter;

    return (
      matchesSearch &&
      matchesSubject &&
      matchesYear &&
      matchesMarks
    );
  });

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
            Previous Year Questions
          </span>

          <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            Practice PYQs
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Practice important previous year questions and focus
            on frequently repeated exam topics.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="grid gap-4 md:grid-cols-4">

            {/* Search */}
            <input
              type="text"
              placeholder="Search questions..."
              value={search}
              onChange={(e) => {
                const value = e.target.value;

                setSearch(value);

                if (value.trim()) {
                  setSearchParams({
                    search: value.trim(),
                  });
                } else {
                  setSearchParams({});
                }
              }}
              className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />

            {/* Subject */}
            <select
              value={subjectFilter}
              onChange={(e) =>
                setSubjectFilter(e.target.value)
              }
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-indigo-500"
            >
              <option>All Subjects</option>
              <option>DBMS</option>
              <option>Operating System</option>
              <option>Computer Networks</option>
              <option>DAA</option>
            </select>

            {/* Year */}
            <select
              value={yearFilter}
              onChange={(e) =>
                setYearFilter(e.target.value)
              }
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-indigo-500"
            >
              <option>All Years</option>
              <option>2025</option>
              <option>2024</option>
              <option>2023</option>
            </select>

            {/* Marks */}
            <select
              value={marksFilter}
              onChange={(e) =>
                setMarksFilter(e.target.value)
              }
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-indigo-500"
            >
              <option>All Marks</option>
              <option>10 Marks</option>
              <option>8 Marks</option>
              <option>5 Marks</option>
            </select>

          </div>
        </div>

        {/* Result Count */}
        <div className="mt-8 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Important Questions
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Practice frequently asked and important PYQs.
            </p>
          </div>

          <span className="text-sm text-slate-500">
            {filteredQuestions.length} Questions
          </span>
        </div>

        {/* Questions */}
        {filteredQuestions.length > 0 && (
          <div className="mt-5 space-y-5">
            {filteredQuestions.map((item) => (
              <QuestionCard
                key={item.id}
                id={item.id}
                question={item.question}
                subject={item.subject}
                topic={item.topic}
                year={item.year}
                marks={item.marks}
                frequency={item.frequency}
                priority={item.priority}
              />
            ))}
          </div>
        )}

        {/* No Results */}
        {filteredQuestions.length === 0 && (
          <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-10 text-center">
            <div className="text-4xl">
              🔍
            </div>

            <h3 className="mt-4 text-lg font-bold text-slate-900">
              No Questions Found
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Try changing your search or filters.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}

export default Questions;

