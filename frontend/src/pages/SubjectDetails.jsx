import { Link, useParams } from "react-router-dom";

function SubjectDetails() {
  const { subjectId } = useParams();

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-7xl">

        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-slate-500">
          <Link to="/" className="hover:text-indigo-600">
            Home
          </Link>

          <span className="mx-2">/</span>

          <Link to="/subjects" className="hover:text-indigo-600">
            Subjects
          </Link>

          <span className="mx-2">/</span>

          <span>Subject Details</span>
        </div>

        {/* Subject Header */}
        <div className="rounded-3xl bg-indigo-600 p-8 text-white shadow-lg md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            <div>
              <span className="text-sm font-medium text-indigo-200">
                B.Tech Subject
              </span>

              <h1 className="mt-2 text-3xl font-bold md:text-4xl">
                Database Management System
              </h1>

              <p className="mt-3 max-w-2xl leading-7 text-indigo-100">
                Explore important topics, previous year questions and
                exam-focused notes for DBMS.
              </p>
            </div>

            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white text-4xl">
              🗄️
            </div>

          </div>
        </div>

        {/* Stats */}
        <div className="mt-8 grid gap-5 sm:grid-cols-3">

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">
              Total Questions
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              50+
            </h2>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">
              Important Topics
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              15+
            </h2>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">
              Study Notes
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              20+
            </h2>
          </div>

        </div>

        {/* Topics */}
        <div className="mt-12">
          <div className="flex items-end justify-between">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                Syllabus
              </span>

              <h2 className="mt-2 text-2xl font-bold text-slate-900">
                Important Topics
              </h2>
            </div>

            <Link
              to="/topics"
              className="hidden font-semibold text-indigo-600 hover:text-indigo-700 sm:block"
            >
              View All →
            </Link>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {[
              "Database Fundamentals",
              "ER Model",
              "Relational Model",
              "Normalization",
              "SQL",
              "Transactions",
            ].map((topic, index) => (
              <Link
                key={topic}
                to={`/topics/${index + 1}`}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-xl">
                    📚
                  </div>

                  <span className="text-sm text-slate-400">
                    →
                  </span>
                </div>

                <h3 className="mt-5 font-bold text-slate-900">
                  {topic}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Important concepts and exam questions
                </p>
              </Link>
            ))}

          </div>
        </div>

        {/* Actions */}
        <div className="mt-12 flex flex-wrap gap-4">

          <Link
            to="/questions"
            className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700"
          >
            Practice PYQs →
          </Link>

          <Link
            to="/notes"
            className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 hover:bg-slate-100"
          >
            Read Notes
          </Link>

        </div>

        {/* ID */}
        <p className="mt-8 text-xs text-slate-400">
          Subject ID: {subjectId}
        </p>

      </div>
    </div>
  );
}

export default SubjectDetails;