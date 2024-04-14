import React from "react";
import { useState } from "react";
import "./App.css";
// import SearchIcon from "@mui/icons-material/Search";
import search from "./assets/icons/search.svg";
import { useStateContext } from "./Context";
import { BackgroundLayout, WeatherCard, MiniCard } from "./Components";

function App() {
  const [input, setInput] = useState("");
  const { weather, thisLocation, values, place, setPlace } = useStateContext();
  console.log(weather);

  const submitCity = () => {
    setPlace(input);
    setInput("");
  };
  return (
    <div className="w-full h-screen text-white px-8">
      <nav className="w-full p-3 flex justify-between items-center">
        <h1 className="font-mono italic font-bold text-purple-500  text-3xl">
          Tiwariji Weather App
        </h1>
        <div className="bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2">
          <img src={search} alt="search" className="w-[1.5rem] h-[1.5rem]" />
          {/* <SearchIcon style={{ color: "red", borderColor: "black" }} /> */}
          {/* <SearchIcon /> */}
          <input
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                submitCity();
              }
            }}
            type="text"
            placeholder="Search city"
            className="focus:outline-none w-full text-[#212121] text-lg"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        {/* link : https://www.youtube.com/watch?v=NYe-qJpKY_0 
          
              43:57 minutes
          */}
      </nav>
      <BackgroundLayout></BackgroundLayout>
      <main className="w-full flex flex-wrap py-4 items-center justify-center">
        <WeatherCard
          place={place}
          windspeed={weather.wspd}
          humidity={weather.humidity}
          temperature={weather.temp}
          heatIndex={weather.heatindex}
          iconString={weather.conditions}
          conditions={weather.conditions}
        />

        <div className="flex  justify-center gap-6 flex-wrap w-[60%]">
          {values?.slice(1, 7).map((curr) => {
            return (
              <MiniCard
                key={curr.datetime}
                time={curr.datetime}
                temp={curr.temp}
                iconString={curr.conditions}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
