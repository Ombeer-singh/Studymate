
import { Link } from "react-router-dom";

function Topics() {
  const [search, setSearch] = useState("");
  const [subjectFilter, setSubjectFilter] =
    useState("All Subjects");
  const [priorityFilter, setPriorityFilter] =
    useState("All Priorities");

  const topics = [
    {
      id: 1,
      name: "Normalization",
      subject: "DBMS",
      description:
        "Learn 1NF, 2NF, 3NF and how normalization reduces data redundancy.",
      frequency: "8 Times",
      priority: "High Priority",
    },
    {
      id: 2,
      name: "SQL",
      subject: "DBMS",
      description:
        "Learn SQL commands, queries, joins, functions and database operations.",
      frequency: "7 Times",
      priority: "High Priority",
    },
    {
      id: 3,
      name: "CPU Scheduling",
      subject: "Operating System",
      description:
        "Understand FCFS, SJF, Priority Scheduling and Round Robin algorithms.",
      frequency: "6 Times",
      priority: "High Priority",
    },
    {
      id: 4,
      name: "OSI Model",
      subject: "Computer Networks",
      description:
        "Study all seven layers of the OSI reference model and their functions.",
      frequency: "6 Times",
      priority: "High Priority",
    },
    {
      id: 5,
      name: "Sorting Algorithms",
      subject: "DAA",
      description:
        "Learn Bubble Sort, Selection Sort, Insertion Sort, Merge Sort and Quick Sort.",
      frequency: "5 Times",
      priority: "Medium Priority",
    },
    {
      id: 6,
      name: "Transactions",
      subject: "DBMS",
      description:
        "Understand transactions, transaction states and ACID properties.",
      frequency: "5 Times",
      priority: "Medium Priority",
    },
  ];

  // Filter Topics
  const filteredTopics = topics.filter((topic) => {
    const matchesSearch =
      topic.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      topic.subject
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      topic.description
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesSubject =
      subjectFilter === "All Subjects" ||
      topic.subject === subjectFilter;

    const matchesPriority =
      priorityFilter === "All Priorities" ||
      topic.priority === priorityFilter;

    return (
      matchesSearch &&
      matchesSubject &&
      matchesPriority
    );
  });

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
            Important Topics
          </span>

          <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            Most Repeated Topics
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Focus on frequently asked topics and prepare the
            most important concepts for your B.Tech exams.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

          <div className="grid gap-4 md:grid-cols-3">

            {/* Search */}
            <input
              type="text"
              placeholder="Search topics..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
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

            {/* Priority Filter */}
            <select
              value={priorityFilter}
              onChange={(e) =>
                setPriorityFilter(e.target.value)
              }
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-indigo-500"
            >
              <option value="All Priorities">
                All Priorities
              </option>

              <option value="High Priority">
                High Priority
              </option>

              <option value="Medium Priority">
                Medium Priority
              </option>
            </select>

          </div>
        </div>

        {/* Result Heading */}
        <div className="mt-10 flex items-center justify-between">

          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Important Topics
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Study the topics that appear frequently in exams.
            </p>
          </div>

          <span className="text-sm text-slate-500">
            {filteredTopics.length} Topics
          </span>

        </div>

        {/* Topic Cards */}
        {filteredTopics.length > 0 && (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {filteredTopics.map((topic) => (
              <TopicCard
                key={topic.id}
                id={topic.id}
                name={topic.name}
                subject={topic.subject}
                description={topic.description}
                frequency={topic.frequency}
                priority={topic.priority}
              />
            ))}

          </div>
        )}

        {/* No Results */}
        {filteredTopics.length === 0 && (
          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-10 text-center">

            <div className="text-4xl">
              🔍
            </div>

            <h3 className="mt-4 text-lg font-bold text-slate-900">
              No Topics Found
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Try changing your search, subject or priority filter.
            </p>

          </div>
        )}

      </div>
    </div>
  );
}

export default Topics;
