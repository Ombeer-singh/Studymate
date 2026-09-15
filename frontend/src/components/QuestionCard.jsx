import { Link } from "react-router-dom";

function QuestionCard({
  id,
  question,
  subject,
  topic,
  year,
  marks,
  frequency,
  priority,
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">

      {/* Tags */}
      <div className="flex flex-wrap items-center gap-2">

        <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">
          {subject}
        </span>

        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
          {topic}
        </span>

        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
          {year}
        </span>

        <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600">
          {priority}
        </span>

      </div>

      {/* Question */}
      <h3 className="mt-4 text-lg font-bold leading-7 text-slate-900">
        {question}
      </h3>

      {/* Bottom */}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-4">

        <div className="flex flex-wrap gap-5 text-sm text-slate-500">
          <span>📄 {marks}</span>
          <span>🔥 {frequency}</span>
        </div>

        <Link
          to={`/questions/${id}`}
          className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
        >
          View Question →
        </Link>

      </div>

    </div>
  );
}

export default QuestionCard;