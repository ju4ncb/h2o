import React from "react";
import { JugadorTipo } from "../server/clases/Jugador";

interface OptionProps {
  children?: React.ReactNode;
  buttonLike?: boolean;
  href: string;
}

interface NavBarProps {
  withBorder?: boolean;
  user?: JugadorTipo;
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
            <>
              <Option href="/me" buttonLike={true}>
                {user.username}
              </Option>
              {user.tipoUsuario === 0 && (
                <Option href="/administrate" buttonLike={true}>
                  Administrar
                </Option>
              )}
              <Option href="/logout" buttonLike={true}>
                Cerrar sesion
              </Option>
            </>
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
