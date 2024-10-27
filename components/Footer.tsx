interface FooterItemProps {
  titulo: string;
  descripcion: string;
}

const Footer = () => {
  return (
    <footer>
      <div className="contenedor-footer">
        <FooterItem titulo="Teléfono" descripcion="69420" />
        <FooterItem titulo="Correo" descripcion="h2o@mail.com" />
        <FooterItem titulo="Dirección" descripcion="En tu casa" />
      </div>
      <h2 className="titulo-final">&copy; Los Eso brad</h2>
    </footer>
  );
};

const FooterItem = ({ titulo, descripcion }: FooterItemProps) => {
  return (
    <div className="content-foo">
      <h4>{titulo}</h4>
      <p>{descripcion}</p>
    </div>
  );
};

export default Footer;
