import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppBubble() {
  const phoneNumber = '6282224123429' // ganti dengan nomor WhatsApp kamu

  return (
    <a
      href={`https://wa.me/6282224123429`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors"
    >
      <FaWhatsapp size={28} />
    </a>
  )
}
