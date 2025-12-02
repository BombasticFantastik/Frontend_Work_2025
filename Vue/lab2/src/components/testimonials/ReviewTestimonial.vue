<script setup>
import ReviewTestimonialRating from './ReviewTestimonialRating.vue';

const { testimonial, index } = defineProps({
  testimonial: null,
  index: null,
});
</script>

<template>
  <div :class="{ 'timeline-container-right': index % 2 == 1 }" class="timeline-container">
    <div class="timeline-content">
      <div class="reviews-block">
        <div class="reviews-block-image-wrap d-flex align-items-center">
          <img :src="testimonial.author.avatar" class="reviews-block-image img-fluid" alt="" />

          <div>
            <h6 class="text-white mb-0">{{ testimonial.author.name }}</h6>
            <em class="text-white"> {{ testimonial.author.who }}</em>
          </div>
        </div>

        <div class="reviews-block-info">
          <p>
            {{ testimonial.descr }}
          </p>

          <div class="d-flex border-top pt-3 mt-4">
            <strong class="text-white"
              >{{ testimonial.rating }} <small class="ms-2">Rating</small></strong
            >

            <div class="reviews-group ms-auto">
              <ReviewTestimonialRating :rating="testimonial.rating" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
