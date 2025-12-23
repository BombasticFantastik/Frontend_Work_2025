<script setup>
import { ref, computed } from 'vue';
import BaseTable from './components/BaseTable.vue';
import MarketCapCell from './components/MarketCapCell.vue';
import CountryBadges from './components/CountryBadges.vue';
import PhoneFormatter from './components/PhoneFormatter.vue';
import InputFilter from './components/InputFilter.vue';
import usersData from './data.json';

const users = ref(usersData);

const header = {
  image: "Фото",
  firstName: "Имя",
  lastName: "Фамилия",
  email: "Email",
  phone: "Телефон",
  marketCap: "Рыночная капитализация",
  developedCountries: "Страны"
};

const filters = ref({});

const handleFilter = ({ key, value }) => {
  filters.value[key] = value;
};

const filteredUsers = computed(() => {
  return users.value.filter(row => {
    return Object.keys(filters.value).every(key => {
      const filterValue = filters.value[key];
      if (!filterValue) return true;

      const rowValue = row[key];

      return String(rowValue).toLowerCase().includes(filterValue.toLowerCase());
    });
  });
});

const cleanFilters = () => {
  filters.value = {};
};
</script>

<template>
  <div class="min-h-screen bg-white text-slate-900 font-sans antialiased">
    <div class="max-w-7xl mx-auto px-6 py-12">

      <header class="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <h1 class="text-3xl font-light tracking-tight text-slate-800">Список акционеров</h1>
          <p class="text-slate-400 text-sm mt-1 font-light">Управление базой данных пользователей и рыночных показателей</p>
        </div>

        <button
          v-if="Object.keys(filters).length > 0"
          @click="cleanFilters"
          class="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-slate-400 hover:text-red-500 transition-colors duration-200"
        >
          <span class="text-lg leading-none">&times;</span> Очистить поиск
        </button>
      </header>

      <main class="relative overflow-hidden">
        <BaseTable :rows="filteredUsers" :header="header">

          <template #header-email="{ key }">
            <InputFilter
              v-model="filters[key]"
              placeholder="Поиск по email..."
              :column="key"
            />
          </template>

          <template #header-lastName="{ key }">
            <InputFilter
              v-model="filters[key]"
              :column="key"
              placeholder="Поиск по фамилии..."
            />
          </template>

          <template #image="{ value }">
            <div class="w-10 h-10 bg-slate-100 rounded-full overflow-hidden border border-slate-100 shadow-sm">
              <img :src="value" alt="" class="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all" />
            </div>
          </template>

          <template #email="{ value }">
            <a :href="`mailto:${value}`" class="text-slate-500 hover:text-blue-500 transition-colors border-b border-transparent hover:border-blue-200 py-0.5">
              {{ value }}
            </a>
          </template>

          <template #marketCap="{ value }">
            <MarketCapCell :value="value" class="font-mono text-slate-700" />
          </template>

          <template #developedCountries="{ value }">
            <CountryBadges :value="value" />
          </template>

          <template #phone="{ value }">
            <PhoneFormatter :value="value" class="text-slate-500 text-xs tracking-wider" />
          </template>

        </BaseTable>

        <div v-if="filteredUsers.length === 0" class="mt-12 text-center py-20 border-t border-slate-50">
          <p class="text-slate-400 font-light italic">Ничего не найдено по заданным параметрам</p>
        </div>
      </main>
    </div>
  </div>
</template>
