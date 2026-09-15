
function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">

      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Study<span className="text-indigo-600">Mate</span>
            </h2>

            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-500">
              Your smart companion for B.Tech exams. Prepare with
              PYQs, notes and important topics.
            </p>
          </div>


          {/* Platform */}
          <div>
            <h3 className="font-semibold text-slate-900">
              Platform
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-slate-500">

              <li>
                <a href="#" className="hover:text-indigo-600">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-indigo-600">
                  Subjects
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-indigo-600">
                  Previous Year Questions
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-indigo-600">
                  Notes
                </a>
              </li>

            </ul>
          </div>


          {/* Resources */}
          <div>
            <h3 className="font-semibold text-slate-900">
              Resources
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-slate-500">

              <li>
                <a href="#" className="hover:text-indigo-600">
                  Important Topics
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-indigo-600">
                  Repeated Questions
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-indigo-600">
                  Bookmarks
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-indigo-600">
                  Dashboard
                </a>
              </li>

            </ul>
          </div>


          {/* Account */}
          <div>
            <h3 className="font-semibold text-slate-900">
              Account
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-slate-500">

              <li>
                <a href="#" className="hover:text-indigo-600">
                  Login
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-indigo-600">
                  Sign Up
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-indigo-600">
                  My Bookmarks
                </a>
              </li>

            </ul>
          </div>

        </div>


        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">

          <p>
            © 2026 StudyMate. All rights reserved.
          </p>

          <p>
            Built for B.Tech Students 🎓
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;

