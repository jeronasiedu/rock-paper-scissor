import { useGameState } from "../utils/useGameState"
import { motion, AnimatePresence } from "framer-motion"
import { useLongPress } from "use-long-press"
import toast from "react-hot-toast"
const Header = () => {
  const { score, setScore } = useGameState()
  const bind = useLongPress(
    () => {
      toast.error("Resetting score")
    },
    {
      onFinish: () => {
        setScore(0)
        toast.success("Score Reset Successfully")
      },
    }
  )
  return (
    <header className="flex pl-6 p-3 w-[85%] ring ring-header rounded-md max-w-xl mx-auto justify-between items-center ">
      <img src="/images/logo-bonus.svg" alt="logo" className="w-24" />
      <div
        className="px-6 py-4 bg-white rounded shadow-md select-none cursor-pointer   flex flex-col justify-center "
        {...bind()}
      >
        <span className="text-score text-xl uppercase font-medium ">Score</span>
        <AnimatePresence key={score} exitBeforeEnter>
          <motion.h3
            initial={{
              scaleX: 0,
              opacity: 0,
            }}
            animate={{
              scaleX: 1,
              opacity: 1,
            }}
            exit={{
              opacity: 0,
              scaleX: 1,
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
