import './telemetry.css'
import xz from '../../img/telemetry/xz_1.png'

function telemetry () {
    return (
        <div className='telemetry__container'>
            <div className='img__telemetry'>
                <img className='img__xz' src={xz} alt='хз'/>
                <div className='circle__telemetry'></div>
            </div>
            <div className='text__telemetry'>
                <p className='logo__telemetry'>оснащение системой <span className='span__text__telemetry'>телеметрии</span></p>
                <ul className='ul__telemetry'>
                    <li className='item__telemetry'>BMS (Battery Management System) - система управления батареей с возможностью онлайн мониторинга со смартфона</li>
                    <li className='item__telemetry'>Система доступа операторов к погрузчику</li>
                    <li className='item__telemetry'>Развернутый отчет об эксплуатации техники</li>
                    <li className='item__telemetry'>Оповещение о предстоящем ТО</li>
                    <li className='item__telemetry'>Контроль учета рабочего времени</li>
                    <li className='item__telemetry'>Геолокация погрузчика</li>
                    <li className='item__telemetry'>Фиксация нарушений скоростных ограничений</li>
                </ul>
            </div>
        </div>
    )
}

export default telemetry;
