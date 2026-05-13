<template>
    <section class="hero-section px-4 md:px-8 lg:px-16 pt-16 pb-8">
    <div class="max-w-4xl mx-auto">
    
    <!-- Untuk mengganti gambarnya, silakan ganti isi dari atribut src nya dengan link gambar dari website -->
    <div class="mb-8">
        <img 
        src="https://cdn.slidesharecdn.com/ss_thumbnails/abu-abuputihsederhanaseminarproposalppt202512270824480000-260207093741-f62bc6f2-thumbnail.jpg?width=640&height=640&fit=bounds" 
        alt="Wanderlust Unleashed: Top Hidden Gems You Must Visit This Year"
        class="w-full h-64 md:h-96 object-cover rounded-2xl"
        />
    </div>

    <div class="text-center">
        <!-- Untuk mengganti judul, cukup ganti isi "Manajemen Aksi" dengan judul yang anda akan tulis-->
        <h1 class="fade-up delay-1 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
            Dinamika Sosial dan Politik
        </h1>
        
        <div class="fade-up delay-2 flex flex-col sm:flex-row items-center justify-center gap-4 text-slate-500 ">
            <div class="flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>

                <!-- Tuliskan nama pematerinya disini -->
                <span class="text-sm">
                    A Arul
                </span>

            </div>
            <div class="flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                <!-- Tuliskan tanggal pemateriannya disini -->
                <span class="text-sm">
                    Sabtu, 25 April 2026
                </span>
            </div>
        </div>
    </div>
    </div>
    </section>

    <!-- Article Content -->
    <main class="px-4 md:px-8 lg:px-16 pb-20">
        <div class="max-w-4xl mx-auto">
            <article class="prose prose-lg max-w-none">
                <section class="mb-12">

                    <!-- isikan materinya disini, untuk membuat paragraf anda perlu menulis tag <p></p> untuk membuat paragraf baru. -->
                    <h2 class= "text-2xl font-bold text-slate-800 mb-3">
                        A. Sejarah Ideologi Politik
                    </h2>
                    <p class="text-slate-600 leading-relaxed mb-4">
                        Ideologi muncul karena paham ideologi Kiri dan Kanan yang berakar dari peristiwa Reformasi Prancis.
                        <br>Ideologi kiri mencakup komunis dan sosialis mengedepankan kesetaraan sosial, keadilan ekonomi, dan solidaritas untuk mengatasi ketimpangan.
                        <br>Ideologi kanan mencakup kapitalisme dan liberalisme menekankan nasionalisme dan kebebasan individu.
                    </p>
                    <h2 class= "text-2xl font-bold text-slate-800 mb-3">
                        B.Pengembangan Sikap Moderat dan Kritis
                    </h2>
                    <p>Moderat adalah pandangan atau perilaku untuk mengambil jalan tengah guna menghindari ekstremitas (kiri maupun kanan), serta mengutamakan keseimbangan, keadilan, dan toleransi.
                    <br>Kritis adalah sikap yang mengutamakan pertimbangan dan pemikiran yang matang sebelum mengambil suatu tindakan.</p>

                    <!-- untuk membuat order list 1,2,3 dst, salin tag ini lalu ganti isinya sesuai dengan materi -->
                    <ol type="1" class="list-decimal list-inside text-slate-600 space-y-2 mb-6">
                        <li>Sikap yang benar : </li>
                        <li>Sikap yang salah : </li>
                    </ol>
                </section>

            </article>
        </div>
    </main>
</template>
