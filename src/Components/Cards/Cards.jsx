import './Cards_Style.css'

const Cards =({ cards }) => {
  return (
    <div className="cards-container d-flex justify-content-center gap-2 flex-wrap">
      {cards.map((card, index) => (
        <div key={index} className="card">
          <div className="card__shine"></div>
          <div className="card__glow"></div>
          <div className="card__content">
            {card.badge && <div className="card__badge">{card.badge}</div>}
            <div 
              className="card__image" 
            ></div>
            <div className="card__text">
              <p className="card__title">{card.title}</p>
              <p className="card__description">{card.description}</p>
            </div>
            <div className="card__footer">
              <div className="card__price">{card.price}</div>
              <div className="card__button">
                <svg height="16" width="16" viewBox="0 0 24 24">
                  <path
                    strokeWidth="2"
                    stroke="currentColor"
                    d="M4 12H20M12 4V20"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Cards