<script setup>
const model = defineModel();

const { type, name, id, placeholder, required, label } = defineProps({
  type: null,
  name: null,
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
  <label :for="name" class="form-label"
    >{{ label }} <sup v-if="required" class="text-danger">*</sup></label
  >
  <input
    class="form-control"
    :type="type"
    :name="name"
    :id="id"
    :placeholder="placeholder"
    :required="required"
    v-model="model"
  />
</template>
