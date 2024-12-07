import './style.css';

export const FooterPage = () => {
    return (
        <>



            <div className="footer bg-dark pt-5 pb-4 pb-lg-5" data-bs-theme="dark">
            
                <div className="box-border"> </div>
                <div className="footer-square">
                    <div className="box-footer">
                        <img src="/img/ogo.png" className="img" />
                        <p>
                            Proin ipsum pharetra, senectus eget scelerisque varius pretium platea velit. Lacus, eget eu vitae
                            nullam
                            proin turpis etiam mi sit. Non feugiat feugiat egestas nulla nec. Arcu tempus, eget elementum dolor
                            ullamcorper sodales ultrices eros.
                        </p>
                        <span className="social-network">
                            <i className="bi bi-facebook"></i>
                            <i className="bi bi-youtube"></i>
                            <i className="bi bi-instagram"></i>
                            <i className="bi bi-twitter-x"></i>
                        </span>
                    </div>
                    <div className="box-footer" id="box-footer display: block;">
                        <h2>Contact us</h2>
                        <span>
                            <p>
                                Cell Phone:+1 895-895-56
                            </p>
                            <p> Email: test@gmail.com</p>
                        </span>
                    </div>
                    <div className="box-footer">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, harum placeat a nobis quod culpa non
                            eveniet dolorem repudiandae, amet ad saepe recusandae quasi vero adipisci cum ea alias magni.
                        </p>
                    </div>
                </div>
                <div className="box-border"> </div>
                <p className="text-aling:center">
                    Copyrights ©2024 All is Safe
                </p>
            </div>

        </>
    )
}