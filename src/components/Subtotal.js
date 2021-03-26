import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider';

const Subtotal = () => {
    const [state,dispatch]=useStateValue();
    const totalPrice=(basket)=>{
        var price=0;
        for(var index=0;index<basket.length;index++)
            price+=basket[index].price
        
        return price;
    }
    return (
        <div className='subtotal'>
            <CurrencyFormat
            renderText={(value)=>{
                return(
                    <>
                        <p>Subtotal ({state.basket.length} items): <strong> {value}</strong></p>
                        <small className='subtotal__gift'>
                            <input type='checkbox'></input>
                            This order contains a gift
                        </small>
                    </>
                )
            }}
            decimalScale={2}
            value={totalPrice(state.basket)}
            displayType="text"
            thousandSeperator={true}
            prefix={"₹"}>

            </CurrencyFormat>
            <button>Proceed to Checkout</button>
        </div>
    );
}

export default Subtotal;
