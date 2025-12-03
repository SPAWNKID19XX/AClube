import './Footer.css'
// import fb from '../../assets/img/icons/facebook.png'
// import tt from '../../assets/img/icons/tiktok.png'
// import insta from '../../assets/img/icons/instagram.png'
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const {t} = useTranslation();
    const position: [number, number] = [37.03451228497629, -7.830632473966685];
    



    

    return (
        <div className='page-container'>
            <div className='footer-container'>
                <section className='footer'>
                    <div className='footer-info'>
                        <span>For adults only.</span>
                        <div className='social-media'>
                            {/*<a href=""><img src={fb} alt=""/></a>*/}
                            {/*<a href=""><img src={insta} alt=""/></a>*/}
                            {/*<a href=""><img src={tt} alt=""/></a>*/}
                        </div>
                        <div className='contact-politics'>
                            <div className='contacts'>
                                <h3>Contact</h3>
                                <span>📞 (+351) 000 000 000</span>
                                <span>📧 email@gmail.com</span>
                                <span>📍 Rua --- ---------, ---- -, ----- <br/> Faro 0000-000, Faro</span>
                                {/*<button><img src={whatsapp} alt="" />{t("ftr.contact.btn")}</button>*/}
                            </div>
                            <div className='map_area'>
                                <MapContainer center={position} zoom={13} style={{ height: '400px', width: '100%' }}>
                                    <TileLayer
                                        attribution='&copy; OpenStreetMap'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                    <Marker position={position}>
                                        <Popup>
                                        Next Party 😊
                                        </Popup>
                                    </Marker>
                                    </MapContainer>
                            </div>
                        </div>
                    </div>
                </section>
                <div className='copyright'>
                    <div>© {currentYear} AlibiClub. All rights reserved..</div>
                    <a href="/privacy-policy">Privacy policy</a>
                    <a href="/cookie-policy">Cookie policy</a>
                    <a href="/terms-conditions">Terms conditions</a>
                </div>
            </div>
        </div>
    )
}

export default Footer