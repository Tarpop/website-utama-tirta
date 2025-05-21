import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppBubble from '@/components/WhatsAppBubble'
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
    })
  })
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <WhatsAppBubble />
    </>
  )
}

export default MyApp
