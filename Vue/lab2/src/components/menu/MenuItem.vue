<script setup>
const { item } = defineProps({
  item: null,
});
</script>

<template>
  <div class="menu-block my-4">
    <div class="d-flex">
      <h6>
        {{ item.name }}
        <span v-if="item.isRecommended" class="badge ms-3">Recommend</span>
      </h6>

      <span class="underline"></span>
      <div class="ms-auto">
        <strong v-if="item.oldPrice" class="text-white ms-auto"
          ><s>{{ item.oldPrice }}</s></strong
        >

        <strong class="ms-2">{{ item.price }}</strong>
      </div>
    </div>

    <div class="border-top mt-2 pt-2">
      <small>{{ item.descr }}</small>
    </div>
  </div>
</template>
