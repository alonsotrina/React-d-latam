import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Home from './Home/Home'
// import LoginPage from './Home/LoginPage'
// import RegisterPage from './Home/RegisterPage'
function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    {/* <LoginPage /> */}
    {/* <RegisterPage /> */}
    <Footer copyright="© 2021 - Pizzería Mamma Mia! - Todos los derechos reservados"/>
    </>
  )
}

export default App
