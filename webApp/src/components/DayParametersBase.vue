<template>
  <div>
    <ion-card>
      <ion-card-header>
        <ion-card-title>{{ day }}</ion-card-title>
      </ion-card-header>

      <ion-card-content>
        Keep close to Nature's heart... and break clear away, once in awhile,
        and climb a mountain or spend a week in the woods. Wash your spirit
        clean.
      </ion-card-content>
    </ion-card>
  </div>
</template>
<script>
export default {
  props: {
    day: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>
