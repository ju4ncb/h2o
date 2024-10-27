interface Props {
  image?: string;
  name: string;
  children?: React.ReactNode;
}

const Card = ({ image, name, children }: Props) => {
  return (
    <div className="card">
      {image ? (
        <img src={image} alt="" />
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-circle-user-round"
        >
          <path d="M18 20a6 6 0 0 0-12 0" />
          <circle cx="12" cy="10" r="4" />
          <circle cx="12" cy="12" r="10" />
        </svg>
      )}
      <div className="contenido-texto-card">
        <h4>{name}</h4>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default Card;
