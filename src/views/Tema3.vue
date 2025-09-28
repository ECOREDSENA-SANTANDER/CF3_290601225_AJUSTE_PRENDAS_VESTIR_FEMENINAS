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
            span Etapas de acabado 
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

    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.1 Procesos de acabado

    .row.justify-content-center.align-items-center.mb-5
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
                            h5 Figura 22. 
                            span  Paso 1
                          img(src='@/assets/curso/Tema3/fig22.svg', alt='Se observa una superficie rectangular de papel plegada en uno de sus extremos, con una línea discontinua paralela al borde que indica la ubicación de un doblez o margen de costura (Pág. 67, anexo 1, cargado al SharePoint). A continuación, una pieza rectangular de tela con doble línea de costura visible al centro genera un acabado simétrico en forma de pestaña doblada hacia ambos lados (Pág. 67, anexo 1, cargado al SharePoint). Seguidamente, se presenta una tira de tela con doblez central marcado y costuras planas a cada lado, mientras una plancha se aplica en uno de los extremos para asentar el acabado (Pág. 67, anexo 1, cargado al SharePoint). Finalmente, se observa una superficie textil con doble línea de pespunte vertical, donde en la parte superior se amplía el detalle para evidenciar el acabado centrado de una costura recta (Pág. 67, anexo 1, cargado al SharePoint).')
                          figcaption Fuente: Knight, (2010)

                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 2. Pasar la fileteadora por cada lado. 
                        .col-lg-6
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 23. 
                            span  Paso 2
                          img(src='@/assets/curso/Tema3/fig23.svg', alt='Se observa una superficie rectangular de papel plegada en uno de sus extremos, con una línea discontinua paralela al borde que indica la ubicación de un doblez o margen de costura (Pág. 67, anexo 1, cargado al SharePoint). A continuación, una pieza rectangular de tela con doble línea de costura visible al centro genera un acabado simétrico en forma de pestaña doblada hacia ambos lados (Pág. 67, anexo 1, cargado al SharePoint). Seguidamente, se presenta una tira de tela con doblez central marcado y costuras planas a cada lado, mientras una plancha se aplica en uno de los extremos para asentar el acabado (Pág. 67, anexo 1, cargado al SharePoint). Finalmente, se observa una superficie textil con doble línea de pespunte vertical, donde en la parte superior se amplía el detalle para evidenciar el acabado centrado de una costura recta (Pág. 67, anexo 1, cargado al SharePoint).')
                          figcaption Fuente: Knight, (2010)
                .row.mb-3
                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 3. Planchar ligeramente por encima para no marcar demasiado los hilos de la fileteadora.
                        .col-lg-6
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 24.  
                            span  Paso 3
                          img(src='@/assets/curso/Tema3/fig24.svg', alt='Se observa una superficie rectangular de papel plegada en uno de sus extremos, con una línea discontinua paralela al borde que indica la ubicación de un doblez o margen de costura (Pág. 67, anexo 1, cargado al SharePoint). A continuación, una pieza rectangular de tela con doble línea de costura visible al centro genera un acabado simétrico en forma de pestaña doblada hacia ambos lados (Pág. 67, anexo 1, cargado al SharePoint). Seguidamente, se presenta una tira de tela con doblez central marcado y costuras planas a cada lado, mientras una plancha se aplica en uno de los extremos para asentar el acabado (Pág. 67, anexo 1, cargado al SharePoint). Finalmente, se observa una superficie textil con doble línea de pespunte vertical, donde en la parte superior se amplía el detalle para evidenciar el acabado centrado de una costura recta (Pág. 67, anexo 1, cargado al SharePoint).')
                          figcaption Fuente: Knight, (2010)

                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 4. Terminados. El fileteado puede realizarse antes de unir las piezas, aunque esta decisión depende de la experiencia y la práctica en el oficio. Es importante tener precaución, ya que una falta de precisión al utilizar la fileteadora puede llevar a cortar más allá del margen de costura previsto, comprometiendo la estructura de la prenda.
                        .col-lg-6
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 25. 
                            span  Paso 4
                          img(src='@/assets/curso/Tema3/fig25.svg', alt='Se observa una superficie rectangular de papel plegada en uno de sus extremos, con una línea discontinua paralela al borde que indica la ubicación de un doblez o margen de costura (Pág. 67, anexo 1, cargado al SharePoint). A continuación, una pieza rectangular de tela con doble línea de costura visible al centro genera un acabado simétrico en forma de pestaña doblada hacia ambos lados (Pág. 67, anexo 1, cargado al SharePoint). Seguidamente, se presenta una tira de tela con doblez central marcado y costuras planas a cada lado, mientras una plancha se aplica en uno de los extremos para asentar el acabado (Pág. 67, anexo 1, cargado al SharePoint). Finalmente, se observa una superficie textil con doble línea de pespunte vertical, donde en la parte superior se amplía el detalle para evidenciar el acabado centrado de una costura recta (Pág. 67, anexo 1, cargado al SharePoint).')
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
                            h5 Figura 26. 
                            span  Paso 1
                          img(src='@/assets/curso/Tema3/fig26.svg', alt='Dos piezas textiles rectangulares. Una se encuentra extendida y la otra doblada de forma longitudinal, con sus bordes alineados hacia el interior. La imagen se encuentra: Pág. 68 anexo 1, cargado al sharepoint Pieza textil rectangular con tira doblada y alineada sobre uno de los bordes. La unión está indicada mediante una línea recta acompañada de marcas de puntada. La imagen se encuentra: Pág. 68 anexo1, cargado al sharepoint Superficie textil con tira doblada y cosida sobre uno de sus bordes. La costura está representada por una línea discontinua paralela al margen. La imagen se encuentra: Pág. 68 anexo 1, cargado al sharepoint Dos piezas textiles unidas en línea recta. Una de ellas presenta un doblez con costura visible paralela al borde, mientras la otra se extiende de manera plana. La imagen se encuentra: Pág. 68 anexo 1, cargado al sharepoint Unión entre dos piezas textiles con costura lateral limpia y visible. El área de encuentro está resaltada con un acercamiento circular que permite apreciar el acabado recto y simétrico. La imagen se encuentra: Pág. 68 anexo 1, cargado al sharepoint')
                          figcaption Fuente: Knight, (2010)

                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 2. Puede sostener el bies junto con la tela con alfileres y también pasar ligeramente la plancha.
                        .col-lg-6
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 27. 
                            span  Paso 2
                          img(src='@/assets/curso/Tema3/fig27.svg', alt='Dos piezas textiles rectangulares. Una se encuentra extendida y la otra doblada de forma longitudinal, con sus bordes alineados hacia el interior. La imagen se encuentra: Pág. 68 anexo 1, cargado al sharepoint Pieza textil rectangular con tira doblada y alineada sobre uno de los bordes. La unión está indicada mediante una línea recta acompañada de marcas de puntada. La imagen se encuentra: Pág. 68 anexo1, cargado al sharepoint Superficie textil con tira doblada y cosida sobre uno de sus bordes. La costura está representada por una línea discontinua paralela al margen. La imagen se encuentra: Pág. 68 anexo 1, cargado al sharepoint Dos piezas textiles unidas en línea recta. Una de ellas presenta un doblez con costura visible paralela al borde, mientras la otra se extiende de manera plana. La imagen se encuentra: Pág. 68 anexo 1, cargado al sharepoint Unión entre dos piezas textiles con costura lateral limpia y visible. El área de encuentro está resaltada con un acercamiento circular que permite apreciar el acabado recto y simétrico. La imagen se encuentra: Pág. 68 anexo 1, cargado al sharepoint')
                          figcaption Fuente: Knight, (2010)
                .row.mb-3
                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 3. Coser con la maquina plana y rematar al inicio y final.
                        .col-lg-6
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 28.  
                            span  Paso 3
                          img(src='@/assets/curso/Tema3/fig28.svg', alt='Dos piezas textiles rectangulares. Una se encuentra extendida y la otra doblada de forma longitudinal, con sus bordes alineados hacia el interior. La imagen se encuentra: Pág. 68 anexo 1, cargado al sharepoint Pieza textil rectangular con tira doblada y alineada sobre uno de los bordes. La unión está indicada mediante una línea recta acompañada de marcas de puntada. La imagen se encuentra: Pág. 68 anexo1, cargado al sharepoint Superficie textil con tira doblada y cosida sobre uno de sus bordes. La costura está representada por una línea discontinua paralela al margen. La imagen se encuentra: Pág. 68 anexo 1, cargado al sharepoint Dos piezas textiles unidas en línea recta. Una de ellas presenta un doblez con costura visible paralela al borde, mientras la otra se extiende de manera plana. La imagen se encuentra: Pág. 68 anexo 1, cargado al sharepoint Unión entre dos piezas textiles con costura lateral limpia y visible. El área de encuentro está resaltada con un acercamiento circular que permite apreciar el acabado recto y simétrico. La imagen se encuentra: Pág. 68 anexo 1, cargado al sharepoint')
                          figcaption Fuente: Knight, (2010)

                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 4. Comprobar al revés de la cinta, que la costura haya quedado en su lugar, de lo contrario desbaratar y volver a iniciar.  Un pie compensado ayuda en este proceso.
                        .col-lg-6
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 29. 
                            span  Paso 4
                          img(src='@/assets/curso/Tema3/fig29.svg', alt='Dos piezas textiles rectangulares. Una se encuentra extendida y la otra doblada de forma longitudinal, con sus bordes alineados hacia el interior. La imagen se encuentra: Pág. 68 anexo 1, cargado al sharepoint Pieza textil rectangular con tira doblada y alineada sobre uno de los bordes. La unión está indicada mediante una línea recta acompañada de marcas de puntada. La imagen se encuentra: Pág. 68 anexo1, cargado al sharepoint Superficie textil con tira doblada y cosida sobre uno de sus bordes. La costura está representada por una línea discontinua paralela al margen. La imagen se encuentra: Pág. 68 anexo 1, cargado al sharepoint Dos piezas textiles unidas en línea recta. Una de ellas presenta un doblez con costura visible paralela al borde, mientras la otra se extiende de manera plana. La imagen se encuentra: Pág. 68 anexo 1, cargado al sharepoint Unión entre dos piezas textiles con costura lateral limpia y visible. El área de encuentro está resaltada con un acercamiento circular que permite apreciar el acabado recto y simétrico. La imagen se encuentra: Pág. 68 anexo 1, cargado al sharepoint')
                          figcaption Fuente: Knight, (2010)
                .row
                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 5. Terminado: puede usar también un pie para bies o sesgo, suele ser útil en el proceso, pero debe tener en cuenta que la guía sea del tamaño del ancho del bies.
                        .col-lg-6
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 30.  
                            span  Pieza terminada
                          img(src='@/assets/curso/Tema3/fig30.svg', alt='Dos piezas textiles rectangulares. Una se encuentra extendida y la otra doblada de forma longitudinal, con sus bordes alineados hacia el interior. La imagen se encuentra: Pág. 68 anexo 1, cargado al sharepoint Pieza textil rectangular con tira doblada y alineada sobre uno de los bordes. La unión está indicada mediante una línea recta acompañada de marcas de puntada. La imagen se encuentra: Pág. 68 anexo1, cargado al sharepoint Superficie textil con tira doblada y cosida sobre uno de sus bordes. La costura está representada por una línea discontinua paralela al margen. La imagen se encuentra: Pág. 68 anexo 1, cargado al sharepoint Dos piezas textiles unidas en línea recta. Una de ellas presenta un doblez con costura visible paralela al borde, mientras la otra se extiende de manera plana. La imagen se encuentra: Pág. 68 anexo 1, cargado al sharepoint Unión entre dos piezas textiles con costura lateral limpia y visible. El área de encuentro está resaltada con un acercamiento circular que permite apreciar el acabado recto y simétrico. La imagen se encuentra: Pág. 68 anexo 1, cargado al sharepoint')
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
                            h5 Figura 31. 
                            span  Paso 1
                          img(src='@/assets/curso/Tema3/fig31.svg', alt='Se observa una superficie de tela con líneas diagonales marcadas, donde en una esquina se ha recortado un triángulo que genera un ángulo inclinado sobre el borde superior derecho. Asimismo, dos piezas textiles aparecen alineadas por sus bordes verticales, una de ellas con una línea discontinua paralela al margen que representa la costura de unión entre ambas. También se aprecia una superficie textil con una tira doblada en uno de los bordes, asegurada mediante costura recta visible que refuerza el extremo lateral de la pieza. A continuación, se muestra una pieza textil con doblez en el borde lateral, asegurado por una línea de puntadas paralelas que recorren el margen. Finalmente, una pieza presenta costura doble en posición vertical al centro, acompañada de un acercamiento circular que amplifica el detalle del pespunte, donde ambas líneas se mantienen equidistantes para lograr un acabado simétrico. Todas las imágenes se encuentran en el anexo 1, cargado al SharePoint (páginas 36 y 69).')
                          figcaption Fuente: Knight, (2010)

                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 2. Unir el derecho del sesgo con el derecho de la tela, alineando los bordes y cosiendo en línea recta a 5 mm del borde. 
                        .col-lg-6  
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 32. 
                            span  Paso 2
                          img(src='@/assets/curso/Tema3/fig32.svg', alt='Se observa una superficie de tela con líneas diagonales marcadas, donde en una esquina se ha recortado un triángulo que genera un ángulo inclinado sobre el borde superior derecho. Asimismo, dos piezas textiles aparecen alineadas por sus bordes verticales, una de ellas con una línea discontinua paralela al margen que representa la costura de unión entre ambas. También se aprecia una superficie textil con una tira doblada en uno de los bordes, asegurada mediante costura recta visible que refuerza el extremo lateral de la pieza. A continuación, se muestra una pieza textil con doblez en el borde lateral, asegurado por una línea de puntadas paralelas que recorren el margen. Finalmente, una pieza presenta costura doble en posición vertical al centro, acompañada de un acercamiento circular que amplifica el detalle del pespunte, donde ambas líneas se mantienen equidistantes para lograr un acabado simétrico. Todas las imágenes se encuentran en el anexo 1, cargado al SharePoint (páginas 36 y 69).')
                          figcaption Fuente: Knight, (2010)
                .row.mb-3
                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 3. Recortar el borde que se cosió y dejarlo a 3 mm, doblar la tira del sesgo sobre el borde cortado como se presenta en la figura 33.
                        .col-lg-6
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 33.  
                            span  Paso 3
                          img(src='@/assets/curso/Tema3/fig33.svg', alt='Se observa una superficie de tela con líneas diagonales marcadas, donde en una esquina se ha recortado un triángulo que genera un ángulo inclinado sobre el borde superior derecho. Asimismo, dos piezas textiles aparecen alineadas por sus bordes verticales, una de ellas con una línea discontinua paralela al margen que representa la costura de unión entre ambas. También se aprecia una superficie textil con una tira doblada en uno de los bordes, asegurada mediante costura recta visible que refuerza el extremo lateral de la pieza. A continuación, se muestra una pieza textil con doblez en el borde lateral, asegurado por una línea de puntadas paralelas que recorren el margen. Finalmente, una pieza presenta costura doble en posición vertical al centro, acompañada de un acercamiento circular que amplifica el detalle del pespunte, donde ambas líneas se mantienen equidistantes para lograr un acabado simétrico. Todas las imágenes se encuentran en el anexo 1, cargado al SharePoint (páginas 36 y 69).')
                          figcaption Fuente: Knight, (2010)

                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 4. Sostener al otro lado el sobrante de la tira, coser encima de la costura desde la derecha antes de cortar el sobrante de la tela.
                        .col-lg-6  
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 34. 
                            span  Paso 4
                          img(src='@/assets/curso/Tema3/fig34.svg', alt='Se observa una superficie de tela con líneas diagonales marcadas, donde en una esquina se ha recortado un triángulo que genera un ángulo inclinado sobre el borde superior derecho. Asimismo, dos piezas textiles aparecen alineadas por sus bordes verticales, una de ellas con una línea discontinua paralela al margen que representa la costura de unión entre ambas. También se aprecia una superficie textil con una tira doblada en uno de los bordes, asegurada mediante costura recta visible que refuerza el extremo lateral de la pieza. A continuación, se muestra una pieza textil con doblez en el borde lateral, asegurado por una línea de puntadas paralelas que recorren el margen. Finalmente, una pieza presenta costura doble en posición vertical al centro, acompañada de un acercamiento circular que amplifica el detalle del pespunte, donde ambas líneas se mantienen equidistantes para lograr un acabado simétrico. Todas las imágenes se encuentran en el anexo 1, cargado al SharePoint (páginas 36 y 69).')
                          figcaption Fuente: Knight, (2010)
                .row
                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 5. Terminado: es importante que el bies o sesgo seleccionado para esta operación no se deshilache. 
                        .col-lg-6
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 35.  
                            span  Pieza terminada
                          img(src='@/assets/curso/Tema3/fig35.svg', alt='Se observa una superficie de tela con líneas diagonales marcadas, donde en una esquina se ha recortado un triángulo que genera un ángulo inclinado sobre el borde superior derecho. Asimismo, dos piezas textiles aparecen alineadas por sus bordes verticales, una de ellas con una línea discontinua paralela al margen que representa la costura de unión entre ambas. También se aprecia una superficie textil con una tira doblada en uno de los bordes, asegurada mediante costura recta visible que refuerza el extremo lateral de la pieza. A continuación, se muestra una pieza textil con doblez en el borde lateral, asegurado por una línea de puntadas paralelas que recorren el margen. Finalmente, una pieza presenta costura doble en posición vertical al centro, acompañada de un acercamiento circular que amplifica el detalle del pespunte, donde ambas líneas se mantienen equidistantes para lograr un acabado simétrico. Todas las imágenes se encuentran en el anexo 1, cargado al SharePoint (páginas 36 y 69).')
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
                            h5 Figura 36. 
                            span  Paso 1
                          img(src='@/assets/curso/Tema3/fig36.svg', alt='Se presenta una pieza rectangular con doblez en el borde lateral, asegurado mediante una línea de puntadas paralela al margen que forma un acabado limpio en el extremo. Asimismo, dos piezas textiles se encuentran unidas por una tira central visible en la parte posterior, cuya unión genera un acabado plano y simétrico a ambos lados del centro. También se observa una aguja en posición diagonal que atraviesa una superficie textil, mientras el hilo forma un lazo curvo al ser traccionado hacia el lado opuesto. A continuación, aparece la unión central de dos piezas reforzada por una tira con bordes rematados a ambos lados, donde las terminaciones laterales presentan un acabado en sobrehilado simétrico. Finalmente, se muestra una pieza textil con unión central marcada por una línea vertical, en cuyo acercamiento se evidencian los bordes internos con terminaciones en sobrehilado que aseguran el acabado interior de la costura. Todas las imágenes se encuentran en la página 71, anexo 1, cargado al SharePoint.')
                          figcaption Fuente: Knight, (2010)

                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 2. Abrir la costura con plancha.
                        .col-lg-6  
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 37. 
                            span  Paso 2
                          img(src='@/assets/curso/Tema3/fig37.svg', alt='Se presenta una pieza rectangular con doblez en el borde lateral, asegurado mediante una línea de puntadas paralela al margen que forma un acabado limpio en el extremo. Asimismo, dos piezas textiles se encuentran unidas por una tira central visible en la parte posterior, cuya unión genera un acabado plano y simétrico a ambos lados del centro. También se observa una aguja en posición diagonal que atraviesa una superficie textil, mientras el hilo forma un lazo curvo al ser traccionado hacia el lado opuesto. A continuación, aparece la unión central de dos piezas reforzada por una tira con bordes rematados a ambos lados, donde las terminaciones laterales presentan un acabado en sobrehilado simétrico. Finalmente, se muestra una pieza textil con unión central marcada por una línea vertical, en cuyo acercamiento se evidencian los bordes internos con terminaciones en sobrehilado que aseguran el acabado interior de la costura. Todas las imágenes se encuentran en la página 71, anexo 1, cargado al SharePoint.')
                          figcaption Fuente: Knight, (2010)
                .row.mb-3
                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 3. Preparar la aguja e hilo, puede ser sencillo o doble, esto según la apariencia o relleno.
                        .col-lg-6  
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 38.  
                            span  Paso 3
                          img(src='@/assets/curso/Tema3/fig38.svg', alt='Se presenta una pieza rectangular con doblez en el borde lateral, asegurado mediante una línea de puntadas paralela al margen que forma un acabado limpio en el extremo. Asimismo, dos piezas textiles se encuentran unidas por una tira central visible en la parte posterior, cuya unión genera un acabado plano y simétrico a ambos lados del centro. También se observa una aguja en posición diagonal que atraviesa una superficie textil, mientras el hilo forma un lazo curvo al ser traccionado hacia el lado opuesto. A continuación, aparece la unión central de dos piezas reforzada por una tira con bordes rematados a ambos lados, donde las terminaciones laterales presentan un acabado en sobrehilado simétrico. Finalmente, se muestra una pieza textil con unión central marcada por una línea vertical, en cuyo acercamiento se evidencian los bordes internos con terminaciones en sobrehilado que aseguran el acabado interior de la costura. Todas las imágenes se encuentran en la página 71, anexo 1, cargado al SharePoint.')
                          figcaption Fuente: Knight, (2010)

                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 4. Rematar los bordes cortados pasando la aguja repetidamente con puntos diagonales.
                        .col-lg-6  
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 39. 
                            span  Paso 4
                          img(src='@/assets/curso/Tema3/fig39.svg', alt='Se presenta una pieza rectangular con doblez en el borde lateral, asegurado mediante una línea de puntadas paralela al margen que forma un acabado limpio en el extremo. Asimismo, dos piezas textiles se encuentran unidas por una tira central visible en la parte posterior, cuya unión genera un acabado plano y simétrico a ambos lados del centro. También se observa una aguja en posición diagonal que atraviesa una superficie textil, mientras el hilo forma un lazo curvo al ser traccionado hacia el lado opuesto. A continuación, aparece la unión central de dos piezas reforzada por una tira con bordes rematados a ambos lados, donde las terminaciones laterales presentan un acabado en sobrehilado simétrico. Finalmente, se muestra una pieza textil con unión central marcada por una línea vertical, en cuyo acercamiento se evidencian los bordes internos con terminaciones en sobrehilado que aseguran el acabado interior de la costura. Todas las imágenes se encuentran en la página 71, anexo 1, cargado al SharePoint.')
                          figcaption Fuente: Knight, (2010)
                .row
                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 5. Terminado.
                        .col-lg-6
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 40.  
                            span  Pieza terminada
                          img(src='@/assets/curso/Tema3/fig40.svg', alt='Se presenta una pieza rectangular con doblez en el borde lateral, asegurado mediante una línea de puntadas paralela al margen que forma un acabado limpio en el extremo. Asimismo, dos piezas textiles se encuentran unidas por una tira central visible en la parte posterior, cuya unión genera un acabado plano y simétrico a ambos lados del centro. También se observa una aguja en posición diagonal que atraviesa una superficie textil, mientras el hilo forma un lazo curvo al ser traccionado hacia el lado opuesto. A continuación, aparece la unión central de dos piezas reforzada por una tira con bordes rematados a ambos lados, donde las terminaciones laterales presentan un acabado en sobrehilado simétrico. Finalmente, se muestra una pieza textil con unión central marcada por una línea vertical, en cuyo acercamiento se evidencian los bordes internos con terminaciones en sobrehilado que aseguran el acabado interior de la costura. Todas las imágenes se encuentran en la página 71, anexo 1, cargado al SharePoint.')
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
                          p Paso 1. Coser a máquina plana las dos partes a 1,5 cm.
                        .col-lg-6
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 41. 
                            span  Paso 1
                          img(src='@/assets/curso/Tema3/fig41.svg', alt='Se observa una superficie textil con margen doblado en uno de los bordes, asegurado mediante una línea de costura discontinua que corre paralela al extremo. Asimismo, dos piezas textiles aparecen unidas por una costura central realizada en el reverso, con márgenes doblados hacia el interior, lo que genera un acabado plano y simétrico en la vista posterior. También se presenta una pieza con doblez reforzado en el borde derecho, compuesto por dos líneas de costura paralelas que aseguran el margen interior, logrando un acabado plano y resistente. Finalmente, se muestra una pieza textil con tres líneas verticales de costura visibles, donde en el acercamiento superior se detalla el pespunte doble que fija una tira central y genera un acabado reforzado. Todas las imágenes se encuentran en la página 73, anexo 1, cargado al SharePoint.')
                          figcaption Fuente: Knight, (2010)

                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 2. Abrir las costuras planchando y hacer otro pliegue en cada borde hacia adentro unos 3 mm.
                        .col-lg-6  
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 42. 
                            span  Paso 2
                          img(src='@/assets/curso/Tema3/fig42.svg', alt='Se observa una superficie textil con margen doblado en uno de los bordes, asegurado mediante una línea de costura discontinua que corre paralela al extremo. Asimismo, dos piezas textiles aparecen unidas por una costura central realizada en el reverso, con márgenes doblados hacia el interior, lo que genera un acabado plano y simétrico en la vista posterior. También se presenta una pieza con doblez reforzado en el borde derecho, compuesto por dos líneas de costura paralelas que aseguran el margen interior, logrando un acabado plano y resistente. Finalmente, se muestra una pieza textil con tres líneas verticales de costura visibles, donde en el acercamiento superior se detalla el pespunte doble que fija una tira central y genera un acabado reforzado. Todas las imágenes se encuentran en la página 73, anexo 1, cargado al SharePoint.')
                          figcaption Fuente: Knight, (2010)
                .row.mb-3
                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 3. Coser cada borde plegado para sujetar el pliegue.
                        .col-lg-6  
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 43.  
                            span  Paso 3
                          img(src='@/assets/curso/Tema3/fig43.svg', alt='Se observa una superficie textil con margen doblado en uno de los bordes, asegurado mediante una línea de costura discontinua que corre paralela al extremo. Asimismo, dos piezas textiles aparecen unidas por una costura central realizada en el reverso, con márgenes doblados hacia el interior, lo que genera un acabado plano y simétrico en la vista posterior. También se presenta una pieza con doblez reforzado en el borde derecho, compuesto por dos líneas de costura paralelas que aseguran el margen interior, logrando un acabado plano y resistente. Finalmente, se muestra una pieza textil con tres líneas verticales de costura visibles, donde en el acercamiento superior se detalla el pespunte doble que fija una tira central y genera un acabado reforzado. Todas las imágenes se encuentran en la página 73, anexo 1, cargado al SharePoint.')
                          figcaption Fuente: Knight, (2010)

                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 4. Terminado: esta actividad se puede realizar perfectamente con la máquina.
                        .col-lg-6  
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 44. 
                            span  Paso 4
                          img(src='@/assets/curso/Tema3/fig44.svg', alt='Se observa una superficie textil con margen doblado en uno de los bordes, asegurado mediante una línea de costura discontinua que corre paralela al extremo. Asimismo, dos piezas textiles aparecen unidas por una costura central realizada en el reverso, con márgenes doblados hacia el interior, lo que genera un acabado plano y simétrico en la vista posterior. También se presenta una pieza con doblez reforzado en el borde derecho, compuesto por dos líneas de costura paralelas que aseguran el margen interior, logrando un acabado plano y resistente. Finalmente, se muestra una pieza textil con tres líneas verticales de costura visibles, donde en el acercamiento superior se detalla el pespunte doble que fija una tira central y genera un acabado reforzado. Todas las imágenes se encuentran en la página 73, anexo 1, cargado al SharePoint.')
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
                            h5 Figura 45. 
                            span  Paso 1
                          img(src='@/assets/curso/Tema3/fig45.svg', alt='Se observa un conjunto de puntadas agrupadas que forman un ojal rodeado por hilo enrollado de manera pareja, mientras una aguja atraviesa lateralmente el centro del refuerzo y el hilo genera un lazo para continuar la costura. Del mismo modo, una aguja atraviesa horizontalmente una estructura de hilo denso que conforma un ojal reforzado, en el que el hilo se curva alrededor del extremo redondeado completando el contorno del acabado. También se presenta una superficie textil con un ojal horizontal reforzado por puntadas compactas y densas, cuyo acabado resulta simétrico y delimitado por bordes firmes en torno a la abertura central. Finalmente, una aguja atraviesa verticalmente la superficie, asegurando una serie de puntadas compactas dispuestas horizontalmente, mientras el hilo se curva hacia atrás para reforzar el extremo del ojal. Todas las imágenes se encuentran en la página 184, anexo 1, cargado al SharePoint.')
                          figcaption Fuente: Knight, (2010)

                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 2. Usar hilo doble, sujetar de manera vertical el ojal y asegurar el extremo del hilo con un nudo en la parte de abajo del corte.  Trabajar ambos extremos, derecha e izquierda de la misma manera.
                        .col-lg-6  
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 46. 
                            span  Paso 2
                          img(src='@/assets/curso/Tema3/fig46.svg', alt='Se observa un conjunto de puntadas agrupadas que forman un ojal rodeado por hilo enrollado de manera pareja, mientras una aguja atraviesa lateralmente el centro del refuerzo y el hilo genera un lazo para continuar la costura. Del mismo modo, una aguja atraviesa horizontalmente una estructura de hilo denso que conforma un ojal reforzado, en el que el hilo se curva alrededor del extremo redondeado completando el contorno del acabado. También se presenta una superficie textil con un ojal horizontal reforzado por puntadas compactas y densas, cuyo acabado resulta simétrico y delimitado por bordes firmes en torno a la abertura central. Finalmente, una aguja atraviesa verticalmente la superficie, asegurando una serie de puntadas compactas dispuestas horizontalmente, mientras el hilo se curva hacia atrás para reforzar el extremo del ojal. Todas las imágenes se encuentran en la página 184, anexo 1, cargado al SharePoint.')
                          figcaption Fuente: Knight, (2010)
                .row.mb-3
                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 3. Coser alrededor del extremo y dar la vuelta a lo realizado antes de coser la otra parte.
                        .col-lg-6  
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 47.  
                            span  Paso 3
                          img(src='@/assets/curso/Tema3/fig47.svg', alt='Se observa un conjunto de puntadas agrupadas que forman un ojal rodeado por hilo enrollado de manera pareja, mientras una aguja atraviesa lateralmente el centro del refuerzo y el hilo genera un lazo para continuar la costura. Del mismo modo, una aguja atraviesa horizontalmente una estructura de hilo denso que conforma un ojal reforzado, en el que el hilo se curva alrededor del extremo redondeado completando el contorno del acabado. También se presenta una superficie textil con un ojal horizontal reforzado por puntadas compactas y densas, cuyo acabado resulta simétrico y delimitado por bordes firmes en torno a la abertura central. Finalmente, una aguja atraviesa verticalmente la superficie, asegurando una serie de puntadas compactas dispuestas horizontalmente, mientras el hilo se curva hacia atrás para reforzar el extremo del ojal. Todas las imágenes se encuentran en la página 184, anexo 1, cargado al SharePoint.')
                          figcaption Fuente: Knight, (2010)

                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 4. Terminar el ojal con una barra hecha con dos o tres hilos, cubierta con puntada festón.
                        .col-lg-6  
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 48. 
                            span  Paso 4
                          img(src='@/assets/curso/Tema3/fig48.svg', alt='Se observa un conjunto de puntadas agrupadas que forman un ojal rodeado por hilo enrollado de manera pareja, mientras una aguja atraviesa lateralmente el centro del refuerzo y el hilo genera un lazo para continuar la costura. Del mismo modo, una aguja atraviesa horizontalmente una estructura de hilo denso que conforma un ojal reforzado, en el que el hilo se curva alrededor del extremo redondeado completando el contorno del acabado. También se presenta una superficie textil con un ojal horizontal reforzado por puntadas compactas y densas, cuyo acabado resulta simétrico y delimitado por bordes firmes en torno a la abertura central. Finalmente, una aguja atraviesa verticalmente la superficie, asegurando una serie de puntadas compactas dispuestas horizontalmente, mientras el hilo se curva hacia atrás para reforzar el extremo del ojal. Todas las imágenes se encuentran en la página 184, anexo 1, cargado al SharePoint.')
                          figcaption Fuente: Knight, (2010)
                .row
                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 5. Terminado: se debe tener en cuenta que la puntada de ojal es muy similar a la del festón.
                        .col-lg-6
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 49.  
                            span  Pieza terminada
                          img(src='@/assets/curso/Tema3/fig49.svg', alt='Se observa un conjunto de puntadas agrupadas que forman un ojal rodeado por hilo enrollado de manera pareja, mientras una aguja atraviesa lateralmente el centro del refuerzo y el hilo genera un lazo para continuar la costura. Del mismo modo, una aguja atraviesa horizontalmente una estructura de hilo denso que conforma un ojal reforzado, en el que el hilo se curva alrededor del extremo redondeado completando el contorno del acabado. También se presenta una superficie textil con un ojal horizontal reforzado por puntadas compactas y densas, cuyo acabado resulta simétrico y delimitado por bordes firmes en torno a la abertura central. Finalmente, una aguja atraviesa verticalmente la superficie, asegurando una serie de puntadas compactas dispuestas horizontalmente, mientras el hilo se curva hacia atrás para reforzar el extremo del ojal. Todas las imágenes se encuentran en la página 184, anexo 1, cargado al SharePoint.')
                          figcaption Fuente: Knight, (2010)
              
                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-12
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 50.  
                            span  Pieza terminada
                          img(src='@/assets/curso/Tema3/fig50.svg', alt='Se observa un conjunto de puntadas agrupadas que forman un ojal rodeado por hilo enrollado de manera pareja, mientras una aguja atraviesa lateralmente el centro del refuerzo y el hilo genera un lazo para continuar la costura. Del mismo modo, una aguja atraviesa horizontalmente una estructura de hilo denso que conforma un ojal reforzado, en el que el hilo se curva alrededor del extremo redondeado completando el contorno del acabado. También se presenta una superficie textil con un ojal horizontal reforzado por puntadas compactas y densas, cuyo acabado resulta simétrico y delimitado por bordes firmes en torno a la abertura central. Finalmente, una aguja atraviesa verticalmente la superficie, asegurando una serie de puntadas compactas dispuestas horizontalmente, mientras el hilo se curva hacia atrás para reforzar el extremo del ojal. Todas las imágenes se encuentran en la página 184, anexo 1, cargado al SharePoint.')
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
                          p Paso 1. Asegurar el hilo a la tela con un nudo por el revés de la tela y pasar por el agujero.
                        .col-lg-6
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 51. 
                            span  Pieza 1
                          img(src='@/assets/curso/Tema3/fig51.svg', alt='Se presenta una pieza rectangular colocada sobre una superficie contrastante y asegurada con puntadas largas distribuidas en todo su contorno, cuyas costuras delimitan claramente el perímetro de fijación. A continuación, dos rectángulos concéntricos formados por líneas de puntadas largas definen una zona central sobre la tela, atravesada por una línea horizontal punteada que indica el eje de una futura abertura. En otra imagen, se observa una zona rectangular igualmente delimitada por puntadas largas, en cuyo centro aparece una figura de corte horizontal que se extiende entre ambos extremos y finaliza en formas triangulares que señalan los puntos de corte diagonal necesarios para formar una abertura interna. Posteriormente, una aguja atraviesa desde el reverso hacia el frente de una abertura rectangular, guiada por una puntada vertical, mientras el hilo forma una curva amplia que inicia la fijación de los bordes. El proceso continúa con la abertura rectangular cuyos bordes internos son asegurados mediante pequeñas puntadas manuales, reforzando los cortes diagonales en los extremos para evitar desgarros y manteniendo alineado el centro. Finalmente, se muestra la abertura rectangular terminada, con bordes plegados hacia el interior, conformando un ojal de acabado limpio y centrado sobre la superficie textil. Todas las imágenes se encuentran en la página 184, anexo 1, cargado al SharePoint.')
                          figcaption Fuente: Knight, (2010)

                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 2. Meter la aguja por otro agujero y pasarlo por la tela, el hilo se debe dejar flojo.
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 52. 
                            span  Pieza 2
                          img(src='@/assets/curso/Tema3/fig52.svg', alt='Se presenta una pieza rectangular colocada sobre una superficie contrastante y asegurada con puntadas largas distribuidas en todo su contorno, cuyas costuras delimitan claramente el perímetro de fijación. A continuación, dos rectángulos concéntricos formados por líneas de puntadas largas definen una zona central sobre la tela, atravesada por una línea horizontal punteada que indica el eje de una futura abertura. En otra imagen, se observa una zona rectangular igualmente delimitada por puntadas largas, en cuyo centro aparece una figura de corte horizontal que se extiende entre ambos extremos y finaliza en formas triangulares que señalan los puntos de corte diagonal necesarios para formar una abertura interna. Posteriormente, una aguja atraviesa desde el reverso hacia el frente de una abertura rectangular, guiada por una puntada vertical, mientras el hilo forma una curva amplia que inicia la fijación de los bordes. El proceso continúa con la abertura rectangular cuyos bordes internos son asegurados mediante pequeñas puntadas manuales, reforzando los cortes diagonales en los extremos para evitar desgarros y manteniendo alineado el centro. Finalmente, se muestra la abertura rectangular terminada, con bordes plegados hacia el interior, conformando un ojal de acabado limpio y centrado sobre la superficie textil. Todas las imágenes se encuentran en la página 184, anexo 1, cargado al SharePoint.')
                          figcaption Fuente: Knight, (2010)
                .row.mb-3
                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 3. Repetir el proceso pasándolo de nuevo y saque la aguja entre el botón y la tela. De unas vueltas alrededor de los hilos hasta hacer una presilla.
                        .col-lg-6  
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 53.  
                            span  Pieza 3
                          img(src='@/assets/curso/Tema3/fig53.svg', alt='Se presenta una pieza rectangular colocada sobre una superficie contrastante y asegurada con puntadas largas distribuidas en todo su contorno, cuyas costuras delimitan claramente el perímetro de fijación. A continuación, dos rectángulos concéntricos formados por líneas de puntadas largas definen una zona central sobre la tela, atravesada por una línea horizontal punteada que indica el eje de una futura abertura. En otra imagen, se observa una zona rectangular igualmente delimitada por puntadas largas, en cuyo centro aparece una figura de corte horizontal que se extiende entre ambos extremos y finaliza en formas triangulares que señalan los puntos de corte diagonal necesarios para formar una abertura interna. Posteriormente, una aguja atraviesa desde el reverso hacia el frente de una abertura rectangular, guiada por una puntada vertical, mientras el hilo forma una curva amplia que inicia la fijación de los bordes. El proceso continúa con la abertura rectangular cuyos bordes internos son asegurados mediante pequeñas puntadas manuales, reforzando los cortes diagonales en los extremos para evitar desgarros y manteniendo alineado el centro. Finalmente, se muestra la abertura rectangular terminada, con bordes plegados hacia el interior, conformando un ojal de acabado limpio y centrado sobre la superficie textil. Todas las imágenes se encuentran en la página 184, anexo 1, cargado al SharePoint.')
                          figcaption Fuente: Knight, (2010)

                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 4. Por último, se debe sacar la aguja por el revés de la tela y pasarla por las puntadas para fijarlas. Remate y corte el hilo.
                        .col-lg-6  
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 54. 
                            span  Pieza 4
                          img(src='@/assets/curso/Tema3/fig54.svg', alt='Se presenta una pieza rectangular colocada sobre una superficie contrastante y asegurada con puntadas largas distribuidas en todo su contorno, cuyas costuras delimitan claramente el perímetro de fijación. A continuación, dos rectángulos concéntricos formados por líneas de puntadas largas definen una zona central sobre la tela, atravesada por una línea horizontal punteada que indica el eje de una futura abertura. En otra imagen, se observa una zona rectangular igualmente delimitada por puntadas largas, en cuyo centro aparece una figura de corte horizontal que se extiende entre ambos extremos y finaliza en formas triangulares que señalan los puntos de corte diagonal necesarios para formar una abertura interna. Posteriormente, una aguja atraviesa desde el reverso hacia el frente de una abertura rectangular, guiada por una puntada vertical, mientras el hilo forma una curva amplia que inicia la fijación de los bordes. El proceso continúa con la abertura rectangular cuyos bordes internos son asegurados mediante pequeñas puntadas manuales, reforzando los cortes diagonales en los extremos para evitar desgarros y manteniendo alineado el centro. Finalmente, se muestra la abertura rectangular terminada, con bordes plegados hacia el interior, conformando un ojal de acabado limpio y centrado sobre la superficie textil. Todas las imágenes se encuentran en la página 184, anexo 1, cargado al SharePoint.')
                          figcaption Fuente: Knight, (2010)
                .row
                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 5. Repetir el proceso anterior, pero saque la aguja directamente por la patilla. Rematar por el revés de la misma manera que en el caso de los agujeros.
                        .col-lg-6
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 55.  
                            span  Pieza 5
                          img(src='@/assets/curso/Tema3/fig55.svg', alt='Se presenta una pieza rectangular colocada sobre una superficie contrastante y asegurada con puntadas largas distribuidas en todo su contorno, cuyas costuras delimitan claramente el perímetro de fijación. A continuación, dos rectángulos concéntricos formados por líneas de puntadas largas definen una zona central sobre la tela, atravesada por una línea horizontal punteada que indica el eje de una futura abertura. En otra imagen, se observa una zona rectangular igualmente delimitada por puntadas largas, en cuyo centro aparece una figura de corte horizontal que se extiende entre ambos extremos y finaliza en formas triangulares que señalan los puntos de corte diagonal necesarios para formar una abertura interna. Posteriormente, una aguja atraviesa desde el reverso hacia el frente de una abertura rectangular, guiada por una puntada vertical, mientras el hilo forma una curva amplia que inicia la fijación de los bordes. El proceso continúa con la abertura rectangular cuyos bordes internos son asegurados mediante pequeñas puntadas manuales, reforzando los cortes diagonales en los extremos para evitar desgarros y manteniendo alineado el centro. Finalmente, se muestra la abertura rectangular terminada, con bordes plegados hacia el interior, conformando un ojal de acabado limpio y centrado sobre la superficie textil. Todas las imágenes se encuentran en la página 184, anexo 1, cargado al SharePoint.')
                          figcaption Fuente: Knight, (2010)
              
                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 6. Terminado.
                        .col-lg-6
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 56.  
                            span  Pieza 6
                          img(src='@/assets/curso/Tema3/fig56.svg', alt='Se presenta una pieza rectangular colocada sobre una superficie contrastante y asegurada con puntadas largas distribuidas en todo su contorno, cuyas costuras delimitan claramente el perímetro de fijación. A continuación, dos rectángulos concéntricos formados por líneas de puntadas largas definen una zona central sobre la tela, atravesada por una línea horizontal punteada que indica el eje de una futura abertura. En otra imagen, se observa una zona rectangular igualmente delimitada por puntadas largas, en cuyo centro aparece una figura de corte horizontal que se extiende entre ambos extremos y finaliza en formas triangulares que señalan los puntos de corte diagonal necesarios para formar una abertura interna. Posteriormente, una aguja atraviesa desde el reverso hacia el frente de una abertura rectangular, guiada por una puntada vertical, mientras el hilo forma una curva amplia que inicia la fijación de los bordes. El proceso continúa con la abertura rectangular cuyos bordes internos son asegurados mediante pequeñas puntadas manuales, reforzando los cortes diagonales en los extremos para evitar desgarros y manteniendo alineado el centro. Finalmente, se muestra la abertura rectangular terminada, con bordes plegados hacia el interior, conformando un ojal de acabado limpio y centrado sobre la superficie textil. Todas las imágenes se encuentran en la página 184, anexo 1, cargado al SharePoint.')
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
                            h5 Figura 57. 
                            span  Pieza 1
                          img(src='@/assets/curso/Tema3/fig57.svg', alt='Se observa una aguja que atraviesa un botón de cuatro perforaciones mientras el hilo realiza un giro, asegurando el primer paso de fijación sobre una superficie textil plana. En otra escena, un botón del mismo tipo aparece asegurado mediante un hilo cruzado que une dos orificios opuestos, mientras la aguja desciende para continuar el proceso de fijación. También se muestra el inicio de la unión, cuando la aguja con hilo atraviesa uno de los orificios de un botón de cuatro perforaciones colocado sobre la tela. Posteriormente, la aguja atraviesa la superficie desde el reverso hacia el frente, llevando el hilo que forma un arco amplio y se dirige hacia una zona previamente intervenida con puntada. A continuación, se presenta un botón grueso con base elevada, fijado mediante una puntada central, mientras el hilo y la aguja permanecen listos para reforzar la sujeción. Asimismo, dos elementos circulares acolchados se encuentran dispuestos en paralelo sobre la superficie textil, con volumen uniforme y simetría. Finalmente, se observan dos botones circulares de cuatro perforaciones alineados horizontalmente, con bordes ligeramente elevados y distribución simétrica sobre la tela. Todas las imágenes se encuentran en la página 181, anexo 1, cargado al SharePoint.')
                          figcaption Fuente: Knight, (2010)

                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 2. Meter la aguja por otro agujero y pasarlo por la tela, el hilo se debe dejar flojo.
                        .col-lg-6  
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 58. 
                            span  Pieza 2
                          img(src='@/assets/curso/Tema3/fig58.svg', alt='Se observa una aguja que atraviesa un botón de cuatro perforaciones mientras el hilo realiza un giro, asegurando el primer paso de fijación sobre una superficie textil plana. En otra escena, un botón del mismo tipo aparece asegurado mediante un hilo cruzado que une dos orificios opuestos, mientras la aguja desciende para continuar el proceso de fijación. También se muestra el inicio de la unión, cuando la aguja con hilo atraviesa uno de los orificios de un botón de cuatro perforaciones colocado sobre la tela. Posteriormente, la aguja atraviesa la superficie desde el reverso hacia el frente, llevando el hilo que forma un arco amplio y se dirige hacia una zona previamente intervenida con puntada. A continuación, se presenta un botón grueso con base elevada, fijado mediante una puntada central, mientras el hilo y la aguja permanecen listos para reforzar la sujeción. Asimismo, dos elementos circulares acolchados se encuentran dispuestos en paralelo sobre la superficie textil, con volumen uniforme y simetría. Finalmente, se observan dos botones circulares de cuatro perforaciones alineados horizontalmente, con bordes ligeramente elevados y distribución simétrica sobre la tela. Todas las imágenes se encuentran en la página 181, anexo 1, cargado al SharePoint.')
                          figcaption Fuente: Knight, (2010)
                .row.mb-3
                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 3. Repetir el proceso pasándolo de nuevo y saque la aguja entre el botón y la tela. De unas vueltas alrededor de los hilos hasta hacer una presilla.
                        .col-lg-6  
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 59.  
                            span  Pieza 3
                          img(src='@/assets/curso/Tema3/fig59.svg', alt='Se observa una aguja que atraviesa un botón de cuatro perforaciones mientras el hilo realiza un giro, asegurando el primer paso de fijación sobre una superficie textil plana. En otra escena, un botón del mismo tipo aparece asegurado mediante un hilo cruzado que une dos orificios opuestos, mientras la aguja desciende para continuar el proceso de fijación. También se muestra el inicio de la unión, cuando la aguja con hilo atraviesa uno de los orificios de un botón de cuatro perforaciones colocado sobre la tela. Posteriormente, la aguja atraviesa la superficie desde el reverso hacia el frente, llevando el hilo que forma un arco amplio y se dirige hacia una zona previamente intervenida con puntada. A continuación, se presenta un botón grueso con base elevada, fijado mediante una puntada central, mientras el hilo y la aguja permanecen listos para reforzar la sujeción. Asimismo, dos elementos circulares acolchados se encuentran dispuestos en paralelo sobre la superficie textil, con volumen uniforme y simetría. Finalmente, se observan dos botones circulares de cuatro perforaciones alineados horizontalmente, con bordes ligeramente elevados y distribución simétrica sobre la tela. Todas las imágenes se encuentran en la página 181, anexo 1, cargado al SharePoint.')
                          figcaption Fuente: Knight, (2010)

                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 4. Por último, se debe sacar la aguja por el revés de la tela y pasarla por las puntadas para fijarlas. Remate y corte el hilo.
                        .col-lg-6  
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 60. 
                            span  Pieza 4
                          img(src='@/assets/curso/Tema3/fig60.svg', alt='Se observa una aguja que atraviesa un botón de cuatro perforaciones mientras el hilo realiza un giro, asegurando el primer paso de fijación sobre una superficie textil plana. En otra escena, un botón del mismo tipo aparece asegurado mediante un hilo cruzado que une dos orificios opuestos, mientras la aguja desciende para continuar el proceso de fijación. También se muestra el inicio de la unión, cuando la aguja con hilo atraviesa uno de los orificios de un botón de cuatro perforaciones colocado sobre la tela. Posteriormente, la aguja atraviesa la superficie desde el reverso hacia el frente, llevando el hilo que forma un arco amplio y se dirige hacia una zona previamente intervenida con puntada. A continuación, se presenta un botón grueso con base elevada, fijado mediante una puntada central, mientras el hilo y la aguja permanecen listos para reforzar la sujeción. Asimismo, dos elementos circulares acolchados se encuentran dispuestos en paralelo sobre la superficie textil, con volumen uniforme y simetría. Finalmente, se observan dos botones circulares de cuatro perforaciones alineados horizontalmente, con bordes ligeramente elevados y distribución simétrica sobre la tela. Todas las imágenes se encuentran en la página 181, anexo 1, cargado al SharePoint.')
                          figcaption Fuente: Knight, (2010)
                .row
                  .col-sm-6.col-lg-12.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-3
                          p Paso 5. Repetir el proceso anterior, pero saque la aguja directamente por la patilla. Rematar por el revés de la misma manera que en el caso de los agujeros.
                        .col-lg-3
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 61.  
                            span  Pieza 5
                          img(src='@/assets/curso/Tema3/fig61.svg', alt='Se observa una aguja que atraviesa un botón de cuatro perforaciones mientras el hilo realiza un giro, asegurando el primer paso de fijación sobre una superficie textil plana. En otra escena, un botón del mismo tipo aparece asegurado mediante un hilo cruzado que une dos orificios opuestos, mientras la aguja desciende para continuar el proceso de fijación. También se muestra el inicio de la unión, cuando la aguja con hilo atraviesa uno de los orificios de un botón de cuatro perforaciones colocado sobre la tela. Posteriormente, la aguja atraviesa la superficie desde el reverso hacia el frente, llevando el hilo que forma un arco amplio y se dirige hacia una zona previamente intervenida con puntada. A continuación, se presenta un botón grueso con base elevada, fijado mediante una puntada central, mientras el hilo y la aguja permanecen listos para reforzar la sujeción. Asimismo, dos elementos circulares acolchados se encuentran dispuestos en paralelo sobre la superficie textil, con volumen uniforme y simetría. Finalmente, se observan dos botones circulares de cuatro perforaciones alineados horizontalmente, con bordes ligeramente elevados y distribución simétrica sobre la tela. Todas las imágenes se encuentran en la página 181, anexo 1, cargado al SharePoint.')
                          figcaption Fuente: Knight, (2010)
                        .col-lg-3
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 62.  
                            span  Botones forrados con patilla  
                          img(src='@/assets/curso/Tema3/fig62.svg', alt='Se observa una aguja que atraviesa un botón de cuatro perforaciones mientras el hilo realiza un giro, asegurando el primer paso de fijación sobre una superficie textil plana. En otra escena, un botón del mismo tipo aparece asegurado mediante un hilo cruzado que une dos orificios opuestos, mientras la aguja desciende para continuar el proceso de fijación. También se muestra el inicio de la unión, cuando la aguja con hilo atraviesa uno de los orificios de un botón de cuatro perforaciones colocado sobre la tela. Posteriormente, la aguja atraviesa la superficie desde el reverso hacia el frente, llevando el hilo que forma un arco amplio y se dirige hacia una zona previamente intervenida con puntada. A continuación, se presenta un botón grueso con base elevada, fijado mediante una puntada central, mientras el hilo y la aguja permanecen listos para reforzar la sujeción. Asimismo, dos elementos circulares acolchados se encuentran dispuestos en paralelo sobre la superficie textil, con volumen uniforme y simetría. Finalmente, se observan dos botones circulares de cuatro perforaciones alineados horizontalmente, con bordes ligeramente elevados y distribución simétrica sobre la tela. Todas las imágenes se encuentran en la página 181, anexo 1, cargado al SharePoint.')
                          figcaption Fuente: Knight, (2010)

                        .col-lg-3
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 63.  
                            span  Botones con agujeros
                          img(src='@/assets/curso/Tema3/fig63.svg', alt='Se observa una aguja que atraviesa un botón de cuatro perforaciones mientras el hilo realiza un giro, asegurando el primer paso de fijación sobre una superficie textil plana. En otra escena, un botón del mismo tipo aparece asegurado mediante un hilo cruzado que une dos orificios opuestos, mientras la aguja desciende para continuar el proceso de fijación. También se muestra el inicio de la unión, cuando la aguja con hilo atraviesa uno de los orificios de un botón de cuatro perforaciones colocado sobre la tela. Posteriormente, la aguja atraviesa la superficie desde el reverso hacia el frente, llevando el hilo que forma un arco amplio y se dirige hacia una zona previamente intervenida con puntada. A continuación, se presenta un botón grueso con base elevada, fijado mediante una puntada central, mientras el hilo y la aguja permanecen listos para reforzar la sujeción. Asimismo, dos elementos circulares acolchados se encuentran dispuestos en paralelo sobre la superficie textil, con volumen uniforme y simetría. Finalmente, se observan dos botones circulares de cuatro perforaciones alineados horizontalmente, con bordes ligeramente elevados y distribución simétrica sobre la tela. Todas las imágenes se encuentran en la página 181, anexo 1, cargado al SharePoint.')
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
                            h5 Figura 57. 
                            span  Pieza 1
                          img(src='@/assets/curso/Tema3/fig64.svg', alt='Una aguja enhebrada atraviesa una superficie textil desde el anverso, con el hilo extendido en curva hacia un costado, iniciando el proceso de unión. La imagen se encuentra: Pág.186 Anexo 1, cargado al sharepoint. Un botón de base central elevada ha sido fijado sobre una superficie textil mediante varias puntadas laterales, mientras la aguja enhebrada continúa el proceso de costura desde uno de los orificios. La imagen se encuentra: Pág.186 Anexo 1, cargado al sharepoint. Dos broches metálicos están colocados en extremos opuestos de una prenda doblada, ubicados de forma simétrica para permitir el cierre por presión entre ambas piezas textiles. La imagen se encuentra: Pág.186 Anexo 1, cargado en el sharepoint. Botón de cierre metálico de presión, compuesto por una base circular con orificios para su fijación y una cabeza saliente que encaja con la parte complementaria del broche. Se utiliza comúnmente en prendas y accesorios para asegurar dos piezas de tela. La imagen se encuentra: Pág.186 Anexo 1, cargado al sharepoint.')
                          figcaption Fuente: Knight, (2010)

                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 2. Coser unas cuantas puntadas en cada agujero fijándolo a la tela. Hacer las puntadas debajo del cierre para que no se vean por el revés.
                        .col-lg-6  
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 58. 
                            span  Pieza 2
                          img(src='@/assets/curso/Tema3/fig65.svg', alt='Una aguja enhebrada atraviesa una superficie textil desde el anverso, con el hilo extendido en curva hacia un costado, iniciando el proceso de unión. La imagen se encuentra: Pág.186 Anexo 1, cargado al sharepoint. Un botón de base central elevada ha sido fijado sobre una superficie textil mediante varias puntadas laterales, mientras la aguja enhebrada continúa el proceso de costura desde uno de los orificios. La imagen se encuentra: Pág.186 Anexo 1, cargado al sharepoint. Dos broches metálicos están colocados en extremos opuestos de una prenda doblada, ubicados de forma simétrica para permitir el cierre por presión entre ambas piezas textiles. La imagen se encuentra: Pág.186 Anexo 1, cargado en el sharepoint. Botón de cierre metálico de presión, compuesto por una base circular con orificios para su fijación y una cabeza saliente que encaja con la parte complementaria del broche. Se utiliza comúnmente en prendas y accesorios para asegurar dos piezas de tela. La imagen se encuentra: Pág.186 Anexo 1, cargado al sharepoint.')
                          figcaption Fuente: Knight, (2010)
                .row.mb-3
                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 3. Prenda terminada.
                        .col-lg-6  
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 59.  
                            span  Pieza 3
                          img(src='@/assets/curso/Tema3/fig66.svg', alt='Una aguja enhebrada atraviesa una superficie textil desde el anverso, con el hilo extendido en curva hacia un costado, iniciando el proceso de unión. La imagen se encuentra: Pág.186 Anexo 1, cargado al sharepoint. Un botón de base central elevada ha sido fijado sobre una superficie textil mediante varias puntadas laterales, mientras la aguja enhebrada continúa el proceso de costura desde uno de los orificios. La imagen se encuentra: Pág.186 Anexo 1, cargado al sharepoint. Dos broches metálicos están colocados en extremos opuestos de una prenda doblada, ubicados de forma simétrica para permitir el cierre por presión entre ambas piezas textiles. La imagen se encuentra: Pág.186 Anexo 1, cargado en el sharepoint. Botón de cierre metálico de presión, compuesto por una base circular con orificios para su fijación y una cabeza saliente que encaja con la parte complementaria del broche. Se utiliza comúnmente en prendas y accesorios para asegurar dos piezas de tela. La imagen se encuentra: Pág.186 Anexo 1, cargado al sharepoint.')
                          figcaption Fuente: Knight, (2010)

                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-12
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 67.  
                            span  Botón de cierre
                          img(src='@/assets/curso/Tema3/fig67.svg', alt='Una aguja enhebrada atraviesa una superficie textil desde el anverso, con el hilo extendido en curva hacia un costado, iniciando el proceso de unión. La imagen se encuentra: Pág.186 Anexo 1, cargado al sharepoint. Un botón de base central elevada ha sido fijado sobre una superficie textil mediante varias puntadas laterales, mientras la aguja enhebrada continúa el proceso de costura desde uno de los orificios. La imagen se encuentra: Pág.186 Anexo 1, cargado al sharepoint. Dos broches metálicos están colocados en extremos opuestos de una prenda doblada, ubicados de forma simétrica para permitir el cierre por presión entre ambas piezas textiles. La imagen se encuentra: Pág.186 Anexo 1, cargado en el sharepoint. Botón de cierre metálico de presión, compuesto por una base circular con orificios para su fijación y una cabeza saliente que encaja con la parte complementaria del broche. Se utiliza comúnmente en prendas y accesorios para asegurar dos piezas de tela. La imagen se encuentra: Pág.186 Anexo 1, cargado al sharepoint.')
                    














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
