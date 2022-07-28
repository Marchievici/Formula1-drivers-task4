export function CardComponent(props) {
  const { country, firstName, hex, image, lastName, number, points, team } =
    props.driver;
  const index = props.index + 1;
  return (
    <div
      className={`card ${index <= 3 && "top3"} ${team.split(/\s/).join("")}`}
    >
      <div className="score flex card-item">
        <div className="placement">{index}</div>
        <div className="nr-points flex">
          <span className="number-points">{points}</span>
          <span className="points">PTS</span>
          <button style={{backgroundColor: `${hex}`}} className={`btn-increase btn-increase-${index}`}>
            Add points
          </button>
        </div>
      </div>
      <div className="card-item">
        <div className="full-name">
          <span className="first-name">{firstName}</span>
          <span className="name">{lastName}</span>
        </div>
        <div>
          <span
            className={`flag-icon flag-icon-${country.toLowerCase()}`}
          ></span>
        </div>
      </div>
      <div className="team">{team}</div>
      <div className="pilot-image flex">
        <div className="pilot-number">{number}</div>
        <div className="backgorund-image"></div>
        <img width="206px" height="160px" src={image} alt="Image of pilot" />
      </div>
    </div>
  );
}
