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
          className="flex items-center justify-around w-full gap-4"
        >
          <div
            className={`space-y-6  flex flex-col items-center w-48  h-48 rounded-full ${
              results === "won" && countdown.isInactive && "winner "
            }`}
          >
            <h3 className="text-lg font-medium text-white uppercase">
              You Picked
            </h3>
            <Player player={currentPlayer} />
          </div>
          {countdown.isInactive && (
            <div className="flex flex-col items-center space-y-6">
              <h2 className="text-4xl font-medium text-white uppercase">
                You {results}
              </h2>
              <button
                className="px-10 py-2 font-medium uppercase transition-colors duration-300 bg-white rounded-md focus:outline-none animate-bounce hover:bg-slate-300 focus:ring text-dark"
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
                className="flex items-center justify-center translate-y-4 bg-opacity-50 rounded-full w-36 h-36 bg-dark"
              >
                <h3 className="text-lg font-medium text-white uppercase animate-bounce">
                  Thinking...
                </h3>
              </motion.div>
            ) : (
              <div
                className={`space-y-6 flex flex-col items-center w-48  h-48 rounded-full ${
                  results === "lose" && "winner"
                }`}
              >
                <h3 className="text-lg font-medium text-white uppercase">
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
              <h3 className="text-lg font-medium text-white uppercase">
                You Picked
              </h3>
            </div>
            {countdown.isActive ? (
              <div className="flex items-center justify-center -translate-y-4 bg-opacity-50 rounded-full w-36 h-36 bg-dark">
                <h3 className="text-lg font-medium text-white uppercase animate-bounce">
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
                <h3 className="text-lg font-medium text-white uppercase">
                  The house picked
                </h3>
              </div>
            )}
          </div>
          {countdown.isInactive && (
            <div className="flex flex-col items-center space-y-4">
              <h2 className="text-5xl font-medium text-white uppercase ">
                You {results}
              </h2>
              <button
                className="px-10 py-2 font-medium uppercase transition-colors duration-300 bg-white rounded-md focus:outline-none hover:bg-slate-300 animate-bounce focus:ring text-dark"
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
