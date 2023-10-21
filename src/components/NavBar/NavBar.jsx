export default function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Tony Lo
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ms-auto">
            <a class="nav-link" href="#about">
              About
            </a>
            <a class="nav-link" href="#resume">
              Resume
            </a>
            <a class="nav-link" href="#portfolio">
              Portfolio
            </a>
            <a class="nav-link" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
