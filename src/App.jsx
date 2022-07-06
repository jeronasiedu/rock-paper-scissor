import GameBoard from "./components/GameBoard"
import GameModal from "./components/GameModal"
import Header from "./components/Header"

function App() {
  return (
    <main className="  mx-auto space-y-20 py-6  ">
      <Header />
      <GameModal />
      <GameBoard />
    </main>
  )
}

export default App
