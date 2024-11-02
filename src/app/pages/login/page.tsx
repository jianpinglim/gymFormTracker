"use client";
import React, { useState, CSSProperties } from "react";
import Link from "next/link";

interface LoginProps {
  onLogin: (name: string, age: number) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState<number | "">("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!name || age === "") {
      setError("Please enter both your name and age.");
      return;
    }

    if (typeof age !== "number" || age <= 0) {
      setError("Please enter a valid age.");
      return;
    }

    setError("");
    onLogin(name, age);
  };

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <h1 style={headerStyle} className="font-bold text-2xl">
          Tell us more about you
        </h1>
        <div style={fieldStyle}>
          <label style={labelStyle}>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            style={inputStyle}
          />
        </div>
        <div style={fieldStyle}>
          <label style={labelStyle}>Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(Number(e.target.value) || "")}
            placeholder="Enter your age"
            style={inputStyle}
          />
        </div>
        {error && <p style={errorStyle}>{error}</p>}
        <Link href="/pages/main-menu" className="block mt-[39px]">
          <button onClick={handleLogin} style={buttonStyle}>
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

// Define styles using CSSProperties
const pageStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  backgroundColor: "#ffffff",
};

const containerStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: "350px",
  width: "100%",
  padding: "20px",
  backgroundColor: "#ffffff",
};

const headerStyle: CSSProperties = {
  color: "#673ab7",
  marginBottom: "20px",
};

const fieldStyle: CSSProperties = {
  width: "100%",
  marginBottom: "15px",
  display: "flex",
  flexDirection: "column",
};

const labelStyle: CSSProperties = {
  marginBottom: "5px",
  color: "#673ab7",
  fontWeight: "bold",
  textAlign: "center",
};

const inputStyle: CSSProperties = {
  padding: "10px",
  borderRadius: "4px",
  border: "1px solid #b39ddb",
  outline: "none",
  fontSize: "16px",
};

const errorStyle: CSSProperties = {
  color: "#d32f2f",
  fontSize: "0.9em",
  marginBottom: "10px",
};

const buttonStyle: CSSProperties = {
  padding: "10px 20px",
  backgroundColor: "#512da8",
  color: "#ffffff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "16px",
  transition: "background-color 0.3s",
};

export default Login;
