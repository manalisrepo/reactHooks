import { useState, useEffect } from "react";

export default function useLocalStorage() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    console.log(2);
    if (localStorage.getItem("email")) {
      setEmail(localStorage.getItem("email"));
    }
  }, []);

  useEffect(() => {
    console.log(1);
    localStorage.setItem("email", email);
  }, [email]);

  return { email, setEmail };
}
