import './footer.css'
import {resume} from "react-dom/server";


function Footer  () {
    return (
        <footer className="footer">
            <div className="footer__content">
                <p className="footer__left">© «Все права защищены»</p>
                    <a href="#" className="footer__link">Политика конфиденциальности</a>
                    <p className="footer__phone">Телефон: <strong>8 800 555 80 80</strong></p>
                    <p className="footer__email">E-mail: <a href="mailto:index@gmail.com"
                                                            className="footer__email-link">index@gmail.com</a></p>
            </div>
        </footer>
    )
}

export default Footer
