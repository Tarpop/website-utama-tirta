// components/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      {/* Overlay hitam transparan */}
      <div className="absolute inset-0 bg-black bg-opacity-60 pointer-events-none"></div>

      {/* Konten utama */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center text-white px-4 h-full">
        {/* Logo */}
        <div className="mb-4">
          <Image
            src="/images/logo.png" // Ganti dengan path logo PNG transparan kamu
            alt="Logo Utama Tirta"
            width={100}
            height={100}
            priority
          />
        </div>

        {/* Judul & Deskripsi */}
        <h1 className="text-4xl md:text-6xl font-bold mb-2">UTAMA TIRTA</h1>
        <h2 className="text-xl md:text-3xl mb-4">Drilling Contractor</h2>
        <p className="max-w-xl mb-6">
          Kami menyediakan berbagai Jasa Drilling dengan pengerjaan yang optimal dan harga yang terjangkau.
        </p>

        {/* Tombol Aksi */}
        <div className="flex gap-4">
          <a
            href="/tentang"
            className="px-6 py-2 bg-white text-black rounded hover:bg-gray-200 transition"
          >
            Tentang Kami
          </a>
          <a
            href="/kontak"
            className="px-6 py-2 border border-white rounded hover:bg-white hover:text-black transition"
          >
            Hubungi Kami
          </a>
        </div>
      </div>
    </div>
  );
}
