import './evolution.css'
import pered from '../../img/evolution/pered.png'
import zad from '../../img/evolution/zad.png'

function Evolution() {
    return (
        <div className="evolution__container">
            <div className="logo__evolution">
                <h2 className="evolution__logo__text">эволюционные <span
                    className="span__text__evolution">технологии</span></h2>
                <p className="text__evolution">Технологии электромобиля в вилочном погрузчике</p>
            </div>
            <div className="content__evolution">
                <img className="tractor1" src={pered} alt="погрузчик"/>
                <img className="tractor2" src={zad} alt="погрузчик"/>

            </div>
        </div>
    );
}

export default Evolution;
