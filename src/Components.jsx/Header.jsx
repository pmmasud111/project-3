import { useContext, useState } from "react";
import { MovieContext } from "../App";
import moon from "../assets/icons/moon.svg";
import logo from "../assets/logo.svg";
import ring from "../assets/ring.svg";
import shopping from "../assets/shopping-cart.svg";
import CartDetails from "./Cine/CartDetails";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const { cartData } = useContext(MovieContext);
  const handleShowCart = () => {
    setShowCart(true);
  };
  return (
    <header>
      {showCart && <CartDetails setShowCart={setShowCart} />}
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={logo} width="139" height="26" alt="" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="Logo"
            >
              <img src={ring} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="Ring"
            >
              <img src={moon} width="24" height="24" alt="Moon" />
            </a>
          </li>
          <li>
            <button
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              onClick={handleShowCart}
            >
              <img src={shopping} width="24" height="24" alt="shopping-cart" />
              {cartData.length > 0 && (
                <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12cf6f] text-white flex items-center justify-center p-3 w-7 h-7">
                  {cartData.length}
                </span>
              )}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
