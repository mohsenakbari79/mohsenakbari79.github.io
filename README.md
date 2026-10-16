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

## فرم تماس (FormSubmit)

فرم تماس از سرویس رایگان [FormSubmit](https://formsubmit.co) استفاده می‌کند و بدون نیاز به API key ایمیل را به `malevin2020@gmail.com` ارسال می‌کند.

> نکته: در اولین ارسال، یک ایمیل تأیید به صندوق ورودی شما می‌آید؛ یک بار روی لینک تأیید کلیک کنید تا فرم فعال شود.

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
