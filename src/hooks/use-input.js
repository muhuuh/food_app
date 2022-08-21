import { useState } from "react";

const useInput = (validityCheck) => {
  const [enteredInput, setEnteredInput] = useState("");
  const [enteredInputBlur, setEnteredInputBlur] = useState(false);

  const inputChangeHandler = (event) => {
    setEnteredInput(event.target.value); 
  };

  const inputBlurHandler = () => {
    setEnteredInputBlur(true);
  };

  const enteredInputisValid = validityCheck(enteredInput);
  const hasError = !enteredInputisValid && enteredInputBlur;

  const resetInput = () => {
    setEnteredInput('');
    setEnteredInputBlur(false);
  }

  return {
    enteredInput: enteredInput,
    enteredInputisValid: enteredInputisValid,
    hasError: hasError,
    inputChangeHandler: inputChangeHandler,
    inputBlurHandler: inputBlurHandler,
    resetInput: resetInput,
  };
};

export default useInput;
