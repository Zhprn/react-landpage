import '../styles/main.css';
import bca from "../assets/images/bca.png"
import visa from "../assets/images/visa.png"
import gopay from "../assets/images/gopay.png"
import dana from "../assets/images/dana.png"
import paypal from "../assets/images/paypal.png"
import vca from "../assets/images/vca.png"
import footerlogo from "../assets/images/footer-logo.png"

const FooterComponent = () => {
  return (
    <footer className="footer bg-primary text-white py-4">
      <div className="container">
        <div className="row">
          {}
          <div className="col-md-4 mb-4 footer-brand">
            <h2>
              <span className="logo-icon">
                <img src={footerlogo} alt="Logo" width="30" />
              </span> TukanginAja
            </h2>
            <p>
              TukanginAja merupakan sebuah platform berbasis website sebagai layanan pemesanan jasa tukang yang sesuai dengan kebutuhan konsumen berdasarkan permasalahan bangunan yang ada.
            </p>
            <div className="social-icons mt-3">
              <a href="#" className="text-white mx-2"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-white mx-2"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-white mx-2"><i className="fab fa-youtube"></i></a>
              <a href="#" className="text-white mx-2"><i className="fab fa-tiktok"></i></a>
            </div>
            <p className="mt-3">
              © 2023 TukanginAja | Powered by <a href="#" className="text-warning">PT Metro Indonesian Software</a>
            </p>
          </div>

          {}
          <div className="col-md-2 mb-4 footer-nav">
            <h4>Page</h4>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Home</a></li>
              <li><a href="#about" className="text-white">About</a></li>
              <li><a href="#service" className="text-white">Service</a></li>
              <li><a href="#blog" className="text-white">Blog</a></li>
              <li><a href="#order" className="text-white">Order</a></li>
            </ul>
          </div>

          <div className="col-md-3 mb-4 footer-contact">
            <h4>Office</h4>
            <p>Jl. Mangga</p>
            <p>Kota Padang, Sumatera Barat</p>
            <p>Indonesia</p>
            <p>+62 822 8925 7069</p>
          </div>

          <div className="col-md-3 mb-2 footer-payment d-flex align-items-center gap-2">
            <img src={visa} alt="Visa" height="30" />
            <img src={vca} alt="Mastercard" height="30" />
            <img src={gopay} alt="GoPay" height="30" />
            <img src={dana} alt="Dana" height="30" />
            <img src={paypal} alt="PayPal" height="30" />
            <img src={bca} alt="BCA" height="30" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
