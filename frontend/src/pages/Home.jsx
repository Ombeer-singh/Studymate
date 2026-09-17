import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function Home() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  // ==================== SEARCH ====================

  const handleSearch = (e) => {
    e.preventDefault();

    if (!search.trim()) return;

    navigate(
      `/questions?search=${encodeURIComponent(search.trim())}`
    );
  };

  return (
    <div className="min-h-screen bg-slate-50">

      {/* ==================== HERO SECTION ==================== */}

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* LEFT CONTENT */}

          <div>

            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600">
              🎓 Built for B.Tech Students
            </div>

            <h1 className="max-w-2xl text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl">
              Your Smart Companion
              <span className="block text-indigo-600">
                for B.Tech Exams
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Find previous year questions, topic-wise notes,
              important questions and repeated exam topics —
              all in one place.
            </p>

            {/* SEARCH */}

            <form
              onSubmit={handleSearch}
              className="mt-8 flex max-w-xl overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
            >
              <input
                type="text"
                placeholder="Search questions, subjects or topics..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-5 py-4 text-sm outline-none"
              />

              <button
                type="submit"
                className="bg-indigo-600 px-6 text-white hover:bg-indigo-700"
              >
                Search
              </button>
            </form>

            {/* HERO BUTTONS */}

            <div className="mt-6 flex flex-wrap gap-4">

              <Link
                to="/questions"
                className="rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white shadow-sm hover:bg-indigo-700"
              >
                Explore PYQs →
              </Link>

              <Link
                to="/notes"
                className="rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 hover:bg-slate-100"
              >
                Explore Notes
              </Link>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="relative">

            <div className="rounded-3xl bg-indigo-600 p-8 shadow-xl">

              <div className="rounded-2xl bg-white p-6">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-sm text-slate-500">
                      Popular Subject
                    </p>

                    <h3 className="mt-1 text-xl font-bold text-slate-900">
                      Database Management System
                    </h3>

                  </div>

                  <div className="rounded-xl bg-indigo-50 px-3 py-2 text-2xl">
                    📚
                  </div>

                </div>

                <div className="mt-6 space-y-3">

                  <div className="flex items-center justify-between rounded-lg bg-slate-50 p-4">
                    <span className="text-sm font-medium text-slate-700">
                      Normalization
                    </span>

                    <span className="font-semibold text-indigo-600">
                      8 Times
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-lg bg-slate-50 p-4">
                    <span className="text-sm font-medium text-slate-700">
                      SQL
                    </span>

                    <span className="font-semibold text-indigo-600">
                      7 Times
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-lg bg-slate-50 p-4">
                    <span className="text-sm font-medium text-slate-700">
                      Transactions
                    </span>

                    <span className="font-semibold text-indigo-600">
                      6 Times
                    </span>
                  </div>

                </div>

                <Link
                  to="/questions"
                  className="mt-6 block w-full rounded-lg bg-slate-900 py-3 text-center font-medium text-white hover:bg-slate-800"
                >
                  View All Questions
                </Link>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ==================== BRANCH & SEMESTER ==================== */}

      <section className="relative z-10 px-6 pb-16 lg:px-8">

        <div className="mx-auto max-w-6xl">

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg md:p-8">

            <div className="mb-8 text-center">

              <span className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                Start Your Preparation
              </span>

              <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                Find Your Study Material
              </h2>

              <p className="mt-2 text-slate-500">
                Select your university, branch and semester to get started.
              </p>

            </div>

            <div className="grid gap-5 md:grid-cols-3">

              {/* UNIVERSITY */}

              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  University
                </label>

                <select
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select University
                  </option>

                  <option>AKTU</option>
                  <option>Delhi University</option>
                  <option>IP University</option>
                  <option>Other</option>
                </select>

              </div>

              {/* BRANCH */}

              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Branch
                </label>

                <select
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Branch
                  </option>

                  <option>Computer Science & Engineering</option>
                  <option>Information Technology</option>
                  <option>Electronics & Communication</option>
                  <option>Mechanical Engineering</option>
                  <option>Civil Engineering</option>
                </select>

              </div>

              {/* SEMESTER */}

              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Semester
                </label>

                <select
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Semester
                  </option>

                  <option>1st Semester</option>
                  <option>2nd Semester</option>
                  <option>3rd Semester</option>
                  <option>4th Semester</option>
                  <option>5th Semester</option>
                  <option>6th Semester</option>
                  <option>7th Semester</option>
                  <option>8th Semester</option>
                </select>

              </div>

            </div>

            <div className="mt-7 flex justify-center">

              <Link
                to="/subjects"
                className="rounded-xl bg-indigo-600 px-8 py-3.5 font-semibold text-white shadow-md transition hover:bg-indigo-700 hover:shadow-lg"
              >
                Find Subjects →
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* ==================== POPULAR SUBJECTS ==================== */}

      <section className="bg-slate-50 px-6 py-16 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">

            <div>

              <span className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                Explore Subjects
              </span>

              <h2 className="mt-2 text-3xl font-bold text-slate-900">
                Popular Subjects
              </h2>

              <p className="mt-2 max-w-2xl text-slate-600">
                Start your preparation with the most important B.Tech subjects.
              </p>

            </div>

            <Link
              to="/subjects"
              className="w-fit font-semibold text-indigo-600 hover:text-indigo-700"
            >
              View All Subjects →
            </Link>

          </div>


          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {/* DBMS */}

            <Link
              to="/subjects/1"
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-2xl">
                🗄️
              </div>

              <h3 className="mt-5 text-lg font-bold text-slate-900">
                DBMS
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Database Management System
              </p>

              <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">

                <span className="text-sm text-slate-500">
                  50+ Questions
                </span>

                <span className="font-semibold text-indigo-600">
                  Explore →
                </span>

              </div>

            </Link>


            {/* OPERATING SYSTEM */}

            <Link
              to="/subjects/2"
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                💻
              </div>

              <h3 className="mt-5 text-lg font-bold text-slate-900">
                Operating System
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Processes, memory and file management
              </p>

              <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">

                <span className="text-sm text-slate-500">
                  45+ Questions
                </span>

                <span className="font-semibold text-indigo-600">
                  Explore →
                </span>

              </div>

            </Link>


            {/* COMPUTER NETWORKS */}

            <Link
              to="/subjects/3"
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-2xl">
                🌐
              </div>

              <h3 className="mt-5 text-lg font-bold text-slate-900">
                Computer Networks
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Networking concepts and protocols
              </p>

              <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">

                <span className="text-sm text-slate-500">
                  40+ Questions
                </span>

                <span className="font-semibold text-indigo-600">
                  Explore →
                </span>

              </div>

            </Link>


            {/* DAA */}

            <Link
              to="/subjects/4"
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-2xl">
                🧠
              </div>

              <h3 className="mt-5 text-lg font-bold text-slate-900">
                DAA
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Design and Analysis of Algorithms
              </p>

              <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">

                <span className="text-sm text-slate-500">
                  35+ Questions
                </span>

                <span className="font-semibold text-indigo-600">
                  Explore →
                </span>

              </div>

            </Link>

          </div>

        </div>

      </section>


      {/* ==================== MOST REPEATED TOPICS ==================== */}

      <section className="bg-white px-6 py-16 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <span className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
              Exam Preparation
            </span>

            <h2 className="mt-2 text-3xl font-bold text-slate-900">
              Most Repeated Topics 🔥
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-slate-600">
              Focus on the topics that have appeared most frequently
              in previous university examinations.
            </p>

          </div>


          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {/* TOPIC 1 */}

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg">

              <div className="flex items-start justify-between">

                <div>

                  <span className="text-xs font-semibold uppercase text-indigo-600">
                    DBMS
                  </span>

                  <h3 className="mt-2 text-lg font-bold text-slate-900">
                    Normalization
                  </h3>

                </div>

                <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-600">
                  🔥 8 Times
                </span>

              </div>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                1NF, 2NF, 3NF, BCNF and normalization concepts.
              </p>

              <div className="mt-5 flex items-center justify-between">

                <span className="text-sm text-slate-500">
                  High Priority
                </span>

                <Link
                  to="/questions"
                  className="font-semibold text-indigo-600 hover:text-indigo-700"
                >
                  View Questions →
                </Link>

              </div>

            </div>


            {/* TOPIC 2 */}

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg">

              <div className="flex items-start justify-between">

                <div>

                  <span className="text-xs font-semibold uppercase text-indigo-600">
                    DBMS
                  </span>

                  <h3 className="mt-2 text-lg font-bold text-slate-900">
                    SQL Queries
                  </h3>

                </div>

                <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-600">
                  🔥 7 Times
                </span>

              </div>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                SELECT, JOIN, GROUP BY, subqueries and aggregate functions.
              </p>

              <div className="mt-5 flex items-center justify-between">

                <span className="text-sm text-slate-500">
                  High Priority
                </span>

                <Link
                  to="/questions"
                  className="font-semibold text-indigo-600 hover:text-indigo-700"
                >
                  View Questions →
                </Link>

              </div>

            </div>


            {/* TOPIC 3 */}

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg">

              <div className="flex items-start justify-between">

                <div>

                  <span className="text-xs font-semibold uppercase text-blue-600">
                    Operating System
                  </span>

                  <h3 className="mt-2 text-lg font-bold text-slate-900">
                    CPU Scheduling
                  </h3>

                </div>

                <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-orange-600">
                  🔥 6 Times
                </span>

              </div>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                FCFS, SJF, Round Robin and Priority scheduling algorithms.
              </p>

              <div className="mt-5 flex items-center justify-between">

                <span className="text-sm text-slate-500">
                  High Priority
                </span>

                <Link
                  to="/questions"
                  className="font-semibold text-indigo-600 hover:text-indigo-700"
                >
                  View Questions →
                </Link>

              </div>

            </div>


            {/* TOPIC 4 */}

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg">

              <div className="flex items-start justify-between">

                <div>

                  <span className="text-xs font-semibold uppercase text-green-600">
                    Computer Networks
                  </span>

                  <h3 className="mt-2 text-lg font-bold text-slate-900">
                    OSI Model
                  </h3>

                </div>

                <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-orange-600">
                  🔥 6 Times
                </span>

              </div>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Seven layers of OSI model and their functions.
              </p>

              <div className="mt-5 flex items-center justify-between">

                <span className="text-sm text-slate-500">
                  High Priority
                </span>

                <Link
                  to="/questions"
                  className="font-semibold text-indigo-600 hover:text-indigo-700"
                >
                  View Questions →
                </Link>

              </div>

            </div>


            {/* TOPIC 5 */}

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg">

              <div className="flex items-start justify-between">

                <div>

                  <span className="text-xs font-semibold uppercase text-purple-600">
                    DAA
                  </span>

                  <h3 className="mt-2 text-lg font-bold text-slate-900">
                    Sorting Algorithms
                  </h3>

                </div>

                <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-orange-600">
                  🔥 5 Times
                </span>

              </div>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Bubble, Selection, Insertion, Merge and Quick Sort.
              </p>

              <div className="mt-5 flex items-center justify-between">

                <span className="text-sm text-slate-500">
                  Medium Priority
                </span>

                <Link
                  to="/questions"
                  className="font-semibold text-indigo-600 hover:text-indigo-700"
                >
                  View Questions →
                </Link>

              </div>

            </div>


            {/* TOPIC 6 */}

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg">

              <div className="flex items-start justify-between">

                <div>

                  <span className="text-xs font-semibold uppercase text-indigo-600">
                    DBMS
                  </span>

                  <h3 className="mt-2 text-lg font-bold text-slate-900">
                    Transactions
                  </h3>

                </div>

                <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-orange-600">
                  🔥 5 Times
                </span>

              </div>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                ACID properties, schedules, serializability and concurrency.
              </p>

              <div className="mt-5 flex items-center justify-between">

                <span className="text-sm text-slate-500">
                  Medium Priority
                </span>

                <Link
                  to="/questions"
                  className="font-semibold text-indigo-600 hover:text-indigo-700"
                >
                  View Questions →
                </Link>

              </div>

            </div>

          </div>


          {/* BOTTOM BUTTON */}

          <div className="mt-10 text-center">

            <Link
              to="/topics"
              className="inline-block rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Explore All Repeated Topics →
            </Link>

          </div>

        </div>

      </section>


      {/* ==================== STATS ==================== */}

      <section className="bg-slate-900 px-6 py-14 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">

            <div className="text-center">

              <h3 className="text-3xl font-bold text-white md:text-4xl">
                500+
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                Previous Year Questions
              </p>

            </div>

            <div className="text-center">

              <h3 className="text-3xl font-bold text-white md:text-4xl">
                50+
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                Important Topics
              </p>

            </div>

            <div className="text-center">

              <h3 className="text-3xl font-bold text-white md:text-4xl">
                20+
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                B.Tech Subjects
              </p>

            </div>

            <div className="text-center">

              <h3 className="text-3xl font-bold text-white md:text-4xl">
                100%
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                Exam Focused
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ==================== WHY STUDYMATE ==================== */}

      <section className="bg-slate-50 px-6 py-20 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">

            <span className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
              Why StudyMate?
            </span>

            <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
              Prepare Smarter, Not Harder
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              StudyMate helps B.Tech students focus on what actually matters
              for their university exams.
            </p>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {/* CARD 1 */}

            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-2xl">
                🎯
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Focus on Important Topics
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Identify frequently asked topics and spend your valuable
                preparation time on high-priority concepts.
              </p>

            </div>


            {/* CARD 2 */}

            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                ⚡
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Save Preparation Time
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Get PYQs, notes and important questions together instead of
                searching through multiple websites and PDFs.
              </p>

            </div>


            {/* CARD 3 */}

            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-2xl">
                📊
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Understand Exam Trends
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                See how often a topic has appeared in previous exams and
                understand what your university asks most.
              </p>

            </div>


            {/* CARD 4 */}

            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-2xl">
                📝
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Topic-wise Notes
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Learn concepts using concise notes directly connected with
                the questions you are preparing.
              </p>

            </div>


            {/* CARD 5 */}

            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-2xl">
                🔖
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                Bookmark Questions
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Save important questions and quickly access them whenever
                you revise before your exams.
              </p>

            </div>


            {/* CARD 6 */}

            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-2xl">
                🚀
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                One Place for Everything
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Questions, notes, topics and exam trends — everything you
                need for B.Tech preparation in one platform.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ==================== FEATURES ==================== */}

      <section className="border-y border-slate-200 bg-white">

        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-10 md:grid-cols-3">

          <Link
            to="/questions"
            className="rounded-xl p-5 transition hover:bg-slate-50"
          >

            <div className="text-3xl">
              📚
            </div>

            <h3 className="mt-3 text-lg font-bold text-slate-900">
              Previous Year Questions
            </h3>

            <p className="mt-2 text-sm text-slate-600">
              Practice real questions from previous university exams.
            </p>

          </Link>


          <Link
            to="/notes"
            className="rounded-xl p-5 transition hover:bg-slate-50"
          >

            <div className="text-3xl">
              📝
            </div>

            <h3 className="mt-3 text-lg font-bold text-slate-900">
              Topic-wise Notes
            </h3>

            <p className="mt-2 text-sm text-slate-600">
              Understand every important topic with concise notes.
            </p>

          </Link>


          <Link
            to="/topics"
            className="rounded-xl p-5 transition hover:bg-slate-50"
          >

            <div className="text-3xl">
              🔥
            </div>

            <h3 className="mt-3 text-lg font-bold text-slate-900">
              Most Repeated Topics
            </h3>

            <p className="mt-2 text-sm text-slate-600">
              Quickly identify topics frequently asked in exams.
            </p>

          </Link>

        </div>

      </section>


      {/* ==================== CALL TO ACTION ==================== */}

      <section className="bg-indigo-600 px-6 py-20 lg:px-8">

        <div className="mx-auto max-w-4xl text-center">

          <div className="text-4xl">
            🚀
          </div>

          <h2 className="mt-5 text-3xl font-bold text-white md:text-4xl">
            Ready to Prepare Smarter?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-indigo-100">
            Stop wasting time searching for questions and notes.
            Start your B.Tech exam preparation with StudyMate today.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              to="/questions"
              className="rounded-xl bg-white px-7 py-3.5 font-semibold text-indigo-600 shadow-lg transition hover:bg-slate-100"
            >
              Explore PYQs →
            </Link>

            <Link
              to="/signup"
              className="rounded-xl border border-indigo-400 px-7 py-3.5 font-semibold text-white transition hover:bg-indigo-700"
            >
              Create Free Account
            </Link>

          </div>

        </div>

      </section>


      {/* ==================== FOOTER ==================== */}

      <Footer />

    </div>
  );
}

export default Home;