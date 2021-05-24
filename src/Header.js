import React from "react";

class Header extends React.Component {
  
    render() {
        return (
            <header>
                <div className="logo">
                    LOGO
                </div>
                <ul>
                    <li>Home</li>
                    <li>Profile</li>
                    <li>Log In</li>
                </ul>
            </header>
        )      
    }
  }
  export default Header;