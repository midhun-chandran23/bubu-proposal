"use client";
import React, { useState } from "react";

export default function Home() {
  const [answeredYes, setAnsweredYes] = useState(false);
  const [showNoMessage, setShowNoMessage] = useState(false);

  if (answeredYes) {
    return (
      <div style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f9d423 0%, #ff4e50 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <h1 style={{ fontSize: "3rem", color: "#fff", textShadow: "2px 2px #ff4e50" }}>
          I LOVEEE YOU BUBUUUUUUUUUUUUUUU 💖💍
        </h1>
        <img src="https://media.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif" alt="Love" style={{ width: 300, marginTop: 30, borderRadius: 20 }} />
      </div>
    );
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #43cea2 0%, #185a9d 100%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <div style={{
        background: "#fff",
        padding: 40,
        borderRadius: 20,
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <h2 style={{ color: "#185a9d", marginBottom: 20 }}>💬 Will you marry me, Bubu?</h2>
        <div style={{ display: "flex", gap: 20 }}>
          <button
            style={{
              padding: "10px 30px",
              fontSize: "1.2rem",
              background: "#43cea2",
              color: "#fff",
              border: "none",
              borderRadius: 10,
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(67,206,162,0.2)"
            }}
            onClick={() => setAnsweredYes(true)}
          >
            Yes
          </button>
          <button
            style={{
              padding: "10px 30px",
              fontSize: "1.2rem",
              background: "#ff4e50",
              color: "#fff",
              border: "none",
              borderRadius: 10,
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(255,78,80,0.2)"
            }}
            onClick={() => setShowNoMessage(true)}
          >
            No
          </button>
        </div>
        {showNoMessage && (
          <p style={{ color: "#ff4e50", marginTop: 20, fontWeight: "bold" }}>
            Please click "Yes" Bubu! 🥺💖
          </p>
        )}
      </div>
    </div>
  );
}