const FormInput = ({ value, onChangeHandler, name, error, type, placeholder }) => {
  return (
    <input
      className={`form_input ${error && 'error'}`}
      value={value}
      onChange={onChangeHandler}
      name={name}
      type={type}
      placeholder={placeholder}
    />
  )
}

export default FormInput
