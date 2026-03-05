# Flindr Match Engine v2.0 — Kullanıcı Hikayeleri

**Versiyon:** 2.0
**Tarih:** Mart 2026
**Kullanıcı Tipleri:** Freelancer · İşletme · Flindr Admin
**Format:** _"Bir [kullanıcı] olarak [eylem] yapmak istiyorum, çünkü [motivasyon]."_

---

## 🔴 LAUNCH KRİTİK
> v2.0 çıkışından önce tamamlanması zorunlu hikayeler.

---

### 👤 Freelancer

**US-F01**
> Bir **freelancer** olarak profilime becerilerimi, deneyim yılımı ve uzmanlık alt-kategorilerimi yapılandırılmış şekilde girmek istiyorum, çünkü Match Engine'in beni yalnızca gerçekten uygun projelerle eşleştirmesini istiyorum.

**Kabul Kriterleri:**
- En az 3 beceri katmanı girilebilmeli (Ana kategori → Alt kategori → Araç/Teknoloji)
- Yıl bazlı deneyim slider'ı mevcut
- Beceriler etiket (tag) formatında kaydediliyor

---

**US-F02**
> Bir **freelancer** olarak Match Engine'in bana önerdiği projeleri bütçe aralığı, süre ve kategori filtresiyle daraltabilmek istiyorum, çünkü kalabalık bir listede zaman kaybetmeden işe odaklanmak istiyorum.

**Kabul Kriterleri:**
- Bütçe: min–max aralık filtresi (TL ve USD)
- Süre: < 1 hafta / 1–4 hafta / 1–3 ay / 3 ay+
- Kategori: çoklu seçim

---

**US-F03**
> Bir **freelancer** olarak her eşleşmeye atanan "uyum skorunu" ve bu skorun hangi kriterlere dayandığını (beceri, konum, bütçe uyumu vb.) görmek istiyorum, çünkü profilimi nasıl geliştireceğimi somut olarak anlamak istiyorum.

**Kabul Kriterleri:**
- Skor 0–100 arası yüzde formatında gösteriliyor
- Skoru oluşturan en fazla 3 faktör etiket olarak listeleniyor
- "Profil eksik" uyarısı kayıp alanlar için görünüyor

---

**US-F04**
> Bir **freelancer** olarak bir proje teklifini tek dokunuşta kabul edebilmek veya nazikçe reddedebilmek istiyorum, çünkü hızlı karar vermek hem benim hem işletmenin zamanını koruyor.

**Kabul Kriterleri:**
- Kabul / Reddet / "Sonra Bak" seçenekleri var
- Reddetme sebebi opsiyonel olarak seçilebiliyor (bütçe, konu, yoğunluk)
- Reddetme sebebi algoritma geri bildirimi olarak kaydediliyor

---

### 🏢 İşletme

**US-B01**
> Bir **işletme** olarak işe alım ihtiyacımı kısa bir serbest metin brief'iyle (ne, ne zaman, bütçe) Match Engine'e iletebilmek istiyorum, çünkü uzun form doldurmak yerine hızlıca aday listesi görmek istiyorum.

**Kabul Kriterleri:**
- 280 karakterlik brief alanı + opsiyonel detaylı alan
- AI brief'i otomatik parse ederek kategori, bütçe ve süre çıkarıyor
- Çıkarılan değerler kullanıcıya onaylatılıyor

---

**US-B02**
> Bir **işletme** olarak Match Engine'in benim brief'ime göre sıraladığı freelancer önerilerini uyum skoru, günlük müsaitlik ve profil özeti ile birlikte görmek istiyorum, çünkü ilk bakışta en uygun adayı tanımlamak istiyorum.

**Kabul Kriterleri:**
- Liste görünümü: skor, rozet, başlık, günlük müsaitlik durumu
- Kart tıklandığında tam profil açılıyor
- İlk 5 öneri "Üst Eşleşme" olarak etiketleniyor

---

**US-B03**
> Bir **işletme** olarak beğendiğim freelancer profillerini kısa liste (shortlist) olarak kaydedebilmek ve kendi notlarımı ekleyebilmek istiyorum, çünkü değerlendirme sürecini takım içinde düzenli yönetmek istiyorum.

**Kabul Kriterleri:**
- Shortlist: maksimum 10 profil
- Her profile 500 karaktere kadar özel not yazılabiliyor
- Shortlist paylaşma linki oluşturulabiliyor (salt okunur)

---

**US-B04**
> Bir **işletme** olarak seçtiğim freelancerla ilk iletişimi Match Engine üzerinden başlatabilmek istiyorum, çünkeen iyi eşleşmeyi bulduktan sonra platforma geri dönmek zorunda kalmadan süreci sürdürmek istiyorum.

**Kabul Kriterleri:**
- "Mesaj Gönder" butonu shortlist ve öneri kartında mevcut
- İlk mesaj şablonu (brief özeti) opsiyonel olarak ekleniyor
- Yanıt bildirimi push/e-posta ile geliyor

---

### ⚙️ Flindr Admin

**US-A01**
> Bir **Flindr admin** olarak eşleşme algoritmasındaki ağırlık parametrelerini (beceri uyumu, bütçe yakınlığı, profil tamlığı, geçmiş başarı oranı) dashboard üzerinden güncelleyebilmek istiyorum, çünkü A/B test yaparak dönüşüm oranını optimize etmek istiyorum.

**Kabul Kriterleri:**
- Her parametre için 0–100 arası ağırlık slider'ı
- Değişiklikler "Taslak" olarak kaydediliyor, yayına almak için onay adımı var
- Ağırlık versiyonları (v1, v2…) geçmiş olarak saklanıyor

---

**US-A02**
> Bir **Flindr admin** olarak gerçekleşen eşleşmelerin sonuçlarını (kabul, ret, mesajlaşmaya dönüşme oranı) günlük dashboard'da görmek istiyorum, çünkü algoritmanın anlık performansını izlemek ve kötüleşmeleri erken fark etmek istiyorum.

**Kabul Kriterleri:**
- Kabul oranı, ret oranı, mesajlaşmaya dönüşme oranı (24 saatlik pencere)
- Grafik: 7 günlük trend çizgisi
- Eşleşme sayısı < eşik değerinde otomatik uyarı e-postası

---

**US-A03**
> Bir **Flindr admin** olarak kalite skoru düşük profilleri (eksik bilgi, düşük eşleşme geçmişi, şüpheli aktivite) otomatik bayraklayabilmek istiyorum, çünkü platform güvenilirliğini ve eşleşme kalitesini yüksek tutmak istiyorum.

**Kabul Kriterleri:**
- 3 bayrak seviyesi: Sarı (uyarı) / Turuncu (inceleme) / Kırmızı (askı)
- Bayraklanan profil 48 saat içinde admin'e bildirim gönderiyor
- İtiraz mekanizması: kullanıcı 1 itiraz hakkına sahip

---

## 🟡 NICE-TO-HAVE
> v2.0 sonrası döngüde değerlendirilecek, piyasada fark yaratacak hikayeler.

---

### 👤 Freelancer

**US-F05**
> Bir **freelancer** olarak "Şu an müsaitim / Yoğun dönem / Kapalı" modlarını tek dokunuşla değiştirebilmek istiyorum, çünkü yoğun olduğum dönemlerde teklif almak yerine aktif projelerime odaklanmak istiyorum.

---

**US-F06**
> Bir **freelancer** olarak benimle eşleşen işletmenin geçmiş proje sayısını, ortalama proje bütçesini ve önceki freelancer değerlendirmelerini görmek istiyorum, çünkü görüşme öncesinde işbirliğine değer olup olmadığını anlamak istiyorum.

---

**US-F07**
> Bir **freelancer** olarak kendi kategorimde benzer profillere atanan ortalama bütçe aralığını görmek istiyorum, çünkü fiyatlandırmamı piyasaya göre rekabetçi şekilde konumlandırmak istiyorum.

---

### 🏢 İşletme

**US-B05**
> Bir **işletme** olarak daha önce birlikte çalıştığım freelancerları "Tercih Listesi"me ekleyebilmek istiyorum, çünkü yeni bir proje açtığımda onları öncelikli aday olarak görmek istiyorum.

---

**US-B06**
> Bir **işletme** olarak Match Engine'in benim brief'imi sadece mevcut müsait freelancerlarla eşleştirmesini istiyorum (kalabalık olmayan, pasif modda olanları görmek istemiyorum), çünkü teklif gönderdiğimde gerçekten hızlı yanıt alma ihtimalim yüksek olsun istiyorum.

---

### ⚙️ Flindr Admin

**US-A04**
> Bir **Flindr admin** olarak belirli sektör veya şehir kombinasyonları için ayrı eşleşme kural setleri oluşturabilmek istiyorum (örn. İstanbul fintek, Ankara kamu IT), çünkü farklı pazar segmentleri farklı eşleşme ağırlıkları gerektiriyor.

---

## 🔵 GELECEK VERSİYON
> v3.0+ için vizyon hikayeleri; roadmap'e alınacak öncelik sırasına göre değerlendirilecek.

---

### 👤 Freelancer

**US-F08**
> Bir **freelancer** olarak profilim için AI destekli "Profil Güçlendirme Önerileri" almak istiyorum (hangi beceriyi eklesem, hangi portföy örneğini öne çıkarsam), çünkü eşleşme oranımı somut adımlarla artırmak istiyorum.

---

**US-F09**
> Bir **freelancer** olarak geçmiş projelerimden ve müşteri yorumlarımdan otomatik oluşturulmuş bir "Güçlü Yönler" özeti görmek istiyorum, çünkü kendi güçlü yönlerimi nasıl ifade edeceğimi bulmak zor ve zaman alıyor.

---

### 🏢 İşletme

**US-B07**
> Bir **işletme** olarak tamamlanan projelerimin verilerine (kategori, bütçe, süre, başarı skoru) dayalı kişiselleştirilmiş eşleşme önerileri almak istiyorum, çünkü her seferinde kriterlerimi sıfırdan girmek yerine platform beni zamanla daha iyi tanısın istiyorum.

---

**US-B08**
> Bir **işletme** olarak birden fazla freelancer'ın aynı brief üzerinde kısa bir "ön teklif" (pitch) sunmasını ve bunları yan yana karşılaştırabilmek istiyorum, çünkü sadece profile bakarak karar vermek yerine yaklaşımlarını görerek seçmek istiyorum.

---

### ⚙️ Flindr Admin

**US-A05**
> Bir **Flindr admin** olarak eşleşme motoruna gerçek zamanlı demand sinyalleri (o an en çok aranan kategoriler, boş kalan bütçeler) besleyerek algoritmanın kendini dinamik güncellemesini sağlamak istiyorum, çünkü platform büyüdükçe statik kurallar yetersiz kalacak.

---

## 📊 Özet Tablo

| #  | Hikaye  | Kullanıcı   | Kategori         |
|----|---------|-------------|------------------|
| 1  | US-F01  | Freelancer  | 🔴 Launch Kritik  |
| 2  | US-F02  | Freelancer  | 🔴 Launch Kritik  |
| 3  | US-F03  | Freelancer  | 🔴 Launch Kritik  |
| 4  | US-F04  | Freelancer  | 🔴 Launch Kritik  |
| 5  | US-B01  | İşletme     | 🔴 Launch Kritik  |
| 6  | US-B02  | İşletme     | 🔴 Launch Kritik  |
| 7  | US-B03  | İşletme     | 🔴 Launch Kritik  |
| 8  | US-B04  | İşletme     | 🔴 Launch Kritik  |
| 9  | US-A01  | Admin       | 🔴 Launch Kritik  |
| 10 | US-A02  | Admin       | 🔴 Launch Kritik  |
| 11 | US-A03  | Admin       | 🔴 Launch Kritik  |
| 12 | US-F05  | Freelancer  | 🟡 Nice-to-Have   |
| 13 | US-F06  | Freelancer  | 🟡 Nice-to-Have   |
| 14 | US-F07  | Freelancer  | 🟡 Nice-to-Have   |
| 15 | US-B05  | İşletme     | 🟡 Nice-to-Have   |
| 16 | US-B06  | İşletme     | 🟡 Nice-to-Have   |
| 17 | US-A04  | Admin       | 🟡 Nice-to-Have   |
| 18 | US-F08  | Freelancer  | 🔵 Gelecek Versiyon |
| 19 | US-F09  | Freelancer  | 🔵 Gelecek Versiyon |
| 20 | US-B07  | İşletme     | 🔵 Gelecek Versiyon |
| 21 | US-B08  | İşletme     | 🔵 Gelecek Versiyon |
| 22 | US-A05  | Admin       | 🔵 Gelecek Versiyon |

---

_Flindr Match Engine v2.0 — Dahili Kullanım | Mart 2026_
