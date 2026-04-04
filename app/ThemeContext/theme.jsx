"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { API } from "../API/API";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const [data, setData] = useState([]);

  useEffect(() => {
    handleAPI();
  }, []);

  const handleAPI = async () => {
    try {
      const res = await API({ method: "GET", url: "/social-media/get" });
      if (res?.status == 200) {
        setData(res?.data?.data);
        // console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)")
      .matches;

    if (prefersDark) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === "light" ? "dark" : "light";

      document.documentElement.classList.toggle("dark");

      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, data, setData }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
