import { formatter } from '../utils/formatters';
import { Button, CartDialog } from '../components';
import { MinusIcon, PlusIcon } from '@radix-ui/react-icons'
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useIsOpen } from '../hooks/Index'
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ProductsInCart } from '../components'
import { ShoppingCart } from 'lucide-react'
import { useNavigate } from 'react-router-dom';



const CartPage = () => {
  const navigation = useNavigate()
  const { state, toggle: open } = useIsOpen()
  const { cart, dispatch, validarCheck } = useCart()
  const { auth, toggle } = useAuth()

  const processPayment = async () => {
    if (!auth.token) {
      toggle('dialogOpen')
      return
    } else {
      const response = await validarCheck(auth.token, cart);
      console.log('response', response)
      open('dialogOpen')
    }
  }

  const handleCloseDialog = () => {
    open('dialogOpen')
    navigation('/')
    dispatch({
      type: "CLEAR_CART"
    });
  }

  return (
    <>
      <div className="app-container grid grid-cols-6 gap-4">
        {
          cart.items < 1 ?
            <div className='col-span-6 text-center h-[80vh] lg:h-[70vh] xl:h-[70vh]'>
              <ShoppingCart className='w-16 h-16 mx-auto text-dark-900/80' />
              <h2 className='text-lg text-dark-900/80 my-3'>Tu carrito esta vacio...</h2>
              <Button
                variant="danger"
                size="sm"
                onClick={() => navigation('/')}
                className="px-1"
              >
                Ver productos
              </Button>

            </div>
            :
            <ProductsInCart handleClick={processPayment} />
        }

      </div>


      <CartDialog
        isOpen={state.dialogOpen}
        onClose={handleCloseDialog}
        title="¡Tu compra ha sido recibida con éxito!"
        desc="Nuestras deliciosas pizzas están siendo preparadas con la receta tradicional que tanto te gusta. ¡Muy pronto estarán listas para que las disfrutes!"
      />
    </>
  )
}

export default CartPage