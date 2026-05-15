<script setup>
import { computed, defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const modules = import.meta.glob('../../materi/*.vue')

const materiComponent = computed(() => {
  const path = `../../materi/${route.params.slug}.vue`
  const importer = modules[path]

  if (!importer) {
    return null
  }

  return defineAsyncComponent(importer)
})
</script>

<template>
  <div class="mt-20">
    <component v-if="materiComponent" :is="materiComponent" />
    
    <div v-else class="min-h-screen flex items-center justify-center">
      <div class="text-center px-4">
        <div class="mb-8">
          <div class="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-12 h-12 text-red-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.172 16.172a4 4 0 015.656 0l6.828-6.828a4 4 0 00-5.656 0l-6.828 6.828a4 4 0 001.657 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4m0 4h.01M12 21v-4.011"/>
            </svg>
          </div>
        </div>
        
        <h1 class="text-4xl font-bold text-slate-900 mb-4">404 - Materi Tidak Ditemukan</h1>
        <p class="text-lg text-slate-600 mb-6 max-w-md mx-auto">
          Maaf, materi yang Anda cari tidak tersedia. Silakan periksa kembali URL atau kembali ke halaman utama.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link 
            to="/" 
            class="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-colors"
          >
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7-7-7m-7 7h18"/>
            </svg>
            Kembali ke Beranda
          </router-link>
          
          <router-link 
            to="/blog" 
            class="inline-flex items-center px-6 py-3 border border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 font-semibold rounded-full transition-colors"
          >
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 20H5a2 2 0 01-2-2v-4a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2z"/>
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 7h18M3 12h18"/>
            </svg>
            Lihat Semua Materi
          </router-link>
        </div>
        
        <div class="mt-12 text-sm text-slate-500">
          <p>Kode Error: 404 | Halaman Tidak Ditemukan</p>
        </div>
      </div>
    </div>
  </div>
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
    height: 200px;
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
    padding: 16px;
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

  /* ── Prose styling ── */
  .prose {
    color: var(--dark);
    max-width: none;
  }
  .prose h2, .prose h3 {
    font-weight: 700;
    line-height: 1.25;
  }
  .prose p {
    margin-bottom: 1.25rem;
    line-height: 1.75;
  }
  .prose ul {
    margin-bottom: 1.25rem;
  }
  .prose li {
    margin-bottom: 0.5rem;
  }
  .prose a {
    color: var(--blue);
    text-decoration: none;
    font-weight: 500;
  }
  .prose a:hover {
    text-decoration: underline;
  }
</style>