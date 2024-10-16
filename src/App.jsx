/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React, { createContext, useState } from "react";
import MovieList from "./Components.jsx/Cine/MovieList";
import Fotter from "./Components.jsx/Fotter";
import Header from "./Components.jsx/Header";
import SideBar from "./Components.jsx/SideBar";

export const MovieContext = createContext();

export default function App() {
  const [cartData, setCartData] = useState([]);
  return (
    <>
      <MovieContext.Provider value={{ cartData, setCartData }}>
        <main>
          <Header />
          <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <SideBar />
            <MovieList />
          </div>
        </main>
        <Fotter />
      </MovieContext.Provider>
    </>
  );
}
