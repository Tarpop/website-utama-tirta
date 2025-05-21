// components/Footer.tsx
export default function Footer() {
    return (
      <footer className="bg-blue-900 text-white text-center py-6 mt-10">
        <div className="container mx-auto px-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} Utama Tirta. All rights reserved.</p>
          <p className="text-xs mt-1">Jl. Bima No. 41-45, Kota Bandung, Jawa Barat</p>
        </div>
      </footer>
    );
  }
  