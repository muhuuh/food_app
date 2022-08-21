import React from "react";
import mealsImage from "../../assets/meals_2.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {

  return (
    <React.Fragment>
      <header className="flex z-10 justify-around items-center h-24 bg-brownRed fixed top-0 left-0 right-0">
        <div className="font-bold text-3xl text-white">CG HomePage</div>
        <HeaderCartButton
          type="submit"
          id="cart_button"
          label="Cart Button"
          className="font-bold px-28 py-2 "
          onClick={props.onShowCart}
        ></HeaderCartButton>
      </header>
      <div className="z-0 overflow-hidden">
        <img
          className="object-cover w-full h-hull -rotate-5 -translate-x-4 -translate-y-16"
          src={mealsImage}
          alt="meal_image"
        />
      </div>
    </React.Fragment>
  );
};

export default Header;
