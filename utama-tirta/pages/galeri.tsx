import { useState } from "react";
import Head from 'next/head';
import Image from 'next/image';
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const galeriData = [
  {
    judul: 'PEMBUATAN SPULBAK',
    folder: 'pembuatan-spulbak',
    gambar: ['Picture1.jpeg', 'Picture2.jpeg', 'Picture3.jpeg', 'Picture4.jpeg', 'Picture5.jpeg']
  },
  {
    judul: 'PILOTE HOLE 8',
    folder: 'pilote-hole-8',
    gambar: ['Picture6.jpeg', 'Picture7.jpeg', 'Picture8.jpeg']
  },
  {
    judul: 'REAMING 10',
    folder: 'reaming-10',
    gambar: ['Picture9.jpeg', 'Picture10.jpeg', 'Picture11.jpeg']
  },
  {
    judul: 'LOGGING TEST',
    folder: 'logging-test',
    gambar: ['Picture12.png', 'Picture13.png', 'Picture14.png', 'Picture15.png']
  },
  {
    judul: 'PEMASANGAN PIPA KONTRUKSI',
    folder: 'pipa-kontruksi',
    gambar: ['PEMBUKAAN.jpg', '1.1.jpg', '1.2.jpg', '2.1.jpg', '2.2.jpg', '3.1.jpg', '3.2.jpg', '4.1.jpg', '4.2.jpg', '5.1.jpg', '5.2.jpg', '6.2.jpg', '7.1.jpg', '7.2.jpg', '8.1.jpg', '8.2.jpg', '9.1.jpg', '9.2.jpg', '10.jpg', '11.1.jpg', '12.jpg', '13.1.jpg', '13.2.jpg', '14.jpg', '15.1.jpg', '15.2.jpg', '16.1.jpg', '16.2.jpg', '17.1.jpg', '17.2.jpg', '18.2.jpg', '19.1.jpg', '19.2.jpg', '20.1.jpg', '21.1.jpg', '21.2.jpg', '23.1.jpg', '23.2.jpg', '25.1.jpg', '25.2.jpg', '26.jpg', '29.jpg', '31.1.jpg', '31.2.jpg', '32.jpg', '33.jpg', '34.2.jpg', '36.1.jpg', '36.2.jpg', '38.1.jpg', '38.2.jpg']
  },
  {
    judul: 'PEMBUATAN SUMUR DANGKAL',
    folder: 'sumur-dangkal',
    gambar: ['Picture27.jpg', 'Picture28.jpg']
  },
  {
    judul: 'PEMBUATAN SUMUR IMBUHAN (BAK IMBUHAN)',
    folder: 'sumur-imbuhan',
    gambar: ['Picture29.jpg', 'Picture30.jpg', 'Picture31.jpg', 'Picture32.jpg', 'Picture33.jpg', 'Picture34.jpg']
  },
  {
    judul: 'PENYETORAN GRAVEL',
    folder: 'gravel',
    gambar: ['Picture16.jpeg', 'Picture17.jpeg', 'Picture18.jpeg']
  },
  {
    judul: 'GROUTING',
    folder: 'grouting',
    gambar: ['Picture19.jpeg', 'Picture20.jpeg', 'Picture21.jpeg', 'Picture23.jpeg', 'Picture24.jpeg']
  },
  {
    judul: 'PENGCOMPRESSORAN SUMUR',
    folder: 'compressor-sumur',
    gambar: ['Picture25.jpeg', 'Picture26.jpeg']
  },
];

export default function Galeri() {
  const [index, setIndex] = useState(-1);
  const [slides, setSlides] = useState([]);

  return (
    <>
      <Head>
        <title>Galeri Proyek - Utama Tirta</title>
      </Head>

      {/* Lightbox Viewer */}
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
        plugins={[Thumbnails]}
      />

      <main className="mbg-white py-32 px-4 md:px-8 lg:px-24 min-h-screen">
        <h1 className="text-3xl font-bold text-center mb-10">Galeri Proyek</h1>

        {galeriData.map((kategori, idx) => (
          <section key={idx} className="mb-12">
            <h2 className="text-xl font-semibold mb-4">{kategori.judul}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {kategori.gambar.map((file, i) => {
                const imageSrc = `/galeri/${kategori.folder}/${file}`;
                return (
                  <div
                    key={i}
                    className="rounded overflow-hidden shadow cursor-pointer"
                    onClick={() => {
                      // Set slide berdasarkan gambar dalam kategori ini
                      const slideSet = kategori.gambar.map((g) => ({
                        src: `/galeri/${kategori.folder}/${g}`
                      }));
                      setSlides(slideSet);
                      setIndex(i);
                    }}
                  >
                    <Image
                      src={imageSrc}
                      alt={`${kategori.judul} ${i + 1}`}
                      width={600}
                      height={400}
                      className="object-cover w-full h-auto"
                    />
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </main>
    </>
  );
}
