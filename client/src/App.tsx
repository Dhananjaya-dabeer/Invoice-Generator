import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import RegisterPage from './pages/RegisterPage'
import ProductListPage from './pages/ProductListPage'
import UserCotextProvider from './context/UserCotextProvider'

function App() {
  

  return (
    <UserCotextProvider>
      <Router>
     <Routes>
      <Route element={<RegisterPage/>} path={'/'}/>
      <Route element={<ProductListPage/>} path={'/products'}/>
     </Routes>
    </Router>
    </UserCotextProvider>
  )
}

export default App
