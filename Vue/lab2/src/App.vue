<script setup>
import Footer from './components/Footer.vue';
import Contacts from './components/Contacts.vue';
import Hero from './components/Hero.vue';
import About from './components/About.vue';
import MenuSection from './components/menu/MenuSection.vue';
import ReviewsSection from './components/testimonials/ReviewsSection.vue';
import BaristaSection from './components/BaristaSection.vue';
</script>

<template>
  <main>
    <Hero />
    <About />
    <BaristaSection />
    <MenuSection />
    <ReviewsSection />
    <Contacts />
    <Footer />
  </main>
</template>
