import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'

function App() {
  return (
    <BrowserRouter>
    {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App