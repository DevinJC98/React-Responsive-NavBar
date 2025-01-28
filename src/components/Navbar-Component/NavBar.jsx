import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

//open and close the burger menu and rotate the bars for improved ui
//onClick event within Navigation Component
function burgerOpener() {
  if (burgerMenu.classList == "closedBurger") {
    burgerMenu.classList.replace("closedBurger", "openBurger");
    burger.style.rotate = "90deg";
  } else {
    burgerMenu.classList.replace("openBurger", "closedBurger");
    burger.style.rotate = "revert";
  }

  console.log(burgerMenu.classList);
}

//force the burger menu to shut and go back to it's initial state if the window is resized above the breakpoint
window.addEventListener("resize", function () {
  if (screen.width >= 768) {
    burgerMenu.classList = "closedBurger";
    burger.style.rotate = "revert";
  }
});

//react function to return the display of the navbar
function Navigation() {
  return (
    <>
      <header>
        <img src="images/beans.svg" alt="Bean's Logo" id="beany" />
        <div id="links">
          <Link to="/home">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
        </div>

        <img src="images/Burger.svg" id="burger" onClick={burgerOpener} />
      </header>
      <div id="burgerMenu" className="closedBurger">
        <Link to="/home">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
      </div>
    </>
  );
}

export default Navigation;
