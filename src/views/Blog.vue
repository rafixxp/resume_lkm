<template>
  <div class="bg-white text-black min-h-screen font-sans selection:bg-black selection:text-white">
    <!-- Hero Section: Sederhana & Langsung -->
    <section class="max-w-5xl mx-auto px-6 pt-24 pb-16 text-center my-20">
      <div class="inline-block border border-black px-4 py-1 rounded-full mb-6">
        <span class="text-[10px] font-bold tracking-widest uppercase">Modul Pembelajaran</span>
      </div>
      <h1 class="text-4xl md:text-6xl font-bold tracking-tight mb-6">
        Materi Kepemimpinan
      </h1>
      <p class="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
        Daftar referensi lengkap untuk membantu Anda memahami konsep organisasi, sosial, dan pengembangan diri.
      </p>
    </section>

    <!-- Grid Materi: Kartu Minimalis -->
    <main class="max-w-6xl mx-auto px-6 pb-32">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <div 
          v-for="item in materiList" 
          :key="item.slug"
          @click="pageOn(item.slug)"
          class="group bg-white border border-gray-200 p-8 rounded-xl hover:border-black hover:shadow-sm transition-all cursor-pointer flex flex-col justify-between"
        >
          <div>
            <div class="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3 tracking-tight">{{ item.title }}</h3>
            <p class="text-gray-500 text-sm leading-relaxed mb-6">
              {{ item.desc }}
            </p>
          </div>
          
          <div class="flex items-center gap-2 text-xs font-bold tracking-wider uppercase group-hover:gap-4 transition-all">
            Pelajari Materi
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </div>
        </div>

      </div>
    </main>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const pageOn = (slug) => {
  router.push(`/materi/${slug}`);
}

const materiList = [
  { title: 'Analisa Organisasi', slug: 'analisa-organisasi', desc: 'Memahami struktur dan perilaku organisasi untuk mencapai tujuan bersama.' },
  { title: 'Analisis Masyarakat', slug: 'analisis-pengembangan-masyarakat', desc: 'Strategi pemberdayaan dan pengembangan potensi masyarakat lokal.' },
  { title: 'Dinamika Sosial', slug: 'dinamika-sosial', desc: 'Mempelajari interaksi dan perubahan pola sosial dalam kepemimpinan.' },
  { title: 'Kekeluargaan', slug: 'kekeluargaan', desc: 'Pentingnya rasa memiliki dan hubungan harmonis dalam sebuah tim.' },
  { title: 'Otoritas Informasi', slug: 'otoritas-informasi', desc: 'Manajemen sumber data dan validasi informasi untuk pengambilan keputusan.' },
  { title: 'Pengembangan Organisasi', slug: 'pengembangan-pembangunan-organisasi', desc: 'Langkah taktis membangun kapasitas dan keberlanjutan organisasi.' },
  { title: 'Retorika', slug: 'retorika', desc: 'Seni berkomunikasi secara efektif untuk meyakinkan dan memotivasi.' },
  { title: 'Manajemen Aksi', slug: 'manajemen-aksi', desc: 'Teknis pengorganisasian gerakan dan penyampaian pendapat di publik.' },
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

div {
  font-family: 'Inter', sans-serif;
}

/* Haluskan transisi antar kartu */
.transition-all {
  transition-duration: 300ms;
}
</style>