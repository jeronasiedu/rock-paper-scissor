import Player from "./Player"
import { motion } from "framer-motion"
import { useGameState } from "../utils/useGameState"
const GameIntro = () => {
  const players = ["spock", "rock", "scissors", "paper", "lizard"]
  const { openModal } = useGameState()
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: 1.5,
        },
      }}
      className="bg-pentagon  relative select-none  lg:mb-8  "
    >
      <img src="/images/bg-pentagon.svg" alt="board image" />
      {players.map((player, index) => (
        <Player player={player} key={index} />
      ))}
      <button
        className="modal-toggle absolute top-1/2 left-1/2 md:hidden -translate-x-1/2 -translate-y-1/2"
        onClick={openModal}
      >
        rules
      </button>
    </motion.div>
  )
}

export default GameIntro
