import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Stick to this one

const ThemeToggles = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleSwitch = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const isOn = theme === "dark";

  return (
    <button
      onClick={toggleSwitch}
      style={{
        ...container,
        // Flex-end for dark (right), flex-start for light (left)
        justifyContent: isOn ? "flex-end" : "flex-start", 
      }}
    >
      <motion.div
        style={handle}
        layout
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 30,
        }}
      />
    </button>
  );
};

export default ThemeToggles;

const container = {
  width: 80,
  height: 40,
  backgroundColor: "#ccc",
  borderRadius: 40,
  cursor: "pointer",
  display: "flex",
  padding: 5,
  border: "none",
  alignItems: "center"
};

const handle = {
  width: 30,
  height: 30,
  backgroundColor: "#9911ff",
  borderRadius: "50%",
};
