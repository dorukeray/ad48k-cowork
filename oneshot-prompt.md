Flindr
Marka Kişiliği
Flindr'ı bir insan olarak düşün: 28 yaşında, İstanbul'da yaşayan, işini ciddiye alan ama kurumsal olmayan bir kurucu. Zeki, doğrudan, biraz özgüvenli. Gereksiz süsleme yok, her şey bir amaca hizmet ediyor.
3 kelimeyle: Güvenilir. Akıllı. Sessiz özgüvenli.
Ne değil: Neşeli startup enerjisi, emoji dolduran markalar, "biz bir aileyiz" diyen şirketler.

Görsel Kimlik
Renkler:

- Ana: #7C3AED — elektrik moru (enerji, teknoloji, özgüven)
- Arka plan: #0A0A0F — neredeyse siyah (premium, odaklanmış)
- Vurgu: #A78BFA — açık mor (hover, highlight)
- Metin: #F4F4F5 — kırık beyaz (göz yormayan)
- İkincil metin: #71717A — gri (açıklama metinleri)
- Başarı: #10B981 — yeşil (match skoru, onay)
- Kart arka planı: #18181B — koyu gri (glassmorphism için)

Tipografi:

- Başlıklar: Inter Bold/Black — temiz, modern, okunabilir
- Gövde: Inter Regular/Light
- Vurgu sayılar: Inter Black, büyük punto, mor renk
  Stil:
- Glassmorphism kartlar — backdrop-blur, yarı şeffaf border
- Subtle gradient mesh arka plan (animated, çok yavaş)
- Minimal ikon kullanımı — çizgisel, ince
- Çok fazla whitespace — her şey nefes alıyor
- Border: 1px solid rgba(255,255,255,0.08)

Site Yapısı
Sayfalar:

1. / — Landing page (ana sayfa)
2. /how-it-works — Nasıl çalışır, detaylı
3. /pricing — Fiyatlandırma
4. /blog — İçerik (freelancer rehberleri)
5. /login — Giriş
6. /signup — Kayıt

Landing Page Anatomisi

1. Navbar

- Sol: Flindr logosu (küçük, minimal — sadece wordmark)
- Sağ: "Nasıl Çalışır", "Fiyatlar", "Blog" + "Giriş Yap" (ghost button) + "Ücretsiz Dene" (mor, solid button)
- Sticky, scroll'da hafif blur arka plan

2. Hero Section

- Küçük üst etiket: "Match Engine v2.0 — Şimdi Canlı ✦" (mor pill badge, animasyonlu)
- Ana başlık (büyük, bold, 2 satır): "Müşteri aramayı bırak. Müşteri seni bulsun."
- Alt başlık: Küçük, gri, 1 satır açıklama
- 2 buton: "Ücretsiz Başla" (mor, solid) + "Nasıl Çalışır" (ghost)
- Alt kısım: 3 küçük sosyal kanıt istatistiği — 2.400+ freelancer, %94 eşleştirme memnuniyeti, 4 dk ortalama eşleştirme süresi
- Hero görseli: Sağ tarafta floating dashboard mockup — match score kartları, kullanıcı avatarları, skor yüzdeleri

3. Sosyal Kanıt Şeridi

- "Bunların ekiplerinde çalışan freelancer'lar Flindr kullanıyor" yazısı
- Kurgusal ama gerçekçi Türk şirket logoları (gri, düşük opaklık)
- Yavaş scroll animasyonu

4. Problem → Çözüm Bölümü

- Sol taraf (kırmızımsı, soluk): "Eskiden böyleydi" — manuel arama, günler süren bekleme, yanlış eşleşmeler
- Sağ taraf (mor, canlı): "Şimdi böyle" — otomatik, 4 dakika, skor bazlı
- İki taraf arasında ince bir çizgi ve ok

5. Nasıl Çalışır

- 3 adım, yatay akış, numaralı
- Her adımda: numara (büyük, mor) + başlık + 2 cümle açıklama + küçük illüstrasyon/ikon
- Adımlar: Profilini Oluştur → Motor Analiz Eder → Eşleştirme Gelir

6. Özellikler

- 2x2 grid, glassmorphism kartlar
- Her kart: ikon + başlık + açıklama
- Özellikler: AI Match Skoru / Otomatik Intro E-postası / Akıllı Profil Analizi / Performans Dashboard'u

7. Testimonial

- 3 kart, yatay
- Her birinde: alıntı metni + isim + unvan + avatar (baş harfli renkli daire)
- Arka plan: hafif glassmorphism

8. Fiyatlandırma

- 2 tier: Starter (₺499/ay) ve Pro (₺799/ay)
- Pro kart hafif mor border ile öne çıkarılmış, "Önerilen" etiketi
- Her tier'da feature listesi (✓ işaretli)
- Altında: "Kredi kartı gerekmez. 14 gün ücretsiz dene."

9. Final CTA

- Tam genişlik, mor gradient arka plan
- Büyük başlık: "Bir sonraki müşterin seni bekliyor."
- Tek buton: "Hemen Başla"

10. Footer

- 4 sütun: Logo + açıklama / Ürün linkleri / Şirket linkleri / Yasal
- Alt bar: copyright + KVKK + Gizlilik Politikası

Komponent Dili
Kod yazarken şunlara dikkat et:

- Tüm kartlar: rounded-2xl, border border-white/8, bg-white/5, backdrop-blur-sm
- Butonlar: rounded-full (pill shape), px-6 py-3
- Başlıklar: tracking-tight, font-black
- Mor gradient: from-violet-600 to-violet-800
- Hover animasyonları: scale-[1.02], transition-all duration-300
- Section padding: py-24 md:py-32
- Max genişlik: max-w-6xl mx-auto px-6
