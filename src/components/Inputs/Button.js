const Button = ({ type, onClickHandler, children }) => {
  return (
    <button type={type} onClick={onClickHandler} className="btn">
      {children}
    </button>
  )
}

export default Button
