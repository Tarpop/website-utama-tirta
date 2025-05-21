import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Tentang from '@/components/Tentang'
import LayananHome from '../components/LayananHome'
import KlienKami from '../components/KlienKami'
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';


export default function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
    })
  })
  return (
    <> 
      <Head>
        <title>Utama Tirta | Drilling Contractor</title>
      </Head>
      <Navbar />
      <Hero />
      <Tentang />
      <LayananHome />
      <KlienKami />
    </>
  )
}      
   
