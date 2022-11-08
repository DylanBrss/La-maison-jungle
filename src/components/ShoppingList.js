import { useState } from "react"
import { plantList } from "../datas/plantList"
import PlantItem from './PlantItem'
import Categories from './Categories'
import "../styles/ShoppingList.css"

function ShopppingList({ cart, updateCart }) {
    const [activeCategory, setActiveCategory] = useState('')
    const categories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )

    /* Vérifier si dans notre liste d'objet la plante est déjà présente ou non */
    /* Si elle existe on créer un tableau sans elle et on le met dans update cart et on ajoute se tableau sans elle et on ajoute un objet avec un */
    function addToCart(name, price) {
        const currentPlantAdded = cart.find((plant) => plant.name === name)
        if (currentPlantAdded) {
            const cartFilteredCurrentPlant = cart.filter(
                (plant) => plant.name !== name
            )
            updateCart([
                ...cartFilteredCurrentPlant,
                { name, price, amount: currentPlantAdded.amount + 1 }
            ])
        } else {
            updateCart([...cart, { name, price, amount: 1 }])
        }
    }

    return (
        <div className="lmj-shopping-list">
            <Categories
                categories={categories}
                setActiveCategory={setActiveCategory}
                activeCategory={activeCategory}
            />
            <ul className='lmj-plant-list'>
                {plantList.map(({ id, cover, name, water, light, price, category }) =>
                    !activeCategory || activeCategory === category ? (
                        <div key={id}>
                            <PlantItem cover={cover} name={name} water={water} light={light} price={price} />
                            <button onClick={() => addToCart(name, price)}>Ajouter</button>
                        </div>
                    ) : null
                )}
            </ul>
        </div>
    )
}

export default ShopppingList