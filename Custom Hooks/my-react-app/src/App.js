import "./App.css";
import Login from "./components/LoginPage";
import { useState } from "react";
import Reset from "./components/ResetPassword";

function App() {
  const [form, setForm] = useState("login");
  return (
    <div className="App">
      <h2>Welcome!</h2>
      {form === "login" ? <Login /> : <Reset />}
      <button onClick={() => setForm(form === "login" ? "reset" : "login")}>
        {form === "login" ? "Forgot Password" : "Back to login"}
      </button>
    </div>
  );
}

export default App;
