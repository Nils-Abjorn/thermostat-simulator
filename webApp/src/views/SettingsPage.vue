<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Réglages</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Réglages</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-item>
        <ion-icon :icon="moon" />
        <ion-label> Activer theme sombre </ion-label>
        <ion-toggle id="themeToggle" slot="end"></ion-toggle>
      </ion-item>
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
import { moon } from "ionicons/icons";
export default {
  setup() {
    return { moon };
  },
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
  },
};
</script>

<style scoped>
ion-item {
  justify-content: space-around;
}
</style>
