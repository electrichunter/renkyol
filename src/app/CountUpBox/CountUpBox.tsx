'use client';

import { JSX, useEffect, useRef } from 'react';
import { Briefcase, Home, Smile } from 'lucide-react'; // shadcn / lucide-react ile geliyor

type StatItem = {
  icon: JSX.Element;
  title: string;
  value: number;
  color?: string;
  description?: string;
};

const stats: StatItem[] = [
  {
    icon: <Home className="w-8 h-8 text-orange-500" />,
    title: 'Boyanan Ev',
    value: 1098,
    description: 'Türkiye genelinde boyanan toplam konut sayısı',
  },
    {
    icon: <Briefcase className="w-8 h-8 text-blue-500" />,
    title: 'Tamamlanan Proje',
    value: 53,
    description: 'Profesyonel ekiplerle başarıyla tamamlanan projeler',
  },
  {
    icon: <Smile className="w-8 h-8 text-green-500" />,
    title: 'Memnun Müşteri',
    value: 1103,
    description: 'Müşterilerimizin %98\'i bizi tavsiye ediyor',
  },
  
];

const StatsCounter = () => {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    refs.current.forEach((ref, index) => {
      if (!ref) return;

      const target = stats[index].value;
      const duration = 2000;
      const frameRate = 1000 / 60;
      const totalFrames = Math.round(duration / frameRate);
      let frame = 0;

      const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

      const counter = setInterval(() => {
        frame++;
        const progress = easeOutCubic(frame / totalFrames);
        const currentValue = Math.round(target * progress);

        ref.innerText = currentValue.toLocaleString();

        if (frame === totalFrames) clearInterval(counter);
      }, frameRate);
    });
  }, []);

  return (
    <section className="bg-transparent py-12 px-4 md:px-8 rounded-xl shadow-md max-w-5xl mx-auto mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center space-y-2">
            <div className="bg-transparent rounded-full p-4 shadow">{stat.icon}</div>
            <div
              ref={el => { refs.current[i] = el; }}
              className="text-4xl font-bold text-gray-800"
            >
              0
            </div>
            <div className="text-lg font-semibold text-gray-700">{stat.title}</div>
            {stat.description && (
              <p className="text-sm text-gray-500 px-4">{stat.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsCounter;
