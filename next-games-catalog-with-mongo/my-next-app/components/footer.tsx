import React from "react";

const Footer: React.FC = ({children}) => {
  return (
    <div className="fixed-bottom ">
    <footer>
      <br/>     
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <h3>My footer is sooo sweet</h3>
      </nav>
    </footer>
      
  </div>
  )
}

export default Footer;