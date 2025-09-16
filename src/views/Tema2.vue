<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Técnicas y procesos para arreglo de prendas

    .bg3.mb-5(data-aos="fade-left")
      .row.align-items-center
        .col-lg-5.col-md-12.d-none.d-lg-block
          img(src='@/assets/curso/Tema2/img01.png', alt='') 
        .col-lg-7
          .p-4.p-lg-5
            p.mb-0 El arreglo de prendas es una práctica especializada dentro del campo de la confección que permite adaptar, restaurar o modificar vestuario previamente elaborado, respondiendo a necesidades de ajuste, mantenimiento o transformación estética. Estas intervenciones técnicas pueden realizarse por razones:
          .row.justify-content-center.align-items-center.px-4
            .col-lg-3
              h5 Funcionales
              ul.lista-ul
                li.mb-0
                  i.fas.fa-angle-right2
                  | Talla
                li.mb-0
                  i.fas.fa-angle-right2
                  | Largo
                li.mb-0
                  i.fas.fa-angle-right2
                  | Ajuste corporal
            .col-lg-4
              h5 Por reparación de daños
              ul.lista-ul
                li.mb-0
                  i.fas.fa-angle-right2
                  | Desgaste
                li.mb-0
                  i.fas.fa-angle-right2
                  | Roturas
                li.mb-0
                  i.fas.fa-angle-right2
                  | Manchas
            .col-lg-3
              h5 Con fines creativos
              ul.lista-ul
                li.mb-0
                  i.fas.fa-angle-right2
                  | Personalización
                li.mb-0
                  i.fas.fa-angle-right2
                  | Tendencia
                li.mb-0
                  i.fas.fa-angle-right2
                  | Suprareciclaje
        
    p.mb-4 A continuación, se describen las técnicas más utilizadas, agrupadas por su propósito:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
        .col-lg-12
          .titulo-sexto.color-acento-contenido.mb-4
            h5 Tabla 6. 
            span Técnicas comunes en el arreglo de prendas de vestir
          .tabla-a.color-acento-contenido 
            table(alt='Tabla que enumera tipos de intervención en prendas con sus descripciones técnicas y ejemplos de aplicación. Incluye ajuste de medidas, modificación de largo, reposición o refuerzo, rediseño parcial, costura de reparación, pulimiento estético y suprarreciclaje.')
              thead
                tr
                  th.texto-izquierda.bg4 Tipo de intervención
                  th.texto-izquierda.bg4 Descripción técnica
                  th.texto-izquierda.bg4 Ejemplos de aplicación
              tbody
                tr
                  td.texto-izquierda #[b Ajuste de medidas]
                  td.texto-izquierda Consiste en modificar dimensiones de la prenda para adaptarla al cuerpo de quien la usa.
                  td.texto-izquierda Reducir o ampliar contorno de cintura, ajuste de pinzas, entalle lateral.
                tr
                  td.texto-izquierda #[b Modificación de largo]
                  td.texto-izquierda Cambiar la longitud de la prenda en mangas, piernas o bastas.
                  td.texto-izquierda Subir dobladillos, acortar mangas, alargar con extensión o falsa.
                tr
                  td.texto-izquierda #[b Reposición o refuerzo]
                  td.texto-izquierda Sustituir piezas dañadas o aplicar refuerzos internos o externos.
                  td.texto-izquierda Cambiar cremalleras, reforzar entrepierna, sustituir botones.
                tr
                  td.texto-izquierda #[b Rediseño parcial]
                  td.texto-izquierda Intervenciones creativas que transforman elementos estructurales o decorativos.
                  td.texto-izquierda Eliminar cuellos, convertir camisa en blusa, aplicación de parches visibles.
                tr
                  td.texto-izquierda #[b Costura de reparación]
                  td.texto-izquierda Unión manual o mecánica de partes descosidas o desgarradas.
                  td.texto-izquierda Recoser bajo descosido, cerrar abertura accidental, reforzar uniones.
                tr
                  td.texto-izquierda #[b Pulimiento estético]
                  td.texto-izquierda Corrección de defectos visuales o estructurales mediante técnicas de acabado.
                  td.texto-izquierda Corregir asimetrías, emparejar costuras, limpiar bordes internos.
                tr
                  td.texto-izquierda #[b Suprareciclaje]
                  td.texto-izquierda Transformación de prendas en nuevas piezas a partir de intervenciones de diseño sostenibles y creativas.
                  td.texto-izquierda Convertir #[em jeans] en bolso, camisas en faldas, fragmentación y reensamblaje.
            figcaption Fuente: SENA, (2025)  

    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1 Armado y desarmado de la prenda

    p.mb-4 Para iniciar el descosido de prendas con tejidos planos se ubica el desbaratador de modo que vaya rompiendo toda la línea de costura, debe finalizar retirando el exceso y si es necesario con la ayuda del corta hilos.

    .row.mb-4
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.bg6.p-4
          .row.justify-content-center.mb-3
            h3.text-center.mb-4 Desbaratar costura plana
            .col-lg-11
              .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                h5 Figura 5.  
                span Paso 1
              img(src='@/assets/curso/Tema2/fig5.png', alt='Manos sostienen una pieza textil mientras una herramienta con punta curva es utilizada para deshacer una costura recta en el borde de la tela. Dedos sostienen dos capas de tela mientras se separan con precisión los puntos de una costura, en un proceso manual de descosido. Una mano levanta ligeramente una prenda mientras una herramienta de descosedor reposa sobre la superficie, rodeada de restos de hilo suelto.')
              figcaption Fuente: https://skarlett.es/como-descoser/ 
      .col-sm-6.col-lg-4.mb-4.mb-lg-0 
        .tarjeta--boton.bg7.p-4
          .row.justify-content-center.mb-3
            p.text-center.text-small Si el textil es resistente puede probarse abriendo los textiles e ir cortando con el cortahilos o desbaratador.
            .col-lg-11
              .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                h5 Figura 6.  
                span Paso 2
              img(src='@/assets/curso/Tema2/fig6.png', alt='Dedos sostienen dos capas de tela mientras se separan con precisión los puntos de una costura, en un proceso manual de descosido.')
              figcaption Fuente: https://skarlett.es/como-descoser/ 
      
      .col-sm-6.col-lg-4.mb-4.mb-lg-0  
        .tarjeta--boton.bg8.p-4
          .row.justify-content-center.mb-3
            h3.text-center.mb-4 Separación de las piezas
            .col-lg-11
              .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                h5 Figura 7.  
                span Paso 3
              img(src='@/assets/curso/Tema2/fig7.png', alt='Una mano levanta ligeramente una prenda mientras una herramienta de descosedor reposa sobre la superficie, rodeada de restos de hilo suelto.')
              figcaption Fuente: https://skarlett.es/como-descoser/ 
         
          
    .row.justify-content-center.align-items-center.mb-5.bg5
      .col-lg-11.p-4
        p Ahora bien, muchas prendas vienen rematadas con puntadas de fileteado, lo que hace que descoserlas requiera mayor paciencia y cuidado. Este tipo de costura suele estar compuesta por tres hilos entrelazados en el tejido, por lo que se recomienda seguir las siguientes indicaciones para retirarla correctamente:

    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/Tema2/subt.svg")
      h3.ps-3.pe-4.mb-0 Procedimiento para retirar costuras con remate de filete

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        PasosA.color-adicional-1.mb-5(tipo="n")
          .row
            .col-md-6.mb-4.mb-md-0
              h4 Paso 1. 
              h4 Romper las puntadas superiores del filete.
            .col-md-5
              .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                h5 Figura 8.  
                span Paso 1 
              img(src='@/assets/curso/Tema2/fig8.png', alt='Mano sostiene el borde de una tela con costura rematada mientras una herramienta puntiaguda es usada para retirar el hilo inferior, identificado como “áncora inferior”.')
              figcaption.text-regular Fuente: https://www.naiicostura.com/3-maneras-de-descoser-costura-overlock/

          .row.texto-izquierda 
            .col-md-5
              .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                h5 Figura 9.  
                span Paso 2
              img(src='@/assets/curso/Tema2/fig9.png', alt='Dedos sujetan una tela con bordes rematados, parcialmente descosidos, mientras en el fondo se distingue una herramienta manual colocada sobre una superficie cuadriculada.')
              figcaption.text-regular Fuente: Fuente: https://www.naiicostura.com/3-maneras-de-descoser-costura-overlock/

            .col-md-6.mb-4.mb-md-0
              h4 Paso 2. 
              h4 Empezar a sacar los hilos cortados.

          .row
            .col-md-6.mb-4.mb-md-0
              h4 Paso 3.  
              h4 Costura deshecha.
            .col-md-5
              .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                h5 Figura 10.  
                span Paso 3 
              img(src='@/assets/curso/Tema2/fig10.png', alt='Mano sostiene una pieza de tela con costura lateral deshecha, mientras varios fragmentos de hilo suelto reposan al lado sobre una superficie cuadriculada.')
              figcaption.text-regular Fuente: Fuente: https://www.naiicostura.com/3-maneras-de-descoser-costura-overlock/ 

          .row.texto-izquierda 
            .col-md-5
              .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                h5 Figura 11.  
                span Paso 4 
              img(src='@/assets/curso/Tema2/fig11.png', alt='Mano sostiene un hilo azul que se retira cuidadosamente de una costura lateral, mientras otros hilos de distintos grosores permanecen sueltos sobre la tela.')
              figcaption.text-regular Fuente: Fuente: https://www.naiicostura.com/3-maneras-de-descoser-costura-overlock/ 
            .col-md-6.mb-4.mb-md-0
              h4 Paso 4.  
              h4 Romper las puntadas de la aguja.
            
          .row
            .col-md-6.mb-4.mb-md-0
              h4 Paso 5. 
              h4 Por último, tirar la hebra y se terminará de desbaratar el filete.
            .col-md-5
              .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                h5 Figura 12.  
                span Paso 5
              img(src='@/assets/curso/Tema2/fig12.png', alt='Mano sostiene un hilo azul que se retira cuidadosamente de una costura lateral, mientras otros hilos de distintos grosores permanecen sueltos sobre la tela.')
              figcaption.text-regular Fuente: https://www.naiicostura.com/3-maneras-de-descoser-costura-overlock/ 

    .bg7.p-3
      .row.justify-content-center.align-items-center
        .col-lg-4
          p Una vez se han separado cuidadosamente las piezas necesarias para intervenir una prenda, dichas partes deben ser comprendidas y tratadas como lo que realmente representan: patrones activos. Es decir, moldes reales extraídos directamente de una prenda existente, susceptibles de ser modificados según criterios técnicos y necesidades específicas de ajuste.
        .col-lg-2
          img(src='@/assets/curso/Tema2/img03.svg', alt='')
        .col-lg-4
          p Las técnicas de arreglo que aquí se presentan se fundamentan en principios de adaptación morfológica, es decir, modificaciones basadas en las proporciones anatómicas de la persona usuaria, con el fin de mejorar la vestibilidad, funcionalidad y estética de la prenda.


    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2 Enfoque técnico del proceso de modificación

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        p El punto de partida de cualquier intervención debe ser el análisis antropométrico, que permite identificar las diferencias entre las medidas corporales reales y las dimensiones que ofrece la prenda. A partir de esta lectura, se definen los puntos de ajuste necesarios, y se procede con la modificación directa sobre las piezas desarmadas o sobre los moldes derivados.





































































</template>

<script>
export default {
  name: 'Tema2',
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
