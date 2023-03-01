import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import ItemsHeader from '../components/ItemsHeader/ItemsHeader'
import { useGlobalContext } from '../context/AppContext'
import Item from '../components/Item/item'
import AddItems from '../components/Forms/AddItems'
import NoItem from '../components/NoItem/NoItem'

const SingleCategory = () => {
  const { state, dispatcher } = useGlobalContext()
  const { category, showAddItem } = state
  const { categoryId } = useParams()

  const singleCategory = category.find((cart) => {
    return cart.name === categoryId
  })

  const { name, id, total, items } = singleCategory

  console.log(items)

  useEffect(() => {
    dispatcher({ type: 'ITEM_TOTAL', payLoad: id })
  }, [items])

  const addFormOpener = () => {
    dispatcher({ type: 'TOGGLE_ADDITEM' })
  }

  const clearHandler = () => {
    dispatcher({ type: 'CLEAR_HANDLER', payLoad: id })
  }

  return (
    <section className="single_category">
      {showAddItem && <AddItems identifier={id} />}
      <h3>Manage records for {name.toUpperCase()}</h3>

      <div className="single_category_header">
        <div className="right_side">
          <p>Total: ${total}</p>
          <button type="button" className="button" onClick={addFormOpener}>
            Create New Record
          </button>
        </div>

        <div className="left_side">
          <p onClick={clearHandler} className="clear">
            Clear All
          </p>
          <Link to="/">
            <button type="button" className="button">
              Go Back
            </button>
          </Link>
        </div>
      </div>
      {items.length === 0 ? (
        <NoItem message="items" />
      ) : (
        <div className="items_wrapper">
          <ItemsHeader />
          {items.map((item, index) => {
            const identity = id
            return <Item key={index} data={{ item, index, identity }} />
          })}
        </div>
      )}
    </section>
  )
}

export default SingleCategory
