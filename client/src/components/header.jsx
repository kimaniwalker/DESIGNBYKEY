import React from 'react'
import logo from "./../images/icons/icon.png";
import '../stylesheets/header.scss'
import Banner from './banner';

export default function Header(props) {

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <>
      <nav id="header" class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="/"><img src={logo} width="75"></img></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a id="linkItem" class="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a id="linkItem" class="nav-link" href="/work">Work</a>
              </li>
              <li class="nav-item">
                <a id="linkItem" class="nav-link" href="/about">About</a>
              </li>
              <li class="nav-item">
                <a id="linkItem" class="nav-link" href="/contact">Contact</a>
              </li>
            </ul>
            <span class="navbar-text">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link" href="https://www.instagram.com/key2designio/"><i id="headerIcon" class="bi bi-instagram"></i></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="https://github.com/kimaniwalker"><i id="headerIcon" class="bi bi-github"></i></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="tel:205-603-8724"><i id="headerIcon" class="bi bi-phone"></i></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="mailto:admin@key2design.io"><i id="headerIcon" class="bi bi-envelope"></i></a>
                </li>
              </ul>
            </span>
          </div>
        </div>
      </nav>
    </>
  )
}
