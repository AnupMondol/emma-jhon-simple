import React, { useState } from 'react';
import fakeData from '../../fakeData';
import style from './shop.css';
import Product from '../Products/product';
import Cart from '../cart/cart';


const Shop = () => {
    const first10 = fakeData.slice(10,20);
    const[products, setProducts] = useState(first10);

    const [cart, setCart] = useState([])

    const handelAddProduct = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            
           <div className='product-container'>
           
            {
                products.map(pd => <Product handelAddProduct = {handelAddProduct} product={pd}></Product>)
            }
            
           </div>
           <div className="cart-container">
            <Cart cart = {cart}></Cart>
           </div>
           
           
        </div>
    );
};

export default Shop;