<script setup>
defineProps({
  rows: {
    type: Array,
    required: true
  },
  header: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="w-full overflow-x-auto">
    <table class="w-full text-left border-collapse">
      <thead>
        <tr class="border-b-2 border-gray-100">
          <th
            v-for="(label, key) in header"
            :key="key"
            class="px-4 py-4 text-sm font-semibold text-gray-900"
          >
            <div class="flex flex-col gap-2">
              <span>{{ label }}</span>
              <slot :name="`header-${key}`" :key="key"></slot>
            </div>
          </th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-50">
        <tr v-for="(row, index) in rows" :key="index" class="hover:bg-gray-50/50 transition">
          <td
            v-for="(label, key) in header"
            :key="key"
            class="px-4 py-4 text-sm text-gray-600"
          >
            <slot :name="key" :value="row[key]" :row="row">
              {{ row[key] }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
