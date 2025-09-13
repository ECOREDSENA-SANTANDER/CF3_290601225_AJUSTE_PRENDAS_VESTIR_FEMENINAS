<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p A continuación, se presenta el diagrama que organiza los contenidos fundamentales relacionados con el ajuste de prendas femeninas. La estructura está dividida en cuatro bloques temáticos principales: el primero corresponde al modelado, trazo y corte, e incluye el extendido del material textil, el tizado y señalización, así como el proceso de corte; el segundo bloque aborda las técnicas y procesos para el arreglo de prendas, detallando el desarme y armado de las piezas y el enfoque técnico para su modificación; el tercer bloque se centra en los acabados y terminados de la prenda, abarcando procesos de acabado, preparación de piezas, costuras manuales y revisión de calidad; finalmente, el cuarto bloque desarrolla el eje de gestión ambiental y moda sostenible, con énfasis en el manejo de residuos textiles y la práctica del suprareciclaje como alternativa creativa y responsable en la transformación de vestuario.
    

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Descripción imagen")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
