<script setup>
const { rating } = defineProps({
  rating: null,
});

const generateStarsClass = (rating) => {
  const starsClass = [];
  const fullStars = Math.floor(rating); // Количество полных звезд
  const hasHalfStar = rating % 1 >= 0.5; // Нужна ли половина звезды

  for (let i = 0; i < fullStars; i++) {
    starsClass.push('bi-star-fill');
  }

  if (hasHalfStar) {
    starsClass.push('bi-star-half');
  }

  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  for (let i = 0; i < emptyStars; i++) {
    starsClass.push('bi-star');
  }

  return starsClass;
};
</script>

<template>
  <i
    v-for="(starClass, starIndex) of generateStarsClass(rating)"
    :key="starIndex"
    :class="starClass"
  ></i>
</template>
