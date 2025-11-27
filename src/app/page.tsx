"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const features = [
  {
    title: "Her masada dijital menü",
    desc: "Müşterileriniz QR kodu okutup menünüze anında, temiz ve güncel bir arayüzle ulaşır.",
  },
  {
    title: "Size özel tasarım",
    desc: "Logo, renkler, tipografi ve içerik işletmenizin kimliğine göre hazırlanır; genel şablon kullanılmaz.",
  },
  {
    title: "Kolay fiyat güncelleme",
    desc: "Fiyat veya ürün değişikliklerini bize iletin ya da panelden yönetin; menünüz her zaman güncel kalsın.",
  },
  {
    title: "Google & Instagram entegrasyonu",
    desc: "Google haritanız ve Instagram profiliniz menü bağlantılarıyla optimize edilir, görünürlüğünüz artar.",
  },
  {
    title: "Yapay zeka öneri motoru",
    desc: "Müşterinin ruh haline göre yiyecek-içecek önerileri sunan akıllı asistan ile upsell oranlarını artırın.",
  },
  {
    title: "Hızlı teslimat",
    desc: "Menünüzü 5 iş günü içinde canlıya alıyor, QR kodlarınızı baskıya hazır şekilde teslim ediyoruz.",
  },
];

const steps = [
  {
    title: "Keşif & ihtiyaç analizi",
    desc: "Mekanınızı, menünüzü ve marka tonunuzu dinleyerek doğru yapıyı planlıyoruz.",
  },
  {
    title: "Tasarım & Kurulum",
    desc: "Tamamen size özel dijital menü arayüzü ve QR tasarımını hazırlayıp altyapıyı kuruyoruz.",
  },
  {
    title: "Eğitim & teslim",
    desc: "Yönetici veya ekibinize kısa bir eğitim verip teslim ediyoruz; örnekler kapalı devrede paylaşılır.",
  },
  {
    title: "Sürekli bakım",
    desc: "Aylık hizmette güncellemeler, QR yenileme, teknik bakım ve öncelikli destek sağlanır.",
  },
];

const faqs = [
  {
    q: "Sadece Bandırma için mi hizmet veriyorsunuz?",
    a: "Öncelikli odağımız Bandırma ve çevresi; ancak uzaktan kurulumla diğer şehirlerdeki işletmelere de destek veriyoruz.",
  },
  {
    q: "Menüyü kim dolduruyor?",
    a: "Kurulumda menü girişlerini biz yapıyoruz. Sonrasında dilerseniz panelden siz, dilerseniz biz güncelliyoruz; örnek menüler herkese açık yayımlanmaz, işletmelere özel hazırlanır.",
  },
  {
    q: "Baskı işlerini siz mi yapıyorsunuz?",
    a: "QR tasarımlarını baskıya hazır PDF olarak teslim ediyoruz. Kendi matbaanızla ilerleyebilir veya iş ortaklarımızdan destek alabilirsiniz.",
  },
  {
    q: "Sözleşme zorunlu mu?",
    a: "Kurulum tek seferliktir; aylık hizmet için minimum 3 ay taahhüt ile çalışıyoruz.",
  },
];

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-transparent text-slate-900">
      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-6 sm:px-6 lg:px-10">
        <Navbar />

        {/* HERO – sade beyaz zemin + sağda görsel kart */}
        <section className="mt-12 grid gap-10 rounded-3xl bg-white/90 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.16)] backdrop-blur-xl lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.9fr)] lg:items-center">
          {/* Sol panel */}
          <div className="space-y-6 px-2 sm:px-4 lg:px-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
              Yeni nesil dijital menü altyapısı
            </div>

            <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              Kafenizin menüsü
              <span className="block text-blue-600">masadan çıkıp cebe girsin.</span>
            </h1>

            <p className="max-w-xl text-base text-slate-600">
              QR Masam, kafe ve restoranlar için premium dijital menü ve QR
              altyapısı sunar. Menüleriniz işletmenize özel hazırlanır ve
              örnekler yalnızca teklif aşamasında paylaşılır; sitede genel demo
              gösterilmez. Yapay zeka destekli öneri motoru, müşterinin ruh
              haline göre yiyecek-içecek önerileri sunar.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a href="#contact" className="btn-primary">
                Hemen teklif iste
              </a>
              <a href="#pricing" className="btn-secondary">
                Fiyatları görüntüle
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 sm:text-sm">
              <span>• Öncelikli WhatsApp desteği</span>
              <span>• Teslim: 5 iş günü içinde kurulum</span>
            </div>
          </div>

          {/* Sağ panel: demo bilgi kartı */}
          <div className="px-2 pb-4 sm:px-4 lg:px-6">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.16)]">
              <div className="pointer-events-none absolute -left-16 top-0 h-40 w-40 rounded-full bg-blue-200/40 blur-3xl opacity-50" />
              <div className="pointer-events-none absolute -right-10 bottom-0 h-32 w-32 rounded-full bg-orange-200/40 blur-3xl opacity-50" />

              <div className="relative space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-blue-700">
                  <span className="h-2 w-2 rounded-full bg-blue-500" />
                  <span>Demo nasıl hazırlanıyor?</span>
                </div>

                <ol className="space-y-3 text-sm text-slate-700">
                  <li className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full border border-blue-500/40 bg-blue-50 text-[11px] font-semibold text-blue-700">
                      1
                    </span>
                    <span>Menünüzü WhatsApp veya e-posta ile bize iletin.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full border border-blue-500/40 bg-blue-50 text-[11px] font-semibold text-blue-700">
                      2
                    </span>
                    <span>Size özel tasarım ve renklerinizle dijital menünüzü hazırlayalım.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full border border-blue-500/40 bg-blue-50 text-[11px] font-semibold text-blue-700">
                      3
                    </span>
                    <span>Demo örneğini onayınıza sunalım, ardından QR kodlarınızı teslim edelim.</span>
                  </li>
                </ol>

                <p className="text-xs text-slate-500">
                  Örnek menüler sadece teklif aşamasında, işletmelere özel olarak paylaşılır;
                  sitede herkese açık demo gösterilmez.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Küçük istatistik kartları */}
        <section className="mt-12 grid gap-4 md:grid-cols-3">
          <div className="glass-card flex items-center gap-3 rounded-2xl border border-blue-500/15 bg-white/80 p-4 text-slate-700 shadow-[0_14px_40px_rgba(15,23,42,0.12)] backdrop-blur-xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 text-lg">📈</div>
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Günlük görüntülenme
              </p>
              <p className="text-lg font-semibold text-slate-900">120+</p>
            </div>
          </div>
          <div className="glass-card flex items-center gap-3 rounded-2xl border border-orange-400/40 bg-white/80 p-4 text-slate-700 shadow-[0_14px_40px_rgba(15,23,42,0.12)] backdrop-blur-xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-lg">⚡️</div>
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Teslim süresi
              </p>
              <p className="text-lg font-semibold text-slate-900">5 iş günü</p>
            </div>
          </div>
          <div className="glass-card flex items-center gap-3 rounded-2xl border border-blue-500/15 bg-white/80 p-4 text-slate-700 shadow-[0_14px_40px_rgba(15,23,42,0.12)] backdrop-blur-xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 text-lg">🤖</div>
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Yapay zeka önerileri
              </p>
              <p className="text-lg font-semibold text-slate-900">
                Ruh haline göre
              </p>
            </div>
          </div>
        </section>

        {/* Özel demo kartı */}
        <section className="mt-16 flex justify-center">
          <div className="glass-card relative w-full max-w-3xl overflow-hidden rounded-3xl p-8 text-center text-slate-700">
            <div className="absolute -left-14 top-2 h-28 w-28 rounded-full bg-blue-200/50 blur-3xl opacity-30" />
            <div className="absolute -bottom-10 right-0 h-32 w-32 rounded-full bg-orange-200/50 blur-3xl opacity-30" />
            <div className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-lg text-blue-700">
              ✨
            </div>
            <h2 className="relative mt-4 text-2xl font-semibold text-slate-900">
              İşletmenize Özel Demo Hazırlayalım
            </h2>
            <p className="relative mt-3 text-sm text-slate-600">
              Menünüzü WhatsApp’tan gönderin, işletmenize özel tamamen
              kişiselleştirilmiş bir dijital menü demosu hazırlayıp size
              sunalım. Renkler, logo, ürünler – hepsi sizin tarzınıza göre
              şekillensin. Örnekler yalnızca teklif aşamasında, işletmelere özel
              olarak paylaşılır.
            </p>
            <div className="relative mt-6 flex flex-wrap justify-center gap-3">
              <a
                href="https://wa.me/90XXXXXXXXXX?text=Merhaba%20QR%20Masam%20i%C3%A7in%20%C3%B6zel%20demo%20haz%C4%B1rlatmak%20istiyorum."
                className="btn-primary"
              >
                WhatsApp’tan iletin
              </a>
              <a href="#contact" className="btn-secondary">
                Demo talep formu
              </a>
            </div>
            <p className="relative mt-3 text-xs text-slate-500">
              * Demo tamamen ücretsizdir. Menü bilgilerinizi gönderdiğiniz gün
              hazırlanıp teslim edilir.
            </p>
          </div>
        </section>

        {/* Görsel galeri */}
        <GallerySection />

        {/* Özellikler */}
        <section className="mt-14 space-y-6" id="features">
          <div className="relative max-w-3xl space-y-2">
            <div className="absolute -left-10 -top-10 h-20 w-20 rounded-full bg-blue-200/40 blur-3xl opacity-30" />
            <h2 className="text-2xl font-semibold text-slate-900">
              Neden QR Masam?
            </h2>
            <p className="text-sm text-slate-600">
              Hafif cam dokunuşları ve sade renklerle, işletmenize özel dijital
              menü deneyimi sunuyoruz.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {features.map((item) => (
              <div
                key={item.title}
                className="relative overflow-hidden rounded-2xl border border-blue-500/15 bg-white/80 p-4 text-slate-700 shadow-[0_16px_40px_rgba(15,23,42,0.12)] backdrop-blur-xl"
              >
                <div className="absolute right-4 top-4 h-10 w-10 rounded-full bg-blue-200/50 blur-3xl opacity-30" />
                <h3 className="text-base font-semibold text-blue-700">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Süreç */}
        <section className="mt-16 space-y-4" id="how-it-works">
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-blue-500/30 via-blue-400/20 to-transparent" />
            <span className="text-sm uppercase tracking-[0.2em] text-blue-700">
              Süreç
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-blue-500/30 via-blue-400/20 to-transparent" />
          </div>
          <h2 className="text-2xl font-semibold text-slate-900">
            Nasıl çalışıyor?
          </h2>
          <p className="max-w-2xl text-sm text-slate-600">
            Kurulumdan bakıma kadar tüm süreci biz yönetiriz; örnekler ve
            demolar işletmenize özel olarak paylaşılır.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-2xl border border-blue-500/15 bg-white/80 p-4 text-slate-700 shadow-[0_16px_40px_rgba(15,23,42,0.12)] backdrop-blur-xl"
              >
                <div className="mb-2 inline-flex items-center gap-2 text-blue-700">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/10 text-sm font-semibold text-blue-700">
                    {index + 1}
                  </span>
                  <h3 className="text-sm font-semibold text-slate-900">
                    {step.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Fiyatlandırma */}
        <section className="mt-16" id="pricing">
          <div className="flex items-baseline justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                Fiyatlandırma
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-600">
                Kurulum ve bakım paketleri, dijital menü ihtiyaçlarınızı uçtan
                uca çözer.
              </p>
            </div>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <div className="relative flex flex-col overflow-hidden rounded-3xl border border-blue-500/15 bg-white/85 p-6 text-slate-700 shadow-[0_20px_60px_rgba(15,23,42,0.15)] backdrop-blur-xl">
              <div className="absolute -right-6 -top-10 h-28 w-28 rounded-full bg-blue-200/50 blur-3xl opacity-30" />
              <div>
                <h3 className="text-sm font-semibold text-blue-700">
                  Tek Seferlik Kurulum
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Dijital menünüzü sıfırdan kuruyor, tasarımınızı hazırlıyor ve
                  baskıya hazır QR dosyalarınızı teslim ediyoruz.
                </p>
                <p className="mt-4 text-4xl font-semibold text-slate-900">
                  5.999 <span className="text-lg font-normal">TL</span>
                </p>
                <p className="mt-2 text-xs text-slate-500">
                  Tek seferlik ödemedir; tasarım, kurulum ve başlangıç eğitimi
                  dahildir.
                </p>
                <ul className="mt-5 space-y-2 text-sm text-slate-600">
                  <li>• İşletmenize özel tasarım</li>
                  <li>• Menü girişi</li>
                  <li>• QR tasarımı ve baskıya hazır dosya</li>
                  <li>• Google &amp; Instagram düzenlemeleri</li>
                  <li>• Yapay zeka destekli öneri kurulum</li>
                  <li>• Yönetici eğitimi</li>
                </ul>
              </div>
            </div>

            <div className="relative flex flex-col overflow-hidden rounded-3xl border border-orange-400/50 bg-white/90 p-6 text-slate-700 shadow-[0_24px_70px_rgba(15,23,42,0.16)] backdrop-blur-xl">
              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-orange-400/70 via-orange-300/40 to-transparent" />
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-orange-700">
                    Aylık Hizmet Paketi
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Sürekli bakım, menü değişiklikleri ve öncelikli destek
                    hizmeti.
                  </p>
                </div>
                <span className="rounded-full border border-orange-400/60 bg-orange-100 px-3 py-1 text-[11px] font-semibold text-orange-700">
                  Popüler
                </span>
              </div>
              <p className="mt-4 text-4xl font-semibold text-slate-900">
                699 <span className="text-lg font-normal">TL / ay</span>
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Minimum 3 ay taahhüt ile çalışıyoruz.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-slate-600">
                <li>• Menü değişikliklerinde destek</li>
                <li>• Teknik bakım</li>
                <li>• QR yenileme</li>
                <li>• Yapay zeka destekli öneri optimizasyonu</li>
                <li>• Öncelikli WhatsApp desteği</li>
              </ul>
              <a href="#contact" className="btn-primary mt-6">
                Teklif al
              </a>
            </div>
          </div>
        </section>

        {/* SSS */}
        <section className="mt-16" id="faq">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-slate-900">
              Sık sorulan sorular
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-blue-500/20 via-blue-400/15 to-transparent" />
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {faqs.map((item) => (
              <div
                key={item.q}
                className="relative overflow-hidden rounded-2xl border border-blue-500/15 bg-white/85 p-4 text-slate-700 shadow-[0_16px_40px_rgba(15,23,42,0.12)] backdrop-blur-xl"
              >
                <div className="absolute -right-6 -top-8 h-16 w-16 rounded-full bg-blue-200/40 blur-3xl opacity-30" />
                <h3 className="text-base font-semibold text-blue-700">
                  {item.q}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* İletişim */}
        <section className="mt-16" id="contact">
          <div className="relative grid gap-6 overflow-hidden rounded-3xl border border-blue-500/15 bg-white/90 p-6 text-slate-700 shadow-[0_24px_70px_rgba(15,23,42,0.16)] backdrop-blur-xl md:grid-cols-[1.1fr_minmax(0,0.9fr)] md:items-center">
            <div className="absolute -left-10 top-4 h-24 w-24 rounded-full bg-blue-200/50 blur-3xl opacity-30" />
            <div className="absolute right-0 bottom-0 h-20 w-20 rounded-full bg-orange-200/50 blur-3xl opacity-30" />
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                Demo görmek veya teklif almak ister misiniz?
              </h2>
              <p className="mt-3 text-sm text-slate-600">
                Menünüzü paylaşın; cam dokulu, yalın tasarımlı dijital menü
                örneğini size özel olarak iletelim. İletişimi hızlıca
                WhatsApp’tan yürütebiliriz.
              </p>
            </div>
            <div className="relative flex flex-col items-start gap-3 text-sm text-slate-600">
              <a href="https://wa.me/905451542003" className="btn-primary">
                WhatsApp’tan yaz
              </a>
              <p className="text-sm text-slate-500">
                Telefon: 0 545 154 20 03 · E-posta: info@qrmasam.com
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 flex flex-wrap items-center justify-between gap-2 border-t border-slate-200 pt-4 text-xs text-slate-500">
          <span>© {year} QR Masam</span>
          <span>Bandırma · Dijital Menü Altyapısı</span>
        </footer>
      </div>
    </main>
  );
}

function Navbar() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl bg-blue-50 shadow-[0_0_18px_rgba(37,99,235,0.25)]">
        <Image
          src="/qrlogo.png"
          alt="QR Masam logo"
          width={80}
          height={80}
          className="h-full w-full object-contain"
        />
      </div>
      <header className="flex flex-1 items-center justify-between rounded-2xl border border-blue-500/15 bg-white/85 px-5 py-4 text-slate-700 shadow-[0_12px_30px_rgba(15,23,42,0.12)] backdrop-blur-xl">
        <div>
          <div className="text-lg font-semibold text-slate-900">QR Masam</div>
          <div className="text-xs text-slate-500">Her masada dijital menü</div>
        </div>
        <a
          href="#contact"
          className="rounded-full border border-orange-400/60 px-4 py-1.5 text-xs font-semibold text-orange-600 transition hover:bg-orange-50"
        >
          Demo talep et
        </a>
      </header>
    </div>
  );
}

function GallerySection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="mt-16" ref={ref}>
      <h2 className="text-center text-2xl font-semibold text-slate-900">
        QR Masam Deneyimi
      </h2>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div
          className={`overflow-hidden rounded-3xl border border-slate-200 bg-white/90 p-3 shadow-[0_16px_40px_rgba(15,23,42,0.12)] backdrop-blur-xl transition duration-700 ${
            visible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
          }`}
        >
          <Image
            src="/woman-qr.png"
            alt="QR Masam kullanan kadın"
            width={800}
            height={800}
            className="h-full w-full rounded-2xl object-cover"
          />
        </div>
        <div
          className={`overflow-hidden rounded-3xl border border-slate-200 bg-white/90 p-3 shadow-[0_16px_40px_rgba(15,23,42,0.12)] backdrop-blur-xl transition duration-700 ${
            visible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
          }`}
        >
          <Image
            src="/man-qr.png"
            alt="QR Masam kullanan erkek"
            width={800}
            height={800}
            className="h-full w-full rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
