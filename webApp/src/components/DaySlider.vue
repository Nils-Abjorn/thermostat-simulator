<template>
  <swiper
    :direction="'vertical'"
    :slidesPerView="auto"
    :spaceBetween="20"
    :loop="true"
    :pagination="pagination"
    :modules="modules"
    :keyboard="{
      enabled: true,
    }"
    class="mySwiper"
  >
    <swiper-slide><day-parameters-base day="Lundi" /></swiper-slide
    ><swiper-slide><day-parameters-base day="Mardi" /></swiper-slide
    ><swiper-slide><day-parameters-base day="Mercredi" /></swiper-slide
    ><swiper-slide><day-parameters-base day="Jeudi" /></swiper-slide
    ><swiper-slide><day-parameters-base day="Vendredi" /></swiper-slide
    ><swiper-slide><day-parameters-base day="Samedi" /></swiper-slide
    ><swiper-slide><day-parameters-base day="Dimanche" /></swiper-slide>
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
import DayParametersBase from "./DayParametersBase.vue";

export default {
  components: {
    Swiper,
    SwiperSlide,

    DayParametersBase,
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
