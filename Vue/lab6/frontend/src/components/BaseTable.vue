<script setup>
defineProps({
  rows: Array,
  header: Object,
})
</script>

<template>
  <div class="overflow-x-auto border border-zinc-800 rounded-lg">
    <table class="min-w-full divide-y divide-zinc-800">
      <thead class="bg-zinc-900/50">
        <tr>
          <th
            v-for="(title, key) in header"
            :key="key"
            class="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-zinc-400"
          >
            {{ title }}
          </th>
        </tr>
      </thead>
      <tbody class="divide-y divide-zinc-800">
        <tr
          v-for="(row, idx) in rows"
          :key="idx"
          class="hover:bg-zinc-900/40 transition-colors duration-150"
        >
          <td
            v-for="(title, key) in header"
            :key="key"
            class="px-6 py-4 whitespace-nowrap text-sm text-zinc-300"
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
