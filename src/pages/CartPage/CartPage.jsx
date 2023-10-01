import React, { useEffect, useState } from "react";
import { CartImages } from "../../Constants/Images";
import FooterShowTotalPrice from "../../components/Footer/Footer";
import HeaderCartPg from "../../components/Header/Header";
import { BoxContainer, ViewCartContainer } from "./CartPageStyle";
import CartComponent from "../../components/Cart/CartComponent";
import { getCartData } from "../../Data/CartDetails/CartData";



function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(JSON.parse(getCartData()))
  }, [])




  return (
    <div>
      <HeaderCartPg />
      {cartItems.map((cart, index) => {
        return (
          <React.Fragment key={index}>
            <CartComponent data={cart}/>
          </React.Fragment>
        )
      })}
      <FooterShowTotalPrice />
    </div>
  );
}

export default CartPage;
