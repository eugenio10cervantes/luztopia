<template>
  <v-app>
    <v-app-bar fixed color="white" elevation="0" height="64px" app>
      <v-container fluid class="py-0">
        <v-row align="center">
          <v-col cols="6" sm="3" lg="4" class="text-left">
            <v-img src="@/assets/img/logo-luztopia.svg" height="50" contain position="left"></v-img>
          </v-col>
          <template v-if="countdown != false">
            <v-col cols="4" sm="6" lg="4" class="d-none d-sm-block text-center">
              <span class="bold uppercase roboto-condensed footer-text">¡Faltan {{ countdown }} días!</span>
            </v-col>
          </template>
          <v-col cols="6" sm="3" lg="4" class="text-right">
            <v-btn icon href="https://www.facebook.com/luztopia" target="_blank" class="d-none d-md-inline-flex" width="36">
              <v-icon size="24">mdi-facebook</v-icon>
            </v-btn>
            <v-btn icon href="https://www.instagram.com/luztopia/" target="_blank" class="d-none d-md-inline-flex" width="36">
              <v-icon size="24">mdi-instagram</v-icon>
            </v-btn>
            <v-btn icon href="https://twitter.com/luztopia" target="_blank" class="d-none d-md-inline-flex" width="36">
              <v-icon size="24">mdi-twitter</v-icon>
            </v-btn>
            <v-btn icon href="https://www.youtube.com/channel/UC8Hi8cyOM5Nw_3nlY21wNQw" target="_blank" class="d-none d-md-inline-flex" width="36">
              <v-icon size="24">mdi-youtube</v-icon>
            </v-btn>
            <v-btn icon color="black" :ripple="false" @click="dialog = true">
              <v-icon size="48">mdi-menu</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
    <div id="menu" class="menu"></div>

    <v-dialog
      v-model="dialog"
      max-width="100%"
      transition="slide-y-transition"
      attach="#menu"
      :fullscreen="width < 600"
    >
      <v-card height="100%">
        <v-card-text class="px-4">
          <v-container fluid class="py-2">
            <v-row align="center">
              <v-col>
                <v-img src="@/assets/img/logo-black.svg" width="30"></v-img>
              </v-col>
              <v-col class="text-right">
                <v-btn icon @click="dialog = false">
                  <v-icon size="48" color="black">mdi-close</v-icon>
                </v-btn>
              </v-col>
            </v-row>

            <v-row justify="center" class="my-9 my-md-9">
              <v-col cols="auto" class="py-2 py-sm-5">
                <v-btn
                  text
                  :ripple="false"
                  color="transparent"
                  @click="
                    $vuetify.goTo(0);
                    dialog = false;
                  "
                >
                  <span class="black--text menu-item">INICIO</span>
                </v-btn>
              </v-col>
              <v-col cols="auto" class="py-2 py-sm-5">
                <v-btn text :ripple="false" color="transparent">
                  <v-btn
                  text
                  :ripple="false"
                  color="transparent"
                  @click="
                    $vuetify.goTo('#teaser');
                    dialog = false;
                  "
                >
                  <span class="black--text menu-item">VIDEO</span>
                </v-btn>
                </v-btn>
              </v-col>
              <v-col cols="auto" class="py-2 py-sm-5">
                <v-btn
                  text
                  :ripple="false"
                  color="transparent"
                  @click="
                    $vuetify.goTo('#informacion');
                    dialog = false;
                  "
                >
                  <span class="black--text menu-item">INFO</span>
                </v-btn>
              </v-col>
              <v-col cols="auto" class="py-2 py-sm-5">
                <v-btn
                  text
                  :ripple="false"
                  color="transparent"
                  @click="
                    $vuetify.goTo('#atracciones');
                    dialog = false;
                  "
                >
                  <span class="black--text menu-item">ATRACCIONES</span>
                </v-btn>
              </v-col>
              <v-col cols="auto" class="py-2 py-sm-5">
                <v-btn
                  text
                  :ripple="false"
                  color="transparent"
                  @click="
                    $vuetify.goTo('#mapa');
                    dialog = false;
                  "
                >
                  <span class="black--text menu-item">MAPA</span>
                </v-btn>
              </v-col>
              <v-col cols="auto" class="py-2 py-sm-5">
                <v-btn
                  text
                  :ripple="false"
                  color="transparent"
                  @click="
                  dialog=false;
                    $vuetify.goTo('#faq');
                  "
                >
                  <span class="black--text menu-item">FAQs</span>
                </v-btn>
              </v-col>
              <v-col cols="auto" class="py-2 py-sm-5">
                <v-btn text :ripple="false" color="transparent">
                  <v-btn
                  text
                  :ripple="false"
                  color="transparent"
                  @click="
                  dialog=false;
                    $vuetify.goTo('#boletos');
                  "
                >
                  <span class="black--text menu-item">BOLETOS</span>
                </v-btn>
                </v-btn>
              </v-col>
              <v-col cols="auto" class="py-2 py-sm-5">
                <v-btn
                  text
                  :ripple="false"
                  color="transparent"
                  @click="
                    $vuetify.goTo('#patrocinadores');
                    dialog = false;
                  "
                >
                  <span class="black--text menu-item">PATROCINADORES</span>
                </v-btn>
              </v-col>
              <v-col cols="auto" class="py-2 py-sm-5">
                <v-btn
                  text
                  :ripple="false"
                  color="transparent"
                  @click="
                    $vuetify.goTo('#comunidad');
                    dialog = false;
                  "
                >
                  <span class="black--text menu-item">COMUNIDAD</span>
                </v-btn>
              </v-col>
              <v-col cols="auto" class="py-2 py-sm-5">
                <v-btn
                  text
                  :ripple="false"
                  color="transparent"
                  @click="
                    $vuetify.goTo('#footer');
                    dialog = false;
                  "
                >
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

    <v-footer color="white">
      <v-container fluid>
        <v-row align="center">
          <!-- <v-col cols="12" md="4" class="text-center text-md-left">
            <a
              href="mailto:luztopia@luztopia.com"
              class="black--text not-decorated roboto-condensed footer-link"
              >CONTACTANOS</a
            >
          </v-col> -->
          <v-col cols="12" md="12" class="text-center text-md-center">
            <span class="roboto-condensed footer-text"
              >NOS VEMOS PRONTO :)</span
            >
          </v-col>
          <!-- <v-col cols="12" md="4" class="text-center text-md-right">
            <router-link
              to="/terminos-y-condiciones"
              class="black--text not-decorated roboto-condensed footer-link"
              >TERMINOS Y CONDICIONES</router-link
            >
          </v-col> -->
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {},

  data: () => ({
    dialog: false,
    faq: false
  }),
  computed: {
    width: function () {
      return this.$vuetify.breakpoint.width
    },
    countdown: function () {
      // Update the count down every 1 second
      var countDownDate = new Date('Nov 18, 2021 16:00:00').getTime()

      // Get today's date and time
      var now = new Date().getTime()

      // Find the distance between now and the count down date
      var distance = countDownDate - now

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24))

      // If the count down is finished, write some text
      if (distance < 0) {
        return false
      }

      return days
    }
  }
}
</script>

<style lang="scss">
.not-decorated {
  text-decoration: none !important;
}

.roboto-condensed {
  font-family: "Roboto Condensed", sans-serif;
}
</style>
