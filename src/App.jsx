import React from "react";
import Main from "./component/Main";
import { Routes, Route } from "react-router-dom"
import Products from "./component/Products";
import Clothes from "./component/Clothes";
import Sneakers from "./component/Sneakers";
import More from "./component/More";
import Contact from "./component/Contact";
function App() {

  return (<>


    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="Products" element={<Products />}>
        <Route path="Clothes" element={<Clothes />} />
        <Route path="Sneakers" element={<Sneakers />} />
        <Route path="More" element={<More />} />
      </Route>
      <Route path="Contact" element={<Contact/> } />
    </Routes>


  </>);
}

export default App;