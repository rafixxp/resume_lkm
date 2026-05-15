<template>
    <footer class="bg-white border-t border-gray-100 pt-16 pb-8">
        <div class="max-w-6xl mx-auto px-6">
            <div class="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
            <!-- Kolom Kiri: Branding -->
            <div class="max-w-xs">
                <h3 class="font-bold text-lg tracking-tighter mb-4">KELOMPOK 13</h3>
                <p class="text-gray-600 text-sm leading-relaxed">
                Membangun kesadaran kepemimpinan melalui platform digital yang inklusif dan edukatif.
                </p>
            </div>

            <!-- Kolom Tengah: Navigasi Cepat -->
            <div class="flex flex-col gap-3">
                <span class="text-xs font-bold tracking-widest uppercase mb-2">Navigasi</span>
                <router-link to="/" class="text-gray-600 hover:text-black text-sm transition-colors">Beranda</router-link>
                <router-link to="/materi" class="text-gray-600 hover:text-black text-sm transition-colors">Eksplorasi Materi</router-link>
            </div>

            <!-- Kolom Kanan: Kontak/Social -->
            <div class="flex flex-col gap-3">
                <span class="text-xs font-bold tracking-widest uppercase mb-2">Kontak</span>
                <a href="mailto:info@kelompok13.com" class="text-gray-600 hover:text-black text-sm transition-colors">info@kelompok13.com</a>
                <span class="text-gray-600 text-sm">Indonesia</span>
            </div>
            </div>

            <!-- Baris Bawah: Copyright -->
            <div class="pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
            <p class="text-gray-600 text-[11px] tracking-widest uppercase">
                &copy; 2024 Kelompok 13 — Leadership Project.
            </p>
            <div class="flex gap-6">
                <span class="text-[10px] text-gray-400 font-medium uppercase tracking-[0.2em]">Privacy Policy</span>
                <span class="text-[10px] text-gray-400 font-medium uppercase tracking-[0.2em]">Terms of Service</span>
            </div>
            </div>
        </div>
    </footer>
</template>