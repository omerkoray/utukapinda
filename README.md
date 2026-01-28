# 🧺 Ütü Kapında - Kuru Temizleme ve Ütü Servisi

Modern kuru temizleme ve ütü servisi platformu.

## 📋 Proje Yapısı

```
utukapinda/
├── backend/              # NestJS backend API
├── customer-web/         # Next.js müşteri web uygulaması
├── package.json          # Monorepo root yapılandırması
└── docker-compose.yml    # Docker yapılandırması
```

## 🚀 Kurulum

### Gereksinimler

- Node.js >= 20.0.0
- npm >= 10.0.0

### Tüm Projeyi Kurma

```bash
npm run setup
```

### Manuel Kurulum

```bash
# Root bağımlılıkları
npm install

# Backend bağımlılıkları
cd backend && npm install

# Customer-web bağımlılıkları
cd ../customer-web && npm install
```

## 💻 Geliştirme

### Tüm Servisleri Başlatma

```bash
npm run dev
```

### Sadece Frontend
```bash
npm run dev:web
# Frontend: http://localhost:3000
```

### Sadece Backend
```bash
npm run dev:backend
# Backend API: http://localhost:3001
```

## 🏗️ Build

```bash
npm run build
```

## 🐳 Docker

```bash
npm run docker:up    # Başlat
npm run docker:down  # Durdur
```

## 📦 Vercel Deployment

**Root Directory:** `customer-web`  
**Build Command:** `npm run build`  
**Output Directory:** `.next`  
**Node.js Version:** `20.x`

## 🛠️ Teknolojiler

- **Frontend:** Next.js 14, React 18, TypeScript, Tailwind CSS
- **Backend:** NestJS, Prisma, PostgreSQL

## 📄 Lisans

UNLICENSED - Özel Proje
