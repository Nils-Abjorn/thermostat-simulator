<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Programmation</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Programmation</ion-title>
        </ion-toolbar>
      </ion-header>
      <day-slider class="mainWindow" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";
import DaySlider from "../components/DaySlider.vue";

export default {
  components: {
    DaySlider,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
  },
};
</script>

<style scoped>
.mainWindow {
  height: 100%;
}
</style>
