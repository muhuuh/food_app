import { useContext } from "react";
import CartContext from "../../store/cart_context";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = ` ${props.price.toFixed(2)} €`;

  const addAmountToCartHandler = (amount) => {
    const item = {
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount,
    };
    cartCtx.addItem(item);
  };

  return (
    <div className="flex flex-row justify-between pb-4 border-b-2 border-black">
      <li className="flex flex-col gap-y-2">
        <div className="font-bold text-lg">{props.name}</div>
        <div className="italic">{props.description}</div>
        <div className="font-bold text-brownRed">{price}</div>
      </li>
      <MealItemForm onAddToCart={addAmountToCartHandler} />
    </div>
  );
};

export default MealItem;
