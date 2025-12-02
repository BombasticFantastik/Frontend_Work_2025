<script setup>
const model = defineModel();

const { name, rows, id, placeholder, required, label } = defineProps({
  name: null,
  rows: null,
  id: null,
  placeholder: null,
  required: {
    type: Boolean,
    default: false,
  },
  label: null,
});
</script>

<template>
  <label :for="name" class="form-label">{{ label }}</label>
  <textarea
    class="form-control"
    :name="name"
    :rows="rows"
    :id="id"
    :placeholder="placeholder"
    :required="required"
    v-model="model"
  />
</template>
