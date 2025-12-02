<script setup>
import MenuMenu from './MenuMenu.vue';

const { menus } = defineProps({
  menus: null,
});
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
