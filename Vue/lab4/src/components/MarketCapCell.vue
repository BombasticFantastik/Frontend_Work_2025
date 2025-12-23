<script setup>
import { computed } from 'vue';

const props = defineProps(['value']);

const formattedValue = computed(() => {
  const val = Number(props.value);
  if (!val) {
    return '0';
  }
  if (val >= 1e9) {
    return (val / 1e9).toFixed(1) + 'B';
  }
  if (val >= 1e6){
    return (val / 1e6).toFixed(0) + 'M';
  }
  return val;
});
</script>

<template>
  <span>{{ formattedValue }}</span>
</template>
