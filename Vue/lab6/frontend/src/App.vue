<script setup></script>

<template>
  <div class="min-h-screen bg-zinc-950 text-zinc-300 antialiased">
    <nav class="border-b border-zinc-800 bg-zinc-900/50 backdrop-blur-md sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex space-x-8 items-center">
            <router-link
              to="/"
              class="hover:text-white transition-colors"
              active-class="text-indigo-400 font-medium"
            >
              Посты
            </router-link>

            <router-link
              to="/categories"
              class="hover:text-white transition-colors"
              active-class="text-indigo-400 font-medium"
            >
              Категории
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <router-view />
    </main>
  </div>
</template>
