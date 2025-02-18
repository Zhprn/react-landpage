import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.css';
import { motion } from "framer-motion";
import caticon from "../assets/images/caticon.png";
import dinding from "../assets/images/dinding.png";
import kebocoran from "../assets/images/kebocoran.png";
import keramik from "../assets/images/keramik.png";
import listrik from "../assets/images/listrik.png";
import pipa from "../assets/images/pipa.png";
import gas from "../assets/images/oxygen.png";
import pintu from "../assets/images/pintu.png";
import kebun from "../assets/images/kebun.png";
import conblock from "../assets/images/conblock.png";

const ServiceComponent = () => {
  return (
    <section className="layanan py-5" id='service'>
      <h2 className="mb-4">Layanan Kami</h2>
      <motion.div 
      initial= {{ opacity: 0, scale: 0}}
      whileInView={{ opacity:1, scale:1}}
      transition={{ duration: 0.6 }}
      className="layanan-container">
        <div className="layanan-card">       
          <div className="overlay"></div>
          <img src={caticon} alt="image" className="img-fluid"/>
          <h3>Cat</h3>
          <p>Perbaikan apa yang ingin kamu lakukan untuk Cat kamu?</p>
          <button className="btn btn-outline-light">Selengkapnya</button>
        </div>

        {/* Layanan Card 2 */}
        <div className="layanan-card">
          <div className="overlay"></div>
          <img src={listrik} alt="image" className="img-fluid"/>
          <h3>Listrik</h3>
          <p>Perbaikan apa yang ingin kamu lakukan untuk Listrik kamu?</p>
          <button className="btn btn-outline-light">Selengkapnya</button>
        </div>

        {/* Layanan Card 3 */}
        <div className="layanan-card">
          <div className="overlay"></div>
          <img src={pipa} alt="image" className="img-fluid"/>
          <h3>Pipa</h3>
          <p>Perbaikan apa yang ingin kamu lakukan untuk Pipa kamu?</p>
          <button className="btn btn-outline-light">Selengkapnya</button>
        </div>

        {/* Layanan Card 4 */}
        <div className="layanan-card">
          <div className="overlay"></div>
          <img src={kebocoran} alt="image" className="img-fluid"/>
          <h3>Kebocoran</h3>
          <p>Perbaikan apa yang ingin kamu lakukan untuk Kebocoran kamu?</p>
          <button className="btn btn-outline-light">Selengkapnya</button>
        </div>

        {/* Layanan Card 5 */}
        <div className="layanan-card">
          <div className="overlay"></div>
          <img src={dinding} alt="image" className="img-fluid"/>
          <h3>Dinding</h3>
          <p>Perbaikan apa yang ingin kamu lakukan untuk Dinding kamu?</p>
          <button className="btn btn-outline-light">Selengkapnya</button>
        </div>

        {/* Layanan Card 6 */}
        <div className="layanan-card">
          <div className="overlay"></div>
          <img src={keramik} alt="image" className="img-fluid"/>
          <h3>Keramik</h3>
          <p>Perbaikan apa yang ingin kamu lakukan untuk Keramik kamu?</p>
          <button className="btn btn-outline-light">Selengkapnya</button>
        </div>

        {/* Layanan Card 7 */}
        <div className="layanan-card">
          <div className="overlay"></div>
          <img src={pintu} alt="image" className="img-fluid"/>
          <h3>Pintu/Jendela</h3>
          <p>Perbaikan apa yang ingin kamu lakukan untuk Pintu/Jendela kamu?</p>
          <button className="btn btn-outline-light">Selengkapnya</button>
        </div>

        {/* Layanan Card 8 */}
        <div className="layanan-card">
          <div className="overlay"></div>
          <img src={conblock} alt="image" className="img-fluid"/>
          <h3>Conblock</h3>
          <p>Perbaikan apa yang ingin kamu lakukan untuk Conblock kamu?</p>
          <button className="btn btn-outline-light">Selengkapnya</button>
        </div>

        {/* Layanan Card 9 */}
        <div className="layanan-card">
          <div className="overlay"></div>
          <img src={kebun} alt="image" className="img-fluid"/>
          <h3>Kebun</h3>
          <p>Perbaikan apa yang ingin kamu lakukan untuk Kebun kamu?</p>
          <button className="btn btn-outline-light">Selengkapnya</button>
        </div>

        {/* Layanan Card 10 */}
        <div className="layanan-card">
          <div className="overlay"></div>
          <img src={gas} alt="image" className="img-fluid"/>
          <h3>Gas</h3>
          <p>Perbaikan apa yang ingin kamu lakukan untuk Gas kamu?</p>
          <button className="btn btn-outline-light">Selengkapnya</button>
        </div>
      </motion.div>
    </section>
  );
};

export default ServiceComponent;
