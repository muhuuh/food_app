import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CheckOut from "./Checkout";
import React, { useContext, useState } from "react";
import CartContext from "../../store/cart_context";
import UseHttp from "../../hooks/use-http";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [onOrder, setOnOrder] = useState(false);
  const [orders, setOrders] = useState([]);
  const { isLoading, error, sendRequest: postMenu } = UseHttp();

  const totalAmount = `${cartCtx.totalAmount.toFixed(2)} €`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
    console.log("clicked");
  };
 
  const onOrderHandler = () => {
    setOnOrder(true);
  };

  const onCloseCheckOutHandler = () => {
    setOnOrder(false);
  };

  const onCheckOutHandler = async (checkOutInfo) => {
    const postConfig = {
      url: "https://react-udemy-movie-e7f18-default-rtdb.europe-west1.firebasedatabase.app/menu.json",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: {
        login: checkOutInfo.login,
        street: checkOutInfo.street,
        postal: checkOutInfo.postal,
        city: checkOutInfo.city,
        totalAmount: cartCtx.totalAmount,
        items: cartCtx.items,
        
      },
    };

    const transformDataPost = (data) => {
      const generatedId = data.name; // firebase-specific => "name" contains generated id
      const createdOrder = { id: generatedId, login: checkOutInfo.login };

      let totalOrders = orders;
      totalOrders.push(createdOrder);
      setOrders(totalOrders);
    };

    postMenu(postConfig, transformDataPost);
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

  const orderButton = (
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
          onClick={onOrderHandler}
        >
          Order
        </button>
      )}
    </div>
  );

  return (
    <Modal onCloseCart={props.onCloseCart}>
      <div className="">
        <div className="flex flex-col rounded-lg  p-12 gap-y-8 ">
          {cartItems}
          <div className="flex justify-between">
            <div>{cartCtx.items[0].name}</div>
            <span className="font-bold">Total Amount</span>
            <span className="font-bold"> {totalAmount}</span>
          </div>
          {onOrder && (
            <CheckOut
              onCheckOut={onCheckOutHandler}
              onCloseCheckOut={onCloseCheckOutHandler}
            />
          )}
          {!onOrder && orderButton}
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
