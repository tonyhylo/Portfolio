// import { useState, useEffect, useContext } from "react";

export default function NavBar() {
  return (
    <nav class="navbar navbar-expand bg-body-tertiary fixed-top shadow p-3 mb-5 bg-body-tertiary rounded">
      <div class="container-fluid">
        <a
          class="navbar-brand"
          href="#top"
        >
          Tony Lo
        </a>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div
            class="navbar-nav nav-fill ms-auto"
          >
            <a class="nav-link mx-3" href="#about">
              About
            </a>
            {/* <a class="nav-link mx-3" href="#experience">
              Experience
            </a> */}
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
