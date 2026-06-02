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

// ─────────────────────────────────────
// Blog Posts
// ─────────────────────────────────────
const blogPosts = [
  {
    id: 1,
    category: 'Writing',
    title: 'Mistakes Ideas of Dreaming Pleasure Printing',
    excerpt:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
    author: 'Eleanor Graves',
    date: 'May 12, 2026',
    image:
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&q=80',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&q=80'
  },
  {
    id: 2,
    category: 'Lifestyle',
    title: 'Mistakes Ideas of Dreaming Ring Pleasure Printing',
    excerpt:
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.',
    author: 'Marcus Holt',
    date: 'May 8, 2026',
    image:
      'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&q=80',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&q=80'
  },
  {
    id: 3,
    category: 'Books',
    title: 'Mistakes Ideas of Dreaming Day Pleasure Printing',
    excerpt:
      'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam nisi ut aliquid ex ea.',
    author: 'Sophia Lane',
    date: 'Apr 29, 2026',
    image:
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&q=80'
  },
  {
    id: 4,
    category: 'Writing',
    title: 'Mistakes Ideas of Dreaming Future Pleasure',
    excerpt:
      'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
    author: 'James Wren',
    date: 'Apr 21, 2026',
    image:
      'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600&q=80',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&q=80'
  }
];

const popularPosts = [
  {
    id: 5,
    category: 'Books',
    title: 'Mistakes Ideas of Future Dreaming Pleasure Printing',
    excerpt: 'Sed ut perspiciatis unde omnis iste natus error.',
    image:
      'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&q=80'
  },
  {
    id: 6,
    category: 'Lifestyle',
    title: 'Mistakes Ideas of Dreaming Ring Pleasure Printing',
    excerpt: 'Nemo enim ipsam voluptatem quia voluptas sit.',
    image:
      'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&q=80'
  },
  {
    id: 7,
    category: 'Writing',
    title: 'Mistakes Ideas of Dreaming Story Pleasure',
    excerpt: 'Ut enim ad minima veniam quis nostrum ullam.',
    image:
      'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400&q=80'
  },
  {
    id: 8,
    category: 'Books',
    title: 'Noble Ideas of Dreaming Future Pleasure Today',
    excerpt: 'Quis autem vel eum iure reprehenderit qui in ea.',
    image:
      'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&q=80'
  }
];

const recentPosts = [
  {
    id: 9,
    title: 'Future Spring Flowers Smelling Beautiful Dreaming',
    date: 'May 20, 2026',
    image:
      'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=80&q=80'
  },
  {
    id: 10,
    title: 'It is a Long Established Fact Reader Distracted',
    date: 'May 15, 2026',
    image:
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=80&q=80'
  },
  {
    id: 11,
    title: 'Beautiful Sunrise Morning Coffee Reading Books',
    date: 'May 10, 2026',
    image:
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=80&q=80'
  }
];

const categories = [
  { name: 'Books', count: 12 },
  { name: 'Writing Tips', count: 8 },
  { name: 'Lifestyle', count: 15 },
  { name: 'Creativity', count: 6 },
  { name: 'Reviews', count: 9 }
];

const tags = [
  'Books',
  'Writing',
  'Lifestyle',
  'Novel',
  'Poetry',
  'Essay',
  'Reading',
  'Author',
  'Literary',
  'Fiction'
];

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

// Home
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

// About
app.get('/about', (req, res) => {
  res.render('about', {
    ...sharedData,
    title: 'About',
    currentPage: 'about'
  });
});

// Works
app.get('/works', (req, res) => {
  res.render('works', {
    ...sharedData,
    title: 'Works',
    currentPage: 'works'
  });
});

// Blog
app.get('/blog', (req, res) => {
  res.render('blog', {
    ...sharedData,
    title: 'Blog',
    currentPage: 'blog'
  });
});

// Contact
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
// Server
// ─────────────────────────────────────
// Modify this at the bottom of server.js
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Writer's site running at http://localhost:${PORT}`);
});