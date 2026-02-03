
/* 
====================================================
ALPHAMIND AGENCY — WEB SITE MASTER BLUEPRINT
====================================================

1. WIREFRAME AÇIKLAMASI
- Hero: Ekranı kaplayan karanlık atmosfer, merkezde neon titreşimli logo. Scroll ile metinler drift ederek belirir.
- Content Blocks: Sol tarafta başlıklar (H1/H2), sağ tarafta geniş boşluklar ve laboratuvar tipi istatistikler/metadata.
- Hover States: Her buton veya kart etkileşiminde mikro glitch ve neon bloom efekti.
- Lab Sidebar: Masaüstünde solda sabit duran, terminal tarzı (Status: Online, Hub_Loc gibi) bilgiler.

2. UI COMPONENT LİSTESİ
- NeonButton: Background fill ve border glow opsiyonlu.
- LabCard: Koyu gri border, hover'da neon pink glow, 0.35 opacity resim overlay.
- TerminalText: Mono font, typewriter efekti ile belirme.
- GlitchHeader: Başlıkların üzerine gelindiğinde anlık RGB kayması.
- PulseIndicator: Aktiflik belirten titreşimli neon daire.

3. MOTION & INTERACTION
- Page Loader: Neon line wipe (yukarıdan aşağı).
- Hero Drift: Başlıklar yavaşça yukarı doğru (Y: 20 -> 0) drift ederken fade-in olur.
- Scroll Parallax: Görüntüler metne göre %15 daha yavaş kayar (speed 0.3).
- Hover Glitch: 0.2s süren, 3px'lik RGB split.

4. RESPONSIVE DAVRANIŞLAR
- Desktop (1440px): 12 kolon, tam genişlikte editoryal layout.
- Tablet: 8 kolon, stack edilmiş kartlar, basitleştirilmiş navigasyon.
- Mobile: 4 kolon, tam ekran açılır menü, basitleştirilmiş animasyonlar (performans odaklı).

5. SEO ÖNERİLERİ
- Title: ALPHAMIND — Creative Intelligence Hub | Neon Strateji & AI Laboratuvarı
- Description: Alphamind, yaratıcılığı strateji ve yapay zeka ile birleştiren premium bir kreatif ajanstır. Markanızı neon bir geleceğe hazırlıyoruz.

*/

export const AlphamindData = {
  "site_map": {
    "home": "/",
    "about": "/hakkimizda",
    "services": "/hizmetler",
    "process": "/surec",
    "projects": "/projeler",
    "manifesto": "/manifesto",
    "contact": "/iletisim"
  },
  "design_tokens": {
    "colors": {
      "bg": "#000000",
      "primary": "#FF2EB8",
      "white": "#F2F2F2",
      "grey_static": "#2B2B2B",
      "grey_fog": "#A8A8A8",
      "glow_alt": ["#4EE3FF", "#A700FF"]
    },
    "typography": {
      "main": "Neue Montreal",
      "body": "Inter",
      "h1": { "size": "72px", "weight": 700, "spacing": "-1.5%" },
      "body_text": { "size": "18px", "weight": 300, "line_height": "160%" }
    }
  },
  "components": {
    "cta": ["PrimaryNeon", "SecondaryBorder", "GhostUnderline"],
    "sections": ["HeroLab", "CapabilitiesGrid", "ProcessLine", "ManifestoReveal"]
  },
  "motion_specs": {
    "curves": { "main": "cubic-bezier(0.2, 0.8, 0.2, 1)" },
    "timings": {
      "drift": "0.7s",
      "flicker": "infinite",
      "page_transition": "0.8s"
    },
    "effects": ["RGB_Split", "Glow_Bloom", "Neon_Flicker"]
  }
};
