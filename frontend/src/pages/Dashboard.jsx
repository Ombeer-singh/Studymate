function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-10">
          <span className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
            StudyMate
          </span>

          <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            Student Dashboard
          </h1>

          <p className="mt-2 text-slate-600">
            Track your preparation and continue your B.Tech exam journey.
          </p>
        </div>

        {/* Stats */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-3xl">📚</div>
            <h2 className="mt-4 text-2xl font-bold text-slate-900">
              0
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Questions Practiced
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-3xl">🔖</div>
            <h2 className="mt-4 text-2xl font-bold text-slate-900">
              0
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Bookmarked Questions
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-3xl">📝</div>
            <h2 className="mt-4 text-2xl font-bold text-slate-900">
              0
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Topics Completed
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-3xl">🔥</div>
            <h2 className="mt-4 text-2xl font-bold text-slate-900">
              0%
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Preparation Progress
            </p>
          </div>

        </div>

        {/* Continue Preparation */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">
            Continue Your Preparation
          </h2>

          <p className="mt-2 text-slate-500">
            Start exploring subjects, PYQs and important topics.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <button className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700">
              Explore Subjects →
            </button>

            <button className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 hover:bg-slate-100">
              Practice PYQs
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;