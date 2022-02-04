<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Chauffage</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Chauffage</ion-title>
        </ion-toolbar>
      </ion-header>
      <home-display-header />
      <consigne-temperature />
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
import ConsigneTemperature from "../components/ConsigneTemperature.vue";
import HomeDisplayHeader from "../components/HomeDisplayHeader.vue";

export default {
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,

    ConsigneTemperature,
    HomeDisplayHeader,
  },
};
</script>

<style scoped></style>
