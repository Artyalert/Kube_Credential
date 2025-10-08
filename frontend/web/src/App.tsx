import React from "react";
import IssuePage from "./pages/IssuePage";
import VerifyPage from "./pages/VerifyPage";

export default function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: 24 }}>
      <h1>Kube Credential</h1>
      <div style={{ display: 'flex', gap: 24 }}>
        <div style={{ flex: 1, border: '1px solid #ddd', padding: 12 }}>
          <h2>Issue Credential</h2>
          <IssuePage />
        </div>
        <div style={{ flex: 1, border: '1px solid #ddd', padding: 12 }}>
          <h2>Verify Credential</h2>
          <VerifyPage />
        </div>
      </div>
    </div>
  );
}
