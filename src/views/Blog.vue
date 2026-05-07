<template>
<section class="hero-section px-4 md:px-8 lg:px-16 pt-16 pb-14 text-center">
  <div class="max-w-2xl mx-auto">
    <span class="fade-up inline-block text-xs font-semibold tracking-widest text-blue-600 uppercase border border-blue-200 bg-blue-50 px-4 py-1 rounded-full mb-5">Blog</span>
    <h1 class="fade-up delay-1 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
      Discover our latest news
    </h1>
    <p class="fade-up delay-2 text-slate-500 text-base sm:text-lg leading-relaxed mb-8">
      Discover the achievements that set us apart. From groundbreaking projects to industry accolades, we take pride in our accomplishments.
    </p>
 
    <div class="fade-up delay-3 flex items-center gap-3 max-w-lg mx-auto">
      <div class="relative flex-1">
        <svg class="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"/>
        </svg>
        <input type="text" placeholder="Search articles..." class="search-bar" />
      </div>
      <button class="shrink-0 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors shadow-sm shadow-blue-200">
        Find Now
      </button>
    </div>
  </div>
</section>
 
<main class="px-4 md:px-8 lg:px-16 pb-20">
  <div class="max-w-7xl mx-auto">
 
    <div class="flex flex-col lg:flex-row gap-10">
 
      <div class="min-w-0">
 
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
 
          <!-- Card 1 -->
          <div class="col-span-1">
            <div class="card-img-wrap">
              <img src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80" alt="Travel" />
              <div class="card-gradient"></div>
              <div class="card-content">
                <span class="badge">Health & Nutrition</span>
                <h3 class="text-white font-bold text-base leading-snug mb-2">Wanderlust Unleashed: Top Hidden Gems You Must Visit This Year</h3>
                <p class="text-white/75 text-xs leading-relaxed line-clamp-2">Discover unique, off-the-radar destinations around the world that offer breathtaking scenery and unforgettable experiences.</p>
              </div>
            </div>
          </div>
 
          <!-- Card 2 -->
          <div class="col-span-1">
            <div class="card-img-wrap">
              <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80" alt="Adventure" />
              <div class="card-gradient"></div>
              <div class="card-content">
                <span class="badge">Sustainability</span>
                <h3 class="text-white font-bold text-base leading-snug mb-2">Travel Bucket List: 25 Destinations for Every Adventurer</h3>
                <p class="text-white/75 text-xs leading-relaxed line-clamp-2">Explore a curated list of must-visit places for every kind of traveler, whether you love mountains, beaches, or cultural landmarks.</p>
              </div>
            </div>
          </div>
 
          <!-- Card 3 -->
          <div class="col-span-1 sm:col-span-2 lg:col-span-1">
            <div class="card-img-wrap">
              <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80" alt="Local Tips" />
              <div class="card-gradient"></div>
              <div class="card-content">
                <span class="badge">Cultural Insights</span>
                <h3 class="text-white font-bold text-base leading-snug mb-2">How to Travel Like a Local: Insider Tips for Authentic Experiences</h3>
                <p class="text-white/75 text-xs leading-relaxed line-clamp-2">Learn how to immerse yourself in the culture of each place you visit by following these insider tips.</p>
              </div>
            </div>
          </div>
        </div>
 
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div class="col-span-1">
            <div class="card-img-wrap">
              <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80" alt="Mountains" />
              <div class="card-gradient"></div>
              <div class="card-content">
                <span class="badge">Adventure</span>
                <h3 class="text-white font-bold text-base leading-snug">The Ultimate Guide to Mountain Trekking</h3>
              </div>
            </div>
          </div>
 
          <div class="col-span-1">
            <div class="card-img-wrap">
              <img src="https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=600&q=80" alt="Beach" />
              <div class="card-gradient"></div>
              <div class="card-content">
                <span class="badge">Lifestyle</span>
                <h3 class="text-white font-bold text-base leading-snug">Best Beaches in Southeast Asia to Visit</h3>
              </div>
            </div>
          </div>
 
          <div class="col-span-1 sm:col-span-2 lg:col-span-1">
            <div class="card-img-wrap">
              <img src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80" alt="Forest" />
              <div class="card-gradient"></div>
              <div class="card-content">
                <span class="badge">Eco Travel</span>
                <h3 class="text-white font-bold text-base leading-snug">Exploring the World's Most Breathtaking Forests</h3>
              </div>
            </div>
          </div>
        </div>
 
        <a href="#" class="sm:hidden mt-5 block text-center text-sm text-blue-600 font-semibold py-3 border border-blue-200 rounded-full">View all articles →</a>
      </div>
    </div>
  </div>
</main>
 
<footer class="bg-white border-t border-slate-100 px-4 md:px-8 lg:px-16 py-8">
  <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
    <div class="flex items-center gap-2">
      <svg width="28" height="18" viewBox="0 0 32 20" fill="none"><circle cx="7" cy="10" r="7" fill="#2563EB"/><circle cx="16" cy="10" r="7" fill="#60A5FA" fill-opacity=".7"/><circle cx="25" cy="10" r="7" fill="#93C5FD" fill-opacity=".5"/></svg>
      <span class="logo-text font-bold text-slate-800">enjooy</span>
    </div>
    <p class="text-xs text-slate-400">© 2024 Enjooy. All rights reserved.</p>
    <div class="flex gap-4 text-xs text-slate-500">
      <a href="#" class="hover:text-blue-600 transition-colors">Privacy</a>
      <a href="#" class="hover:text-blue-600 transition-colors">Terms</a>
      <a href="#" class="hover:text-blue-600 transition-colors">Sitemap</a>
    </div>
  </div>
</footer>
</template>

<style scoped>
  :root {
    --blue: #2563EB;
    --blue-light: #EFF6FF;
    --dark: #0f172a;
    --mid: #475569;
    --soft: #94a3b8;
    --bg: #f8fafc;
    --card-radius: 16px;
  }

  * { box-sizing: border-box; }

  body {
    font-family: 'DM Sans', sans-serif;
    background: var(--bg);
    color: var(--dark);
    margin: 0;
  }

  h1, h2, h3, h4, .logo-text {
    font-family: 'Sora', sans-serif;
  }

  /* ── Nav ── */
  nav {
    background: #fff;
    border-bottom: 1px solid #e2e8f0;
    position: sticky;
    top: 0;
    z-index: 50;
  }

  /* ── Search bar ── */
  .search-bar {
    border: 1.5px solid #e2e8f0;
    border-radius: 50px;
    padding: 10px 18px 10px 44px;
    width: 100%;
    font-size: 14px;
    outline: none;
    transition: border-color .2s;
    background: #fff;
    font-family: 'DM Sans', sans-serif;
  }
  .search-bar:focus { border-color: var(--blue); }

  /* ── Hero bg gradient ── */
  .hero-section {
    background: white;
  }

  /* ── Card image overlay ── */
  .card-img-wrap {
    position: relative;
    overflow: hidden;
    border-radius: var(--card-radius);
    height: 280px;
  }
  @media (max-width: 640px) {
    .card-img-wrap { height: 220px; }
  }

  .card-img-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform .45s ease;
  }
  .card-img-wrap:hover img { transform: scale(1.05); }

  .card-gradient {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,.72) 0%, rgba(0,0,0,.1) 55%, transparent 100%);
    border-radius: var(--card-radius);
  }

  .card-content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 20px;
  }

  /* ── Badge ── */
  .badge {
    display: inline-block;
    background: rgba(255,255,255,.18);
    backdrop-filter: blur(6px);
    border: 1px solid rgba(255,255,255,.3);
    color: #fff;
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: .05em;
    padding: 4px 10px;
    border-radius: 50px;
    margin-bottom: 8px;
  }

  /* ── Featured sidebar item ── */
  .featured-item {
    display: flex;
    gap: 14px;
    align-items: flex-start;
    padding: 14px 0;
    border-bottom: 1px solid #e2e8f0;
  }
  .featured-item:last-child { border-bottom: none; }
  .featured-item img {
    width: 72px;
    height: 56px;
    object-fit: cover;
    border-radius: 10px;
    flex-shrink: 0;
  }

  /* ── Mobile menu ── */
  #mobile-menu {
    display: none;
  }
  #mobile-menu.open {
    display: block;
  }

  /* ── Animations ── */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .fade-up { animation: fadeUp .6s ease both; }
  .delay-1 { animation-delay: .1s; }
  .delay-2 { animation-delay: .2s; }
  .delay-3 { animation-delay: .3s; }
  .delay-4 { animation-delay: .4s; }

  /* ── Scrollbar thin ── */
  ::-webkit-scrollbar { width: 6px; height: 6px; }
  ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 99px; }
</style>