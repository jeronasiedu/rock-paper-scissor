import { useGameState } from "../utils/useGameState"
import { motion, AnimatePresence } from "framer-motion"
import { useLongPress } from "use-long-press"
import toast from "react-hot-toast"
const Header = () => {
  const { score, setScore } = useGameState()
  const bind = useLongPress(() => {
    setScore(0)
    toast.success("Score Reset Successful")
  })
  return (
    <header className="flex pl-6 p-3 w-[85%] ring ring-header rounded-md max-w-xl mx-auto justify-between items-center ">
      <img src="/images/logo-bonus.svg" alt="logo" className="w-24" />
      <div
        className="px-6 py-4 bg-white rounded shadow-md select-none cursor-pointer   flex flex-col justify-center "
        {...bind()}
        onClick={() => toast.success("long press to reset score")}
      >
        <span className="text-score text-xl uppercase font-medium ">Score</span>
        <AnimatePresence key={score} exitBeforeEnter>
          <motion.h3
            initial={{
              opacity: 0,
              y: 60,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -60,
            }}
            transition={{
              duration: 0.4,
            }}
            className="text-5xl font-bold text-dark text-center"
          >
            {score}
          </motion.h3>
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Header
