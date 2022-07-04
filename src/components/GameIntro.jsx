import Player from "./Player"
import { motion } from "framer-motion"
const GameIntro = () => {
  const players = ["spock", "rock", "scissors", "paper", "lizard"]
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
    </motion.div>
  )
}

export default GameIntro
