interface Props {
  title: string;
  image: string;
  children?: React.ReactNode;
}

const Servicio = ({ title, image, children }: Props) => {
  return (
    <div className="servicio-ind">
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
};

export default Servicio;
