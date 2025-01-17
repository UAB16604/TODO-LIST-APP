import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/themeSlice';

function ThemeToggle() {
  const theme = useSelector(state => state.theme);
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300"
      aria-label="Toggle theme"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 text-gray-800 dark:text-yellow-400"
      >
        <path
          fillRule="evenodd"
          d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
}

export default ThemeToggle;