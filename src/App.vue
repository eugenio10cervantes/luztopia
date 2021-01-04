<template>
  <v-app>
    <v-app-bar app color="#0A0CFA" elevation="0" dark height="64px">
      <v-container fluid class="py-0">
        <v-row align="center">
          <v-col>
            <v-img src="@/assets/img/logo.svg" width="30"></v-img>
          </v-col>
          <v-col class="text-right">
            <v-btn icon dark :ripple="false">
              <v-icon size="48">mdi-menu</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <v-footer>
      <v-container fluid>
        <v-row align="center">
          <v-col cols="12" md="4" class="text-center text-md-left">
            <a href="mailto:luztopia@luztopia.com" class="black--text not-decorated">CONTACTANOS</a>
          </v-col>
          <v-col cols="12" md="4" class="text-center text-md-center">
            NOS VEMOS PRONTO ;]
          </v-col>
          <v-col cols="12" md="4" class="text-center text-md-right">
            <router-link to="/terminos-y-condiciones" class="black--text not-decorated">TERMINOS Y CONDICIONES</router-link>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  })
}
</script>

<style scoped>
  .not-decorated{
    text-decoration: none !important;
  }
</style>
