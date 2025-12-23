<script setup>
const model = defineModel({ type: String, default: '' });

defineProps({
  placeholder: String,
  column: String
});


</script>

<template>
  <input
    v-model="model"
    type="text"
    :placeholder="placeholder"
    class="w-full px-2 py-1 text-xs border border-gray-200 rounded bg-gray-50 focus:bg-white focus:border-gray-400 outline-none transition"
  />
</template>
