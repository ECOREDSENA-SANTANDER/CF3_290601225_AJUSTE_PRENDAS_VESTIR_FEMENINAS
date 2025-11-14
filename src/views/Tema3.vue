<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Acabados y terminados de la prenda

    .bg19.mb-5(data-aos="fade-left")
      .row.align-items-center
        .col-lg-5.col-md-12.d-none.d-lg-block
          img(src='@/assets/curso/Tema3/img01.png', alt='') 
        .col-lg-7
          .p-4.p-lg-5
            p Los acabados finales representan la última etapa en el proceso de confección y ajuste de una prenda de vestir. Esta fase no solo asegura una presentación pulcra y profesional del producto, sino que también contribuye a resaltar detalles de diseño, mejorar la experiencia de uso y generar una percepción de calidad en quien recibe la prenda.
            p Estas acciones, aunque puedan parecer complementarias, constituyen una parte esencial del trabajo técnico, ya que permiten verificar el cumplimiento de las medidas, la correcta ejecución de las costuras y la armonía visual del conjunto.
           
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
        .col-lg-12
          .titulo-sexto.color-acento-contenido.mb-4
            h5 Tabla 8. 
            span #[em Etapas de acabado]
          .tabla-a.color-acento-contenido 
            table(alt='Tabla que describe procedimientos técnicos para acabado de prendas, incluyendo despeluce, lavado técnico, planchado profesional, verificación de medidas y presentación y entrega. Cada procedimiento tiene una descripción técnica específica.')
              thead
                tr
                  th.text-center.bg4.w-25 Procedimiento
                  th.text-center.bg4 Descripción técnica
              tbody
                tr
                  th.texto-izquierda Despeluce
                  td.texto-izquierda Eliminación de hilos sueltos, residuos textiles o imperfecciones visibles, usando tijeras de punta fina o cepillo especial.
                tr
                  th.texto-izquierda Lavado técnico
                  td.texto-izquierda Se realiza solo si la prenda lo requiere por residuos de tiza, manipulación excesiva o marcas del proceso. Debe considerarse el tipo de tejido y acabados aplicados.
                tr
                  th.texto-izquierda Planchado profesional
                  td.texto-izquierda Aplicación de vapor o presión térmica para definir líneas, asentar costuras y realzar la caída del textil. Se recomienda planchado a vapor, especialmente en prendas formales.
                tr
                  th.texto-izquierda Verificación de medidas
                  td.texto-izquierda Revisión sistemática del largo, ancho, simetría y puntos clave de la prenda para asegurar fidelidad con el cuerpo de la persona usuaria.
                tr
                  th.texto-izquierda Presentación y entrega
                  td.texto-izquierda Preparación final de la prenda para su entrega: doblado técnico, empaque protector (si aplica), y registro de entrega o ficha de conformidad con la clienta.
          figcaption Fuente: SENA, (2025)
    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.1 Procesos de acabado

    .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
      .col-lg-12
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
            .row.justify-content-center(titulo="a)	Remallado o fileteado de bordes")
              .col-md-11.mb-4.mb-md-0
                p Aunque en los procesos de confección generalmente se ensamblan las piezas con máquina plana, al realizar arreglos se recomienda abrir las costuras. Esto facilita que, en caso de requerir ajustes posteriores durante la prueba o medición de la prenda, solo sea necesario descoser la costura plana, sin afectar el remallado.
                h4 Materiales
                p Textiles preparados, cortados o desmontados, maquina plana, fileteadora, tijeras y cortahílos.
                .row.mb-3
                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 1. Unir con plancha los dos patrones. 
                        .col-lg-6
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 17. 
                            span  #[em Pieza 1]
                          img(src='@/assets/curso/Tema3/fig22.svg', alt='Superficie rectangular de papel plegada en uno de sus extremos, con línea discontinua paralela al borde que indica la ubicación de un doblez o margen de costura.')
                          figcaption Fuente: Knight, (2010)

                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 2. Pasar la fileteadora por cada lado. 
                        .col-lg-6
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 18. 
                            span  #[em Pieza 2]
                          img(src='@/assets/curso/Tema3/fig23.svg', alt='Pieza rectangular de tela con doble línea de costura visible al centro, generando un acabado simétrico. El área central forma una pestaña doblada hacia ambos lados.')
                          figcaption Fuente: Knight, (2010)
                .row.mb-3
                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 3. Planchar ligeramente por encima para no marcar demasiado los hilos de la fileteadora.
                        .col-lg-6
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 19.  
                            span  #[em  Pieza 3]
                          img(src='@/assets/curso/Tema3/fig24.svg', alt='Tira de tela posicionada con doblez central marcado y costuras planas a cada lado, mientras una plancha se aplica en uno de los extremos para asentar el acabado.')
                          figcaption Fuente: Knight, (2010)

                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 4. Terminados. El fileteado puede realizarse antes de unir las piezas, aunque esta decisión depende de la experiencia y la práctica en el oficio. Es importante tener precaución, ya que una falta de precisión al utilizar la fileteadora puede llevar a cortar más allá del margen de costura previsto, comprometiendo la estructura de la prenda.
                        .col-lg-6
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 20. 
                            span  #[em Pieza 4]
                          img(src='@/assets/curso/Tema3/fig25.svg', alt='Superficie textil con doble línea de pespunte vertical. En la parte superior se amplía el detalle para evidenciar el acabado centrado de una costura recta.')
                          figcaption Fuente: Knight, (2010)
              


            .row.justify-content-center(titulo="b)	Remate con bies")
              .col-md-11.mb-4.mb-md-0
                p Es un remate sólido para las costuras, limpio y se emplea ya sea con el mismo material de la prenda o con cintas, esto depende del acabado que se le quiera dar a la prenda, es muy usado en chaquetas o con textiles que suelen traer filamentos que al cortarlos generan demasiado roce en la piel.
                h4 Materiales
                p Cinta al bies, pie para bies compensado es opcional, se puede realizar con pie de máquina plana normal y el material textil ya preparado para el proceso.
                .row.mb-3
                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 1. Doblar la cinta al bies por la mitad para que contenga los bordes cortados de la tela, puede planchar al doblar si le queda más fácil para el montaje.
                        .col-lg-6
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 21. 
                            span  #[em Pieza 1]
                          img(src='@/assets/curso/Tema3/fig26.svg', alt='Dos piezas textiles rectangulares. Una se encuentra extendida y la otra doblada de forma longitudinal, con sus bordes alineados hacia el interior.')
                          figcaption Fuente: Knight, (2010)

                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 2. Puede sostener el bies junto con la tela con alfileres y también pasar ligeramente la plancha.
                        .col-lg-6
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 22. 
                            span  #[em Pieza 2]
                          img(src='@/assets/curso/Tema3/fig27.svg', alt='Pieza textil rectangular con tira doblada y alineada sobre uno de los bordes. La unión está indicada mediante una línea recta acompañada de marcas de puntada.')
                          figcaption Fuente: Knight, (2010)
                .row.mb-3
                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 3. Coser con la maquina plana y rematar al inicio y final.
                        .col-lg-6
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 23.  
                            span  #[em Pieza 3]
                          img(src='@/assets/curso/Tema3/fig28.svg', alt='Superficie textil con tira doblada y cosida sobre uno de sus bordes. La costura está representada por una línea discontinua paralela al margen.')
                          figcaption Fuente: Knight, (2010)

                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 4. Comprobar al revés de la cinta, que la costura haya quedado en su lugar, de lo contrario desbaratar y volver a iniciar.  Un pie compensado ayuda en este proceso.
                        .col-lg-6
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 24. 
                            span  #[em Pieza 4]
                          img(src='@/assets/curso/Tema3/fig29.svg', alt='Dos piezas textiles unidas en línea recta. Una de ellas presenta un doblez con costura visible paralela al borde, mientras la otra se extiende de manera plana.')
                          figcaption Fuente: Knight, (2010)
                .row
                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 5. Terminado: puede usar también un pie para bies o sesgo, suele ser útil en el proceso, pero debe tener en cuenta que la guía sea del tamaño del ancho del bies.
                        .col-lg-6
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 25.  
                            span  #[em Pieza terminada]
                          img(src='@/assets/curso/Tema3/fig30.svg', alt='Unión entre dos piezas textiles con costura lateral limpia y visible. El área de encuentro está resaltada con un acercamiento circular que permite apreciar el acabado recto y simétrico.')
                          figcaption Fuente: Knight, (2010)

            
            .row.justify-content-center(titulo="c)	Acabado Hong Kong")
              .col-md-11.mb-4.mb-md-0
                p Es muy similar, es menos abultado, esto para ser usado por ejemplo en vestidos, camisas de textiles más livianos.
                h4 Materiales
                p Piezas preparadas para el proceso, cuadrado de tela 50 cm * 50 cm, pie de máquina plana normal, tijeras, cortahílos.
                .row.mb-3
                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 1. Marcar en el cuadrado de tela al sesgo tiras de 3,2 cm para posteriormente cortarlas.
                        .col-lg-6
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 26. 
                            span  #[em Pieza 1]
                          img(src='@/assets/curso/Tema3/fig31.svg', alt='Superficie de tela con líneas diagonales marcadas. En una esquina se ha recortado un triángulo, generando un ángulo inclinado sobre el borde superior derecho.')
                          figcaption Fuente: Knight, (2010)

                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 2. Unir el derecho del sesgo con el derecho de la tela, alineando los bordes y cosiendo en línea recta a 5 mm del borde. 
                        .col-lg-6  
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 27. 
                            span  #[em Pieza 2]
                          img(src='@/assets/curso/Tema3/fig32.svg', alt='Dos piezas textiles están alineadas por sus bordes verticales. Una de ellas presenta una línea discontinua paralela al margen, que representa una costura de unión entre ambas.')
                          figcaption Fuente: Knight, (2010)
                .row.mb-3
                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 3. Recortar el borde que se cosió y dejarlo a 3 mm, doblar la tira del sesgo sobre el borde cortado como se presenta en la figura 33.
                        .col-lg-6
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 28.  
                            span  #[em Pieza 3]
                          img(src='@/assets/curso/Tema3/fig33.svg', alt='Superficie textil con tira doblada en uno de los bordes, asegurada mediante costura recta visible. El acabado refuerza el extremo lateral de la pieza.')
                          figcaption Fuente: Knight, (2010)

                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 4. Sostener al otro lado el sobrante de la tira, coser encima de la costura desde la derecha antes de cortar el sobrante de la tela.
                        .col-lg-6  
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 29. 
                            span  #[em Pieza 4]
                          img(src='@/assets/curso/Tema3/fig34.svg', alt='Pieza textil con doblez en el borde lateral, asegurado mediante una línea de puntadas visibles que recorren el margen de forma paralela.')
                          figcaption Fuente: Knight, (2010)
                .row
                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 5. Terminado: es importante que el bies o sesgo seleccionado para esta operación no se deshilache. 
                        .col-lg-6
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 30.  
                            span  #[em Pieza terminada]
                          img(src='@/assets/curso/Tema3/fig35.svg', alt='Pieza textil con costura doble en posición vertical al centro. Un acercamiento circular amplifica el detalle del pespunte, donde ambas líneas se mantienen equidistantes para lograr un acabado simétrico.')
                          figcaption Fuente: Knight, (2010)


            .row.justify-content-center(titulo="d)	Sobrehilar a mano")
              .col-md-11.mb-4.mb-md-0
                p Sobrehilar puede llegar a dar la apariencia del filete, es muy práctico para telas muy finas que suelen trabarse en la maquina e incluso romperlas. 
                h4 Materiales
                p Textil preparado para el proceso, aguja de mano, hilo, cortahílos, tijeras.
                .row.mb-3
                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 1. Coser a máquina plana las dos partes a 1,5 cm.
                        .col-lg-6
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 31. 
                            span  #[em Pieza 1]
                          img(src='@/assets/curso/Tema3/fig36.svg', alt='Pieza rectangular con doblez en el borde lateral, asegurado mediante una línea de puntadas paralela al margen, formando un acabado limpio en el extremo.')
                          figcaption Fuente: Knight, (2010)

                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 2. Abrir la costura con plancha.
                        .col-lg-6  
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 32. 
                            span  #[em Pieza 2]
                          img(src='@/assets/curso/Tema3/fig37.svg', alt='Dos piezas textiles están unidas por una tira central visible en la parte posterior. La unión genera un acabado plano con simetría a ambos lados del centro.')
                          figcaption Fuente: Knight, (2010)
                .row.mb-3
                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 3. Preparar la aguja e hilo, puede ser sencillo o doble, esto según la apariencia o relleno.
                        .col-lg-6  
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 33.  
                            span  #[em Pieza 3]
                          img(src='@/assets/curso/Tema3/fig38.svg', alt='Aguja en posición diagonal atraviesa una superficie textil, mientras el hilo forma un lazo curvo al ser traccionado hacia el lado opuesto.')
                          figcaption Fuente: Knight, (2010)

                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 4. Rematar los bordes cortados pasando la aguja repetidamente con puntos diagonales.
                        .col-lg-6  
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 34. 
                            span  #[em Pieza 4]
                          img(src='@/assets/curso/Tema3/fig39.svg', alt='Unión central de dos piezas textiles, reforzada por una tira con bordes rematados a ambos lados. Las terminaciones laterales presentan acabado en sobrehilado simétrico.')
                          figcaption Fuente: Knight, (2010)
                .row
                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 5. Terminado.
                        .col-lg-6
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 35.  
                            span  #[em Pieza terminada]
                          img(src='@/assets/curso/Tema3/fig40.svg', alt='Pieza textil con unión central marcada por una línea vertical. En el acercamiento se evidencian los bordes internos con terminaciones en sobrehilado, asegurando el acabado interior de la costura.')
                          figcaption Fuente: Knight, (2010)

            .row.justify-content-center(titulo="e)	Acabado con pespunte")
              .col-md-11.mb-4.mb-md-0
                p  Puede ser práctico cuando se necesite en un arreglo rápido.
                p Piezas preparadas, hilo, aguja de mano y cortahílos.
                h4 Materiales
                p Textil preparado para el proceso, aguja de mano, hilo, cortahílos, tijeras.
                .row.mb-3
                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 1. Realizar una costura simple a 1cm o 1,5 cm.
                        .col-lg-6
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 36. 
                            span  #[em Pieza 1]
                          img(src='@/assets/curso/Tema3/fig41.svg', alt='Superficie textil con margen doblado en uno de los bordes, asegurado mediante una línea de costura discontinua que corre paralela al extremo.')
                          figcaption Fuente: Knight, (2010)

                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 2. Abrir las costuras planchando y hacer otro pliegue en cada borde hacia adentro unos 3 mm.
                        .col-lg-6  
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 37. 
                            span  #[em Pieza 2]
                          img(src='@/assets/curso/Tema3/fig42.svg', alt='Dos piezas textiles unidas mediante una costura central por el reverso, con márgenes doblados hacia el interior. La vista posterior revela un acabado plano y simétrico.')
                          figcaption Fuente: Knight, (2010)
                .row.mb-3
                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 3. Coser cada borde plegado para sujetar el pliegue.
                        .col-lg-6  
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 38.  
                            span  #[em Pieza 3]
                          img(src='@/assets/curso/Tema3/fig43.svg', alt='Pieza textil con doblez reforzado en el borde derecho, compuesto por dos líneas de costura paralelas que aseguran el margen interior. El acabado es plano y resistente.')
                          figcaption Fuente: Knight, (2010)

                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 4. Terminado: esta actividad se puede realizar perfectamente con la máquina.
                        .col-lg-6  
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 39. 
                            span  #[em Pieza 4]
                          img(src='@/assets/curso/Tema3/fig44.svg', alt='Pieza textil con tres líneas verticales de costura visibles. En el acercamiento superior se aprecia el detalle del pespunte doble que asegura una tira central, generando un acabado reforzado.')
                          figcaption Fuente: Knight, (2010)

            .row.justify-content-center(titulo="f)	Ojal hecho a mano")
              .col-md-11.mb-4.mb-md-0
                p Aunque estos acabados son hechos en máquinas, a mano puede ser una alternativa muy útil cuando no se dispone de la maquina en el momento.
                h4 Materiales
                p Material textil listo (botoneras o parte en la que se va a ubicar el ojal, aguja de mano, hilo, cortahílos).
                .row.mb-3
                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 1. Marcar la posición del ojal y cortar en el centro.  Coser a mano una fila de puntadas seguidas una a cada lado de la abertura y alrededor de un extremo a 2 mm de este.  Esto guía el tamaño de las puntadas.
                        .col-lg-6
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 40. 
                            span  #[em Pieza 1]
                          img(src='@/assets/curso/Tema3/fig45.svg', alt='Aguja atraviesa una superficie textil desde el reverso, siguiendo una línea discontinua que marca el recorrido del pespunte. El hilo forma un lazo curvo antes de ser ajustado.')
                          figcaption Fuente: Knight, (2010)

                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 2. Usar hilo doble, sujetar de manera vertical el ojal y asegurar el extremo del hilo con un nudo en la parte de abajo del corte.  Trabajar ambos extremos, derecha e izquierda de la misma manera.
                        .col-lg-6  
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 41. 
                            span  #[em Pieza 2]
                          img(src='@/assets/curso/Tema3/fig46.svg', alt='Aguja atraviesa una superficie desde el reverso mientras el hilo envuelve varias veces una línea vertical de puntadas agrupadas, formando un refuerzo decorativo o funcional.')
                          figcaption Fuente: Knight, (2010)
                .row.mb-3
                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 3. Coser alrededor del extremo y dar la vuelta a lo realizado antes de coser la otra parte.
                        .col-lg-6  
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 42.  
                            span  #[em Pieza 3]
                          img(src='@/assets/curso/Tema3/fig47.svg', alt='Puntadas agrupadas forman un ojal rodeado por hilo enrollado de forma pareja. Una aguja atraviesa lateralmente el centro del refuerzo, mientras el hilo forma un lazo para continuar la costura.')
                          figcaption Fuente: Knight, (2010)

                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 4. Terminar el ojal con una barra hecha con dos o tres hilos, cubierta con puntada festón.
                        .col-lg-6  
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 43. 
                            span  #[em Pieza 4]
                          img(src='@/assets/curso/Tema3/fig48.svg', alt='Aguja atraviesa horizontalmente una estructura de hilo denso que forma un ojal reforzado. El hilo se curva alrededor del extremo redondeado, completando el contorno del acabado.')
                          figcaption Fuente: Knight, (2010)
                .row
                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 5. Terminado: se debe tener en cuenta que la puntada de ojal es muy similar a la del festón.
                        .col-lg-6
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 44.  
                            span  #[em Puntada]
                          img(src='@/assets/curso/Tema3/fig49.svg', alt='Aguja atraviesa verticalmente una superficie, asegurando una serie de puntadas compactas dispuestas horizontalmente. El hilo se curva hacia atrás para continuar el refuerzo en el extremo del ojal.')
                          figcaption Fuente: Knight, (2010)
              
                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-12
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 45.  
                            span  #[em Pieza terminada]
                          img(src='@/assets/curso/Tema3/fig50.svg', alt='Superficie textil con ojal horizontal reforzado por puntadas densas. El acabado se presenta simétrico, con bordes compactos que delimitan la abertura central.')
                          figcaption Fuente: Knight, (2010)

            .row.justify-content-center(titulo="g)	Ojal de tela")
              .col-md-11.mb-4.mb-md-0
                p Utilizado en chaquetas y vestidos de corte sastre, suelen dar una apariencia muy elegante a los trajes.
                h4 Materiales
                p Dependiendo del tamaño del ojal – rectángulos de tela fusionados con entretela, estos deben sobresalir de la marcación de la hoja (es rectangular).
                .row.mb-3
                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 1. Colocar un trozo de tela cortado al sesgo encima de la ubicación del ojal e hilvanar.
                        .col-lg-6
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 46. 
                            span  #[em Pieza 1]
                          img(src='@/assets/curso/Tema3/fig51.svg', alt='Pieza rectangular colocada sobre una superficie contrastante, asegurada con puntadas largas distribuidas en todo su contorno. Las costuras delimitan el perímetro de fijación.')
                          figcaption Fuente: Knight, (2010)

                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 2. Marcar la posición y forma del ojal, acortar el largo de la puntada y coser alrededor de la forma.  Se recomienda empezar en medio. 
                        .col-lg-6  
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 47. 
                            span  #[em Pieza 2]
                          img(src='@/assets/curso/Tema3/fig52.svg', alt='Dos rectángulos concéntricos marcados con líneas de puntadas largas delimitan una zona central sobre la tela. Una línea horizontal punteada atraviesa el espacio interior, indicando el eje de una futura abertura.')
                          figcaption Fuente: Knight, (2010)
                .row.mb-3
                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 3. Cortar por el centro del ojal y hacia las esquinas sin cortar los hilos.
                        .col-lg-6  
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 48.  
                            span  #[em Pieza 3]
                          img(src='@/assets/curso/Tema3/fig53.svg', alt='Zona rectangular delimitada con líneas de puntadas largas. En el centro, una figura de corte horizontal se extiende entre ambos extremos, terminando en formas triangulares que indican puntos de corte diagonal para formar una abertura interna.')
                          figcaption Fuente: Knight, (2010)

                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 4. Tirar de la tela pasándola por el agujero y sacar hacia fuera los bordes.  Ajustar la tela para que quede plana sobre las solapas creadas por los bordes cortados de dentro.  
                        .col-lg-6  
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 49. 
                            span  #[em Pieza 4]
                          img(src='@/assets/curso/Tema3/fig54.svg', alt='Aguja pasa desde el reverso hacia el frente de una abertura rectangular, guiada por una puntada vertical. El hilo forma una curva amplia sobre el fondo, iniciando la fijación de los bordes.')
                          figcaption Fuente: Knight, (2010)
                .row
                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 5. Marcar la posición del ojal en el forro y cortar hacia el centro y hacia las esquinas. Planchar los bordes cortados hacia abajo y coser en su sito por el revés del ojal.
                        .col-lg-6
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 50.  
                            span  #[em Pieza 5]
                          img(src='@/assets/curso/Tema3/fig55.svg', alt='Abertura rectangular con bordes internos asegurados por pequeñas puntadas manuales. En los extremos, los cortes diagonales están reforzados para evitar desgarros, mientras el centro mantiene la forma alineada.')
                          figcaption Fuente: Knight, (2010)
              
                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 6. Terminado.
                        .col-lg-6
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 51.  
                            span  #[em Pieza 6]
                          img(src='@/assets/curso/Tema3/fig56.svg', alt='Abertura rectangular terminada con bordes plegados hacia el interior, formando un ojal de acabado limpio y centrado sobre la superficie textil.')
                          figcaption Fuente: Knight, (2010)

            .row.justify-content-center(titulo="h)	Botones")
              .col-md-11.mb-4.mb-md-0
                p Al coser un botón con agujeros, elabore una presilla de hilo que permita que el botón pase fácilmente por el ojal. Utilice hilo resistente y cosa el botón sobre tela doble para mayor firmeza.
                .row.mb-3
                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 1. Asegurar el hilo a la tela con un nudo por el revés de la tela y pasar por el agujero.
                        .col-lg-6
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 52. 
                            span  #[em Pieza 1]
                          img(src='@/assets/curso/Tema3/fig57.svg', alt='Una aguja atraviesa un botón de cuatro perforaciones mientras el hilo realiza un giro, asegurando el primer paso de fijación sobre una superficie textil plana.')
                          figcaption Fuente: Knight, (2010)

                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 2. Meter la aguja por otro agujero y pasarlo por la tela, el hilo se debe dejar flojo.
                        .col-lg-6  
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 53. 
                            span  #[em Pieza 2]
                          img(src='@/assets/curso/Tema3/fig58.svg', alt='Un botón de cuatro perforaciones se encuentra asegurado sobre una superficie textil, con hilo cruzado que une dos orificios opuestos, mientras la aguja desciende para continuar la fijación.')
                          figcaption Fuente: Knight, (2010)
                .row.mb-3
                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 3. Repetir el proceso pasándolo de nuevo y saque la aguja entre el botón y la tela. De unas vueltas alrededor de los hilos hasta hacer una presilla.
                        .col-lg-6  
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 54.  
                            span  #[em Pieza 3]
                          img(src='@/assets/curso/Tema3/fig59.svg', alt='Una aguja con hilo comienza el proceso de unión pasando por uno de los orificios de un botón de cuatro perforaciones, ubicado sobre una superficie textil.')
                          figcaption Fuente: Knight, (2010)

                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 4. Por último, se debe sacar la aguja por el revés de la tela y pasarla por las puntadas para fijarlas. Remate y corte el hilo.
                        .col-lg-6  
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 55. 
                            span  #[em Pieza 4]
                          img(src='@/assets/curso/Tema3/fig60.svg', alt='Una aguja atraviesa una superficie textil desde el reverso hacia el frente, llevando un hilo que forma un arco amplio y se dirige hacia una zona previamente intervenida con puntada.')
                          figcaption Fuente: Knight, (2010)
                .row.justify-content-center
                  .col-sm-8.col-lg-12.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-3
                          p Paso 5. Repetir el proceso anterior, pero saque la aguja directamente por la patilla. Rematar por el revés de la misma manera que en el caso de los agujeros.
                        .col-lg-3.mb-3
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 56.  
                            span  #[em Pieza 5]
                          img(src='@/assets/curso/Tema3/fig61.svg', alt='Un botón grueso con base elevada ha sido asegurado sobre una superficie textil mediante una puntada central, mientras el hilo y la aguja permanecen listos para continuar el proceso de fijación.')
                          figcaption Fuente: Knight, (2010)
                        .col-lg-3.mb-3
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 57.  
                            span  #[em Botones forrados con patilla ]
                          img(src='@/assets/curso/Tema3/fig62.svg', alt='Dos elementos circulares acolchados están ubicados de forma paralela sobre una superficie textil, dispuestos simétricamente y con volumen uniforme.')
                          figcaption Fuente: Knight, (2010)

                        .col-lg-3
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 58.  
                            span  #[em Botones con agujeros]
                          img(src='@/assets/curso/Tema3/fig63.svg', alt='Dos botones circulares con cuatro perforaciones están alineados horizontalmente sobre una superficie textil, con bordes ligeramente elevados y disposición simétrica.')
                          figcaption Fuente: Knight, (2010)

            .row.justify-content-center(titulo="i) Cierres a presión")
              .col-md-11.mb-4.mb-md-0
                p Existen en diversos tamaños y materiales, como plástico o metal, ya sea en acabado negro o plateado.
                .row.mb-3
                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 1. Marcar la posición del cierre y con el hilo doble, asegurar el extremo en la tela.
                        .col-lg-6
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 59. 
                            span  #[em Pieza 1]
                          img(src='@/assets/curso/Tema3/fig64.svg', alt='Una aguja enhebrada atraviesa una superficie textil desde el anverso, con el hilo extendido en curva hacia un costado, iniciando el proceso de unión.')
                          figcaption Fuente: Knight, (2010)

                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 2. Coser unas cuantas puntadas en cada agujero fijándolo a la tela. Hacer las puntadas debajo del cierre para que no se vean por el revés.
                        .col-lg-6  
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 60. 
                            span  #[em Pieza 2]
                          img(src='@/assets/curso/Tema3/fig65.svg', alt='Un botón de base central elevada ha sido fijado sobre una superficie textil mediante varias puntadas laterales, mientras la aguja enhebrada continúa el proceso de costura desde uno de los orificios.')
                          figcaption Fuente: Knight, (2010)
                .row.mb-3
                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 3. Prenda terminada.
                        .col-lg-6  
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 61.  
                            span  #[em Pieza 3]
                          img(src='@/assets/curso/Tema3/fig66.svg', alt='Dos broches metálicos están colocados en extremos opuestos de una prenda doblada, ubicados de forma simétrica para permitir el cierre por presión entre ambas piezas textiles.')
                          figcaption Fuente: Knight, (2010)

                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-12
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 62.  
                            span  #[em Botón de cierre]
                          img(src='@/assets/curso/Tema3/fig67.svg', alt='Botón de cierre metálico de presión, compuesto por una base circular con orificios para su fijación y una cabeza saliente que encaja con la parte complementaria del broche. Se utiliza comúnmente en prendas y accesorios para asegurar dos piezas de tela.')
                    
            .row.justify-content-center(titulo="j)	Cierres a presión automático")
              .col-md-11.mb-4.mb-md-0
                p Para un acabado especial y cuidado, cubra los automáticos con tela para que sean prácticamente invisibles.
                .row.mb-3
                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 1.  Realizar un agujero pequeño en el centro de un retazo de tela y pase la bolita del cierre por él. Una la otra parte del cierre para mantenerlo en su sitio.
                        .col-lg-6
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 63. 
                            span  #[em Pieza 1]
                          img(src='@/assets/curso/Tema3/fig68.svg', alt='Tres piezas alineadas verticalmente indican el armado de un broche metálico, con una parte superior e inferior dispuestas para unirse a través de una superficie textil perforada.')
                          figcaption Fuente: Knight, (2010)

                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 2.  Se debe coser un círculo de puntadas alrededor del cierre y fruncir. Cortar el exceso de tela.
                        .col-lg-6  
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 64. 
                            span  #[em Pieza 2]
                          img(src='@/assets/curso/Tema3/fig69.svg', alt='Una aguja enhebrada atraviesa un accesorio textil fruncido, adherido a una base rígida redonda, en el proceso de sujeción mediante puntadas a mano.')
                          figcaption Fuente: Knight, (2010)
                .row.mb-3
                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 3.  Repetir el proceso con la otra mitad del automático y luego coser ambos en su sitio.
                        .col-lg-6  
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 65.  
                            span  #[em Pieza 3]
                          img(src='@/assets/curso/Tema3/fig70.svg', alt='Dos piezas redondas de superficie textil acolchada se disponen por separado; una integra un pequeño vástago central, mientras la otra presenta una hendidura circular, indicando su función como sistema de cierre.')
                          figcaption Fuente: Knight, (2010)

                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 4.  Prenda terminada.
                        .col-lg-6  
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 66.  
                            span  #[em Cierres cubiertos de tela]
                          img(src='@/assets/curso/Tema3/fig71.svg', alt='Dos piezas textiles superpuestas cuentan con botones cosidos sobre una superficie de tejido con textura gruesa y entramado visible, alineados para facilitar el cierre.')
                          figcaption Fuente: Knight, (2010)

            .row.justify-content-center(titulo="k)	Ojales en telas transparentes")
              .col-md-11.mb-4.mb-md-0
                p Para realizar ojales en telas transparentes, la organza de seda es una opción ideal para este refuerzo.
                .row.mb-3
                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 1.  Se debe colocar una o dos capas de organza de seda entre las dos de tela y añadir una tira de estabilizador transparente en la superficie.
                        .col-lg-6
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 67. 
                            span  #[em Pieza 1]
                          img(src='@/assets/curso/Tema3/fig72.svg', alt='Una estructura rectangular compuesta por varias capas textiles incluye una pieza doblada en una de sus esquinas, revelando una entretela central adherida entre las capas, con puntadas visibles en el contorno.')
                          figcaption Fuente: Knight, (2010)

                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 2.  Hilvanar las capas, marcar la posición del ojal y escoger la opción para ojales ligeros.
                        .col-lg-6  
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 68. 
                            span  #[em Pieza 2]
                          img(src='@/assets/curso/Tema3/fig73.svg', alt='Una aguja enhebrada realiza una puntada sobre un conjunto de capas rectangulares, donde una pieza central está reforzada con entretela y asegurada mediante costura perimetral.')
                          figcaption Fuente: Knight, (2010)
                .row.mb-3
                  .col-sm-6.col-lg-4.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-4
                          p Paso 3.  Coser el ojal en su sitio.
                        .col-lg-7  
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 69.  
                            span  #[em Pieza 3]
                          img(src='@/assets/curso/Tema3/fig74.svg', alt='Una máquina de coser ejecuta una costura recta sobre una estructura rectangular reforzada con entretela, utilizando un prensatelas especializado para formar una abertura funcional.')
                          figcaption Fuente: Knight, (2010)

                  .col-sm-6.col-lg-4.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-4
                          p Paso 4.  Pulir el ojal.
                        .col-lg-7  
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 70.  
                            span  #[em Pieza 4]
                          img(src='@/assets/curso/Tema3/fig75.svg', alt='Una herramienta de corte con mango cilíndrico realiza una incisión precisa en una abertura rectangular previamente cosida sobre una superficie textil.')
                          figcaption Fuente: Knight, (2010)

                  .col-sm-6.col-lg-4.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-4
                          p Paso 5.  Prenda terminada.
                        .col-lg-7  
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 71.  
                            span  #[em Pieza 5]
                          img(src='@/assets/curso/Tema3/fig76.svg', alt='Una abertura rectangular terminada con costura densa y reforzada se encuentra centrada sobre una superficie textil, lista para cumplir su función de ojal.')
                          figcaption Fuente: Knight, (2010)


    .row.justify-content-center(data-aos='fade-right')
      .col-lg-5.bg5.p-3.mb-3
        p Para la revisión de las prendas y que estas cumplan de acuerdo con los criterios, se necesitan revisar midiendo cada una de las partes, dado que todo patrón es simétrico dependiendo del diseño y estas deberán responder a su vez a las medidas del cliente.
      .col-lg-7
        .tarjeta.bg11.p-3.py-md-4(data-aos="fade").mb-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/Tema2/video.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1.bg1color Inspección producto terminado
                  p.mb-0.text-white Para ampliar y profundizar en los contenidos abordados,  se recomienda consultar el siguiente enlace:
                .col-sm-auto
                  a.boton.color-acento-botones(:href="('https://www.youtube.com/watch?v=gI-vVYROAMY')" target="_blank")
                    span Ir al sitio
                    i.fas.fa-circle-play

    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.2 Preparación y detalles en las piezas

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        p La preparación de insumos y detalles en las piezas es un proceso que se realiza previamente al armado de la prenda. Se trata de una etapa fundamental en el oficio del sastre, orientada no solo a lograr una adaptación precisa de la tela al cuerpo, sino también a garantizar que cada insumo se integre de manera exacta y funcional en el momento de su incorporación a la prenda o pieza textil.
      .col-lg-4.col-8.mb-3
        img(src="@/assets/curso/Tema3/img02.svg")
      .col-lg-4.bg3.p-4
        p #[b El cambrado de cierre:] es una técnica utilizada en confección para doblar y fijar los bordes de la tela que cubren el cierre, logrando un acabado limpio, funcional y estético. Este proceso facilita que el cierre quede bien integrado y protegido dentro de la prenda.

    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/Tema2/subt.svg")
      h3.ps-3.pe-4.mb-0 Pasos para realizar el cambrado del cierre

    .row.justify-content-center.align-items-center(data-aos='fade-right')
      .col-lg-10
        PasosA.color-adicional-1.mb-5(tipo="n")
          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h4 Paso 1. 
              p Cierre sin haberse intervenido.
            .col-md-5
              .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                h5 Figura 72... 
                span #[em Paso 1]
              img(src='@/assets/curso/Tema3/72.png', alt='Cierre de cremallera en posición inicial, completamente unida y alineada, lista para iniciar el proceso de confección o montaje en la prenda.')
            

          .row.texto-izquierda.align-items-center 
            .col-md-5
              .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                h5 Figura 73.  
                span #[em Paso 2]
              img(src='@/assets/curso/Tema3/73.png', alt='Proceso de planchado sobre una cremallera para asentar la tela y facilitar su correcta fijación antes de la costura. ')
          

            .col-md-6.mb-4.mb-md-0
              h4 Paso 2. 
              p Humedezca la tela del cierre y aplique calor con la plancha mientras estira con la mano opuesta hasta formar una ligera ondulación. Repita el proceso en el otro lado.

          .row.align-items-center
            .col-md-6.mb-4.mb-md-0
              h4 Paso 3.  
              p Cierre con cambrado, de este modo, el cierre se ajustará perfectamente a la curvatura del cuerpo, brindando un acabado preciso y ergonómico.
            .col-md-5
              .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                h5 Figura 74.  
                span Paso 3 
              img(src='@/assets/curso/Tema3/74.png', alt='Cremallera parcialmente abierta, con ambos lados separados desde el centro, indicando el proceso de apertura o verificación del funcionamiento del cierre.')
       

    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.3 Costuras manuales

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-7
        p.bg6.p-4 El proceso de confección artesanal requiere dominio de diversas costuras manuales, las cuales constituyen la base del trabajo del sastre y complementan las operaciones de costura en línea realizadas a máquina. Estas puntadas, ejecutadas con aguja e hilo, permiten unir, reforzar, sujetar o embellecer las piezas textiles con precisión y detalle. Entre las más representativas se encuentran el punto atrás o punto máquina, empleado para costuras firmes y resistentes; el punto de hilván, utilizado para unir temporalmente las piezas antes de la costura definitiva; la puntada de bastilla o de frunce, que sirve para ajustar o fruncir el tejido; y el sobrehilado, que evita el deshilachado de los bordes.
        p Otras técnicas relevantes son el punto de lado o inglés, ideal para dobladillos invisibles; la puntada doble sobrehilado, usada para reforzar costuras; el punto deslizado y la puntada invisible, que aportan acabados limpios en la confección fina. Asimismo, se incluyen el punto de cruz y la puntada de festón o manta, de carácter decorativo, junto con la costura cadeneta y la puntada de ojal, esenciales para cierres y refuerzos.
      .col-lg-5.mb-3.col-md-8
        img(src="@/assets/curso/Tema3/img19.png")
      .col-lg-12
        p El hilván flojo y la puntada escapulario o gaviado se emplean para ajustes temporales o decorativos. Estas técnicas, combinadas con las costuras en línea realizadas a máquina, garantizan precisión estructural, durabilidad y un acabado estético profesional en la confección de prendas.
    .tarjeta.bg11.p-3.py-md-4(data-aos="fade").mb-5
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/Tema3/www.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-1.bg1color Cinco puntos de costura a mano que necesitas saber
                p.mb-0.text-white Para ampliar y profundizar los contenidos abordados, se recomienda consultar el siguiente enlace:
              .col-sm-auto
                a.boton.color-acento-botones(:href="('https://www-seamwork-com.translate.goog/sewing-tutorials/know-your-stitches?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=tc')" target="_blank")
                  span Ir al sitio
                  i.fas.fa-circle-play

    Separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.4 Revisión y procesos de calidad en una prenda


    .row.justify-content-center.align-items-center.mb-5.bg6.p-4(data-aos='fade-right')
      .col-lg-3.col-md-6
        img(src="@/assets/curso/Tema3/img11.svg")
      .col-lg-8
        p El control de calidad constituye una herramienta fundamental dentro del proceso de confección, ya que permite minimizar errores, reducir desperdicios de material y evitar reprocesos durante el ensamble de las prendas. Esta práctica técnica mejora la eficiencia del taller, fortalece la confianza de la clientela y contribuye directamente a la competitividad de la empresa, tanto a nivel operativo como comercial.
        p La implementación de un sistema de calidad en la confección no se limita a una simple inspección visual; por el contrario, implica una cultura organizacional orientada a la mejora continua, a la identificación temprana de fallos y a la formación constante del equipo de trabajo.

    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/Tema2/subt.svg")
      h3.ps-3.pe-4.mb-0 Principios fundamentales del control de calidad

    p.mb-3 Para desarrollar un sistema efectivo de control de calidad en el área textil y de modas, es necesario incorporar los siguientes principios:


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
        .col-lg-12
          .titulo-sexto.color-acento-contenido.mb-4
            h5 Tabla 9. 
            span #[em Principios en el control de la calidad]
          .tabla-a.color-acento-contenido 
            table(alt='Tabla que detalla principios técnicos con sus descripciones operativas, enfocada en mejorar procesos de confección. Incluye mejora continua, evitar inspecciones masivas, relación precio-calidad, capacitación técnica, competitividad, identificación del talento, eliminación de barreras y establecimiento de ruta de calidad.')
              thead
                tr
                  th.text-center.bg4.w-25 Principio técnico
                  th.text-center.bg4 Descripción operativa
              tbody
                tr
                  th.texto-izquierda Mejora continua
                  td.texto-izquierda Implementar procesos que permitan evaluar, corregir y perfeccionar las prácticas de confección de forma constante.
                tr
                  th.texto-izquierda Evitar inspecciones masivas
                  td.texto-izquierda Sustituir la revisión tardía por el control integrado en cada fase del proceso.
                tr
                  th.texto-izquierda Relación precio – calidad
                  td.texto-izquierda Hay que asegurar que los materiales, tiempos y acabados estén alineados con las expectativas económicas y estéticas.
                tr
                  th.texto-izquierda Capacitación técnica permanente
                  td.texto-izquierda Actualizar los saberes del equipo mediante métodos modernos de entrenamiento en herramientas, maquinaria y técnicas.
                tr
                  th.texto-izquierda Exigencia de la competitividad
                  td.texto-izquierda Establecer estándares de calidad que se traduzcan en diferenciación frente al mercado.
                tr
                  th.texto-izquierda Identificación del talento con la calidad del producto
                  td.texto-izquierda Fomentar el sentido de pertenencia, haciendo que cada persona se reconozca como responsable del resultado final.
                tr
                  th.texto-izquierda Eliminación de barreras entre áreas
                  td.texto-izquierda Promover el trabajo colaborativo entre corte, confección, acabado y control, evitando divisiones ineficientes.
                tr
                  th.texto-izquierda Establecimiento de la ruta de calidad
                  td.texto-izquierda Definir procedimientos, tiempos de revisión y criterios de aceptación en cada fase del proceso productivo.
          figcaption Fuente: SENA, (2025)

    p.mb-3 Estas acciones no solo mejoran el producto final, sino que también transforman la cultura organizacional hacia la excelencia, permitiendo que el taller o empresa de confección evolucione hacia modelos sostenibles, eficientes y centrados en la satisfacción del cliente.


    .subt2.mb-5(data-aos="fade")    
      h3.pb-1.mb-0 Revisión de prendas

    
    .bloque-texto-g.bloque-texto-g--inverso.bg10.p-3.p-sm-4.p-md-5.mb-4(data-aos='fade-right')
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/Tema3/img14.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Desde una perspectiva técnica y de gestión, el concepto de calidad está directamente asociado al grado de satisfacción de la persona usuaria, en la medida en que un producto o servicio responde eficazmente a sus necesidades, requisitos funcionales y expectativas. Este enfoque es consistente con los términos utilizados por diversos estudiosos del área, quienes identifican como elementos clave del concepto de calidad las palabras: satisfacción, cliente, necesidades, mercado y expectativas.
          br
          br
          | En ese sentido, la calidad no se reduce únicamente a la apariencia o al acabado de una prenda, sino que implica el cumplimiento riguroso de las expectativas y necesidades del cliente, tanto en aspectos funcionales como simbólicos. Esta relación entre el producto y las expectativas del usuario exige el control de todas las variables que puedan influir en la experiencia final. En otras palabras, la calidad es la traducción efectiva de lo que el cliente espera.

    p.mb-3 Para ello, se identifican tres niveles de requisitos:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
        .col-lg-12
          .titulo-sexto.color-acento-contenido.mb-4
            h5 Tabla 10. 
            span #[em Niveles de revisión]
          .tabla-a.color-acento-contenido 
            table(alt='Tabla con tres niveles de satisfacción del cliente: necesidades, expectativas y superar expectativas. Cada nivel tiene su descripción técnica y ejemplos asociados, como funcionalidad, atención personalizada y asesoría postventa.')
              thead
                tr
                  th.text-center.bg4.w-25 Nivel
                  th.text-center.bg4 Descripción técnica
                  th.text-center.bg4 Ejemplos asociados
              tbody
                tr
                  th.texto-izquierda 1. Necesidades
                  td.texto-izquierda Son esenciales; si no se cumplen, generan insatisfacción inmediata
                  td.texto-izquierda Funcionalidad, cumplimiento del precio y tiempo de entrega, durabilidad.
                tr
                  th.texto-izquierda 2. Expectativas
                  td.texto-izquierda No son obligatorias, pero mejoran significativamente la percepción del servicio si están presentes.
                  td.texto-izquierda Trato cordial, atención personalizada, escucha activa.
                tr
                  th.texto-izquierda 3. Superar expectativas
                  td.texto-izquierda Elementos no esperados que sorprenden positivamente y fidelizan al cliente.
                  td.texto-izquierda Asesoría postventa, descuentos inesperados, entregas anticipadas.
          figcaption Fuente: SENA, (2025)

    p.mb-4 Los requisitos del producto pueden clasificarse en función de distintos criterios:


    .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
      .col-lg-7.mb-3
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Funcionales")
            .col-md-12.mb-4.mb-md-0
              p ¿Para qué sirve el producto? ¿cumple su propósito de uso?
          .row(numero="2" titulo="Técnicos")
            .col-md-12.mb-4.mb-md-0
              p Incluyen dimensiones, peso, color, cantidad y demás especificaciones cuantificables.
          .row(numero="3" titulo="Económicos")
            .col-md-12.mb-4.mb-md-0
              p Referentes al precio pactado, condiciones de pago y relación valor - beneficio.
          .row(numero="4" titulo="Logísticos ")
            .col-md-12.mb-4.mb-md-0
              p Tiempos y condiciones de entrega, transporte y embalaje.
          .row(numero="5" titulo="Personalizados ")
            .col-md-12.mb-4.mb-md-0
              p Indicaciones específicas de la persona usuaria en relación con diseño, ajuste, acabados.
          .row(numero="6" titulo="Durabilidad y mantenimiento")
            .col-md-12.mb-4.mb-md-0
              p Vida útil esperada, facilidad de lavado, resistencia al uso.
          .row(numero="7" titulo="Normativos y legales")
            .col-md-12.mb-4.mb-md-0
              p Cumplimiento de normas de etiquetado, materiales permitidos, sostenibilidad, entre otros.


      .col-lg-5.col-10.mb-4.col-md-8
        img(src="@/assets/curso/Tema3/img15.png")


    .subt.mb-4(data-aos="fade")
      img(src="@/assets/curso/Tema2/subt.svg")
      h3.ps-3.pe-4.mb-0 Tolerancias: márgenes permitidos de variación

    .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
      .col-lg-4.col-md-6
        img(src="@/assets/curso/Tema3/img16.svg")
      .col-lg-5.bg10.p-4
        br 
        br 
        p Dado que es imposible eliminar por completo todas las variaciones en procesos manuales o semiautomatizados como la confección, se deben establecer tolerancias técnicas, es decir, márgenes aceptables de desviación que no afectan la funcionalidad ni la satisfacción del cliente.
        br
      .col-lg-3.bg3.p-4
        br
        p Por ejemplo:
        ul.lista-ul
          li.mb-0.d-flex
            i.fas.fa-angle-right2
            p.mb-0 Una prenda puede tener ± 0,5 cm de tolerancia en costados.
          li.mb-0.d-flex
            i.fas.fa-angle-right2
            p.mb-0 El color puede variar ligeramente entre lotes si se encuentra dentro del rango aceptado por la norma o el acuerdo con el cliente.


    Separador
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.5 Control de calidad en industrial textil y confección

    .bloque-texto-g.bg18.p-3.p-sm-4.p-md-5.mb-4(data-aos='fade-right')
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/Tema3/img17.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        br
        br
        p.mb-0 La implementación de herramientas para el control de calidad en los procesos de confección genera beneficios tangibles y estratégicos tanto para la productividad como para la sostenibilidad empresarial. Este control se aplica de manera transversal a todas las fases del proceso, desde el diseño inicial de la prenda hasta su entrega final a la persona usuaria.
        br
        br
        br


    .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
      .col-lg-9
        .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
          .col-lg-12
            .titulo-sexto.color-acento-contenido.mb-4
              h5 Tabla 11. 
              span #[em Beneficios de la implementación de la calidad]
            .tabla-a.color-acento-contenido 
              table(alt='Tabla que relaciona beneficios con su impacto en el proceso productivo, incluyendo reducción de costos, disminución de defectos, estandarización, disminución de desperdicios, mejora de procesos y aumento de productividad.')
                thead
                  tr
                    th.text-center.bg4.w-25 Beneficio
                    th.text-center.bg4 Impacto en el proceso
                tbody
                  tr
                    th.texto-izquierda Reducción de costos
                    td.texto-izquierda Minimiza reprocesos, errores y pérdidas materiales.
                  tr
                    th.texto-izquierda Disminución de defectos
                    td.texto-izquierda Mejora la confiabilidad del producto y la percepción del cliente.
                  tr
                    th.texto-izquierda Estandarización del producto
                    td.texto-izquierda Asegura uniformidad en medidas, acabados y presentación.
                  tr
                    th.texto-izquierda Disminución de desperdicios
                    td.texto-izquierda Favorece el aprovechamiento de insumos y materias primas.
                  tr
                    th.texto-izquierda Mejora de los procesos
                    td.texto-izquierda Permite identificar puntos críticos y optimizar cada etapa de producción.
                  tr
                    th.texto-izquierda Aumento de la productividad
                    td.texto-izquierda Agiliza tiempos, reduce ciclos de retrabajo y eleva el rendimiento del equipo humano.
            figcaption Fuente: SENA, (2025)  
      .col-lg-3.col-8.col-md-6
        img(src="@/assets/curso/Tema3/img18.png")







</template>

<script>
export default {
  name: 'Tema3',
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
