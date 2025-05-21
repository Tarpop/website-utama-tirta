import Image from "next/image";
import Link from "next/link";
import { useState } from 'react'

interface NavbarProps {
  variant?: "default" | "transparent";
}

export default function Navbar({ variant = "default" }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const isTransparent = variant === "transparent";

  return (
    <nav
      className={`${
        isTransparent
          ? "absolute bg-black bg-opacity-50"
          : "fixed bg-black"
      } top-0 left-0 w-full z-50 text-white shadow-md`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/logo.png"
            alt="Logo Utama Tirta"
            width={40}
            height={40}
          />
          <span className="text-xl font-bold text-red-600">Utama Tirta</span>
        </Link>

         {/* Navigation */}
         <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/" className="hover:text-white text-gray-300">Beranda</Link>
          <Link href="/tentang" className="hover:text-white text-gray-300">Tentang Kami</Link>
          <Link href="/layanan" className="hover:text-white text-gray-300">Layanan</Link>
          <Link href="/kontak" className="hover:text-white text-gray-300">Kontak</Link>
          <Link href="/portofolio" className="hover:text-white text-gray-300">Portofolio</Link>
          <Link href="/galeri" className="hover:text-white text-gray-300">Galeri</Link>
        </div>
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>
      {isOpen && (
        <div className="flex flex-col md:hidden mt-2 space-y-2 px-4">
          <Link href="/">Beranda</Link>
          <Link href="/tentang">Tentang Kami</Link>
          <Link href="/layanan">Layanan</Link>
          <Link href="/kontak">Kontak</Link>
          <Link href="/portofolio">Portofolio</Link>
          <Link href="/galeri">Galeri</Link>
        </div>
      )}
    </nav>
  );
}