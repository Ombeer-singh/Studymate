import { Link } from "react-router-dom";

function TopicCard({
  id,
  name,
  subject,
  description,
  frequency,
  priority,
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

      {/* Subject + Fire */}
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">
          {subject}
        </span>

        <span className="text-xl">
          🔥
        </span>
      </div>

      {/* Topic Name */}
      <h3 className="mt-5 text-xl font-bold text-slate-900">
        {name}
      </h3>

      {/* Description */}
      <p className="mt-2 text-sm leading-6 text-slate-500">
        {description}
      </p>

      {/* Frequency + Priority */}
      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">

        <div>
          <p className="text-xs text-slate-400">
            Exam Frequency
          </p>

          <p className="mt-1 font-semibold text-indigo-600">
            {frequency}
          </p>
        </div>

        <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600">
          {priority}
        </span>

      </div>

      {/* Study Topic */}
      <Link
        to={`/topics/${id}`}
        className="mt-5 block w-full rounded-xl bg-slate-900 py-3 text-center text-sm font-semibold text-white hover:bg-slate-800"
      >
        Study Topic →
      </Link>

    </div>
  );
}

export default TopicCard;