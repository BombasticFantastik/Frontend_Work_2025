<script setup>
import { computed } from 'vue';

const props = defineProps(['value']);

const formattedPhone = computed(() => {
  let digits = props.value.replace(/\D/g, '');

  if (props.value.startsWith('8')) {
    digits = '7' + digits.slice(1);
  }
  return digits;
});
</script>

<template>
  <span class="text-gray-600">
    {{ formattedPhone }}
  </span>
</template>
