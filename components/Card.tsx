interface Props {
  image: string;
  name: string;
  children?: React.ReactNode;
}

const Card = ({ image, name, children }: Props) => {
  return (
    <div className="card">
      <img src={image} alt="" />
      <div className="contenido-texto-card">
        <h4>{name}</h4>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default Card;
