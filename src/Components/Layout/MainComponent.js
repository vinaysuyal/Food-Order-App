import { useMemo } from "react";
import MealList from "../Meal/MealList";
import Image from "../assets/momos.jpg";
import "./MainComponent.css";

const message_array = [
  "Enjoying life’s little 🥟momo-ments.",
  "These dumplings got me filling like I want mo’ momo.",
  "Either stea med or fried my love💜 for them is endless",
  "Let the cheese🧀 dissolve.",
  "Savoring the Art of Momo Making. 🥟",
  "Where Every Bite is a Momo Masterpiece. 🎨",
  "Elevate Your Taste Buds with Our Momo Magic. ✨",
  "Bringing Himalayan Bliss to Your Plate, One Momo at a Time. 🏔️",
  "Momo Moments, Made Memorable. 📸",
  "Dumplings That Define Delicious. 😋",
  "Steamed to Perfection, Savored with Affection. ❤️",
  "Taste the Tradition, Love the Flavor. 🥢",
  "Momo Bliss in Every Bite. 😃",
  "Where Momo Dreams Come True. ✨",
  "Fill Your Heart with Momo Love. ❤️",
  "Creating Smiles, One Momo at a Time. 😄",
  "Momo Magic - Your Culinary Adventure Awaits! 🌟",
  "Momo, Love, and Happiness in Every Bite. ❤️",
  "Crafting Happiness, One Momo at a Time. 😊",
  "From the Himalayas with Love: Momo Moments. 🏔️",
  "Satisfy Your Cravings, Momo Style. 😍",
  "Steamed Goodness, Handcrafted Greatness. 🌄",
  "Momo Heaven: Where Flavor Takes Flight. 🌈",
  "Taste the Difference, Taste the Momo. 🍽️",
];

const MainComponent = (props) => {
  const message = useMemo(() => {
    return message_array[Math.floor(message_array.length * Math.random())];
  }, []);

  return (
    <main>
      <div className="chillam-logo">
        <img src={Image}></img>
        <h4>{message}</h4>
      </div>
      <MealList />
    </main>
  );
};

export default MainComponent;
