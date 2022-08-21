import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart_context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [btnBump, setbtnBump] = useState(false);

  //incremental amount to get total amount by adding the respective amount of each item object respectively
  const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  const buttonClass = `${
    btnBump ? classes.bump : ""
  } flex items-center rounded-full  bg-brown hover:bg-darkBrown font-bold px-16 py-2`;
  const { items } = cartCtx;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setbtnBump(true);
    //reset the state to false after 300ms, such that the bump can again work after the first time
    const timer = setTimeout(() => {
      setbtnBump(false);
    }, 300);

    //clearing timeout
    return () => {
      clearTimeout(timer);
    }
  }, [items]);

  return (
    <button
      className={buttonClass}
      type={props.type}
      id={props.id}
      onClick={props.onClick}
      onBlur={props.onBlur}
    >
      <span className="flex text-white w-6 h-6 mr-6">
        <CartIcon />
      </span>
      <span className="flex text-white items-center">Your Cart</span>
      <span className="flex text-white items-center justify-center bg-darkRed ml-6 rounded-full w-6 h-6 p-4">
        {numberOfCartItems}
      </span>
    </button>
  );
};

export default HeaderCartButton;
