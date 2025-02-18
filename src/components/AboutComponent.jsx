import 'bootstrap/dist/css/bootstrap.min.css';
import logoImage from "../assets/images/icon03.png";
import '../styles/main.css';

const AboutComponent = () => {
  return (
    <div className="about-container" id='about'>
      <div className="logo-container">
        <img src={logoImage} alt="Logo" className="logo" />
      </div>
      <div className="text-container text-left about-text">
        <p className="tittle">About Us</p>
        <h1>Solusi Tukang</h1>
        <h1>Terbaik untuk Anda</h1>
        <p className="mb-4 about-desc">
          TukanginAja merupakan sebuah platform berbasis website sebagai layanan pemesanan jasa tukang yang sesuai dengan kebutuhan konsumen berdasarkan permasalahan bangunan.
        </p>
        <a href="/contact" className="about-href">Hubungi Kami</a>
      </div>
    </div>
  );
};

export default AboutComponent;