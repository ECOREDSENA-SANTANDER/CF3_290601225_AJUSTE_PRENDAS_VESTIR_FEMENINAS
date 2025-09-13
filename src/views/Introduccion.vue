<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-lg-5.mb-4.col-10
        img(src='@/assets/curso/intro.png', alt='')
      .col-lg-7
        .row
          .col-lg-9
            p El presente componente formativo, ofrecido por el Servicio Nacional de Aprendizaje (SENA), ha sido diseñado con el propósito de fortalecer las competencias técnicas necesarias para intervenir, ajustar y finalizar prendas de vestir, mediante métodos profesionales de modelado, costura y acabado. Esta propuesta pedagógica responde a las demandas del sector moda en Colombia, brindando herramientas para transformar y optimizar prendas existentes bajo criterios de precisión, funcionalidad y estética.
          .col-lg-3.col-5
            img(src='@/assets/curso/fig.svg', alt='')
          .col-lg-12.p-4.bg1
            p La estructura del componente permite abordar de manera integral el proceso, desde el desarme de la prenda hasta la aplicación de acabados finales, siguiendo parámetros técnicos que garantizan la calidad en cada etapa. En este sentido, se promueve el desarrollo de habilidades prácticas como la señalización del ajuste, la elaboración de patrones, el trazado y corte de piezas, así como la ejecución de costuras y remates con alto nivel de detalle.
    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-lg-5.p-4.bg2.mb-4
        p Adicionalmente, se enfatiza la comprensión de los métodos de confección y los distintos tipos de ensamble, a fin de que el aprendiz pueda tomar decisiones acertadas en la selección de técnicas, de acuerdo con el tipo de prenda, material y ajuste requerido. Este proceso se complementa con la aplicación de técnicas de pulimiento, costura manual y corrección de asimetrías, contribuyendo así a la profesionalización del oficio en el campo del diseño y la confección.
      .col-lg-2.col-6.mb-4
        img(src='@/assets/curso/fig2.svg', alt='')
      .col-lg-5 
        p Como parte de una mirada contemporánea del diseño de modas, también se incorpora el estudio y aplicación de técnicas de suprareciclaje, entendidas como prácticas de transformación creativa que permiten extender el ciclo de vida útil de las prendas mediante intervenciones estéticas y funcionales. Estas técnicas no solo aportan valor agregado a las piezas modificadas, sino que también se alinean con los principios de la moda sostenible, promoviendo una conciencia crítica frente al consumo textil, la reutilización de materiales y la reducción del impacto ambiental del sector.
    
    .fondo_intro     
      .row.justify-content-center.align-items-center(data-aos="zoom-in-left")
        .col-lg-11.col-md-11.col-11
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. 

</template>

<script>
export default {
  name: 'Introduccion',
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
