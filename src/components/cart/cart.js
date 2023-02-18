import React from 'react';
import style from './cart.css'

const Cart = (props) => {
    const cart = props.cart;

    // const total = cart.reduce((total, prd) => total + prd.price , 0)

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
        
    }

    let shiping = 0;
    if(total > 35){
        shiping = 0
    }else if(total > 15){
        shiping = 4.99
    }else if(total > 0){
        shiping = 12.99
    }

    const tax = (total / 10).toFixed(2);

    const grandTotal = (total + shiping + Number(tax)).toFixed(2);
    return (
        <div className='order-summery'>
            <h2>Order summery</h2>
            <p>Items ordered : {cart.length} </p>
            <p><small>Product price : {total}</small></p>
            <p><small>Shipping cost : {shiping}</small></p>
            <p><small>Tax / VAT : {tax}</small></p>
            <p>Total price : {grandTotal}</p>
        </div>
    );
};

export default Cart;