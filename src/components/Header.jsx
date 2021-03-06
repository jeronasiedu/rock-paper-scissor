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
        className="flex flex-col justify-center px-6 py-4 bg-white rounded shadow-md cursor-pointer select-none "
        {...bind()}
        onClick={() =>
          toast("long press to reset score", {
            id: "prompt",
          })
        }
      >
        <span className="text-xl font-medium uppercase text-score ">Score</span>
        <AnimatePresence key={score} exitBeforeEnter initial={false}>
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
            className="text-5xl font-bold text-center text-dark"
          >
            {score}
          </motion.h3>
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Header
