
import './footer.css';
export const FooterComponent = () => {
  return (
    <>
    <div className="footer bg-dark pt-5 pb-4 pb-lg-5" data-bs-theme="dark">
        <div className="content-circle">
            
            <div className="box-circle">
               
                <img src="/img/IMG-20240802-WA0082.jpg" alt="Image"/>
                <span>Title</span>
            </div>
            <div className="box-circle">
                <img src="/img/IMG-20240802-WA0049.jpg" alt="Image"/>
            </div>
            <div className="box-circle">
                <img src="/img/IMG-20240802-WA0040.jpg" alt="Image"/>
            </div>
            <div className="box-circle">
                <img src="/img/IMG-20240802-WA0043.jpg" alt="Image" />
            </div>
    
        </div>
        <div className="box-border">
        <div className="box-footer">
            <p>
                Proin ipsum pharetra, senectus eget scelerisque varius pretium platea velit. Lacus, eget eu vitae nullam
                proin turpis etiam mi sit. Non feugiat feugiat egestas nulla nec. Arcu tempus, eget elementum dolor
                ullamcorper sodales ultrices eros.
            </p>
            <form className="needs-validation" >
                <label  className="form-label">Subscribe to our newsletter</label>
                <div className="input-group">
                    <input type="email" id="subscr-email" className="form-control rounded-start ps-5"
                        placeholder="Your email"/>
                    <i
                        className="bx bx-envelope fs-lg text-muted position-absolute top-50 start-0 translate-middle-y ms-3 zindex-5"></i>
                    <div className="invalid-tooltip position-absolute top-100 start-0">Please provide a valid email address.
                    </div>
                    <button type="submit" className="btn btn-primary">Subscribe</button>
                </div>
            </form>
        </div>
        <div className="box-footer">
            <h6>
                <a href="#useful-links" data-bs-toggle="collapse">Useful Links</a>
            </h6>
            <div>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
                <ul>
                    <li><a href="#">Terms &amp; Conditions</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                </ul>
            </div>
            <div>
                <h6>
                    <a href="#social-links" className="d-block text-dark dropdown-toggle d-lg-none py-2"
                        data-bs-toggle="collapse">Socials</a>
                </h6>
                <div>
                    <ul>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">LinkedIn</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Instagram</a></li>
                    </ul>
                </div>
            </div>
            <div>
                <h6>Contact Us</h6>
                <a href="mailto:email@example.com" className="fw-medium">email@example.com</a>
            </div>


        </div>
    </div>
</div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
            ></script>

    </>
  )
}
