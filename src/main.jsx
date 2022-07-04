import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { GameProvider } from "./utils/useGameState"
ReactDOM.createRoot(document.getElementById("root")).render(
  <GameProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GameProvider>
)
