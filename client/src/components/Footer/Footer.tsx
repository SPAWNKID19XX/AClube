import './Footer.css'
// import fb from '../../assets/img/icons/facebook.png'
// import tt from '../../assets/img/icons/tiktok.png'
// import insta from '../../assets/img/icons/instagram.png'
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const {t} = useTranslation();
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        setIsVisible(scrollTop > 300); // Показываем кнопку, если прокручено больше 300px
    };

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: "smooth"});
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className='page-container'>
            <div className='footer-container'>
                <section className='footer'>
                    <div className='footer-info'>
                        <span>{t("ftr.slogan")}</span>
                        <div className='social-media'>
                            {/*<a href=""><img src={fb} alt=""/></a>*/}
                            {/*<a href=""><img src={insta} alt=""/></a>*/}
                            {/*<a href=""><img src={tt} alt=""/></a>*/}
                        </div>
                        <div className='contact-politics'>
                            <div className='contacts'>
                                <h3>{t("ftr.contact.title")}</h3>
                                <span>📞 (+351) 920 811 661</span>
                                <span>📧 cuddlybreeze@gmail.com</span>
                                <span>📍 Rua das Hortênsias, Lote F, Loja D, R/C <br/> Faro 8005-196, Gambelas</span>
                                {/*<button><img src={whatsapp} alt="" />{t("ftr.contact.btn")}</button>*/}
                            </div>
                            <div className='politics'>
                                <h3>{t("ftr.docs.title")}</h3>
                                <a href="/privacy-policy">{t("ftr.docs.lt.0")}</a>
                                <a href="/cookie-policy">{t("ftr.docs.lt.1")}</a>
                                <a href="/terms-conditions">{t("ftr.docs.lt.2")}</a>
                            </div>
                        </div>
                    </div>
                </section>
                <div className='copyright'>
                    <span>© {currentYear} Cuddly. {t("ftr.bf")}.</span>
                </div>
            </div>
        </div>
    )
}

export default Footer