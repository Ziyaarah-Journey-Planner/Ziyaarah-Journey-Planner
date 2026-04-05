import Header from './Layout/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Footer from './Layout/Footer';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';            
import './App.css'

function App() {
 

  return (
    <div>
      <Header />
      <Router>
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
