import React from 'react';
import style from './cart.css'

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart)

    // const total = cart.reduce((total,price)=> total + price.price,0);

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

    const tax = (total / 10);

    const grandTotal = (total + shiping + Number(tax));

    const formateNumber = num => (num).toFixed(2);

    return (
        <div className='order-summery'>
            <h2>Order summery</h2>
            <p>Items ordered : {cart.length} </p>
            <p><small>Product price : {formateNumber(total)}</small></p>
            <p><small>Shipping cost : {formateNumber(shiping)}</small></p>
            <p><small>Tax / VAT : {formateNumber(tax)}</small></p>
            <p>Total price : {formateNumber(grandTotal)}</p>
        </div>
    );
};

export default Cart;