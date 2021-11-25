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
                :src="'' + popup.imagen.path"
              ></v-img>
              <!-- <v-img src="/img/FOOTER.svg"></v-img> -->
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
          <v-col class="px-0 py-0" style="line-height: 0;">
            <template v-if="home.cover.video">
              <video
                :src="
                  '/storage/uploads' +
                  home.cover.path
                "
                autoplay
                muted
                loop
                playsinline
                class="d-none d-md-inline-flex"
              ></video>
            </template>
            <template v-if="home.cover.image">
              <v-img
                :src="
                  '/storage/uploads' +
                  home.cover.path
                "
                width="100%"
                height="calc(100vh - 64px)"
                class="d-none d-lg-flex"
                position="center bottom"
              ></v-img>
              <v-img
                :src="
                  '/storage/uploads' +
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
                  '/storage/uploads' +
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
                  '/storage/uploads' +
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

      <v-container fluid id="boletos" class="pb-12" style="background-color: rgb(10, 12, 250);">
        <v-row>
          <v-col class="px-0 text-right">
            <!-- <v-img src="/img/titulos/MAPA.svg" max-height="137" contain position="right"></v-img> -->
            <h2 class="titulo">BOLETOS</h2>
          </v-col>
        </v-row>
        <v-row class="mb-6">
          <v-col class="px-0 py-0 text-center">
            <v-container>
              <v-row justify="center">
                <v-col cols="12" md="12">
                  <v-btn class="mx-auto my-3" color="#e62ad0" dark :ripple="false" href="https://www.handypass.com/luztopia/2021/" target="_blank" x-large>¡Compra tus boletos! <v-icon size="14" class="ml-3">mdi-open-in-new</v-icon></v-btn>
                </v-col>
                <v-col cols="10" md="4" class="text-center">
                  <a href="https://www.handypass.com/luztopia/2021/" target="_blank">
                    <v-img src="/img/calendario/nov.png" max-width="70%" class="mx-auto"></v-img>
                  </a>
                </v-col>
                <v-col cols="10" md="4">
                  <a href="https://www.handypass.com/luztopia/2021/" target="_blank">
                    <v-img src="/img/calendario/dic.png" max-width="70%" class="mx-auto"></v-img>
                  </a>
                </v-col>
                <v-col cols="10" md="4">
                  <a href="https://www.handypass.com/luztopia/2021/" target="_blank">
                    <v-img src="/img/calendario/ene.png" max-width="70%" class="mx-auto"></v-img>
                  </a>
                </v-col>
                <v-col cols="10">
                  <v-img src="/img/info-boletos.png"></v-img>
                </v-col>
              </v-row>
            </v-container>
          </v-col>
          <v-col class="px-0 py-0" v-if="false">
            <template v-if="home.videoBoletos.video">
              <video
                :src="
                  '/storage/uploads' +
                  home.videoBoletos.path
                "
                autoplay
                muted
                loop
                playsinline
                class="d-none d-md-inline"
                style="height: 100%"
              ></video>
            </template>
            <template v-if="home.videoBoletos.image">
              <v-img
                :src="
                  '/storage/uploads' +
                  home.videoBoletos.path
                "
                class="d-none d-md-flex"
                height="100vh"
              ></v-img>
            </template>
            <template v-if="home.videoBoletosMovil.video">
              <video
                :src="
                  '/storage/uploads' +
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
                  '/storage/uploads' +
                  home.videoBoletosMovil.path
                "
                class="d-md-none"
                width="100%"
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
                src="https://actstudio.mx/LUZTOPIA_2012-720.mp4"
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
                        >5pm - 11pm</span
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
                      <span class="d-block white--text texto-corrido"
                        >-</span
                      >
                      <span class="d-block white--text texto-corrido"
                        >Estación Santa Lucía, Línea 3 Metrorrey, Av. Félix U. Gómez</span
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
          <v-col class="px-0 text-right">
            <!-- <v-img src="/img/titulos/ATRACCIONES.svg" max-height="137" contain position="left"></v-img> -->

            <h2 class="titulo">ATRACCIONES</h2>
          </v-col>
        </v-row>
        <v-row>
          <template v-for="(atraccion, a) in atracciones">
            <v-col :key="'atracciones-' + a" cols="6" md="4" class="px-0 py-0">
              <template v-if="atraccion.removeHover">
                <v-img
                  :src="
                    '' + atraccion.image.path
                  "
                  style="height: 100%"
                >
                </v-img>
              </template>
              <template v-else>
                <v-hover v-slot="{ hover }">
                  <v-img
                    :src="
                      '' +
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

      <v-container fluid id="mapa" style="background-color: #e62ad0">
        <v-row>
          <v-col class="px-0">
            <!-- <v-img src="/img/titulos/MAPA.svg" max-height="137" contain position="right"></v-img> -->
            <h2 class="titulo">MAPA</h2>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="px-0">
            <v-img
              :src="'' + home.mapa.path"
              class="d-none d-md-flex"
            ></v-img>
            <v-img
              :src="'' + home.mapaMovil.path"
              class="d-md-none"
            ></v-img>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="px-0 py-0">
            <v-img
              :src="
                '' +
                home.iconosMapaDesktop.path
              "
              class="d-none d-md-flex"
            ></v-img>
            <v-img
              :src="
                '' + home.iconosMapaMovil.path
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
              <h3 class="mt-6 texto-corrido-enfasis">
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
            <v-col cols="12" sm="4" class="white--text">
              <h3 class="color-rosa texto-corrido">
                ¿Aplicarán acciones de prevención Covid-19?
              </h3>
              Sí. Nos entusiasma saber el avance que ha tenido la vacunación con los ciudadanos, sin embargo, hay que seguir cuidándonos. La salud y bienestar de la comunidad es muy importante para nosotros. Tomaremos las medidas necesarias sugeridas al momento por la Secretaría de Salud NL. Aforo limitado 75%. Uso de cubrebocas obligatorio para todos los visitantes. Embarazadas, niños y personas de la tercera edad sí pueden accesar.

              <h3 class="mt-3 color-rosa texto-corrido">
                ¿Hay descuento de boletos por grupos?
              </h3>
              Sí! En la compra de mínimo 1,000 boletos hay un descuento especial del 10%. Contáctanos en <a href="mailto:hola@luztopia.mx" style="color: white !important;">hola@luztopia.mx</a> para darle seguimiento a tu compra.

              <h3 class="mt-3 color-rosa texto-corrido">
                ¿Está preparado el evento para personas con discapacidad?
              </h3>
              Sí.

              <h3 class="mt-3 color-rosa texto-corrido">
                ¿Rentan sillas de ruedas?
              </h3>
              Sí, cantidad limitada, sujeto a disponibilidad

              <h3 class="mt-3 color-rosa texto-corrido">
                ¿Puedo accesar con mascotas?
              </h3>
              No está permitido el acceso con mascotas. Solo se permite el acceso con perros de servicio con su arnés y se debe presentar una carta médica en el acceso.
            </v-col>
            <v-col cols="12" sm="4" class="white--text texto-corrido-medium">
              <h3 class="color-rosa texto-corrido">
              ¿Los niños pagan boleto?
              </h3>
              Niños menores de 3 años no pagan boleto.

              <h3 class="mt-3 color-rosa texto-corrido">
                ¿Hay taquilla en Luztopía?
              </h3>
              Sí. Horarios de taquilla: 5pm – 10:30pm <br>
              Sin embargo, al tener un aforo limitado por día, recomendamos comprar con anticipación los boletos en línea, además sirve que te evitas filas.

              <h3 class="mt-3 color-rosa texto-corrido">
                ¿Aceptan pago con tarjeta?
              </h3>
              Sí, tanto en la venta de boletos en línea como en la taquilla se aceptan pagos con tarjeta de débito o crédito, Visa o Mastercard. No se acepta American Express.

              <h3 class="mt-3 color-rosa texto-corrido">
                ¿Puedo ir al Paseo Santa Lucía sin entrar a Luztopía?
              </h3>
              Sí, puedes transitar con facilidad por los corredores externos

              <!-- Preguntas pasadas -->

              <!-- <h3 class="color-rosa texto-corrido">
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
              Sí, tanto en la venta de boletos en línea como en taquilla se
              aceptan pagos con tarjeta de débito o crédito, Visa o Mastercard.
              No se acepta American Express.

              <h3 class="mt-3 color-rosa texto-corrido">
                ¿Puedo ir al Paseo Santa Lucía sin entrar a Luztopía?
              </h3>
              Sí, puedes transitar con facilidad por los corredores externos.

              <h3 class="mt-3 color-rosa texto-corrido">
                ¿Aplicarán acciones de prevención Covid-19?
              </h3>
              Sí, en Luztopía estamos conscientes de la importancia de la prevención en esta contingencia ocasionada por el COVID-19; lo más importante es la salud y bienestar de nuestros visitantes y comunidad, por ello, tomaremos las medidas necesarias y sugeridas al momento por la Secretaría de Salud NL. -->

            </v-col>
          </v-row>
        </v-container>
      </v-container>

      <!-- <v-container fluid id="consejo" style="background-color: #0A0CFA;">
        <v-row>
          <v-col class="py-0 px-0 text-right">
            <v-img src="/img/titulos/CONSEJO.svg" max-height="137" contain position="right"></v-img>
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
                  src="/img/1-atraxiondevanguardia-LUZTOPIA.jpg"
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
                  src="/img/2-convivenciasana-LUZTOPIA.jpg"
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
                  src="/img/3-turismo-LUZTOPIA.jpg"
                  aspect-ratio="1"
                ></v-img>
                <span class="texto-corrido d-block color-rosa mt-3"
                  >ATRAER EL TURISMO</span
                >
              </v-col>
              <v-col cols="3" class="px-0 text-center">
                <v-img
                  src="/img/4-actividadeconomica-LUZTOPIA.jpg"
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
                <p class="white--text mx-auto texto-descriptivo-empresas text-center">
                  Empresa especializada en el diseño y producción de decoración urbana y atracciones de entretenimiento.
                </p>
              </v-col>
            </v-row>
          </a>
          <!-- /cacao -->
        </v-container>
      </v-container>

      <v-container fluid id="patrocinadores" style="background-color: #e62ad0">
        <v-row>
          <v-col class="py-sm-0 py-0 pt-12 px-0">
            <!-- <v-img src="/img/titulos/patrocinadores.svg" max-height="137" contain position="left"></v-img> -->
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
                    '' +
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
                    '' + consejero.image.path
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
                '' + home.footerImage.path
              "
              width="100%"
              class="d-none d-md-flex"
            ></v-img>
            <v-img
              :src="
                '' +
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
      patrocinadores: [{ name: 'CLUSTER DE TURISMO MONTERREY', image: { path: '/storage/uploads/2021/02/17/602ca77b202ca3-cluster-luztopia.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 0, _modified: 1613539208, _created: 1613539208, _id: '602ca7886332346363000071', _pid: null, children: [] }, { name: 'CACAO', image: { path: '/storage/uploads/2021/02/17/602ca7906e3eb4-cacao-luztopia.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 1, _modified: 1613539220, _created: 1613539220, _id: '602ca794346561263000012a', _pid: null, children: [] }, { name: 'FUNDIDORA', image: { path: '/storage/uploads/2021/02/17/602ca770d37b32-fundidora-luztopia.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 2, _modified: 1613539189, _created: 1613539189, _id: '602ca775626530d74b000246', _pid: null, children: [] }, { name: 'NUEVO LE\u00d3N', image: { path: '/storage/uploads/2021/02/17/602ca7628451e1-nuevoleon-luztopia.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 3, _modified: 1613539177, _created: 1613539177, _id: '602ca7693261376cd2000275', _pid: null, children: [] }, { name: 'LAMOSA', image: { path: '/storage/uploads/2021/02/17/602ca7a11ae046-lamosa-luztopia.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 4, _modified: 1613539236, _created: 1613539236, _id: '602ca7a4353461f36c0000e3', _pid: null, children: [] }, { name: 'LTH', image: { path: '/storage/uploads/2021/02/17/602ca7aa4c93e7-lth-luztopia.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 5, _modified: 1613539247, _created: 1613539247, _id: '602ca7af653263fb0f0001e9', _pid: null, children: [] }, { name: 'LA FINA', image: { path: '/storage/uploads/2021/02/17/602ca7b6214228-lafina-luztopia.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 6, _modified: 1613539259, _created: 1613539259, _id: '602ca7bb63313540ec000149', _pid: null, children: [] }, { name: 'EL GOBIERNO DEL NUEVO NUEVO LE\u00d3N', image: { path: '/storage/uploads/2021/11/16/6194318751318gobierno-nl.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 7, _modified: 1637102012, _created: 1637102012, _id: '619431bc35353267200002e2', _pid: null, children: [] }, { name: 'OCV', image: { path: '/storage/uploads/2021/03/05/6041d4f3763d4ocv-lutopia.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 8, _modified: 1614927097, _created: 1614927097, _id: '6041d4f96262366c5b000363', _pid: null, children: [] }, { name: 'MCALLEN INTERNATIONAL AIRPORT', image: { path: '/storage/uploads/2021/11/16/619431df362edmcallen-aeropuerto.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 9, _modified: 1637102058, _created: 1637102058, _id: '619431ea3637323fbe0002f2', _pid: null, children: [] }, { name: 'HEB', image: { path: '/storage/uploads/2021/02/17/602ca7989d17f5-heb-luztopia.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 10, _modified: 1613539227, _created: 1613539227, _id: '602ca79b3138318c8f00016b', _pid: null, children: [] }, { name: 'BEREL', image: { path: '/storage/uploads/2021/02/17/602ca7fce2a5c12-berel-luztopia.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 11, _modified: 1613539329, _created: 1613539329, _id: '602ca801663938c92a00007c', _pid: null, children: [] }, { name: 'AFIRME', image: { path: '/storage/uploads/2021/11/16/61943137dfc51afirme.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 12, _modified: 1637101883, _created: 1637101883, _id: '6194313b37353042d8000026', _pid: null, children: [] }, { name: 'COCA-COLA', image: { path: '/storage/uploads/2021/02/17/602ca7eeeccc711-cocacola-luztopia.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 13, _modified: 1613539318, _created: 1613539318, _id: '602ca7f6646335c7320001a9', _pid: null, children: [] }, { name: 'VIVA AEROBUS', image: { path: '/storage/uploads/2021/02/17/602ca807212ee13-viva-luztopia.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 14, _modified: 1613539344, _created: 1613539344, _id: '602ca810663430fc130001ba', _pid: null, children: [] }, { name: 'FRISA', image: { path: '/storage/uploads/2021/11/16/6194314455340frisa.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 15, _modified: 1637101899, _created: 1637101894, _id: '619431463831663cdd00005e', _pid: null, children: [] }, { name: 'BIN', image: { path: '/storage/uploads/2021/02/17/602ca819c5e4414-bin-luztopia.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 16, _modified: 1637188939, _created: 1637188939, _id: '6195854b6139306948000286', _pid: null, children: [] }, { name: 'GRUPO PROTEXA', image: { path: '/storage/uploads/2021/11/16/619431c26f27egrupo-protexa.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 17, _modified: 1637102028, _created: 1637102028, _id: '619431cc3337650027000365', _pid: null, children: [] }, { name: 'XIGNUX', image: { path: '/storage/uploads/2021/11/16/619431fe9f20axignux.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 18, _modified: 1637102080, _created: 1637102080, _id: '61943200626238984c000019', _pid: null, children: [] }, { name: 'PANEL REY', image: { path: '/storage/uploads/2021/02/17/602ca84599f1e17-panelrey-luztopia.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 19, _modified: 1613539402, _created: 1613539402, _id: '602ca84a3536357a850001aa', _pid: null, children: [] }, { name: 'CEMEX', image: { path: '/storage/uploads/2021/02/17/602ca7d27a63e10-cemex-luztopia.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 20, _modified: 1613539286, _created: 1613539286, _id: '602ca7d638303248e70001ab', _pid: null, children: [] }, { name: 'SAN JORGE', image: { path: '/storage/uploads/2021/11/17/6195386f6c446san-jorge.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 21, _modified: 1637169266, _created: 1613539388, _id: '602ca83c6334302f2a0003a1', _pid: null, children: [] }, { name: 'GOBIERNO DE MONTERREY', image: { path: '/storage/uploads/2021/11/16/61943174b7a83gob-mty.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 22, _modified: 1637101949, _created: 1637101949, _id: '6194317d3130337bcc0003cc', _pid: null, children: [] }, { name: 'DELOITTE', image: { path: '/storage/uploads/2021/02/17/602ca850b42ef18-deloitte-luztopia.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 23, _modified: 1613539416, _created: 1613539416, _id: '602ca8586264356a9d0003a4', _pid: null, children: [] }, { name: 'IOS ', image: { path: '/storage/uploads/2021/02/17/602ca82b358d215-ios-luztopia.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 24, _modified: 1613539373, _created: 1613539373, _id: '602ca82d643033bbd30000c4', _pid: null, children: [] }, { name: 'KEY', image: { path: '/storage/uploads/2021/11/16/619431d3bea3ckey.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 25, _modified: 1637102040, _created: 1637102040, _id: '619431d8373836320a00013c', _pid: null, children: [] }],
      consejo: [{ name: 'SENDA', image: { path: '/storage/uploads/2021/02/17/602caa615ed0d27-senda-luztopia.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 0, _modified: 1613539939, _created: 1613539939, _id: '602caa63316466f94d000326', _pid: null, children: [] }, { name: 'MARCO', image: { path: '/storage/uploads/2021/02/17/602caa1e42e1624-marco-luztopia.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 1, _modified: 1613539873, _created: 1613539873, _id: '602caa2137353651be00032d', _pid: null, children: [] }, { name: 'SAL\u00d3N DE LA FAMA', image: { path: '/storage/uploads/2021/11/16/61943380835d8salon-de-la-fama.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 2, _modified: 1637102470, _created: 1637102470, _id: '61943386393639204e000259', _pid: null, children: [] }, { name: 'OMA', image: { path: '/storage/uploads/2021/02/17/602caa443478225-oma-luztopia.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 3, _modified: 1613539910, _created: 1613539910, _id: '602caa4638386133800003c5', _pid: null, children: [] }, { name: 'FUERZA REGIA', image: { path: '/storage/uploads/2021/02/17/602caa050b2a722-regia-luztopia.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 4, _modified: 1613539849, _created: 1613539849, _id: '602caa093730366a310001d2', _pid: null, children: [] }, { name: 'RAYADOS', image: { path: '/storage/uploads/2021/02/17/602caa6ba783128-rayados-luztopia.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 5, _modified: 1613539951, _created: 1613539951, _id: '602caa6f35393922e7000114', _pid: null, children: [] }, { name: 'SULTANES', image: { path: '/storage/uploads/2021/02/17/602caa83e64d030-sultanes-luztopia.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 6, _modified: 1613539976, _created: 1613539976, _id: '602caa88303739cfd600013e', _pid: null, children: [] }, { name: 'TIGRES', image: { path: '/storage/uploads/2021/02/17/602caa9140dd331-tigres-luztopia.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 7, _modified: 1613539988, _created: 1613539988, _id: '602caa94386133ba22000197', _pid: null, children: [] }, { name: 'BLACHERE', image: { path: '/storage/uploads/2021/11/16/619433435fefbblachere.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 8, _modified: 1637102409, _created: 1637102409, _id: '61943349663535bf9200012a', _pid: null, children: [] }, { name: 'CANIRAC', image: { path: '/storage/uploads/2021/11/17/61952841832adcanirac.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 9, _modified: 1637165123, _created: 1637102425, _id: '619433596239657c4d00015a', _pid: null, children: [] }, { name: 'BALLET DE MONTERREY', image: { path: '/storage/uploads/2021/02/17/602ca9ec1949720-ballet-luztopia.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 10, _modified: 1613539827, _created: 1613539827, _id: '602ca9f3396437522a0002a7', _pid: null, children: [] }, { name: 'CHIPINQUE', image: { path: '/storage/uploads/2021/02/17/602ca9fa9894d21-chipinque-luztopia.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 11, _modified: 1613539838, _created: 1613539838, _id: '602ca9fe316266b3cd0001d3', _pid: null, children: [] }, { name: 'HORNO 3', image: { path: '/storage/uploads/2021/02/17/602caa103466c23-horno3-luztopia.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 12, _modified: 1613539860, _created: 1613539860, _id: '602caa1430306132a8000175', _pid: null, children: [] }, { name: 'CONARTE', image: { path: '/storage/uploads/2021/11/16/6194335fcda64conarte.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 13, _modified: 1637102437, _created: 1637102437, _id: '61943365383838851d00018d', _pid: null, children: [] }, { name: 'PAPALOTE', image: { path: '/storage/uploads/2021/02/17/602caa78289cf29-papalote-luztopia.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 14, _modified: 1613539963, _created: 1613539963, _id: '602caa7b313538fc3c0003c6', _pid: null, children: [] }, { name: '3 museos', image: { path: '/storage/uploads/2021/02/17/602ca9e4a5ef519-3museos-luztopia.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 15, _modified: 1637162349, _created: 1637162349, _id: '61951d6d66626552c0000242', children: [] }],
      atracciones: [{ name: 'M\u00c1S DE 200 FIGURAS ILUMINADAS', description: '', image: { path: '/storage/uploads/2021/02/17/602c943823c421-figurasiluminadas-LUZTOPIA.jpg' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 0, _modified: 1613534272, _created: 1609801657, _id: '5ff39fb9383538b22c000017', _pid: null, children: [] }, { name: 'CASTILLO', description: '', image: { path: '/storage/uploads/2021/02/17/602c945ad2d882-castillo-LUZTOPIA.jpg' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 1, _modified: 1613534416, _created: 1613534300, _id: '602c945c313561f153000162', _pid: null, children: [] }, { name: 'OVNI', description: '', image: { path: '/storage/uploads/2021/02/23/60358c7c6a525luztopia-ovni.jpg' }, removeHover: true, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 2, _modified: 1614122111, _created: 1614121173, _id: '603588d53066356d1b000289', _pid: null, children: [] }, { name: 'NAVE', description: '', image: { path: '/storage/uploads/2021/02/23/6035898542ad9luztopia-nave.jpg' }, removeHover: true, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 3, _modified: 1614121415, _created: 1614121108, _id: '60358894393665597e000080', _pid: null, children: [] }, { name: 'RUEDA DE LA FORTUNA', description: '', image: { path: '/storage/uploads/2021/02/17/602c94addd7363-rudeadelafortuna-LUZTOPIA.jpg' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 4, _modified: 1613534427, _created: 1613534383, _id: '602c94af3139617b62000398', _pid: null, children: [] }, { name: 'CASA DE SANTA', description: '', image: { path: '/storage/uploads/2021/02/17/602c94c33c4424-casadesanta-LUZTOPIA.jpg' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 5, _modified: 1613534406, _created: 1613534406, _id: '602c94c66664346ac2000117', _pid: null, children: [] }, { name: 'TRINEO DE SANTA', description: '', image: { path: '/storage/uploads/2021/02/17/602c94e913a7c4-trineodesanta-LUZTOPIA.jpg' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 6, _modified: 1613534448, _created: 1613534448, _id: '602c94f06266383a850001c0', _pid: null, children: [] }, { name: 'PLANETA', description: '', image: { path: '/storage/uploads/2021/02/23/60358985c406cluztopia-planeta.jpg' }, removeHover: true, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 7, _modified: 1614121473, _created: 1614121473, _id: '60358a0161356107010002ba', _pid: null, children: [] }, { name: 'T\u00daNEL GIRATORIO', description: '', image: { path: '/storage/uploads/2021/02/17/602c950c8586a6-tunel-LUZTOPIA.jpg' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 8, _modified: 1613534478, _created: 1613534478, _id: '602c950e6532391de500012e', _pid: null, children: [] }, { name: 'PINO', description: '', image: { path: '/storage/uploads/2021/02/17/602c95184a9a17-pino-LUZTOPIA.jpg' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 9, _modified: 1613534490, _created: 1613534490, _id: '602c951a61373519ce0002a7', _pid: null, children: [] }, { name: 'FOOD TRUCKS', description: '', image: { path: '/storage/uploads/2021/02/17/602c952966eec8-foodtruck-LUZTOPIA.jpg' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 10, _modified: 1613534507, _created: 1613534507, _id: '602c952b6435365491000285', _pid: null, children: [] }, { name: 'L', description: '', image: { path: '/storage/uploads/2021/02/23/60358af1db5e2luztopia-L.jpg' }, removeHover: true, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 11, _modified: 1614121720, _created: 1614121720, _id: '60358af8376232f85300012c', _pid: null, children: [] }, { name: 'ENCIENDETULUZ', description: '', image: { path: '/storage/uploads/2021/02/23/60358b7ca43d1luztopia-ENCIENDETULUZ.jpg' }, removeHover: true, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 12, _modified: 1614121863, _created: 1614121863, _id: '60358b873939306c02000166', _pid: null, children: [] }, { name: 'MERCADO DE ARTESAN\u00cdAS', description: '', image: { path: '/storage/uploads/2021/03/06/6042c60ca88829-artesanias-LUZTOPIA-2.jpg' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 13, _modified: 1614988816, _created: 1613534526, _id: '602c953e383836448f00034e', _pid: null, removeHover: false, children: [] }, { name: 'SHOWS MUSICALES', description: '', image: { path: '/storage/uploads/2021/02/17/602c954bb0ef610-musicales-LUZTOPIA.jpg' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 14, _modified: 1613534542, _created: 1613534542, _id: '602c954e66356135c50002c6', _pid: null, children: [] }],
      home: {
        cover: {
          path: '/2021/11/02/61819f7d3c3d0LUZTOPIA-intro-rosa-convertido.mp4',
          title: 'LUZTOPIA-intro-rosa (convertido).mp4',
          mime: 'video/mp4',
          description: '',
          tags: [],
          size: 187289,
          image: false,
          video: true,
          audio: false,
          archive: false,
          document: false,
          code: false,
          created: 1635884925,
          modified: 1635884925,
          _by: '5ff35e34373936b74900006a',
          folder: '',
          _id: '61819f7d323630e8ff000011'
        },
        coverMovil: {
          path: '/2021/11/02/61819f7c8edc1LUZTOPIA-intro-mobile-rosa-convertido.mp4',
          title: 'LUZTOPIA-intro-mobile-rosa (convertido).mp4',
          mime: 'video/mp4',
          description: '',
          tags: [],
          size: 196914,
          image: false,
          video: true,
          audio: false,
          archive: false,
          document: false,
          code: false,
          created: 1635884924,
          modified: 1635884924,
          _by: '5ff35e34373936b74900006a',
          folder: '',
          _id: '61819f7c3363369eee000030'
        },
        mapa: {
          path: '/storage/uploads/2021/11/17/61951988a6dc5mapa-movil.jpg',
          meta: {
            title: null
          }
        },
        iconosMapaDesktop: {
          path: '/storage/uploads/2021/03/16/605125b006c64mapa-iconos-movil.jpg'
        },
        iconosMapaMovil: {
          path: '/storage/uploads/2021/03/16/605125bdbb843mapa-iconos-desk.jpg'
        },
        videoBoletos: {
          path: '/2021/09/22/614aaceba8715LUZTOPIA-BOLETOS_nov.mp4',
          title: 'LUZTOPIA-BOLETOS_nov.mp4',
          mime: 'video/mp4',
          description: '',
          tags: [],
          size: 405863,
          image: false,
          video: true,
          audio: false,
          archive: false,
          document: false,
          code: false,
          created: 1632283883,
          modified: 1632283883,
          _by: '5ff35e34373936b74900006a',
          folder: '',
          _id: '614aaceb333563253d0001cd'
        },
        _mby: '5ff35e34373936b74900006a',
        _by: '5ff35e34373936b74900006a',
        footerImage: {
          path: '/storage/uploads/2021/01/08/5ff8d57592517FOOTER.png'
        },
        videoBoletosMovil: {
          path: '/2021/09/22/614aaceba8715LUZTOPIA-BOLETOS_nov.mp4',
          title: 'LUZTOPIA-BOLETOS_nov.mp4',
          mime: 'video/mp4',
          description: '',
          tags: [],
          size: 405863,
          image: false,
          video: true,
          audio: false,
          archive: false,
          document: false,
          code: false,
          created: 1632283883,
          modified: 1632283883,
          _by: '5ff35e34373936b74900006a',
          folder: '',
          _id: '614aaceb333563253d0001cd'
        },
        footerImageMovil: {
          path: '/storage/uploads/2021/02/23/60358b7ca43d1luztopia-ENCIENDETULUZ.jpg'
        },
        mapaMovil: {
          path: '/storage/uploads/2021/11/17/619519809b7d5mapa-movil.jpg'
        }
      },
      loaded: true,
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
    this.patrocinadores = [{ name: 'CLUSTER DE TURISMO MONTERREY', image: { path: '/storage/uploads/2021/02/17/602ca77b202ca3-cluster-luztopia.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 0, _modified: 1613539208, _created: 1613539208, _id: '602ca7886332346363000071', _pid: null, children: [] }, { name: 'CACAO', image: { path: '/storage/uploads/2021/02/17/602ca7906e3eb4-cacao-luztopia.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 1, _modified: 1613539220, _created: 1613539220, _id: '602ca794346561263000012a', _pid: null, children: [] }, { name: 'FUNDIDORA', image: { path: '/storage/uploads/2021/02/17/602ca770d37b32-fundidora-luztopia.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 2, _modified: 1613539189, _created: 1613539189, _id: '602ca775626530d74b000246', _pid: null, children: [] }, { name: 'NUEVO LE\u00d3N', image: { path: '/storage/uploads/2021/02/17/602ca7628451e1-nuevoleon-luztopia.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 3, _modified: 1613539177, _created: 1613539177, _id: '602ca7693261376cd2000275', _pid: null, children: [] }, { name: 'LAMOSA', image: { path: '/storage/uploads/2021/02/17/602ca7a11ae046-lamosa-luztopia.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 4, _modified: 1613539236, _created: 1613539236, _id: '602ca7a4353461f36c0000e3', _pid: null, children: [] }, { name: 'LTH', image: { path: '/storage/uploads/2021/02/17/602ca7aa4c93e7-lth-luztopia.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 5, _modified: 1613539247, _created: 1613539247, _id: '602ca7af653263fb0f0001e9', _pid: null, children: [] }, { name: 'LA FINA', image: { path: '/storage/uploads/2021/02/17/602ca7b6214228-lafina-luztopia.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 6, _modified: 1613539259, _created: 1613539259, _id: '602ca7bb63313540ec000149', _pid: null, children: [] }, { name: 'EL GOBIERNO DEL NUEVO NUEVO LE\u00d3N', image: { path: '/storage/uploads/2021/11/16/6194318751318gobierno-nl.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 7, _modified: 1637102012, _created: 1637102012, _id: '619431bc35353267200002e2', _pid: null, children: [] }, { name: 'OCV', image: { path: '/storage/uploads/2021/03/05/6041d4f3763d4ocv-lutopia.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 8, _modified: 1614927097, _created: 1614927097, _id: '6041d4f96262366c5b000363', _pid: null, children: [] }, { name: 'MCALLEN INTERNATIONAL AIRPORT', image: { path: '/storage/uploads/2021/11/16/619431df362edmcallen-aeropuerto.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 9, _modified: 1637102058, _created: 1637102058, _id: '619431ea3637323fbe0002f2', _pid: null, children: [] }, { name: 'HEB', image: { path: '/storage/uploads/2021/02/17/602ca7989d17f5-heb-luztopia.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 10, _modified: 1613539227, _created: 1613539227, _id: '602ca79b3138318c8f00016b', _pid: null, children: [] }, { name: 'BEREL', image: { path: '/storage/uploads/2021/02/17/602ca7fce2a5c12-berel-luztopia.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 11, _modified: 1613539329, _created: 1613539329, _id: '602ca801663938c92a00007c', _pid: null, children: [] }, { name: 'AFIRME', image: { path: '/storage/uploads/2021/11/16/61943137dfc51afirme.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 12, _modified: 1637101883, _created: 1637101883, _id: '6194313b37353042d8000026', _pid: null, children: [] }, { name: 'COCA-COLA', image: { path: '/storage/uploads/2021/02/17/602ca7eeeccc711-cocacola-luztopia.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 13, _modified: 1613539318, _created: 1613539318, _id: '602ca7f6646335c7320001a9', _pid: null, children: [] }, { name: 'VIVA AEROBUS', image: { path: '/storage/uploads/2021/02/17/602ca807212ee13-viva-luztopia.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 14, _modified: 1613539344, _created: 1613539344, _id: '602ca810663430fc130001ba', _pid: null, children: [] }, { name: 'FRISA', image: { path: '/storage/uploads/2021/11/16/6194314455340frisa.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 15, _modified: 1637101899, _created: 1637101894, _id: '619431463831663cdd00005e', _pid: null, children: [] }, { name: 'BIN', image: { path: '/storage/uploads/2021/02/17/602ca819c5e4414-bin-luztopia.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 16, _modified: 1637188939, _created: 1637188939, _id: '6195854b6139306948000286', _pid: null, children: [] }, { name: 'GRUPO PROTEXA', image: { path: '/storage/uploads/2021/11/16/619431c26f27egrupo-protexa.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 17, _modified: 1637102028, _created: 1637102028, _id: '619431cc3337650027000365', _pid: null, children: [] }, { name: 'XIGNUX', image: { path: '/storage/uploads/2021/11/16/619431fe9f20axignux.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 18, _modified: 1637102080, _created: 1637102080, _id: '61943200626238984c000019', _pid: null, children: [] }, { name: 'PANEL REY', image: { path: '/storage/uploads/2021/02/17/602ca84599f1e17-panelrey-luztopia.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 19, _modified: 1613539402, _created: 1613539402, _id: '602ca84a3536357a850001aa', _pid: null, children: [] }, { name: 'CEMEX', image: { path: '/storage/uploads/2021/02/17/602ca7d27a63e10-cemex-luztopia.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 20, _modified: 1613539286, _created: 1613539286, _id: '602ca7d638303248e70001ab', _pid: null, children: [] }, { name: 'SAN JORGE', image: { path: '/storage/uploads/2021/11/17/6195386f6c446san-jorge.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 21, _modified: 1637169266, _created: 1613539388, _id: '602ca83c6334302f2a0003a1', _pid: null, children: [] }, { name: 'GOBIERNO DE MONTERREY', image: { path: '/storage/uploads/2021/11/16/61943174b7a83gob-mty.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 22, _modified: 1637101949, _created: 1637101949, _id: '6194317d3130337bcc0003cc', _pid: null, children: [] }, { name: 'DELOITTE', image: { path: '/storage/uploads/2021/02/17/602ca850b42ef18-deloitte-luztopia.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 23, _modified: 1613539416, _created: 1613539416, _id: '602ca8586264356a9d0003a4', _pid: null, children: [] }, { name: 'IOS ', image: { path: '/storage/uploads/2021/02/17/602ca82b358d215-ios-luztopia.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 24, _modified: 1613539373, _created: 1613539373, _id: '602ca82d643033bbd30000c4', _pid: null, children: [] }, { name: 'KEY', image: { path: '/storage/uploads/2021/11/16/619431d3bea3ckey.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 25, _modified: 1637102040, _created: 1637102040, _id: '619431d8373836320a00013c', _pid: null, children: [] }]
    // fetch(
    //   'https://luztopiacms.actstudio.xyz/api/collections/get/Patrocinadores',
    //   {
    //     method: 'post',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //       sort: { _o: 1 },
    //       populate: 1 // resolve linked collection items
    //     })
    //   }
    // )
    //   .then((res) => res.json())
    //   .then(function (res) {
    //     aux.patrocinadores = res.entries
    //   })

    this.consejo = [{ name: 'SENDA', image: { path: '/storage/uploads/2021/02/17/602caa615ed0d27-senda-luztopia.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 0, _modified: 1613539939, _created: 1613539939, _id: '602caa63316466f94d000326', _pid: null, children: [] }, { name: 'MARCO', image: { path: '/storage/uploads/2021/02/17/602caa1e42e1624-marco-luztopia.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 1, _modified: 1613539873, _created: 1613539873, _id: '602caa2137353651be00032d', _pid: null, children: [] }, { name: 'SAL\u00d3N DE LA FAMA', image: { path: '/storage/uploads/2021/11/16/61943380835d8salon-de-la-fama.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 2, _modified: 1637102470, _created: 1637102470, _id: '61943386393639204e000259', _pid: null, children: [] }, { name: 'OMA', image: { path: '/storage/uploads/2021/02/17/602caa443478225-oma-luztopia.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 3, _modified: 1613539910, _created: 1613539910, _id: '602caa4638386133800003c5', _pid: null, children: [] }, { name: 'FUERZA REGIA', image: { path: '/storage/uploads/2021/02/17/602caa050b2a722-regia-luztopia.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 4, _modified: 1613539849, _created: 1613539849, _id: '602caa093730366a310001d2', _pid: null, children: [] }, { name: 'RAYADOS', image: { path: '/storage/uploads/2021/02/17/602caa6ba783128-rayados-luztopia.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 5, _modified: 1613539951, _created: 1613539951, _id: '602caa6f35393922e7000114', _pid: null, children: [] }, { name: 'SULTANES', image: { path: '/storage/uploads/2021/02/17/602caa83e64d030-sultanes-luztopia.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 6, _modified: 1613539976, _created: 1613539976, _id: '602caa88303739cfd600013e', _pid: null, children: [] }, { name: 'TIGRES', image: { path: '/storage/uploads/2021/02/17/602caa9140dd331-tigres-luztopia.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 7, _modified: 1613539988, _created: 1613539988, _id: '602caa94386133ba22000197', _pid: null, children: [] }, { name: 'BLACHERE', image: { path: '/storage/uploads/2021/11/16/619433435fefbblachere.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 8, _modified: 1637102409, _created: 1637102409, _id: '61943349663535bf9200012a', _pid: null, children: [] }, { name: 'CANIRAC', image: { path: '/storage/uploads/2021/11/17/61952841832adcanirac.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 9, _modified: 1637165123, _created: 1637102425, _id: '619433596239657c4d00015a', _pid: null, children: [] }, { name: 'BALLET DE MONTERREY', image: { path: '/storage/uploads/2021/02/17/602ca9ec1949720-ballet-luztopia.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 10, _modified: 1613539827, _created: 1613539827, _id: '602ca9f3396437522a0002a7', _pid: null, children: [] }, { name: 'CHIPINQUE', image: { path: '/storage/uploads/2021/02/17/602ca9fa9894d21-chipinque-luztopia.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 11, _modified: 1613539838, _created: 1613539838, _id: '602ca9fe316266b3cd0001d3', _pid: null, children: [] }, { name: 'HORNO 3', image: { path: '/storage/uploads/2021/02/17/602caa103466c23-horno3-luztopia.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 12, _modified: 1613539860, _created: 1613539860, _id: '602caa1430306132a8000175', _pid: null, children: [] }, { name: 'CONARTE', image: { path: '/storage/uploads/2021/11/16/6194335fcda64conarte.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 13, _modified: 1637102437, _created: 1637102437, _id: '61943365383838851d00018d', _pid: null, children: [] }, { name: 'PAPALOTE', image: { path: '/storage/uploads/2021/02/17/602caa78289cf29-papalote-luztopia.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 14, _modified: 1613539963, _created: 1613539963, _id: '602caa7b313538fc3c0003c6', _pid: null, children: [] }, { name: '3 museos', image: { path: '/storage/uploads/2021/02/17/602ca9e4a5ef519-3museos-luztopia.png' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 15, _modified: 1637162349, _created: 1637162349, _id: '61951d6d66626552c0000242', children: [] }]

    // fetch('https://luztopiacms.actstudio.xyz/api/collections/get/Consejo', {
    //   method: 'post',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     sort: { _o: 1 },
    //     populate: 1 // resolve linked collection items
    //   })
    // })
    //   .then((res) => res.json())
    //   .then(function (res) {
    //     aux.consejo = res.entries
    //   })

    this.atracciones = [{ name: 'M\u00c1S DE 200 FIGURAS ILUMINADAS', description: '', image: { path: '/storage/uploads/2021/02/17/602c943823c421-figurasiluminadas-LUZTOPIA.jpg' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 0, _modified: 1613534272, _created: 1609801657, _id: '5ff39fb9383538b22c000017', _pid: null, children: [] }, { name: 'CASTILLO', description: '', image: { path: '/storage/uploads/2021/02/17/602c945ad2d882-castillo-LUZTOPIA.jpg' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 1, _modified: 1613534416, _created: 1613534300, _id: '602c945c313561f153000162', _pid: null, children: [] }, { name: 'OVNI', description: '', image: { path: '/storage/uploads/2021/02/23/60358c7c6a525luztopia-ovni.jpg' }, removeHover: true, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 2, _modified: 1614122111, _created: 1614121173, _id: '603588d53066356d1b000289', _pid: null, children: [] }, { name: 'NAVE', description: '', image: { path: '/storage/uploads/2021/02/23/6035898542ad9luztopia-nave.jpg' }, removeHover: true, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 3, _modified: 1614121415, _created: 1614121108, _id: '60358894393665597e000080', _pid: null, children: [] }, { name: 'RUEDA DE LA FORTUNA', description: '', image: { path: '/storage/uploads/2021/02/17/602c94addd7363-rudeadelafortuna-LUZTOPIA.jpg' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 4, _modified: 1613534427, _created: 1613534383, _id: '602c94af3139617b62000398', _pid: null, children: [] }, { name: 'CASA DE SANTA', description: '', image: { path: '/storage/uploads/2021/02/17/602c94c33c4424-casadesanta-LUZTOPIA.jpg' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 5, _modified: 1613534406, _created: 1613534406, _id: '602c94c66664346ac2000117', _pid: null, children: [] }, { name: 'TRINEO DE SANTA', description: '', image: { path: '/storage/uploads/2021/02/17/602c94e913a7c4-trineodesanta-LUZTOPIA.jpg' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 6, _modified: 1613534448, _created: 1613534448, _id: '602c94f06266383a850001c0', _pid: null, children: [] }, { name: 'PLANETA', description: '', image: { path: '/storage/uploads/2021/02/23/60358985c406cluztopia-planeta.jpg' }, removeHover: true, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 7, _modified: 1614121473, _created: 1614121473, _id: '60358a0161356107010002ba', _pid: null, children: [] }, { name: 'T\u00daNEL GIRATORIO', description: '', image: { path: '/storage/uploads/2021/02/17/602c950c8586a6-tunel-LUZTOPIA.jpg' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 8, _modified: 1613534478, _created: 1613534478, _id: '602c950e6532391de500012e', _pid: null, children: [] }, { name: 'PINO', description: '', image: { path: '/storage/uploads/2021/02/17/602c95184a9a17-pino-LUZTOPIA.jpg' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 9, _modified: 1613534490, _created: 1613534490, _id: '602c951a61373519ce0002a7', _pid: null, children: [] }, { name: 'FOOD TRUCKS', description: '', image: { path: '/storage/uploads/2021/02/17/602c952966eec8-foodtruck-LUZTOPIA.jpg' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 10, _modified: 1613534507, _created: 1613534507, _id: '602c952b6435365491000285', _pid: null, children: [] }, { name: 'L', description: '', image: { path: '/storage/uploads/2021/02/23/60358af1db5e2luztopia-L.jpg' }, removeHover: true, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 11, _modified: 1614121720, _created: 1614121720, _id: '60358af8376232f85300012c', _pid: null, children: [] }, { name: 'ENCIENDETULUZ', description: '', image: { path: '/storage/uploads/2021/02/23/60358b7ca43d1luztopia-ENCIENDETULUZ.jpg' }, removeHover: true, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 12, _modified: 1614121863, _created: 1614121863, _id: '60358b873939306c02000166', _pid: null, children: [] }, { name: 'MERCADO DE ARTESAN\u00cdAS', description: '', image: { path: '/storage/uploads/2021/03/06/6042c60ca88829-artesanias-LUZTOPIA-2.jpg' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 13, _modified: 1614988816, _created: 1613534526, _id: '602c953e383836448f00034e', _pid: null, removeHover: false, children: [] }, { name: 'SHOWS MUSICALES', description: '', image: { path: '/storage/uploads/2021/02/17/602c954bb0ef610-musicales-LUZTOPIA.jpg' }, _mby: '5ff35e34373936b74900006a', _by: '5ff35e34373936b74900006a', _o: 14, _modified: 1613534542, _created: 1613534542, _id: '602c954e66356135c50002c6', _pid: null, children: [] }]

    // fetch(
    //   'https://luztopiacms.actstudio.xyz/api/collections/get/Atracciones',
    //   {
    //     method: 'post',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //       sort: { _o: 1 },
    //       populate: 1 // resolve linked collection items
    //     })
    //   }
    // )
    //   .then((res) => res.json())
    //   .then(function (res) {
    //     aux.atracciones = res.entries
    //   })
    this.home = {
      cover: {
        path: '/2021/11/02/61819f7d3c3d0LUZTOPIA-intro-rosa-convertido.mp4',
        title: 'LUZTOPIA-intro-rosa (convertido).mp4',
        mime: 'video/mp4',
        description: '',
        tags: [],
        size: 187289,
        image: false,
        video: true,
        audio: false,
        archive: false,
        document: false,
        code: false,
        created: 1635884925,
        modified: 1635884925,
        _by: '5ff35e34373936b74900006a',
        folder: '',
        _id: '61819f7d323630e8ff000011'
      },
      coverMovil: {
        path: '/2021/11/02/61819f7c8edc1LUZTOPIA-intro-mobile-rosa-convertido.mp4',
        title: 'LUZTOPIA-intro-mobile-rosa (convertido).mp4',
        mime: 'video/mp4',
        description: '',
        tags: [],
        size: 196914,
        image: false,
        video: true,
        audio: false,
        archive: false,
        document: false,
        code: false,
        created: 1635884924,
        modified: 1635884924,
        _by: '5ff35e34373936b74900006a',
        folder: '',
        _id: '61819f7c3363369eee000030'
      },
      mapa: {
        path: '/storage/uploads/2021/11/17/61951988a6dc5mapa-movil.jpg',
        meta: {
          title: null
        }
      },
      iconosMapaDesktop: {
        path: '/storage/uploads/2021/03/16/605125b006c64mapa-iconos-movil.jpg'
      },
      iconosMapaMovil: {
        path: '/storage/uploads/2021/03/16/605125bdbb843mapa-iconos-desk.jpg'
      },
      videoBoletos: {
        path: '/2021/09/22/614aaceba8715LUZTOPIA-BOLETOS_nov.mp4',
        title: 'LUZTOPIA-BOLETOS_nov.mp4',
        mime: 'video/mp4',
        description: '',
        tags: [],
        size: 405863,
        image: false,
        video: true,
        audio: false,
        archive: false,
        document: false,
        code: false,
        created: 1632283883,
        modified: 1632283883,
        _by: '5ff35e34373936b74900006a',
        folder: '',
        _id: '614aaceb333563253d0001cd'
      },
      _mby: '5ff35e34373936b74900006a',
      _by: '5ff35e34373936b74900006a',
      footerImage: {
        path: '/storage/uploads/2021/01/08/5ff8d57592517FOOTER.png'
      },
      videoBoletosMovil: {
        path: '/2021/09/22/614aaceba8715LUZTOPIA-BOLETOS_nov.mp4',
        title: 'LUZTOPIA-BOLETOS_nov.mp4',
        mime: 'video/mp4',
        description: '',
        tags: [],
        size: 405863,
        image: false,
        video: true,
        audio: false,
        archive: false,
        document: false,
        code: false,
        created: 1632283883,
        modified: 1632283883,
        _by: '5ff35e34373936b74900006a',
        folder: '',
        _id: '614aaceb333563253d0001cd'
      },
      footerImageMovil: {
        path: '/storage/uploads/2021/02/23/60358b7ca43d1luztopia-ENCIENDETULUZ.jpg'
      },
      mapaMovil: {
        path: '/storage/uploads/2021/11/17/619519809b7d5mapa-movil.jpg'
      }
    }

    // fetch('https://luztopiacms.actstudio.xyz/api/singletons/get/Home')
    //   .then((data) => data.json())
    //   .then(function (data) {
    //     aux.home = data
    //     aux.loaded = true
    //   })

    this.loaded = true

    this.terms = {
      texto: '<h1>T&eacute;rminos y Condiciones</h1>\n<p>&nbsp;</p>\n<p>Vestibulum rutrum, mi nec elementum vehicula, eros quam gravida nisl, id fringilla neque ante vel mi. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Nulla consequat massa quis enim. Praesent egestas tristique nibh. Praesent vestibulum dapibus nibh.</p>\n<p>Sed a libero. Praesent adipiscing. Sed a libero. Fusce vulputate eleifend sapien. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est.</p>\n<p>Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Vestibulum rutrum, mi nec elementum vehicula, eros quam gravida nisl, id fringilla neque ante vel mi. Vestibulum ullamcorper mauris at ligula. Aliquam erat volutpat. Nunc nonummy metus.</p>\n<p>Pellentesque commodo eros a enim. Morbi mollis tellus ac sapien. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Ut varius tincidunt libero. In hac habitasse platea dictumst.</p>\n<p>Etiam iaculis nunc ac metus. In hac habitasse platea dictumst. Vestibulum turpis sem, aliquet eget, lobortis pellentesque, rutrum eu, nisl. Etiam sit amet orci eget eros faucibus tincidunt. In auctor lobortis lacus.</p>\n<p>Donec interdum, metus et hendrerit aliquet, dolor diam sagittis ligula, eget egestas libero turpis vel mi. Nullam vel sem. Fusce vel dui. Ut non enim eleifend felis pretium feugiat. In ut quam vitae odio lacinia tincidunt.</p>\n<p>Vestibulum rutrum, mi nec elementum vehicula, eros quam gravida nisl, id fringilla neque ante vel mi. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Nulla consequat massa quis enim. Praesent egestas tristique nibh. Praesent vestibulum dapibus nibh.</p>\n<p>Sed a libero. Praesent adipiscing. Sed a libero. Fusce vulputate eleifend sapien. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est.</p>\n<p>Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Vestibulum rutrum, mi nec elementum vehicula, eros quam gravida nisl, id fringilla neque ante vel mi. Vestibulum ullamcorper mauris at ligula. Aliquam erat volutpat. Nunc nonummy metus.</p>\n<p>Pellentesque commodo eros a enim. Morbi mollis tellus ac sapien. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Ut varius tincidunt libero. In hac habitasse platea dictumst.</p>\n<p>Etiam iaculis nunc ac metus. In hac habitasse platea dictumst. Vestibulum turpis sem, aliquet eget, lobortis pellentesque, rutrum eu, nisl. Etiam sit amet orci eget eros faucibus tincidunt. In auctor lobortis lacus.</p>\n<p>Donec interdum, metus et hendrerit aliquet, dolor diam sagittis ligula, eget egestas libero turpis vel mi. Nullam vel sem. Fusce vel dui. Ut non enim eleifend felis pretium feugiat. In ut quam vitae odio lacinia tincidunt.</p>',
      _mby: '5ff35e34373936b74900006a',
      _by: '5ff35e34373936b74900006a'
    }

    // fetch('https://luztopiacms.actstudio.xyz/api/singletons/get/Terminos')
    //   .then((data) => data.json())
    //   .then(function (data) {
    //     aux.terms = data
    //   })

    this.popup =
      {
        imagen: {
          path: '/storage/uploads/2021/01/21/6008def03eaf3LUZTOPIA-BOLETOS-PROX-movil.gif'
        },
        active: false,
        _mby: '5ff35e34373936b74900006a',
        _by: '5ff35e34373936b74900006a',
        link: 'https://www.facebook.com/luztopia'
      }

    // fetch('https://luztopiacms.actstudio.xyz/api/singletons/get/Popup')
    //   .then((data) => data.json())
    //   .then(function (data) {
    //     aux.popup = data
    //     aux.dialog = aux.popup.active
    //   })
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
