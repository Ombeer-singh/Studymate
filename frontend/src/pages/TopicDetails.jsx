import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import api from "../services/api";

function TopicDetails() {
  const { topicId } = useParams();

  const [topic, setTopic] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTopic = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await api.get(
          `/topics/${topicId}`
        );

        if (response.data.success) {
          setTopic(response.data.topic);
        } else {
          setError("Topic nahi mila.");
        }
      } catch (err) {
        console.error("Topic Details Error:", err);

        setError(
          err.response?.data?.message ||
            "Topic details load nahi ho paaye."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchTopic();
  }, [topicId]);

  // ==================== LOADING ====================

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-5 h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-indigo-600"></div>

          <p className="text-slate-600">
            Topic details load ho rahe hain...
          </p>
        </div>
      </div>
    );
  }

  // ==================== ERROR ====================

  if (error || !topic) {
    return (
      <div className="min-h-screen bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-2xl rounded-2xl border border-red-200 bg-white p-10 text-center">

          <div className="text-5xl">
            ⚠️
          </div>

          <h1 className="mt-5 text-2xl font-bold text-slate-900">
            Topic Not Found
          </h1>

          <p className="mt-3 text-slate-500">
            {error || "Topic details available nahi hain."}
          </p>

          <Link
            to="/topics"
            className="mt-6 inline-block rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white"
          >
            ← Back to Topics
          </Link>

        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-14">

      <div className="mx-auto max-w-5xl">

        {/* ==================== BACK ==================== */}

        <Link
          to="/topics"
          className="text-sm font-medium text-indigo-600 hover:text-indigo-800"
        >
          ← Back to Topics
        </Link>

        {/* ==================== HEADER ==================== */}

        <div className="mt-6 rounded-3xl bg-white p-8 shadow-sm">

          <div className="flex flex-wrap items-center gap-3">

            <span className="rounded-full bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600">
              {topic.subject?.name || "Subject"}
            </span>

            <span className="rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-600">
              {topic.priority || "Medium"} Priority
            </span>

          </div>

          <h1 className="mt-6 text-3xl font-bold text-slate-900 md:text-4xl">
            {topic.name}
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            {topic.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-4">

            <div className="rounded-xl bg-slate-50 px-5 py-3">
              <p className="text-xs text-slate-400">
                Exam Frequency
              </p>

              <p className="mt-1 font-bold text-indigo-600">
                {topic.frequency || 0} Times
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 px-5 py-3">
              <p className="text-xs text-slate-400">
                Semester
              </p>

              <p className="mt-1 font-bold text-slate-800">
                {topic.subject?.semester || "-"}
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 px-5 py-3">
              <p className="text-xs text-slate-400">
                Subject Code
              </p>

              <p className="mt-1 font-bold text-slate-800">
                {topic.subject?.code || "-"}
              </p>
            </div>

          </div>

        </div>

        {/* ==================== STUDY NOTES ==================== */}

        <div className="mt-8 rounded-3xl bg-white p-8 shadow-sm">

          <div className="flex items-center gap-3">
            <span className="text-3xl">
              📚
            </span>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Detailed Notes
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Important concepts for exam preparation
              </p>
            </div>
          </div>

          {/* Introduction */}

          <div className="mt-8">
            <h3 className="text-xl font-bold text-slate-900">
              1. Introduction
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              {topic.description}
            </p>
          </div>

          {/* Important Concepts */}

          <div className="mt-8">
            <h3 className="text-xl font-bold text-slate-900">
              2. Important Concepts
            </h3>

            <div className="mt-4 grid gap-3 md:grid-cols-2">

              <div className="rounded-xl bg-slate-50 p-4">
                <span className="font-semibold text-slate-800">
                  📌 Basic Concepts
                </span>
                <p className="mt-2 text-sm text-slate-600">
                  Understand the fundamental concepts of{" "}
                  {topic.name}.
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <span className="font-semibold text-slate-800">
                  📌 Important Definitions
                </span>
                <p className="mt-2 text-sm text-slate-600">
                  Learn the important definitions related to{" "}
                  {topic.name}.
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <span className="font-semibold text-slate-800">
                  📌 Important Formulas
                </span>
                <p className="mt-2 text-sm text-slate-600">
                  Keep important formulas and methods ready
                  for examination.
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <span className="font-semibold text-slate-800">
                  📌 Exam Questions
                </span>
                <p className="mt-2 text-sm text-slate-600">
                  Practice previous-year and repeated
                  questions from this topic.
                </p>
              </div>

            </div>
          </div>

          {/* Exam Preparation */}

          <div className="mt-8 rounded-2xl border border-indigo-100 bg-indigo-50 p-6">

            <h3 className="text-lg font-bold text-indigo-900">
              🎯 Exam Preparation
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-indigo-900">

              <li>
                ✓ Topic ke basic concepts clear karo.
              </li>

              <li>
                ✓ Important definitions aur formulas revise karo.
              </li>

              <li>
                ✓ Previous-year questions practice karo.
              </li>

              <li>
                ✓ Frequently repeated questions ko priority do.
              </li>

            </ul>

          </div>

        </div>

        {/* ==================== HANDWRITTEN NOTES ==================== */}

        <div className="mt-8 rounded-3xl bg-white p-8 shadow-sm">

          <div className="flex items-center gap-3">
            <span className="text-3xl">
              📝
            </span>

            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Handwritten Notes
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Quick revision notes
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center">

            <div className="text-5xl">
              ✍️
            </div>

            <h3 className="mt-4 text-lg font-bold text-slate-900">
              Handwritten Notes Coming Soon
            </h3>

            <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-500">
              Is topic ke short handwritten revision notes
              yahan available honge.
            </p>

          </div>

        </div>

      </div>
    </div>
  );
}

export default TopicDetails;