"use client";



import React from 'react';
import Image from 'next/image';

const AboutUsPage = () => {
    return (
        <main className="flex flex-col gap-12 px-4 py-10 md:px-6 md:py-16 max-w-7xl mx-auto">
            {/* Hakkımızda */}
            <section className="flex flex-col-reverse md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                    <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Hakkımızda</h1>
                    <p className="text-lg text-gray-600">
                        RenkYol, Ankara merkezli profesyonel bir iç dekorasyon firmasıdır. Uzun yıllara dayanan tecrübemiz ve müşteri odaklı yaklaşımımız ile yaşam alanlarınıza değer katıyoruz.
                    </p>
                </div>
   <div className="relative md:w-1/2 w-full h-60 md:h-80 bg-gray-100 rounded-2xl shadow-inner flex items-center justify-center text-gray-400 text-lg overflow-hidden">
  <Image
    src="/4669613.jpg"
    alt="Çalışan bir kişinin çalışma ortamı"
    fill
    className="object-cover rounded-2xl"
    priority
  />
</div>

            </section>

            {/* Misyonumuz */}
            <section className="flex flex-col md:flex-row items-center gap-8">
            {/* Görsel alanı */}
      <div className="relative md:w-1/2 w-full h-60 md:h-80 bg-gray-100 rounded-2xl shadow-inner flex items-center justify-center text-gray-400 text-lg">
        <Image
          src="/20945016.jpg"
          alt="Çalışan bir kişinin çalışma ortamı"
          fill
          className="object-cover rounded-2xl"
          priority
        />
      </div>
                <div className="md:w-1/2">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Misyonumuz</h2>
                    <p className="text-gray-600 text-base">
                        Kaliteli hizmet anlayışımızla güven veren, yenilikçi çözümler sunarak müşteri memnuniyetini en üst düzeyde tutmak. Müşterilerimizin ihtiyaçlarına özel dekorasyon çözümleri üreterek fark yaratıyoruz.
                    </p>
                </div>
            </section>

            {/* Ekibimiz */}
            <section className="flex flex-col-reverse md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Ekibimiz</h2>
                    <p className="text-gray-600 text-base">
                        Alanında uzman boyacı ustalarımız, iç mekan tasarımcılarımız ve teknik ekibimiz ile birlikte; profesyonel, yaratıcı ve etkili çözümler üretmekteyiz. Her biri kendi alanında deneyimli ekibimizle, işinizi zamanında ve titizlikle tamamlıyoruz.
                    </p>
                </div>
                      <div className="relative md:w-1/2 w-full h-60 md:h-80 bg-gray-100 rounded-2xl shadow-inner flex items-center justify-center text-gray-400 text-lg">
        <Image
          src="/5278.jpg"
          alt="Çalışan bir kişinin çalışma ortamı"
          fill
          className="object-cover rounded-2xl"
          priority
        />
      </div>
            </section>
        </main>
    );
};

export default AboutUsPage;
