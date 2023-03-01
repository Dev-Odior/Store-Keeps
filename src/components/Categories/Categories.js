import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../context/AppContext'
import NoItem from '../NoItem/NoItem'
import Category from './Category'

const Categories = () => {
  const { state, dispatcher } = useGlobalContext()
  const { category } = state

  const onClickHandler = () => {
    dispatcher({ type: 'ADD_CATEGORIES' })
  }

  return (
    <section className="categories_section">
      <div className="categories_header">
        <p>Store Categories</p>
        <p onClick={onClickHandler}> -- Add Categories --</p>
      </div>

      {category.length === 0 ? (
        <NoItem message="categories" />
      ) : (
        <div className="categories">
          {category.map((each) => {
            return <Category data={each} key={each.id} />
          })}
        </div>
      )}
    </section>
  )
}

export default Categories
