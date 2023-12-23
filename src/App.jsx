import { useState } from "react";
import "./App.css";
import ItemListContainer from "./assets/components/ItemListContainer/ItemListContainer";
import NavBar from "./assets/components/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer saludo="Bruno" />
    </>
  );
}

export default App;
