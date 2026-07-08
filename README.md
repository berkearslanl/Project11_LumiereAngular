# LUMIÈRE Kozmetik

Modern bir kozmetik markası için geliştirilmiş, tam kapsamlı bir web platformu. Müşteriye açık vitrin sitesi ve markanın tüm içeriğini yönetebildiği bir admin panelinden oluşur.

## Proje Yapısı

Bu repo iki ayrı uygulamayı bir arada barındırır:

```
Project11_LumiereAngular/
├── frontend/   # Angular 21 SPA
└── backend/    # ASP.NET Core 8 Web API
```

## Özellikler

### Vitrin Sitesi
- Banner / hero alanı
- Öne çıkan ürünler ve kategoriye göre filtrelenebilen **tüm ürünler** sayfası
- Hakkımızda bölümü
- Müşteri yorumları (testimonials)
- İletişim bilgileri ve iletişim formu

### Admin Panel
- Ürün, kategori, hakkımızda, öne çıkan alan, yorum, iletişim bilgisi ve iletişim mesajları için tam CRUD yönetimi
- Responsive, tablo tabanlı liste ekranları
- Sidebar + topbar içeren özel admin layout'u

## Teknoloji Yığını

**Frontend**
- Angular 21 (NgModule tabanlı mimari)
- Tailwind CSS (Material 3 renk paleti ile özelleştirilmiş)
- RxJS + Angular Signals (`signal`, `computed`, `toSignal`)
- Playfair Display / Montserrat (Google Fonts), Material Symbols

**Backend**
- ASP.NET Core 8 Web API
- Entity Framework Core + SQLite
- AutoMapper
- Swashbuckle (Swagger/OpenAPI)

## Kurulum

### Backend
```bash
cd backend/CosmeticServer.API
dotnet ef database update
dotnet run
```
API varsayılan olarak `https://localhost:7000` üzerinden yayınlanır.

### Frontend
```bash
cd frontend
npm install
ng serve
```
Uygulama `http://localhost:4200` adresinde çalışır.

## Klasör Yapısı (Frontend)

```
frontend/src/app/
├── main-components/   # Vitrin sitesi bileşenleri (banner, ürünler, hakkımızda, iletişim...)
├── admin-components/  # Admin panel CRUD ekranları
├── layouts/           # main-layout & admin-layout kabukları
├── models/            # TypeScript veri modelleri
└── services/          # HttpClient tabanlı API servisleri
```

## Yol Haritası
- [ ] Ürün detay sayfası
- [ ] Sepet / sipariş akışı
- [ ] Kimlik doğrulama (admin girişi)
