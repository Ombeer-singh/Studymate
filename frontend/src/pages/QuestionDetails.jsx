
import { Link, useParams } from "react-router-dom";

function QuestionDetails() {
  const { questionId } = useParams();

  const questions = [
    {
      id: 1,
      question:
        "Explain Database Normalization. Discuss 1NF, 2NF and 3NF with suitable examples.",
      subject: "DBMS",
      topic: "Normalization",
      year: "2025",
      marks: "10 Marks",
      frequency: "8 Times",
      priority: "High Priority",
      difficulty: "Medium",
      answer:
        "Database Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity. The major normal forms include 1NF, 2NF and 3NF.",
    },
    {
      id: 2,
      question:
        "Explain different types of SQL commands with suitable examples.",
      subject: "DBMS",
      topic: "SQL",
      year: "2024",
      marks: "8 Marks",
      frequency: "7 Times",
      priority: "High Priority",
      difficulty: "Easy",
      answer:
        "SQL commands are used to communicate with and manage databases. Major categories include DDL, DML, DQL, DCL and TCL.",
    },
    {
      id: 3,
      question:
        "Explain CPU Scheduling algorithms and compare FCFS, SJF and Round Robin.",
      subject: "Operating System",
      topic: "CPU Scheduling",
      year: "2025",
      marks: "10 Marks",
      frequency: "6 Times",
      priority: "High Priority",
      difficulty: "Medium",
      answer:
        "CPU Scheduling is the process of selecting a process from the ready queue and allocating the CPU to it. Common algorithms include FCFS, SJF and Round Robin.",
    },
    {
      id: 4,
      question:
        "Explain the OSI reference model and describe all seven layers.",
      subject: "Computer Networks",
      topic: "OSI Model",
      year: "2024",
      marks: "10 Marks",
      frequency: "6 Times",
      priority: "High Priority",
      difficulty: "Medium",
      answer:
        "The OSI model is a seven-layer reference model used to understand network communication. Its layers are Physical, Data Link, Network, Transport, Session, Presentation and Application.",
    },
    {
      id: 5,
      question:
        "Explain different sorting algorithms and compare their time complexities.",
      subject: "DAA",
      topic: "Sorting Algorithms",
      year: "2023",
      marks: "8 Marks",
      frequency: "5 Times",
      priority: "Medium Priority",
      difficulty: "Medium",
      answer:
        "Sorting algorithms arrange data in a particular order. Common algorithms include Bubble Sort, Selection Sort, Insertion Sort, Merge Sort and Quick Sort.",
    },
    {
      id: 6,
      question:
        "Explain transaction states and ACID properties in DBMS.",
      subject: "DBMS",
      topic: "Transactions",
      year: "2023",
      marks: "8 Marks",
      frequency: "5 Times",
      priority: "Medium Priority",
      difficulty: "Easy",
      answer:
        "A transaction is a sequence of database operations treated as a single logical unit. ACID stands for Atomicity, Consistency, Isolation and Durability.",
    },
  ];

  const question = questions.find(
    (item) => item.id === Number(questionId)
  );

  // Question not found
  if (!question) {
    return (
      <div className="min-h-screen bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">
          <div className="text-5xl">🔍</div>

          <h1 className="mt-4 text-2xl font-bold text-slate-900">
            Question Not Found
          </h1>

          <p className="mt-2 text-slate-500">
            The question you are looking for does not exist.
          </p>

          <Link
            to="/questions"
            className="mt-6 inline-block rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-700"
          >
            ← Back to Questions
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">

        {/* Back Button */}
        <Link
          to="/questions"
          className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-700"
        >
          ← Back to Questions
        </Link>

        {/* Question Card */}
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">
              {question.subject}
            </span>

            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
              {question.topic}
            </span>

            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
              {question.year}
            </span>

            <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600">
              {question.priority}
            </span>
          </div>

          {/* Question */}
          <h1 className="mt-6 text-2xl font-bold leading-9 text-slate-900 md:text-3xl">
            {question.question}
          </h1>

          {/* Metadata */}
          <div className="mt-8 grid gap-4 border-y border-slate-100 py-6 sm:grid-cols-2 lg:grid-cols-4">

            <div>
              <p className="text-xs text-slate-400">
                Year
              </p>
              <p className="mt-1 font-semibold text-slate-800">
                📅 {question.year}
              </p>
            </div>

            <div>
              <p className="text-xs text-slate-400">
                Marks
              </p>
              <p className="mt-1 font-semibold text-slate-800">
                📝 {question.marks}
              </p>
            </div>

            <div>
              <p className="text-xs text-slate-400">
                Repeated
              </p>
              <p className="mt-1 font-semibold text-slate-800">
                🔥 {question.frequency}
              </p>
            </div>

            <div>
              <p className="text-xs text-slate-400">
                Difficulty
              </p>
              <p className="mt-1 font-semibold text-slate-800">
                🎯 {question.difficulty}
              </p>
            </div>

          </div>

          {/* Bookmark */}
          <div className="mt-6">
            <button
              type="button"
              className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600"
            >
              🔖 Bookmark Question
            </button>
          </div>
        </div>

        {/* Answer / Explanation */}
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-xl">
              💡
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Quick Explanation
              </h2>

              <p className="text-sm text-slate-500">
                Important points for exam preparation
              </p>
            </div>
          </div>

          <p className="mt-6 leading-8 text-slate-600">
            {question.answer}
          </p>

          <div className="mt-6 rounded-xl bg-slate-50 p-5">
            <h3 className="font-bold text-slate-900">
              ✍️ Exam Tip
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Start your answer with a clear definition, then explain
              the important points using headings, examples and diagrams
              wherever possible.
            </p>
          </div>
        </div>

        {/* Related Notes */}
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">

          <h2 className="text-xl font-bold text-slate-900">
            📚 Related Study Material
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Continue learning this topic with StudyMate notes.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              to="/notes"
              className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-700"
            >
              Read {question.subject} Notes →
            </Link>

            <Link
              to="/topics"
              className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Explore Topics →
            </Link>
          </div>
        </div>

        {/* Similar Questions */}
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">

          <h2 className="text-xl font-bold text-slate-900">
            🔁 Similar Questions
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Practice more questions from the same subject.
          </p>

          <div className="mt-5 space-y-3">

            {questions
              .filter(
                (item) =>
                  item.subject === question.subject &&
                  item.id !== question.id
              )
              .slice(0, 3)
              .map((item) => (
                <Link
                  key={item.id}
                  to={`/questions/${item.id}`}
                  className="block rounded-xl border border-slate-200 p-4 transition hover:border-indigo-300 hover:bg-indigo-50"
                >
                  <p className="font-semibold text-slate-800">
                    {item.question}
                  </p>

                  <div className="mt-2 flex flex-wrap gap-3 text-xs text-slate-500">
                    <span>{item.year}</span>
                    <span>{item.marks}</span>
                    <span>🔥 {item.frequency}</span>
                  </div>
                </Link>
              ))}

          </div>
        </div>

      </div>
    </div>
  );
}

export default QuestionDetails;

