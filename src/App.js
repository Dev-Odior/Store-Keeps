import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import SingleCategory from './pages/SingleCategory'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="/categories">
          <Route path="/categories/:categoryId" element={<SingleCategory />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
