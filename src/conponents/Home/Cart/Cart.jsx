import React from 'react';
import "./Cart.css"
const Cart = ({selectedActor}) => {
    console.log(selectedActor)
    return (
        <div className='container'>
            <h2>Total Actors:{selectedActor.length} </h2>
            {selectedActor.map((actor)=>(
                <li>{actor.name}</li>
            ))}
        </div>
    );
};

export default Cart;