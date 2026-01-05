import React, {useEffect} from 'react';
import './PrivacyPolicy.css';
import {useTranslation} from "react-i18next";

const PrivacyPolicy: React.FC = () => {
    useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo(0, 0);
    }, []);
    const {t} = useTranslation();

    return (
        <div className="privacy-policy">
            <div className="privacy-policy__container">
                {/* Header */}
                <div className="privacy-policy__header">
                    <h1 className="privacy-policy__title">Política de Privacidade</h1>
                    <p className="privacy-policy__subtitle">
                        {t("pp.top_info")}.
                    </p>
                    <div className="privacy-policy__meta">
                        <span className="privacy-policy__date">{t("pp.last_update")}</span>
                        <span className="privacy-policy__version">{t("pp.version")} 1.0</span>
                    </div>
                </div>

                {/* Content */}
                <div className="privacy-policy__content">

                    {/* Section 1 */}
                    <section className="privacy-policy__section">
                        <h2 className="privacy-policy__section-title">1. {t("pp.lt.1.title")}</h2>
                        <div className="privacy-policy__section-content">
                            <p>
                                {t("pp.lt.1.p.0")}
                            </p>
                            <p>
                                {t("pp.lt.1.p.1")}
                            </p>
                        </div>
                    </section>

                    {/* Section 2 */}
                    <section className="privacy-policy__section">
                        <h2 className="privacy-policy__section-title">2. {t("pp.lt.2.title")}</h2>
                        <div className="privacy-policy__section-content">
                            <h3>2.1 {t("pp.lt.2.2.1.title")}</h3>
                            <ul>
                                <li>{t("pp.lt.2.2.1.lt.0")}</li>
                                <li>{t("pp.lt.2.2.1.lt.1")}</li>
                                <li>{t("pp.lt.2.2.1.lt.2")}</li>
                                <li>{t("pp.lt.2.2.1.lt.3")}</li>
                                <li>{t("pp.lt.2.2.1.lt.4")}</li>
                            </ul>

                            <h3>2.2 {t("pp.lt.2.2.2.title")}</h3>
                            <ul>
                                <li>{t("pp.lt.2.2.2.lt.0")}</li>
                                <li>{t("pp.lt.2.2.2.lt.1")}</li>
                                <li>{t("pp.lt.2.2.2.lt.2")}</li>
                                <li>{t("pp.lt.2.2.2.lt.3")}</li>
                                <li>{t("pp.lt.2.2.2.lt.4")}</li>
                            </ul>

                            <h3>2.3 {t("pp.lt.2.2.3.title")}</h3>
                            <ul>
                                <li>{t("pp.lt.2.2.3.lt.0")}</li>
                                <li>{t("pp.lt.2.2.3.lt.1")}</li>
                                <li>{t("pp.lt.2.2.3.lt.2")}</li>
                                <li>{t("pp.lt.2.2.3.lt.3")}</li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section className="privacy-policy__section">
                        <h2 className="privacy-policy__section-title">3. {t("pp.lt.3.title")}</h2>
                        <div className="privacy-policy__section-content">
                            <h3>3.1 {t("pp.lt.3.3.1.title")}</h3>
                            <ul>
                                <li>{t("pp.lt.3.3.1.lt.0")}</li>
                                <li>{t("pp.lt.3.3.1.lt.1")}</li>
                                <li>{t("pp.lt.3.3.1.lt.2")}</li>
                                <li>{t("pp.lt.3.3.1.lt.3")}</li>
                            </ul>

                            <h3>3.2 {t("pp.lt.3.3.2.title")}</h3>
                            <ul>
                                <li>{t("pp.lt.3.3.2.lt.0")}</li>
                                <li>{t("pp.lt.3.3.2.lt.1")}</li>
                                <li>{t("pp.lt.3.3.2.lt.2")}</li>
                                <li>{t("pp.lt.3.3.2.lt.3")}</li>
                            </ul>

                            <h3>3.3 {t("pp.lt.3.3.3.title")}</h3>
                            <ul>
                                <li>{t("pp.lt.3.3.3.lt.0")}</li>
                                <li>{t("pp.lt.3.3.3.lt.1")}</li>
                                <li>{t("pp.lt.3.3.3.lt.2")}</li>
                                <li>{t("pp.lt.3.3.3.lt.3")}</li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 4 */}
                    <section className="privacy-policy__section">
                        <h2 className="privacy-policy__section-title">4. {t("pp.lt.4.title")}</h2>
                        <div className="privacy-policy__section-content">
                            <p>{t("pp.lt.4.p")}:</p>

                            <h3>4.1 {t("pp.lt.4.4.1.title")}</h3>
                            <p>
                                {t("pp.lt.4.4.1.p")}
                            </p>

                            <h3>4.2 {t("pp.lt.4.4.2.title")}</h3>
                            <p>
                                {t("pp.lt.4.4.2.p")}
                            </p>

                            <h3>4.3 {t("pp.lt.4.4.3.title")}</h3>
                            <p>
                                {t("pp.lt.4.4.3.p")}
                            </p>

                            <h3>4.4 {t("pp.lt.4.4.4.title")}</h3>
                            <p>
                                {t("pp.lt.4.4.4.p")}
                            </p>
                        </div>
                    </section>

                    {/* Section 5 */}
                    <section className="privacy-policy__section">
                        <h2 className="privacy-policy__section-title">5. {t("pp.lt.5.title")}</h2>
                        <div className="privacy-policy__section-content">
                            <p>
                                {t("pp.lt.5.p")}:
                            </p>

                            <h3>5.1 {t("pp.lt.5.5.1.title")}</h3>
                            <ul>
                                <li>{t("pp.lt.5.5.1.lt.0")}</li>
                                <li>{t("pp.lt.5.5.1.lt.1")}</li>
                                <li>{t("pp.lt.5.5.1.lt.2")}</li>
                                <li>{t("pp.lt.5.5.1.lt.3")}</li>
                            </ul>

                            <h3>5.2{t("pp.lt.5.5.2.title")}</h3>
                            <ul>
                                <li>{t("pp.lt.5.5.2.lt.0")}</li>
                                <li>{t("pp.lt.5.5.2.lt.1")}</li>
                                <li>{t("pp.lt.5.5.2.lt.2")}</li>
                                <li>{t("pp.lt.5.5.2.lt.3")}</li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 6 */}
                    <section className="privacy-policy__section">
                        <h2 className="privacy-policy__section-title">6. {t("pp.lt.6.title")}</h2>
                        <div className="privacy-policy__section-content">
                            <p>
                                {t("pp.lt.6.p")}
                            </p>

                            <h3>6.1 {t("pp.lt.6.6.1.title")}</h3>
                            <ul>
                                <li>{t("pp.lt.6.6.1.lt.0")}</li>
                                <li>{t("pp.lt.6.6.1.lt.1")}</li>
                                <li>{t("pp.lt.6.6.1.lt.2")}</li>
                                <li>{t("pp.lt.6.6.1.lt.3")}</li>

                            </ul>

                            <h3>6.2  {t("pp.lt.6.6.2.title")}</h3>
                            <ul>
                                <li>{t("pp.lt.6.6.2.lt.0")}</li>
                                <li>{t("pp.lt.6.6.2.lt.1")}</li>
                                <li>{t("pp.lt.6.6.2.lt.2")}</li>
                                <li>{t("pp.lt.6.6.2.lt.3")}</li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 7 */}
                    <section className="privacy-policy__section">
                        <h2 className="privacy-policy__section-title">7. {t("pp.lt.7.title")}</h2>
                        <div className="privacy-policy__section-content">
                            <p>
                                {t("pp.lt.7.p")}:
                            </p>

                            <h3>7.1 {t("pp.lt.7.7.1.title")}</h3>
                            <p>
                                {t("pp.lt.7.7.1.p")}
                            </p>

                            <h3>7.2 {t("pp.lt.7.7.2.title")}</h3>
                            <p>
                                {t("pp.lt.7.7.2.p")}.
                            </p>

                            <h3>7.3 {t("pp.lt.7.7.3.title")}</h3>
                            <p>
                                {t("pp.lt.7.7.3.p")}.
                            </p>
                        </div>
                    </section>

                    {/* Section 8 */}
                    <section className="privacy-policy__section">
                        <h2 className="privacy-policy__section-title">8. {t("pp.lt.8.title")}</h2>
                        <div className="privacy-policy__section-content">
                            <p>
                                {t("pp.lt.8.p")}:
                            </p>

                            <div className="privacy-policy__rights">
                                <div className="privacy-policy__right">
                                    <h4>{t("pp.lt.8.lt.0.title")}</h4>
                                    <p>{t("pp.lt.8.lt.0.p")}.</p>
                                </div>

                                <div className="privacy-policy__right">
                                    <h4>{t("pp.lt.8.lt.1.title")}</h4>
                                    <p>{t("pp.lt.8.lt.1.p")}.</p>
                                </div>

                                <div className="privacy-policy__right">
                                    <h4>{t("pp.lt.8.lt.2.title")}</h4>
                                    <p>{t("pp.lt.8.lt.2.p")}.</p>
                                </div>

                                <div className="privacy-policy__right">
                                    <h4>{t("pp.lt.8.lt.3.title")}</h4>
                                    <p>{t("pp.lt.8.lt.3.p")}.</p>
                                </div>

                                <div className="privacy-policy__right">
                                    <h4>{t("pp.lt.8.lt.4.title")}</h4>
                                    <p>{t("pp.lt.8.lt.4.p")}.</p>
                                </div>

                                <div className="privacy-policy__right">
                                    <h4>{t("pp.lt.8.lt.5.title")}</h4>
                                    <p>{t("pp.lt.8.lt.5.p")}.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 9 */}
                    <section className="privacy-policy__section">
                        <h2 className="privacy-policy__section-title">9. {t("pp.lt.9.title")}</h2>
                        <div className="privacy-policy__section-content">
                            <p>
                                {t("pp.lt.9.p.0")}:
                            </p>

                            <div className="privacy-policy__contact">
                                <div className="privacy-policy__contact-item">
                                    <strong>Email:</strong> cuddlybreeze@gmail.com
                                </div>
                                <div className="privacy-policy__contact-item">
                                    <strong>{t("pp.lt.9.words.phone")}:</strong> +351 920 811 661
                                </div>
                                <div className="privacy-policy__contact-item">
                                    <strong>{t("pp.lt.9.words.adress")}:</strong> Rua das Hortênsias, Lote F, Loja D, R/C Faro 8005-196 Gambelas
                                </div>
                                <div className="privacy-policy__contact-item">
                                    <strong>{t("pp.lt.9.words.responsable")}:</strong> cuddlybreeze@gmail.com
                                </div>
                            </div>

                            <p>
                                {t("pp.lt.9.p.1.0")} <strong>{t("pp.lt.9.p.1.1")}</strong>.
                            </p>
                        </div>
                    </section>

                    {/* Section 10 */}
                    <section className="privacy-policy__section">
                        <h2 className="privacy-policy__section-title">10. {t("pp.lt.10.title")}</h2>
                        <div className="privacy-policy__section-content">
                            <p>
                                {t("pp.lt.10.p.0")}.
                            </p>
                            <p>
                                {t("pp.lt.10.p.1")}.
                            </p>
                        </div>
                    </section>
                </div>

                {/* Footer */}
                <div className="privacy-policy__footer">
                    <div className="privacy-policy__back">
                        <a href="/" className="privacy-policy__back-link">
                            ← {t("pp.btn_back")}
                        </a>
                    </div>

                    <div className="privacy-policy__related">
                        <p>{t("pp.rel_doc")}:</p>
                        <a href="/politica-cookies" className="privacy-policy__related-link">
                            {t("pp.pc")}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;