<template>
  <div>
    <div class="panel">
      <div id="homeBackground" />
      <ion-title class="important-display panel-content">Bienvenue</ion-title>
    </div>
    <div class="all-page">
      <ion-card class="login-card">
        <div class="centre">
          <ion-icon :icon="person" style="zoom: 3; margin: 8px"></ion-icon>
        </div>
        <ion-item>
          <ion-label> <ion-icon :icon="mail"></ion-icon></ion-label>
          <ion-input placeholder="Utilisateur"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label> <ion-icon :icon="lockClosed"></ion-icon></ion-label>

          <ion-input placeholder="Mot de passe" type="password"></ion-input>
        </ion-item>
        <ion-item
          ><ion-button style="width: 100%" size="default" @click="connect"
            >Connexion</ion-button
          ></ion-item
        >
        <ion-item><ion-toggle></ion-toggle> rester connecté</ion-item>
      </ion-card>
    </div>
  </div>
</template>
<script>
import { person, mail, lockClosed } from "ionicons/icons";
import {
  IonTitle,
  IonCard,
  toastController,
  loadingController,
} from "@ionic/vue";
export default {
  setup() {
    return {
      person,
      mail,
      lockClosed,
    };
  },
  components: {
    IonTitle,
    IonCard,
  },
  methods: {
    async openToast() {
      const toast = await toastController.create({
        message: "connexion réussie",
        duration: 2000,
        position: "top",
        animated: true,
      });
      this.$router.push("/home");
      return toast.present();
    },
    async connect() {
      const loading = await loadingController.create({
        message: "Connexion en cours...",
        duration: this.timeout,
      });

      await loading.present();

      setTimeout(() => {
        loading.dismiss();
        this.openToast();
      }, 5000);
    },
  },
};
</script>

<style scoped>
.panel {
  position: relative;
  text-align: center;
  height: 60vh;
}

#homeBackground {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
  border-bottom-right-radius: 50% 10%;
  border-bottom-left-radius: 50% 10%;
  background: linear-gradient(
    45deg,
    rgba(231, 164, 28, 1) 8%,
    rgba(216, 130, 38, 1) 14%,
    rgba(255, 196, 0, 1) 14%,
    rgba(214, 123, 38, 1) 32%,
    rgba(228, 107, 19, 1) 50%,
    rgba(224, 96, 15, 1) 50%,
    rgba(250, 178, 42, 1) 78%,
    rgba(253, 187, 45, 1) 100%
  );
}

.panel-content {
  position: absolute;
  top: -10vh;
  width: 100%;
  height: 100%;
  opacity: 70%;
}

.all-page {
  margin-top: 35vh;
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
}

.important-display {
  font-size: 5vh;
}

.not-important-display {
  font-weight: lighter;
  font-size: 2vh;
  position: absolute;
}

.login-card {
  display: flex;
  flex-direction: column;
  border-radius: 32px;
  margin: 16px;
  padding-bottom: 16px;
  opacity: 0.98;
  width: 100vw;
  max-width: 550px;
}

.centre {
  display: flex;
  justify-content: center;
}

.small-Line {
  display: flex;
  align-items: center;
}
</style>
