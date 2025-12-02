<script setup>
import ReviewTestimonial from './ReviewTestimonial.vue';

const testimonials = [
  {
    author: {
      name: 'Sandra',
      who: 'Customers',
      avatar: '/images/reviews/young-woman-with-round-glasses-yellow-sweater.jpg',
    },
    rating: '2',
    descr:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    author: {
      name: 'Don',
      who: 'Customers',
      avatar: '/images/reviews/senior-man-white-sweater-eyeglasses.jpg',
    },
    rating: '3.5',
    descr:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    author: {
      name: 'Olivia',
      who: 'Customers',
      avatar:
        '/images/reviews/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair.jpg',
    },
    rating: '5',
    descr:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    author: {
      name: 'John',
      who: 'Customers',
      avatar: '/images/reviews/young-woman-with-round-glasses-yellow-sweater.jpg',
    },
    rating: '4.5',
    descr:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];
</script>

<template>
  <section class="reviews-section section-padding section-bg" id="section_4">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12 col-12 text-center mb-4 pb-lg-2">
          <em class="text-white">Reviews by Customers</em>

          <h2 class="text-white">Testimonials</h2>
        </div>

        <div class="timeline">
          <ReviewTestimonial
            v-for="(testimonial, index) of testimonials"
            :key="testimonial.author.name"
            :testimonial="testimonial"
            :index="index"
          />
        </div>
      </div>
    </div>
  </section>
</template>
