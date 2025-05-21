import Head from 'next/head'

export default function Portofolio() {
  return (
    <>
      <Head>
        <title>Portofolio - Utama Tirta</title>
      </Head>
      <main className="pt-32 px-6 bg-white text-gray-800 min-h-screen">
        <section className="max-w-5xl mx-auto" data-aos="fade-up">
        <h1 className="text-3xl font-bold mb-12 text-center">Portofolio Kami</h1>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="w-full overflow-auto">
              <img src="/portofolio/Portofolio.jpg" alt="Proyek 1" className="w-full h-auto rounded-lg shadow" />
              <h2 className="text-xl font-semibold mb-1">Testimoni Kami</h2>
              <p className="text-gray-600 text-sm">Bandung, Jawa Barat</p>
            </div>
            <div className="shadow-lg p-4 border rounded-xl">
              <img src="/images/proyek2.jpg" alt="Proyek 2" className="rounded mb-3 w-full h-52 object-cover" />
              <h2 className="text-xl font-semibold mb-1">Pemasangan Pompa Submersible</h2>
              <p className="text-gray-600 text-sm">Karawang, 2023 - Kapasitas 5 L/s</p>
            </div>
            {/* Tambah lebih banyak proyek di sini */}
          </div>
        </section>
      </main>
    </>
  );
}
