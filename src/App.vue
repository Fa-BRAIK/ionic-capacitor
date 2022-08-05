<script lang="ts">
import { IonApp, IonRouterOutlet } from "@ionic/vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
  components: {
    IonApp,
    IonRouterOutlet,
  },
});
</script>

<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<style lang="scss" scoped>

</style>