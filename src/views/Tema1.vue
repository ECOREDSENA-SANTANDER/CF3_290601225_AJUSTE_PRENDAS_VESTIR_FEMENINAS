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

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-7.bg6.p-4
          .row.justify-content-center.align-items-center
            .col-lg-4
              img(src='@/assets/curso/Tema1/img05.svg', alt='')
            .col-lg-8
              ul.lista-ul
                  li.mb-0
                    i.fas.fa-angle-right2
                    | Líneas de pespunte.
                  li.mb-0
                    i.fas.fa-angle-right2
                    | Ubicación de botones.
                  li.mb-0
                    i.fas.fa-angle-right2
                    | Tipos de costura.
                  li.mb-0
                    i.fas.fa-angle-right2
                    | Presencia de pinzas.
                  li.mb-0
                    i.fas.fa-angle-right2
                    | Márgenes de costura.
                  li.mb-0
                    i.fas.fa-angle-right2
                    | Acabados específicos.
                  li.mb-0
                    i.fas.fa-angle-right2
                    | Entender cómo se relacionan las partes del diseño para lograr un tendido del tejido correcto y eficiente. 
        .col-lg-5
          img(src='@/assets/curso/Tema1/img04.png', alt='')


      .row.justify-content-center.mb-5.bg14.p-4
        .col-lg-5
          p Una vez comprendido el proceso e identificadas correctamente todas las piezas a cortar, se debe realizar un análisis detallado de los componentes, entendidos como las unidades funcionales que integran la estructura de la prenda. Estos componentes incluyen, entre otros:
          .row.justify-content-center.align-items-center
            .col-lg-4
              ul.lista-ul
                  li.mb-0
                    i.fas.fa-angle-right2
                    | Delanteros
                  li.mb-0
                    i.fas.fa-angle-right2
                    | Espaldas
                  li.mb-0
                    i.fas.fa-angle-right2
                    | Mangas 
            .col-lg-4
              ul.lista-ul
                  li.mb-0
                    i.fas.fa-angle-right2
                    | Cuellos 
                  li.mb-0
                    i.fas.fa-angle-right2
                    | Puños 
                  li.mb-0
                    i.fas.fa-angle-right2
                    | Vistas 
            .col-lg-4
              ul.lista-ul
                  li.mb-0
                    i.fas.fa-angle-right2
                    | Forros 
                  li.mb-0
                    i.fas.fa-angle-right2
                    | Refuerzos 
                  li.mb-0
                    i.fas.fa-angle-right2
                    | Pretinas 
        .col-lg-4
          img(src='@/assets/curso/Tema1/img06.png', alt='')
        .col-lg-3
          .row.justify-content-center.align-items-center
            .col-lg-3
              img(src='@/assets/curso/Tema1/boton.svg', alt='')
            .col-lg-12
              p Es fundamental que cada uno de ellos esté debidamente clasificado y organizado antes de proceder al trazado sobre la tela, con el fin de garantizar precisión y eficiencia en el proceso de confección.

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
        .col-lg-12
          .titulo-sexto.color-acento-contenido.mb-4
            h5 Tabla 1. 
            span Componentes de la prenda de vestir
          .tabla-a.color-acento-contenido 
            table(alt='Tabla con cuatro filas que agrupan categorías de insumos textiles, acompañadas por definiciones técnicas y ejemplos comunes para cada caso.')
              thead
                tr
                  th.texto-izquierda.bg4 Categoría
                  th.texto-izquierda.bg4 Definición técnica
                  th.texto-izquierda.bg4 Ejemplos comunes
              tbody
                tr
                  td.texto-izquierda Componentes exteriores
                  td.texto-izquierda Piezas visibles elaboradas en el material textil base que definen la silueta y forma de la prenda.
                  td.texto-izquierda Delanteros, posteriores, cuellos, mangas, bolsillos, puños.
                tr
                  td.texto-izquierda Componentes interiores
                  td.texto-izquierda Elementos internos que brindan soporte estructural, abrigo o refuerzo; suelen estar ocultos en el revés o entre capas de tejido.
                  td.texto-izquierda Forro, entretela, guata, cinta de sesgo.
                tr
                  td.texto-izquierda Hilos de costura
                  td.texto-izquierda Material lineal utilizado para unir los diferentes componentes; su elección afecta la resistencia, elasticidad y calidad de la confección.
                  td.texto-izquierda Pespuntes, puntadas decorativas, bastas, puntadas manuales.
                tr
                  td.texto-izquierda Fornituras y complementos
                  td.texto-izquierda Conjunto de accesorios funcionales o decorativos añadidos a la prenda para facilitar su uso o aportar valor estético.
                  td.texto-izquierda Botones, cremalleras, broches de presión, hebillas, corchetes, vivos, puntillas, cintas, apliques, gomas, cordones.
          figcaption Fuente: SENA, (2025)

      .subt.mb-4(data-aos="fade")
        img(src="@/assets/curso/Tema2/subt.svg")
        h3.ps-3.pe-4.mb-0 Extendido manual o mecánico

      .row.justify-content-center.mb-5
        .col-lg-5
          img(src='@/assets/curso/Tema1/img07.png', alt='')
        .col-lg-7
          p Es una técnica empleada en los procesos de trazado y corte que consiste en disponer el material textil de forma ordenada sobre la superficie de trabajo, garantizando que las capas queden alineadas, sin pliegues ni tensiones. Este procedimiento se inicia ubicando el extremo del tejido en uno de los bordes de la mesa, desde donde dos personas operarias o, alternativamente, una persona con asistencia de un carro de extendido, desplazan cuidadosamente la tela hasta alcanzar la longitud determinada previamente para el tendido. 
          .row.justify-content-center.align-items-center.mb-5.bg5.p-3
            .col-lg-3
              img(src='@/assets/curso/Tema1/img08.svg', alt='')
            .col-lg-9
              p Durante este proceso, es fundamental controlar la tensión del material y verificar la correcta alineación del orillo con la guía de la mesa, para asegurar que las piezas patrón se tracen y corten sobre una base uniforme. Esta técnica se utiliza especialmente en pequeños talleres, laboratorios de prototipado o producciones de baja escala, donde se requiere mayor control visual y manual del tejido.

      .subt.mb-4(data-aos="fade")
        img(src="@/assets/curso/Tema2/subt.svg")
        h3.ps-3.pe-4.mb-0 Recomendaciones técnicas para el extendido del material textil

      p.mb-4 Durante el proceso de extendido manual o mecánico, es fundamental aplicar una serie de criterios técnicos que garanticen la precisión del corte, el aprovechamiento del material y la calidad final de la prenda. A continuación, se detallan algunas recomendaciones clave:  

      .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
        .col-lg-12
          TabsC.color-primario
            .py-3.py-md-4(titulo="Alineación del orillo")
              .row.justify-content-center.align-items-center.p-4
                .col-md-4.mb-4.mb-md-0
                  img(src='@/assets/curso/Tema1/img09.svg', alt='')
                .col-md-6.mb-4.mb-md-0
                  p Se sugiere que el material textil esté correctamente alineado respecto al orillo de la mesa de extendido. En la medida de lo posible, ambos orillos deben mantenerse paralelos y rectos, lo cual favorece la simetría de las piezas y evita desviaciones en el corte.
              
            .py-3.py-md-4(titulo="Control de tensión del tejido")
              .row.justify-content-center.align-items-center.p-4
                .col-md-4.mb-4.mb-md-0
                  img(src='@/assets/curso/Tema1/img10.svg', alt='')
                .col-md-6.mb-4.mb-md-0
                  p Es importante evitar ejercer tensión excesiva al extender la tela. Si el material se encuentra estirado más allá de su estado natural, las piezas cortadas tenderán a contraerse, lo que puede generar una reducción en sus dimensiones reales y comprometer el ajuste final de la prenda.
            
            .py-3.py-md-4(titulo="Prevención de arrugas y burbujas de aire")
              .row.justify-content-center.align-items-center.p-4
                .col-md-4.mb-4.mb-md-0
                  img(src='@/assets/curso/Tema1/img11.svg', alt='')
                .col-md-6.mb-4.mb-md-0
                  p El tejido debe extenderse de manera uniforme y sin pliegues. La presencia de arrugas o burbujas de aire entre las capas puede provocar desplazamientos o deformaciones en el corte, afectando la precisión de las piezas.
            
            .py-3.py-md-4(titulo="Optimización del consumo de tela")
              .row.justify-content-center.align-items-center.p-4
                .col-md-4.mb-4.mb-md-0
                  img(src='@/assets/curso/Tema1/img12.svg', alt='')
                .col-md-6.mb-4.mb-md-0
                  p Se recomienda cortar únicamente lo estrictamente necesario, siguiendo la disposición estratégica de los moldes. Esta práctica permite reducir el desperdicio de material y mejorar el rendimiento del textil disponible, lo cual impacta positivamente en los costos de producción.
           
      .tarjeta.bg11.p-3.py-md-4(data-aos="fade").mb-3
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/Tema2/video.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-1.bg1color Proceso de extendido
                p.mb-0.text-white Para ampliar y profundizar en los contenidos abordados, se recomienda consultar el siguiente enlace:
              .col-sm-auto
                a.boton.color-acento-botones(:href="('https://www.youtube.com/watch?v=EBd_NzLC6dM&ab_channel=EcosistemadeRecursosEducativosDigitalesSENA')" target="_blank")
                  span Ir al sitio
                  i.fas.fa-circle-play
        

      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 Tizado, trazo y señalización en el material textil

      p.mb-4 Son procesos clave en la confección, permiten organizar moldes, marcar contornos en la tela y ubicar referencias para asegurar precisión y optimizar el corte.


      .subt.mb-4(data-aos="fade")
        img(src="@/assets/curso/Tema2/subt.svg")
        h3.ps-3.pe-4.mb-0 Tizado del material
     
      .row.justify-content-centerr.mb-5
        .col-lg-6
          p El tizado es una operación preliminar que consiste en marcar, directamente sobre la superficie del material textil, las siluetas de las piezas patrón. Este procedimiento se realiza utilizando instrumentos como jaboncillo, tiza de sastre o marcadores técnicos, y debe considerar cuidadosamente las características dimensionales del tejido, como el comportamiento del corte, el estiramiento y la dirección del hilo para asegurar la fidelidad de las piezas a su forma original. 
          .row.justify-content-center.align-items-center.bg2.p-4
            .col-lg-6
              p Trazado por tipo de material: cada tipo de insumo textil requiere su propio trazo independiente, ya que cada uno puede comportarse de manera distinta durante el corte y la confección. Por esta razón, se debe realizar el trazado de patrones por separado en los siguientes materiales:
            .col-lg-6
              .row.justify-content-center.align-items-center
                .col-lg-4.mb-3
                  img(src='@/assets/curso/Tema1/img14.svg', alt='')
                .col-lg-12
                  ul.lista-ul
                    li.mb-0
                      i.fas.fa-angle-right2
                      | Tejido base o principal
                    li.mb-0
                      i.fas.fa-angle-right2
                      | Forros
                    li.mb-0
                      i.fas.fa-angle-right2
                      | Entretelas u otros materiales de refuerzo
        .col-lg-6 
          img(src='@/assets/curso/Tema1/img13.png', alt='')

      .subt.mb-4(data-aos="fade")
        img(src="@/assets/curso/Tema2/subt.svg")
        h3.ps-3.pe-4.mb-0 Señalización de patrones

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-4.bg15.p-4
          p Para garantizar la correcta interpretación de las piezas en la etapa de corte y ensamble, es indispensable aplicar una señalización clara y completa sobre cada molde, todo esto facilita el control en la producción y asegura que cada pieza sea identificada correctamente durante todo el proceso de confección. 
        .col-lg-4
          img(src='@/assets/curso/Tema1/img15.svg', alt='')
        .col-lg-4
          p Los elementos principales para tener en cuenta son:
          ul.lista-ul
            li.mb-0
              i.fas.fa-angle-right2
              | Dirección del hilo de tela.
            li.mb-0
              i.fas.fa-angle-right2
              | Nombre de la pieza patrón.

            li.mb-0
              i.fas.fa-angle-right2
              | Nombre de la referencia o diseño.
            li.mb-0
              i.fas.fa-angle-right2
              | Tipo de material a cortar.
            li.mb-0
              i.fas.fa-angle-right2
              | Cantidad de veces que se debe cortar la pieza.

            li.mb-0
              i.fas.fa-angle-right2
              | Número de ubicación en el tendido.
            li.mb-0
              i.fas.fa-angle-right2
              | Piquetes o marcas de referencia para unión.
            li.mb-0
              i.fas.fa-angle-right2
              | Indicación si la pieza actúa como plantilla.

      .subt.mb-4(data-aos="fade")
        img(src="@/assets/curso/Tema2/subt.svg")
        h3.ps-3.pe-4.mb-0 Señalización del hilo de tela: trazo bidireccional

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-5.bg16.p-4
          p En tejidos que permiten flexibilidad en su orientación, como aquellos con acabado simétrico o sin dirección de diseño, puede aplicarse el trazo bidireccional, también conocido como trazo de vello en ambos sentidos. Este tipo de señalización permite ubicar los moldes en dos direcciones opuestas dentro del tendido, optimizando así el uso del material. Para emplear este método, es necesario que el textil no presente restricciones visuales ni estructurales al ser dispuesto en sentido inverso.
        .col-lg-7
          .titulo-sexto.color-acento-contenido.mb-4
            h5 Figura 1.  
            span Señalización en dos direcciones
          img(src='@/assets/curso/Tema1/figura1.svg', alt='Secuencia gráfica que representa el proceso de orientación del hilo en piezas de bolsillo. Inicia con la marcación direccional, continúa con la ubicación del hilo en el molde y concluye con la disposición rotada de los bolsillos sobre la tela.')
          figcaption Fuente: SENA, (2021)

      .subt.mb-4(data-aos="fade")
        img(src="@/assets/curso/Tema2/subt.svg")
        h3.ps-3.pe-4.mb-0 Trazo direccional: vello en un solo sentido

      .row.justify-content-center.mb-5
        .col-lg-7
          p El trazo direccional es una técnica de marcado que se emplea cuando el material textil presenta una orientación específica en su superficie, ya sea por motivos visuales, táctiles o estructurales. En este procedimiento, todas las piezas patrón deben colocarse siguiendo la misma dirección del hilo, ya sea hacia arriba o hacia abajo, respetando la disposición uniforme del vello, del estampado o del brillo del tejido. Esta forma de trazado resulta esencial en textiles cuya apariencia o comportamiento cambia según el ángulo de visión o el sentido del tacto, como en los siguientes casos:
          .row.justify-content-center.align-items-center
            .col-lg-7
              ul.lista-ul
                li.mb-0
                  i.fas.fa-angle-right2
                  | Materiales con brillo direccional o efecto reflectivo.

                li.mb-0
                  i.fas.fa-angle-right2
                  | Tejidos con estampados orientados.
                li.mb-0
                  i.fas.fa-angle-right2
                  | Telas con pelo, terciopelo o gamuza.
            .col-lg-5
              ul.lista-ul
                li.mb-0.d-flex
                  i.fas.fa-angle-right2
                  p.mb-0 Textiles con cambio de color por inclinación o movimiento.
                li.mb-0.d-flex
                  i.fas.fa-angle-right2
                  p Superficies con textura de una sola vía
        .col-lg-5
          img(src='@/assets/curso/Tema1/img16.png', alt='')































































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
