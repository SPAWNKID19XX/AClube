import React, {useEffect} from 'react';
import './TermsConditions.css';

import {useTranslation} from "react-i18next";

const TermsConditions: React.FC = () => {
    useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo(0, 0);
    }, []);

    const {t} = useTranslation();

    return (
        <div className="terms-conditions">
            <div className="terms-conditions__container">
                {/* Header */}
                <div className="terms-conditions__header">
                    <h1 className="terms-conditions__title">Termos e Condições</h1>
                    <p className="terms-conditions__subtitle">
                        {t("tc.top_info.p")}
                    </p>
                    <div className="terms-conditions__meta">
                        <span className="terms-conditions__date">{t("tc.top_info.last_update")}</span>
                        <span className="terms-conditions__version">{t("tc.top_info.version")} 1.0</span>
                    </div>
                </div>

                {/* Content */}
                <div className="terms-conditions__content">

                    {/* Section 1 */}
                    <section className="terms-conditions__section">
                        <h2 className="terms-conditions__section-title">1. {t("tc.lt.1.title")}</h2>
                        <div className="terms-conditions__section-content">
                            <p>{t("tc.lt.1.p.0")}</p>
                            <p>{t("tc.lt.1.p.1")}</p>
                        </div>
                    </section>

                    {/* Section 2 */}
                    <section className="terms-conditions__section">
                        <h2 className="terms-conditions__section-title">2. {t("tc.lt.2.title")}</h2>
                        <div className="terms-conditions__section-content">
                            <div className="terms-conditions__contact">
                                <div className="terms-conditions__contact-item">
                                    <strong>{t("tc.lt.2.words.name")}:</strong> Cuddly
                                </div>
                                <div className="terms-conditions__contact-item">
                                    <strong>{t("tc.lt.2.words.adress")}:</strong> Rua das Hortênsias, Lote F, Loja D, R/C Faro 8005-196 Gambelas
                                </div>
                                <div className="terms-conditions__contact-item">
                                    <strong>{t("tc.lt.2.words.phone")}:</strong> +351 920 811 661
                                </div>
                                <div className="terms-conditions__contact-item">
                                    <strong>Email:</strong> cuddlybreeze@gmail.com
                                </div>
                                <div className="terms-conditions__contact-item">
                                    <strong>Website:</strong> cuddlybreeze@gmail.com
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section className="terms-conditions__section">
                        <h2 className="terms-conditions__section-title">3. {t("tc.lt.3.title")}</h2>
                        <div className="terms-conditions__section-content">
                            <p>
                                {t("tc.lt.3.p")}:
                            </p>

                            <h3>3.1 {t("tc.lt.3.3.1.title")}</h3>
                            <ul>
                                <li>{t("tc.lt.3.3.1.lt.0")}</li>
                                <li>{t("tc.lt.3.3.1.lt.1")}</li>
                                <li>{t("tc.lt.3.3.1.lt.2")}</li>
                                <li>{t("tc.lt.3.3.1.lt.3")}</li>
                                <li>{t("tc.lt.3.3.1.lt.4")}</li>
                                <li>{t("tc.lt.3.3.1.lt.5")}</li>
                                <li>{t("tc.lt.3.3.1.lt.6")}</li>
                                <li>{t("tc.lt.3.3.1.lt.7")}</li>
                            </ul>

                            <h3>3.2 {t("tc.lt.3.3.2.title")}</h3>
                            <p>
                                {t("tc.lt.3.3.2.p")}
                            </p>
                        </div>
                    </section>

                    {/* Section 4 */}
                    <section className="terms-conditions__section">
                        <h2 className="terms-conditions__section-title">4. {t("tc.lt.4.title")}</h2>
                        <div className="terms-conditions__section-content">
                            <h3>4.1 {t("tc.lt.4.4.1.title")}</h3>
                            <p>{t("tc.lt.4.4.1.p")}
                            </p>

                            <h3>4.2 {t("tc.lt.4.4.2.title")}</h3>
                            <p>{t("tc.lt.4.4.2.p")}:</p>
                            <ul>
                                <li>{t("tc.lt.4.4.2.lt.0")}</li>
                                <li>{t("tc.lt.4.4.2.lt.1")}</li>
                                <li>{t("tc.lt.4.4.2.lt.2")}</li>
                                <li>{t("tc.lt.4.4.2.lt.3")}</li>
                                <li>{t("tc.lt.4.4.2.lt.4")}</li>
                            </ul>

                            <h3>4.3 {t("tc.lt.4.4.3.title")}</h3>
                            <p>{t("tc.lt.4.4.3.p")}
                            </p>
                        </div>
                    </section>

                    {/* Section 5 */}
                    <section className="terms-conditions__section">
                        <h2 className="terms-conditions__section-title">5. {t("tc.lt.5.title")}</h2>
                        <div className="terms-conditions__section-content">
                            <h3>5.1 {t("tc.lt.5.5.1.title")}</h3>
                            <p>
                                {t("tc.lt.5.5.1.p")}
                            </p>
                            <h3>5.2 {t("tc.lt.5.5.2.title")}</h3>
                            <ul>
                                <li>{t("tc.lt.5.5.2.lt.0")}</li>
                                <li>{t("tc.lt.5.5.2.lt.1")}</li>
                                <li>{t("tc.lt.5.5.2.lt.2")}</li>
                                <li>{t("tc.lt.5.5.2.lt.3")}</li>
                            </ul>
                            <h3>5.3 {t("tc.lt.5.5.3.title")}</h3>
                            <p>{t("tc.lt.5.5.3.p")}
                            </p>
                        </div>
                    </section>

                    {/* Section 6 */}
                    <section className="terms-conditions__section">
                        <h2 className="terms-conditions__section-title">6. {t("tc.lt.6.title")}</h2>
                        <div className="terms-conditions__section-content">
                            <h3>6.1 {t("tc.lt.6.subtitle")}</h3>
                            <ul>
                                <li>{t("tc.lt.6.6.1.0")}</li>
                                <li>{t("tc.lt.6.6.1.1")}</li>
                                <li>{t("tc.lt.6.6.1.2")}</li>
                                <li>{t("tc.lt.6.6.1.3")}</li>
                            </ul>

                            <h3>6.2 {t("tc.lt.6.6.2.title")}</h3>
                            <p>
                                {t("tc.lt.6.6.2.p")}
                            </p>

                            <h3>6.3 {t("tc.lt.6.6.3.title")}</h3>
                            <p>{t("tc.lt.6.6.2.p")}
                            </p>
                        </div>
                    </section>

                    {/* Section 7 */}
                    <section className="terms-conditions__section">
                        <h2 className="terms-conditions__section-title">7. {t("tc.lt.7.title")}</h2>
                        <div className="terms-conditions__section-content">
                            <h3>7.1 {t("tc.lt.7.7.1.title")}</h3>
                            <p>{t("tc.lt.7.7.1.p")}
                            </p>

                            <h3>7.2 {t("tc.lt.7.7.2.title")}</h3>
                            <ul>
                                <li>{t("tc.lt.7.7.2.lt.0")}</li>
                                <li>{t("tc.lt.7.7.2.lt.1")}</li>
                                <li>{t("tc.lt.7.7.2.lt.2")}</li>
                                <li>{t("tc.lt.7.7.2.lt.3")}</li>
                            </ul>

                            <h3>7.3 {t("tc.lt.7.7.3.title")}</h3>
                            <p>
                                {t("tc.lt.7.7.3.p")}
                            </p>
                        </div>
                    </section>

                    {/* Section 8 */}
                    <section className="terms-conditions__section">
                        <h2 className="terms-conditions__section-title">8. {t("tc.lt.8.title.title")}</h2>
                        <div className="terms-conditions__section-content">
                            <p>{t("tc.lt.8.title.p.0")}<strong> {t("tc.lt.8.title.p.1")}</strong>, {t("tc.lt.8.title.p.2")}
                            </p>

                            <h3>8.1 {t("tc.lt.8.8.1.title")}</h3>
                            <ul>
                                <li>{t("tc.lt.8.8.1.lt.0")}</li>
                                <li>{t("tc.lt.8.8.1.lt.1")}</li>
                                <li>{t("tc.lt.8.8.1.lt.2")}</li>
                                <li>{t("tc.lt.8.8.1.lt.3")}</li>
                            </ul>

                            <h3>8.2 {t("tc.lt.8.8.2.title")}</h3>
                            <p>

                                {t("tc.lt.8.8.2.p")}
                            </p>
                        </div>
                    </section>

                    {/* Section 9 */}
                    <section className="terms-conditions__section">
                        <h2 className="terms-conditions__section-title">9. {t("tc.lt.9.title")}</h2>
                        <div className="terms-conditions__section-content">
                            <h3>9.1 {t("tc.lt.9.9.1.title")}</h3>
                            <p>
                                {t("tc.lt.9.9.1.p")}
                            </p>

                            <h3>9.2 {t("tc.lt.9.9.2.title")}</h3>
                            <p>
                                {t("tc.lt.9.9.2.p")}
                            </p>

                            <h3>9.3 {t("tc.lt.9.9.3.title")}</h3>
                            <p>
                                {t("tc.lt.9.9.3.p")}.
                            </p>
                        </div>
                    </section>

                    {/* Section 10 */}
                    <section className="terms-conditions__section">
                        <h2 className="terms-conditions__section-title">10. {t("tc.lt.10.title")}</h2>
                        <div className="terms-conditions__section-content">
                            <h3>10.1 {t("tc.lt.10.10.1.title")}</h3>
                            <p>
                                {t("tc.lt.10.10.1.p")}.
                            </p>

                            <h3>10.2 {t("tc.lt.10.10.2.title")}</h3>
                            <p>{t("tc.lt.10.10.2.p")}.
                            </p>

                            <h3>10.3 {t("tc.lt.10.10.3.title")}</h3>
                            <p>
                                {t("tc.lt.10.10.3.p")}:
                            </p>

                            <div className="terms-conditions__contact">
                                <div className="terms-conditions__contact-item">
                                    <strong>Email:</strong> cuddlybreeze@gmail.com
                                </div>
                                <div className="terms-conditions__contact-item">
                                    <strong>{t("tc.lt.2.words.phone")}:</strong> +351 920 811 661
                                </div>
                                <div className="terms-conditions__contact-item">
                                    <strong>WhatsApp:</strong> +351 915 007 427
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Footer */}
                <div className="terms-conditions__footer">
                    <div className="terms-conditions__back">
                        <a href="/" className="terms-conditions__back-link">
                            ← {t("tc.btn_back")}
                        </a>
                    </div>

                    <div className="terms-conditions__related">
                        <p>{t("tc.rel_doc")}:</p>
                        <a href="/politica-privacidade" className="terms-conditions__related-link">
                            {t("tc.pp")}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsConditions;