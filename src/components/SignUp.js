import react, { useState } from "react";
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const collectData = () => {
    console.warn(name, email, password);
  };
  return (
    <div className="register text-center shadow-sm container">
      <h1>Register</h1>
      <input
        className="inputBox"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Your Name"
      />
      <input
        className="inputBox"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter  your Email"
      />

      <input
        className="inputBox"
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Your Password"
      />
      <button type="button" onClick={collectData} className="appButton">
        Sign Up
      </button>
    </div>
  );
};
export default SignUp;
