"use client";
import "./footer.css"
export default function footer() {
  return (
  <footer className="footer">
  <div className="footer-grid">
    <div>
      <h3>Bize Ulaşın</h3>
      <p>Telefon: 0532 123 45 67</p>
      <p>Email: info@renkyol.com</p>
    </div>
    <div>
      <h3>Sosyal Medya</h3>
      <p>Instagram • Facebook • WhatsApp</p>
    </div>
    <div>
      <h3>Adres</h3>
      <p>Ankara, Türkiye</p>
    </div>
  </div>
  <div className="copyright">
    © {new Date().getFullYear()} RenkYol. Tüm hakları saklıdır.
  </div>
</footer>

  );
}
