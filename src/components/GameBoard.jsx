import { useGameState } from "../utils/useGameState"
import GameIntro from "./GameIntro"
import GamePlay from "./GamePlay"

const Game = () => {
  const { isPlaying, openModal } = useGameState()

  return (
    <section className="max-w-4xl mx-auto flex justify-center relative ">
      {isPlaying ? <GamePlay /> : <GameIntro />}
      <button
        className="modal-toggle fixed right-8 bottom-8 hidden md:block"
        onClick={() => openModal()}
      >
        rules
      </button>
    </section>
  )
}

export default Game
