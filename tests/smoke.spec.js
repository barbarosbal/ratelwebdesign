const { test, expect } = require('@playwright/test');
const base = 'http://127.0.0.1:4173';

test('ana sayfa ve firma yolu ulaşılabilir', async ({ page }) => {
  await page.goto(base + '/');
  await expect(page.getByRole('link', { name: /Nuh Elektrik/ })).toBeVisible();
  await page.goto(base + '/nuhelektirik/', { waitUntil: 'domcontentloaded' });
  await expect(page.getByRole('heading', { name: 'Nuh Elektrik' })).toBeVisible();
  const site = page.frameLocator('#afterPanel iframe');
  await expect(site.getByRole('heading', { level: 1 })).toContainText('Güçlü projeler');
});

test('eski / yeni ve üç cihaz görünümü değişir', async ({ page }) => {
  await page.goto(base + '/nuhelektirik/', { waitUntil: 'domcontentloaded' });
  for (const [key, width] of [['mobile','390px'],['tablet','820px'],['desktop','1440px']]) {
    const button = page.locator('[data-size="' + key + '"]');
    await button.click();
    await expect(button).toHaveAttribute('aria-pressed','true');
    await expect(page.locator('#afterPanel .device')).toHaveCSS('width',width);
  }
  await page.locator('[data-mode="before"]').click();
  await expect(page.locator('#beforePanel')).toBeVisible();
  await expect(page.locator('#afterPanel')).toBeHidden();
  await page.locator('[data-mode="after"]').click();
  await expect(page.locator('#beforePanel')).toBeHidden();
  await expect(page.locator('#afterPanel')).toBeVisible();
  await page.locator('[data-mode="both"]').click();
  await expect(page.locator('#beforePanel')).toBeVisible();
  await expect(page.locator('#afterPanel')).toBeVisible();
});

test('yeni web sitesi mobil menüsü ve iletişim bağlantıları çalışır', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(base + '/nuhelektirik/site/');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Güçlü projeler');
  const menu = page.locator('#menu');
  await expect(menu).toBeVisible();
  await menu.click();
  await expect(menu).toHaveAttribute('aria-expanded', 'true');
  await expect(page.locator('#navigation')).toBeVisible();
  await page.locator('#navigation a[href="#iletisim"]').click();
  await expect(menu).toHaveAttribute('aria-expanded', 'false');
  await expect(page.locator('a[href="tel:+902164139023"]').first()).toHaveAttribute('href','tel:+902164139023');
  await expect(page.locator('a[href="mailto:serafettin@nuhelektrik.com.tr"]').first()).toHaveAttribute('href','mailto:serafettin@nuhelektrik.com.tr');
});

test('alternatif doğru yazım yolu yönlendirir', async ({ page }) => {
  await page.goto(base + '/nuhelektrik/');
  await expect(page).toHaveURL(/\/nuhelektirik\/$/);
});
