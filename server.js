const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Express Configuration
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// Temporary Data
const blogPosts = [];
const popularPosts = [];
const recentPosts = [];
const categories = [];
const tags = [];

const siteData = {
  author: {
    name: 'Deva Harsha Veerla',
    email: 'devaharshaveerla@gmail.com',
    location: 'Tadepalligudem, Andhra Pradesh',
    phone: '+91 XXXXX XXXXX'
  }
};

const sharedData = {
  ...siteData,
  blogPosts,
  popularPosts,
  recentPosts,
  categories,
  tags
};

// Routes
app.get('/', (req, res) => {
  res.render('index', {
    ...sharedData,
    title: 'Home',
    currentPage: 'home'
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

module.exports = app;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`🚀 Writer's site running on port ${PORT}`);
  });
}