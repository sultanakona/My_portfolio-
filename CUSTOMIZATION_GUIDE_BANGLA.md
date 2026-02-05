# ✏️ কাস্টমাইজেশন গাইড - Sultana Parvin Kona Portfolio

## 🎯 আপনি যা যা পরিবর্তন করবেন

---

## 1️⃣ ইমেইল ঠিকানা (IMPORTANT!)

**File:** `sultana-portfolio.html`  
**Location:** Line 313

### বর্তমান:
```html
<a href="mailto:sultanaparvin@example.com" class="email-link">
    <i class="fas fa-envelope"></i>
    sultanaparvin@example.com
</a>
```

### পরিবর্তন করুন:
```html
<a href="mailto:আপনার_আসল_ইমেইল@gmail.com" class="email-link">
    <i class="fas fa-envelope"></i>
    আপনার_আসল_ইমেইল@gmail.com
</a>
```

**উদাহরণ:**
```html
<a href="mailto:kona.sultana@gmail.com" class="email-link">
    <i class="fas fa-envelope"></i>
    kona.sultana@gmail.com
</a>
```

---

## 2️⃣ সোশ্যাল মিডিয়া লিংক

**File:** `sultana-portfolio.html`  
**Location:** Lines 317-321

### বর্তমান:
```html
<a href="https://linkedin.com/in/yourprofile" target="_blank">
<a href="https://github.com/yourprofile" target="_blank">
<a href="https://facebook.com/yourprofile" target="_blank">
<a href="https://instagram.com/yourprofile" target="_blank">
<a href="https://twitter.com/yourprofile" target="_blank">
```

### পরিবর্তন করুন - আপনার প্রোফাইল লিংক দিন:

```html
<a href="https://linkedin.com/in/sultana-parvin-kona" target="_blank">
<a href="https://github.com/sultanakona" target="_blank">
<a href="https://facebook.com/your.profile.name" target="_blank">
<a href="https://instagram.com/your_username" target="_blank">
<a href="https://twitter.com/your_handle" target="_blank">
```

**যদি কোন account না থাকে তাহলে সেই লাইন মুছে দিন!**

---

## 3️⃣ প্রোফাইল ছবি

**File:** `sultana-portfolio.html`  
**Location:** Line 43

### বর্তমান:
```html
<img src="images/profile.jpeg" alt="Sultana Parvin Kona">
```

### নিশ্চিত করুন:
1. আপনার ফোল্ডারে **`images`** নামে folder আছে
2. সেখানে আপনার ছবি **`profile.jpeg`** নামে save করা আছে

**অথবা ছবির নাম যদি আলাদা হয়:**
```html
<img src="images/আপনার_ছবির_নাম.jpg" alt="Sultana Parvin Kona">
```

---

## 4️⃣ প্রজেক্ট যোগ করুন

**File:** `sultana-portfolio.html`  
**Location:** Lines 158-247

### আপনার প্রজেক্ট যোগ করতে:

1. প্রজেক্ট ছবি **`images`** ফোল্ডারে রাখুন
2. নিচের template copy করুন এবং আপনার তথ্য দিন:

```html
<div class="project-card" data-category="backend">
    <div class="project-image">
        <img src="images/your-project-image.jpg" alt="Project Name">
    </div>
    <div class="project-info">
        <h3>আপনার প্রজেক্টের নাম</h3>
        <div class="project-tags">
            <span>Python</span>
            <span>Django</span>
            <span>PostgreSQL</span>
        </div>
        <a href="https://github.com/yourrepo" class="project-link">
            <i class="fas fa-arrow-right"></i>
        </a>
    </div>
</div>
```

### Category অপশন:
- `data-category="backend"` - Backend projects
- `data-category="api"` - API projects
- `data-category="ml"` - Machine Learning projects
- `data-category="fullstack"` - Full stack projects

---

## 5️⃣ Resume/CV লিংক

**File:** `sultana-portfolio.html`  
**Location:** Line 85

### বর্তমান:
```html
<a href="assets/Sultana_Parvin_kona -1.pdf" class="download-btn" download>
    Download Resume
</a>
```

### নিশ্চিত করুন:
1. আপনার ফোল্ডারে **`assets`** নামে folder আছে
2. সেখানে আপনার CV **`Sultana_Parvin_kona -1.pdf`** নামে আছে

**অথবা নাম আলাদা হলে:**
```html
<a href="assets/আপনার_CV_ফাইল_নাম.pdf" class="download-btn" download>
```

---

## 6️⃣ Contact Form Email Setup

**File:** `script.js`  
**Location:** Lines 11-15

### EmailJS Configure করতে:

1. **EMAIL_SETUP.md** ফাইল খুলুন
2. Step-by-step follow করুন (10 minutes)
3. এই 3 টা value পরিবর্তন করুন:

```javascript
const EMAILJS_CONFIG = {
    publicKey: 'YOUR_PUBLIC_KEY',      // ← EmailJS থেকে পাবেন
    serviceId: 'YOUR_SERVICE_ID',      // ← EmailJS থেকে পাবেন
    templateId: 'YOUR_TEMPLATE_ID'     // ← EmailJS থেকে পাবেন
};
```

**যদি এখন setup করতে না চান:**
- Form তবুও কাজ করবে
- শুধু console এ message দেখাবে
- পরে setup করতে পারবেন

---

## 7️⃣ Services Section Update (Optional)

**File:** `sultana-portfolio.html`  
**Location:** Lines 94-149

আমি ইতিমধ্যে Backend Developer এর জন্য services update করে দিয়েছি:
- ✅ Backend Development
- ✅ API Development & Integration
- ✅ Database Design & Optimization
- ✅ AI/ML Integration
- ✅ ML-Powered Systems

যদি নিজের মত করে লিখতে চান, তাহলে এই section edit করুন।

---

## 8️⃣ Project Filter Tags

**File:** `sultana-portfolio.html`  
**Location:** Lines 154-159

আমি Backend এর জন্য filters update করে দিয়েছি:

```html
<button class="filter-btn active" data-filter="all">All</button>
<button class="filter-btn" data-filter="backend">Backend</button>
<button class="filter-btn" data-filter="api">API</button>
<button class="filter-btn" data-filter="ml">Machine Learning</button>
<button class="filter-btn" data-filter="fullstack">Full Stack</button>
```

---

## 📁 Folder Structure

আপনার ফোল্ডারে এভাবে সাজান:

```
portfolio-folder/
├── sultana-portfolio.html     ← Main file
├── styles.css                 ← Styling
├── script.js                  ← JavaScript
├── images/
│   ├── profile.jpeg          ← Your photo
│   ├── project1.jpg          ← Project images
│   ├── project2.jpg
│   └── ...
└── assets/
    └── Sultana_Parvin_kona -1.pdf  ← Your CV
```

---

## ✅ Checklist - এগুলো নিশ্চিত করুন:

- [ ] Email address পরিবর্তন করেছেন (Line 313)
- [ ] Social media links যোগ করেছেন (Lines 317-321)
- [ ] Profile image সঠিক path এ আছে
- [ ] Resume/CV file সঠিক path এ আছে
- [ ] Projects এ আপনার প্রজেক্ট যোগ করেছেন
- [ ] EmailJS setup করেছেন (optional, পরেও করতে পারবেন)

---

## 🚀 Run করার উপায়

### দ্রুত Test:
1. `sultana-portfolio.html` double click করুন
2. Browser এ open হবে
3. সব কিছু check করুন

### VS Code দিয়ে:
1. VS Code install করুন
2. Folder open করুন
3. Live Server extension install করুন
4. Right click → "Open with Live Server"

---

## 🎨 Colors পরিবর্তন (Optional)

**File:** `styles.css`  
**Location:** Lines 7-17

```css
:root {
    --bg-primary: #0a0a0a;        /* Main background */
    --text-primary: #ffffff;      /* Text color */
    --accent-cyan: #00d9ff;       /* Primary accent color */
    /* এগুলো পরিবর্তন করতে পারেন */
}
```

---

## 💡 Tips

1. **ছবি optimize করুন** - TinyPNG.com use করুন
2. **সব লিংক test করুন** - কাজ করছে কিনা দেখুন
3. **Mobile এ test করুন** - Phone এ কেমন দেখাচ্ছে
4. **Spelling check করুন** - ভুল আছে কিনা

---

## 🆘 সমস্যা হলে

1. Browser console খুলুন (F12 press করুন)
2. কোন error দেখাচ্ছে কিনা চেক করুন
3. File paths সঠিক আছে কিনা verify করুন

---

## 🎉 All Done!

এই পরিবর্তনগুলো করলে আপনার portfolio সম্পূর্ণ ready!

Need more help? আমাকে জিজ্ঞাসা করুন! 😊
