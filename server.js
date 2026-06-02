const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// ─────────────────────────────────────
// Express Configuration
// ─────────────────────────────────────
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// ─────────────────────────────────────
// Site Information
// ─────────────────────────────────────
const siteData = {
  author: {
    name: 'Deva Harsha Veerla',
    email: 'devaharshaveerla@gmail.com',
    location: 'Tadepalligudem, Andhra Pradesh',
    phone: '+91 XXXXX XXXXX'
  }
};

// KEEP ALL YOUR EXISTING DATA ARRAYS HERE
// blogPosts
// popularPosts
// recentPosts
// categories
// tags

// Shared Data
const sharedData = {
  ...siteData,
  blogPosts,
  popularPosts,
  recentPosts,
  categories,
  tags
};

// ─────────────────────────────────────
// Routes
// ─────────────────────────────────────

app.get('/', (req, res) => {
  res.render('index', {
    ...sharedData,
    title: 'Home',
    currentPage: 'home',
    featuredPost: blogPosts[2],
    highlightPost: blogPosts[0],
    listPosts: blogPosts.slice(0, 3)
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    ...sharedData,
    title: 'About',
    currentPage: 'about'
  });
});

app.get('/works', (req, res) => {
  res.render('works', {
    ...sharedData,
    title: 'Works',
    currentPage: 'works'
  });
});

app.get('/blog', (req, res) => {
  res.render('blog', {
    ...sharedData,
    title: 'Blog',
    currentPage: 'blog'
  });
});

app.get('/contact', (req, res) => {
  res.render('contact', {
    ...sharedData,
    title: 'Contact',
    currentPage: 'contact'
  });
});

app.get('/tested-hearts', (req, res) => {
  res.render('tested-hearts', {
    title: 'Tested Hearts',
    currentPage: 'works'
  });
});

app.get('/happy-fathers-day', (req, res) => {
  res.render('happy-fathers-day', {
    title: 'Happy Fathers Day',
    currentPage: 'works'
  });
});

// ─────────────────────────────────────
// Export App
// ─────────────────────────────────────
module.exports = app;

// Run locally only
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`🚀 Writer's site running at http://localhost:${PORT}`);
  });
}