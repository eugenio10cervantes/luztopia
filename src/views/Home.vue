<template>
  <div class="home">
    <template v-if="loaded">
      <template v-if="dialog">
        <v-dialog v-model="dialog" max-width="900">
          <v-card class="text-right">
            <div style="position: absolute; top: 0px; z-index: 1; right: 0px">
              <v-btn icon :ripple="false" @click="dialog = false">
                <v-icon color="white">mdi-close</v-icon>
              </v-btn>
            </div>
            <v-card-text class="pa-0">
              <v-img
                :src="'https://luztopiacms.actstudio.xyz/' + popup.imagen.path"
              ></v-img>
              <!-- <v-img src="../assets/img/FOOTER.svg"></v-img> -->
            </v-card-text>
          </v-card>
        </v-dialog>
      </template>

      <template v-if="$route.name == 'TerminosYCondiciones'">
        <v-dialog v-model="terminos" max-width="900" persistent>
          <v-card class="text-right">
            <div style="position: sticky; top: 0px; z-index: 1; right: 0px">
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
              <video
                :src="
                  'https://luztopiacms.actstudio.xyz/storage/uploads' +
                  home.cover.path
                "
                autoplay
                muted
                loop
                playsinline
                class="d-none d-md-inline"
              ></video>
            </template>
            <template v-if="home.cover.image">
              <v-img
                :src="
                  'https://luztopiacms.actstudio.xyz/storage/uploads' +
                  home.cover.path
                "
                width="100%"
                height="calc(100vh - 64px)"
                class="d-none d-lg-flex"
                position="center bottom"
              ></v-img>
              <v-img
                :src="
                  'https://luztopiacms.actstudio.xyz/storage/uploads' +
                  home.cover.path
                "
                width="100%"
                class="d-none d-md-flex d-lg-none"
                position="center bottom"
                contain
              ></v-img>
            </template>

            <template v-if="home.coverMovil.video">
              <video
                :src="
                  'https://luztopiacms.actstudio.xyz/storage/uploads' +
                  home.coverMovil.path
                "
                autoplay
                muted
                loop
                playsinline
                class="d-md-none"
                style="width: 100%"
              ></video>
            </template>

            <template v-if="home.coverMovil.image">
              <v-img
                :src="
                  'https://luztopiacms.actstudio.xyz/storage/uploads' +
                  home.coverMovil.path
                "
                width="100%"
                class="d-md-none"
                contain
              ></v-img>
            </template>
          </v-col>
        </v-row>
      </v-container>

      <div class="teaser" style="position: relative; background-color: black">
        <v-container fluid class="py-0">
          <v-row>
            <v-col class="py-0 px-0">
              <video
                id="teaser"
                src="../assets/video/LUZTOPIA_2012-720.mp4"
                style="width: 100%; object-fit: contain"
                @ended="
                  rewind();
                  isPlaying = false;
                "
                @click="pauseVideo()"
              ></video>
            </v-col>
          </v-row>
        </v-container>
        <template v-if="!isPlaying">
          <v-img
            src="@/assets/video/luztopia-cover-video.jpg"
            height="100%"
            width="100%"
            style="position: absolute; top: 0; left: 0"
            class="cover-lutopia"
          ></v-img>
          <div
            style="
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translateX(-50%) translateY(-50%);
            "
            class="text-center play-container"
          >
            <span class="d-block white--text titulo"> #ENCIENDETULUZ </span>
            <v-btn icon color="white" @click="playVideo">
              <v-img src="@/assets/video/PLAY.svg" class="play-video"></v-img>
            </v-btn>
          </div>
        </template>
      </div>

      <div id="informacion" style="overflow: hidden; position: relative; background-color: #1cec17">
        <v-container fluid class="py-0">
          <v-row class="my-0" align-sm="center">
            <v-col
              cols="12"
              sm="6"
              class="pt-0 pb-12"
              style="background-color: #1cec17; height: 100%"
              order="1"
              order-sm="0"
            >
              <v-row style="min-height: 100vh" align="start">
                <v-col>
                  <v-row>
                    <v-col>
                      <h2 class="titulo pt-3 pt-sm-0 mt-4">INFO</h2>
                    </v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col cols="10" sm="8">
                      <span class="d-block color-rosa subtitulo"
                        >NUEVA EDICIÓN:</span
                      >
                      <span class="d-block white--text texto-corrido-enfasis"
                        >NAVIDAD EN EL ESPACIO</span
                      >

                      <span class="d-block color-rosa subtitulo mt-3"
                        >FECHAS:</span
                      >
                      <span class="d-block white--text texto-corrido-enfasis"
                        >18 DE NOVIEMBRE DE 2021</span
                      >
                      <span class="d-block white--text texto-corrido-enfasis"
                        >AL 16 DE ENERO DE 2022</span
                      >
                      <span class="d-block white--text texto-corrido"
                        >(Abierto todos los días excepto 24 y 31 de dic)</span
                      >

                      <span class="d-block color-rosa subtitulo bold mt-3"
                        >HORARIO:</span
                      >
                      <span class="d-block white--text texto-corrido-enfasis"
                        >4pm - 11pm</span
                      >
                      <span class="d-block white--text texto-corrido"
                        >(Encendido de luces: 6pm)</span
                      >

                      <span class="d-block color-rosa subtitulo bold mt-3"
                        >LUGAR:</span
                      >
                      <span class="d-block white--text texto-corrido-enfasis"
                        >PARQUE FUNDIDORA, PASEO SANTA LUCÍA</span
                      >
                      <span class="d-block white--text texto-corrido"
                        >Av. Fundidora y Adolfo Prieto, Col. Obrera,</span
                      >
                      <span class="d-block white--text texto-corrido"
                        >Monterrey, Nuevo León, México, CP 64010</span
                      >

                      <span class="d-block color-rosa subtitulo bold mt-3"
                        >ACCESOS:</span
                      >
                      <span class="d-block white--text texto-corrido"
                        >A1 - Av. Fundidora</span
                      >
                      <span class="d-block white--text texto-corrido"
                        >A8 - Calle Gregorio Torres</span
                      >
                      <span class="d-block white--text texto-corrido"
                        >A9 - Santa Lucía, Calle Félix U. Gómez</span
                      >
                      <span class="d-block white--text texto-corrido"
                        >A10 - Fundidora, Calle Aramberri</span
                      >

                      <span class="d-block color-rosa subtitulo bold mt-3"
                        >ESTACIONAMIENTOS RECOMENDADOS:</span
                      >
                      <span class="d-block white--text texto-corrido"
                        >E10 - Fundidora, Calle Aramberri</span
                      >
                      <span class="d-block white--text texto-corrido"
                        >E Salón de la Fama del Beisbol - Calle Gregorio
                        Torres</span
                      >

                      <v-btn
                        color="#E62AD0"
                        elevation="0"
                        tile
                        class="white--text mt-3 futura-bold"
                        style="letter-spacing: 0"
                        :ripple="false"
                        href="https://goo.gl/maps/4mg9FQsd1Ljr9x1K7"
                        >VER UBICACIÓN</v-btn
                      >
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              class="py-12 px-0 py-sm-0 text-center"
              order="0"
              order-sm="1"
            >
              <span class="enfasis d-inline-block py-5 py-sm-0 color-rosa">¡VISITA EL FESTIVAL DE LUCES NAVIDEÑAS MÁS GRANDE DE MÉXICO!</span>
            </v-col>
          </v-row>
        </v-container>
      </div>

      <v-container fluid id="atracciones" style="background-color: #e62ad0">
        <v-row>
          <v-col class="px-0">
            <!-- <v-img src="../assets/img/titulos/ATRACCIONES.svg" max-height="137" contain position="left"></v-img> -->

            <h2 class="titulo">ATRACCIONES</h2>
          </v-col>
        </v-row>
        <v-row>
          <template v-for="(atraccion, a) in atracciones">
            <v-col :key="'atracciones-' + a" cols="6" md="4" class="px-0 py-0">
              <template v-if="atraccion.removeHover">
                <v-img
                  :src="
                    'https://luztopiacms.actstudio.xyz/' + atraccion.image.path
                  "
                  style="height: 100%"
                >
                </v-img>
              </template>
              <template v-else>
                <v-hover v-slot="{ hover }">
                  <v-img
                    :src="
                      'https://luztopiacms.actstudio.xyz/' +
                      atraccion.image.path
                    "
                    style="height: 100%"
                  >
                    <div
                      class="d-flex"
                      v-if="hover"
                      style="
                        height: 100%;
                        background-color: rgba(255, 0, 234, 0.8);
                      "
                    >
                      <v-container fluid class="py-0">
                        <v-row class="ma-0" style="height: 100%" align="center">
                          <v-col class="text-center py-0">
                            <span
                              class="white--text d-block atraccion-titulo"
                              >{{ atraccion.name }}</span
                            >
                            <span class="white--text atraccion-descripcion">{{
                              atraccion.description
                            }}</span>
                          </v-col>
                        </v-row>
                      </v-container>
                    </div>
                  </v-img>
                </v-hover>
              </template>
            </v-col>
          </template>
        </v-row>
      </v-container>

      <v-container fluid id="boletos">
        <v-row>
          <v-col class="px-0 py-0">
            <template v-if="home.videoBoletos.video">
              <video
                :src="
                  'https://luztopiacms.actstudio.xyz/storage/uploads' +
                  home.videoBoletos.path
                "
                autoplay
                muted
                loop
                playsinline
                class="d-none d-md-inline"
              ></video>
            </template>
            <template v-if="home.videoBoletos.image">
              <v-img
                :src="
                  'https://luztopiacms.actstudio.xyz/storage/uploads' +
                  home.videoBoletos.path
                "
                class="d-none d-md-flex"
                height="100vh"
              ></v-img>
            </template>
            <template v-if="home.videoBoletosMovil.video">
              <video
                :src="
                  'https://luztopiacms.actstudio.xyz/storage/uploads' +
                  home.videoBoletosMovil.path
                "
                autoplay
                muted
                loop
                playsinline
                class="d-md-none"
              ></video>
            </template>
            <template v-if="home.videoBoletosMovil.image">
              <v-img
                :src="
                  'https://luztopiacms.actstudio.xyz/storage/uploads' +
                  home.videoBoletosMovil.path
                "
                class="d-md-none"
                width="100%"
              ></v-img>
            </template>
          </v-col>
        </v-row>
      </v-container>

      <v-container fluid id="mapa" style="background-color: #e62ad0">
        <v-row>
          <v-col class="px-0 text-right">
            <!-- <v-img src="../assets/img/titulos/MAPA.svg" max-height="137" contain position="right"></v-img> -->
            <h2 class="titulo">MAPA</h2>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="px-0">
            <v-img
              :src="'https://luztopiacms.actstudio.xyz/' + home.mapa.path"
              class="d-none d-md-flex"
            ></v-img>
            <v-img
              :src="'https://luztopiacms.actstudio.xyz/' + home.mapaMovil.path"
              class="d-md-none"
            ></v-img>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="px-0 py-0">
            <v-img
              :src="
                'https://luztopiacms.actstudio.xyz/' +
                home.iconosMapaDesktop.path
              "
              class="d-none d-md-flex"
            ></v-img>
            <v-img
              :src="
                'https://luztopiacms.actstudio.xyz/' + home.iconosMapaMovil.path
              "
              class="d-md-none"
            ></v-img>
          </v-col>
        </v-row>
      </v-container>

      <v-container id="faq" fluid style="background-color: #1cec17">
        <v-row>
          <v-col class="text-right">
            <h2 class="titulo">FAQs</h2>
          </v-col>
        </v-row>

        <v-container>
          <v-row class="mb-12 pb-12" style="line-height: 1.1">
            <v-col cols="12" sm="4" class="white--text">
              <h3 class="texto-corrido-enfasis">
                ¿Qué <span class="color-rosa">SI</span> puedo llevar?
              </h3>
              <ul class="lista-faq">
                <li>Carreola estándar</li>
                <li>Silla de ruedas</li>
                <li>Bolsa y/o mochila estándar</li>
                <li>Cámara</li>
                <li>Selfie stick</li>
                <li>Paraguas</li>
                <li>Sombrero</li>
                <li>Botella de agua</li>
                <li>Alimentos y bebidas para bebé</li>
                <li>Patines</li>
                <li>Perros de servicio</li>
              </ul>
            </v-col>
            <v-col cols="12" sm="4" class="white--text">
              <h3 class="texto-corrido-enfasis">
                ¿Qué <span class="color-rosa">NO</span> puedo llevar?
              </h3>
              <ul class="lista-faq">
                <li>Armas de fuego o punzacortantes</li>
                <li>Alimentos</li>
                <li>Bebidas (excepto agua)</li>
                <li>Sustancias ilegales o flamables</li>
                <li>Pintura en aerosol, marcadores</li>
                <li>Bicicleta, patineta, scooter</li>
                <li>Mascotas</li>
                <li>Pirotecnia</li>
                <li>Displays publicitarios</li>
                <li>Tripiés</li>
                <li>Drones</li>
              </ul>
            </v-col>
            <v-col cols="12" sm="4" class="white--text texto-corrido-medium">
              <h3 class="color-rosa texto-corrido">
                ¿Está preparado el evento para personas con discapacidad?
              </h3>
              Sí.

              <h3 class="mt-3 color-rosa texto-corrido">
                ¿Rentan sillas de ruedas?
              </h3>
              Sí, cantidad limitada, sujeto a disponibilidad.

              <h3 class="mt-3 color-rosa texto-corrido">
                ¿Puedo accesar con mascotas?
              </h3>
              No está permitido el acceso con mascotas. Solo se permite el
              acceso con perros de servicio con su arnés y se debe de presentar
              una carta médica en el acceso.

              <h3 class="mt-3 color-rosa texto-corrido">
                ¿Los niños pagan boleto?
              </h3>
              Niños menores de 3 años no pagan.

              <h3 class="mt-3 color-rosa texto-corrido">
                ¿Aceptan pago con tarjeta?
              </h3>
              Sí, tanto en la venta de boletos online como en taquilla se
              aceptan pagos con tarjeta de débito o crédito, Visa o Mastercard.
              No se acepta American Express.

              <h3 class="mt-3 color-rosa texto-corrido">
                ¿Puedo ir al Paseo Santa Lucía sin entrar a Luztopía?
              </h3>
              Sí, puedes transitar con facilidad por los corredores externos.

              <h3 class="mt-3 color-rosa texto-corrido">
                ¿Aplicarán acciones de prevención Covid-19?
              </h3>
              Sí, en Luztopía estamos conscientes de la importancia de la prevención en esta contingencia ocasionada por el COVID-19; lo más importante es la salud y bienestar de nuestros visitantes y comunidad, por ello, tomaremos las medidas necesarias y sugeridas al momento por la Secretaría de Salud NL.

            </v-col>
          </v-row>
        </v-container>
      </v-container>

      <v-container fluid id="patrocinadores" style="background-color: #e62ad0">
        <v-row>
          <v-col class="py-sm-0 py-0 pt-12 px-0">
            <!-- <v-img src="../assets/img/titulos/patrocinadores.svg" max-height="137" contain position="left"></v-img> -->
            <h2 class="titulo mt-4">PATROCINADORES Y ALIADOS</h2>
          </v-col>
        </v-row>
      </v-container>

      <div style="background-color: #e62ad0">
        <v-container>
          <v-row align="center" class="py-12">
            <template v-for="(patrocinador, p) in patrocinadores">
              <v-col :key="'sponsor-' + p" cols="6" md="2" class="py-0 px-0">
                <v-img
                  :src="
                    'https://luztopiacms.actstudio.xyz/' +
                    patrocinador.image.path
                  "
                  :contain="true"
                  max-width="90%"
                  class="mx-auto"
                ></v-img>
              </v-col>
            </template>
          </v-row>
          <v-row>
            <v-col>
              <hr />
            </v-col>
          </v-row>
          <v-row align="center" class="py-12">
            <template v-for="(consejero, c) in consejo">
              <v-col :key="'consejero-' + c" cols="6" md="2" class="py-0 px-0">
                <v-img
                  :src="
                    'https://luztopiacms.actstudio.xyz/' + consejero.image.path
                  "
                  :contain="true"
                  max-width="90%"
                  class="mx-auto"
                ></v-img>
              </v-col>
            </template>
          </v-row>
          <!-- <v-row class="mb-12 pb-12">
            <v-col class="text-center">
              <span class="d-block color-rosa texto-corrido mb-4">
                ¡SUMATE AL EQUIPO!
              </span>
              <a class=" enfasis white--text" href="mailto:patrocinios@luztopia.mx">PATROCINIOS@LUZTOPIA.MX</a>
            </v-col>
          </v-row> -->
        </v-container>
      </div>

      <!-- <v-container fluid id="consejo" style="background-color: #0A0CFA;">
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
      </div> -->
      <div id="comunidad">
        <div class="d-none d-sm-block">
          <v-container fluid style="background-color: #0a0cfa">
            <v-row>
              <v-col class="text-right">
                <h2 class="titulo mt-4">COMUNIDAD</h2>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="3" class="px-0 text-center">
                <v-img
                  src="../assets/img/1-atraxiondevanguardia-LUZTOPIA.jpg"
                  aspect-ratio="1"
                ></v-img>
                <span class="texto-corrido d-block color-rosa mt-3"
                  >OFRECER UNA ATRACCIÓN</span
                >
                <span class="texto-corrido d-block color-rosa mb-3"
                  >NAVIDEÑA DE VANGUARDIA</span
                >
              </v-col>
              <v-col cols="3" class="px-0 text-center">
                <v-img
                  src="../assets/img/3-turismo-LUZTOPIA.jpg"
                  aspect-ratio="1"
                ></v-img>
                <span class="texto-corrido d-block color-rosa mt-3"
                  >ATRAER EL TURISMO</span
                >
              </v-col>
              <v-col cols="3" class="px-0 text-center">
                <v-img
                  src="../assets/img/2-convivenciasana-LUZTOPIA.jpg"
                  aspect-ratio="1"
                ></v-img>
                <span class="texto-corrido d-block color-rosa mt-3"
                  >FOMENTAR LA CONVIVENCIA</span
                >
                <span class="texto-corrido d-block color-rosa mb-3"
                  >SANA ENTRE LA COMUNIDAD</span
                >
              </v-col>
              <v-col cols="3" class="px-0 text-center">
                <v-img
                  src="../assets/img/4-actividadeconomica-LUZTOPIA.jpg"
                  aspect-ratio="1"
                ></v-img>
                <span class="texto-corrido d-block color-rosa mt-3"
                  >IMPULSAR LA ACTIVIDAD</span
                >
                <span class="texto-corrido d-block color-rosa mb-3"
                  >ECONÓMICA</span
                >
              </v-col>
            </v-row>
          </v-container>
        </div>

        <div class="d-sm-none">
          <v-container fluid style="background-color: #0a0cfa">
            <v-row>
              <v-col class="text-right">
                <h2 class="titulo mt-4">COMUNIDAD</h2>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" class="pa-0">
                <v-carousel hide-delimiters :show-arrows="false" cycle interval="3000">
                  <v-carousel-item>
                    <v-card color="transparent" elevation="0" tile class="text-center">
                      <v-img
                        src="../assets/img/1-atraxiondevanguardia-LUZTOPIA.jpg"
                        aspect-ratio="1"
                      ></v-img>
                      <span class="texto-corrido rewrite-in-sm d-block color-rosa mt-3"
                        >OFRECER UNA ATRACCIÓN</span
                      >
                      <span class="texto-corrido rewrite-in-sm d-block color-rosa mb-3"
                        >NAVIDEÑA DE VANGUARDIA</span
                      >
                    </v-card>
                  </v-carousel-item>
                  <v-carousel-item>
                    <v-card color="transparent" elevation="0" tile class="text-center">
                      <v-img
                        src="../assets/img/2-convivenciasana-LUZTOPIA.jpg"
                        aspect-ratio="1"
                      ></v-img>
                      <span class="texto-corrido rewrite-in-sm d-block color-rosa mt-3"
                        >FOMENTAR LA CONVIVENCIA</span
                      >
                      <span class="texto-corrido rewrite-in-sm d-block color-rosa mb-3"
                        >SANA ENTRE LA COMUNIDAD</span
                      >
                    </v-card>
                  </v-carousel-item>
                  <v-carousel-item>
                    <v-card color="transparent" elevation="0" tile class="text-center">
                      <v-img
                        src="../assets/img/3-turismo-LUZTOPIA.jpg"
                        aspect-ratio="1"
                      ></v-img>
                      <span class="texto-corrido rewrite-in-sm d-block color-rosa mt-3"
                        >ATRAER EL TURISMO</span
                      >
                    </v-card>
                  </v-carousel-item>
                  <v-carousel-item>
                    <v-card color="transparent" elevation="0" tile class="text-center">
                      <v-img
                        src="../assets/img/4-actividadeconomica-LUZTOPIA.jpg"
                        aspect-ratio="1"
                      ></v-img>
                      <span class="texto-corrido rewrite-in-sm d-block color-rosa mt-3"
                        >IMPULSAR LA ACTIVIDAD</span
                      >
                      <span class="texto-corrido rewrite-in-sm d-block color-rosa mb-3"
                        >ECONÓMICA</span
                      >
                    </v-card>
                  </v-carousel-item>
                </v-carousel>
              </v-col>

              <!-- <v-col cols="3" class="px-0 text-center">
                <v-img
                  src="../assets/img/1-atraxiondevanguardia-LUZTOPIA.jpg"
                  aspect-ratio="1"
                ></v-img>
                <span class="texto-corrido d-block color-rosa mt-3"
                  >OFRECER UNA ATRACCIÓN</span
                >
                <span class="texto-corrido d-block color-rosa mb-3"
                  >NAVIDEÑA DE VANGUARDIA</span
                >
              </v-col>
              <v-col cols="3" class="px-0 text-center">
                <v-img
                  src="../assets/img/2-convivenciasana-LUZTOPIA.jpg"
                  aspect-ratio="1"
                ></v-img>
                <span class="texto-corrido d-block color-rosa mt-3"
                  >FOMENTAR LA CONVIVENCIA</span
                >
                <span class="texto-corrido d-block color-rosa mb-3"
                  >SANA ENTRE LA COMUNIDAD</span
                >
              </v-col>
              <v-col cols="3" class="px-0 text-center">
                <v-img
                  src="../assets/img/3-turismo-LUZTOPIA.jpg"
                  aspect-ratio="1"
                ></v-img>
                <span class="texto-corrido d-block color-rosa mt-3"
                  >ATRAER EL TURISMO</span
                >
              </v-col>
              <v-col cols="3" class="px-0 text-center">
                <v-img
                  src="../assets/img/4-actividadeconomica-LUZTOPIA.jpg"
                  aspect-ratio="1"
                ></v-img>
                <span class="texto-corrido d-block color-rosa mt-3"
                  >IMPULSAR LA ACTIVIDAD</span
                >
                <span class="texto-corrido d-block color-rosa mb-3"
                  >ECONÓMICA</span
                >
              </v-col> -->
            </v-row>
          </v-container>
        </div>
      </div>

      <v-container fluid class="py-12" style="background-color: #0a0cfa">
        <v-container>
          <!-- clúster -->
          <a
            href="https://clusterturismonl.com/"
            target="_blank"
            class="not-text-decoration"
          >
            <v-row align="center" justify="center">
              <v-col cols="12" sm="10" md="6">
                <v-img
                  src="../assets/img/cluster-turismo.png"
                  max-width="316px"
                  height="180"
                  class="mx-auto"
                  :contain="true"
                ></v-img>
                <p class="white--text mx-auto texto-descriptivo-empresas">
                  Asociación Civil sin fin de lucro que agrupa a actores de la
                  iniciativa privada, gobierno y universidades con el objetivo
                  de impulsar la competitividad y la innovación de la industria
                  turística de Nuevo León.
                </p>
              </v-col>
              <v-col cols="12" sm="10" md="6">
                <span class="enfasis white--text d-block">EL FESTIVAL ES</span>
                <span class="enfasis white--text d-block"
                  >PRESENTADO POR EL</span
                >
                <span class="enfasis color-rosa d-block"
                  >CLÚSTER DE TURISMO DE</span
                >
                <span class="enfasis color-rosa d-block">NUEVO LEÓN A.C.</span>
              </v-col>
            </v-row>
          </a>
          <!-- /clúster -->

          <v-row class="my-12">
            <v-col>
              <hr />
            </v-col>
          </v-row>

          <!-- cacao -->
          <a
            href="http://www.cacao.mx/"
            target="_blank"
            class="not-text-decoration"
          >
            <v-row align="center" justify="center">
              <v-col cols="12" sm="10" md="6" class="padding-custom-1">
                <span class="enfasis white--text d-block">EL FESTIVAL ES</span>
                <span class="enfasis white--text d-block">PRODUCIDO POR</span>
                <span class="enfasis color-rosa d-block"
                  >CACAO PRODUCCIONES</span
                >
              </v-col>
              <v-col cols="12" sm="10" md="6" class="padding-custom-2">
                <v-img
                  src="../assets/img/cacao-producciones.png"
                  max-width="297px"
                  height="180"
                  class="mx-auto"
                  :contain="true"
                ></v-img>
                <p class="white--text mx-auto texto-descriptivo-empresas">
                  Agencia orgullosamente mexicana especializada en el diseño y
                  producción de decoración urbana y atracciones de
                  entretenimiento.
                </p>
              </v-col>
            </v-row>
          </a>
          <!-- /cacao -->
        </v-container>
      </v-container>

      <v-container id="footer" fluid style="background-color: #1cec17">
        <v-row align="center" style="min-height: 450px">
          <v-col class="text-center py-12">
            <span class="d-block texto-corrido color-rosa mb-4"
              >CONTACTANOS:</span
            >
            <a
              href="mailto:hola@luztopia.mx"
              class="d-block white--text enfasis"
              >HOLA@LUZTOPIA.MX</a
            >

            <span class="d-block texto-corrido color-rosa mt-6 mb-4"
              >SIGUENOS EN:</span
            >
            <div class="white--text enfasis">
              <a
                href="https://www.instagram.com/luztopia/"
                class="white--text enfasis"
                target="_blank"
                >INSTAGRAM</a
              >
              –
              <a href="https://www.youtube.com/channel/UC8Hi8cyOM5Nw_3nlY21wNQw" class="white--text enfasis" target="_blank"
                >YOUTUBE</a
              >
            </div>
            <div class="white--text enfasis">
              <a
                href="https://www.facebook.com/luztopia"
                class="white--text enfasis"
                target="_blank"
                >FACEBOOK</a
              >
              –
              <a href="https://twitter.com/luztopia" class="white--text enfasis" target="_blank"
                >TWITTER</a
              >
            </div>
          </v-col>
        </v-row>
      </v-container>

      <v-container fluid class="py-0">
        <v-row>
          <v-col class="px-0 py-0">
            <v-img
              :src="
                'https://luztopiacms.actstudio.xyz/' + home.footerImage.path
              "
              width="100%"
              class="d-none d-md-flex"
            ></v-img>
            <v-img
              :src="
                'https://luztopiacms.actstudio.xyz/' +
                home.footerImageMovil.path
              "
              width="100%"
              class="d-md-none"
            ></v-img>
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
      popup: {},
      terms: {},
      isPlaying: false
    }
  },
  computed: {
    terminos: function () {
      return this.$route.name === 'TerminosYCondiciones'
    }
  },
  components: {},
  beforeCreate: function () {
    var aux = this
    fetch(
      'https://www.luztopiacms.actstudio.xyz/api/collections/get/Patrocinadores',
      {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sort: { _o: 1 },
          populate: 1 // resolve linked collection items
        })
      }
    )
      .then((res) => res.json())
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
      .then((res) => res.json())
      .then(function (res) {
        aux.consejo = res.entries
      })

    fetch(
      'https://www.luztopiacms.actstudio.xyz/api/collections/get/Atracciones',
      {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sort: { _o: 1 },
          populate: 1 // resolve linked collection items
        })
      }
    )
      .then((res) => res.json())
      .then(function (res) {
        aux.atracciones = res.entries
      })

    fetch('https://www.luztopiacms.actstudio.xyz/api/singletons/get/Home')
      .then((data) => data.json())
      .then(function (data) {
        aux.home = data
        aux.loaded = true
      })

    fetch('https://www.luztopiacms.actstudio.xyz/api/singletons/get/Terminos')
      .then((data) => data.json())
      .then(function (data) {
        aux.terms = data
      })

    fetch('https://www.luztopiacms.actstudio.xyz/api/singletons/get/Popup')
      .then((data) => data.json())
      .then(function (data) {
        aux.popup = data
        aux.dialog = aux.popup.active
      })
  },
  methods: {
    playVideo: function () {
      var vid = document.getElementById('teaser')
      vid.play()
      this.isPlaying = true
    },
    pauseVideo: function () {
      var vid = document.getElementById('teaser')
      vid.pause()
      this.isPlaying = false
    },
    rewind: function () {
      var vid = document.getElementById('teaser')
      vid.currentTime = 0
    }
  }
}
</script>

<style lang="scss">
h2 {
  color: white;
  font-size: 141px;
}

@media screen and (min-width: 960px) and (max-width: 1263px) {
  video {
    width: 100%;
    object-fit: contain;
  }
}

@media screen and (min-width: 1264px) {
  video {
    width: 100%;
    height: calc(100vh - 59px);
    object-fit: cover;
  }
}

@media screen and (max-width: 959px) {
  video {
    width: 100%;
  }
}

.atraccion-titulo {
  font-family: "Roboto Condensed", sans-serif;
  font-size: 48px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: -1px;
  line-height: 0.8;

  @media screen and (max-width: 599px) {
    font-size: 26px;
    line-height: 1;
  }
}

.atraccion-descripcion {
  font-family: "Roboto Condensed", sans-serif;
  text-transform: uppercase;
  font-size: 18px;
  @media screen and (max-width: 599px) {
    margin-top: 10px;
    font-size: 10px;
    line-height: 1.2;
    display: block;
  }
}

.play-video {
  width: 90px;

  @media screen and(max-width: 599px) {
    width: 30px;
    margin-top: 15px;
  }
}
</style>
