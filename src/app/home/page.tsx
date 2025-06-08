import Image from "next/image";

import "./home.css"
export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero py-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white flex items-center justify-between px-10">
        <div className="text">
          <h1>Evinize Renk Katalım</h1>
          <p>Ücretsiz fiyat teklifi almak için şimdi bizimle iletişime geçin.</p>
          <button>WhatsApp'tan Ulaş</button>
        </div>
<div className="image">
  <Image src="/renkyol.png" alt="RenkYol" fill style={{ objectFit: 'cover' }} />
</div>

      </div>


{/* Sonsuz Kayar Galeri */}

<section className="overflow-hidden py-10 bg-white">
  <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Son Çalışmalarımız</h2>

  <div className="relative overflow-hidden mx-auto w-[80%]">
    <div className="flex animate-marquee gap-[2vh]">
      {[1, 2].map((loop) => (
        <div className="flex gap-[2vh]" key={loop}>
          {["c1.jpg", "c2.jpg", "c3.jpg", "c4.jpg", "c5.jpg", "c6.jpg", "c7.jpg", "c8.jpg"].map((img, index) => (
            <div
              key={`${loop}-${index}`}
              className="w-64 h-40 min-w-[16rem] rounded-xl overflow-hidden shadow"
            >
              <Image
                src={`/${img}`}
                alt={`Çalışma ${index + 1}`}
                width={256}
                height={160}
                className=" "
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
</section>


      {/* İç Mekan Boyama Bölümü */}
      <div className="section">
        <div className="image"> 
      <div className="relative w-full h-80 rounded-lg overflow-hidden">
      <Image
        src="/usta.png"
        alt="Usta Çalışması"
        fill
        className="object-cover"
      />
    </div>


        </div>




        <div className="text">
          <h2>İç Mekan Boyama</h2>
          <p>
            Salon, yatak odası, mutfak ve banyolar gibi yaşam alanlarınızda
            gerçekleştirdiğimiz iç mekan boyama hizmetimiz ile evinizin atmosferini
            tamamen yeniliyoruz. Profesyonel ekibimiz, renk seçimi, yüzey hazırlığı
            ve uygulama süreçlerinin her aşamasında yanınızda.
          </p>
        </div>
      </div>

       
 
    </div>
  );
}
