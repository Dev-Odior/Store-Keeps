import Categories from '../components/Categories/Categories'
import AddCategories from '../components/Forms/AddCategories'
import Header from '../components/Header/Header'
import { useGlobalContext } from '../context/AppContext'

const Dashboard = () => {
  const { state } = useGlobalContext()
  const { showAddForm } = state

  return (
    <section className="dashboard_section">
      {showAddForm && <AddCategories />}
      <Header />
      <Categories />
    </section>
  )
}
export default Dashboard
