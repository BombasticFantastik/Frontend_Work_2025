<script setup>
defineProps(['value']);
</script>

<template>
  <div class="flex flex-wrap gap-1">
    <span
      v-for="country in value"
      :key="country"
      class="px-2 py-0.5 bg-gray-100 text-gray-500 rounded text-[11px]"
    >
      {{ country }}
    </span>
  </div>
</template>
