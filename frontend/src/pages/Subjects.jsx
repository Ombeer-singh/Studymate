import { useState } from "react";
import SubjectCard from "../components/SubjectCard";

function Subjects() {
  const [universityFilter, setUniversityFilter] = useState("AKTU");
  const [branchFilter, setBranchFilter] = useState("CSE");
  const [semesterFilter, setSemesterFilter] = useState("All Semesters");

  const subjects = [
    {
      id: 1,
      name: "DBMS",
      fullName: "Database Management System",
      description:
        "Learn databases, SQL, normalization and transactions.",
      questions: "120+ Questions",
      icon: "🗄️",
      university: "AKTU",
      branch: "CSE",
      semester: "3rd Semester",
    },

    {
      id: 2,
      name: "Operating System",
      fullName: "Operating System",
      description:
        "Processes, scheduling, memory management and file systems.",
      questions: "100+ Questions",
      icon: "💻",
      university: "AKTU",
      branch: "CSE",
      semester: "3rd Semester",
    },

    {
      id: 3,
      name: "Computer Networks",
      fullName: "Computer Networks",
      description:
        "Networking models, protocols, routing and communication.",
      questions: "90+ Questions",
      icon: "🌐",
      university: "AKTU",
      branch: "CSE",
      semester: "4th Semester",
    },

    {
      id: 4,
      name: "DAA",
      fullName: "Design and Analysis of Algorithms",
      description:
        "Algorithms, sorting, searching and complexity analysis.",
      questions: "80+ Questions",
      icon: "🧠",
      university: "AKTU",
      branch: "CSE",
      semester: "4th Semester",
    },
  ];

  // Filter Subjects
  const filteredSubjects = subjects.filter((subject) => {
    const matchesUniversity =
      subject.university === universityFilter;

    const matchesBranch =
      subject.branch === branchFilter;

    const matchesSemester =
      semesterFilter === "All Semesters" ||
      subject.semester === semesterFilter;

    return (
      matchesUniversity &&
      matchesBranch &&
      matchesSemester
    );
  });

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
            StudyMate Library
          </span>

          <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            Explore Subjects
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Choose a subject to explore important topics, PYQs and
            exam-focused notes.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="grid gap-4 md:grid-cols-3">

            {/* University */}
            <select
              value={universityFilter}
              onChange={(e) =>
                setUniversityFilter(e.target.value)
              }
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-indigo-500"
            >
              <option value="AKTU">AKTU</option>
              <option value="Other">Other University</option>
            </select>

            {/* Branch */}
            <select
              value={branchFilter}
              onChange={(e) =>
                setBranchFilter(e.target.value)
              }
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-indigo-500"
            >
              <option value="CSE">CSE</option>
              <option value="IT">IT</option>
              <option value="ECE">ECE</option>
              <option value="ME">ME</option>
            </select>

            {/* Semester */}
            <select
              value={semesterFilter}
              onChange={(e) =>
                setSemesterFilter(e.target.value)
              }
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-indigo-500"
            >
              <option value="All Semesters">
                All Semesters
              </option>

              <option value="1st Semester">
                1st Semester
              </option>

              <option value="2nd Semester">
                2nd Semester
              </option>

              <option value="3rd Semester">
                3rd Semester
              </option>

              <option value="4th Semester">
                4th Semester
              </option>

              <option value="5th Semester">
                5th Semester
              </option>

              <option value="6th Semester">
                6th Semester
              </option>

              <option value="7th Semester">
                7th Semester
              </option>

              <option value="8th Semester">
                8th Semester
              </option>
            </select>
          </div>
        </div>

        {/* Subject Heading */}
        <div className="mt-10 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              All Subjects
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Select a subject to continue your preparation.
            </p>
          </div>

          <span className="text-sm text-slate-500">
            {filteredSubjects.length} Subjects
          </span>
        </div>

        {/* Subject Cards */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredSubjects.map((subject) => (
            <SubjectCard
              key={subject.id}
              id={subject.id}
              name={subject.name}
              fullName={subject.fullName}
              description={subject.description}
              questions={subject.questions}
              icon={subject.icon}
            />
          ))}
        </div>

        {/* No Results */}
        {filteredSubjects.length === 0 && (
          <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center sm:col-span-2 lg:col-span-3">
            <div className="text-4xl">
              🔍
            </div>

            <h3 className="mt-4 text-lg font-bold text-slate-900">
              No Subjects Found
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Try changing your university, branch or semester.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}

export default Subjects;