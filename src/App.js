
import React from "react";
import "./styles.css";

import Contacts from "./Contacts";
import { Provider } from "./Context"; // Import Provider from Context.js

import AddComment from "./AddComment";

import Header from "./Header";

import Image from "./Photo";

function App() {
  return (
    //We need to wrap everything inside the Provider Component.
    <Provider>
      <Header />

      <Image />
      
      <AddComment />
      <Contacts />
    </Provider>
  );
}
export default App;