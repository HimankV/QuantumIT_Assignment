import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const navigate = useNavigate(); // Use useNavigate hook

  const handleSubmit = async () => {
    const userData = {
      username,
      password,
      ...(isRegistering && { email, dob }),
    };

    try {
      const response = await fetch(
        isRegistering ? "/api/register" : "/api/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
        }
      );

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user)); // Store user info
        alert("Success!");
        navigate("/users"); // Redirect to /users
      } else {
        alert(data.message || "Error occurred");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Network error");
    }
  };

  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #00c6ff, #0072ff)",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "#1f2a44",
          borderRadius: "10px",
          padding: "40px 30px",
          width: "350px",
          boxShadow: "0 15px 40px rgba(0, 0, 0, 0.3)",
          position: "relative",
          color: "white",
        }}
      >
        <div
          style={{
            backgroundColor: "#00f5f9",
            color: "#1f2a44",
            fontWeight: "bold",
            textAlign: "center",
            padding: "10px 0",
            borderRadius: "5px",
            position: "absolute",
            top: "-25px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "60%",
          }}
        >
          {isRegistering ? "SIGN UP" : "SIGN IN"}
        </div>

        <div
          style={{
            backgroundColor: "#2e3a5a",
            borderRadius: "50%",
            width: "80px",
            height: "80px",
            margin: "30px auto 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "40px",
            color: "#888",
          }}
        >
          👤
        </div>

        <div style={{ marginBottom: "15px", position: "relative" }}>
          <label
            style={{ fontSize: "12px", marginBottom: "5px", display: "block" }}
          >
            Username
          </label>
          <span
            style={{
              position: "absolute",
              top: "36px",
              left: "10px",
              fontSize: "16px",
              color: "#aaa",
            }}
          >
            👤
          </span>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              width: "100%",
              padding: "10px 10px 10px 30px",
              borderRadius: "5px",
              border: "none",
              backgroundColor: "#35425e",
              color: "#ccc",
              fontSize: "14px",
            }}
          />
        </div>

        {isRegistering && (
          <>
            <div style={{ marginBottom: "15px" }}>
              <label
                style={{
                  fontSize: "12px",
                  marginBottom: "5px",
                  display: "block",
                }}
              >
                Email
              </label>
              <input
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "none",
                  backgroundColor: "#35425e",
                  color: "#ccc",
                  fontSize: "14px",
                }}
              />
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label
                style={{
                  fontSize: "12px",
                  marginBottom: "5px",
                  display: "block",
                }}
              >
                Date of Birth
              </label>
              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "none",
                  backgroundColor: "#35425e",
                  color: "#ccc",
                  fontSize: "14px",
                }}
              />
            </div>
          </>
        )}

        <div style={{ marginBottom: "15px", position: "relative" }}>
          <label
            style={{ fontSize: "12px", marginBottom: "5px", display: "block" }}
          >
            Password
          </label>
          <span
            style={{
              position: "absolute",
              top: "36px",
              left: "10px",
              fontSize: "16px",
              color: "#aaa",
            }}
          >
            🔒
          </span>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "10px 10px 10px 30px",
              borderRadius: "5px",
              border: "none",
              backgroundColor: "#35425e",
              color: "#ccc",
              fontSize: "14px",
            }}
          />
        </div>

        {!isRegistering && (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
              fontSize: "12px",
            }}
          >
            <label>
              <input type="checkbox" style={{ marginRight: "5px" }} />
              Remember me
            </label>
            <a href="#" style={{ color: "#00f5f9", textDecoration: "none" }}>
              Forgot your password?
            </a>
          </div>
        )}

        <button
          onClick={handleSubmit}
          style={{
            backgroundColor: "#00f5f9",
            border: "none",
            padding: "10px",
            borderRadius: "5px",
            color: "#1f2a44",
            fontWeight: "bold",
            width: "100%",
            cursor: "pointer",
            marginBottom: "10px",
          }}
        >
          {isRegistering ? "REGISTER" : "LOGIN"}
        </button>

        <button
          onClick={() => setIsRegistering(!isRegistering)}
          style={{
            backgroundColor: "transparent",
            border: "none",
            color: "#00f5f9",
            textDecoration: "underline",
            cursor: "pointer",
            width: "100%",
            fontSize: "12px",
          }}
        >
          {isRegistering
            ? "Already have an account? Sign In"
            : "Don't have an account? Register"}
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
