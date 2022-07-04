import { useContext, createContext, useState } from "react"
import { useLocalStorage } from "./hooks"
const gameContext = createContext()
export const GameProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentPlayer, setCurrentPlayer] = useState("")
  const [computerChoice, setComputerChoice] = useState("")
  const [results, setResults] = useState("")
  const [score, setScore] = useLocalStorage("rock-paper-scissors-score", 0)

  const startGame = (yourChoice, houseChoice) => {
    setIsPlaying(true)
    setComputerChoice(houseChoice)
    setCurrentPlayer(yourChoice)
    const timer = setTimeout(() => {
      const resultsState = getWinner(yourChoice, houseChoice)
      setResults(resultsState)
    }, 3100)
  }

  const getWinner = (yourChoice, houseChoice) => {
    if (yourChoice === houseChoice) {
      return "drew"
    }
    if (yourChoice === "scissors" && houseChoice === "paper") {
      setScore(score + 1)
      return "won"
    } else if (yourChoice === "paper" && houseChoice === "rock") {
      setScore(score + 1)
      return "won"
    } else if (yourChoice === "lizard" && houseChoice === "spock") {
      setScore(score + 1)
      return "won"
    } else if (yourChoice === "spock" && houseChoice === "scissors") {
      setScore(score + 1)
      return "won"
    } else if (yourChoice === "scissors" && houseChoice === "lizard") {
      setScore(score + 1)
      return "won"
    } else if (yourChoice === "paper" && houseChoice === "spock") {
      setScore(score + 1)
      return "won"
    } else if (yourChoice === "rock" && houseChoice === "scissors") {
      setScore(score + 1)
      return "won"
    } else if (yourChoice === "lizard" && houseChoice === "paper") {
      setScore(score + 1)
      return "won"
    } else if (yourChoice === "spock" && houseChoice === "rock") {
      setScore(score + 1)
      return "won"
    } else {
      setScore(score - 1)
      return "lose"
    }
  }

  const replayGame = () => {
    setIsPlaying(false)
    setResults("")
  }
  return (
    <gameContext.Provider
      value={{
        isPlaying,
        setIsPlaying,
        startGame,
        currentPlayer,
        setCurrentPlayer,
        replayGame,
        computerChoice,
        results,
        score,
      }}
    >
      {children}
    </gameContext.Provider>
  )
}
export const useGameState = () => useContext(gameContext)
