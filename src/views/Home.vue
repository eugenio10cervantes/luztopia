<template>
  <div class="home">
    <template v-if="loaded">
      <v-container fluid class="intro py-0">
        <v-row>
          <v-col class="px-0 py-0">
            <video :src="'http://luztopiacms.actstudio.xyz/storage/uploads'+home.cover.path" autoplay muted loop class="d-none d-md-inline"></video>
            <video :src="'http://luztopiacms.actstudio.xyz/storage/uploads'+home.coverMovil.path" autoplay muted loop class="d-md-none"></video>
          </v-col>
        </v-row>
      </v-container>

      <v-container fluid class="atracciones" style="background-color: #FF00EA;">
        <v-row>
          <v-col class="px-0">
            <v-img src="../assets/img/titulos/ATRACCIONES.svg" max-height="137" contain position="left"></v-img>
          </v-col>
        </v-row>
        <v-row>
          <template v-for="(atraccion, a) in atracciones">
            <v-col :key="'atracciones-'+a" cols="6" md="4" class="px-0 py-0">
              <v-hover v-slot="{ hover }">
                <v-img :src="'http://luztopiacms.actstudio.xyz/'+atraccion.image.path" style="height: 100%">
                  <div class="d-flex" v-if="hover" style="height: 100%; background-color: #FF00EA;">
                    <v-container fluid class="py-0">
                      <v-row class="ma-0" style="height: 100%;" align="center">
                        <v-col class="text-center py-0">
                          <span class="white--text d-block">{{atraccion.name}}</span>
                          <span class="white--text">{{atraccion.description}}</span>
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

      <v-container fluid class="mapa" style="background-color: #FF00EA;">
        <v-row>
          <v-col class="px-0 text-right">
            <v-img src="../assets/img/titulos/MAPA.svg" max-height="137" contain position="right"></v-img>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="px-0">
            <v-img :src="'http://luztopiacms.actstudio.xyz/'+home.mapa.path"></v-img>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="px-0 py-0">
            <v-img :src="'http://luztopiacms.actstudio.xyz/'+home.iconosMapaDesktop.path"></v-img>
          </v-col>
        </v-row>
      </v-container>

      <v-container fluid class="patrocinadores" style="background-color: #0A0CFA;">
        <v-row>
          <v-col class="py-0 px-0">
            <v-img src="../assets/img/titulos/patrocinadores.svg" max-height="137" contain position="left"></v-img>
          </v-col>
        </v-row>

        <v-row justify="center" align="center" class="py-12">

          <template v-for="(patrocinador, p) in patrocinadores">
            <v-col :key="'sponsor-'+p" cols="auto">
              <v-img :src="'http://luztopiacms.actstudio.xyz/'+patrocinador.image.path" :contain="true" max-width="131px"></v-img>
            </v-col>
          </template>
        </v-row>
      </v-container>

      <v-container fluid class="conseko" style="background-color: #0A0CFA;">
        <v-row>
          <v-col class="py-0 px-0 text-right">
            <v-img src="../assets/img/titulos/CONSEJO.svg" max-height="137" contain position="right"></v-img>
          </v-col>
        </v-row>
        <v-row justify="center" align="center" class="py-12">
          <template v-for="(consejero,c) in consejo">
            <v-col :key="'consejero-'+c" cols="auto">
              <v-img :src="'http://luztopiacms.actstudio.xyz/'+consejero.image.path" :contain="true" max-width="131px"></v-img>
            </v-col>
          </template>
        </v-row>
      </v-container>

      <v-container fluid class="boletos">
        <v-row>
          <v-col class="px-0 py-0">
            <video :src="'http://luztopiacms.actstudio.xyz/storage/uploads'+home.videoBoletos.path" autoplay muted loop></video>
          </v-col>
        </v-row>
      </v-container>

      <v-container fluid class="py-0">
        <v-row>
          <v-col class="px-0 py-0">
            <v-img src="../assets/img/FOOTER.svg" width="100%"></v-img>
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
      loaded: false
    }
  },
  components: {
  },
  beforeCreate: function () {
    var aux = this
    fetch('http://www.luztopiacms.actstudio.xyz/api/collections/get/Patrocinadores', {
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

    fetch('http://www.luztopiacms.actstudio.xyz/api/collections/get/Consejo', {
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

    fetch('http://www.luztopiacms.actstudio.xyz/api/collections/get/Atracciones', {
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

    fetch('http://www.luztopiacms.actstudio.xyz/api/singletons/get/Home')
      .then(data => data.json())
      .then(function (data) {
        aux.home = data
        aux.loaded = true
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
</style>
