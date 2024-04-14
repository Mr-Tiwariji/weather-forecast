import React from "react";
import { useStateContext } from "../Context";
import Clear from "../assets/images/Clear.jpg";
import cloudy from "../assets/images/cloudy.jpg";
import foggy from "../assets/images/foggy.jpg";
import Rainy from "../assets/images/Rainy.jpg";
import Snow1 from "../assets/images/Snow1.jpg";
import Stormy from "../assets/images/Stormy.jpg";
import sunny from "../assets/images/Clear.jpg";
import { useEffect, useState } from "react";

export default function BackgroundLayout() {
  const { weather } = useStateContext();
  const [image, setImage] = useState(Clear);
  useEffect(() => {
    if (weather.conditions) {
      let imageString = weather.conditions;
      if (imageString.toLowerCase().includes("clear")) {
        setImage(Clear);
      } else if (imageString.toLowerCase().includes("cloud")) {
        setImage(cloudy);
      } else if (
        imageString.toLowerCase().includes("rain") ||
        imageString.toLowerCase().includes("shower")
      ) {
        setImage(Rainy);
      } else if (imageString.toLowerCase().includes("snow")) {
        setImage(Snow1);
      } else if (imageString.toLowerCase().includes("fog")) {
        setImage(foggy);
      } else if (
        imageString.toLowerCase().includes("thunder") ||
        imageString.toLowerCase().includes("storm")
      ) {
        setImage(Stormy);
      } else if (imageString.toLowerCase().includes("sunny")) {
        setImage(sunny);
      }
    }
  }, [weather]);
  return (
    // <img src={image} alt="weather_image" className='h-screen w-full fixed left-0 top-0 -z-[10]' />
    <img
      src={image}
      alt="weather_image"
      className="h-screen w-full fixed left-0 top-0 -z-[10]"
    />
  );
}
