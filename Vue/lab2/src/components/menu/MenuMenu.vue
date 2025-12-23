<script setup>
import MenuItem from './MenuItem.vue';

const { menu } = defineProps({
  menu: null,
});
</script>

<template>
  <div class="col-lg-6 col-12">
    <div class="menu-block-wrap">
      <div class="text-center mb-4 pb-lg-2">
        <em class="text-white">{{ menu.name }}</em>
        <h4 class="text-white">{{ menu.type }}</h4>
      </div>

      <MenuItem v-for="item of menu.items" :key="item.name" :item="item" />
    </div>
  </div>
</template>
