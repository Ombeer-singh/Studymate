import { Link } from "react-router-dom";

function NotesCard({
  id,
  title,
  subject,
  description,
  icon = "📝",
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-2xl">
        {icon}
      </div>

      <span className="mt-5 inline-block rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">
        {subject}
      </span>

      <h2 className="mt-4 text-lg font-bold text-slate-900">
        {title}
      </h2>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {description}
      </p>

      <Link
        to={`/notes/${id}`}
        className="mt-5 inline-block font-semibold text-indigo-600 hover:text-indigo-700"
      >
        Read Notes →
      </Link>

    </div>
  );
}

export default NotesCard;