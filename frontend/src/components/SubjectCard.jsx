import { Link } from "react-router-dom";

function SubjectCard({
  id,
  name,
  fullName,
  description,
  questions,
  icon,
}) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

      <div className="flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-2xl">
          {icon}
        </div>

        <span className="text-sm font-medium text-slate-400">
          {questions}
        </span>
      </div>

      <h3 className="mt-5 text-xl font-bold text-slate-900">
        {name}
      </h3>

      <p className="mt-1 text-sm font-medium text-indigo-600">
        {fullName}
      </p>

      <p className="mt-3 text-sm leading-6 text-slate-500">
        {description}
      </p>

      <div className="mt-6 border-t border-slate-100 pt-4">
        <Link
          to={`/subjects/${id}`}
          className="font-semibold text-indigo-600 hover:text-indigo-700"
        >
          Explore Subject →
        </Link>
      </div>

    </div>
  );
}

export default SubjectCard;