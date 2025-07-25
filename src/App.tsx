import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import MenuDetail from './pages/MenuDetail'
import ChefDetail from './pages/ChefDetail'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/menu/:id" element={<MenuDetail />} />
          <Route path="/chef/:id" element={<ChefDetail />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App