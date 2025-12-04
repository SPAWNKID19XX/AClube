import './MainCintent.css'
import { useTranslation } from "react-i18next";

function MainContent() {
    const {t} = useTranslation()
    return (
        <>
            <div className="container">
                <div className="main_content_conteiner">
                    <div className="top-section">
                        <h1>{t("main_content.h1.0")} <br/>{t("main_content.h1.1")}</h1>
                        <p>{t("main_content.p")}</p>
                    </div>
                </div>
            </div>
            <div className="join-section">
                <div className="coll"><img src="../../src/assets/img/bg-shampagne.png" alt="Shampagne" /></div>
                <div className="coll"><img src="../../src/assets/img/mask.png" alt="" /></div>
                <div className="coll">
                    <form action="">
                        <h1>{t("main_content.form.title")}</h1>
                        <p className='form_subtitle'>{t("main_content.form.subtitle")}</p>
                        <div className="row">
                            <label>{t("main_content.form.label.0")}:</label>
                            <input type="text" />
                        </div>
                        
                        <div className="row">
                            <label>Email:</label>
                            <input type="email" />
                        </div>
                        
                        
                        <div className="row">
                            <label>{t("main_content.form.label.1")}:</label>
                            <input type="text" />
                        </div>
                        
                        <a className='btn-join'>{t("main_content.form.button_submit")}</a>
                    </form>
                </div>
            </div>
        </>
    )
}

export default MainContent