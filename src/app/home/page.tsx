import Image from "next/image";
import "./home.css"
export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero">
        <div className="text">
          <h1>Evinize Renk Katalım</h1>
          <p>Ücretsiz fiyat teklifi almak için şimdi bizimle iletişime geçin.</p>
          <button>WhatsApp'tan Ulaş</button>
        </div>
<div className="image">
  <Image src="/renkyol.png" alt="RenkYol" fill style={{ objectFit: 'cover' }} />
</div>

      </div>

      {/* Gallery / Son Çalışmalarımız */}
      <div className="gallery">
        <div>Çalışma 1</div>
        <div>Çalışma 2</div>
        <div>Çalışma 3</div>
        <div>Çalışma 4</div>
      </div>

      {/* İç Mekan Boyama Bölümü */}
      <div className="section">
        <div className="image"></div>
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

      {/* Alçı Uygulama Bölümü */}
      <div className="section reverse">
        <div className="image"></div>
        <div className="text">
          <h2>Alçı Uygulama</h2>
          <p>
            Boyama işlemine başlamadan önce, yüzeylerin kusursuz olması gerekir.
            Alçı uygulamamız; çatlakların onarımı, yüzey düzgünleştirme ve boya
            öncesi hazırlık aşamalarını kapsar. Pürüzsüz ve kaliteli bir boya
            sonucu için uzman alçı ekibimizle çalışın.
          </p>
        </div>
      </div>
    </div>
  );
}
