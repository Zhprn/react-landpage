import "../styles/main.css";
import Vector1 from "../assets/images/Group 22.png";
import Vector2 from "../assets/images/Group 24.png";
import Vector3 from "../assets/images/Group 25.png";
import Vector4 from "../assets/images/Group 26.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const TermsComponent = () => {
  return (
    <motion.div
      variants={fadeIn("down", 0.1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className="terms-section"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-3">
            <div className="terms-card">
              <img src={Vector1} alt="" className="img-fluid" />
              <h1>Tukang Profesional</h1>
              <p>
                Kami hadirkan tukang <br /> terlatih untuk pekerjaan <br />{" "}
                berkualitas
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="terms-card">
              <img src={Vector2} alt="" className="img-fluid" />
              <h1>Harga Terjangkau</h1>
              <p>
                Penawaran harga <br /> kompetitif tanpa <br /> mengurangi
                kualitas.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="terms-card">
              <img src={Vector3} alt="" className="img-fluid" />
              <h1>Support 24/7</h1>
              <p>
                Dukungan pelanggan <br /> yang aktif sepanjang <br /> waktu,
                siap membantu <br /> anda kapan pun.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="terms-card">
              <img src={Vector4} alt="" className="img-fluid" />
              <h1>Jaminan Kepuasan</h1>
              <p>
                Berkomitmen untuk <br /> memastikan kepuasan <br /> pelanggan
                dengan hasil <br /> pekerjaan
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TermsComponent;
