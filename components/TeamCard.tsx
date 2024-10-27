interface Props {
  img: string;
  position: string;
  name: string;
  occupation: string;
}

const TeamCard = ({ img, position, name, occupation }: Props) => {
  return (
    <div className={"team-card " + position}>
      <img src={img} />
      <div className="text-section">
        <h3>{name}</h3>
        <h5>{occupation}</h5>
      </div>
    </div>
  );
};

export default TeamCard;
