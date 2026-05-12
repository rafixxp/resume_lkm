<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const pageOn = (slug) => {
  router.push(`/materi/${slug}`);
}

const search = () => {
  
}
</script>

<template>
<section class="hero-section px-4 md:px-8 lg:px-16 pt-30 pb-22 text-center">
  <div class="max-w-2xl mx-auto">
    <span class="fade-up inline-block text-xs font-semibold tracking-widest text-blue-600 uppercase border border-blue-200 bg-blue-50 px-4 py-1 rounded-full mb-5">Materi</span>
    <h1 class="fade-up delay-1 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
      Temukan Materi Kepemimpinan Disini
    </h1>
    <p class="fade-up delay-2 text-slate-500 text-base sm:text-lg leading-relaxed mb-8">
      Temukan berbagai materi kepemimpinan yang bisa kamu jadikan referensi untuk mengembangkan diri dan memimpin dengan lebih baik.
    </p>
 
    <!-- <div class="fade-up delay-3 flex items-center gap-3 max-w-lg mx-auto">
      <div class="relative flex-1">
        <svg class="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"/>
        </svg>
        <input type="text" placeholder="Cari Materi.." class="search-bar" @change="search()">
      </div>
    </div> -->
  </div>
</section>
 
<main class="px-4 md:px-8 lg:px-16 pb-20">
  <div class="max-w-7xl mx-auto">
 
    <div class="flex flex-col lg:flex-row gap-10">
 
      <div class="min-w-0">
 
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">

          <div class="col-span-1" @click="pageOn('analisa-organisasi' )">
            <div class="card-img-wrap">
              <img src="https://cdn.slidesharecdn.com/ss_thumbnails/abu-abuputihsederhanaseminarproposalppt202512270824480000-260207093741-f62bc6f2-thumbnail.jpg?width=640&height=640&fit=bounds" alt="Travel" />
              <div class="card-gradient"></div>
              <div class="card-content">
                <h3 class="text-white font-bold text-base leading-snug mb-2">Analisa Organisasi</h3>
                <p class="text-white/75 text-xs leading-relaxed line-clamp-2">Manajemen aksi adalah suatu model yang menyatakan sikap, penyuaraan pendapat, opini atau tuntutan yang dilakukan</p>
              </div>
            </div>
          </div>
          <div class="col-span-1" @click="pageOn('analisis-pengembangan-masyarakat' )">
            <div class="card-img-wrap">
              <img src="https://cdn.slidesharecdn.com/ss_thumbnails/abu-abuputihsederhanaseminarproposalppt202512270824480000-260207093741-f62bc6f2-thumbnail.jpg?width=640&height=640&fit=bounds" alt="Travel" />
              <div class="card-gradient"></div>
              <div class="card-content">
                <h3 class="text-white font-bold text-base leading-snug mb-2">Analisis Pengembangan Masyarakat</h3>
                <p class="text-white/75 text-xs leading-relaxed line-clamp-2">Manajemen aksi adalah suatu model yang menyatakan sikap, penyuaraan pendapat, opini atau tuntutan yang dilakukan</p>
              </div>
            </div>
          </div>
          <div class="col-span-1" @click="pageOn('dinamika-sosial' )">
            <div class="card-img-wrap">
              <img src="https://cdn.slidesharecdn.com/ss_thumbnails/abu-abuputihsederhanaseminarproposalppt202512270824480000-260207093741-f62bc6f2-thumbnail.jpg?width=640&height=640&fit=bounds" alt="Travel" />
              <div class="card-gradient"></div>
              <div class="card-content">
                <h3 class="text-white font-bold text-base leading-snug mb-2">Dinamika Sosial</h3>
                <p class="text-white/75 text-xs leading-relaxed line-clamp-2">Manajemen aksi adalah suatu model yang menyatakan sikap, penyuaraan pendapat, opini atau tuntutan yang dilakukan</p>
              </div>
            </div>
          </div>
          <div class="col-span-1" @click="pageOn('kekeluargaan' )">
            <div class="card-img-wrap">
              <img src="https://cdn.slidesharecdn.com/ss_thumbnails/abu-abuputihsederhanaseminarproposalppt202512270824480000-260207093741-f62bc6f2-thumbnail.jpg?width=640&height=640&fit=bounds" alt="Travel" />
              <div class="card-gradient"></div>
              <div class="card-content">
                <h3 class="text-white font-bold text-base leading-snug mb-2">Kekeluargaan</h3>
                <p class="text-white/75 text-xs leading-relaxed line-clamp-2">Manajemen aksi adalah suatu model yang menyatakan sikap, penyuaraan pendapat, opini atau tuntutan yang dilakukan</p>
              </div>
            </div>
          </div>
          <div class="col-span-1" @click="pageOn('otoritas-informasi' )">
            <div class="card-img-wrap">
              <img src="https://cdn.slidesharecdn.com/ss_thumbnails/abu-abuputihsederhanaseminarproposalppt202512270824480000-260207093741-f62bc6f2-thumbnail.jpg?width=640&height=640&fit=bounds" alt="Travel" />
              <div class="card-gradient"></div>
              <div class="card-content">
                <h3 class="text-white font-bold text-base leading-snug mb-2">Otoritas Informasi</h3>
                <p class="text-white/75 text-xs leading-relaxed line-clamp-2">Manajemen aksi adalah suatu model yang menyatakan sikap, penyuaraan pendapat, opini atau tuntutan yang dilakukan</p>
              </div>
            </div>
          </div>
          <div class="col-span-1" @click="pageOn('pengembangan-pembangunan-organisasi' )">
            <div class="card-img-wrap">
              <img src="https://gajihub.com/blog/wp-content/uploads/2022/11/pengembangan-organisasi-2.png" alt="Pengembangan dan Pembangunan Organisasi" />
              <div class="card-gradient"></div>
              <div class="card-content">
                <h3 class="text-white font-bold text-base leading-snug mb-2">Pengembangan dan Pembangunan Organisasi</h3>
                <p class="text-white/75 text-xs leading-relaxed line-clamp-2">Manajemen aksi adalah suatu model yang menyatakan sikap, penyuaraan pendapat, opini atau tuntutan yang dilakukan</p>
              </div>
            </div>
          </div>
          <div class="col-span-1" @click="pageOn('retorika' )">
            <div class="card-img-wrap">
              <img src="https://cdn.slidesharecdn.com/ss_thumbnails/abu-abuputihsederhanaseminarproposalppt202512270824480000-260207093741-f62bc6f2-thumbnail.jpg?width=640&height=640&fit=bounds" alt="Travel" />
              <div class="card-gradient"></div>
              <div class="card-content">
                <h3 class="text-white font-bold text-base leading-snug mb-2">Retorika</h3>
                <p class="text-white/75 text-xs leading-relaxed line-clamp-2">Manajemen aksi adalah suatu model yang menyatakan sikap, penyuaraan pendapat, opini atau tuntutan yang dilakukan</p>
              </div>
            </div>
          </div>
          <div class="col-span-1" @click="pageOn('manajemen-aksi' )">
            <div class="card-img-wrap">
              <img src="https://cdn.slidesharecdn.com/ss_thumbnails/abu-abuputihsederhanaseminarproposalppt202512270824480000-260207093741-f62bc6f2-thumbnail.jpg?width=640&height=640&fit=bounds" alt="Travel" />
              <div class="card-gradient"></div>
              <div class="card-content">
                <h3 class="text-white font-bold text-base leading-snug mb-2">Manajemen Aksi</h3>
                <p class="text-white/75 text-xs leading-relaxed line-clamp-2">Manajemen aksi adalah suatu model yang menyatakan sikap, penyuaraan pendapat, opini atau tuntutan yang dilakukan</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  </div>
</main>

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