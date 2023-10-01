import React from 'react'
import { BoxContainer, ViewCartContainer } from '../../pages/CartPage/CartPageStyle';
import { CartImages } from '../../Constants/Images';

function CartComponent(props) {
  const data = props.data;
  return (
    <>
        <ViewCartContainer>
             <BoxContainer>
               <div>
               <CartImages src={data.image_url} alt="picture is un-available" />
             </div>
             <div>
               <p>{data.name}</p>
               <p>{data.size}</p>   
             </div>
            </BoxContainer>
            
       </ViewCartContainer>
    </>
  );
    
}

export default CartComponent

