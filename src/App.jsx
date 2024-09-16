import { Toaster } from './components';
import MainRoutes from "./router/MainRoutes"
import CartProvider from './context/CartContext';

function App() {

  return (
    <CartProvider>
      <MainRoutes />
      <Toaster />
    </CartProvider>
  )
}

export default App
