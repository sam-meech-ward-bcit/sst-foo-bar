import { useState } from "react";
import "./App.css";
import { hc } from 'hono/client'
import { type RouteType } from "../../functions/src/lambda";

const client = hc<RouteType>(import.meta.env.VITE_APP_API_URL)

function App() {
  const [message, setMessage] = useState("Hi 👋");

  async function onClick() {
    const result = await client.index.$get()
    const json = await result.json();
    setMessage(json.message);
  }

  return (
    <div className="App">
      <div className="card">
        <button onClick={onClick}>
          Message is "<i>{message}</i>"
        </button>
      </div>
    </div>
  );
}

export default App;
