import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/NavBar";
import Products from "./components/Products/Products";

function App() {
  // products list data
  const products = [
    {
      name: "Headphone",
      image:
        "https://media.istockphoto.com/id/1373017594/photo/headphones-on-the-orange-color-background.jpg?s=612x612&w=0&k=20&c=9SEBT-6kUjIBy33Ga-C9n6CQMd7FOUk3yC89mOAa0ts=",
      price: "$40.00 - $80.00",
      rating: false,
      sale: false,
      original: false,
    },
    {
      name: "Watch",
      image:
        "https://media.istockphoto.com/id/517465948/photo/mens-watch-on-his-hand-close-up.jpg?s=612x612&w=0&k=20&c=JDO4pHiBQ0lpunREtDuUm393nWkBvPZK9_TbtxfU1Do=",
      price: "$18.00",
      rating: true,
      sale: true,
      original: true,
      originalPrice: "$20.00",
    },
    {
      name: " Van Huesen Shirt",
      image:
        "https://media.istockphoto.com/id/544358286/photo/pride-man-smiling.jpg?s=612x612&w=0&k=20&c=o7xWnlzKLdrPWdnml8s0kfaiXlme62N4iVWGC0TO0C8=",
      price: "$25.00",
      rating: false,
      sale: true,
      original: true,
      originalPrice: "$50.00",
    },
    {
      name: "Iphone 13 Pro",
      image:
        "https://media.istockphoto.com/id/1426145822/photo/iphone-14-pro-home-screen-with-app-icons.jpg?s=612x612&w=0&k=20&c=oJOjfGgBYg8m1G3VjZL70b8M8I2bSGPC8kdgbosWLws=",
      price: "$40.00",
      rating: true,
      sale: false,
      original: false,
      originalPrice: "",
    },
    {
      name: "PS5",
      image:
        "https://media.istockphoto.com/id/1408098207/photo/xbox.jpg?s=612x612&w=0&k=20&c=R921kzJX7zouzSjkypNRFI5O8DT7_kZ1tlbePo9ZvVw=",
      price: "$25.00",
      rating: false,
      sale: true,
      original: true,
      originalPrice: "$50.00",
    },
    {
      name: "Sofa",
      image:
        "https://media.istockphoto.com/id/1031444360/photo/poster-above-white-cabinet-with-plant-next-to-grey-sofa-in-simple-living-room-interior-real.jpg?s=612x612&w=0&k=20&c=pKGXC920DL70qkNZp0xYpOF7AKQ9YFUSne_3wbQmJ5A=",
      price: "$120.00 - $280.00",
      rating: false,
      sale: false,
      original: false,
    },
    {
      name: "Handbag",
      image:
        "https://media.istockphoto.com/id/952079442/photo/female-leather-bag.jpg?s=612x612&w=0&k=20&c=SmyDdfpbpAJ2TDHNZdnGIs9R0uk4qB2RZ-ur9TUwCbA=",
      price: "$18.00",
      rating: true,
      sale: true,
      original: true,
      originalPrice: "$20.00",
    },
    {
      name: "Juicer",
      image:
        "https://media.istockphoto.com/id/1254254675/photo/stainless-electric-kettle-on-table.jpg?s=612x612&w=0&k=20&c=ti5mX6n6V3pbnmkGZ_7r36f5SgFgn7_hyEWppWWsadA=",
      price: "$40.00",
      rating: true,
      sale: false,
      original: false,
      originalPrice: "",
    },
  ];

  // state for cart
  const [cartNo, setCartNo] = useState(0);

  return (
    <>
      <NavBar cartNo={cartNo} />
      <Header />
      <Products products={products} setCartNo={setCartNo} />
      <Footer />
    </>
  );
}

export default App;
