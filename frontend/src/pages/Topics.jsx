import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import api from "../services/api";
import TopicCard from "../components/TopicCard";

function Topics() {
  const [searchParams] = useSearchParams();

  // URL se subject ID
  const subjectId = searchParams.get("subject");

  const [search, setSearch] = useState("");
  const [subjectFilter, setSubjectFilter] =
    useState("All Subjects");
  const [priorityFilter, setPriorityFilter] =
    useState("All Priorities");

  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ==================== FETCH TOPICS ====================

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        setLoading(true);
        setError("");

        const url = subjectId
          ? `/topics?subject=${subjectId}`
          : "/topics";

        const response = await api.get(url);

        if (response.data.success) {
          setTopics(response.data.topics || []);
        } else {
          setError("Topics load nahi ho paaye.");
        }
      } catch (err) {
        console.error("Topics Error:", err);

        setError(
          err.response?.data?.message ||
            "Topics load nahi ho paaye."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchTopics();
  }, [subjectId]);

  // ==================== SUBJECT LIST ====================

  const subjectNames = [
    ...new Set(
      topics
        .map((topic) => topic.subject?.name)
        .filter(Boolean)
    ),
  ];

  // ==================== FILTER TOPICS ====================

  const filteredTopics = topics.filter((topic) => {
    const topicName = topic.name || "";

    const topicSubject =
      topic.subject?.name || "";

    const topicDescription =
      topic.description || "";

    const topicPriority =
      topic.priority || "Medium";

    const searchText = search.toLowerCase();

    const matchesSearch =
      topicName.toLowerCase().includes(searchText) ||
      topicSubject.toLowerCase().includes(searchText) ||
      topicDescription.toLowerCase().includes(searchText);

    const matchesSubject =
      subjectFilter === "All Subjects" ||
      topicSubject === subjectFilter;

    const matchesPriority =
      priorityFilter === "All Priorities" ||
      topicPriority ===
        priorityFilter.replace(" Priority", "");

    return (
      matchesSearch &&
      matchesSubject &&
      matchesPriority
    );
  });

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-7xl">

        {/* ==================== HEADER ==================== */}

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

        {/* ==================== SEARCH & FILTERS ==================== */}

        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

          <div className="grid gap-4 md:grid-cols-3">

            {/* Search */}

            <input
              type="text"
              placeholder="Search topics..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
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

              {subjectNames.map((subjectName) => (
                <option
                  key={subjectName}
                  value={subjectName}
                >
                  {subjectName}
                </option>
              ))}
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

              <option value="Low Priority">
                Low Priority
              </option>
            </select>

          </div>
        </div>

        {/* ==================== LOADING ==================== */}

        {loading && (
          <div className="mt-16 text-center">
            <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-indigo-600"></div>

            <p className="text-slate-600">
              Topics load ho rahe hain...
            </p>
          </div>
        )}

        {/* ==================== ERROR ==================== */}

        {!loading && error && (
          <div className="mt-10 rounded-2xl border border-red-200 bg-red-50 p-10 text-center">

            <div className="text-4xl">
              ⚠️
            </div>

            <h3 className="mt-4 text-lg font-bold text-red-700">
              Something went wrong
            </h3>

            <p className="mt-2 text-sm text-red-600">
              {error}
            </p>

            <button
              onClick={() =>
                window.location.reload()
              }
              className="mt-5 rounded-lg bg-red-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-700"
            >
              Try Again
            </button>

          </div>
        )}

        {/* ==================== CONTENT ==================== */}

        {!loading && !error && (
          <>
            {/* Result Heading */}

            <div className="mt-10 flex items-center justify-between">

              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Important Topics
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Study the topics that appear frequently
                  in exams.
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
                    key={topic._id}
                    id={topic._id}
                    name={topic.name}
                    subject={
                      topic.subject?.name ||
                      "Unknown Subject"
                    }
                    description={
                      topic.description ||
                      "Topic details coming soon."
                    }
                    frequency={`${topic.frequency || 0} Times`}
                    priority={`${topic.priority || "Medium"} Priority`}
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
                  Try changing your search, subject or
                  priority filter.
                </p>

              </div>
            )}

          </>
        )}

      </div>
    </div>
  );
}

export default Topics;