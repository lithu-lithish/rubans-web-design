import { TotalPrice } from "../../pages/HomePage/HomePage";
import { TotalPriceCartPgStyle } from "./FooterStyled";

export default function FooterShowTotalPrice() {
  return (
    <div>
      <TotalPriceCartPgStyle>
       Pay :  { <TotalPrice /> }
      </TotalPriceCartPgStyle>
    </div>
  );
}
