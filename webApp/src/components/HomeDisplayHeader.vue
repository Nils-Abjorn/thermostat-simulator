<template>
  <div class="panel">
    <img src="../images/home.png" id="homeBackground" />
    <ion-grid class="panel-content ion-margin-top">
      <ion-row>
        <ion-title size="small" class="not-important-display"
          >Mon Domicile</ion-title
        >
      </ion-row>
      <ion-row>
        <ion-col></ion-col>
        <ion-col>
          <ion-row>
            <ion-title class="important-display">19.5 °C</ion-title>
          </ion-row>
          <ion-row class="ion-margin-start not-important-display">
            <ion-icon :icon="caretUp" />
            <ion-icon :icon="thermometer" />
            <ion-text>Temperature ambiante</ion-text>
          </ion-row>
        </ion-col>
      </ion-row>
    </ion-grid>
  </div>
</template>
<script>
import { thermometer, caretUp } from "ionicons/icons";
import {
  IonTitle,
  IonGrid,
  IonText,
  IonIcon,
  IonCol,
  IonRow,
} from "@ionic/vue";
export default {
  setup() {
    return {
      thermometer,
      caretUp,
    };
  },
  components: {
    IonTitle,
    IonGrid,
    IonText,
    IonIcon,
    IonCol,
    IonRow,
  },
};
</script>

<style scoped>
.panel {
  position: relative;
  height: 35%;
}

#homeBackground {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
  border-bottom-right-radius: 50% 10%;
  border-bottom-left-radius: 50% 10%;
}

.panel-content {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}

.important-display {
  font-size: 8vh;
}

.not-important-display {
  font-weight: lighter;
  font-size: 2vh;
}
</style>
