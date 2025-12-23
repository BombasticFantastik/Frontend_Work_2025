<script setup>
import MenuMenu from './MenuMenu.vue';

const menus = [
  {
    name: 'Breakfast',
    type: 'Delicious Menu',
    items: [
      {
        name: 'Pancakes',
        price: '$12.50',
        oldPrice: null,
        descr: 'Fresh brewed coffee and steamed milk',
        isRecommended: false,
      },
      {
        name: 'Toasted Waffle',
        price: '$12.00',
        oldPrice: '$16.50',
        descr: 'Brewed coffee and steamed milk',
        isRecommended: false,
      },
      {
        name: 'Fried Chips',
        price: '$15.0',
        oldPrice: null,
        descr: 'Rich Milk and Foam',
        isRecommended: true,
      },
      {
        name: 'Pecan Pancakes',
        price: '$15.50',
        oldPrice: '$33.33',
        descr: 'Studded with lots of nuts, pecan pancakes',
        isRecommended: false,
      },
      {
        name: 'Banana Cakes',
        price: '$18.0',
        oldPrice: null,
        descr: 'Studded with lots of nuts, pecan pancakes',
        isRecommended: false,
      },
    ],
  },
  {
    name: 'Coffee',
    type: 'Favourite Menu',
    items: [
      {
        name: 'Latte',
        price: '$7.50',
        oldPrice: '$12.50',
        descr: 'Fresh brewed coffee and steamed milk',
        isRecommended: false,
      },
      {
        name: 'White Coffee',
        price: '$5.90',
        oldPrice: null,
        descr: 'Brewed coffee and steamed milk',
        isRecommended: true,
      },
      {
        name: 'Chocolate Milk',
        price: '$5.50',
        oldPrice: null,
        descr: 'Rich Milk and Foam',
        isRecommended: false,
      },
      {
        name: 'Greentea',
        price: '$7.50',
        oldPrice: null,
        descr: 'Fresh brewed coffee and steamed milk',
        isRecommended: false,
      },
      {
        name: 'Dark Chocolate',
        price: '$7.25',
        oldPrice: null,
        descr: 'Rich Milk and Foam',
        isRecommended: false,
      },
    ],
  },
];
</script>

<template>
  <section class="menu-section section-padding" id="section_3">
    <div class="container">
      <!-- mb-4 mb-lg-0 -->
      <div class="row">
        <MenuMenu v-for="menu of menus" :key="menu.name + menu.type" :menu="menu" />
      </div>
    </div>
  </section>
</template>
