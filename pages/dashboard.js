import { useState } from "react";

export default function Dashboard() {
  const [fileContent, setFileContent] = useState("");
  const [result, setResult] = useState(null);

  const handleFile = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const text = await file.text();
    setFileContent(text);
  };

  const analyzeSentiment = async () => {
    const response = await fetch("/api/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        conversation: fileContent,
      }),
    });

    const data = await response.json();
    setResult(data);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Sentiment Analyzer Dashboard</h1>

      <input
        type="file"
        accept=".txt"
        onChange={handleFile}
      />

      <br />
      <br />

      <button onClick={analyzeSentiment}>
        Analyze
      </button>

      {result && (
        <div style={{ marginTop: "20px" }}>
          <h2>Results</h2>

          <p>
            <b>Overall Sentiment:</b>{" "}
            {result.overallSentiment}
          </p>

          <p>
            <b>Customer Satisfaction:</b>{" "}
            {result.customerSatisfaction}
          </p>

          <p>
            <b>Frustration Level:</b>{" "}
            {result.frustrationLevel}
          </p>

          <p>
            <b>Agent Professionalism:</b>{" "}
            {result.agentProfessionalism}
          </p>

          <p>
            <b>Resolution Probability:</b>{" "}
            {result.resolutionProbability}
          </p>

          <p>
            <b>Summary:</b>
            <br />
            {result.summary}
          </p>
        </div>
      )}
    </div>
  );
}