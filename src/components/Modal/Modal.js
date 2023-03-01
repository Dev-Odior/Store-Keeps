import { useGlobalContext } from '../../context/AppContext'

const Modal = ({ children }) => {
  const dispatch = useGlobalContext().dispatcher
  const closeHandler = () => {
    dispatch({ type: 'ADD_CATEGORIES' })
  }
  return (
    <>
      <div className="backdrop" onClick={closeHandler} />
      <div className="modal">{children}</div>
    </>
  )
}

export default Modal
