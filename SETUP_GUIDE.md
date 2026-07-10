# Portfolio Setup & Customization Guide

## ✅ What's Included

Your portfolio includes:
- ✓ **index.html** - Complete responsive HTML structure
- ✓ **styles.css** - Modern animations and dark/light mode
- ✓ **script.js** - All functionality (menu, filters, forms, theme toggle)
- ✓ **11 Screenshot Images** - Ready to showcase your projects
- ✓ **README.md** - Full documentation
- ✓ **.gitignore** - For clean Git repository

## 🎯 Quick Start (3 Steps)

### Step 1: Open in Browser
Just double-click `index.html` and it will open in your default browser!

### Step 2: Customize Content
Edit `index.html` and update:
- Line 68: Your name in hero section
- Line 69: Your tagline/subtitle
- Line 113+: Update social media links
- Line 157+: Update About section text
- Line 223+: Update project details
- Line 465+: Update skill categories
- Line 547+: Update achievements
- Line 588+: Update education timeline
- Line 639+: Update contact information

### Step 3: Deploy to GitHub Pages
```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial portfolio commit"

# Create main branch
git branch -M main

# Add remote (replace username)
git remote add origin https://github.com/your-username/portfolio.git

# Push to GitHub
git push -u origin main
```

Then go to repository Settings > Pages and set source to `main` branch.

---

## 🎨 Personalization

### Change Colors
Open `styles.css` and find:
```css
:root {
    --primary-color: #6c5ce7;      /* Change this to your color */
    --secondary-color: #a29bfe;    /* Light version of primary */
    --text-color: #2d3436;         /* Text color */
    --bg-color: #ffffff;           /* Background color */
}
```

### Add More Projects
Copy this template and paste before `</div>` in projects-grid:
```html
<div class="project-card" data-category="web">
    <div class="project-image">
        <img src="images/your-image.png" alt="Project Name">
        <div class="project-overlay">
            <a href="YOUR_PROJECT_URL" class="project-link">View Project</a>
        </div>
    </div>
    <div class="project-info">
        <h3>Your Project Title</h3>
        <p>Brief description of your project</p>
        <div class="project-tags">
            <span>Technology1</span>
            <span>Technology2</span>
        </div>
    </div>
</div>
```

### Add More Skills
Find `.skills-grid` section and add new category:
```html
<div class="skill-category">
    <h3>Your Category</h3>
    <div class="skill-items">
        <div class="skill-item">
            <span>Skill Name</span>
            <div class="skill-bar">
                <div class="skill-progress" style="width: 85%"></div>
            </div>
        </div>
    </div>
</div>
```

---

## 📱 Features Explained

### 🌙 Dark Mode
- Click the moon/sun icon in top-right corner
- Your preference is saved automatically
- Toggle works on all devices

### 📱 Mobile Menu
- Hamburger menu automatically appears on mobile
- Click to open/close
- Automatically closes when you click a link

### 🎬 Animations
- Smooth scroll navigation
- Fade-in animations as you scroll
- Hover effects on all interactive elements
- Counter animations for statistics

### 🔍 Project Filtering
- Click "All", "Web", "Mobile", "Design" to filter
- Projects animate in and out
- Try changing data-category="web" in project cards

### 💌 Contact Form
- Fill in the form and click Send
- Shows success message
- Form validation included
- Currently saves to browser console (you can integrate email service)

---

## 🚀 Advanced Customization

### Make Contact Form Send Emails
Use Formspree (free):
1. Go to https://formspree.io
2. Create an account
3. Get your form ID
4. In `index.html`, add to contact form:
   `<form class="contact-form" id="contactForm" action="https://formspree.io/f/YOUR_ID" method="POST">`

### Add Google Analytics
Add before `</head>` in index.html:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Add Custom Domain
1. Buy domain from Namecheap, GoDaddy, etc.
2. Update DNS records:
   - CNAME: www → yourusername.github.io
   - A records point to GitHub Pages IPs
3. Go to repository Settings > Pages > Custom domain

---

## 📋 Checklist Before Publishing

- [ ] Updated name and title in hero section
- [ ] Updated About Me section with your bio
- [ ] Added real project links (change href="#" to actual URLs)
- [ ] Updated all social media links
- [ ] Updated contact information (email, phone)
- [ ] Changed color scheme to match your brand
- [ ] Tested on mobile devices
- [ ] Tested dark mode
- [ ] Tested all navigation links
- [ ] Pushed to GitHub

---

## 🐛 Troubleshooting

### Images not showing?
- Make sure image files are in the `images/` folder
- Check file names match exactly (case-sensitive on Linux)
- Use relative paths like `images/filename.png`

### Styles not loading?
- Clear browser cache (Ctrl+Shift+Delete)
- Make sure styles.css is in the same folder as index.html

### Menu not working?
- Check that script.js is loaded (check console for errors)
- Press F12 to open developer console and check for errors

### Not deploying to GitHub Pages?
- Make sure repository is public
- Branch name is "main" (not "master")
- Enabled GitHub Pages in Settings

---

## 💡 Pro Tips

1. **Performance**: Portfolio loads fast because it uses vanilla JS
2. **SEO**: Update meta tags in `<head>` for better search results
3. **Accessibility**: All interactive elements have keyboard support
4. **Mobile First**: Always test on mobile first
5. **Git Commits**: Make meaningful commits as you customize

---

## 📚 Resources

- **Colors**: https://coolors.co
- **Icons**: https://fontawesome.com (already included)
- **Images**: https://unsplash.com, https://pexels.com
- **Fonts**: https://fonts.google.com
- **Deploy**: https://github.com (GitHub Pages)

---

## 🎉 You're All Set!

Your portfolio is ready to customize and deploy. Start by opening `index.html` in your browser and exploring all the features!

Questions? Check README.md or view the code comments in HTML and JS files.

Happy coding! 🚀
