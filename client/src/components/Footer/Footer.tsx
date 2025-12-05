// @ts-nocheck
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import './Footer.css'
//import fb from '../../assets/img/icons/facebook.png'
//import tt from '../../assets/img/icons/tiktok.png'
//import insta from '../../assets/img/icons/instagram.png'
import {useTranslation} from "react-i18next";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const {t} = useTranslation();
    const position: LatLngExpression =  [37.03451228497629, -7.830632473966685];
    
    return (
        <div className='page-container'>
            <div className='footer-container'>
                <section className='footer'>
                    <div className='footer-info'>
                        <span>{t("footer.slogan")}</span>
                        <div className='social-media'>
                            {/*<a href=""><img src={fb} alt=""/></a>*/}
                            {/*<a href=""><img src={insta} alt=""/></a>*/}
                            {/*<a href=""><img src={tt} alt=""/></a>*/}
                        </div>
                        <div className='contact-politics'>
                            <div className='contacts'>
                                <h3>{t("footer.contact")}</h3>
                                <span>📞 (+351) 000 000 000</span>
                                <span>📧 email@gmail.com</span>
                                <span>📍 Rua --- ---------, ---- -, ----- <br/> Faro 0000-000, Faro</span>
                                {/*<button><img src={whatsapp} alt="" />{t("ftr.contact.btn")}</button>*/}
                            </div>
                            <div className='map_area'>


                                <MapContainer
                                    center={position}
                                    zoom={13}
                                    style={{ height: "100%", width: "100%" }}
                                    >
                                    <TileLayer
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />

                                    <Marker position={position}>
                                        <Popup>
                                            {t("footer.map_dot")} 😊
                                        </Popup>
                                    </Marker>
                                </MapContainer>
                            </div>
                        </div>
                    </div>
                </section>
                <div className='copyright'>
                    <div>© {currentYear} AlibiClub. {t("bottom_footer.rights")}.</div>
                    <a href="/privacy-policy">{t("bottom_footer.pp")}</a>
                    <a href="/cookie-policy">{t("bottom_footer.cp")}</a>
                    <a href="/terms-conditions">{t("bottom_footer.tc")}</a>
                </div>
            </div>
        </div>
    )
}

export default Footer