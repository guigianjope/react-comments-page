import React from "react";
import Photo from "./photo.jfif";

class Image extends React.Component {
  
    render() {
        return (
            <>
                <img src={Photo}/>
            </>    
        )      
    }
  }
  export default Image;