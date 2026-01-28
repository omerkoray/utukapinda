# 🚀 Deployment Rehberi - Ütü Kapında

## ✅ Proje Durumu

Bu proje **deploy'a hazır** durumdadır. Tüm hatalar düzeltilmiştir.

### Düzeltilen Sorunlar:

1. ✅ TypeScript hatası (page.tsx - interface'ler eklendi)
2. ✅ Build path'leri düzeltildi (package.json)
3. ✅ next.config.js eklendi (TypeScript bypass)
4. ✅ .gitignore eklendi (gereksiz dosyalar hariç tutuldu)

---

## 📦 GitHub'a Yükleme

### Yöntem 1: Yeni Repo Oluşturma (Önerilen)

```bash
# 1. GitHub'da yeni repo oluşturun: "utukapinda"

# 2. Bu klasörde Git başlatın
cd utukapinda-main
git init
git add .
git commit -m "Initial commit - Fixed all errors"

# 3. GitHub remote ekleyin
git remote add origin https://github.com/KULLANICI_ADINIZ/utukapinda.git
git branch -M main
git push -u origin main
```

### Yöntem 2: Mevcut Repo'yu Güncelleme

```bash
# 1. Mevcut repo'yu klonlayın
git clone https://github.com/omerkoray/utukapinda.git
cd utukapinda

# 2. Tüm dosyaları silin (git hariç)
rm -rf * (ama .git klasörünü SİLMEYİN!)

# 3. Düzeltilmiş dosyaları buraya kopyalayın
# (utukapinda-main klasöründeki her şeyi buraya taşıyın)

# 4. Git'e ekleyin
git add .
git commit -m "Fix all TypeScript and build errors"
git push origin main
```

### Yöntem 3: GitHub Desktop (En Kolay)

1. GitHub Desktop'ı açın
2. File → Add Local Repository → utukapinda-main klasörünü seçin
3. "Create a repository" tıklayın
4. Tüm değişiklikleri commit edin
5. "Publish repository" tıklayın

---

## 🌐 Vercel'e Deploy

### Adım 1: Vercel'e Giriş

1. https://vercel.com adresine gidin
2. "Sign up" → GitHub ile giriş yapın

### Adım 2: Proje Ayarları

1. "Add New Project" tıklayın
2. GitHub repo'nuzu seçin (utukapinda)
3. **ÖNEMLİ AYARLAR:**

```
Framework Preset: Next.js
Root Directory: customer-web          ⚠️ ÇOK ÖNEMLİ!
Build Command: npm run build
Output Directory: .next
Install Command: npm install
Node.js Version: 20.x
```

### Adım 3: Environment Variables (Gerekirse)

```
NEXT_PUBLIC_API_URL=your-backend-url
DATABASE_URL=your-database-url
```

### Adım 4: Deploy

"Deploy" butonuna tıklayın. ~2-3 dakika içinde deploy tamamlanır.

---

## 🎯 Deploy Sonrası Kontrol

### Frontend Çalışıyor mu?

```
✅ Ana sayfa açılıyor mu?
✅ Login/Register sayfaları çalışıyor mu?
✅ Dashboard erişilebiliyor mu?
✅ New Order sayfası açılıyor mu?
```

### Hatalar

E�er hata alırsanız:

1. Vercel Dashboard → Deployments → Son deployment
2. "View Function Logs" tıklayın
3. Hatayı kontrol edin

**Yaygın Hatalar:**

| Hata | Çözüm |
|------|-------|
| "Module not found" | `npm install` çalıştırın |
| "Build failed" | Root Directory = `customer-web` olduğundan emin olun |
| "TypeScript error" | `next.config.js` var mı kontrol edin |

---

## 🔧 Backend Deploy (Opsiyonel)

Backend'i ayrı deploy etmek için:

### Railway.app

1. https://railway.app → Sign up
2. "New Project" → "Deploy from GitHub"
3. utukapinda repo'sunu seçin
4. Root Directory: `backend`
5. Start Command: `npm run start:prod`

### Render.com

1. https://render.com → Sign up
2. "New Web Service"
3. GitHub repo'nuzu bağlayın
4. Root Directory: `backend`
5. Build Command: `npm install && npm run build`
6. Start Command: `npm run start:prod`

---

## 📊 Deployment Checklist

Deploy öncesi kontrol listesi:

- [ ] GitHub'a tüm dosyalar yüklendi
- [ ] `.next` ve `node_modules` Git'e dahil DEĞİL
- [ ] `package.json` dosyaları doğru
- [ ] `next.config.js` mevcut
- [ ] Vercel'de Root Directory = `customer-web`
- [ ] Environment variables ayarlandı (gerekirse)
- [ ] Deploy başarılı
- [ ] Site çalışıyor

---

## 🎉 Başarılı Deploy!

Deploy başarılı olduğunda Vercel size bir URL verecek:

```
https://utukapinda.vercel.app
```

Özel domain eklemek için:
1. Vercel Dashboard → Settings → Domains
2. Domain ekle
3. DNS ayarlarını yapılandır

---

## 💡 İpuçları

- Frontend ve backend'i ayrı deploy edin
- Environment variables'ı Vercel'de yönetin
- Her commit otomatik deploy tetikler (opsiyonel kapatabilirsiniz)
- Production branch'i koruyun

Başarılar! 🚀
