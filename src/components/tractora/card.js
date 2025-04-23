const ForkliftCard = ({ forklift, onClick }) => (
    <div className="card" onClick={() => onClick(forklift)}>
        <img src={forklift.image} alt={forklift.name} />
        <h3>{forklift.name}</h3>
        <p>Тип двигателя: {forklift.type}</p>
        <p>Грузоподъемность: {forklift.capacity}</p>
        <p>Высота подъема: {forklift.height}</p>
        <button>Получить предложение</button>
        <a>Подробные характеристики</a>
    </div>
);

export default ForkliftCard;
