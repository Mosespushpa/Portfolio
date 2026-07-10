# Developer Portfolio

A modern, animated, and fully responsive developer portfolio built with vanilla HTML, CSS, and JavaScript.

## 🌟 Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Dark/Light Mode** - Toggle between dark and light themes with persistent storage
- **Smooth Animations** - Beautiful transitions and animations throughout the site
- **Mobile Menu** - Hamburger menu for mobile devices
- **Project Filtering** - Filter projects by category
- **Skill Progression** - Animated skill bars
- **Contact Form** - Functional contact form with validation
- **Smooth Scrolling** - Smooth scroll navigation throughout the page
- **SEO Optimized** - Proper meta tags and semantic HTML
- **GitHub Pages Ready** - Easy deployment to GitHub Pages (free hosting)

## 📁 Project Structure

```
Portfolio/
├── index.html       # Main HTML file
├── styles.css       # Stylesheet with animations
├── script.js        # JavaScript functionality
├── .gitignore       # Git ignore file
├── README.md        # Documentation
└── images/          # Project screenshots and images
```

## 🚀 Getting Started

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Open `index.html` in your browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js (with http-server)
npx http-server
```

3. Visit `http://localhost:8000` in your browser

### Customization

Edit the following files to customize your portfolio:

- **index.html** - Update your name, bio, projects, and contact information
- **styles.css** - Modify colors, fonts, and spacing
- **script.js** - Add additional functionality as needed
- **images/** - Replace with your own project screenshots

### Updating Content

1. **Personal Information** - Update in hero section and footer
2. **Projects** - Edit project cards in the projects section
3. **Skills** - Modify skill categories and proficiency levels
4. **Education** - Update timeline items in education section
5. **Social Links** - Update URLs in header and footer

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px

## 🎨 Color Scheme

- **Primary Color**: `#6c5ce7` (Purple)
- **Secondary Color**: `#a29bfe` (Light Purple)
- **Text Color**: `#2d3436` (Dark Gray)
- **Background**: `#ffffff` (White)

### Dark Mode
- **Background**: `#1a1a1a`
- **Secondary Background**: `#2d2d2d`
- **Text**: `#ecf0f1`

## 🌐 Deployment to GitHub Pages

1. Create a GitHub repository named `yourusername.github.io`

2. Clone or upload your portfolio files:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git push -u origin main
```

3. Your portfolio will be live at `https://yourusername.github.io`

### Alternative: Deploy to existing repository

If you want to deploy to an existing repo:

1. Create a `gh-pages` branch
2. Push your portfolio to the `gh-pages` branch
3. Go to repository Settings > Pages
4. Set source to `gh-pages` branch
5. Your site will be available at `https://yourusername.github.io/portfolio`

## 🛠️ Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## ✨ Features in Detail

### Dark Mode
- Toggle between dark and light themes
- Preferences are saved in local storage
- Smooth transitions between themes

### Mobile Responsive
- Hamburger menu for mobile navigation
- Touch-friendly buttons and links
- Optimized layout for all screen sizes

### Performance
- Minimal dependencies (vanilla JS)
- Smooth animations
- Lazy loading support
- Fast load times

### Accessibility
- Semantic HTML
- Keyboard navigation support
- Focus states for interactive elements
- Proper heading hierarchy

## 📝 Customization Guide

### Adding a New Project

1. Open `index.html`
2. Find the `.projects-grid` section
3. Add a new project card:

```html
<div class="project-card" data-category="web">
    <div class="project-image">
        <img src="images/your-image.png" alt="Project Name">
        <div class="project-overlay">
            <a href="#" class="project-link">View Project</a>
        </div>
    </div>
    <div class="project-info">
        <h3>Project Name</h3>
        <p>Project description</p>
        <div class="project-tags">
            <span>Tag1</span>
            <span>Tag2</span>
        </div>
    </div>
</div>
```

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #6c5ce7;
    --secondary-color: #a29bfe;
    --text-color: #2d3436;
    --bg-color: #ffffff;
    /* ... other colors ... */
}
```

## 📧 Contact Form

The contact form is set up for frontend validation. To make it functional with email sending, you can integrate a backend service like:
- Formspree
- EmailJS
- SendGrid
- Your own backend

Example with Formspree:
1. Sign up at https://formspree.io
2. Create a new form and get your form ID
3. Update the form action in `index.html`

## 🎓 Learning Resources

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [JavaScript.info](https://javascript.info/)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📞 Support

If you have questions or need help, feel free to:
- Open an issue on GitHub
- Check the documentation
- Review the code comments

---

**Made with ❤️ by a developer**
