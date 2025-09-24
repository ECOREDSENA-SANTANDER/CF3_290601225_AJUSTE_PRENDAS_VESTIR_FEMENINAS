<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Modelado, trazo y corte
    
      .bg13.mb-4(data-aos="fade-left")
        .row.align-items-center
          .col-lg-5.col-md-12.d-none.d-lg-block
            img(src='@/assets/curso/Tema1/img01.png', alt='') 
          .col-lg-7
            .p-4.p-lg-5
              p.mb-0 El proceso de tizado, trazado y corte comprende la disposición estratégica de los moldes sobre el material textil, con el objetivo de optimizar el uso de la tela y garantizar la eficiencia en la etapa de prototipado y confección de la prenda. En esta fase se requiere la aplicación de conocimientos técnicos en patronaje y corte, permitiendo una adecuada planificación de los recursos.
            .row.justify-content-center.align-items-center.px-4
              .col-lg-5
                p Durante el trazado y el corte, se realiza un análisis detallado de la ubicación de las piezas patrón, considerando:
              .col-lg-6
                ul.lista-ul
                  li.mb-0
                    i.fas.fa-angle-right2
                    | Dirección del hilo.
                  li.mb-0
                    i.fas.fa-angle-right2
                    | Diseño del tejido.
                  li.mb-0
                    i.fas.fa-angle-right2
                    | Márgenes necesarios para las costuras. 


      p Esta etapa influye de manera significativa en la calidad final del producto, ya que un trazo incorrecto puede generar desperdicio de material, deformaciones en la estructura de la prenda o dificultades en el ensamblaje. Debido a su impacto directo sobre la eficiencia del proceso y los costos de producción, se reconoce como una de las fases más determinantes en la rentabilidad del diseño y la fabricación de vestuario.

      .tarjeta.bg11.p-3.py-md-4(data-aos="fade").mb-3
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/Tema2/video.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-1.bg1color Introducción trazo y corte
                p.mb-0.text-white Para ampliar y profundizar en los contenidos abordados, se recomienda consultar el siguiente enlace:
              .col-sm-auto
                a.boton.color-acento-botones(:href="('https://www.youtube.com/watch?v=GrVxMBnoups&ab_channel=EcosistemadeRecursosEducativosDigitalesSENA')" target="_blank")
                  span Ir al sitio
                  i.fas.fa-circle-play

      Separador
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.1 Extendido de la tela

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-5
          img(src='@/assets/curso/Tema1/img02.png', alt='')
        .col-lg-7
          .row.justify-content-center.align-items-center
            .col-lg-8
              p El proceso de extendido o tendido del material textil constituye una fase inicial esencial en el trazado y corte de prendas de vestir. Este procedimiento comienza con el reconocimiento detallado de cada uno de los componentes estructurales de la prenda, lo cual resulta indispensable para garantizar una interpretación precisa de los requerimientos técnicos del corte.
            .col-lg-4
              img(src='@/assets/curso/Tema1/img03.svg', alt='')
          p La lectura de la prenda desempeña un papel fundamental en esta etapa, ya que proporciona la información gráfica necesaria para identificar elementos clave como:






















        

  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
