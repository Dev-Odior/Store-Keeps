import { useGlobalContext } from '../../context/AppContext'
import './Header.css'

const Header = () => {
  const { state } = useGlobalContext()

  return (
    <section className="header_section">
      <div className="right">
        <p>Welcome back</p>
        <p>Seth</p>
      </div>
      <div className="left">
        <p>Total Sales</p>
        <p>{`As of today`}</p>
        <p>Total: ${state.grandTotal}</p>
      </div>
    </section>
  )
}

export default Header
