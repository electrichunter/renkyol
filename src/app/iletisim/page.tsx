'use client';

import { Mail, Phone, MapPin } from 'lucide-react';
import dynamic from 'next/dynamic';

const GoogleMap = dynamic(() => Promise.resolve(() => (
  <iframe
    title="Ankara Dikmen Konumu"
    width="100%"
    height="100%"
    style={{ border: 0, borderRadius: '1rem' }}
    loading="lazy"
    allowFullScreen
    src="https://maps.google.com/maps?q=Ankara+Dikmen&t=&z=13&ie=UTF8&iwloc=&output=embed"
  />

)), { ssr: false });

const ContactCard = ({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) => (
  <div className="flex items-start space-x-5 bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300">
    <div className="text-blue-600 p-4 bg-blue-100 rounded-full shadow-md flex items-center justify-center w-14 h-14">
      {icon}
    </div>
    <div>
      <h4 className="text-xl font-semibold text-gray-900 mb-1">{title}</h4>
      <div className="text-gray-600 text-base">{children}</div>
    </div>
  </div>
);

const ContactSection = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-16 max-w-7xl mx-auto rounded-3xl">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
        Bizimle İletişime Geçin
      </h2>
      <p className="max-w-3xl mx-auto text-center text-gray-600 mb-14 text-lg leading-relaxed">
        Profesyonel ekiplerimizle hizmetinizdeyiz. Aşağıdaki iletişim bilgilerinden bize kolayca ulaşabilirsiniz.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* İletişim Kartları */}
        <ContactCard icon={<Phone size={28} />} title="Telefon">
          <a href="tel:+905321234567" className="text-blue-600 font-medium hover:underline">
            +90 532 123 45 67
          </a>
        </ContactCard>

        <ContactCard icon={<Mail size={28} />} title="E-posta">
          <a href="mailto:info@renkyol.com" className="text-blue-600 font-medium hover:underline">
            info@renkyol.com
          </a>
        </ContactCard>

        <ContactCard icon={<MapPin size={28} />} title="Adres">
          <address className="not-italic text-gray-700">
            Dikmen, Ankara<br />
            Türkiye
          </address>
        </ContactCard>
      </div>

      {/* Harita */}
      <div className="mt-16 h-96 rounded-3xl overflow-hidden shadow-2xl">
        <GoogleMap />
      </div>
    </section>
  );
};

export default ContactSection;
