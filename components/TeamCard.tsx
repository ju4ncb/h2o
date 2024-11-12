interface Props {
  img: string;
  name: string;
  occupation: string;
}

const TeamCard = ({ img, name, occupation }: Props) => {
  return (
    <div className={"team-card"}>
      <img src={img} />
      <div className="text-section">
        <h3>{name}</h3>
        <h5>{occupation}</h5>
      </div>
    </div>
  );
};

export default TeamCard;
