import React, {useEffect} from 'react';
import './CookiesPolicy.css';
import {useTranslation} from "react-i18next";

const CookiesPolicy: React.FC = () => {
    useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo(0, 0);
    }, []);


    const {t} = useTranslation();


    const handleManageCookies = () => {
        // This would trigger your cookies banner to reopen
        // You can implement this to show the cookies preference modal
        alert('Esta funcionalidade irá abrir as preferências de cookies.');
        console.log('Opening cookies preferences...');
    };

    return (
        <div className="cookies-policy">
            <div className="cookies-policy__container">
                {/* Header */}
                <div className="cookies-policy__header">
                    <h1 className="cookies-policy__title">Política de Cookies</h1>
                    <p className="cookies-policy__subtitle">
                        {t("pc.top_info.title")}
                    </p>
                    <div className="cookies-policy__meta">
                        <span className="cookies-policy__date">{t("pc.top_info.last_update")}</span>
                        <span className="cookies-policy__version">{t("pc.top_info.version")} 1.0</span>
                    </div>
                </div>

                {/* Content */}
                <div className="cookies-policy__content">

                    {/* Section 1 */}
                    <section className="cookies-policy__section">
                        <h2 className="cookies-policy__section-title">1. {t("pc.lt.0.title")}?</h2>
                        <div className="cookies-policy__section-content">
                            <p>{t("pc.lt.0.lt.0")}</p>
                            <p>{t("pc.lt.0.lt.1")}</p>
                        </div>
                    </section>

                    {/* Section 2 */}
                    <section className="cookies-policy__section">
                        <h2 className="cookies-policy__section-title">2. {t("pc.lt.1.title")}</h2>
                        <div className="cookies-policy__section-content">
                            <p>{t("pc.lt.1.p")}</p>

                            <h3>2.1 {t("pc.lt.1.sub.1.title")}</h3>
                            <ul>
                                <li>{t("pc.lt.1.sub.1.lt.0")}</li>
                                <li>{t("pc.lt.1.sub.1.lt.1")}</li>
                                <li>{t("pc.lt.1.sub.1.lt.2")}</li>
                                <li>{t("pc.lt.1.sub.1.lt.3")}</li>
                            </ul>

                            <h3>2.2 {t("pc.lt.1.sub.2.title")}</h3>
                            <ul>
                                <li> {t("pc.lt.1.sub.2.lt.0")}</li>
                                <li> {t("pc.lt.1.sub.2.lt.1")}</li>
                                <li> {t("pc.lt.1.sub.2.lt.2")}</li>
                                <li> {t("pc.lt.1.sub.2.lt.3")}</li>
                            </ul>

                            <h3>2.3 {t("pc.lt.1.sub.3.title")}</h3>
                            <ul>
                                <li>{t("pc.lt.1.sub.3.lt.0")}</li>
                                <li>{t("pc.lt.1.sub.3.lt.1")}</li>
                                <li>{t("pc.lt.1.sub.3.lt.2")}</li>
                                <li>{t("pc.lt.1.sub.3.lt.3")}</li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section className="cookies-policy__section">
                        <h2 className="cookies-policy__section-title">3. {t("pc.lt.2.title")}</h2>
                        <div className="cookies-policy__section-content">
                            <p>
                                {t("pc.lt.2.p")}
                            </p>

                            <div className="cookies-policy__cookie-types">
                                <div className="cookies-policy__cookie-type">
                                    <h4>🔧 {t("pc.lt.2.lt.0.title")}</h4>
                                    <div
                                        className="cookies-policy__cookie-badge cookies-policy__cookie-badge--required">
                                        {t("pc.lt.2.lt.0.inf")}
                                    </div>
                                    <p>{t("pc.lt.2.lt.0.p")}</p>
                                    <ul>
                                        <li>{t("pc.lt.2.lt.0.lt.0")}</li>
                                        <li>{t("pc.lt.2.lt.0.lt.1")}</li>
                                        <li>{t("pc.lt.2.lt.0.lt.2")}</li>
                                        <li>{t("pc.lt.2.lt.0.lt.3")}</li>
                                    </ul>
                                </div>

                                <div className="cookies-policy__cookie-type">
                                    <h4>📊 {t("pc.lt.2.lt.1.title")}</h4>
                                    <div
                                        className="cookies-policy__cookie-badge cookies-policy__cookie-badge--optional">
                                        {t("pc.lt.2.lt.1.inf")}
                                    </div>
                                    <p>{t("pc.lt.2.lt.1.p")}</p>
                                    <ul>
                                        <li>{t("pc.lt.2.lt.1.lt.0")}</li>
                                        <li>{t("pc.lt.2.lt.1.lt.1")}</li>
                                        <li>{t("pc.lt.2.lt.1.lt.2")}</li>
                                        <li>{t("pc.lt.2.lt.1.lt.3")}</li>
                                    </ul>
                                </div>

                                <div className="cookies-policy__cookie-type">
                                    <h4>📈 {t("pc.lt.2.lt.2.title")}</h4>
                                    <div
                                        className="cookies-policy__cookie-badge cookies-policy__cookie-badge--optional">
                                        {t("pc.lt.2.lt.2.inf")}
                                    </div>
                                    <p>{t("pc.lt.2.lt.2.p")}</p>
                                    <ul>
                                        <li>{t("pc.lt.2.lt.2.lt.0")}</li>
                                        <li>{t("pc.lt.2.lt.2.lt.1")}</li>
                                        <li>{t("pc.lt.2.lt.2.lt.2")}</li>
                                        <li>{t("pc.lt.2.lt.2.lt.3")}</li>
                                    </ul>
                                </div>

                                <div className="cookies-policy__cookie-type">
                                    <h4>⚙️ {t("pc.lt.2.lt.3.title")}</h4>
                                    <div
                                        className="cookies-policy__cookie-badge cookies-policy__cookie-badge--optional">
                                        {t("pc.lt.2.lt.3.inf")}
                                    </div>
                                    <p>{t("pc.lt.2.lt.3.p")}</p>
                                    <ul>
                                        <li>{t("pc.lt.2.lt.3.lt.0")}</li>
                                        <li>{t("pc.lt.2.lt.3.lt.1")}</li>
                                        <li>{t("pc.lt.2.lt.3.lt.2")}</li>
                                        <li>{t("pc.lt.2.lt.3.lt.3")}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 4 */}
                    <section className="cookies-policy__section">
                        <h2 className="cookies-policy__section-title">4. {t("pc.lt.3.title")}</h2>
                        <div className="cookies-policy__section-content">
                            {t("pc.lt.3.p")}

                            <div className="cookies-policy__table-wrapper">
                                <table className="cookies-policy__table">
                                    <thead>
                                    <tr>
                                        <th>{t("pc.lt.3.tbl.hdr.name")}</th>
                                        <th>{t("pc.lt.3.tbl.hdr.type")}</th>
                                        <th>{t("pc.lt.3.tbl.hdr.duration")}</th>
                                        <th>{t("pc.lt.3.tbl.hdr.obj")}</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td><code>Cuddly Breeze-cookies-consent</code></td>
                                        <td>{t("pc.lt.3.tbl.type.necessary")}</td>
                                        <td>1 {t("pc.lt.3.tbl.duration.year")}</td>
                                        <td>{t("pc.lt.3.tbl.obj.0")}</td>
                                    </tr>
                                    <tr>
                                        <td><code>session_id</code></td>
                                        <td>{t("pc.lt.3.tbl.type.necessary")}</td>
                                        <td>{t("pc.lt.3.tbl.duration.section")}</td>
                                        <td>{t("pc.lt.3.tbl.obj.1")}</td>
                                    </tr>
                                    <tr>
                                        <td><code>_ga</code></td>
                                        <td>{t("pc.lt.3.tbl.type.analize")}</td>
                                        <td>2 {t("pc.lt.3.tbl.duration.year")}</td>
                                        <td>{t("pc.lt.3.tbl.obj.2")}</td>
                                    </tr>
                                    <tr>
                                        <td><code>_ga_*</code></td>
                                        <td>{t("pc.lt.3.tbl.type.analize")}</td>
                                        <td>2 {t("pc.lt.3.tbl.duration.year")}</td>
                                        <td>{t("pc.lt.3.tbl.obj.3")}</td>
                                    </tr>
                                    <tr>
                                        <td><code>_fbp</code></td>
                                        <td>{t("pc.lt.3.tbl.type.marketing")}</td>
                                        <td>3 {t("pc.lt.3.tbl.duration.months")}</td>
                                        <td>{t("pc.lt.3.tbl.obj.4")}</td>
                                    </tr>
                                    <tr>
                                        <td><code>_gcl_au</code></td>
                                        <td>{t("pc.lt.3.tbl.type.marketing")}</td>
                                        <td>3 {t("pc.lt.3.tbl.duration.months")}</td>
                                        <td>{t("pc.lt.3.tbl.obj.5")}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    {/* Section 5 */}
                    <section className="cookies-policy__section">
                        <h2 className="cookies-policy__section-title">5. {t("pc.lt.4.title")}</h2>
                        <div className="cookies-policy__section-content">
                            <h3>5.1 {t("pc.lt.4.sub.1.title")}</h3>
                            <p>
                                {t("pc.lt.4.sub.1.p")}
                            </p>

                            <div className="cookies-policy__manage">
                                <button
                                    className="cookies-policy__manage-btn"
                                    onClick={handleManageCookies}
                                >
                                    🍪 {t("pc.lt.4.sub.1.btn")}
                                </button>
                            </div>

                            <h3>5.2 {t("pc.lt.4.sub.2.title")}</h3>
                            <p>
                                {t("pc.lt.4.sub.2.p")}
                            </p>
                            <ul>
                                <li>{t("pc.lt.4.sub.2.lt.0")}</li>
                                <li>{t("pc.lt.4.sub.2.lt.1")}</li>
                                <li>{t("pc.lt.4.sub.2.lt.2")}</li>
                                <li>{t("pc.lt.4.sub.2.lt.3")}</li>
                            </ul>

                            <h3>5.3 {t("pc.lt.4.sub.3.title")}</h3>
                            <div className="cookies-policy__browsers">
                                <a href="https://support.google.com/chrome/answer/95647" target="_blank"
                                   rel="noopener noreferrer">
                                    Google Chrome
                                </a>
                                <a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
                                   target="_blank" rel="noopener noreferrer">
                                    Mozilla Firefox
                                </a>
                                <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                                   target="_blank" rel="noopener noreferrer">
                                    Safari
                                </a>
                                <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                                   target="_blank" rel="noopener noreferrer">
                                    Microsoft Edge
                                </a>
                            </div>
                        </div>
                    </section>

                    {/* Section 6 */}
                    <section className="cookies-policy__section">
                        <h2 className="cookies-policy__section-title">6. {t("pc.lt.5.title")}</h2>
                        <div className="cookies-policy__section-content">
                            <p>
                                {t("pc.lt.5.p")}
                            </p>

                            <div className="cookies-policy__third-parties">
                                <div className="cookies-policy__third-party">
                                    <h4>{t("pc.lt.5.lt.0.title")}</h4>
                                    <p>{t("pc.lt.5.lt.0.p")}</p>
                                    <a href="https://policies.google.com/privacy" target="_blank"
                                       rel="noopener noreferrer">
                                        {t("pc.lt.5.lt.0.link")}
                                    </a>
                                </div>

                                <div className="cookies-policy__third-party">
                                    <h4>{t("pc.lt.5.lt.1.title")}</h4>
                                    <p>{t("pc.lt.5.lt.1.p")}</p>
                                    <a href="https://www.facebook.com/privacy/explanation" target="_blank"
                                       rel="noopener noreferrer">
                                        {t("pc.lt.5.lt.1.link")}
                                    </a>
                                </div>

                                <div className="cookies-policy__third-party">
                                    <h4>{t("pc.lt.5.lt.2.title")}</h4>
                                    <p>{t("pc.lt.5.lt.2.p")}</p>
                                    <a href="https://policies.google.com/privacy" target="_blank"
                                       rel="noopener noreferrer">
                                        <p>{t("pc.lt.5.lt.2.link")}</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 7 */}
                    <section className="cookies-policy__section">
                        <h2 className="cookies-policy__section-title">7. {t("pc.lt.6.title")}</h2>
                        <div className="cookies-policy__section-content">
                            <p>
                                {t("pc.lt.6.p")}
                            </p>

                            <div className="cookies-policy__impact">
                                <div className="cookies-policy__impact-item cookies-policy__impact-item--warning">
                                    <h4>⚠️ {t("pc.lt.6.lt.0.title")}</h4>
                                    <p>
                                        {t("pc.lt.6.lt.0.p")}
                                    </p>
                                </div>

                                <div className="cookies-policy__impact-item cookies-policy__impact-item--info">
                                    <h4>ℹ️ {t("pc.lt.6.lt.1.title")}</h4>
                                    <p>
                                        {t("pc.lt.6.lt.1.p")}
                                    </p>
                                </div>

                                <div className="cookies-policy__impact-item cookies-policy__impact-item--neutral">
                                    <h4>📢 {t("pc.lt.6.lt.2.title")}</h4>
                                    <p>{t("pc.lt.6.lt.2.p")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 8 */}
                    <section className="cookies-policy__section">
                        <h2 className="cookies-policy__section-title">8. {t("pc.lt.7.title")}</h2>
                        <div className="cookies-policy__section-content">
                            <p>
                                {t("pc.lt.7.lt.0")}
                            </p>
                            <p>
                                {t("pc.lt.7.lt.1")}
                            </p>
                            <p>
                                {t("pc.lt.7.lt.2")}
                            </p>
                        </div>
                    </section>

                    {/* Section 9 */}
                    <section className="cookies-policy__section">
                        <h2 className="cookies-policy__section-title">9. {t("pc.lt.8.title")}</h2>
                        <div className="cookies-policy__section-content">
                            <p>{t("pc.lt.8.p")}
                            </p>

                            <div className="cookies-policy__contact">
                                <div className="cookies-policy__contact-item">
                                    <strong>{t("pc.lt.8.lt.0")}:</strong> cuddlybreeze@gmail.com
                                </div>
                                <div className="cookies-policy__contact-item">
                                    <strong>{t("pc.lt.8.lt.1")}:</strong> +351 920 811 661
                                </div>
                                <div className="cookies-policy__contact-item">
                                    <strong>{t("pc.lt.8.lt.2")}:</strong> Rua das Hortênsias, Lote F, Loja D, R/C Faro
                                    8005-196 Gambelas
                                </div>
                            </div>

                            <p>
                                {t("pc.lt.8.quest.0")} <a href="/politica-privacidade"> {t("pc.lt.8.quest.1")}</a>.
                            </p>
                        </div>
                    </section>
                </div>

                {/* Footer */}
                <div className="cookies-policy__footer">
                    <div className="cookies-policy__back">
                        <a href="/" className="cookies-policy__back-link">
                            ← {t("pc.bk_btn")}
                        </a>
                    </div>

                    <div className="cookies-policy__related">
                        <p>{t("pc.rel_docs")}:</p>
                        <a href="/politica-privacidade" className="cookies-policy__related-link">
                            {t("pc.priv_pol")}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CookiesPolicy;