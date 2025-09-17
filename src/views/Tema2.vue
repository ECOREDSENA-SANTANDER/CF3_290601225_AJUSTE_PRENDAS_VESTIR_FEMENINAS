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
        .col-lg-2.col-6
          img(src='@/assets/curso/Tema2/img03.svg', alt='')
        .col-lg-4
          p Las técnicas de arreglo que aquí se presentan se fundamentan en principios de adaptación morfológica, es decir, modificaciones basadas en las proporciones anatómicas de la persona usuaria, con el fin de mejorar la vestibilidad, funcionalidad y estética de la prenda.


    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2 Enfoque técnico del proceso de modificación

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        p El punto de partida de cualquier intervención debe ser el análisis antropométrico, que permite identificar las diferencias entre las medidas corporales reales y las dimensiones que ofrece la prenda. A partir de esta lectura, se definen los puntos de ajuste necesarios, y se procede con la modificación directa sobre las piezas desarmadas o sobre los moldes derivados.
        .row.justify-content-center.mb-4(data-aos="fade")
          .col-lg-6.col-md-8.pe-lg-0
            .bg9.p-4.pb-0.h-100
              img.w-100.m-auto(src='@/assets/curso/Tema2/img04.png', alt='')
          .col-lg-6.ps-lg-0
            .bg10.p-4.p-lg-5.h-100.d-flex.align-items-center
              .row.justify-content-center.align-items-center
                .col-lg-12
                  h4 Estas adaptaciones pueden abarcar zonas específicas del diseño, tales como:
                .col-lg-12
                  ul.lista-ul
                    li.mb-0
                      i.fas.fa-angle-right2
                      | Alargue o acortamiento de la prenda.
                    li.mb-0
                      i.fas.fa-angle-right2
                      | Ampliación o reducción de medidas.
                    li.mb-0
                      i.fas.fa-angle-right2
                      | Modificación de cortes estructurales.
                    li.d-flex.mb-0
                      i.fas.fa-angle-right2
                      | Corrección de línea de hombros o mangas.
                    li.mb-0
                      i.fas.fa-angle-right2
                      | Ajuste de tiro o sisa.
                    li.mb-0
                      i.fas.fa-angle-right2
                      | Redefinición de pinzas o entalles.
      .col-lg-3.col-8
        img(src='@/assets/curso/Tema2/img05.png', alt='')

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
        .col-lg-9.mb-4
          .titulo-sexto.color-acento-contenido.mb-4
            h5 Tabla 7. 
            span Técnicas aplicables según el tipo de intervención
          .tabla-a.color-acento-contenido 
            table(alt='Tabla que detalla tipos de ajuste en prendas: alargar o ampliar, acortar o reducir y ajustes de precisión. Cada tipo incluye procedimientos técnicos recomendados para su realización, como soltar márgenes, cortar excedentes o modificar zonas periféricas específicas.')
              thead
                tr
                  th.texto-izquierda.bg4.w-25 Tipo de ajuste
                  th.texto-izquierda.bg4 Procedimiento técnico recomendado
              tbody
                tr
                  td.texto-izquierda #[b Alargar o ampliar]
                  td.texto-izquierda
                    ul.lista-ul
                      li.mb-0.d-flex
                        i.fas.fa-angle-right2
                        | Soltar márgenes internos de costura.
                      li.mb-0
                        i.fas.fa-angle-right2
                        | Deshacer dobladillos o ruedos.
                      li.d-flex.mb-0
                        i.fas.fa-angle-right2
                        | Añadir piezas textiles decorativas (boleros, falsos, bandas, cortes horizontales).
                tr
                  td.texto-izquierda #[b Acortar o reducir]
                  td.texto-izquierda
                    ul.lista-ul
                      li.mb-0.d-flex
                        i.fas.fa-angle-right2
                        | Subir la línea de corte sin comprometer otras estructuras.

                      li.mb-0
                        i.fas.fa-angle-right2
                        | Cortar excedentes en costados o bajos.

                      li.mb-0
                        i.fas.fa-angle-right2
                        |  Eliminar exceso en pinzas o ajustes antiguos.
              
                tr
                  td.texto-izquierda #[b Ajustes de precisión]
                  td.texto-izquierda
                    ul.lista-ul
                      li.mb-0.d-flex
                        i.fas.fa-angle-right2
                        | Aplicar modificaciones en las zonas bajas o periféricas (basta, ruedos, puños), para evitar intervenir zonas críticas como cuellos, sisas o hombros.
            figcaption Fuente: SENA, (2025)
        
        .col-lg-3.bg3.p-4
          .row.justify-content-center
            .col-lg-11
              p Estas operaciones deben realizarse respetando la simetría y la línea de diseño original, empleando recursos como piquetes, referencias visuales, pruebas intermedias y planchado técnico.
              p Este enfoque técnico no solo permite adaptar la prenda al cuerpo, sino también revalorizarla desde el diseño, incorporando prácticas sostenibles como la reutilización inteligente de componentes textiles. 


    .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
      .col-lg-12
        TabsC.color-primario
          .py-3.py-md-4(titulo="Alargar piezas")
            .row.justify-content-center.p-4
              .col-md-2.mb-4.mb-md-0
                h4 Opción 1. 
                p Primero tener claro los centímetros del aumento e intentar obtenerlos del ruedo y/o del margen de costura en la unión de piezas como la línea de hombro, unión en cintura o de cortes horizontales.
              .col-md-3.mb-3
                .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                  h5 Figura 13. 
                  span Pieza 1 
                figure
                  img(src='@/assets/curso/Tema2/fig13.svg', alt='Dos manos sostienen un molde dividido, al que se le ha insertado una franja de papel en el espacio generado por el corte, indicada como aumento sobre la línea del doblez.')
                  figcaption Fuente: Jeffreys, (2005)
        
              .col-md-2.mb-4.mb-md-0
                h4 Opción 2.  
                p Si la opción 1 no funcionó, se debe realizar un corte horizontal y añadir tela. Recuerde incluir los centímetros para el margen de costura.
              .col-md-3
                .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                  h5 Figura 14. 
                  span Pieza 2
                figure
                  img(src='@/assets/curso/Tema2/fig14.svg', alt='Una mano sostiene una pieza de papel mientras otra utiliza tijeras para realizar un corte vertical guiado por dos líneas marcadas: una corresponde al doblez y otra indica la zona de modificación.')
                  figcaption Fuente: Jeffreys, (2005)
          
          .py-3.py-md-4(titulo="Acortar una pieza")(data-aos='fade-right')
            .row.justify-content-center.p-4
              .col-md-2.mb-4.mb-md-0
                p Si es el largo de la pieza, se reduce en los ruedos, pero si es en zonas como pecho y espalda, por ejemplo, se puede hacer un corte horizontal o un pliegue.
              .col-md-3.mb-3
                .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                  h5 Figura 15. 
                  span Pieza 1 
                figure
                  img(src='@/assets/curso/Tema2/fig15.svg', alt='Manos trabajan sobre una superficie extendida con papel añadido al molde original. Una regla y un lápiz permiten trazar una nueva curva que redefine el bajo de la prenda, uniendo la prolongación de los costados.')
                  figcaption Fuente: Jeffreys, (2005)
        
              .col-md-3.mb-3
                .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                  h5 Figura 16. 
                  span Pieza 2
                figure
                  img(src='@/assets/curso/Tema2/fig16.svg', alt='Dos manos sostienen una regla sobre papel cuadriculado mientras se traza una línea horizontal. El trazo define una sección que será reducida, señalada como cantidad a acortar.')
                  figcaption Fuente: Jeffreys, (2005)
              .col-md-3
                .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                  h5 Figura 17. 
                  span Pieza 3
                figure
                  img(src='@/assets/curso/Tema2/fig17.svg', alt='Ambas manos doblan el papel sobre una línea horizontal previamente trazada, identificada como línea de modificación, con el fin de ajustar la longitud del molde.')
                  figcaption Fuente: Jeffreys, (2005)

          .py-3.py-md-4(titulo="Arreglo en el pecho")
            .row.justify-content-center.p-4
              .col-md-2.mb-4.mb-md-0
                p Para subir una costura de pecho en curva, se debe hacer un pliegue a través del frente del delantero entre el hombro y la sisa. Esos mismos centímetros se deben incluir en un corte horizontal por encima de la cintura al frente y al costadillo del delantero. Bajar la sisa en el costadillo en igual cantidad.
              .col-md-3.mb-3
                .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                  h5 Figura 18. 
                  span Pieza 1 
                figure
                  img(src='@/assets/curso/Tema2/fig18.svg', alt='Dos moldes de prenda están intervenidos para ajuste. El costadillo y el frente delantero presentan ampliaciones con papel en la zona inferior. En el molde frontal se evidencia una pinza doblada y una nueva línea de sisa redibujada en su tamaño original.')
                  figcaption Fuente: Jeffreys, (2005)
        
              .col-md-2.mb-4.mb-md-0 
                p Para bajar una costura de pecho en una curva, se debe cortar a través del frente delantero a mitad de distancia entre el hombro y la sisa. Extender las piezas y hacer un pliegue por el frente y el costadillo cogiendo la misma cantidad. 
              .col-md-3
                .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                  h5 Figura 19. 
                  span Pieza 2
                figure
                  img(src='@/assets/curso/Tema2/fig19.svg', alt='Moldes de costadillo y frente delantero muestran ajustes en largo mediante pliegues ocultos bajo el patrón. Se indica la reconstrucción de la sisa a tamaño original y la ubicación del borde del doblez en cada pieza.')
                  figcaption Fuente: Jeffreys, (2005)

    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/Tema2/subt.svg")
      h3.ps-3.pe-4.mb-0 Caso práctico: reparar un vestido

    .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
      .col-lg-8
        .tarjeta--container.row.mb-5
          .col-md.tarjeta.color-primario.p-5
            .row.justify-content-center.mb-4
              .col-lg-2.col-2
                img.mb-4(src="@/assets/curso/Tema2/img07.svg")
              .col-lg-12
                p En este caso, una clienta requiere la intervención de un vestido que presenta exceso de amplitud en la parte superior del cuerpo y ajuste excesivo en la zona inferior, específicamente a nivel de la cadera. La persona modista deberá ejecutar una serie de procedimientos técnicos para corregir esta desproporción, garantizando un ajuste ergonómico, simétrico y estéticamente armonioso.
          
          .col-md.tarjeta.color-acento-botones.p-5
            .row.justify-content-center.mb-4
              .col-lg-11 
                .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                  h5 Figura 20. 
                  span Vestido clásico
                figure
                  img(src='@/assets/curso/Tema2/vestido.png', alt='Prenda sin mangas, de corte recto y largo medio, con escote redondeado modificado por una pequeña abertura frontal con botones decorativos. Incorpora dos bolsillos de parche en la parte inferior frontal, también con botones centrales.')      
      .col-lg-4.col-8 
        img(src="@/assets/curso/Tema2/img06.png")


    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/Tema2/subt.svg")
      h3.ps-3.pe-4.mb-0 Procedimiento técnico paso a paso

    .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
      .col-lg-5.col-10.mb-4
        img(src="@/assets/curso/Tema2/img8.png")
      .col-lg-7
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Toma de medidas actualizada")
            .col-md-12.mb-4.mb-md-0
              p Se inicia con una nueva medición corporal, registrando las dimensiones clave: contorno de busto, cintura, cadera y largo de talle. Esta información permite comparar la diferencia entre el cuerpo real de la persona usuaria y la estructura del vestido.
          .row(numero="2" titulo="Marcación directa sobre el cuerpo")
            .col-md-12.mb-4.mb-md-0
              p Con la prenda puesta, se procede a realizar una prueba sobre la clienta. Mediante el uso de alfileres, se señalan los puntos de exceso en la parte superior. Posteriormente, se traza con lápiz de tiza borrable el contorno deseado, respetando las líneas anatómicas.
          .row(numero="3" titulo="Rectificación del patrón sobre mesa")
            .col-md-12.mb-4.mb-md-0
              p Una vez en superficie plana, se comparan las medidas del vestido con las medidas tomadas. Se identifican los márgenes disponibles en costados, pinzas o centros. Si la prenda no posee pinzas, se considera su incorporación para lograr un mejor entalle. En ese caso, se trazan siguiendo las proporciones del busto y se cosen con máquina recta.
          .row(numero="4" titulo="Ajuste del cuerpo superior")
            .col-md-12.mb-4.mb-md-0
              p Si el ajuste requiere intervención más profunda, se desbaratan las costuras necesarias. Se trabaja sobre las piezas patrón existentes, marcando las nuevas líneas de costura, y se elimina el excedente de tejido con precisión. Se rehacen las uniones conforme a los nuevos márgenes.
          .row(numero="5" titulo="Ampliación de la parte inferior (zona de cadera)")
            .col-md-12.mb-4.mb-md-0
              p Se toman las medidas reales del contorno de cadera y se calcula el aumento necesario para lograr comodidad y movilidad. Este incremento se divide proporcionalmente:
              .row.justify-content-center.align-items-center
                .col-lg-6
                  ul.lista-ul
                    li.mb-0
                      i.fas.fa-angle-right2
                      | ¼ del aumento se aplica al patrón delantero derecho.

                    li.mb-0
                      i.fas.fa-angle-right2
                      | ¼ al patrón delantero izquierdo.
                .col-lg-6
                  ul.lista-ul
                    li.mb-0
                      i.fas.fa-angle-right2
                      | ¼ al posterior derecho.

                    li.mb-0
                      i.fas.fa-angle-right2
                      | ¼ al posterior izquierdo.

    .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
      .col-lg-5
        .row.justify-content-center.align-items-center
          .col-lg-3.col-3
            img(src="@/assets/curso/Tema2/img9.svg")
          .col-lg-9
            p Se traza una nueva línea de costado paralela a la original, respetando la curva natural de la cadera. Esta curva debe integrarse con fluidez a la línea de la falda para evitar quiebres o deformaciones. Si no hay suficiente margen en costura, puede insertarse una pieza adicional o falsa lateral.
        p Importante tener en cuenta: 
        .row.justify-content-center.align-items-center
          .col-lg-11
            ul.lista-ul
              li.d-flex.mb-0
                i.fas.fa-angle-right2
                | Las modificaciones deben respetar la simetría y el equilibrio visual de la prenda.
              li.d-flex.mb-0
                i.fas.fa-angle-right2
                | Se recomienda una nueva prueba antes del acabado definitivo.

              li.d-flex.mb-0
                i.fas.fa-angle-right2
                | El planchado técnico posterior permitirá asentar las costuras y verificar la caída del vestido.
              li.d-flex.mb-0
                i.fas.fa-angle-right2
                | Si la prenda posee forro, este también debe ajustarse de forma coherente con las modificaciones realizadas.
      .col-lg-3.col-10.mb-4.col-md-6
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 21. 
          span Patrón vestido
        figure
          img(src='@/assets/curso/Tema2/fig21.svg', alt='Molde de prenda sin mangas con línea de corte marcada en diagonal desde la sisa hasta el bajo. Una franja central en color contrastante indica una posible zona de ampliación o inserción de pieza complementaria.')      
        figcaption Fuente:  Sena, (2021)
      .col-lg-4.bg7
        .row.justify-content-center.align-items-center.mb-5.p-4.my-5
          .col-lg-9
            p Hay que tener en cuenta que la ampliación en la parte inferior del patrón del vestido, representada en la figura por la línea roja, corresponde a un ajuste derivado del ensanche realizado en la sección superior. En caso de no contar con suficiente tela, otra alternativa es añadir tela en los costados, ajustando la medida del contorno de cadera. Para ello, la nueva línea lateral se trazará por fuera del patrón base hasta coincidir con la medida deseada. 

    .tarjeta.bg11.p-3.py-md-4(data-aos="fade").mb-3
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/Tema2/video.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-1.bg1color Modificación de moldes - análisis sobre medidas
                p.mb-0.text-white Para ampliar y profundizar en los contenidos abordados, se recomienda consultar el siguiente enlace:
              .col-sm-auto
                a.boton.color-acento-botones(:href="('https://www.youtube.com/watch?v=2Aa8iCb_Zpo&t=1130s')" target="_blank")
                  span Ir al sitio
                  i.fas.fa-circle-play










































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
