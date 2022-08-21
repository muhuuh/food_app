import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import React, { useContext } from "react";
import CartContext from "../../store/cart_context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `${cartCtx.totalAmount.toFixed(2)} €`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddandler = (item) => {
    cartCtx.addItem({...item, amount:1});
    console.log("clicked");
  };

  const cartItems = (
    <div className="overflow-y-scroll max-h-80">
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onCartItemRemove={cartItemRemoveHandler.bind(null, item.id)}
          onCartItemAdd={cartItemAddandler.bind(null, item)}
        />
      ))}
    </div>
  );

  return (
    <Modal onCloseCart={props.onCloseCart}>
      <div className="">
        <div className="flex flex-col rounded-lg  p-12 gap-y-8 ">
          {cartItems}
          <div className="flex justify-between">
            <div>teest</div>
            <div>{cartCtx.items[0].name}</div>
            <span className="font-bold">Total Amount</span>
            <span className="font-bold"> {totalAmount}</span>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="border-2 border-brownRed text-brownRed rounded-full px-4 mr-6"
              onClick={props.onCloseCart}
            >
              Close
            </button>
            {hasItems && (
              <button
                type="submit"
                className="bg-brownRed text-white rounded-full px-4"
              >
                Order
              </button>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
