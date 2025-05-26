"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [answeredYes, setAnsweredYes] = useState(false);
  const [showNoMessage, setShowNoMessage] = useState(false);

  return (
    <div style={{
      minHeight: "100vh",
      background: answeredYes
        ? "linear-gradient(135deg, #f9d423 0%, #ff4e50 100%)"
        : "linear-gradient(135deg, #43cea2 0%, #185a9d 100%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "2vw",
    }}>
      <style>
        {`
          @media (max-width: 600px) {
            .proposal-box {
              padding: 6vw !important;
              border-radius: 6vw !important;
              width: 95vw !important;
            }
            .proposal-title {
              font-size: 1.3rem !important;
            }
            .love-title {
              font-size: 2rem !important;
            }
          }
        `}
      </style>
      {answeredYes ? (
        <>
          <h1
            className="love-title"
            style={{
              fontSize: "3rem",
              color: "#fff",
              textShadow: "2px 2px #ff4e50",
              textAlign: "center",
              margin: 0,
            }}
          >
            I LOVEEE YOU BUBUUUUUUUUUUUUUUU 💖💍
          </h1>
          <div style={{ width: "90vw", maxWidth: 350, marginTop: 30 }}>
            <Image
              src="https://media.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif"
              alt="Love"
              width={350}
              height={350}
              style={{ width: "100%", height: "auto", borderRadius: 20 }}
            />
          </div>
        </>
      ) : (
        <div
          className="proposal-box"
          style={{
            background: "#fff",
            padding: 40,
            borderRadius: 20,
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: 400,
            maxWidth: "95vw",
          }}
        >
          <h2
            className="proposal-title"
            style={{
              color: "#185a9d",
              marginBottom: 20,
              fontSize: "2rem",
              textAlign: "center",
            }}
          >
            💬 Will you marry me, Bubu?
          </h2>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap", justifyContent: "center" }}>
            <button
              style={{
                padding: "10px 30px",
                fontSize: "1.2rem",
                background: "#43cea2",
                color: "#fff",
                border: "none",
                borderRadius: 10,
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(67,206,162,0.2)",
                minWidth: 100,
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
                boxShadow: "0 2px 8px rgba(255,78,80,0.2)",
                minWidth: 100,
              }}
              onClick={() => setShowNoMessage(true)}
            >
              No
            </button>
          </div>
          {showNoMessage && (
            <p style={{ color: "#ff4e50", marginTop: 20, fontWeight: "bold", textAlign: "center" }}>
              Please click &quot;Yes&quot; Bubu! 🥺💖
            </p>
          )}
        </div>
      )}
    </div>
  );
}