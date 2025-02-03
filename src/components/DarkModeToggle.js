import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../redux/darkModeSlice";
import { useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const DarkModeToggle = () => {
  const darkMode = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark"); // Enable dark mode globally
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => dispatch(toggleDarkMode())}
      className="p-2 text-xl rounded bg-gray-200 dark:bg-gray-700 dark:text-white"
    >
     
      {darkMode ? <FaMoon className="text-gray-300" /> : <FaSun className="text-yellow-500" />}

    </button>
  );
};

export default DarkModeToggle;
