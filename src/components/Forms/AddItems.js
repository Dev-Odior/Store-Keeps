import { useGlobalContext } from '../../context/AppContext'
import Button from '../Inputs/Button'
import FormInput from '../Inputs/FormInput'
import Modal from '../Modal/Modal'

const AddItems = ({ identifier }) => {
  const { dispatcher, state } = useGlobalContext()
  const { addItemInput } = state

  const cancleHandler = () => {
    dispatcher({ type: 'TOGGLE_ADDITEM' })
  }

  const onChangeHandler = (event) => {
    const { value } = event.target
    dispatcher({ type: 'ITEM_INPUT', payLoad: value })
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    dispatcher({ type: 'ADD_ITEM', payLoad: identifier })
  }

  return (
    <Modal>
      <form onSubmit={onSubmitHandler}>
        <FormInput
          type="number"
          value={addItemInput}
          onChangeHandler={onChangeHandler}
          placeholder="Enter the amount...."
        />
        <div className="AddCategories_btn">
          <Button onClickHandler={cancleHandler} type="button">
            Cancel
          </Button>
          <Button>Add</Button>
        </div>
      </form>
    </Modal>
  )
}

export default AddItems
