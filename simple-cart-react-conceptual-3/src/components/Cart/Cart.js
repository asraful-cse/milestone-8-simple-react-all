import React from 'react';

const Cart = (props) => {
    const { cart } = props || {};
    const totalReducer = (prevValue, currentValue) => prevValue + currentValue.price;
    const total = cart.reduce(totalReducer, 0)
    const tax = total * 0.1;
    const totalPrice = total + tax
    return (
        <div>
            <h3><i className="fas fa-shopping-cart "></i>
                {cart.length}
            </h3>
            <h4>Product price:  {total.toFixed(2)}</h4>
            <h3> Tax:  {tax.toFixed(2)}</h3>
            <h4>GrandTotal Price:  {totalPrice.toFixed(2)}</h4>
            <ul>
                {
                    cart.map(product => <li>{product.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Cart;