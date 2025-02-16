import '../styles/main.css'; // CSS tambahan jika diperlukan

const OrderComponent = () => {
  return (
    <div className="container mt-5" id='order'>
      <div className="text-center mb-4">
        <h3>Order Forms</h3>
        <h1>Form Pemesanan Tukang</h1>
        <div className="underline"></div>
      </div>

      <form>
        {/* Nama */}
        <div className="mb-3">
          <label htmlFor="nama" className="form-label">Nama</label>
          <input type="text" className="form-control" id="nama" placeholder="nama kamu" />
        </div>

        {/* No Telepon */}
        <div className="mb-3">
          <label htmlFor="telepon" className="form-label">No Telepon</label>
          <input type="tel" className="form-control" id="telepon" placeholder="no telepon kamu" />
        </div>

        {/* Perbaikan */}
        <div className="mb-3">
          <label htmlFor="perbaikan" className="form-label">Perbaikan</label>
          <select className="form-select" id="perbaikan">
            <option value="" disabled selected>perbaikan apa yang kamu inginkan</option>
            <option value="cat">Cat Rumah</option>
            <option value="listrik">Listrik</option>
            <option value="pipa">Pipa</option>
          </select>
        </div>

        {/* Deskripsi Masalah */}
        <div className="mb-3">
          <label htmlFor="deskripsi" className="form-label">Deskripsi Masalah</label>
          <textarea className="form-control" id="deskripsi" placeholder="deskripsikan permasalahan yang kamu alami"></textarea>
        </div>

        {/* Jenis Tukang */}
        <div className="mb-3">
          <label htmlFor="jenis-tukang" className="form-label">Jenis Tukang</label>
          <select className="form-select" id="jenis-tukang">
            <option value="" disabled selected>pilih tukang yang sesuai dengan masalah kamu</option>
            <option value="tukang1">Tukang Bangunan</option>
            <option value="tukang2">Tukang Kayu</option>
          </select>
        </div>

        {/* Jadwal */}
        <div className="mb-3">
          <label htmlFor="jadwal" className="form-label">Pilih Jadwal</label>
          <div className="d-flex gap-2">
            <input type="date" className="form-control" id="jadwal" />
            <input type="time" className="form-control" id="waktu" />
          </div>
        </div>

        {/* Sesi */}
        <div className="mb-3">
          <label htmlFor="sesi" className="form-label">Pilih Sesi</label>
          <select className="form-select" id="sesi">
            <option value="" disabled selected>silahkan pilih sesi</option>
            <option value="pagi">Pagi</option>
            <option value="siang">Siang</option>
            <option value="malam">Malam</option>
          </select>
        </div>

        {/* Alamat */}
        <div className="mb-3">
          <label htmlFor="alamat" className="form-label">Alamat</label>
          <textarea className="form-control" id="alamat" placeholder="isi alamat lengkap kamu"></textarea>
        </div>

        {/* Foto Permasalahan */}
        <div className="mb-3">
          <label htmlFor="foto" className="form-label">Foto Permasalahan</label>
          <input type="file" className="form-control" id="foto" />
        </div>

        {/* Button */}
        <button type="submit" className="btn btn-warning text-black w-100 py-2">Pesan Sekarang</button>
      </form>
    </div>
  );
};

export default OrderComponent;
