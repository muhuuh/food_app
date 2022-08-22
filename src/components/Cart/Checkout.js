import useInput from "../../hooks/use-input";

const CheckOut = (props) => {
  const checkText = (input) => {
    return input.trim() !== "";
  };
  const checkPostal = (input) => {
    return input.trim().length === 5;
  };
  const loginResults = useInput(checkText);
  const streetResults = useInput(checkText);
  const postalResults = useInput(checkPostal);
  const cityResults = useInput(checkText);

  let formIsValid = false;

  if (
    loginResults.enteredInputisValid &&
    streetResults.enteredInputisValid &&
    postalResults.enteredInputisValid &&
    cityResults.enteredInputisValid
  ) {
    formIsValid = true;
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    const checkOutValues = {
      login: loginResults.enteredInput,
      street: streetResults.enteredInput,
      postal: postalResults.enteredInput,
      city: cityResults.enteredInput,
    };

    props.onCheckOut(checkOutValues);

    loginResults.resetInput();
    streetResults.resetInput();
    postalResults.resetInput();
    cityResults.resetInput();
  }; 

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="flex flex-row justify-center pt-6 border-t-2 mb-4">
        <div className="mr-6">
          <div className="flex flex-row justify-between mb-4 ">
            <label htmlFor="login" className="mr-4">
              Login
            </label>
            <input
              type="text"
              id="login"
              onChange={loginResults.inputChangeHandler}
              onBlur={loginResults.inputBlurHandler}
              value={loginResults.enteredInput}
              className={`border-2 rounded-lg w-40 ${loginResults.hasError ? "border-red-500" : ""}`}
            />
          </div>
          <div className="flex flex-row justify-between">
            <label htmlFor="street" className="mr-4">
              Street
            </label>
            <input
              type="text"
              id="street"
              onChange={streetResults.inputChangeHandler}
              onBlur={streetResults.inputBlurHandler}
              value={streetResults.enteredInput}
              className={`border-2 rounded-lg w-40 ${streetResults.hasError ? "border-red-500" : ""}`}
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-row justify-between mb-4">
            <label htmlFor="zip" className="mr-4">
              Postal Code
            </label>
            <input
              type="text"
              id="zip"
              onChange={postalResults.inputChangeHandler}
              onBlur={postalResults.inputBlurHandler}
              value={postalResults.enteredInput}
              className={`border-2 rounded-lg w-40 ${postalResults.hasError ? "border-red-500" : ""}`}
            />
          </div>
          <div className="flex flex-row justify-between">
            <label htmlFor="city" className="mr-4">
              City
            </label>
            <input
              type="text"
              id="city"
              onChange={cityResults.inputChangeHandler}
              onBlur={cityResults.inputBlurHandler}
              value={cityResults.enteredInput}
              className={`border-2 rounded-lg w-40 ${cityResults.hasError ? "border-red-500" : ""}`}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          type="button"
          className="border-2 border-brownRed text-brownRed rounded-full px-4 mr-6"
          onClick={props.onCloseCheckOut}
        >
          Go Back
        </button>
        <button
          type="submit"
          className={`text-white rounded-full px-4 ${!formIsValid ? "bg-gray-500" : "bg-brownRed"}`}
          disabled={!formIsValid}
        >
          Confirm
        </button>
      </div>
    </form>
  );
};

export default CheckOut;
