<template>
  <v-app>
    <v-app-bar app color="#0A0CFA" elevation="0" dark height="64px">
      <v-container fluid class="py-0">
        <v-row align="center">
          <v-col>
            <v-img src="@/assets/img/logo.svg" width="30"></v-img>
          </v-col>
          <v-col class="text-right">
            <v-btn icon dark :ripple="false" @click="dialog = true">
              <v-icon size="48">mdi-menu</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
    <div id="menu" class="menu">
    </div>

      <v-dialog
        v-model="dialog"
        max-width="100%"
        transition="slide-y-transition"
        attach="#menu"
      >
        <v-card height="100%">
          <v-card-text>
            <v-container fluid>
              <v-row align="center">
                <v-col>
                  <v-img src="@/assets/img/logo-black.svg" width="30"></v-img>
                </v-col>
                <v-col class="text-right">
                  <v-btn icon @click="dialog = false;">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </v-col>
              </v-row>

              <v-row justify="center" class="my-9">
                <v-col cols="auto">
                  <v-btn text :ripple="false" color="transparent" @click="$vuetify.goTo(0); dialog = false;">
                    <span class="black--text menu-item">INICIO</span>
                  </v-btn>
                </v-col>
                <v-col cols="auto">
                  <v-btn text :ripple="false" color="transparent" >
                    <span class="black--text menu-item">COMPRA TUS BOLETOS</span>
                  </v-btn>
                </v-col>
                <v-col cols="auto">
                  <v-btn text :ripple="false" color="transparent" @click="$vuetify.goTo('#atracciones'); dialog = false;">
                    <span class="black--text menu-item">ATRACCIONES</span>
                  </v-btn>
                </v-col>
              </v-row>

              <v-row justify="center">
                <v-col cols="auto">
                  <v-btn text :ripple="false" color="transparent" @click="$vuetify.goTo('#mapa'); dialog = false;">
                    <span class="black--text menu-item">MAPA</span>
                  </v-btn>
                </v-col>
                <v-col cols="auto">
                  <v-btn text :ripple="false" color="transparent" @click="$vuetify.goTo('#patrocinadores'); dialog = false;">
                    <span class="black--text menu-item">PATROCINADORES</span>
                  </v-btn>
                </v-col>
                <v-col cols="auto">
                  <v-btn text :ripple="false" color="transparent" @click="$vuetify.goTo('#consejo'); dialog = false;">
                    <span class="black--text menu-item">CONSEJO</span>
                  </v-btn>
                </v-col>
                <v-col cols="auto">
                  <v-btn text :ripple="false" color="transparent" @click="$vuetify.goTo('#footer'); dialog = false;">
                    <span class="black--text menu-item">CONTACTO</span>
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-dialog>

    <v-main>
      <router-view />
    </v-main>

    <v-footer id="footer">
      <v-container fluid>
        <v-row align="center">
          <v-col cols="12" md="4" class="text-center text-md-left">
            <a href="mailto:luztopia@luztopia.com" class="black--text not-decorated roboto-condensed" style="font-size: 18px; letter-spacing: -1px;">CONTACTANOS</a>
          </v-col>
          <v-col cols="12" md="4" class="text-center text-md-center">
            <span class="roboto-condensed" style="font-size: 32px; letter-spacing: -1px; font-weight: bold;">NOS VEMOS PRONTO :)</span>
          </v-col>
          <v-col cols="12" md="4" class="text-center text-md-right">
            <router-link to="/terminos-y-condiciones" class="black--text not-decorated roboto-condensed" style="font-size: 18px; letter-spacing: -1px;">TERMINOS Y CONDICIONES</router-link>
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
    dialog: false
  })
}
</script>

<style lang="scss">
  .not-decorated{
    text-decoration: none !important;
  }

  .roboto-condensed{
    font-family: 'Roboto Condensed', sans-serif;
  }

</style>
