import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

function App() {
  const [message, setMessage] = useState("예매 서버 연결 확인 중");

  useEffect(() => {
    const request = new AbortController();

    async function checkStatus() {
      try {
        const response = await fetch("/actuator/health", { signal: request.signal });
        if (!response.ok) throw new Error("Health check failed");
        const health = await response.json();
        setMessage(health.status === "UP" ? "예매 서버 연결됨" : "예매 서버 상태 확인 필요");
      } catch {
        if (!request.signal.aborted) setMessage("예매 서버에 연결할 수 없습니다.");
      }
    }

    void checkStatus();
    return () => request.abort();
  }, []);

  return (
    <main>
      <h1>SeatGet</h1>
      <p role="status">{message}</p>
    </main>
  );
}

const root = document.getElementById("root");
if (!root) throw new Error("Missing application root");
createRoot(root).render(<App />);
