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

//app.get('/blog', (req, res) => {
//  res.render('blog', {
 //   ...sharedData,
   // title: 'Blog',
    //currentPage: 'blog'
  //});
//});

//app.get('/contact', (req, res) => {
//  res.render('contact', {
//    ...sharedData,
//    title: 'Contact',
//    currentPage: 'contact'
//  });
//});

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

app.get('/fan-to-fame', (req, res) => {
  res.render('fan-to-fame', {
    title: 'Fan to Fame',
    currentPage: 'works'
  });
});
module.exports = app;

app.get('/whispers-in-the-dark', (req, res) => {
  res.render('whispers-in-the-dark', {
    title: 'Whispers in the Dark',
    currentPage: 'works'
  });
});

app.get('/chrono-vendetta', (req, res) => {
  res.render('chrono-vendetta', {
    title: 'Chrono Vendetta',
    currentPage: 'works'
  });
});

app.get('/do-not-disturb', (req, res) => {
  res.render('do-not-disturb', {
    title: 'Do Not Disturb',
    currentPage: 'works'
  });
});

app.get('/honeymoon-haunting', (req, res) => {
  res.render('honeymoon-haunting', {
    title: 'Honeymoon Haunting',
    currentPage: 'works'
  });
});

app.get('/double-trouble-in-love', (req, res) => {
  res.render('double-trouble-in-love', {
    title: 'Double Trouble in Love',
    currentPage: 'works'
  });
});

app.get('/unexpected-love', (req, res) => {
  res.render('unexpected-love', {
    title: 'Unexpected Love',
    currentPage: 'works'
  });
});

app.get('/the-phantom-twin', (req, res) => {
  res.render('the-phantom-twin', {
    title: 'The Phantom Twin',
    currentPage: 'works'
  });
});

app.get('/tested-hearts-2', (req, res) => {
  res.render('tested-hearts-2', {
    title: 'Tested Hearts 2',
    currentPage: 'works'
  });
});

app.get('/the-blade-code', (req, res) => {
  res.render('the-blade-code', {
    title: 'The Blade Code',
    currentPage: 'works'
  });
});

app.get('/preservationist', (req, res) => {
  res.render('preservationist', {
    title: 'The Preservationist',
    currentPage: 'works'
  });
});
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`🚀 Writer's site running on port ${PORT}`);
  });
}