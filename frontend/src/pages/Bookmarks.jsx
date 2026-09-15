
import { Link } from "react-router-dom";
import QuestionCard from "../components/QuestionCard";
import { useStudy } from "../context/StudyContext";

function Bookmarks() {
  const { bookmarks, toggleBookmark } = useStudy();

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
            Your Study List
          </span>

          <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            Bookmarked Questions
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Save important questions and revise them anytime.
          </p>
        </div>

        {/* Bookmark Count */}
        <div className="mt-10 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Saved Questions
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Your bookmarked PYQs are shown here.
            </p>
          </div>

          <span className="rounded-full bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600">
            {bookmarks.length} Saved
          </span>
        </div>

        {/* Bookmarked Questions */}
        {bookmarks.length > 0 && (
          <div className="mt-6 space-y-5">
            {bookmarks.map((question) => (
              <div key={question.id} className="relative">
                <QuestionCard
                  id={question.id}
                  question={question.question}
                  subject={question.subject}
                  topic={question.topic}
                  year={question.year}
                  marks={question.marks}
                  frequency={question.frequency}
                  priority={question.priority}
                />

                <button
                  onClick={() => toggleBookmark(question)}
                  className="absolute right-6 top-20 rounded-lg bg-red-50 px-3 py-2 text-xs font-semibold text-red-600 hover:bg-red-100 sm:top-6"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {bookmarks.length === 0 && (
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">

            <div className="text-5xl">
              🔖
            </div>

            <h3 className="mt-5 text-xl font-bold text-slate-900">
              No Bookmarks Yet
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
              You haven't bookmarked any questions yet.
              Go to PYQs and save important questions for revision.
            </p>

            <Link
              to="/questions"
              className="mt-6 inline-block rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-700"
            >
              Explore PYQs →
            </Link>

          </div>
        )}

      </div>
    </div>
  );
}

export default Bookmarks;

