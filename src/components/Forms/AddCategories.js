import React from 'react'
import { useGlobalContext } from '../../context/AppContext'
import Button from '../Inputs/Button'
import FormInput from '../Inputs/FormInput'
import Modal from '../Modal/Modal'

const AddCategories = () => {
  const { state, dispatcher } = useGlobalContext()
  const { addCategories } = state
  const { name, description, formError } = addCategories

  const onChangeHandler = (event) => {
    const { value, name } = event.target
    dispatcher({ type: 'ADDING_CATEGORIES', payLoad: { value, name } })
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    dispatcher({ type: 'ADD_CATEGORY' })
  }

  const closeHandler = () => {
    dispatcher({ type: 'ADD_CATEGORIES' })
  }

  return (
    <>
      <Modal>
        <h5 className="new-category">Add New Category</h5>
        <form onSubmit={onSubmitHandler}>
          <FormInput
            onChangeHandler={onChangeHandler}
            error={formError}
            name="name"
            type="text"
            value={name}
            placeholder="Please enter the name of category....."
          />
          <FormInput
            onChangeHandler={onChangeHandler}
            name="description"
            type="text"
            value={description}
            placeholder="Please enter the description if applicable....."
          />
          <div className="AddCategories_btn">
            <Button onClickHandler={closeHandler}>Cancel</Button>
            <Button onClickHandler={onSubmitHandler}>Add</Button>
          </div>
        </form>
      </Modal>
    </>
  )
}

export default AddCategories
