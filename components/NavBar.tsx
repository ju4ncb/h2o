import React from "react";
import { UsuarioTipo } from "../server/clases/usuario";

interface OptionProps {
  children?: React.ReactNode;
  buttonLike?: boolean;
  href: string;
}

interface NavBarProps {
  withBorder?: boolean;
  user?: UsuarioTipo;
}

const NavBar = ({ withBorder, user }: NavBarProps) => {
  return (
    <nav className={withBorder ? "border" : ""}>
      <div className="navbar-container opciones">
        <ul className="navbar-list">
          <Option href="/">Inicio</Option>
          <Option href="/about-us">Acerca de nosotros</Option>
          <Option href="/play" buttonLike={true}>
            Jugar
          </Option>
        </ul>
        <ul className="navbar-list align-left auth">
          {user ? (
            <Option href="" buttonLike={true}>
              {user.username}
            </Option>
          ) : (
            <>
              <Option href="/login" buttonLike={true}>
                Iniciar sesion
              </Option>
              <Option href="/register" buttonLike={true}>
                Registrarse
              </Option>
            </>
          )}
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
