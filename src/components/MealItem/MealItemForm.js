import { useRef, useState } from "react";
import Button from "../UI/Button";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const EnteredAmount = amountInputRef.current.value;
    const EnteredAmountNumber = +EnteredAmount;

    if (EnteredAmount.trim().length < 1 || EnteredAmountNumber > 5) {
      setAmountIsValid(false);
      return;
    }
    setAmountIsValid(true);

    props.onAddToCart(EnteredAmountNumber);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="font-bold mb-4">
        <label htmlFor="" type="number" className="pr-6">
          Amount
        </label>
        <input
          ref={amountInputRef}
          type="number"
          min="1"
          max="10"
          step="1"
          defaultValue="1"
          className="border-2 border-black rounded-lg w-16 text-center"
          // value={EnteredAmount}
        ></input>
      </div>
      <div className="flex justify-center">
        <Button
          label="Add"
          type="submit"
          className="flex bg-brownRed rounded-full w-20 h-8 font-bold justify-center items-center text-white"
          // onClick={}
        />
      </div>
      {!amountIsValid && <p className="text-red-500">the amount is not valid</p>}
    </form>
  );
};

export default MealItemForm;
