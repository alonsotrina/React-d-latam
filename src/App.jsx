import { Navbar,Footer, Toaster } from './components';
import MainRoutes from "./router/MainRoutes"
import CartProvider from './context/CartContext';

function App() {

  return (
    <CartProvider>
      <Navbar />
      <MainRoutes />
      <Footer copyright="© 2021 - Pizzería Mamma Mia! - Todos los derechos reservados" />
      <Toaster />
    </CartProvider>
  )
}

export default App
