<script setup>
import BaristaPerson from './BaristaPerson.vue';

const people = [
  {
    name: 'Steve',
    tag: 'Boss',
    tagline: 'your favourite coffee daily lives tempor.',
    image: '/images/team/portrait-elegant-old-man-wearing-suit.jpg',
  },
  {
    name: 'Sandra',
    tag: 'Manager',
    tagline: 'your favourite coffee daily lives.',
    image:
      '/images/team/cute-korean-barista-girl-pouring-coffee-prepare-filter-batch-brew-pour-working-cafe.jpg',
  },
  {
    name: 'Jackson',
    tag: 'Senior',
    tagline: 'your favourite coffee daily lives.',
    image: '/images/team/small-business-owner-drinking-coffee.jpg',
  },
  {
    name: 'Michelle',
    tag: 'Barista',
    tagline: 'your favourite coffee daily consectetur.',
    image: '/images/team/smiley-business-woman-working-cashier.jpg',
  },
];
</script>

<template>
  <section class="barista-section section-padding section-bg" id="barista-team">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12 col-12 text-center mb-4 pb-lg-2">
          <em class="text-white">Creative Baristas</em>

          <h2 class="text-white">Meet People</h2>
        </div>

        <BaristaPerson v-for="person in people" :key="person.name + person.tag" :person="person" />
      </div>
    </div>
  </section>
</template>
