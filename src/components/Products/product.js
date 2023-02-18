import React from 'react';
import style from './product.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'

const Product = (props) => {
    const {img, name, seller, price, stock} = props.product
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='detailes'>
                <h4 className='product-name'>{name}</h4>
                
                <p><small>by : {seller}</small></p>
                <p>$ {price}</p>
                <p><small>Only {stock} left in stock - order soon</small></p>
                <button onClick={()=>props.handelAddProduct(props.product)} className='main-button'> <b>Add to cart</b></button>
            </div>
            
        </div>
    );
};

export default Product;