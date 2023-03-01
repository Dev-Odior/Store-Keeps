import { useGlobalContext } from '../../context/AppContext'
import Items from '../Items/Items'

const Item = ({ data }) => {
  const { dispatcher } = useGlobalContext()
  const { item, index, identity } = data
  const { amount, id } = item

  const deleteHandler = () => {
    dispatcher({ type: 'DELETE', payLoad: { id, identity } })
  }

  const onEditHandler = () => {
    dispatcher({ type: 'EDIT', payLoad: { id, identity } })
  }

  return (
    <Items>
      <p>{index + 1}</p>
      <p className="green">+{amount}</p>
      <div className="action">
        <p onClick={onEditHandler}>Edit</p>
        <p onClick={deleteHandler}>Del</p>
      </div>
    </Items>
  )
}

export default Item
