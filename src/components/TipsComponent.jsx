import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.css";
import Tip1 from "../assets/images/tips1.png";
import Tip2 from "../assets/images/tips2.png";
import Tip3 from "../assets/images/tips3.png";
import { motion } from "framer-motion";

const TipComponent = () => {
  return (
    <div className="tips-section py-5" id="blog">
      <h2 className="mb-4">Tips dan Inspirasi</h2>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {/* Tips Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col"
          >
            <div className="card h-100">
              <img src={Tip1} alt="Tips 1" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">
                  6 Trik untuk Mempercantik Interior Rumah Agar Lebih Fungsional
                </h5>
                <p className="card-text">
                  Ingin mempercantik interior rumah yang sekarang, tapi tidak
                  punya waktu dan anggaran yang cukup?
                </p>
              </div>
            </div>
          </motion.div>

          {/* Tips Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="col"
          >
            <div className="card h-100">
              <img src={Tip2} alt="Tips 2" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">
                  6 Trik untuk Mempercantik Interior Rumah Agar Lebih Fungsional
                </h5>
                <p className="card-text">
                  Ingin mempercantik interior rumah yang sekarang, tapi tidak
                  punya waktu dan anggaran yang cukup?
                </p>
              </div>
            </div>
          </motion.div>

          {/* Tips Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="col">
            <div className="card h-100">
              <img src={Tip3} alt="Tips 3" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">
                  6 Trik untuk Mempercantik Interior Rumah Agar Lebih Fungsional
                </h5>
                <p className="card-text">
                  Ingin mempercantik interior rumah yang sekarang, tapi tidak
                  punya waktu dan anggaran yang cukup?
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TipComponent;
