<template>
  <div class="bg-white text-black min-h-screen font-sans antialiased">
    <!-- Hero Section -->
    <section class="max-w-5xl mx-auto px-6 py-24 md:py-32 text-center my-40">
      <h1 class="text-5xl md:text-7xl font-bold tracking-tight mb-8">
        Kepemimpinan <br class="hidden md:block"/> Dimulai Dari Sini.
      </h1>
      <p class="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
        Platform sederhana untuk mengeksplorasi nilai-nilai kepemimpinan, integritas, dan pengembangan diri bagi mahasiswa.
      </p>
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <router-link to="/materi" class="bg-black text-white px-8 py-4 rounded-md font-medium hover:bg-gray-800 transition-all">
          Mulai Belajar Materi ->
        </router-link>
        <a href="#team" class="border border-black px-8 py-4 rounded-md font-medium hover:bg-black hover:text-white transition-all">
          Lihat Tim Kami
        </a>
      </div>
    </section>

    <!-- Team Section -->
    <section id="team" class="py-24">
      <div class="max-w-6xl mx-auto px-6">
        <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 class="text-3xl font-bold mb-2">Tim Kami</h2>
            <p class="text-gray-500">Ada beberapa orang di balik proyek website ini.</p>
          </div>
          <div class="h-[2px] w-20 bg-black hidden md:block"></div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="member in team" :key="member.name" class="bg-white p-8 border border-gray-100 rounded-lg hover:shadow-xl transition-shadow text-center">
            <div class="w-30 h-30 overflow-hidden text-white rounded-full flex items-center justify-center font-bold mb-6 mx-auto">
              <img :src="member.image" alt="member image" class="object-cover">
            </div>
            <h3 class="font-bold text-md mb-1">{{ member.name }}</h3>
            <p class="text-sm text-gray-500">{{ member.role }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Stack / Tools -->
    <section class="py-24 max-w-5xl mx-auto px-6">
      <h2 class="text-center text-sm font-bold tracking-[0.3em] uppercase mb-16 text-gray-400">Teknologi yang Digunakan</h2>
      <div class="grid grid-cols-3 md:grid-cols-6 gap-12 opacity-50 grayscale">
        <div v-for="tool in techStack" :key="tool.name" class="flex flex-col items-center gap-3 hover:opacity-100 transition-opacity">
          <div v-html="tool.svg"></div>
          <span class="font-bold text-xs tracking-widest uppercase">{{ tool.name }}</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const team = [
  { name: 'Rafi Ahfa Fauzan', role: '257006111017', image: './ahpa.webp' },
  { name: 'Muhammad Najmi Ash Shidiq', role: '257006111', image: './najmi.webp' },
  { name: 'Muhammad Dimas Nugraha', role: '2570061110', image: './dimas.webp' },
  { name: 'Fawwaz Faadhilah Braliana', role: '257006111', image: './dimas.webp' },
  { name: 'Muhammad Ilham Rizky', role: '257006111', image: './dimas.webp' },
  { name: 'Ahmad Faiz Muzaki', role: '257006111', image: './dimas.webp' },
  { name: 'Ihsan Nugraha', role: '257006111', image: './dimas.webp' },
  { name: 'Dita Dwi Meilani', role: '257006111', image: './dimas.webp' },
  { name: 'Sahla Jahidatul Mila Al Azizah', role: '257006111', image: './dimas.webp' },
  { name: 'Yudha Arief Permana', role: '257006111', image: './dimas.webp' },
  { name: 'Marcelino Herlambang', role: '257006111', image: './dimas.webp' },
]

const techStack = [
  {
    name: 'Github',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`
  },
  {
    name: 'Vercel',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 512 512" fill="currentColor"><path d="M256 48l240 416H16z"/></svg>`
  },
  {
    name: 'Git',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="50" height="50" viewBox="0 0 16 16"><g><path d="M15,5.6,10.4,1A3.4,3.4,0,0,0,5.78.86L7.66,2.74a1.25,1.25,0,0,1,1.67,1.2V4a1.23,1.23,0,0,1-.08.38l2.45,2.4a1.17,1.17,0,0,1,.37-.08A1.3,1.3,0,1,1,10.77,8h0a1.17,1.17,0,0,1,.08-.37L8.6,5.38v5.23a1.28,1.28,0,0,1,.73,1.15,1.3,1.3,0,0,1-2.6,0,1.27,1.27,0,0,1,.67-1.11V5.07A1.27,1.27,0,0,1,6.73,4a1.17,1.17,0,0,1,.08-.37l-1.9-1.9L1,5.6a3.38,3.38,0,0,0,0,4.79H1L5.6,15a3.38,3.38,0,0,0,4.79,0h0L15,10.4a3.38,3.38,0,0,0,0-4.79Z"/></g></svg>`
  },
  {
    name: 'VsCode',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none"><path d="M0.228341 8.36915C0.228341 8.36915 -0.356212 7.94324 0.345251 7.37453L1.97956 5.89736C1.97956 5.89736 2.44721 5.40004 2.94164 5.83334L18.0231 17.375V22.9094C18.0231 22.9094 18.0158 23.7785 16.9124 23.6825L0.228341 8.36915Z" fill="#000000"/><path d="M4.11555 11.9367L0.228273 15.5089C0.228273 15.5089 -0.171172 15.8093 0.228273 16.346L2.03308 18.0053C2.03308 18.0053 2.46175 18.4706 3.09502 17.9413L7.21611 14.7827L4.11555 11.9367Z" fill="#000000"/><path d="M10.94 11.9661L18.0691 6.46362L18.0228 0.95865C18.0228 0.95865 17.7183 -0.242793 16.7027 0.382548L7.21589 9.11025L10.94 11.9661Z" fill="#000000"/><path d="M16.9121 23.69C17.3261 24.1183 17.8279 23.978 17.8279 23.978L23.3838 21.2108C24.0951 20.7208 23.9952 20.1127 23.9952 20.1127V3.58803C23.9952 2.86175 23.2596 2.61063 23.2596 2.61063L18.4441 0.264377C17.3919 -0.392968 16.7027 0.382548 16.7027 0.382548C16.7027 0.382548 17.5892 -0.262484 18.0228 0.95865L18.0228 22.8086C18.0228 22.9588 17.9911 23.1065 17.9278 23.2394C17.8011 23.4979 17.5259 23.7392 16.8658 23.6383L16.9121 23.69Z" fill="#000000"/></svg>`
  },
  {
    name: 'VueJS',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="50" height="50" viewBox="0 0 14 14" role="img" focusable="false" aria-hidden="true"><path d="m 10.5985,1.80525 0.0015,-0.003 -2.2125,0 -1.3875,2.399 0,0.001 -1.386,-2.4 -2.2125,0 0,0.0025 -2.4015,0 6,10.393 6,-10.3925"/></svg>`
  },
  {
    name: 'Tailwind',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="50" height="50" viewBox="0 0 24 24" xml:space="preserve"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"/></svg>`
  }
]
</script>

<style scoped>
/* Gunakan sistem font sans-serif bawaan browser yang bersih */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

div {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

html {
  scroll-behavior: smooth;
}

/* Transisi halus untuk link */
a, button {
  transition: all 0.2s ease-in-out;
}
</style>