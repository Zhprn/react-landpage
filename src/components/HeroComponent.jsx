import { Button, Container, Row, Col } from 'react-bootstrap';
import '../styles/main.css';
import image from "../assets/images/herocontent.jpg"
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const HeroComponent = () => {
  return (
    <div className="hero-section">
      <img 
        src={image}
        alt="Hero background" 
        className="img-fluid" 
      />
      <motion.div 
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.5 }}

      className="hero-content">
        <Container>
          <Row>
            <Col>
              <p>Cari Tukang? TukanginAja!</p>
              <h1>
                Kami akan menghubungkan <br />
                Anda dengan Tukang terbaik <br />
                dan terpercaya
              </h1>
              <Button>Hubungi Kami</Button>
            </Col>
          </Row>
        </Container>
      </motion.div>
    </div>
  );
};

export default HeroComponent;
