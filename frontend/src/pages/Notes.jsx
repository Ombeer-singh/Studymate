import { useState } from "react";
import NotesCard from "../components/NotesCard";

function Notes() {
  const [search, setSearch] = useState("");
  const [subjectFilter, setSubjectFilter] =
    useState("All Subjects");

  const notes = [
    {
      id: 1,
      title: "DBMS Notes",
      description:
        "Important concepts of Database Management System.",
      subject: "DBMS",
      icon: "🗄️",
    },

    {
      id: 2,
      title: "Operating System Notes",
      description:
        "Processes, scheduling, memory and file management.",
      subject: "Operating System",
      icon: "💻",
    },

    {
      id: 3,
      title: "Computer Networks Notes",
      description:
        "Important networking concepts and protocols.",
      subject: "Computer Networks",
      icon: "🌐",
    },

    {
      id: 4,
      title: "DAA Notes",
      description:
        "Algorithms, sorting, searching and complexity concepts.",
      subject: "DAA",
      icon: "🧠",
    },
  ];

  // Filter Notes
  const filteredNotes = notes.filter((note) => {
    const matchesSearch =
      note.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      note.description
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      note.subject
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesSubject =
      subjectFilter === "All Subjects" ||
      note.subject === subjectFilter;

    return matchesSearch && matchesSubject;
  });

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
            Study Material
          </span>

          <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            Topic-wise Notes
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Learn important B.Tech concepts with concise and
            exam-focused notes.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="grid gap-4 md:grid-cols-2">

            {/* Search */}
            <input
              type="text"
              placeholder="Search notes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none focus:border-indigo-500"
            />

            {/* Subject Filter */}
            <select
              value={subjectFilter}
              onChange={(e) =>
                setSubjectFilter(e.target.value)
              }
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-indigo-500"
            >
              <option value="All Subjects">
                All Subjects
              </option>

              <option value="DBMS">
                DBMS
              </option>

              <option value="Operating System">
                Operating System
              </option>

              <option value="Computer Networks">
                Computer Networks
              </option>

              <option value="DAA">
                DAA
              </option>
            </select>

          </div>
        </div>

        {/* Notes Heading */}
        <div className="mt-10 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              All Notes
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Choose a subject and start learning.
            </p>
          </div>

          {/* Result Count */}
          <span className="text-sm text-slate-500">
            {filteredNotes.length} Notes
          </span>
        </div>

        {/* Notes Cards */}
        {filteredNotes.length > 0 && (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredNotes.map((note) => (
              <NotesCard
                key={note.id}
                id={note.id}
                title={note.title}
                subject={note.subject}
                description={note.description}
                icon={note.icon}
              />
            ))}
          </div>
        )}

        {/* No Results */}
        {filteredNotes.length === 0 && (
          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-10 text-center">
            <div className="text-4xl">
              🔍
            </div>

            <h3 className="mt-4 text-lg font-bold text-slate-900">
              No Notes Found
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Try changing your search or subject filter.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}

export default Notes;