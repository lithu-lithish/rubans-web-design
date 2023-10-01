import { HeaderCartPgStyle } from "./HeaderStyled";
import { TotalItems } from "../../pages/HomePage/HomePage";

export default function HeaderCartPg() {
  return <HeaderCartPgStyle>Total No.of Items : { <TotalItems />}</HeaderCartPgStyle>;
}
