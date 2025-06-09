-- HİZMETLER
CREATE TABLE public.hizmetler (
    id SERIAL PRIMARY KEY,
    ad VARCHAR(50) NOT NULL,
    sure_gun INTEGER NOT NULL,
    aciklama TEXT,
    fiyat NUMERIC(10,2) DEFAULT 0.00
);

-- RANDEVULAR
CREATE TABLE public.randevular (
    id SERIAL PRIMARY KEY,
    musteri_adsoyad VARCHAR(100) NOT NULL,
    telefon VARCHAR(20),
    adres TEXT,
    hizmet_id INTEGER NOT NULL,
    baslangic_tarihi DATE NOT NULL,
    bitis_tarihi DATE NOT NULL,
    durum VARCHAR(20) DEFAULT 'beklemede' CHECK (durum IN ('beklemede', 'onaylandi', 'tamamlandi', 'iptal')),
    notlar TEXT,
    olusturulma_tarihi TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    guncellenme_tarihi TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_hizmet FOREIGN KEY (hizmet_id) REFERENCES public.hizmetler(id)
);

-- YÖNETİCİLER
CREATE TABLE public.yoneticiler (
    id SERIAL PRIMARY KEY,
    kullanici_adi VARCHAR(50) UNIQUE NOT NULL,
    sifre_hash VARCHAR(255) NOT NULL,
    rol VARCHAR(20) DEFAULT 'editor' CHECK (rol IN ('admin', 'editor', 'goruntuleyici')),
    olusturulma_tarihi TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- TRIGGER FUNCTION: bitis_tarihi otomatik hesapla
CREATE OR REPLACE FUNCTION public.hesapla_bitis_tarihi()
RETURNS TRIGGER AS $$
DECLARE
    gun_sayisi INTEGER;
BEGIN
    SELECT sure_gun INTO gun_sayisi
    FROM public.hizmetler
    WHERE id = NEW.hizmet_id;

    NEW.bitis_tarihi := NEW.baslangic_tarihi + gun_sayisi;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- TRIGGER TANIMI
CREATE TRIGGER trg_bitis_tarihi_ayarla
BEFORE INSERT ON public.randevular
FOR EACH ROW
EXECUTE FUNCTION public.hesapla_bitis_tarihi();
