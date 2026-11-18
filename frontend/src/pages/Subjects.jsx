import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

function Subjects() {
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await api.get("/subjects");

        if (response.data.success) {
          setSubjects(response.data.subjects);
        } else {
          setError("Subjects load nahi ho paaye.");
        }
      } catch (err) {
        console.error("Subjects Error:", err);

        setError(
          err.response?.data?.message ||
            "Subjects load nahi ho paaye."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchSubjects();
  }, []);

  // Group subjects by semester
  const semesterGroups = subjects.reduce((groups, subject) => {
    if (!groups[subject.semester]) {
      groups[subject.semester] = [];
    }

    groups[subject.semester].push(subject);

    return groups;
  }, {});

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            AKTU B.Tech CSE Subjects
          </h1>

          <p className="mt-3 text-gray-600">
            Semester-wise subjects, codes and study material
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="py-20 text-center">
            <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600"></div>

            <p className="text-gray-600">
              Subjects load ho rahe hain...
            </p>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-center">
            <p className="font-medium text-red-600">
              {error}
            </p>

            <button
              onClick={() => window.location.reload()}
              className="mt-4 rounded-lg bg-red-600 px-5 py-2 text-white hover:bg-red-700"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Subjects */}
        {!loading && !error && (
          <div className="space-y-12">
            {Object.keys(semesterGroups)
              .sort((a, b) => Number(a) - Number(b))
              .map((semester) => (
                <section key={semester}>

                  {/* Semester Heading */}
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        Semester {semester}
                      </h2>

                      <p className="mt-1 text-sm text-gray-500">
                        {semesterGroups[semester].length} Subjects
                      </p>
                    </div>
                  </div>

                  {/* Subject Cards */}
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {semesterGroups[semester].map((subject) => (
                      <Link
                        key={subject._id}
                        to={`/subjects/${subject._id}`}
                        className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                      >
                        <div className="mb-5 flex items-start justify-between">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                            {subject.icon || "📚"}
                          </div>

                          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                            {subject.code || "N/A"}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600">
                          {subject.name}
                        </h3>

                        <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-600">
                          {subject.description ||
                            "Subject details coming soon."}
                        </p>

                        <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
                          <span className="text-sm font-medium text-gray-500">
                            AKTU • CSE
                          </span>

                          <span className="text-sm font-semibold text-blue-600">
                            View Subject →
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && subjects.length === 0 && (
          <div className="py-20 text-center">
            <div className="text-5xl">📚</div>

            <h2 className="mt-4 text-xl font-bold text-gray-900">
              No subjects found
            </h2>

            <p className="mt-2 text-gray-500">
              Abhi subjects available nahi hain.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}

export default Subjects;