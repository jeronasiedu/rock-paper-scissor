import { useState } from "react"
import { useGameState } from "../utils/useGameState"
import GameIntro from "./GameIntro"
import GamePlay from "./GamePlay"
import Modal from "react-modal"
import useMediaQuery from "../utils/hooks"
const Game = () => {
  const { isPlaying, modalIsOpen, openModal, closeModal } = useGameState()
  const isDesktop = useMediaQuery("(min-width: 768px)")
  return (
    <section className="max-w-4xl mx-auto flex justify-center relative ">
      {isPlaying ? <GamePlay /> : <GameIntro />}
      <button
        className="px-5 py-2 uppercase border text-white focus:outline-none focus:ring border-gray-300 hover:bg-white hover:text-dark transition-colors duration-500  fixed rounded-md bottom-8 md:right-16 md:bottom-14 focus:ring-teal-300"
        onClick={() => openModal()}
      >
        rules
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="modal-overlay"
      >
        {isDesktop ? (
          <div className="bg-white p-4 rounded-md w-full flex flex-col items-center h-full justify-center">
            <div className="flex justify-between items-center w-full">
              <h3 className="text-2xl text-dark">RULES</h3>
              <button
                className="grid place-items-center p-2 w"
                onClick={() => closeModal()}
              >
                <img src="/images/icon-close.svg" alt="close icon" />
              </button>
            </div>
            <img src="/images/image-rules-bonus.svg" alt="rules" />
          </div>
        ) : (
          <div className="flex flex-col justify-around bg-white p-4 rounded-md w-full  items-center h-full">
            <h3 className="text-2xl text-dark">RULES</h3>
            <img src="/images/image-rules-bonus.svg" alt="rules" />
            <button
              className="grid place-items-center p-2 w"
              onClick={() => closeModal()}
            >
              <img src="/images/icon-close.svg" alt="close icon" />
            </button>
          </div>
        )}
      </Modal>
    </section>
  )
}

export default Game
