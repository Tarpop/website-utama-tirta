import Head from 'next/head'
import { useRef, useState } from 'react'

export default function Kontak() {
  const formRef = useRef<HTMLFormElement>(null)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const form = formRef.current
    if (!form) return

    const formData = new FormData(form)

    const response = await fetch('https://formspree.io/f/xkgryvkp', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: formData,
    })

    if (response.ok) {
      form.reset()
      setSuccess(true)
    } else {
      alert('Terjadi kesalahan saat mengirim pesan.')
    }
  }

  return (
    <>
      <Head>
        <title>Kontak - Utama Tirta</title>
      </Head>
      <main className="pt-32 px-6 bg-white text-gray-800 min-h-screen">
        <section className="max-w-4xl mx-auto space-y-8" data-aos="fade-up">
        <h1 className="text-3xl font-bold mb-12 text-center">Hubungi Kami</h1>
          
          <div className="flex-1 space-y-4">
            <p><strong>Alamat:</strong> Jl. Bima No. 41-45, Kota Bandung, Jawa Barat</p>
            <p><strong>Telepon:</strong> 0812-2084-0505 (Sukarno Setiawan)</p>
            <p><strong>Email:</strong> utama_tirta@ymail.com</p>
          </div>

          <div className="flex-1">
          <iframe
            title="Lokasi Utama Tirta"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63352.91417618961!2d107.5790325!3d-6.903449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e64b62f25f3f%3A0x5a2d1d89b6be74f3!2sJl.%20Bima%20No.45%2C%20Arjuna%2C%20Kec.%20Cicendo%2C%20Kota%20Bandung%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1716090935632!5m2!1sid!2sid"
            width="100%"
            height="250"
            allowFullScreen={true}
           loading="lazy"
           className="rounded-lg shadow"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {success && (
            <div className="bg-green-100 text-green-700 p-4 rounded border border-green-400">
              Pesan berhasil dikirim!
            </div>
          )}

          <form ref={formRef} onSubmit={handleSubmit} className="flex-1 space-y-4">
            <div>
              <label className="block mb-1">Nama</label>
              <input name="nama" type="text" className="w-full border p-2 rounded" required />
            </div>
            <div>
              <label className="block mb-1">Company</label>
              <select name="pekerjaan" className="w-full p-2 border rounded" required>
                <option value="perusahaan">Perusahaan</option>
                <option value="perorangan">Perorangan</option>
              </select>
            </div>
            <div>
              <label className="block mb-1">Alamat</label>
              <input name="alamat" type="text" className="w-full border p-2 rounded" required />
            </div>
            <div>
              <label className="block mb-1">Telepon</label>
              <input name="telepon" type="text" className="w-full border p-2 rounded" required />
            </div>
            <div>
              <label className="block mb-1">Email</label>
              <input name="email" type="email" className="w-full border p-2 rounded" required />
            </div>
            <div>
              <label className="block mb-1">Pilihan Layanan</label>
              <select name="layanan" className="w-full p-2 border rounded" required>
                <option>Pengeboran Sumur Dalam (Deepwell)</option>
                <option>Pengeboran Sumur Imbuhan</option>
                <option>Pengeboran Sumur Pantau</option>
                <option>Pengeboran Sumur Dangkal</option>
                <option>Survei Geolistrik</option>
                <option>Maintenance Sumur (Service Sumur)</option>
                <option>Compressor Sumur (Water Jetting)</option>
                <option>Logging Test</option>
                <option>Pumping Test (SNI)</option>
                <option>Penjualan Matabor (Gigi & Jagung)</option>
                <option>Penjualan Pompa Submersible</option>
              </select>
            </div>
            <div>
              <label className="block mb-1">Pesan</label>
              <textarea name="pesan" className="w-full border p-2 rounded" rows={4} required />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Kirim Pesan
            </button>
          </form>
          </div>
        </section>
      </main>
    </>
  )
}
