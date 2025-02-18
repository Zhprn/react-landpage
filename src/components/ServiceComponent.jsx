import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.css';
import { motion } from "framer-motion";
import cat from "../assets/images/cat.png";

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
          <img src={cat} alt="image" className="img-fluid" />
          <h3>Cat</h3>
          <p>Perbaikan apa yang ingin kamu lakukan untuk Cat kamu?</p>
          <button className="btn btn-outline-light">Selengkapnya</button>
        </div>

        {/* Layanan Card 2 */}
        <div className="layanan-card">
          <div className="overlay"></div>
          <h3>Listrik</h3>
          <p>Perbaikan apa yang ingin kamu lakukan untuk Listrik kamu?</p>
          <button className="btn btn-outline-light">Selengkapnya</button>
        </div>

        {/* Layanan Card 3 */}
        <div className="layanan-card">
          <div className="overlay"></div>
          <h3>Pipa</h3>
          <p>Perbaikan apa yang ingin kamu lakukan untuk Pipa kamu?</p>
          <button className="btn btn-outline-light">Selengkapnya</button>
        </div>

        {/* Layanan Card 4 */}
        <div className="layanan-card">
          <div className="overlay"></div>
          <h3>Kebocoran</h3>
          <p>Perbaikan apa yang ingin kamu lakukan untuk Kebocoran kamu?</p>
          <button className="btn btn-outline-light">Selengkapnya</button>
        </div>

        {/* Layanan Card 5 */}
        <div className="layanan-card">
          <div className="overlay"></div>
          <h3>Dinding</h3>
          <p>Perbaikan apa yang ingin kamu lakukan untuk Dinding kamu?</p>
          <button className="btn btn-outline-light">Selengkapnya</button>
        </div>

        {/* Layanan Card 6 */}
        <div className="layanan-card">
          <div className="overlay"></div>
          <h3>Keramik</h3>
          <p>Perbaikan apa yang ingin kamu lakukan untuk Keramik kamu?</p>
          <button className="btn btn-outline-light">Selengkapnya</button>
        </div>

        {/* Layanan Card 7 */}
        <div className="layanan-card">
          <div className="overlay"></div>
          <h3>Pintu/Jendela</h3>
          <p>Perbaikan apa yang ingin kamu lakukan untuk Pintu/Jendela kamu?</p>
          <button className="btn btn-outline-light">Selengkapnya</button>
        </div>

        {/* Layanan Card 8 */}
        <div className="layanan-card">
          <div className="overlay"></div>
          <h3>Conblock</h3>
          <p>Perbaikan apa yang ingin kamu lakukan untuk Conblock kamu?</p>
          <button className="btn btn-outline-light">Selengkapnya</button>
        </div>

        {/* Layanan Card 9 */}
        <div className="layanan-card">
          <div className="overlay"></div>
          <h3>Kebun</h3>
          <p>Perbaikan apa yang ingin kamu lakukan untuk Kebun kamu?</p>
          <button className="btn btn-outline-light">Selengkapnya</button>
        </div>

        {/* Layanan Card 10 */}
        <div className="layanan-card">
          <div className="overlay"></div>
          <h3>Gas</h3>
          <p>Perbaikan apa yang ingin kamu lakukan untuk Gas kamu?</p>
          <button className="btn btn-outline-light">Selengkapnya</button>
        </div>
      </motion.div>
    </section>
  );
};

export default ServiceComponent;
