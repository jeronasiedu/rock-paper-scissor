import { useState } from "react"
import { useGameState } from "../utils/useGameState"
import GameIntro from "./GameIntro"
import GamePlay from "./GamePlay"
const Game = () => {
  const { isPlaying } = useGameState()
  return (
    <section className="max-w-4xl mx-auto flex justify-center relative ">
      {isPlaying ? <GamePlay /> : <GameIntro />}
      <button className="px-5 py-2 uppercase border text-white focus:outline-none focus:ring border-gray-300 hover:bg-white hover:text-dark transition-colors duration-500  fixed rounded-md bottom-8 md:right-16 md:bottom-14 focus:ring-teal-300">
        rules
      </button>
    </section>
  )
}

export default Game
