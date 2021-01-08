<template>
  <div class="home">
    <template v-if="loaded">

      <template v-if="dialog">
        <v-dialog
          v-model="dialog"
          max-width="900"
        >
          <v-card>
            <v-card-text class="pa-0">
              <v-img :src="'https://luztopiacms.actstudio.xyz/'+popup.imagen.path"></v-img>
              <!-- <v-img src="../assets/img/FOOTER.svg"></v-img> -->
            </v-card-text>
          </v-card>
        </v-dialog>
      </template>

      <v-container fluid class="intro py-0">
        <v-row>
          <v-col class="px-0 py-0">
            <video :src="'https://luztopiacms.actstudio.xyz/storage/uploads'+home.cover.path" autoplay muted loop playsinline class="d-none d-md-inline"></video>
            <video :src="'https://luztopiacms.actstudio.xyz/storage/uploads'+home.cover.path" autoplay muted loop playsinline class="d-md-none"></video>
          </v-col>
        </v-row>
      </v-container>

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
            <v-img :src="'https://luztopiacms.actstudio.xyz/'+home.mapa.path"></v-img>
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
            <video :src="'https://luztopiacms.actstudio.xyz/storage/uploads'+home.videoBoletos.path" autoplay muted loop playsinline></video>
          </v-col>
        </v-row>
      </v-container>

      <v-container fluid class="py-0">
        <v-row>
          <v-col class="px-0 py-0">
            <v-img :src="'https://luztopiacms.actstudio.xyz/'+home.footerImage.path" width="100%"></v-img>
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
      }
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
