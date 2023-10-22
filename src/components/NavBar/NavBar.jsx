import { useState, useEffect } from "react";

export default function NavBar() {
  return (
    <nav class="navbar navbar-expand bg-body-tertiary fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#home">
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
          <div class="navbar-nav nav-fill ms-auto">
            <a class="nav-link mx-3" href="#about">
              About
            </a>
            <a class="nav-link mx-3" href="#resume">
              Resume
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
