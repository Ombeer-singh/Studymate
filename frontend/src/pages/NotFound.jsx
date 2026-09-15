function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-slate-50 px-6">
      <div className="text-center">

        <div className="text-7xl font-extrabold text-indigo-600">
          404
        </div>

        <h1 className="mt-4 text-3xl font-bold text-slate-900">
          Page Not Found
        </h1>

        <p className="mx-auto mt-3 max-w-md text-slate-500">
          Sorry, the page you are looking for does not exist.
        </p>

        <a
          href="/"
          className="mt-7 inline-block rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
        >
          ← Back to Home
        </a>

      </div>
    </div>
  );
}

export default NotFound;