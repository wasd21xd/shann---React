const ForkliftCard = ({ forklift, onClick }) => (
    <div className="card" onClick={() => onClick(forklift)}>
            <img className='img__card__tractor' src={forklift.image} alt={forklift.name} />
            <h3 className='name__card highlight-text'>{forklift.name}</h3>
            <p>Тип двигателя: <span className="highlight-text">{forklift.type}</span></p>
            <p>Грузоподъемность: <span className="highlight-text">{forklift.capacity}</span></p>
            <p>Высота подъема: <span className="highlight-text">{forklift.height}</span></p>
            <button>Получить предложение</button>
            <a>Подробные характеристики</a>
    </div>
);
export default ForkliftCard;
