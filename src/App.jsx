import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"

function App() {
  const location = useLocation();
  const user = localStorage.getItem("user");



  const isDashboard = location.pathname === "/resources";

  return (
    <> 
  
      <Navbar />
      <Hero />
      <Footer />
    </>
  )
}

export default App;