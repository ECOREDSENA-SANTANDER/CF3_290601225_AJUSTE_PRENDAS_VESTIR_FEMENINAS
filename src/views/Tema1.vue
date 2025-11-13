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
                a.boton.color-acento-botones(:href="('https://www.youtube.com/watch?v=pTwuCeaeTVI')" target="_blank")
                  span Ir al sitio
                  i.fas.fa-circle-play

      Separador
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.1 Extendido de la tela

      .row.justify-content-center.align-items-center.mb-3
        .col-lg-5.mb-3.col-md-9
          img(src='@/assets/curso/Tema1/img02.png', alt='')
        .col-lg-7
          .row.justify-content-center.align-items-center
            .col-lg-8
              p El proceso de extendido o tendido del material textil constituye una fase inicial esencial en el trazado y corte de prendas de vestir. Este procedimiento comienza con el reconocimiento detallado de cada uno de los componentes estructurales de la prenda, lo cual resulta indispensable para garantizar una interpretación precisa de los requerimientos técnicos del corte.
            .col-lg-4.col-5
              img(src='@/assets/curso/Tema1/img03.svg', alt='')
          p La lectura de la prenda desempeña un papel fundamental en esta etapa, ya que proporciona la información gráfica necesaria para identificar elementos clave como:

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-7.bg6.p-4.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-4.col-5.mb-3
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
                  li.mb-0.d-flex
                    i.fas.fa-angle-right2
                    | Entender cómo se relacionan las partes del diseño para lograr un tendido del tejido correcto y eficiente. 
        .col-lg-5.col-10.col-md-9
          img(src='@/assets/curso/Tema1/img04.png', alt='')


      .row.justify-content-center.mb-5.bg14.p-4
        .col-lg-5
          p Una vez comprendido el proceso e identificadas correctamente todas las piezas a cortar, se debe realizar un análisis detallado de los componentes, entendidos como las unidades funcionales que integran la estructura de la prenda. Estos componentes incluyen, entre otros:
          .row.justify-content-center.align-items-center
            .col-lg-4
              ul.lista-ul
                  li.mb-0
                    i.fas.fa-angle-right2
                    | Delanteros.
                  li.mb-0
                    i.fas.fa-angle-right2
                    | Espaldas.
                  li.mb-0
                    i.fas.fa-angle-right2
                    | Mangas.
            .col-lg-4
              ul.lista-ul
                  li.mb-0
                    i.fas.fa-angle-right2
                    | Cuellos.
                  li.mb-0
                    i.fas.fa-angle-right2
                    | Puños.
                  li.mb-0
                    i.fas.fa-angle-right2
                    | Vistas.
            .col-lg-4
              ul.lista-ul
                  li.mb-0
                    i.fas.fa-angle-right2
                    | Forros. 
                  li.mb-0
                    i.fas.fa-angle-right2
                    | Refuerzos. 
                  li.mb-0
                    i.fas.fa-angle-right2
                    | Pretinas. 
        .col-lg-4.mb-3.col-md-9
          img(src='@/assets/curso/Tema1/img06.png', alt='')
        .col-lg-3
          .row.justify-content-center.align-items-center
            .col-lg-3.col-3.col-md-2
              img(src='@/assets/curso/Tema1/boton.svg', alt='')
            .col-lg-12
              p Es fundamental que cada uno de ellos esté debidamente clasificado y organizado antes de proceder al trazado sobre la tela, con el fin de garantizar precisión y eficiencia en el proceso de confección.

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
        .col-lg-12
          .titulo-sexto.color-acento-contenido.mb-4
            h5 Tabla 1. 
            span #[em Componentes de la prenda de vestir]
          .tabla-a.color-acento-contenido 
            table(alt='Tabla con cuatro filas que agrupan categorías de insumos textiles, acompañadas por definiciones técnicas y ejemplos comunes para cada caso.')
              thead
                tr
                  th.texto-izquierda.bg4 Categoría
                  th.texto-izquierda.bg4 Definición técnica
                  th.texto-izquierda.bg4 Ejemplos comunes
              tbody
                tr
                  td.texto-izquierda #[b Componentes exteriores]
                  td.texto-izquierda Piezas visibles elaboradas en el material textil base que definen la silueta y forma de la prenda.
                  td.texto-izquierda Delanteros, posteriores, cuellos, mangas, bolsillos, puños.
                tr
                  td.texto-izquierda #[b Componentes interiores]
                  td.texto-izquierda Elementos internos que brindan soporte estructural, abrigo o refuerzo; suelen estar ocultos en el revés o entre capas de tejido.
                  td.texto-izquierda Forro, entretela, guata, cinta de sesgo.
                tr
                  td.texto-izquierda #[b  Hilos de costura]
                  td.texto-izquierda Material lineal utilizado para unir los diferentes componentes; su elección afecta la resistencia, elasticidad y calidad de la confección.
                  td.texto-izquierda Pespuntes, puntadas decorativas, bastas, puntadas manuales.
                tr
                  td.texto-izquierda #[b Fornituras y complementos]
                  td.texto-izquierda Conjunto de accesorios funcionales o decorativos añadidos a la prenda para facilitar su uso o aportar valor estético.
                  td.texto-izquierda Botones, cremalleras, broches de presión, hebillas, corchetes, vivos, puntillas, cintas, apliques, gomas, cordones.
          figcaption Fuente: SENA, (2025)

      .subt.mb-4(data-aos="fade")
        img(src="@/assets/curso/Tema2/subt.svg")
        h3.ps-3.pe-4.mb-0 Extendido manual o mecánico

      .row.justify-content-center
        .col-lg-5.mb-3.col-10
          img(src='@/assets/curso/Tema1/img07.png', alt='')
        .col-lg-7
          p Es una técnica empleada en los procesos de trazado y corte que consiste en disponer el material textil de forma ordenada sobre la superficie de trabajo, garantizando que las capas queden alineadas, sin pliegues ni tensiones. Este procedimiento se inicia ubicando el extremo del tejido en uno de los bordes de la mesa, desde donde dos personas operarias o, alternativamente, una persona con asistencia de un carro de extendido, desplazan cuidadosamente la tela hasta alcanzar la longitud determinada previamente para el tendido. 
          .row.justify-content-center.align-items-center.mb-5.bg5.p-3
            .col-lg-3.col-6.mb-3.col-md-4
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
                a.boton.color-acento-botones(:href="('https://www.youtube.com/watch?v=JlYuH7_zMwA')" target="_blank")
                  span Ir al sitio
                  i.fas.fa-circle-play
        

      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.2 Tizado, trazo y señalización en el material textil

      p.mb-4 Son procesos clave en la confección, permiten organizar moldes, marcar contornos en la tela y ubicar referencias para asegurar precisión y optimizar el corte.


      .subt.mb-4(data-aos="fade")
        img(src="@/assets/curso/Tema2/subt.svg")
        h3.ps-3.pe-4.mb-0 Tizado del material
     
      .row.justify-content-centerr.mb-5
        .col-lg-6
          p El tizado es una operación preliminar que consiste en marcar, directamente sobre la superficie del material textil, las siluetas de las piezas patrón. Este procedimiento se realiza utilizando instrumentos como jaboncillo, tiza de sastre o marcadores técnicos, y debe considerar cuidadosamente las características dimensionales del tejido, como el comportamiento del corte, el estiramiento y la dirección del hilo para asegurar la fidelidad de las piezas a su forma original. 
          .row.justify-content-center.align-items-center.bg2.p-4.mb-4
            .col-lg-6
              p Trazado por tipo de material: cada tipo de insumo textil requiere su propio trazo independiente, ya que cada uno puede comportarse de manera distinta durante el corte y la confección. Por esta razón, se debe realizar el trazado de patrones por separado en los siguientes materiales:
            .col-lg-6
              .row.justify-content-center.align-items-center
                .col-lg-4.mb-3.col-5
                  img(src='@/assets/curso/Tema1/img14.svg', alt='')
                .col-lg-12
                  ul.lista-ul
                    li.mb-0
                      i.fas.fa-angle-right2
                      | Tejido base o principal.
                    li.mb-0
                      i.fas.fa-angle-right2
                      | Forros.
                    li.mb-0
                      i.fas.fa-angle-right2
                      | Entretelas u otros materiales de refuerzo.
        .col-lg-6.col-md-12
          img(src='@/assets/curso/Tema1/img13.png', alt='')

      .subt.mb-4(data-aos="fade")
        img(src="@/assets/curso/Tema2/subt.svg")
        h3.ps-3.pe-4.mb-0 Señalización de patrones

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-4.bg15.p-4.mb-3
          p Para garantizar la correcta interpretación de las piezas en la etapa de corte y ensamble, es indispensable aplicar una señalización clara y completa sobre cada molde, todo esto facilita el control en la producción y asegura que cada pieza sea identificada correctamente durante todo el proceso de confección. 
        .col-lg-4.mb-3.col-8
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
        .col-lg-5.bg16.p-4.mb-4
          p En tejidos que permiten flexibilidad en su orientación, como aquellos con acabado simétrico o sin dirección de diseño, puede aplicarse el trazo bidireccional, también conocido como trazo de vello en ambos sentidos. Este tipo de señalización permite ubicar los moldes en dos direcciones opuestas dentro del tendido, optimizando así el uso del material. Para emplear este método, es necesario que el textil no presente restricciones visuales ni estructurales al ser dispuesto en sentido inverso.
        .col-lg-7
          .titulo-sexto.color-acento-contenido.mb-4
            h5 Figura 1.  
            span #[em Señalización en dos direcciones]
          img(src='@/assets/curso/Tema1/figura1.svg', alt='Secuencia gráfica que representa el proceso de orientación del hilo en piezas de bolsillo. Inicia con la marcación direccional, continúa con la ubicación del hilo en el molde y concluye con la disposición rotada de los bolsillos sobre la tela.')
          figcaption Fuente: SENA, (2021)

      .subt.mb-4(data-aos="fade")
        img(src="@/assets/curso/Tema2/subt.svg")
        h3.ps-3.pe-4.mb-0 Trazo direccional: vello en un solo sentido

      .row.justify-content-center.mb-4
        .col-lg-7
          p El trazo direccional es una técnica de marcado que se emplea cuando el material textil presenta una orientación específica en su superficie, ya sea por motivos visuales, táctiles o estructurales. En este procedimiento, todas las piezas patrón deben colocarse siguiendo la misma dirección del hilo, ya sea hacia arriba o hacia abajo, respetando la disposición uniforme del vello, del estampado o del brillo del tejido. 
          p Esta forma de trazado resulta esencial en textiles cuya apariencia o comportamiento cambia según el ángulo de visión o el sentido del tacto, como en los siguientes casos:
          .row.justify-content-center
            .col-lg-7
              ul.lista-ul
                li.mb-0.d-flex
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
                  p Superficies con textura de una sola vía.
        .col-lg-5.col-md-8
          img(src='@/assets/curso/Tema1/img16.png', alt='')

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-5.bg15.p-4.mb-4
          p El uso del trazo direccional garantiza un acabado coherente, homogéneo y de alta calidad, ya que evita contrastes no deseados entre piezas que podrían generarse si se alterara la orientación del tejido. Aunque este método puede implicar un mayor consumo de material, es indispensable en confección de prendas donde la estética y el acabado son determinantes para la presentación del diseño final.
        .col-lg-7
          .titulo-sexto.color-acento-contenido.mb-4
            h5 Figura 2.  
            span #[em Señalización en una dirección]
          img(src='@/assets/curso/Tema1/figura2.svg', alt='Representación del trazado de bolsillos con hilo orientado en una sola dirección. Se indica la marcación lineal, la ubicación del hilo en el molde y la distribución paralela de las piezas sobre el material sin rotación.')
          figcaption Fuente: SENA, (2021)

      .subt.mb-4(data-aos="fade")
        img(src="@/assets/curso/Tema2/subt.svg")
        h3.ps-3.pe-4.mb-0 Trazo en sesgo: vello en dirección diagonal


      p El trazo en sesgo, también denominado trazo diagonal, corresponde a una técnica de disposición de los moldes sobre el material textil en la cual las piezas patrón se ubican con una inclinación de aproximadamente 45 grados respecto al hilo recto del tejido. Este tipo de trazado se aplica cuando se desea que el vello o la dirección estructural del textil siga una orientación diagonal, generando efectos funcionales o estéticos específicos.


      .row.justify-content-center.align-items-center.mb-5
        .col-lg-5
          p.bg3.p-4 El uso del sesgo permite aprovechar la elasticidad natural que se genera en los tejidos cuando se cortan en esta dirección, lo cual resulta ideal para prendas que requieren mayor fluidez, caída o adaptabilidad al cuerpo. Esta técnica también es común en la elaboración de cintas al bies, detalles de terminación, volantes, faldas con vuelo o estructuras que necesitan flexibilidad sin el uso de fibras elásticas.
          p Para realizar este tipo de marcado, es imprescindible que todos los moldes se ubiquen siguiendo el mismo ángulo diagonal, asegurando coherencia en el comportamiento del tejido una vez ensamblado.
        .col-lg-7
          .titulo-sexto.color-acento-contenido.mb-4
            h5 Figura 3.  
            span #[em Señalización para sesgar]
          img(src='@/assets/curso/Tema1/figura3.svg', alt='Secuencia que indica el trazado diagonal de bolsillos. Incluye la marcación del hilo en ángulo, la orientación inclinada del molde y la disposición final del bolsillo rotado sobre el material en dirección oblicua.')
          figcaption Fuente: SENA, (2021)

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
        .col-lg-12
          .titulo-sexto.color-acento-contenido.mb-4
            h5 Tabla 2. 
            span #[em Comparativo técnico de trazos según orientación del hilo y aplicación textil]
          .tabla-a.color-acento-contenido 
            table(alt='La tabla presenta un comparativo entre tres tipos de trazo textil: bidireccional, direccional y en sesgo. Cada técnica se caracteriza por la orientación del hilo o vello, su aplicación según el tipo de tejido, y sus implicaciones en el rendimiento y comportamiento de la tela. Se destaca que el trazo bidireccional permite mayor aprovechamiento del material, el direccional asegura uniformidad estética en tejidos con brillo o textura orientada, y el trazo en sesgo aporta elasticidad y caída, aunque requiere mayor control técnico. ')
              thead
                tr
                  th.texto-izquierda.bg4 Tipo de trazo
                  th.texto-izquierda.bg4 Descripción técnica
                  th.texto-izquierda.bg4 Dirección del hilo o vello
                  th.texto-izquierda.bg4 Aplicación recomendada
                  th.texto-izquierda.bg4 Observaciones
              tbody
                tr
                  td.texto-izquierda #[b Bidireccional]
                  td.texto-izquierda Disposición de los moldes en dos direcciones opuestas dentro del mismo tendido.
                  td.texto-izquierda Vello o hilo en ambos sentidos.
                  td.texto-izquierda Tejidos sin restricción de brillo, textura o estampado.
                  td.texto-izquierda Permite mayor aprovechamiento del material; no afecta la apariencia final.
                tr
                  td.texto-izquierda #[b Direccional]
                  td.texto-izquierda Trazado alineado en un único sentido, respetando la orientación del hilo o acabado del tejido.
                  td.texto-izquierda Vello en un solo sentido (hacia arriba o abajo).
                  td.texto-izquierda Tejidos con brillo, estampados orientados, terciopelo, gamuza, materiales con dirección visual o táctil.
                  td.texto-izquierda Mayor consumo de tela, pero garantiza homogeneidad estética.
                tr
                  td.texto-izquierda #[b En sesgo (diagonal)]
                  td.texto-izquierda Disposición de los moldes en ángulo inclinado, generalmente a 45°, respecto al hilo recto del tejido.
                  td.texto-izquierda Vello en diagonal.
                  td.texto-izquierda Prendas que requieren caída, elasticidad natural o movimiento, cintas al bies, faldas circulares.
                  td.texto-izquierda Aumenta la flexibilidad estructural de la prenda, requiere mayor control del comportamiento del tejido.
          figcaption Fuente: SENA, (2025)

      .subt.mb-4(data-aos="fade")
        img(src="@/assets/curso/Tema2/subt.svg")
        h3.ps-3.pe-4.mb-0 Señalización en el proceso de corte y confección

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-4.mb-3.col-md-8
          img(src="@/assets/curso/Tema1/img17.png")
        .col-lg-7.bg2.p-4
          p La señalización sobre las piezas patrón permite una trazabilidad clara durante el proceso de corte y confección. Esta información, aplicada directamente en el molde o sobre el tejido, garantiza una interpretación precisa por parte de quienes participan en el ensamblaje y seguimiento del diseño. Se detallan los elementos fundamentales que deben incluirse:
        

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
        .col-lg-12
          .titulo-sexto.color-acento-contenido.mb-4
            h5 Tabla 3. 
            span #[em Elementos de señalización]
          .tabla-a.color-acento-contenido 
            table(alt='Tabla que presenta elementos relacionados con la identificación y manejo de piezas textiles: referencia o nombre del cliente, nombre de la pieza, tipo de material y número de pieza en el tendido. Cada elemento incluye su descripción técnica y un ejemplo aplicado.')
              thead
                tr
                  th.texto-izquierda.bg4.w-25 Elemento
                  th.texto-izquierda.bg4 Descripción técnica
                  th.texto-izquierda.bg4.w-25 Ejemplo aplicado
        
              tbody
                tr
                  th.texto-izquierda Referencia o nombre del cliente
                  td.texto-izquierda Identificación del diseño o pedido asignado, útil para rastreo en producción y control de calidad.
                  td.texto-izquierda Referencia: 20201208.
                tr
                  th.texto-izquierda Nombre de la pieza
                  td.texto-izquierda Denominación específica de la sección del patrón.
                  td.texto-izquierda Delantero / frente.
                tr
                  th.texto-izquierda Tipo de material
                  td.texto-izquierda Indicador del tejido o insumo correspondiente al corte de esa pieza.
                  td.texto-izquierda
                    ul.lista-ul
                      li
                        i.fas
                        |X1v Material base.
                      li
                        i.fas
                        |X1v Material forro.
                      li
                        i.fas
                        |X1v Material entretela.
                tr
                  th.texto-izquierda Número de pieza en el tendido
                  td.texto-izquierda Ubicación secuencial en el tendido, especialmente útil cuando se realiza corte por capas.
                  td.texto-izquierda ½.

          figcaption Fuente: SENA, (2025)
      .row.justify-content-center.align-items-center.mb-2.bg17.p-4
        .col-lg-11
          p Cada dato debe estar claramente identificado y ordenado en el patrón, facilitando que quienes realizan el corte o la confección comprendan su función, su relación con el diseño general y el tipo de tejido a utilizar.
      Separador
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.3  Proceso de corte
      
      .bloque-texto-g.bloque-texto-g--inverso.bg18.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/Tema1/img18.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          br
          br
          p.mb-5 En el área de confección, el corte es una etapa determinante que debe ejecutarse con precisión, ya que define la forma y dimensiones definitivas de cada pieza a ensamblar. Existen distintos métodos de corte que varían según el nivel de tecnificación, los volúmenes de producción y los recursos disponibles, por tal razón, se describen las principales tipologías:
          br
          br
          br
         
      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
        .col-lg-12
          .titulo-sexto.color-acento-contenido.mb-4
            h5 Tabla 4. 
            span #[em Tipologías principales de corte]
          .tabla-a.color-acento-contenido 
            table(alt='Tabla que describe tres tipos de corte: manual, convencional o mecanizado y automático. Para cada tipo, presenta una descripción técnica y las herramientas utilizadas, desde tijeras y moldes físicos hasta sistemas CAD/CAM y maquinaria automatizada.')
              thead
                tr
                  th.text-center.bg4.w-25 Tipo de corte
                  th.text-center.bg4 Descripción técnica
                  th.text-center.bg4.w-25 Herramientas utilizadas
        
              tbody
                tr
                  th.texto-izquierda Manual
                  td.texto-izquierda 
                    ul.lista-ul
                      li.mb-0.d-flex
                        i.fas.fa-angle-right2
                        p.mb-0 Requiere intervención directa de la persona operaria. 

                      li.mb-0.d-flex
                        i.fas.fa-angle-right2
                        p.mb-0 Se realiza con tijeras de entre 8 y 12 pulgadas, exclusivamente destinadas al corte de tela. 

                      li.mb-0.d-flex
                        i.fas.fa-angle-right2
                        p.mb-0 Los moldes se colocan sobre el tejido y se recortan siguiendo su contorno.
                  td.texto-izquierda Tijeras de corte textil, moldes físicos en papel o cartón.
                tr
                  th.texto-izquierda Convencional o mecanizado
                  td.texto-izquierda 
                    ul.lista-ul
                      li.mb-0.d-flex
                        i.fas.fa-angle-right2
                        p.mb-0 Utiliza maquinaria electromecánica para el corte, lo que reduce la carga manual y mejora la velocidad. 


                      li.mb-0.d-flex
                        i.fas.fa-angle-right2
                        p.mb-0 Se emplean sierras verticales, cortadoras circulares o de banda.

                  td.texto-izquierda Equipos electromecánicos (cortadora vertical, de disco, etc.).
                tr
                  th.texto-izquierda Automático
                  td.texto-izquierda 
                    ul.lista-ul
                      li.mb-0.d-flex
                        i.fas.fa-angle-right2
                        p.mb-0 Sistema tecnificado que opera mediante #[em software] especializado, control computarizado y cabezal de corte automático.

                      li.mb-0.d-flex
                        i.fas.fa-angle-right2
                        p.mb-0 Permite mayor precisión y optimización del tiempo y espacio. 
                  td.texto-izquierda Sistema CAD / CAM, cabezal automático, carro extendido computarizado.
          figcaption Fuente: SENA, (2025)

      .subt.mb-4(data-aos="fade")
        img(src="@/assets/curso/Tema2/subt.svg")
        h3.ps-3.pe-4.mb-0 Formas de transferencia de patrones al material textil

      .row.justify-content-center.align-items-center.mb-5.bg3
        .col-lg-4.col-md-6.mb-1.d-none.d-lg-block
          img(src="@/assets/curso/Tema1/img19.png")
        .col-lg-8
          p La transferencia del patrón al tejido es una operación fundamental para asegurar que cada pieza mantenga su forma y proporción durante el corte. Existen diversos métodos, entre los cuales se destacan los siguientes por su practicidad y eficiencia:
           

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
        .col-lg-12
          .titulo-sexto.color-acento-contenido.mb-4
            h5 Tabla 5. 
            span #[em Métodos de transferencia]
          .tabla-a.color-acento-contenido 
            table(alt='Tabla que presenta tres métodos de transferencia en la confección textil: marcado con tiza o jaboncillo, pinar con alfileres y sujeción con pesas. Cada método incluye su descripción técnica y las ventajas que ofrece para el trabajo con moldes y telas.')
              thead
                tr
                  th.texto-izquierda.bg4.w-25 Método de transferencia
                  th.texto-izquierda.bg4 Descripción técnica
                  th.texto-izquierda.bg4.w-25 Ventajas
              tbody
                tr
                  th.texto-izquierda Marcado con tiza o jaboncillo
                  td.texto-izquierda Consiste en delinear el contorno de los moldes directamente sobre la tela usando herramientas removibles como jaboncillos o tizas especiales para textil.
                  td.texto-izquierda Permite trazado directo y visualización clara.
                tr
                  th.texto-izquierda Pinar con alfileres
                  td.texto-izquierda Se utiliza para fijar el molde sobre el tejido mediante alfileres, asegurando su inmovilidad durante el corte.
                  td.texto-izquierda Ofrece precisión en tejidos delgados o resbaladizos.
                tr
                  th.texto-izquierda Sujeción con pesas
                  td.texto-izquierda Técnica donde se colocan pesas sobre el molde para mantenerlo en su sitio, especialmente útil con materiales gruesos o delicados.
                  td.texto-izquierda Evita perforaciones y desplazamientos del molde.
          
          figcaption Fuente: SENA, (2025)
      .subt2.mb-4(data-aos="fade")    
        h3.pb-1.mb-0 Pesas de apoyo para transferencia

      p.mb-4 Son utensilios denominados pesas de apoyo, utilizados para mantener fijo el papel o la tela durante el proceso de transferencia del diseño, su función principal es evitar desplazamientos involuntarios del material, garantizando precisión en el trazado y una transferencia limpia y estable sobre la superficie textil. Estas pesas también pueden estar elaboradas en tela y rellenas con arena o arroz, lo que les otorga el peso necesario para brindar estabilidad y facilitar su manejo práctico en las labores de diseño y confección.

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12.col-11.col-md-11
          .titulo-sexto.color-acento-contenido
            h5 Figura 4. 
            span  #[em Pesas de apoyo para transferencia]
          img(src='@/assets/curso/Tema1/img20.png', alt='En la escena se aprecia el proceso de transferencia de un diseño textil, donde una persona sostiene una herramienta de corte o trazado sobre el papel patrón. Sobre la superficie de trabajo se emplean pesas metálicas distribuidas estratégicamente para mantener fijo el material y evitar desplazamientos durante la marcación.')
       
      .subt.mb-4(data-aos="fade")
        img(src="@/assets/curso/Tema2/subt.svg")
        h3.ps-3.pe-4.mb-0 Métodos de marcación en el tejido

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-9
          p La marcación del tejido es un paso fundamental en el proceso de confección, ya que permite trasladar con precisión las guías y señales del patrón al material textil, facilitando un corte exacto y una confección limpia. 
          .row.justify-content-center.mb-4(data-aos="fade")
            .col-lg-5.col-md-8.pe-lg-0
              .bg9.p-4.pb-0.h-100
                img.w-100.m-auto(src='@/assets/curso/Tema1/img22.svg', alt='')
            .col-lg-7.ps-lg-0
              .bg10.p-4.p-lg-5.h-100.d-flex.align-items-center
                .row.justify-content-center.align-items-center
                  .col-lg-12
                    p Elegir el método adecuado depende del tipo de tela, el diseño de la prenda y el nivel de precisión requerido.
          p A continuación, se presentan los métodos más utilizados en ambientes de sastrería y confección técnica:
        .col-lg-3.col-7.col-md-5
          img(src="@/assets/curso/Tema1/img21.png")
      
      .subt2.mb-5(data-aos="fade")    
        h3.pb-1.mb-0 Marcación por hilván (#[em tailor tacks]) 
      
      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
        .col-lg-5.col-10.col-md-6.mb-3
          img(src="@/assets/curso/Tema1/img23.png")
        .col-lg-7
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
            .row.justify-content-center(titulo="¿Qué es?")
              .col-md-10.mb-4.mb-md-0
                p Es una técnica manual y tradicional que utiliza puntadas sueltas en forma de bucle con hilo de color contrastante.

            .row.justify-content-center(titulo="¿Cómo se hace?")
              .col-md-10.mb-4.mb-md-0
                ul.lista-ul
                  li.mb-0.d-flex
                    i.fas.fa-angle-right2
                    p Se introduce la aguja sin atravesar completamente la tela (ideal en tejidos dobles).

                  li.mb-0.d-flex
                    i.fas.fa-angle-right2
                    p Se dejan hebras sueltas entre capas, que luego se cortan para dividir la señal en ambas caras del tejido.
            
            .row.justify-content-center(titulo="¿Para qué sirve?")
              .col-md-10.mb-4.mb-md-0
                ul.lista-ul
                  li.mb-0.d-flex
                    i.fas.fa-angle-right2
                    p Indicar pinzas, costuras, líneas de pliegue o referencias de ubicación.

                  li.mb-0.d-flex
                    i.fas.fa-angle-right2
                    p Se usa especialmente en telas delicadas o resbaladizas, donde otros métodos podrían manchar, perforar o dañar la superficie.
            
            .row.justify-content-center(titulo="Ventajas")
              .col-md-10.mb-4.mb-md-0
                ul.lista-ul
                  li.mb-0.d-flex
                    i.fas.fa-angle-right2
                    p Precisión alta sin dejar marcas permanentes.

                  li.mb-0.d-flex
                    i.fas.fa-angle-right2
                    p No altera la textura del tejido.

      .subt2.mb-5(data-aos="fade")    
        h3.pb-1.mb-0 Marcación con alfileres

      .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
        .col-lg-7
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
            .row.justify-content-center(titulo="¿Qué es?")
              .col-md-10.mb-4.mb-md-0
                p Consiste en fijar el patrón al tejido utilizando alfileres, permitiendo marcar el contorno y zonas clave para el corte o costura.

            .row.justify-content-center(titulo="¿Cómo se hace?")
              .col-md-10.mb-4.mb-md-0
                ul.lista-ul
                  li.mb-0.d-flex
                    i.fas.fa-angle-right2
                    p Elegir alfileres según el tipo de tejido:
                      ul.lista-ul.my-3
                        li.mb-2.d-flex
                          i.fas.fa-angle-right2
                          p.mb-0 Gruesos y largos para telas pesadas como lana o dril.
                        li.mb-2.d-flex
                          i.fas.fa-angle-right2
                          p.mb-0 Finos y cortos para telas ligeras como seda, #[em chiffon] o #[em voile].

                  li.mb-0.d-flex
                    i.fas.fa-angle-right2
                    p Insertar un alfiler cada 3 cm, especialmente en las esquinas o puntos críticos.
                  li.mb-0.d-flex
                    i.fas.fa-angle-right2
                    p Colocarlos en diagonal, tomando poca tela para evitar tensiones o pliegues.

            .row.justify-content-center(titulo="¿Para qué sirve?")
              .col-md-10.mb-4.mb-md-0
                ul.lista-ul
                  li.mb-0.d-flex
                    i.fas.fa-angle-right2
                    p Sujeta el patrón para evitar desplazamientos.
                  li.mb-0.d-flex
                    i.fas.fa-angle-right2
                    p Ayuda a marcar líneas de costura o guía visual para el corte.
            
            .row.justify-content-center(titulo="Ventajas")
              .col-md-10.mb-4.mb-md-0
                ul.lista-ul
                  li.mb-0.d-flex
                    i.fas.fa-angle-right2
                    p Método rápido y reutilizable.
                  li.mb-0.d-flex
                    i.fas.fa-angle-right2
                    p Permite reposicionar sin dañar el tejido.
        .col-lg-5.col-10.col-md-6
          img(src="@/assets/curso/Tema1/img24.png")

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-5
          p Nota: recomendaciones generales para el aprendiz
          ul.lista-ul.my-3
            li.mb-2.d-flex
              i.fas.fa-angle-right2
              p.mb-0 Antes de marcar, asegúrese de que el tejido esté plano, sin arrugas ni tensiones.
            li.mb-2.d-flex
              i.fas.fa-angle-right2
              p.mb-0 Pruebe el método en un retazo del mismo material, para evitar errores.
            li.mb-2.d-flex
              i.fas.fa-angle-right2
              p.mb-0 Elija siempre la técnica que resguarde la integridad del tejido y facilite el trabajo posterior de corte y confección.
        .col-lg-7.bg2.p-4
          .row.justify-content-center.align-items-center.mb-3.my-3
            .col-lg-2.col-4.mb-3.col-md-3
              img(src="@/assets/curso/Tema1/img25.svg")
            .col-lg-8
              p En el lenguaje profesional de confección, la acción de insertar alfileres sobre el tejido para sujetar los moldes se denomina #[b pinar].

            
      .tarjeta.bg11.p-3.py-md-4(data-aos="fade").mb-3
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/Tema2/video.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-1.bg1color Características del material desde trazo y corte 
                p.mb-0.text-white Para ampliar y profundizar en los contenidos abordados, se recomienda consultar el siguiente enlace:
              .col-sm-auto
                a.boton.color-acento-botones(:href="('https://www.youtube.com/watch?v=mnB3EqkpF8g')" target="_blank")
                  span Ir al sitio
                  i.fas.fa-circle-play























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
