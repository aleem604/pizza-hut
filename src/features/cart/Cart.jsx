import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import Button from './../../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from './cartSlice';

function Cart() {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.username);
  const cart = useSelector((state) => state.cart.cart);

  return (
    <div className="px-4 py-3">
      <Link to="/menu" className="text-sm hover:text-blue-800 hover:underline">
        &larr; Back to menu
      </Link>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {userName}</h2>
      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>
      <div className="flex space-x-2 py-3">
        <Button type="primary" to="/order/new">
          Order pizzas
        </Button>
        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
