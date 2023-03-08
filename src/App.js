import { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import ImageCollection from "./components/ImageCollection";
import MenuContent from "./components/MenuContent";

const App = () => {
  const [menuHidden, setMenuHidden] = useState(false);
  const handleMenuClick = () => {
    setMenuHidden(!menuHidden);
    console.log("menuHidden : " + menuHidden);
  };
  return (
    <>
      <Header menuHidden={menuHidden} handleMenuClick={handleMenuClick} />
      <ImageCollection />
      {menuHidden ? <MenuContent /> : null}
    </>
  );
};

export default App;
