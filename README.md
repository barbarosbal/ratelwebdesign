# Ratel Web Studio

Müşteriye özel web sitesi yenileme önizlemeleri.

Önerilen yayımlama: GitHub Pages (main, / root) + `web.ratel.systems` özel alan adı. Yerel geliştirme veya ücretli sunucu zorunlu değildir.

İlk proje: `/nuhelektirik/` (kullanıcının seçtiği adres); `/nuhelektrik/` alternatif yönlendirme.

Önizleme, müşterinin sahip olduğu mevcut siteyi ve Ratel'in teklif konseptini karşılaştırır. Üç cihaz: mobil / tablet / masaüstü. Mevcut site iframe gösterimini engelleyebilir, bu durumda orijinal site bağlantısı kullanılmalıdır.

Yayın notu: Alan adı için DNS CNAME `web` → `barbarosbal.github.io`, GitHub > repo Settings > Pages > Deploy from a branch > main > /(root). Kök `CNAME` dosyası özel alan adını bildirir. DNS değişikliği ve Pages etkinleştirmesi ayrıca gerekir; sadece git push ile otomatik tamamlanmaz.
