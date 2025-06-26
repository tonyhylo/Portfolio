import { useState, useEffect, useContext } from "react";
import { MouseContext } from "../../context/mouse-context";

export default function NavBar() {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  return (
    <nav class="navbar navbar-expand bg-body-tertiary fixed-top shadow p-3 mb-5 bg-body-tertiary rounded">
      <div class="container-fluid">
        <a
          class="navbar-brand"
          href="#top"
          // onMouseEnter={() => cursorChangeHandler("hovered")}
          // onMouseLeave={() => cursorChangeHandler("")}
          // onClick={() => cursorChangeHandler("clicked")}
        >
          Tony Lo
        </a>
        {/* <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button> */}
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div
            class="navbar-nav nav-fill ms-auto"
            // onMouseEnter={() => cursorChangeHandler("hovered")}
            // onMouseLeave={() => cursorChangeHandler("")}
            onClick={() => cursorChangeHandler("clicked")}
            // onMouseOut={() => cursorChangeHandler("hovered")}
          >
            <a class="nav-link mx-3" href="#about">
              About
            </a>
            <a class="nav-link mx-3" href="#experience">
              Experience
            </a>
            <a class="nav-link mx-3" href="#portfolio">
              Portfolio
            </a>
            <a class="nav-link mx-3" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
