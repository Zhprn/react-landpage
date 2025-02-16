import 'bootstrap/dist/css/bootstrap.min.css';
import logoImage from "../assets/images/icon03.png";
import '../styles/main.css';

const AboutComponent = () => {
  return (
    <div className="about-container" id='about'>
      <div className="logo-container">
        <img src={logoImage} alt="Logo" className="logo" />
      </div>

      <div className="text-container text-center">
        <h1 className="display-4">About Us</h1>
        <h2 className="lead">Solusi Tukang</h2>
        <h2 className="lead">Terbaik untuk Anda</h2>
        <p className="mb-4">
          TukanginAja merupakan sebuah platform berbasis website sebagai layanan pemesanan jasa tukang yang sesuai dengan kebutuhan konsumen berdasarkan permasalahan bangunan.
        </p>
        <a href="/contact" className="btn btn-primary btn-lg">Hubungi Kami</a>
      </div>
    </div>
  );
};

export default AboutComponent;