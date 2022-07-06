import Modal from "react-modal"
import useMediaQuery from "../utils/hooks"
import { useGameState } from "../utils/useGameState"
const GameModal = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const { modalIsOpen, closeModal } = useGameState()
  return (
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
          <img
            src="/images/image-rules-bonus.svg"
            alt="rules"
            className="mb-6"
          />
          <p className="text-lg text-dark font-bold uppercase">
            Long press on score to reset it
          </p>
        </div>
      ) : (
        <div className="flex flex-col justify-around bg-white p-4 rounded-md w-full  items-center h-full">
          <h3 className="text-2xl text-dark">RULES</h3>
          <img src="/images/image-rules-bonus.svg" alt="rules" />
          <p className="text-lg text-dark font-bold uppercase">
            Long press on score to reset it
          </p>
          <button
            className="grid place-items-center p-3 rounded wobble w bg-slate-100"
            onClick={() => closeModal()}
          >
            <img src="/images/icon-close.svg" alt="close icon" />
          </button>
        </div>
      )}
    </Modal>
  )
}

export default GameModal
