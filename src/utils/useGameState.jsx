import { useContext, createContext, useState } from "react"
import { useLocalStorage } from "./hooks"
const gameContext = createContext()
export const GameProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentPlayer, setCurrentPlayer] = useState("")
  const [computerChoice, setComputerChoice] = useState("")
  const [results, setResults] = useState("")
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [score, setScore] = useLocalStorage("rock-paper-scissors-score", 0)
  const closeModal = () => setModalIsOpen(false)
  const openModal = () => setModalIsOpen(true)

  // GAME STARTS HERE
  const startGame = (yourChoice, houseChoice) => {
    setIsPlaying(true)
    setComputerChoice(houseChoice)
    setCurrentPlayer(yourChoice)
    const timer = setTimeout(() => {
      const resultsState = getWinner(yourChoice, houseChoice)
      setResults(resultsState)
    }, 3100)
  }
  const increaseScore = () => {
    setScore(score + 1)
  }
  const decreaseScore = () => {
    setScore(score - 1)
  }
  const getWinner = (yourChoice, houseChoice) => {
    if (yourChoice === houseChoice) {
      return "drew"
    }
    if (yourChoice === "scissors" && houseChoice === "paper") {
      return "won"
    } else if (yourChoice === "paper" && houseChoice === "rock") {
      increaseScore()
      return "won"
    } else if (yourChoice === "lizard" && houseChoice === "spock") {
      increaseScore()
      return "won"
    } else if (yourChoice === "spock" && houseChoice === "scissors") {
      increaseScore()
      return "won"
    } else if (yourChoice === "scissors" && houseChoice === "lizard") {
      increaseScore()
      return "won"
    } else if (yourChoice === "paper" && houseChoice === "spock") {
      increaseScore()
      return "won"
    } else if (yourChoice === "rock" && houseChoice === "scissors") {
      increaseScore()
      return "won"
    } else if (yourChoice === "lizard" && houseChoice === "paper") {
      increaseScore()
      return "won"
    } else if (yourChoice === "spock" && houseChoice === "rock") {
      increaseScore()
      return "won"
    } else {
      decreaseScore()
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
        openModal,
        closeModal,
        modalIsOpen,
        setScore,
      }}
    >
      {children}
    </gameContext.Provider>
  )
}
export const useGameState = () => useContext(gameContext)
