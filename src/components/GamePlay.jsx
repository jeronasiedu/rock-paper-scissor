import useMediaQuery from "../utils/hooks"
import { useGameState } from "../utils/useGameState"
import Player from "./Player"
import { motion, AnimatePresence } from "framer-motion"
import useCountdown from "@bradgarropy/use-countdown"
const GamePlay = ({}) => {
  const { currentPlayer, replayGame, computerChoice, results } = useGameState()
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const countdown = useCountdown({
    seconds: 3,
    format: "ss",
  })
  return (
    <>
      {isDesktop ? (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          className="flex items-center justify-around  gap-4 w-full"
        >
          <div
            className={`space-y-6  flex flex-col items-center w-48  h-48 rounded-full ${
              results === "won" && countdown.isInactive && "winner "
            }`}
          >
            <h3 className="text-lg uppercase font-medium text-white">
              You Picked
            </h3>
            <Player player={currentPlayer} />
          </div>
          {countdown.isInactive && (
            <div className="space-y-6 flex flex-col items-center">
              <h2 className="text-4xl uppercase font-medium text-white">
                You {results}
              </h2>
              <button
                className=" focus:outline-none animate-bounce hover:bg-slate-300 transition-colors duration-300 focus:ring uppercase font-medium text-dark bg-white rounded-md px-10 py-2"
                onClick={() => replayGame()}
              >
                play again
              </button>
            </div>
          )}
          <AnimatePresence exitBeforeEnter>
            {countdown.isActive ? (
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                className="w-36 translate-y-4 h-36 rounded-full bg-dark bg-opacity-50 flex items-center justify-center"
              >
                <h3 className="text-lg uppercase font-medium text-white animate-bounce">
                  Thinking...
                </h3>
              </motion.div>
            ) : (
              <div
                className={`space-y-6 flex flex-col items-center w-48  h-48 rounded-full ${
                  results === "lose" && "winner"
                }`}
              >
                <h3 className="text-lg uppercase font-medium text-white">
                  The house picked
                </h3>
                <Player player={computerChoice} />
              </div>
            )}
          </AnimatePresence>
        </motion.div>
      ) : (
        <div className="flex flex-col items-center w-full space-y-12">
          <div className="flex items-center justify-around w-full">
            <div
              className={`space-y-6 flex flex-col items-center w-48  h-48 rounded-full ${
                results === "won" && countdown.isInactive && "winner "
              }`}
            >
              <Player player={currentPlayer} />
              <h3 className="text-lg uppercase font-medium text-white">
                You Picked
              </h3>
            </div>
            {countdown.isActive ? (
              <div className="w-36 h-36 -translate-y-4 rounded-full bg-dark bg-opacity-50 flex items-center justify-center">
                <h3 className="text-lg uppercase font-medium text-white animate-bounce">
                  Thinking...
                </h3>
              </div>
            ) : (
              <div
                className={`space-y-6 flex flex-col items-center w-48  h-48 rounded-full ${
                  results === "lose" && "winner"
                }`}
              >
                <Player player={computerChoice} />
                <h3 className="text-lg uppercase font-medium text-white">
                  The house picked
                </h3>
              </div>
            )}
          </div>
          {countdown.isInactive && (
            <div className="space-y-4 flex flex-col items-center">
              <h2 className="text-5xl uppercase font-medium text-white ">
                You {results}
              </h2>
              <button
                className=" focus:outline-none hover:bg-slate-300 animate-bounce transition-colors duration-300 focus:ring uppercase font-medium text-dark bg-white rounded-md px-10 py-2"
                onClick={() => replayGame()}
              >
                play again
              </button>
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default GamePlay
