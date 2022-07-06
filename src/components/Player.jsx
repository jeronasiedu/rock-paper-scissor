import { motion } from "framer-motion"
import { useGameState } from "../utils/useGameState"
function Player({ player }) {
  const { startGame, isPlaying } = useGameState()

  const size = !isPlaying
    ? "w-24 h-24 md:w-28 md:h-28"
    : "w-32 h-32 md:w-36 md:h-36"
  const imageSize = !isPlaying ? "w-8 md:w-12" : "w-12 md:w-14"
  const positions = {
    rock: isPlaying ? "" : "absolute top-[5rem] left-[-1.5rem]",
    paper: isPlaying ? "" : "absolute top-[5rem] right-[-1.5rem]",
    scissors: isPlaying ? "" : "absolute top-[-2.5rem] left-[6.8rem] ",
    spock: isPlaying ? "" : "absolute bottom-[-2rem] left-[2rem] ",
    lizard: isPlaying ? "" : "absolute bottom-[-2rem] right-[2rem] ",
  }

  const playerImages = {
    rock: "/images/icon-rock.svg",
    scissors: "/images/icon-scissors.svg",
    spock: "/images/icon-spock.svg",
    lizard: "/images/icon-lizard.svg",
    paper: "/images/icon-paper.svg",
  }
  const options = ["rock", "paper", "scissors", "lizard", "spock"]
  const randomChoice = options[Math.floor(Math.random() * options.length)]
  const handleGameStart = () => {
    if (isPlaying) return
    startGame(player, randomChoice)
  }
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
      }}
      whileTap={{
        scaleX: 0.9,
      }}
      onClick={handleGameStart}
      className={` ${size} rounded-full bg-white flex  items-center justify-center cursor-pointer ${player}-box_shadow border-[0.65rem] ${positions[player]} select-none `}
    >
      <img
        src={playerImages[player]}
        alt="player icon"
        className={`${imageSize}`}
      />
    </motion.div>
  )
}
export default Player
