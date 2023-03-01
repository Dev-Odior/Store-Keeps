import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../context/AppContext'

const Category = ({ data }) => {
  const { dispatcher } = useGlobalContext()
  const { total, name, description, id } = data

  const removeHandler = () => {
    dispatcher({ type: 'REMOVE_CATEGORY', payLoad: id })
  }

  return (
    <div className="category">
      <div className="info">
        <h3>{name.toUpperCase()}</h3>
        {description.trim() < 0 ? (
          ''
        ) : (
          <p className="description">
            <em>{description}</em>
          </p>
        )}

        <p>TOTAL: ${total}</p>
      </div>
      <div className="category-action">
        <span onClick={removeHandler}>remove</span>
        <Link to={`categories/${name}`}>
          <span className="plus">+</span>
        </Link>
      </div>
    </div>
  )
}

export default Category
