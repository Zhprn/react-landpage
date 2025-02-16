import '../styles/main.css'; // Pastikan untuk mengimpor file CSS jika diperlukan
import cta from "../assets/images/cta.png"
const CtaComponent = () => {
  return (
    <section className="cta-section py-5 text-white text-center position-relative">
      <img
        src={cta}
        alt="Background"
        className="cta-background-image position-absolute w-100 h-100 top-0 start-0 object-fit-cover"
      />
      <div className="cta-content position-relative z-index-1 align-item-center">
        <h2>Ayo, Pesan Tukang di TukanginAja hari ini dan selesaikan pekerjaan secepat mungkin</h2>
      </div>
    </section>
  );
};

export default CtaComponent;
