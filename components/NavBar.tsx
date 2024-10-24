import React from "react";

interface OptionProps {
  children?: React.ReactNode;
  buttonLike?: boolean;
  href: string;
}

const NavBar = () => {
  return (
    <nav>
      <div className="container row">
        <ul className="navbar-list column two-thirds">
          <Option href="">Inicio</Option>
          <Option href="">ODS 6</Option>
          <Option href="">Acerca de nosotros</Option>
          <Option href="" buttonLike={true}>
            Jugar
          </Option>
        </ul>
        <ul className="navbar-list column one-third align-left">
          <Option href="" buttonLike={true}>
            Iniciar sesion
          </Option>
          <Option href="" buttonLike={true}>
            Registrarse
          </Option>
        </ul>
      </div>
    </nav>
  );
};

const Option = ({ children, href, buttonLike }: OptionProps) => {
  return (
    <li className={buttonLike ? "navbar-item fill" : "navbar-item"}>
      <a className="navbar-link" href={href}>
        {children}
      </a>
    </li>
  );
};

export default NavBar;
