import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import { useSelector, useDispatch } from 'react-redux';
import { calculateTotals } from './features/cart/cartSlice';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);
  useEffect(
    () => {
      dispatch(calculateTotals());
    }, [cartItems, dispatch]// optionally add dispatch to the dependency array to resove ESlint warning
  );
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
