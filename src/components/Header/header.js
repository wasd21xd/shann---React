import './header.css'
import Mask_group from '../../img/header/Mask_group.svg'

function Header({onOpenModal}) {
    return (
        <div className="Header">
            <header className="header">
                <div className="header__container">
                    <div className="info__logo">
                        <img className="logo" src={Mask_group} alt="логотип" />
                        <div className="info">
                            <p className="number__header">8 800 555 80 80</p>
                            <button type="submit" className="btn__call" onClick={onOpenModal}>Заказать звонок</button>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;
