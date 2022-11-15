import MealList from "../Meal/MealList";
import { useContext } from "react";
import CartContext from "../Cart/CartContext";
import Image from '../assets/momos.jpg'
import './MainComponent.css'

const message_array = [
    'Enjoying life’s little 🥟momo-ments.',
    'These dumplings got me filling like I want mo’ momo.',
    'Either stea med or fried my love💜 for them is endless',
    'Let the cheese🧀 dissolve.',
];
const getDisplayMessage = () => {
    console.log();
    return message_array[Math.floor(message_array.length * Math.random())];
}

const MainComponent = props => {
    const cartContext = useContext(CartContext);
    return (
        <main>
            <div className="chillam-logo">
            <img src={Image}></img>
            <h4>{getDisplayMessage()}</h4>
            </div>
             <MealList/>
        </main>
    );
}

export default MainComponent;