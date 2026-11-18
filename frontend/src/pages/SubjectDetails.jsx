import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../services/api";

function SubjectDetails() {
  const { subjectId } = useParams();

  const [subject, setSubject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSubject = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await api.get(`/subjects/${subjectId}`);

        if (response.data.success) {
          setSubject(response.data.subject);
        } else {
          setError("Subject nahi mila.");
        }
      } catch (err) {
        console.error("Subject Details Error:", err);

        setError(
          err.response?.data?.message ||
            "Subject details load nahi ho paayi."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchSubject();
  }, [subjectId]);

  // Loading
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600"></div>

          <p className="text-gray-600">
            Subject details load ho rahi hain...
          </p>
        </div>
      </div>
    );
  }

  // Error
  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
        <div className="rounded-2xl border border-red-200 bg-red-50 p-8 text-center">
          <div className="text-4xl">⚠️</div>

          <h2 className="mt-4 text-xl font-bold text-red-700">
            Subject Not Found
          </h2>

          <p className="mt-2 text-red-600">
            {error}
          </p>

          <Link
            to="/subjects"
            className="mt-5 inline-block rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white hover:bg-blue-700"
          >
            ← Back to Subjects
          </Link>
        </div>
      </div>
    );
  }

  if (!subject) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-6xl">

        {/* Back Button */}
        <Link
          to="/subjects"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800"
        >
          ← Back to Subjects
        </Link>

        {/* Subject Header */}
        <div className="rounded-2xl bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-6 md:flex-row md:items-center">

            {/* Icon */}
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-4xl">
              {subject.icon || "📚"}
            </div>

            {/* Information */}
            <div className="flex-1">
              <div className="mb-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                  Semester {subject.semester}
                </span>

                <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-700">
                  {subject.code || "No Code"}
                </span>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
                {subject.name}
              </h1>

              <p className="mt-3 text-gray-600">
                {subject.description ||
                  "Subject details coming soon."}
              </p>
            </div>
          </div>
        </div>

        {/* Subject Information */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">
              University
            </p>

            <p className="mt-2 text-lg font-bold text-gray-900">
              {subject.university}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">
              Branch
            </p>

            <p className="mt-2 text-lg font-bold text-gray-900">
              {subject.branch}
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">
              Subject Code
            </p>

            <p className="mt-2 text-lg font-bold text-gray-900">
              {subject.code}
            </p>
          </div>

        </div>

        {/* Study Options */}
        <div className="mt-8">
          <h2 className="mb-5 text-2xl font-bold text-gray-900">
            Study Material
          </h2>

          <div className="grid gap-6 md:grid-cols-3">

            <Link
              to={`/questions?subject=${subject._id}`}
              className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-3xl">📝</div>

              <h3 className="mt-4 text-xl font-bold text-gray-900">
                Previous Year Questions
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                Is subject ke PYQs dekho.
              </p>

              <span className="mt-4 inline-block font-semibold text-blue-600">
                View PYQs →
              </span>
            </Link>

            <Link
              to={`/topics?subject=${subject._id}`}
              className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-3xl">📚</div>

              <h3 className="mt-4 text-xl font-bold text-gray-900">
                Topics
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                Is subject ke important topics dekho.
              </p>

              <span className="mt-4 inline-block font-semibold text-blue-600">
                View Topics →
              </span>
            </Link>

            <Link
              to={`/notes?subject=${subject._id}`}
              className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-3xl">📖</div>

              <h3 className="mt-4 text-xl font-bold text-gray-900">
                Notes
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                Is subject ke study notes dekho.
              </p>

              <span className="mt-4 inline-block font-semibold text-blue-600">
                View Notes →
              </span>
            </Link>

          </div>
        </div>

      </div>
    </div>
  );
}

export default SubjectDetails;