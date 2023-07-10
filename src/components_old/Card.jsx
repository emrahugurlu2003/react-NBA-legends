const Card = () => {
  return (
    <div
      className="d-flex flex-wrap gap-3 container justify-content-center flip-vertical-left"
      style={{ width: "18rem" }}
    >
      <div>
        <style>
          <img
            src="https://s22928.pcdn.co/wp-content/uploads/2018/03/Kareem-Abdul-Jabbar.jpg"
            className="card-img-top"
            alt="..."
          />
        </style>
      </div>
      <div className="card-body">
        <h5 className="card-title">Player Name</h5>
        <p className="card-text">Player Info.</p>
      </div>
      <div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">🏀An item</li>
          <li className="list-group-item">🏀A second item</li>
          <li className="list-group-item">🏀A third item</li>
          <li className="list-group-item">🏀A fourth item</li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
