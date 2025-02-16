import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const HowToOrderComponent = () => {
  return (
    <section className="how-to-order text-center py-5">
      <motion.div
      variants={fadeIn("down", 0.1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }} >       
        <h5>How to Order?</h5>
        <h2>Bagaimana cara membuat pesanan?</h2>
      </motion.div>

      <motion.div
      variants={fadeIn("up", 0)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }} className="container">
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm border-light">
              <div className="card-body text-center">
                <h3>01</h3>
                <h4>Isi Formulir</h4>
                <p>
                  Beritahu detail dan kebutuhan Anda dengan mengisi beberapa
                  pertanyaan.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm border-light">
              <div className="card-body text-center">
                <h3>02</h3>
                <h4>Hubungi kami via Whatsapp</h4>
                <p>
                  Beritahu detail dan kebutuhan Anda dengan mengisi beberapa
                  pertanyaan.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm border-light">
              <div className="card-body text-center">
                <h3>03</h3>
                <h4>Pilih tukang yang terbaik</h4>
                <p>
                  Beritahu detail dan kebutuhan Anda dengan mengisi beberapa
                  pertanyaan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HowToOrderComponent;
