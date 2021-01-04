<template>
  <div class="home">
    <v-container fluid class="intro py-0">
      <v-row>
        <v-col class="px-0 py-0">
          <video src="../assets/video/intro.mp4" style="width: 100%; height: calc(100vh - 59px); object-fit: cover;" autoplay muted loop></video>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="atracciones" style="background-color: #FF00EA;">
      <v-row>
        <v-col class="px-0">
          <h2>ATRACCIONES</h2>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="mapa" style="background-color: #FF00EA;">
      <v-row>
        <v-col class="px-0 text-right">
          <h2>MAPA</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="px-0">
          <v-img src="../assets/img/mapa-luztopia.png"></v-img>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="px-0 py-0">
          <v-img src="../assets/img/mapa-luz-icono-desk.png"></v-img>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="patrocinadores" style="background-color: #0A0CFA;">
      <v-row>
        <v-col class="py-0 px-0">
          <h2>PATROCINADORES</h2>
        </v-col>
      </v-row>

      <v-row justify="center" align="center" class="py-12">
        <v-col cols="auto">
          <v-img src="../assets/img/patrocinadores/luztopia-cocacola.png" :contain="true" max-width="131px"></v-img>
        </v-col>
        <v-col cols="auto">
          <v-img src="../assets/img/patrocinadores/luztopia-lth.png" :contain="true" max-width="131px"></v-img>
        </v-col>
        <v-col cols="auto">
          <v-img src="../assets/img/patrocinadores/luztopia-lamosa.png" :contain="true" max-width="131px"></v-img>
        </v-col>
        <v-col cols="auto">
          <v-img src="../assets/img/patrocinadores/luztopia-cemex.png" :contain="true" max-width="131px"></v-img>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="conseko" style="background-color: #0A0CFA;">
      <v-row>
        <v-col class="py-0 px-0 text-right">
          <h2>CONSEJO</h2>
        </v-col>
      </v-row>
      <v-row justify="center" align="center" class="py-12">
        <v-col cols="auto">
          <v-img src="../assets/img/consejo/luztopia-nuevoleon.png" :contain="true" max-width="131px"></v-img>
        </v-col>
        <v-col cols="auto">
          <v-img src="../assets/img/consejo/luztopia-fundidora.png" :contain="true" max-width="131px"></v-img>
        </v-col>
        <v-col cols="auto">
          <v-img src="../assets/img/consejo/luztopia-monterrey.png" :contain="true" max-width="131px"></v-img>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="boletos">
      <v-row>
        <v-col class="px-0 py-0">
          <video src="../assets/video/LUZTOPIA-BOLETOS.mp4" style="width: 100%; height: calc(100vh - 59px); object-fit: cover;" autoplay muted loop></video>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid class="py-0">
      <v-row>
        <v-col class="px-0 py-0">
          <v-img src="../assets/img/FOOTER.svg" width="100%"></v-img>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          NEEEWW----
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style lang="scss">
  h2{
    color: white;
    font-size: 141px
  }
</style>
