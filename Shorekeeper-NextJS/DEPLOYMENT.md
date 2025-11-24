# 🚀 Deployment Guide - Shorekeeper Landing Page

## ✅ Git sudah diinisialisasi dan di-commit!

---

## 📦 Push ke GitHub

### 1. Buat Repository Baru di GitHub
1. Buka https://github.com/new
2. Nama repository: `shorekeeper-landing` (atau nama lain)
3. **JANGAN** centang "Add README" (sudah ada di project)
4. Klik **Create repository**

### 2. Push Code ke GitHub

Setelah repo dibuat, jalankan command ini:

```bash
cd d:\TokioWorld\MyGitRepository\TownProject\Shorekeeper

# Ganti USERNAME dengan username GitHub kamu
git remote add origin https://github.com/USERNAME/shorekeeper-landing.git

git branch -M main

git push -u origin main
```

---

## 🌐 Deploy ke Vercel (RECOMMENDED - Gratis & Mudah)

### Kenapa Vercel?
- ✅ **Dibuat oleh creator Next.js** - optimized untuk Next.js
- ✅ **Gratis** untuk personal projects
- ✅ **Auto SSL/HTTPS**
- ✅ **Deploy otomatis** setiap push ke GitHub
- ✅ **Custom domain gratis** (xxx.vercel.app)

### Langkah Deploy:

1. **Buka Vercel**
   - Pergi ke https://vercel.com/signup
   - Login dengan akun GitHub kamu

2. **Import Project**
   - Klik **"Add New"** → **"Project"**
   - Pilih repository `shorekeeper-landing`
   - Klik **"Import"**

3. **Configure Project**
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./`
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
   - Klik **"Deploy"**

4. **Tunggu Build** (1-2 menit)
   - Vercel akan otomatis build dan deploy
   - Setelah selesai, kamu akan dapat URL seperti: `https://shorekeeper-landing.vercel.app`

5. **Done!** 🎉
   - Website kamu sudah live!
   - Setiap kali push ke GitHub, Vercel otomatis deploy update

---

## 🎨 Alternatif: Deploy ke Netlify

### Langkah Deploy:

1. **Buka Netlify**
   - Pergi ke https://app.netlify.com/signup
   - Login dengan GitHub

2. **Import Project**
   - Klik **"Add new site"** → **"Import an existing project"**
   - Pilih **GitHub** → Pilih repository

3. **Configure**
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - Klik **"Deploy site"**

4. **Done!** Website live di `xxx.netlify.app`

---

## 📝 Custom Domain (Opsional)

### Vercel:
1. Pergi ke **Settings** → **Domains**
2. Tambahkan domain kamu
3. Update DNS settings di domain provider

### Netlify:
1. Pergi ke **Domain management**
2. Tambahkan custom domain
3. Update DNS settings

---

## 🔄 Update Website

Setelah deploy, update website sangat mudah:

```bash
# Edit code kamu
# Lalu:

git add .
git commit -m UpdateWebsite
git push
```

Vercel/Netlify akan otomatis detect perubahan dan deploy update dalam 1-2 menit!

---

## 🐛 Troubleshooting

### Build Error di Vercel/Netlify?

**1. Image Optimization Error**
- Next.js Image component butuh config khusus untuk static export
- Solusi sudah included di `next.config.mjs`

**2. Environment Variables**
- Tidak butuh env vars untuk project ini

**3. Large Images**
- Kalau images terlalu besar dan deploy lambat, compress dulu di https://tinypng.com

---

## 📊 Performance Tips

1. **Compress Images**
   - Images di `/public/images/shorekeeper/` bisa di-compress lebih lanjut
   - Gunakan tools seperti TinyPNG atau Squoosh

2. **Enable Analytics (Optional)**
   - Vercel Analytics: https://vercel.com/docs/analytics
   - Google Analytics: Tambahkan script di `app/layout.tsx`

---

## 🎯 Next Steps

- [ ] Push code ke GitHub
- [ ] Deploy ke Vercel
- [ ] Share URL dengan teman!
- [ ] (Optional) Setup custom domain
- [ ] (Optional) Add more content/images

---

**Need Help?** 
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Netlify Docs: https://docs.netlify.com

🌊 **Happy Deploying!** 🌊
