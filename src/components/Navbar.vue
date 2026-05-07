<template>
    <nav class="px-4 md:px-8 lg:px-16">
        <div class="max-w-7xl mx-auto flex items-center justify-between h-16">
            <a href="#" class="flex items-center shrink-0">
                <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="7" cy="10" r="7" fill="#2563EB"/>
                    <circle cx="16" cy="10" r="7" fill="#60A5FA" fill-opacity=".7"/>
                </svg>
                <span class="logo-text font-bold text-lg text-slate-900">Kelompok 13</span>
            </a>
        
            <div class="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
                <router-link to="/" class="hover:text-blue-600 transition-colors">Beranda</router-link>
                <router-link to="/blog" class="hover:text-blue-600 transition-colors">Blog</router-link>
                <a href="#" class="hover:text-blue-600 transition-colors">About</a>
                <a href="#" class="hover:text-blue-600 transition-colors">Contact</a>
            </div>
        
            <button id="hamburger" class="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors" onclick="toggleMenu()">
                <svg class="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
            </button>
        </div>
        
        <div id="mobile-menu" class="md:hidden pb-4 border-t border-slate-100 mt-0">
            <div class="flex flex-col gap-1 pt-3">
                <a href="#" class="px-4 py-2 text-sm font-semibold text-blue-600 bg-blue-50 rounded-lg">Home</a>
                <a href="#" class="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-lg">Blog</a>
                <a href="#" class="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-lg">Service</a>
                <a href="#" class="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-lg">About</a>
                <a href="#" class="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-lg">Contact</a>
            </div>
        </div>
    </nav>
</template>