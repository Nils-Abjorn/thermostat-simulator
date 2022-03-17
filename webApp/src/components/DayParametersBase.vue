<template>
  <div>
    <ion-card>
      <ion-card-header>
        <ion-card-title>{{ day }}</ion-card-title>
      </ion-card-header>

      <ion-card-content>
        <ion-icon :icon="sync" />
        <ion-icon :icon="sunny" />
        cycle J/N
        <ion-range
          :value="dualValue"
          snaps="true"
          pin="true"
          :pinFormatter="hourFormatter"
          dual-knobs="true"
          min="0"
          max="24"
          step="1"
        ></ion-range>
        <ion-icon :icon="thermometer" />
        <ion-icon :icon="sunny" />
        tempertaure de jour
        <ion-range
          value="19"
          pin="true"
          :pinFormatter="celciusFormatter"
          min="15"
          max="35"
          step="0.5"
        ></ion-range>
        <ion-icon :icon="thermometer" />
        <ion-icon :icon="moon" />
        temperature de nuit
        <ion-range
          value="19"
          pin="true"
          :pinFormatter="celciusFormatter"
          min="15"
          max="35"
          step="0.5"
        ></ion-range>
      </ion-card-content>
    </ion-card>
  </div>
</template>
<script lang="ts">
import {
  IonCard,
  IonRange,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonIcon,
} from "@ionic/vue";
import { sync, sunny, thermometer, moon } from "ionicons/icons";
export default {
  components: {
    IonCardTitle,
    IonCard,
    IonRange,
    IonCardHeader,
    IonCardContent,
    IonIcon,
  },
  setup() {
    const hourFormatter = (value: number) => `${value + "h"}`;
    const celciusFormatter = (value: number) => `${value + "°C"}`;
    return { hourFormatter, celciusFormatter, sync, sunny, thermometer, moon };
  },
  mounted() {
    // Sets initial value for dual-knob ion-range
  },
  props: {
    day: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      dualValue: { lower: 8, upper: 20 },
    };
  },
};
</script>

<style scoped>
ion-card {
  width: 90vw;
}
ion-icon {
  color: var(--ion-color-primary);
}
</style>
