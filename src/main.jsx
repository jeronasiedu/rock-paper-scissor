import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { GameProvider } from "./utils/useGameState"
import toast, { Toaster } from "react-hot-toast"
import { registerSW } from "virtual:pwa-register"
import "@fontsource/barlow-semi-condensed"
import "@fontsource/barlow-semi-condensed/500.css"
import "@fontsource/barlow-semi-condensed/600.css"
import "@fontsource/barlow-semi-condensed/700.css"
ReactDOM.createRoot(document.getElementById("root")).render(
  <GameProvider>
    <React.StrictMode>
      <Toaster />
      <App />
    </React.StrictMode>
  </GameProvider>
)
const updateSW = registerSW({
  onOfflineReady() {
    toast.success("Game ready to work offline")
  },
})
