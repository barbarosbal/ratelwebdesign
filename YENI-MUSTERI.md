# Yeni müşteri önizlemesi ekleme

Kaynak kodun tek yetkili yeri bu GitHub deposudur. Yerel proje oluşturmak gerekmez.

1. Yeni bir kısa adres seçin: ör. \`/ornekfirma/\`.
2. \`nuhelektirik/index.html\` dosyasını yeni klasöre kopyalayın.
3. Firma adı, eski site URL'si ve yeni site iframe URL'sini (varsayılan \`./site/\`) değiştirin.
4. Yeni \`/ornekfirma/site/index.html\` dosyasına firmaya özel çalışan tasarımı ekleyin.
5. Kök \`index.html\` dosyasındaki portföy listesine yeni bir kart ekleyin.
6. \`tests/smoke.spec.js\` içine firma için en az bir sayfa açılma ve temel gezinme testi ekleyin.
7. GitHub Actions testleri PASS olmadan müşteriyle paylaşmayın.

## Eski sitenin görüntülenmesi

Eski siteler güvenlik başlıkları (\`X-Frame-Options\` veya \`Content-Security-Policy: frame-ancestors\`) nedeniyle başka sitelerde iframe olarak açılmayabilir. Bu, önizleme uygulamasındaki bir hata değildir. Önizlemede görünür bir \`Orijinali aç\` bağlantısı bulunur. Firma izin vermedikçe içerik kopyası veya sahte ekran görüntüsü eklemeyin.

## Alan adı / ücretsiz yayın

- GitHub repo **Settings → Pages → Build and deployment → Deploy from a branch → main → /(root) → Save**.
- DNS yönetiminde \`web\` için \`CNAME\` kaydı \`barbarosbal.github.io\` hedefine yönlendirilmeli. Ayrı \`A/AAAA/CNAME\` çakışmaları bulunmamalı.
- Repo kökünde \`CNAME\` dosyası \`web.ratel.systems\` içerir.
- GitHub Pages özel alan adı \`web.ratel.systems\` olarak doğrulanmalı ve **Enforce HTTPS** etkinleştirilmeli.
- Son kontrol: \`https://web.ratel.systems/\` ve \`https://web.ratel.systems/nuhelektirik/\`.
- Site değişiklikleri \`main\` yayımlandığında görünür. DNS ve Pages kurulumları GitHub dosyalarıyla tek başına tamamlanmaz.

Müşteri onayı alınana kadar sayfalar tasarım önerisi olarak etiketlenir. Kaynak gösterilemeyen referans, başarım, sertifika veya iş ortaklığı iddiaları eklenmez.
