
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [search, setSearch] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    const searchValue = search.trim();

    if (!searchValue) {
      return;
    }

    navigate(`/questions?search=${encodeURIComponent(searchValue)}`);

    setSearch("");
    setIsMenuOpen(false);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="w-full border-b border-slate-200 bg-white">
      {/* Desktop + Top Navbar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">

        {/* Logo */}
        <Link to="/" className="shrink-0" onClick={closeMenu}>
          <h1 className="text-2xl font-bold text-slate-900">
            Study<span className="text-indigo-600">Mate</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            to="/"
            className="text-sm font-medium text-slate-700 hover:text-indigo-600"
          >
            Home
          </Link>

          <Link
            to="/subjects"
            className="text-sm font-medium text-slate-700 hover:text-indigo-600"
          >
            Subjects
          </Link>

          <Link
            to="/questions"
            className="text-sm font-medium text-slate-700 hover:text-indigo-600"
          >
            PYQs
          </Link>

          <Link
            to="/notes"
            className="text-sm font-medium text-slate-700 hover:text-indigo-600"
          >
            Notes
          </Link>
        </div>

        {/* Desktop Search */}
        <form
          onSubmit={handleSearch}
          className="hidden flex-1 md:block"
        >
          <div className="mx-auto flex max-w-sm items-center rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 focus-within:border-indigo-500">
            <span className="mr-2 text-lg">🔍</span>

            <input
              type="text"
              placeholder="Search StudyMate..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
            />
          </div>
        </form>

        {/* Desktop Auth */}
        <div className="hidden shrink-0 items-center gap-3 md:flex">
          <Link
            to="/login"
            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-lg p-2 text-2xl text-slate-700 hover:bg-slate-100 md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="mx-auto max-w-7xl space-y-4 px-6 py-5">

            {/* Mobile Search */}
            <form onSubmit={handleSearch}>
              <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 focus-within:border-indigo-500">
                <span className="mr-2 text-lg">🔍</span>

                <input
                  type="text"
                  placeholder="Search StudyMate..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                />
              </div>
            </form>

            {/* Mobile Navigation */}
            <div className="space-y-1 border-t border-slate-100 pt-4">

              <Link
                to="/"
                onClick={closeMenu}
                className="block rounded-lg px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-indigo-600"
              >
                Home
              </Link>

              <Link
                to="/subjects"
                onClick={closeMenu}
                className="block rounded-lg px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-indigo-600"
              >
                Subjects
              </Link>

              <Link
                to="/questions"
                onClick={closeMenu}
                className="block rounded-lg px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-indigo-600"
              >
                PYQs
              </Link>

              <Link
                to="/notes"
                onClick={closeMenu}
                className="block rounded-lg px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-indigo-600"
              >
                Notes
              </Link>
            </div>

            {/* Mobile Auth */}
            <div className="flex gap-3 border-t border-slate-100 pt-4">

              <Link
                to="/login"
                onClick={closeMenu}
                className="flex-1 rounded-lg border border-slate-200 px-4 py-3 text-center text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                Login
              </Link>

              <Link
                to="/signup"
                onClick={closeMenu}
                className="flex-1 rounded-lg bg-indigo-600 px-4 py-3 text-center text-sm font-medium text-white hover:bg-indigo-700"
              >
                Sign Up
              </Link>

            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
