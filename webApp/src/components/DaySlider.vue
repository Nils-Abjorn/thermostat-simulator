<template>
  <swiper
    :direction="'vertical'"
    :slidesPerView="1"
    :spaceBetween="20"
    :loop="true"
    :pagination="pagination"
    :modules="modules"
    :keyboard="{
      enabled: true,
    }"
    class="mySwiper"
  >
    <swiper-slide>Lundi</swiper-slide><swiper-slide>Mardi</swiper-slide
    ><swiper-slide>Mercredi</swiper-slide><swiper-slide>Jeudi</swiper-slide
    ><swiper-slide>Vendredi</swiper-slide><swiper-slide>Samedi</swiper-slide
    ><swiper-slide>Dimanche</swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

import "../theme/style.css";

// import required modules
import { Pagination } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    let bulletContent = ["LUN", "MAR", "MER", "JEU", "VEN", "SAM", "DIM"];
    return {
      pagination: {
        clickable: true,
        renderBullet: function (index, className) {
          return (
            '<span class="' +
            className +
            '">' +
            bulletContent[index] +
            "</span>"
          );
        },
      },
      modules: [Pagination],
    };
  },
  data() {
    return {};
  },
};
</script>
