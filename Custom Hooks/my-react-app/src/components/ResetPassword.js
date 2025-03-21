import { useState } from "react";
export default function Reset(props) {
  const [email, setEmail] = useState("");
  return (
    <>
      <h2>Reset Password</h2>

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <button>Continue</button>
      <br />
    </>
  );
}
