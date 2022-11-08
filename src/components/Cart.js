import { useState } from "react"
// import { plantList } from "../datas/plantList"
import "../styles/Cart.css"


function Cart({cart, updateCart}) {
    // const monsteraPrice = 8
    // const ivyPrice = 10
    // const flowerPrice = 15
    // const [cart, updateCart] = useState(0)
    const [isOpen, setIsOpen] = useState(true)
    const total = cart.reduce(
        (acc, plantType) => acc + plantType.amount * plantType.price, 0)

    return isOpen ? (
        <div className="lmj-cart">
            <button className='lmj-cart-toggle-button' onClick={() => setIsOpen(false)}>Fermer</button>
            <h2>Panier</h2>
            {cart.map(({name, price, amount}, index) => (
                <div key={`${name}-${index}`}>
                    {name} {price}€ x {amount}
                </div>
            ))}
            <h3>Total : {total}€</h3>
            <button onClick={() => updateCart([])}>Vider le panier</button>
        </div>
    ) : (
        <div className='lmj-cart-closed'>
            <button className='lmj-cart-toggle-button' onClick={() => setIsOpen(true)}>Ouvrier le Panier</button>
        </div>
    )
}

export default Cart;