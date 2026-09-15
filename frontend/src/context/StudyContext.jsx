
import { createContext, useContext, useEffect, useState } from "react";

const StudyContext = createContext();

function StudyProvider({ children }) {
  const [bookmarks, setBookmarks] = useState(() => {
    const savedBookmarks = localStorage.getItem("studymate_bookmarks");

    return savedBookmarks
      ? JSON.parse(savedBookmarks)
      : [];
  });

  // Save bookmarks to localStorage
  useEffect(() => {
    localStorage.setItem(
      "studymate_bookmarks",
      JSON.stringify(bookmarks)
    );
  }, [bookmarks]);

  // Add / Remove Bookmark
  const toggleBookmark = (question) => {
    setBookmarks((previousBookmarks) => {
      const alreadyBookmarked = previousBookmarks.some(
        (item) => item.id === question.id
      );

      if (alreadyBookmarked) {
        return previousBookmarks.filter(
          (item) => item.id !== question.id
        );
      }

      return [...previousBookmarks, question];
    });
  };

  // Check bookmark status
  const isBookmarked = (questionId) => {
    return bookmarks.some(
      (item) => item.id === questionId
    );
  };

  return (
    <StudyContext.Provider
      value={{
        bookmarks,
        toggleBookmark,
        isBookmarked,
      }}
    >
      {children}
    </StudyContext.Provider>
  );
}

export function useStudy() {
  return useContext(StudyContext);
}

export default StudyProvider;

