import menuImage1 from "./assets/images/menu-1.png";
import menuImage2 from "./assets/images/menu-2.png";
import menuImage3 from "./assets/images/menu-3.png";
import menuImage4 from "./assets/images/menu-4.png";
import menuImage5 from "./assets/images/menu-5.png";
import menuImage6 from "./assets/images/menu-6.png";
import cartImage1 from "./assets/images/cart-item-1.png";
import cartImage2 from "./assets/images/cart-item-2.png";
import cartImage3 from "./assets/images/cart-item-3.png";
import cartImage4 from "./assets/images/cart-item-4.png";
import reviewImage1 from "./assets/images/jitendar.jpeg";
import reviewImage2 from "./assets/images/manoj.jpeg";
import reviewImage3 from "./assets/images/lakhan.jpeg";
const menu = [
  {
    img: menuImage1,
    name:"Burger",
    price:"Rs. 35/-", 
  },
  {
    img: menuImage2,
    name:"French Fries",
    price:"Rs. 30/-",
  },
  {
    img: menuImage3,
    name:"Chicken",
    price:"Rs. 70/-",
  },
  {
    img: menuImage4,
    name:"Pizza",
    price:"Rs. 99/-",
  },
  {
    img: menuImage5,
    name:"Juice",
    price:"Rs. 40/-",
  },
  {
    img: menuImage6,
    name:"Coffee",
    price:"Rs. 40/-",
  },
];

const cart = [
  {
    img: cartImage1,
    name:"cart item 01",
    price:"Rs. 35/-",
  },
  {
    img: cartImage2,
    name:"cart item 02",
    price:"Rs. 70/-",
  },
  {
    img: cartImage3,
    name:"cart item 03",
    price:"Rs. 30/-",
  },
  {
    img: cartImage4,
    name:"cart item 04",
    price:"Rs. 40/-",
  },
];
const review = [
  {
    img: reviewImage1,
    description:"This place is great! Atmosphere is chill and cool but the staff is also really friendly. you can tell making the customers happy is their main priority. Food is pretty good, and for their prices it’s 100% worth it.",
    name:"Jitendra saini",
  },
  {
    img: reviewImage2,
    description:"Excellent and Delicious food, waiters are very attentive, and super nice atmosphere. Plus it’s all at an affordable price.We can totally recommend it and will definitely come back again.",
    name: "Manoj kumar",
  },
  {
    img: reviewImage3,
    description:"This is my absolute favorite restaurant. The food is always  fantastic and testy, no matter what I order I am always delighted with my meal! Servers are also great and always efficient, happy and polite. ",
    name:"Lakhan Ashiwal",
  },
];
export { menu, cart, review, };
