<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Gestión ambiental y la moda sostenible 

    .bg3.mb-5(data-aos="fade-left")
      .row.align-items-center
        .col-lg-5.col-md-12.d-none.d-lg-block
          img(src='@/assets/curso/Tema4/img01.png', alt='') 
        .col-lg-7
          p El suprareciclaje, conocido internacionalmente como #[em upcycling], es una práctica orientada a la transformación de objetos o prendas previamente desechadas, con el propósito de darles una segunda vida útil que aporte un valor funcional, estético o simbólico superior al original. A diferencia del reciclaje convencional, que se centra en la reutilización directa de materiales, el suprareciclaje implica intervención, rediseño y reconstrucción, lo cual le otorga un carácter creativo, artesanal y de alto contenido técnico.
          p Esta metodología ha cobrado gran relevancia en el contexto de la economía circular, donde se prioriza la reducción del desperdicio, la prolongación del ciclo de vida de los productos y el uso consciente de los recursos. La industria de la moda, reconocida como una de las más contaminantes a nivel global por la cantidad de desechos textiles que genera, ha comenzado a adoptar el suprareciclaje como una estrategia de producción más ética, sostenible y socialmente comprometida.
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
        .col-lg-9
          .titulo-sexto.color-acento-contenido.mb-4
            h5 Tabla 12. 
            span Ventajas del suprareciclaje aplicado a la confección de prendas
          .tabla-a.color-acento-contenido 
            table(alt='Tabla que expone beneficios del suprarreciclaje aplicado a la confección de prendas, con descripciones técnicas sobre extensión de vida útil, reducción de desechos textiles, valor artesanal, sostenibilidad y cuidado ambiental.')
              thead
                tr
                  th.texto-izquierda.bg4.w-25 Beneficio
                  th.texto-izquierda.bg4 Descripción técnica
              tbody
                tr
                  td.texto-izquierda #[b Extensión de la vida útil del producto.]
                  td.texto-izquierda Se evita el consumo innecesario de nuevos materiales, disminuyendo el impacto ambiental.
             
                tr
                  td.texto-izquierda #[b Reducción del desecho textil.]
                  td.texto-izquierda Se aprovechan residuos de corte, ropa en desuso o muestras defectuosas.

                tr
                  td.texto-izquierda #[b Valor agregado al trabajo artesanal.]
                  td.texto-izquierda Se reconoce el saber técnico de quien transforma, generando identidad y diferenciación.

                tr
                  td.texto-izquierda #[b Fortalecimiento de la sostenibilidad.]
                  td.texto-izquierda Se promueve una práctica responsable desde quien produce hasta quien consume.
                tr
                  td.texto-izquierda #[b Contribución al cuidado del planeta.]
                  td.texto-izquierda Se convierte en una estrategia activa para enfrentar la crisis ambiental y de consumo.
            figcaption Fuente: SENA, (2025)
        .col-lg-3 
          img(src='@/assets/curso/Tema4/img02.png', alt='')

    .row.justify-content-center.mb-4(data-aos="fade")
      .col-lg-5.col-md-8.pe-lg-0
        .bg9.p-4.pb-0.h-100
          img.w-100.m-auto(src='@/assets/curso/Tema4/img03.svg', alt='')
      .col-lg-7.ps-lg-0
        .bg10.p-4.p-lg-5.h-100.d-flex.align-items-center
          .row.justify-content-center.align-items-center
            .col-lg-12
              p En Colombia, el Servicio Nacional de Aprendizaje (SENA) ha incorporado el suprareciclaje en sus programas de formación técnica y tecnológica, fomentando el diseño de productos a partir de materiales descartados. A través de procesos rigurosos de clasificación textil (según su composición, textura y estado), se desarrollan propuestas innovadoras aplicadas no solo al vestuario, sino también a la creación de accesorios, elementos de protección y productos reutilizables con valor funcional (El Nuevo Siglo, 2017).
              p Esta estrategia formativa no solo responde a las demandas actuales de sostenibilidad, sino que también forma parte de una visión educativa que promueve la creatividad, el emprendimiento y la conciencia ecológica en quienes se están formando para el sector moda.
         
    .bg6.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-3
          img(src='@/assets/curso/Tema4/img04.svg', alt='')
        .col-lg-8
          h5 Importante: 
          p Un ejemplo destacado en el ámbito latinoamericano es el de Positano, marca fundada en 2016 por las diseñadoras Agustina y Florencia Franco. Su propuesta inicial partió del rescate de prendas familiares en desuso, que transformaron en nuevas piezas con identidad propia. Este ejercicio de intervención consciente se convirtió en un emprendimiento exitoso, basado en la recolección de vestuario usado, su clasificación y posterior transformación en productos contemporáneos. Este modelo ha inspirado a otras personas a replicar prácticas similares, reforzando la idea de que la moda también puede ser ética, circular y comprometida con el entorno.

    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.1 Residuos textiles

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.mb-4
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 95. 
          span Residuos textiles
        img(src='@/assets/curso/Tema4/fig96.png', alt='Una gran acumulación de prendas de vestir se encuentra apilada en forma de montaña sobre una superficie de concreto, dentro de un espacio amplio con paredes desgastadas y ventanas altas.')
      .col-lg-6
        .row.justify-content-center.align-items-center
          .col-lg-8
            p Cuando se trabaja con prendas u objetos textiles que han sido descartados, es fundamental reconocer que cada uno de esos productos está compuesto por fibras que han atravesado diversos procesos industriales, desde su transformación en hilos hasta la fabricación de telas.
          .col-lg-4
            img(src='@/assets/curso/Tema4/img05.svg')
        .bg6.p-4
          p Por esta razón, cualquier intervención sobre estos materiales, ya sea para reutilización o transformación creativa, requiere un conocimiento básico sobre su composición textil, ya que de ello depende su comportamiento, su funcionalidad y su capacidad para integrarse en nuevos productos de forma segura y eficiente.

    .subt.mb-5(data-aos="fade")
      img(src="@/assets/curso/Tema2/subt.svg")
      h3.ps-3.pe-4.mb-0 Factores clave para identificar la composición de los textiles


    .row.justify-content-center.cursor-pointer.mb-5(data-aos="fade-down")
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/Tema4/1.png", alt="")
          .crd_hover_txt--body
            h4.mb-4.text-center Transpirabilidad y función del material
            ul.lista-ul
              li.mb-3
                i.fas.fa-angle-right2
                | El poliéster, como fibra sintética, presenta una baja transpirabilidad, lo cual puede resultar poco adecuado para prendas de uso prolongado o en climas cálidos. Sin embargo, también puede tener propiedades impermeables, lo que lo hace útil en chaquetas, abrigos y elementos de protección.
              li.mb-0
                i.fas.fa-angle-right2
                | El algodón, en cambio, al ser una fibra natural, permite una mejor transpiración, pero tiene un ciclo de vida más corto y es más propenso al desgaste por fricción o humedad.
      
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/Tema4/2.png", alt="")
          .crd_hover_txt--body.text-center 
            h4.mb-3 Combinación de materiales 
            p.mb-0 Mezclar sin criterio diferentes tipos de fibras puede generar productos incómodos o incluso perjudiciales para la salud, especialmente si no se consideran factores como el contacto directo con la piel, la elasticidad o el comportamiento térmico del material.
      
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/Tema4/3.png", alt="")
          .crd_hover_txt--body.text-center 
            h4.mb-3 Selección responsable en función del uso final 
            p.mb-0 Una prenda suprareciclada no solo debe ser estética, sino también funcional, segura y duradera. La composición de los materiales determinará si puede o no cumplir esos criterios.


    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/Tema2/subt.svg")
      h3.ps-3.pe-4.mb-0 Impacto ambiental del descarte textil

    .row.justify-content-center.mb-5
      .col-lg-4.mb-3
        .row.justify-content-center.align-items-center.bg12.p-4
          .col-lg-3.mb-4.my-4
            img(src="@/assets/curso/Tema4/img07.svg")
          .col-lg-10
            p.text-center A pesar de que la eliminación de residuos textiles puede parecer una solución inmediata, esta práctica conlleva consecuencias ambientales graves. La acumulación de textiles en vertederos genera emisiones de gases contaminantes (como el metano) y contribuye al debilitamiento de la capa de ozono, afectando directamente los ecosistemas y la salud humana. 
            p.text-center Además, muchas fibras sintéticas liberan microplásticos durante su descomposición, lo que agrava la contaminación del suelo y del agua.
            br
      .col-lg-8
        img(src="@/assets/curso/Tema4/img06.png")


    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/Tema2/subt.svg")
      h3.ps-3.pe-4.mb-0 Responsabilidad en la selección de materiales

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        img(src="@/assets/curso/Tema4/img08.png")
      .col-lg-6
        p Seleccionar conscientemente los materiales que serán intervenidos no solo es una decisión técnica, sino también ética. Las personas que trabajan en procesos de transformación, confección o rediseño deben:
        ul.lista-ul
          li.mb-0.d-flex
            i.fas.fa-angle-right2
            | Identificar la composición del tejido (mediante etiquetas, pruebas de combustión controlada o consulta técnica).
          li.mb-0.d-flex
            i.fas.fa-angle-right2
            | Evaluar el destino funcional del nuevo producto (uso corporal, decorativo, industrial).
          li.mb-0.d-flex
            i.fas.fa-angle-right2
            | Evitar combinaciones que afecten el confort, la seguridad o la durabilidad del producto final.
        p.bg3.p-4 Esta conciencia material es indispensable para garantizar que el proceso de suprareciclaje cumpla con su propósito sostenible, evitando la generación de nuevos residuos y promoviendo una cultura de producción textil más informada, responsable y comprometida con el bienestar planetario.


    .row.bgs-1.align-items-center.p-3.p-md-4.p-lg-5(data-aos="fade")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center
          .tarjeta.tarjeta--blanca.p-4
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-lg-8.col-md-11
                  h4.mb-4 Ciclo de gestión circular de productos textiles
                  p El ciclo de gestión circular de productos textiles, describiendo las etapas que siguen las prendas desde su producción hasta su reutilización o reciclaje.
                  p El proceso inicia en la industria textil, donde se fabrican los productos que posteriormente llegan al punto de venta. Una vez adquiridas y utilizadas, las prendas se someten a un proceso de clasificación, en el que se determina si pueden ser reusadas o si requieren preparación para el reciclaje.
                  p Cuando las prendas se destinan a reciclaje, este puede ser:
                  ul.lista-ul
                    li.mb-0.d-flex
                      i.fas.fa-angle-right2
                      | Reciclaje de bucle cerrado: los materiales recuperados se reincorporan a la producción textil, permitiendo fabricar nuevas prendas.
                    li.mb-0.d-flex
                      i.fas.fa-angle-right2
                      | Reciclaje de bucle abierto: los materiales se destinan a la elaboración de productos en otras industrias, como la automotriz, la construcción o la fabricación de nuevos insumos industriales.
                .col-lg-3.col-md-9
                  img(src='@/assets/curso/Tema4/img09.png')
              
              .row.justify-content-center.align-items-center
                .col-lg-8.col-md-11
                  h4.mb-4 Gestión y valorización de residuos textiles
                  p El ciclo inicia con la recogida de la fracción textil, que se traslada a una planta de selección. Allí, el material se divide en dos rutas:
                  h4 1.	Fracción reutilizable
                  ul.lista-ul
                    li.mb-0.d-flex
                      i.fas.fa-angle-right2
                      p.mb-0 #[b Clasificación: ] separación de prendas según su tipo, calidad o estado.
                    li.mb-0.d-flex 
                      i.fas.fa-angle-right2
                      p.mb-0 #[b Higienización: ]  limpieza y desinfección para garantizar condiciones óptimas.
                    li.mb-0.d-flex 
                      i.fas.fa-angle-right2
                      p.mb-0 #[b Acondicionamiento final: ]  preparación para su reintroducción en el mercado, ya sea para reventa, donación o uso directo.
                
                  h4 2.	Fracción no reutilizable
                  ul.lista-ul
                    li.mb-0.d-flex
                      i.fas.fa-angle-right2
                      p.mb-0 #[b  Clasificación:] identificación del tipo de material para determinar el tratamiento más adecuado.

                    li.mb-0.d-flex 
                      i.fas.fa-angle-right2
                      p.mb-0 #[b Reciclaje: ]  transformación de los materiales para producir nuevas fibras u otros productos.

                    li.mb-0.d-flex 
                      i.fas.fa-angle-right2
                      p.mb-0 #[b Valorización: ]  aprovechamiento energético o material de los residuos que no pueden reciclarse, reduciendo así el impacto ambiental.
                .col-lg-3.col-md-9
                  img(src='@/assets/curso/Tema4/img10.png')
             

              .row.justify-content-center
                .col-lg-6.col-md-11.mb-4
                  p Cuando el objetivo no es reutilizar directamente una prenda o fragmento textil, sino regenerar la fibra desde su estructura más elemental, el proceso se convierte en un procedimiento técnico más complejo, que requiere condiciones industriales y métodos específicos de clasificación, recuperación y rehilatura.
                  p.bg5.p-4 #[b Nota:] rehilatura es el proceso mediante el cual se recuperan fibras textiles de materiales usados o residuos, para volver a convertirlas en hilo apto para tejer o confeccionar nuevas prendas. Es una técnica clave en el reciclaje textil industrial.
                  p Este tipo de reciclaje estructural se emplea cuando las prendas ya no conservan su integridad funcional o presentan un deterioro que impide su transformación directa en nuevos productos. A diferencia del suprareciclaje artesanal, esta práctica apunta a obtener materia prima regenerada, adecuada para procesos de hilatura y tejido.
                .col-lg-5.col-md-11
                  p El procedimiento inicia con la clasificación, donde se separan los textiles reutilizables de los no reutilizables. Posteriormente, se realiza una reclasificación según la composición de la fibra, diferenciando materiales naturales (como algodón o lana) y sintéticos (como poliéster o acrílicos).
                  .row.justify-content-center.align-items-center.mb-3
                    .col-lg-4
                      img(src='@/assets/curso/Tema4/img11.svg')
                    .col-lg-8
                      p Una vez identificada la composición, se procede al deshilachado o desfibrado, etapa en la que las prendas o retales se rompen para liberar las fibras. Estas fibras pasan por un proceso de cardado, estirado y peinado, que las alinea, limpia y uniforma para obtener una textura adecuada.
                  p Finalmente, las fibras tratadas se destinan a la hilatura, donde se convierten nuevamente en hilos aptos para la fabricación de nuevos tejidos, cerrando así el ciclo de aprovechamiento textil.

    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.1 Residuos textiles











































</template>

<script>
export default {
  name: 'Tema4',
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
