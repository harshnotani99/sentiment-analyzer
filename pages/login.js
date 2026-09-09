import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = () => {
    if (
      email === "admin@test.com" &&
      password === "Password123"
    ) {
      localStorage.setItem("loggedIn", "true");
      window.location.href = "/dashboard";
    } else {
      setError("Invalid Email or Password");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "350px",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "10px",
        }}
      >
        <h2>Sentiment Analyzer Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            marginBottom: "10px",
            padding: "8px",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            marginBottom: "10px",
            padding: "8px",
          }}
        />

        <button
          onClick={login}
          style={{
            width: "100%",
            padding: "10px",
            cursor: "pointer",
          }}
        >
          Login
        </button>

        {error && (
          <p style={{ color: "red" }}>
            {error}
          </p>
        )}
      </div>
    </div>
  );
}