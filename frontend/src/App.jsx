
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import Subjects from "./pages/Subjects";
import SubjectDetails from "./pages/SubjectDetails";
import Topics from "./pages/Topics";
import TopicDetails from "./pages/TopicDetails";
import Questions from "./pages/Questions";
import QuestionDetails from "./pages/QuestionDetails";
import Notes from "./pages/Notes";
import Bookmarks from "./pages/Bookmarks";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Subjects */}
        <Route path="/subjects" element={<Subjects />} />
        <Route path="/subjects/:subjectId" element={<SubjectDetails />} />

        {/* Topics */}
        <Route path="/topics" element={<Topics />} />
        <Route path="/topics/:topicId" element={<TopicDetails />} />

        {/* Questions */}
        <Route path="/questions" element={<Questions />} />
        <Route path="/questions/:questionId" element={<QuestionDetails />} />

        {/* Notes */}
        <Route path="/notes" element={<Notes />} />

        {/* Bookmarks */}
        <Route path="/bookmarks" element={<Bookmarks />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
