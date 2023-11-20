import React from "react";
import "./Header.scss";
import { Github, LinkedIn } from "../../images";

export default function Header() {
  return (
    <header role="header" className="Header">
      <nav className="MainMenu">
        <ul>
          <li>
            <a
              href="https://github.com/bharatchills"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/imsonibharat"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
