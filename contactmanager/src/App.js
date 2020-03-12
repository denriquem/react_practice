import React from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header branding="Contact Manager" />
      <div className="container">
        <Contact
          name="Ulises Lima"
          email="uliseslima@gmail.com"
          phone="3333333333"
        />
        <Contact
          name="Karen Schmandelson"
          email="Karythecaptain@gmail.com"
          phone="1111111111"
        />
      </div>
    </div>
  );
}

export default App;
