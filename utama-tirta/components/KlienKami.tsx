// components/KlienKami.tsx

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const klien = [
  { nama: 'CHERRY FIELD MATAHARI LAND', logo: '/images/klien/th (2).jpg' },
  { nama: 'GRAND PASUNDAN', logo: '/images/klien/th (1).jpg' },
  { nama: 'PRIME PARK HOTEL BANDUNG', logo: '/images/klien/th.jpg' },
  { nama: 'RS. IMMANUEL', logo: '/images/klien/IMMANUEL.png' },
  { nama: 'NIRWANA LESTARI', logo: '/images/klien/NIRWANA LESTARI.png' },
  { nama: 'MUTIARA INTI RAYA', logo: '/images/klien/MUTIARA INTI RAYA.png' },
  { nama: 'MEDION', logo: '/images/klien/MEDION.png' },
  { nama: 'GRAND VASERO', logo: '/images/klien/GRAND VASERO.png' },
  { nama: 'WASKITA', logo: '/images/klien/WASKITA.png' },
  { nama: 'GRAHA SARANA DUTA', logo: '/images/klien/GRAHA SARANA DUTA.png' },
  { nama: 'WIKA', logo: '/images/klien/WIKA.png' },
  { nama: 'SUMMARECON', logo: '/images/klien/SUMMARECON.png' },
  { nama: 'METRO GARMIN', logo: '/images/klien/METRO GARMIN.png' },
  { nama: 'INDORAMA', logo: '/images/klien/INDORAMA.png' },
  { nama: 'CISANGKAN', logo: '/images/klien/CISANGKAN.png' },
  { nama: 'TMI', logo: '/images/klien/TMI.png' },
  { nama: 'ISTANA PLAZA', logo: '/images/klien/ISTANA PLAZA.png' },
  { nama: 'MENARA MAS', logo: '/images/klien/MENARA MAS.png' },
  { nama: 'BIP', logo: '/images/klien/BIP.png' },
  { nama: 'HOTEL SANTIKA', logo: '/images/klien/HOTEL SANTIKA.png' },
  { nama: 'MTC', logo: '/images/klien/MTC.png' },
];

const KlienKami = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-12" data-aos="fade-up">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">
          Klien Kami
        </h2>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2000 }}
          spaceBetween={30}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
        >
          {klien.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center p-4 bg-white rounded-xl shadow hover:shadow-md transition h-28">
                <Image
                  src={item.logo}
                  alt={item.nama}
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default KlienKami;
