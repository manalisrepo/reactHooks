import { useState, useEffect } from "react";
const useLocalStorage = (key, defaultValue) => {
  // Add the state and effect here
  const [name, setName] = useState("");
  const [age, setAge] = useState(1);

  useEffect(() => {
    if (localStorage.getItem("name")) {
      setName(localStorage.getItem("name"));
    }
    if (localStorage.getItem("age")) {
      setAge(localStorage.getItem("age"));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
  }, [name, age]);
  return { name, setName, age, setAge };
};

export default useLocalStorage;
