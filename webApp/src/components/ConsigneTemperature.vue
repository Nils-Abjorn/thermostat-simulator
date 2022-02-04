<template>
  <div class="order-container">
    <ion-title class="order-display">19.5 °C</ion-title>
    <div class="order-box">
      <ion-fab-button size="large" class="button-order"> - </ion-fab-button>
      <ion-fab-button size="large" class="button-order"> + </ion-fab-button>
    </div>
  </div>

  <!-- <div>
    <ion-fab>
      <ion-fab-button>
        <ion-icon :icon="add"></ion-icon>
      </ion-fab-button>
    </ion-fab>
  </div> -->
</template>

<script lang="ts">
import { IonFabButton } from "@ionic/vue";

export default {
  components: {
    IonFabButton,
  },
};
</script>

<style scoped>
.order-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5vh;
  height: 50vh;
}
.order-box {
  display: flex;
  height: min(75vw, 350px);
  width: min(75vw, 350px);
  border-radius: 50%;
  background-color: var(--ion-color-light-shade);
  justify-content: space-around;
  align-items: flex-end;
}

.order-display {
  position: absolute;
  z-index: 10;
  font-size: 7vh;
}
</style>
