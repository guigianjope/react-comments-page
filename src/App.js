
import React from "react";
import "./styles.css";

import Contacts from "./Contacts";
import { Provider } from "./Context"; // Import Provider from Context.js

import AddComment from "./AddComment";

import Header from "./Header";

import Photo from "./photo.jfif";

function App() {
  return (
    //We need to wrap everything inside the Provider Component.
    <Provider>
      <Header />

        <img src={Photo}/>
      
      <AddComment />
      <Contacts />
    </Provider>
  );
}
export default App;