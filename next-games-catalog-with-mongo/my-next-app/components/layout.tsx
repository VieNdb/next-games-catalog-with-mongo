import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="text-center bg-blue-50 pt-50">
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
         <Link href="/">Home</Link>
        </div>
        <div className="container">
          <Link href="/myListOfGames">All games</Link>
        </div>
        <div className="container">
        <Link href="/myListOfPlatforms">Platforms</Link>
        </div>
      </nav>
  
  </div>
  )
}

export default Layout;

