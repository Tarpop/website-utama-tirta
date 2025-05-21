import Head from 'next/head';

const layananList = [
  {
    title: 'Pengeboran Sumur Dalam (Deepwell)',
    desc: 'Pengeboran sumur dengan kedalaman 70m-250m dengan diameter dinding bor 8inch-12inch menggunakan konstruksi pipa PVC AW ataupun pipa galvanis berukuran 4inch-8inch. Sumur dapat di maksimalkan untuk penggunaan skala gedung, perumahan, peternakan, rumah sakit, dan industri besar yang memiliki akumulasi debit diatas 70m3 per harinya.',
  },
  {
    title: 'Pengeboran Sumur Imbuhan',
    desc: 'Jasa Pembuatan Sumur Imbuhan untuk Menunjang Pesyaratan Pembuatan/ Perpanjang Sumur Produksi Sumur yang di wajibkan dari Kementrian ESDM Saat ini dengan Kedalaman dari mulai 50-250 Meter bias menggunakan Pipa PVC/ Galvanize ukuran 4,6,8” Inch tergantung Kebutuhan sumur dengan kegunaan membalikan air yang berasal dari air hujan yang turun ke talang Gedung Perusahaan lalu di alirkan ke Sumur dengan di tenpatkan Meter air agar air yang kebali ke tanah terdeteksi berapa kubik ketika Hujan Turun.',
  },
  {
    title: 'Pengeboran Sumur Dangkal',
    desc: 'Jasa Pembuatan Sumur Dangkal dengan kedalaman mulai dari 20-70 Meter dengan kontruksi sumur bias menggunakan 4-6” Inch biasanya sumur dangkal ini du butuhkan oleh rumahan karena untuk rumahan biasanya kedalaman tidak dalam.',
  },
  {
    title: 'Survei Geolistrik',
    desc: 'Jasa pekerjaan untuk menentukan titik sumur dengan metode aliran listrik ke tanah alat yang di tancapkan mengetahui titik sumur dengan potensi air yang sesuai kebutuhan biasanya metode ini untuk meliat potensi air dari 0 – 200 meter.',
  },
  {
    title: 'Maintenance Sumur (Service Sumur)',
    desc: 'Jasa perbaikan sumur yang pekerjaan fungsinya untuk memberishkan sumur yang biasanya kendala perusahaan air kecil dan air kotor kami akan melakukan oengangkatan Pompa Sumur setelah itu Service Pompa sumur jika terjadi trouble dan sumur akan Jeting Compressor dengan di masukan tekanan udara ke sumur sekitar 20 bar untuk membersihkan kotoran yang mengendap di dasar sumur. ',
  },
  {
    title: 'Compressor Sumur (Water Jetting)',
    desc: 'Jasa perbaikan sumur yang pekerjaan fungsinya untuk memberishkan sumur yang biasanya kendala perusahaan air kecil dan air kotor kami akan melakukan oengangkatan Pompa Sumur setelah itu Service Pompa sumur jika terjadi trouble dan sumur akan Jeting Compressor dengan di masukan tekanan udara ke sumur sekitar 20 bar untuk membersihkan kotoran yang mengendap di dasar sumur. ',
  },
  {
    title: 'Logging Test',
    desc: 'Jasa Logging test pekerjaan ini bisanya di butuhkan ketika kedalaman sumur tercapai dan Logging test di lakukan untuk menentukan Kedalaman Real Sumur dan Penempatan Saringan serapan air Pipa kontruksi.',
  },
  {
    title: 'Pumping Test (SNI)',
    desc: 'Jasa pekerjaan untuk menentukan debit real sumur dalam di lakukan dengan metode pumping test air di a;irkan selama 1 hari dan di ukur oleh alat khusus untuk menetukan debiat air yang keluar dari sumur biasanya pekerjaan ini di lakukan setelah sumur telah selesai dan air sudah mengalir.',
  },
  {
    title: 'Penjualan Matabor (Gigi & Jagung)',
    desc: 'Penjualan Matabor dengan type Gigi / Jagung dengan ukuran 2,4,6,8,10,12" Inch.',
  },
  {
    title: 'Penjualan Pompa Submersible',
    desc: 'Jasa pengadaan barang Pompa Submersible dengan berbagai merk dan type diantaranya Grundfos, Franklin, Drakos, atau Shimizu dengan spek pompa mulai dari 1/2 HP - 10HP sesuai dengan kebutuhan.',
  },
];

export default function Layanan() {
  return (
    <>
      <Head>
        <title>Layanan - Utama Tirta</title>
      </Head>
      <main className="pt-32 px-4 bg-white text-gray-800 min-h-screen">
        <section className="max-w-6xl mx-auto" data-aos="fade-up">
          <h1 className="text-3xl font-bold mb-12 text-center">Layanan Kami</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {layananList.map((layanan, idx) => (
              <div
                key={idx}
                className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-lg transition duration-200"
              >
                <h2 className="text-xl font-semibold mb-3">{layanan.title}</h2>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {layanan.desc || 'Deskripsi layanan belum tersedia.'}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
