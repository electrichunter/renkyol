-- 1. Roller tablosu
CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    role_name VARCHAR(50) NOT NULL UNIQUE
);

-- 2. Kullanıcılar tablosu
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    phone_number VARCHAR(20),
    date_of_birth DATE,
    is_active BOOLEAN DEFAULT TRUE,
    email_verified BOOLEAN DEFAULT FALSE,
    verification_token VARCHAR(255),
    password_reset_token VARCHAR(255),
    password_reset_expiry TIMESTAMP,
    failed_login_attempts INT DEFAULT 0,
    lockout_until TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. Çoklu rol için kullanıcı-roll ilişkisi
CREATE TABLE user_roles (
    user_id INT NOT NULL,
    role_id INT NOT NULL,
    PRIMARY KEY (user_id, role_id),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE
);

-- 4. Hizmetler tablosu
CREATE TABLE hizmetler (
    id SERIAL PRIMARY KEY,
    ad VARCHAR(50) NOT NULL,
    sure_gun INTEGER NOT NULL,
    aciklama TEXT,
    fiyat NUMERIC(10,2) DEFAULT 0.00
);

-- 5. Randevu durumları için ENUM tipi
CREATE TYPE randevu_durum AS ENUM ('beklemede', 'onaylandi', 'tamamlandi', 'iptal');

-- 6. Randevular tablosu
CREATE TABLE randevular (
    id SERIAL PRIMARY KEY,
    musteri_adsoyad VARCHAR(100) NOT NULL,
    telefon VARCHAR(20),
    adres TEXT,
    hizmet_id INT NOT NULL,
    baslangic_tarihi TIMESTAMP NOT NULL,
    bitis_tarihi TIMESTAMP NOT NULL,
    durum randevu_durum DEFAULT 'beklemede',
    notlar TEXT,
    olusturulma_tarihi TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    guncellenme_tarihi TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    musteri_id INT,
    sorumlu_kullanici_id INT,
    FOREIGN KEY (hizmet_id) REFERENCES hizmetler(id) ON DELETE RESTRICT,
    FOREIGN KEY (musteri_id) REFERENCES users(id) ON DELETE SET NULL,
    FOREIGN KEY (sorumlu_kullanici_id) REFERENCES users(id) ON DELETE SET NULL
);

-- 7. Bitis tarihi otomatik hesaplama fonksiyonu
CREATE OR REPLACE FUNCTION hesapla_bitis_tarihi()
RETURNS TRIGGER AS $$
DECLARE
    gun_sayisi INTEGER;
BEGIN
    SELECT sure_gun INTO gun_sayisi FROM hizmetler WHERE id = NEW.hizmet_id;

    IF gun_sayisi IS NULL THEN
        RAISE EXCEPTION 'Hizmet bulunamadi: %', NEW.hizmet_id;
    END IF;

    NEW.bitis_tarihi := NEW.baslangic_tarihi + (gun_sayisi || ' days')::interval;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 8. Trigger: insert öncesi bitis tarihi ayarla
CREATE TRIGGER trg_bitis_tarihi_ayarla
BEFORE INSERT ON randevular
FOR EACH ROW
EXECUTE FUNCTION hesapla_bitis_tarihi();

-- 9. Otomatik guncellenme tarihi güncelleme fonksiyonu
CREATE OR REPLACE FUNCTION update_timestamp()
RETURNS TRIGGER AS $$
BEGIN
    NEW.guncellenme_tarihi = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 10. Trigger: update öncesi guncellenme tarihini ayarla
CREATE TRIGGER trg_update_guncellenme_tarihi
BEFORE UPDATE ON randevular
FOR EACH ROW
EXECUTE FUNCTION update_timestamp();

-- 11. İndeksler
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_randevular_baslangic ON randevular(baslangic_tarihi);
CREATE INDEX idx_randevular_durum ON randevular(durum);

-- 12. Örnek roller ekleme
INSERT INTO roles (role_name) VALUES ('admin'), ('editor'), ('user'), ('guest');

