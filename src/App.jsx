import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import './App.css';

function App() {
  return (
    <Router>
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
