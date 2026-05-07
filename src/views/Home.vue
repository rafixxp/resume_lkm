<template>
<section class="hero-section px-4 md:px-8 lg:px-16 pt-50 pb-14 text-center">
  <div class="max-w-4xl mx-auto">
    <span class="fade-up inline-block text-xs font-semibold tracking-widest text-blue-600 uppercase border border-blue-200 bg-blue-50 px-4 py-1 rounded-full mb-5">Welcome</span>
    <h1 class="fade-up delay-1 text-3xl sm:text-4xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
      Hai, Kami dari kelompok 13
    </h1>
    <p class="fade-up delay-2 text-slate-500 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
      Full Stack Developer & UI/UX Enthusiast. Creating beautiful, functional web experiences with modern technologies.
    </p>
 
    <div class="fade-up delay-3 flex flex-col sm:flex-row items-center justify-center gap-4 animate-bounce-infinite">
      <button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-colors shadow-sm shadow-blue-200">
        View Our Work
      </button>
    </div>
  </div>
</section>

<footer class="bg-white border-t mt-60 border-slate-100 px-4 md:px-8 lg:px-16 py-8">
  <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
    <div class="flex items-center gap-2">
      <svg width="28" height="18" viewBox="0 0 32 20" fill="none"><circle cx="7" cy="10" r="7" fill="#2563EB"/><circle cx="16" cy="10" r="7" fill="#60A5FA" fill-opacity=".7"/><circle cx="25" cy="10" r="7" fill="#93C5FD" fill-opacity=".5"/></svg>
      <span class="logo-text font-bold text-slate-800">Portfolio</span>
    </div>
    <p class="text-xs text-slate-400">© 2024 Your Name. All rights reserved.</p>
    <div class="flex gap-4 text-xs text-slate-500">
      <a href="#" class="hover:text-blue-600 transition-colors">Privacy</a>
      <a href="#" class="hover:text-blue-600 transition-colors">Terms</a>
      <a href="#" class="hover:text-blue-600 transition-colors">Contact</a>
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