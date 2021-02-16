<template>
  <div class="home">
    <template v-if="loaded">

      <template v-if="dialog">
        <v-dialog
          v-model="dialog"
          max-width="900"
        >
          <v-card class="text-right">
            <div style="position: absolute; top: 0px; z-index: 1; right: 0px;">
              <v-btn icon :ripple="false" @click="dialog = false;">
                <v-icon color="white">mdi-close</v-icon>
              </v-btn>
            </div>
            <v-card-text class="pa-0">
              <v-img :src="'https://luztopiacms.actstudio.xyz/'+popup.imagen.path"></v-img>
              <!-- <v-img src="../assets/img/FOOTER.svg"></v-img> -->
            </v-card-text>
          </v-card>
        </v-dialog>
      </template>

      <template v-if="($route.name == 'TerminosYCondiciones')">
        <v-dialog
          v-model="terminos"
          max-width="900" persistent
        >
          <v-card class="text-right">
            <div style="position: sticky; top: 0px; z-index: 1; right: 0px;">
              <v-btn icon :ripple="false" to="/">
                <v-icon color="black">mdi-close</v-icon>
              </v-btn>
            </div>
            <v-card-text class="pa-0">
              <div class="pt-6 pb-6 text-left px-6" v-html="terms.texto"></div>
            </v-card-text>
          </v-card>
        </v-dialog>
      </template>

      <v-container fluid class="intro py-0">
        <v-row class="my-0">
          <v-col class="px-0 py-0">
            <template v-if="home.cover.video">
              <video :src="'https://luztopiacms.actstudio.xyz/storage/uploads'+home.cover.path" autoplay muted loop playsinline class="d-none d-md-inline"></video>
            </template>
            <template v-if="home.cover.image">
              <v-img :src="'https://luztopiacms.actstudio.xyz/storage/uploads'+home.cover.path" width="100%" height="100vh" class="d-none d-md-flex" position="center bottom"></v-img>
            </template>

            <template v-if="home.coverMovil.video">
              <video :src="'https://luztopiacms.actstudio.xyz/storage/uploads'+home.coverMovil.path" autoplay muted loop playsinline class="d-md-none"></video>
            </template>

            <template v-if="home.coverMovil.image">
              <v-img :src="'https://luztopiacms.actstudio.xyz/storage/uploads'+home.coverMovil.path" height="100vh" class="d-md-none"></v-img>
            </template>
          </v-col>
        </v-row>
      </v-container>

      <div id="atracciones">
        <v-container fluid class="py-0">
          <v-row class="my-0">
            <v-col cols="6" class="pt-0 pb-12" style="background-color: #1CEC17;">
              <v-row style="min-height: 100vh" align="start">
                <v-col>
                  <v-row>
                    <v-col>
                      <h2 class="roboto-condensed white--text" style="font-size: 70px;">INFORMACIÓN</h2>
                    </v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col cols="8">
                      <span class="d-block color-rosa roboto-condensed bold">NUEVA EDICIÓN:</span>
                      <span class="d-block white--text roboto-condensed bold">NAVIDAD EN EL ESPACIO</span>

                      <span class="d-block color-rosa roboto-condensed bold mt-3">FECHAS:</span>
                      <span class="d-block white--text roboto-condensed bold">18 DE NOVIEMBRE DE 2021</span>
                      <span class="d-block white--text roboto-condensed bold">AL 16 DE ENERO DE 2022</span>
                      <span class="d-block white--text roboto-condensed bold">(Abierto todos los días excepto 24 y 31 de dic)</span>

                      <span class="d-block color-rosa roboto-condensed bold mt-3">HORARIO:</span>
                      <span class="d-block white--text roboto-condensed bold">4pm - 11pm</span>
                      <span class="d-block white--text roboto-condensed bold">(Encendido de luces: 6pm)</span>

                      <span class="d-block color-rosa roboto-condensed bold mt-3">LUGAR:</span>
                      <span class="d-block white--text roboto-condensed bold">PARQUE FUNDIDORA, PASEO SANTA LUCÍA</span>
                      <span class="d-block white--text roboto-condensed bold">A. Fundidora y Adolfo Prieto, Col. Obrera,</span>
                      <span class="d-block white--text roboto-condensed bold">Monterrey, Nuevo León, México, CP 64010</span>

                      <span class="d-block color-rosa roboto-condensed bold mt-3">ACCESOS:</span>
                      <span class="d-block white--text roboto-condensed bold">A1 - Av. Fundidora</span>
                      <span class="d-block white--text roboto-condensed bold">A8 - Calle Gregorio Torres</span>
                      <span class="d-block white--text roboto-condensed bold">A9 - Santa Lucía, Calle Félix U. Gómez</span>
                      <span class="d-block white--text roboto-condensed bold">A10 - Fundidora, Calle Aramberri</span>

                      <span class="d-block color-rosa roboto-condensed bold mt-3">ESTACIONAMIENTOS RECOMENDADOS:</span>
                      <span class="d-block white--text roboto-condensed bold">E10 - Fundidora, Calle Aramberri</span>
                      <span class="d-block white--text roboto-condensed bold">E Salón de la Fama del Beisbol - Calle Gregorio Torres</span>

                      <v-btn text color="white" :ripple="false">VER MAPA</v-btn>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-col>
            <v-col class="py-0" style="background-color: #E62AD0;">
              b
            </v-col>
          </v-row>
        </v-container>
      </div>

      <v-container fluid id="atracciones" style="background-color: #FF00EA;">
        <v-row>
          <v-col class="px-0">
            <v-img src="../assets/img/titulos/ATRACCIONES.svg" max-height="137" contain position="left"></v-img>
          </v-col>
        </v-row>
        <v-row>
          <template v-for="(atraccion, a) in atracciones">
            <v-col :key="'atracciones-'+a" cols="6" md="4" class="px-0 py-0">
              <v-hover v-slot="{ hover }">
                <v-img :src="'https://luztopiacms.actstudio.xyz/'+atraccion.image.path" style="height: 100%">
                  <div class="d-flex" v-if="hover" style="height: 100%; background-color: #FF00EA;">
                    <v-container fluid class="py-0">
                      <v-row class="ma-0" style="height: 100%;" align="center">
                        <v-col class="text-center py-0">
                          <span class="white--text d-block atraccion-titulo">{{atraccion.name}}</span>
                          <span class="white--text atraccion-descripcion">{{atraccion.description}}</span>
                        </v-col>
                      </v-row>
                    </v-container>
                  </div>
                </v-img>
              </v-hover>
            </v-col>
          </template>
        </v-row>
      </v-container>

      <v-container fluid id="mapa" style="background-color: #FF00EA;">
        <v-row>
          <v-col class="px-0 text-right">
            <v-img src="../assets/img/titulos/MAPA.svg" max-height="137" contain position="right"></v-img>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="px-0">
            <v-img :src="'https://luztopiacms.actstudio.xyz/'+home.mapa.path" class="d-none d-md-flex"></v-img>
            <v-img :src="'https://luztopiacms.actstudio.xyz/'+home.mapaMovil.path" class="d-md-none"></v-img>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="px-0 py-0">
            <v-img :src="'https://luztopiacms.actstudio.xyz/'+home.iconosMapaDesktop.path" class="d-none d-md-flex"></v-img>
            <v-img :src="'https://luztopiacms.actstudio.xyz/'+home.iconosMapaMovil.path" class="d-md-none"></v-img>
          </v-col>
        </v-row>
      </v-container>

      <v-container fluid id="patrocinadores" style="background-color: #0A0CFA;">
        <v-row>
          <v-col class="py-0 px-0">
            <v-img src="../assets/img/titulos/patrocinadores.svg" max-height="137" contain position="left"></v-img>
          </v-col>
        </v-row>
      </v-container>

      <div style="background-color: #0A0CFA;">
        <v-container>
          <v-row align="center" class="py-12">

            <template v-for="(patrocinador, p) in patrocinadores">
              <v-col :key="'sponsor-'+p" cols="6" md="3">
                <v-img :src="'https://luztopiacms.actstudio.xyz/'+patrocinador.image.path" :contain="true" max-width="60%" class="mx-auto" aspect-ratio="1"></v-img>
              </v-col>
            </template>
          </v-row>
        </v-container>
      </div>

      <v-container fluid id="consejo" style="background-color: #0A0CFA;">
        <v-row>
          <v-col class="py-0 px-0 text-right">
            <v-img src="../assets/img/titulos/CONSEJO.svg" max-height="137" contain position="right"></v-img>
          </v-col>
        </v-row>
      </v-container>
      <div style="background-color: #0A0CFA;">
        <v-container>
          <v-row align="center" class="py-12">
            <template v-for="(consejero,c) in consejo">
              <v-col :key="'consejero-'+c" cols="6" md="3">
                <v-img :src="'https://luztopiacms.actstudio.xyz/'+consejero.image.path" :contain="true" max-width="60%" class="mx-auto" aspect-ratio="1"></v-img>
              </v-col>
            </template>
          </v-row>
        </v-container>
      </div>

      <v-container fluid id="boletos">
        <v-row>
          <v-col class="px-0 py-0">
            <template v-if="home.videoBoletos.video">
              <video :src="'https://luztopiacms.actstudio.xyz/storage/uploads'+home.videoBoletos.path" autoplay muted loop playsinline class="d-none d-md-inline"></video>
            </template>
            <template v-if="home.videoBoletos.image">
              <v-img :src="'https://luztopiacms.actstudio.xyz/storage/uploads'+home.videoBoletos.path" class="d-none d-md-flex" height="100vh"></v-img>
            </template>
            <template v-if="home.videoBoletosMovil.video">
              <video :src="'https://luztopiacms.actstudio.xyz/storage/uploads'+home.videoBoletosMovil.path" autoplay muted loop playsinline class="d-md-none"></video>
            </template>
            <template v-if="home.videoBoletosMovil.image">
              <v-img :src="'https://luztopiacms.actstudio.xyz/storage/uploads'+home.videoBoletosMovil.path" class="d-md-none" width="100%"></v-img>
            </template>

          </v-col>
        </v-row>
      </v-container>

      <v-container fluid class="py-0">
        <v-row>
          <v-col class="px-0 py-0">
            <v-img :src="'https://luztopiacms.actstudio.xyz/'+home.footerImage.path" width="100%" class="d-none d-md-flex"></v-img>
            <v-img :src="'https://luztopiacms.actstudio.xyz/'+home.footerImageMovil.path" width="100%" class="d-md-none"></v-img>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      patrocinadores: [],
      consejo: [],
      atracciones: [],
      home: {},
      loaded: false,
      dialog: false,
      popup: {
      },
      terms: {
      }
    }
  },
  computed: {
    terminos: function () {
      return (this.$route.name === 'TerminosYCondiciones')
    }
  },
  components: {
  },
  beforeCreate: function () {
    var aux = this
    fetch('https://www.luztopiacms.actstudio.xyz/api/collections/get/Patrocinadores', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sort: { _o: 1 },
        populate: 1 // resolve linked collection items
      })
    })
      .then(res => res.json())
      .then(function (res) {
        aux.patrocinadores = res.entries
      })

    fetch('https://www.luztopiacms.actstudio.xyz/api/collections/get/Consejo', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sort: { _o: 1 },
        populate: 1 // resolve linked collection items
      })
    })
      .then(res => res.json())
      .then(function (res) {
        aux.consejo = res.entries
      })

    fetch('https://www.luztopiacms.actstudio.xyz/api/collections/get/Atracciones', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sort: { _o: 1 },
        populate: 1 // resolve linked collection items
      })
    })
      .then(res => res.json())
      .then(function (res) {
        aux.atracciones = res.entries
      })

    fetch('https://www.luztopiacms.actstudio.xyz/api/singletons/get/Home')
      .then(data => data.json())
      .then(function (data) {
        aux.home = data
        aux.loaded = true
      })

    fetch('https://www.luztopiacms.actstudio.xyz/api/singletons/get/Terminos')
      .then(data => data.json())
      .then(function (data) {
        aux.terms = data
      })

    fetch('https://www.luztopiacms.actstudio.xyz/api/singletons/get/Popup')
      .then(data => data.json())
      .then(function (data) {
        aux.popup = data
        aux.dialog = aux.popup.active
      })
  }
}
</script>

<style lang="scss">
  h2{
    color: white;
    font-size: 141px
  }

  @media screen and (min-width: 960px){
    video{
      width: 100%;
      height: calc(100vh - 59px);
      object-fit: cover;
    }
  }

  @media screen and (max-width: 959px){
    video{
      width: 100%;
    }
  }

  .atraccion-titulo{
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 48px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: -1px;

    @media screen and (max-width: 599px){
      font-size: 26px;
      line-height: 1;
    }
  }

  .atraccion-descripcion{
    font-family: 'Roboto Condensed', sans-serif;
    text-transform: uppercase;
    font-size: 18px;
    @media screen and (max-width: 599px){
      margin-top: 10px;
      font-size: 10px;
      line-height: 1.2;
      display: block;
    }
  }
</style>
