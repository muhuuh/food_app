const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <div className="flex flex-row justify-between border-b-2 border-b-brownRed p-2 mb-6">
      <div className="w-1/3">
        <div className="mb-2 font-bold">{props.name}</div>
        <div className="flex flex-row justify-between">
          <div>{price}</div>
          <div>x {props.amount}</div>
        </div>
      </div>
      <div className="flex flex-row w-1/3 justify-end gap-x-4 items-center text-center">
        <button onClick={props.onCartItemRemove} className="border-2 border-brownRed text-black rounded-lg px-4">-</button>
        <button onClick={props.onCartItemAdd} className="border-2 border-brownRed text-black rounded-lg px-4">+</button>
      </div>
    </div>
  );
};

export default CartItem;
