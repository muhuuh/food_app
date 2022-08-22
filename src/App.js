import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

const App = () => {
  const [visible, setVisible] = useState(false);

  const cartVisibleHandler = () => {
    setVisible(true);
  };

  const cartHIdeHandler = () => { 
    setVisible(false); 
  };

  return (
    <div className="container mx-auto pb-32">
      <CartProvider>
      <Header onShowCart={cartVisibleHandler} className="" />
      <main>
        <Meals className="" />
        {visible && <Cart onCloseCart={cartHIdeHandler} className="" />}
      </main>
      </CartProvider>
    </div>
  );
};

export default App;
