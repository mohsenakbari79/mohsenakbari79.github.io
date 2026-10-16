# محسن اکبری — سایت شخصی

سایت شخصی **محسن اکبری** (توسعه‌دهنده فول‌استک) ساخته‌شده با [Astro](https://astro.build) و Tailwind CSS.

- آدرس سایت: <https://mohsenakbari79.github.io>
- زبان‌ها: فارسی (پیش‌فرض، RTL) و English
- امکانات: دارک مود، انیمیشن‌های scroll-reveal، View Transitions، فرم تماس، SEO کامل، خروجی چاپی رزومه

## اجرا

```bash
npm install          # نصب وابستگی‌ها
npm run dev          # اجرای محلی (http://localhost:4321)
npm run build        # ساخت خروجی استاتیک در dist/
npm run preview      # پیش‌نمایش خروجی build
```

## فرم تماس (Web3Forms)

فرم تماس از سرویس [Web3Forms](https://web3forms.com) استفاده می‌کند:

1. در <https://web3forms.com> ایمیل `malevin2020@gmail.com` را ثبت کنید و access key رایگان بگیرید.
2. فایل `.env.example` را به `.env` کپی کرده و مقدار `PUBLIC_WEB3FORMS_ACCESS_KEY` را جایگزین کنید.
3. دوباره build کنید. (در GitHub Actions می‌توانید همین متغیر را به‌صورت Repository Secret اضافه کنید.)

## استقرار روی GitHub Pages

استقرار به‌صورت خودکار انجام می‌شود: با هر push به شاخه `main`، GitHub Action سایت را build کرده و روی شاخه `gh-pages` منتشر می‌کند. در تنظیمات Pages ریپازیتوری، Source باید روی `gh-pages` تنظیم شده باشد.

## ساختار پروژه

```
src/
├── pages/
│   ├── index.astro        صفحه اصلی فارسی (Hero + درباره من + مهارت‌ها)
│   ├── resume.astro       رزومه فارسی (تحصیلات + سوابق + پروژه‌ها + دوره‌ها)
│   ├── contact.astro      تماس فارسی
│   └── en/                نسخه انگلیسی هر سه صفحه
├── layouts/
│   └── BaseLayout.astro   لایوت اصلی (SEO، تم، هدر و فوتر)
├── components/            کامپوننت‌های Astro
├── data/                  محتوای فارسی و انگلیسی (fa.ts / en.ts)
└── styles/global.css      توکن‌های رنگی، تم روشن/تیره و استایل‌های سراسری
```
