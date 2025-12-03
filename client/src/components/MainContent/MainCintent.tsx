import './MainCintent.css'

function MainContent() {
    return (
        <>
            <div className="container">
                <div className="main_content_conteiner">
                    <div className="top-section">
                        <h1>Exclusive <br/>Private Parties</h1>
                        <p>Discover a world of sophistication and pleasure</p>
                    </div>
                </div>
            </div>
            <div className="join-section">
                <div className="coll"><img src="../../src/assets/img/bg-shampagne.png" alt="Shampagne" /></div>
                <div className="coll"><img src="../../src/assets/img/mask.png" alt="" /></div>
                <div className="coll">
                    <form action="">
                        <h1>Join us</h1>
                        <p className='form_subtitle'>our vibe gets better with every new person who walks in</p>
                        <div className="row">
                            <label>Name:</label>
                            <input type="text" />
                        </div>
                        
                        <div className="row">
                            <label>Email:</label>
                            <input type="email" />
                        </div>
                        
                        
                        <div className="row">
                            <label>Phone:</label>
                            <input type="text" />
                        </div>
                        
                        <a className='btn-join'>Join</a>
                    </form>
                </div>
            </div>
        </>
    )
}

export default MainContent