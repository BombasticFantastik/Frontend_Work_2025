<script setup>
import Footer from './components/Footer.vue';
import Contacts from './components/Contacts.vue';
import Hero from './components/Hero.vue';
import About from './components/About.vue';
import ReviewsSection from './components/testimonials/ReviewsSection.vue';
import BaristaSection from './components/BaristaSection.vue';
</script>

<template>
  <main>
    <Hero />
    <About />
    <BaristaSection />
    <MenuSection :menus="menus" />
    <ReviewsSection :testimonials="testimonials" />
    <Contacts />
    <Footer />
  </main>
</template>
