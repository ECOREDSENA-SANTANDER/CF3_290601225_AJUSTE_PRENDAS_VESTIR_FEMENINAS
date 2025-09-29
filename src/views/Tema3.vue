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
                            h5 Figura 22. 
                            span  Paso 1
                          img(src='@/assets/curso/Tema3/fig22.svg', alt='Superficie rectangular de papel plegada en uno de sus extremos, con línea discontinua paralela al borde que indica la ubicación de un doblez o margen de costura. La imagen se encuentra:  Pág. 67 anexo 1 Cargado al sharepoint Pieza rectangular de tela con doble línea de costura visible al centro, generando un acabado simétrico. El área central forma una pestaña doblada hacia ambos lados. La imagen se encuentra: Pág. 67 anexo 1, cargado al sharepoint Tira de tela posicionada con doblez central marcado y costuras planas a cada lado, mientras una plancha se aplica en uno de los extremos para asentar el acabado La imagen se encuentra: Pág. 67 anexo 1, cargado al sharepoint Superficie textil con doble línea de pespunte vertical. En la parte superior se amplía el detalle para evidenciar el acabado centrado de una costura recta La imagen se encuentra: Pág. 67 anexo 1, cargado al sharepoint')
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
                          img(src='@/assets/curso/Tema3/fig23.svg', alt='Superficie rectangular de papel plegada en uno de sus extremos, con línea discontinua paralela al borde que indica la ubicación de un doblez o margen de costura. La imagen se encuentra:  Pág. 67 anexo 1 Cargado al sharepoint Pieza rectangular de tela con doble línea de costura visible al centro, generando un acabado simétrico. El área central forma una pestaña doblada hacia ambos lados. La imagen se encuentra: Pág. 67 anexo 1, cargado al sharepoint Tira de tela posicionada con doblez central marcado y costuras planas a cada lado, mientras una plancha se aplica en uno de los extremos para asentar el acabado La imagen se encuentra: Pág. 67 anexo 1, cargado al sharepoint Superficie textil con doble línea de pespunte vertical. En la parte superior se amplía el detalle para evidenciar el acabado centrado de una costura recta La imagen se encuentra: Pág. 67 anexo 1, cargado al sharepoint')
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
                          img(src='@/assets/curso/Tema3/fig24.svg', alt='Superficie rectangular de papel plegada en uno de sus extremos, con línea discontinua paralela al borde que indica la ubicación de un doblez o margen de costura. La imagen se encuentra:  Pág. 67 anexo 1 Cargado al sharepoint Pieza rectangular de tela con doble línea de costura visible al centro, generando un acabado simétrico. El área central forma una pestaña doblada hacia ambos lados. La imagen se encuentra: Pág. 67 anexo 1, cargado al sharepoint Tira de tela posicionada con doblez central marcado y costuras planas a cada lado, mientras una plancha se aplica en uno de los extremos para asentar el acabado La imagen se encuentra: Pág. 67 anexo 1, cargado al sharepoint Superficie textil con doble línea de pespunte vertical. En la parte superior se amplía el detalle para evidenciar el acabado centrado de una costura recta La imagen se encuentra: Pág. 67 anexo 1, cargado al sharepoint')
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
                          img(src='@/assets/curso/Tema3/fig25.svg', alt='Superficie rectangular de papel plegada en uno de sus extremos, con línea discontinua paralela al borde que indica la ubicación de un doblez o margen de costura. La imagen se encuentra:  Pág. 67 anexo 1 Cargado al sharepoint Pieza rectangular de tela con doble línea de costura visible al centro, generando un acabado simétrico. El área central forma una pestaña doblada hacia ambos lados. La imagen se encuentra: Pág. 67 anexo 1, cargado al sharepoint Tira de tela posicionada con doblez central marcado y costuras planas a cada lado, mientras una plancha se aplica en uno de los extremos para asentar el acabado La imagen se encuentra: Pág. 67 anexo 1, cargado al sharepoint Superficie textil con doble línea de pespunte vertical. En la parte superior se amplía el detalle para evidenciar el acabado centrado de una costura recta La imagen se encuentra: Pág. 67 anexo 1, cargado al sharepoint')
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
                          img(src='@/assets/curso/Tema3/fig31.svg', alt='Superficie de tela con líneas diagonales marcadas. En una esquina se ha recortado un triángulo, generando un ángulo inclinado sobre el borde superior derecho. La imagen se encuentra: Pág. 69 anexo 1, cargado al sharepoint Dos piezas textiles están alineadas por sus bordes verticales. Una de ellas presenta una línea discontinua paralela al margen, que representa una costura de unión entre ambas. La imagen se encuentra: Pág. 69 anexo 1, cargado al sharepoint Superficie textil con tira doblada en uno de los bordes, asegurada mediante costura recta visible. El acabado refuerza el extremo lateral de la pieza. La imagen se encuentra: Pág. 69 anexo1, cargado al sharepoint Pieza textil con doblez en el borde lateral, asegurado mediante una línea de puntadas visibles que recorren el margen de forma paralela. La imagen se encuentra: Pág. 36 anexo 1, cargado al sharepoint Pieza textil con costura doble en posición vertical al centro. Un acercamiento circular amplifica el detalle del pespunte, donde ambas líneas se mantienen equidistantes para lograr un acabado simétrico. La imagen se encuentra: Pág. 69 anexo 1, cargado al sharepoint')
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
                          img(src='@/assets/curso/Tema3/fig32.svg', alt='Superficie de tela con líneas diagonales marcadas. En una esquina se ha recortado un triángulo, generando un ángulo inclinado sobre el borde superior derecho. La imagen se encuentra: Pág. 69 anexo 1, cargado al sharepoint Dos piezas textiles están alineadas por sus bordes verticales. Una de ellas presenta una línea discontinua paralela al margen, que representa una costura de unión entre ambas. La imagen se encuentra: Pág. 69 anexo 1, cargado al sharepoint Superficie textil con tira doblada en uno de los bordes, asegurada mediante costura recta visible. El acabado refuerza el extremo lateral de la pieza. La imagen se encuentra: Pág. 69 anexo1, cargado al sharepoint Pieza textil con doblez en el borde lateral, asegurado mediante una línea de puntadas visibles que recorren el margen de forma paralela. La imagen se encuentra: Pág. 36 anexo 1, cargado al sharepoint Pieza textil con costura doble en posición vertical al centro. Un acercamiento circular amplifica el detalle del pespunte, donde ambas líneas se mantienen equidistantes para lograr un acabado simétrico. La imagen se encuentra: Pág. 69 anexo 1, cargado al sharepoint')
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
                          img(src='@/assets/curso/Tema3/fig33.svg', alt='Superficie de tela con líneas diagonales marcadas. En una esquina se ha recortado un triángulo, generando un ángulo inclinado sobre el borde superior derecho. La imagen se encuentra: Pág. 69 anexo 1, cargado al sharepoint Dos piezas textiles están alineadas por sus bordes verticales. Una de ellas presenta una línea discontinua paralela al margen, que representa una costura de unión entre ambas. La imagen se encuentra: Pág. 69 anexo 1, cargado al sharepoint Superficie textil con tira doblada en uno de los bordes, asegurada mediante costura recta visible. El acabado refuerza el extremo lateral de la pieza. La imagen se encuentra: Pág. 69 anexo1, cargado al sharepoint Pieza textil con doblez en el borde lateral, asegurado mediante una línea de puntadas visibles que recorren el margen de forma paralela. La imagen se encuentra: Pág. 36 anexo 1, cargado al sharepoint Pieza textil con costura doble en posición vertical al centro. Un acercamiento circular amplifica el detalle del pespunte, donde ambas líneas se mantienen equidistantes para lograr un acabado simétrico. La imagen se encuentra: Pág. 69 anexo 1, cargado al sharepoint')
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
                          img(src='@/assets/curso/Tema3/fig34.svg', alt='Superficie de tela con líneas diagonales marcadas. En una esquina se ha recortado un triángulo, generando un ángulo inclinado sobre el borde superior derecho. La imagen se encuentra: Pág. 69 anexo 1, cargado al sharepoint Dos piezas textiles están alineadas por sus bordes verticales. Una de ellas presenta una línea discontinua paralela al margen, que representa una costura de unión entre ambas. La imagen se encuentra: Pág. 69 anexo 1, cargado al sharepoint Superficie textil con tira doblada en uno de los bordes, asegurada mediante costura recta visible. El acabado refuerza el extremo lateral de la pieza. La imagen se encuentra: Pág. 69 anexo1, cargado al sharepoint Pieza textil con doblez en el borde lateral, asegurado mediante una línea de puntadas visibles que recorren el margen de forma paralela. La imagen se encuentra: Pág. 36 anexo 1, cargado al sharepoint Pieza textil con costura doble en posición vertical al centro. Un acercamiento circular amplifica el detalle del pespunte, donde ambas líneas se mantienen equidistantes para lograr un acabado simétrico. La imagen se encuentra: Pág. 69 anexo 1, cargado al sharepoint')
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
                          img(src='@/assets/curso/Tema3/fig35.svg', alt='Superficie de tela con líneas diagonales marcadas. En una esquina se ha recortado un triángulo, generando un ángulo inclinado sobre el borde superior derecho. La imagen se encuentra: Pág. 69 anexo 1, cargado al sharepoint Dos piezas textiles están alineadas por sus bordes verticales. Una de ellas presenta una línea discontinua paralela al margen, que representa una costura de unión entre ambas. La imagen se encuentra: Pág. 69 anexo 1, cargado al sharepoint Superficie textil con tira doblada en uno de los bordes, asegurada mediante costura recta visible. El acabado refuerza el extremo lateral de la pieza. La imagen se encuentra: Pág. 69 anexo1, cargado al sharepoint Pieza textil con doblez en el borde lateral, asegurado mediante una línea de puntadas visibles que recorren el margen de forma paralela. La imagen se encuentra: Pág. 36 anexo 1, cargado al sharepoint Pieza textil con costura doble en posición vertical al centro. Un acercamiento circular amplifica el detalle del pespunte, donde ambas líneas se mantienen equidistantes para lograr un acabado simétrico. La imagen se encuentra: Pág. 69 anexo 1, cargado al sharepoint')
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
                          img(src='@/assets/curso/Tema3/fig36.svg', alt='Pieza rectangular con doblez en el borde lateral, asegurado mediante una línea de puntadas paralela al margen, formando un acabado limpio en el extremo. La imagen se encuentra: Pág. 71 anexo 1, cargado al sharepoint Dos piezas textiles están unidas por una tira central visible en la parte posterior. La unión genera un acabado plano con simetría a ambos lados del centro. La imagen se encuentra: Pág. 71 anexo 1, cargado al sharepoint Aguja en posición diagonal atraviesa una superficie textil, mientras el hilo forma un lazo curvo al ser traccionado hacia el lado opuesto. La imagen se encuentra: Pág. 71 anexo 1, cargado al sharepoint Unión central de dos piezas textiles, reforzada por una tira con bordes rematados a ambos lados. Las terminaciones laterales presentan acabado en sobrehilado simétrico. La imagen se encuentra: Pág. 71 anexo 1, cargado al sharepoint Pieza textil con unión central marcada por una línea vertical. En el acercamiento se evidencian los bordes internos con terminaciones en sobrehilado, asegurando el acabado interior de la costura. La imagen se encuentra: Pág. 71 anexo 1, cargado al sharepoint')
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
                          img(src='@/assets/curso/Tema3/fig37.svg', alt='Pieza rectangular con doblez en el borde lateral, asegurado mediante una línea de puntadas paralela al margen, formando un acabado limpio en el extremo. La imagen se encuentra: Pág. 71 anexo 1, cargado al sharepoint Dos piezas textiles están unidas por una tira central visible en la parte posterior. La unión genera un acabado plano con simetría a ambos lados del centro. La imagen se encuentra: Pág. 71 anexo 1, cargado al sharepoint Aguja en posición diagonal atraviesa una superficie textil, mientras el hilo forma un lazo curvo al ser traccionado hacia el lado opuesto. La imagen se encuentra: Pág. 71 anexo 1, cargado al sharepoint Unión central de dos piezas textiles, reforzada por una tira con bordes rematados a ambos lados. Las terminaciones laterales presentan acabado en sobrehilado simétrico. La imagen se encuentra: Pág. 71 anexo 1, cargado al sharepoint Pieza textil con unión central marcada por una línea vertical. En el acercamiento se evidencian los bordes internos con terminaciones en sobrehilado, asegurando el acabado interior de la costura. La imagen se encuentra: Pág. 71 anexo 1, cargado al sharepoint')
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
                          img(src='@/assets/curso/Tema3/fig38.svg', alt='Pieza rectangular con doblez en el borde lateral, asegurado mediante una línea de puntadas paralela al margen, formando un acabado limpio en el extremo. La imagen se encuentra: Pág. 71 anexo 1, cargado al sharepoint Dos piezas textiles están unidas por una tira central visible en la parte posterior. La unión genera un acabado plano con simetría a ambos lados del centro. La imagen se encuentra: Pág. 71 anexo 1, cargado al sharepoint Aguja en posición diagonal atraviesa una superficie textil, mientras el hilo forma un lazo curvo al ser traccionado hacia el lado opuesto. La imagen se encuentra: Pág. 71 anexo 1, cargado al sharepoint Unión central de dos piezas textiles, reforzada por una tira con bordes rematados a ambos lados. Las terminaciones laterales presentan acabado en sobrehilado simétrico. La imagen se encuentra: Pág. 71 anexo 1, cargado al sharepoint Pieza textil con unión central marcada por una línea vertical. En el acercamiento se evidencian los bordes internos con terminaciones en sobrehilado, asegurando el acabado interior de la costura. La imagen se encuentra: Pág. 71 anexo 1, cargado al sharepoint')
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
                          img(src='@/assets/curso/Tema3/fig39.svg', alt='Pieza rectangular con doblez en el borde lateral, asegurado mediante una línea de puntadas paralela al margen, formando un acabado limpio en el extremo. La imagen se encuentra: Pág. 71 anexo 1, cargado al sharepoint Dos piezas textiles están unidas por una tira central visible en la parte posterior. La unión genera un acabado plano con simetría a ambos lados del centro. La imagen se encuentra: Pág. 71 anexo 1, cargado al sharepoint Aguja en posición diagonal atraviesa una superficie textil, mientras el hilo forma un lazo curvo al ser traccionado hacia el lado opuesto. La imagen se encuentra: Pág. 71 anexo 1, cargado al sharepoint Unión central de dos piezas textiles, reforzada por una tira con bordes rematados a ambos lados. Las terminaciones laterales presentan acabado en sobrehilado simétrico. La imagen se encuentra: Pág. 71 anexo 1, cargado al sharepoint Pieza textil con unión central marcada por una línea vertical. En el acercamiento se evidencian los bordes internos con terminaciones en sobrehilado, asegurando el acabado interior de la costura. La imagen se encuentra: Pág. 71 anexo 1, cargado al sharepoint')
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
                          img(src='@/assets/curso/Tema3/fig40.svg', alt='Pieza rectangular con doblez en el borde lateral, asegurado mediante una línea de puntadas paralela al margen, formando un acabado limpio en el extremo. La imagen se encuentra: Pág. 71 anexo 1, cargado al sharepoint Dos piezas textiles están unidas por una tira central visible en la parte posterior. La unión genera un acabado plano con simetría a ambos lados del centro. La imagen se encuentra: Pág. 71 anexo 1, cargado al sharepoint Aguja en posición diagonal atraviesa una superficie textil, mientras el hilo forma un lazo curvo al ser traccionado hacia el lado opuesto. La imagen se encuentra: Pág. 71 anexo 1, cargado al sharepoint Unión central de dos piezas textiles, reforzada por una tira con bordes rematados a ambos lados. Las terminaciones laterales presentan acabado en sobrehilado simétrico. La imagen se encuentra: Pág. 71 anexo 1, cargado al sharepoint Pieza textil con unión central marcada por una línea vertical. En el acercamiento se evidencian los bordes internos con terminaciones en sobrehilado, asegurando el acabado interior de la costura. La imagen se encuentra: Pág. 71 anexo 1, cargado al sharepoint')
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
                          img(src='@/assets/curso/Tema3/fig41.svg', alt='Superficie textil con margen doblado en uno de los bordes, asegurado mediante una línea de costura discontinua que corre paralela al extremo. La imagen se encuentra: Pág. 73 anexo 1, cargado al sharepoint Dos piezas textiles unidas mediante una costura central por el reverso, con márgenes doblados hacia el interior. La vista posterior revela un acabado plano y simétrico. La imagen se encuentra: Pág. 73 anexo 1, cargado al sharepoint Pieza textil con doblez reforzado en el borde derecho, compuesto por dos líneas de costura paralelas que aseguran el margen interior. El acabado es plano y resistente. La imagen se encuentra: Pág. 73 anexo 1, cargado al sharepoint Pieza textil con tres líneas verticales de costura visibles. En el acercamiento superior se aprecia el detalle del pespunte doble que asegura una tira central, generando un acabado reforzado. La imagen se encuentra: Pág. 73 anexo 1, cargado al sharepoint')
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
                          img(src='@/assets/curso/Tema3/fig42.svg', alt='Superficie textil con margen doblado en uno de los bordes, asegurado mediante una línea de costura discontinua que corre paralela al extremo. La imagen se encuentra: Pág. 73 anexo 1, cargado al sharepoint Dos piezas textiles unidas mediante una costura central por el reverso, con márgenes doblados hacia el interior. La vista posterior revela un acabado plano y simétrico. La imagen se encuentra: Pág. 73 anexo 1, cargado al sharepoint Pieza textil con doblez reforzado en el borde derecho, compuesto por dos líneas de costura paralelas que aseguran el margen interior. El acabado es plano y resistente. La imagen se encuentra: Pág. 73 anexo 1, cargado al sharepoint Pieza textil con tres líneas verticales de costura visibles. En el acercamiento superior se aprecia el detalle del pespunte doble que asegura una tira central, generando un acabado reforzado. La imagen se encuentra: Pág. 73 anexo 1, cargado al sharepoint')
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
                          img(src='@/assets/curso/Tema3/fig43.svg', alt='Superficie textil con margen doblado en uno de los bordes, asegurado mediante una línea de costura discontinua que corre paralela al extremo. La imagen se encuentra: Pág. 73 anexo 1, cargado al sharepoint Dos piezas textiles unidas mediante una costura central por el reverso, con márgenes doblados hacia el interior. La vista posterior revela un acabado plano y simétrico. La imagen se encuentra: Pág. 73 anexo 1, cargado al sharepoint Pieza textil con doblez reforzado en el borde derecho, compuesto por dos líneas de costura paralelas que aseguran el margen interior. El acabado es plano y resistente. La imagen se encuentra: Pág. 73 anexo 1, cargado al sharepoint Pieza textil con tres líneas verticales de costura visibles. En el acercamiento superior se aprecia el detalle del pespunte doble que asegura una tira central, generando un acabado reforzado. La imagen se encuentra: Pág. 73 anexo 1, cargado al sharepoint')
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
                          img(src='@/assets/curso/Tema3/fig44.svg', alt='Superficie textil con margen doblado en uno de los bordes, asegurado mediante una línea de costura discontinua que corre paralela al extremo. La imagen se encuentra: Pág. 73 anexo 1, cargado al sharepoint Dos piezas textiles unidas mediante una costura central por el reverso, con márgenes doblados hacia el interior. La vista posterior revela un acabado plano y simétrico. La imagen se encuentra: Pág. 73 anexo 1, cargado al sharepoint Pieza textil con doblez reforzado en el borde derecho, compuesto por dos líneas de costura paralelas que aseguran el margen interior. El acabado es plano y resistente. La imagen se encuentra: Pág. 73 anexo 1, cargado al sharepoint Pieza textil con tres líneas verticales de costura visibles. En el acercamiento superior se aprecia el detalle del pespunte doble que asegura una tira central, generando un acabado reforzado. La imagen se encuentra: Pág. 73 anexo 1, cargado al sharepoint')
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
                          img(src='@/assets/curso/Tema3/fig45.svg', alt='Puntadas agrupadas forman un ojal rodeado por hilo enrollado de forma pareja. Una aguja atraviesa lateralmente el centro del refuerzo, mientras el hilo forma un lazo para continuar la costura. Aguja atraviesa horizontalmente una estructura de hilo denso que forma un ojal reforzado. El hilo se curva alrededor del extremo redondeado, completando el contorno del acabado. La imagen se encuentra: Pág. 184 anexo 1, cargado al sharepoint La imagen se encuentra: Pág. 184 anexo 1, cargado al sharepoint Superficie textil con ojal horizontal reforzado por puntadas densas. El acabado se presenta simétrico, con bordes compactos que delimitan la abertura central. La imagen se encuentra: Pág. 184 anexo 1, cargado al sharepoint Aguja atraviesa verticalmente una superficie, asegurando una serie de puntadas compactas dispuestas horizontalmente. El hilo se curva hacia atrás para continuar el refuerzo en el extremo del ojal. La imagen se encuentra: Pág. 184 anexo 1, cargado al sharepoint')
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
                          img(src='@/assets/curso/Tema3/fig46.svg', alt='Puntadas agrupadas forman un ojal rodeado por hilo enrollado de forma pareja. Una aguja atraviesa lateralmente el centro del refuerzo, mientras el hilo forma un lazo para continuar la costura. Aguja atraviesa horizontalmente una estructura de hilo denso que forma un ojal reforzado. El hilo se curva alrededor del extremo redondeado, completando el contorno del acabado. La imagen se encuentra: Pág. 184 anexo 1, cargado al sharepoint La imagen se encuentra: Pág. 184 anexo 1, cargado al sharepoint Superficie textil con ojal horizontal reforzado por puntadas densas. El acabado se presenta simétrico, con bordes compactos que delimitan la abertura central. La imagen se encuentra: Pág. 184 anexo 1, cargado al sharepoint Aguja atraviesa verticalmente una superficie, asegurando una serie de puntadas compactas dispuestas horizontalmente. El hilo se curva hacia atrás para continuar el refuerzo en el extremo del ojal. La imagen se encuentra: Pág. 184 anexo 1, cargado al sharepoint')
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
                          img(src='@/assets/curso/Tema3/fig47.svg', alt='Puntadas agrupadas forman un ojal rodeado por hilo enrollado de forma pareja. Una aguja atraviesa lateralmente el centro del refuerzo, mientras el hilo forma un lazo para continuar la costura. Aguja atraviesa horizontalmente una estructura de hilo denso que forma un ojal reforzado. El hilo se curva alrededor del extremo redondeado, completando el contorno del acabado. La imagen se encuentra: Pág. 184 anexo 1, cargado al sharepoint La imagen se encuentra: Pág. 184 anexo 1, cargado al sharepoint Superficie textil con ojal horizontal reforzado por puntadas densas. El acabado se presenta simétrico, con bordes compactos que delimitan la abertura central. La imagen se encuentra: Pág. 184 anexo 1, cargado al sharepoint Aguja atraviesa verticalmente una superficie, asegurando una serie de puntadas compactas dispuestas horizontalmente. El hilo se curva hacia atrás para continuar el refuerzo en el extremo del ojal. La imagen se encuentra: Pág. 184 anexo 1, cargado al sharepoint')
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
                          img(src='@/assets/curso/Tema3/fig48.svg', alt='Puntadas agrupadas forman un ojal rodeado por hilo enrollado de forma pareja. Una aguja atraviesa lateralmente el centro del refuerzo, mientras el hilo forma un lazo para continuar la costura. Aguja atraviesa horizontalmente una estructura de hilo denso que forma un ojal reforzado. El hilo se curva alrededor del extremo redondeado, completando el contorno del acabado. La imagen se encuentra: Pág. 184 anexo 1, cargado al sharepoint La imagen se encuentra: Pág. 184 anexo 1, cargado al sharepoint Superficie textil con ojal horizontal reforzado por puntadas densas. El acabado se presenta simétrico, con bordes compactos que delimitan la abertura central. La imagen se encuentra: Pág. 184 anexo 1, cargado al sharepoint Aguja atraviesa verticalmente una superficie, asegurando una serie de puntadas compactas dispuestas horizontalmente. El hilo se curva hacia atrás para continuar el refuerzo en el extremo del ojal. La imagen se encuentra: Pág. 184 anexo 1, cargado al sharepoint')
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
                          img(src='@/assets/curso/Tema3/fig49.svg', alt='Puntadas agrupadas forman un ojal rodeado por hilo enrollado de forma pareja. Una aguja atraviesa lateralmente el centro del refuerzo, mientras el hilo forma un lazo para continuar la costura. Aguja atraviesa horizontalmente una estructura de hilo denso que forma un ojal reforzado. El hilo se curva alrededor del extremo redondeado, completando el contorno del acabado. La imagen se encuentra: Pág. 184 anexo 1, cargado al sharepoint La imagen se encuentra: Pág. 184 anexo 1, cargado al sharepoint Superficie textil con ojal horizontal reforzado por puntadas densas. El acabado se presenta simétrico, con bordes compactos que delimitan la abertura central. La imagen se encuentra: Pág. 184 anexo 1, cargado al sharepoint Aguja atraviesa verticalmente una superficie, asegurando una serie de puntadas compactas dispuestas horizontalmente. El hilo se curva hacia atrás para continuar el refuerzo en el extremo del ojal. La imagen se encuentra: Pág. 184 anexo 1, cargado al sharepoint')
                          figcaption Fuente: Knight, (2010)
              
                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-12
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 50.  
                            span  Pieza terminada
                          img(src='@/assets/curso/Tema3/fig50.svg', alt='Puntadas agrupadas forman un ojal rodeado por hilo enrollado de forma pareja. Una aguja atraviesa lateralmente el centro del refuerzo, mientras el hilo forma un lazo para continuar la costura. Aguja atraviesa horizontalmente una estructura de hilo denso que forma un ojal reforzado. El hilo se curva alrededor del extremo redondeado, completando el contorno del acabado. La imagen se encuentra: Pág. 184 anexo 1, cargado al sharepoint La imagen se encuentra: Pág. 184 anexo 1, cargado al sharepoint Superficie textil con ojal horizontal reforzado por puntadas densas. El acabado se presenta simétrico, con bordes compactos que delimitan la abertura central. La imagen se encuentra: Pág. 184 anexo 1, cargado al sharepoint Aguja atraviesa verticalmente una superficie, asegurando una serie de puntadas compactas dispuestas horizontalmente. El hilo se curva hacia atrás para continuar el refuerzo en el extremo del ojal. La imagen se encuentra: Pág. 184 anexo 1, cargado al sharepoint')
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
                          img(src='@/assets/curso/Tema3/fig51.svg', alt='Pieza rectangular colocada sobre una superficie contrastante, asegurada con puntadas largas distribuidas en todo su contorno. Las costuras delimitan el perímetro de fijación. La imagen se encuentra: Pág. 184 anexo 1, cargado al sharepoint Dos rectángulos concéntricos marcados con líneas de puntadas largas delimitan una zona central sobre la tela. Una línea horizontal punteada atraviesa el espacio interior, indicando el eje de una futura abertura. La imagen se encuentra: Pág. 184 anexo 1, cargado al sharepoint Zona rectangular delimitada con líneas de puntadas largas. En el centro, una figura de corte horizontal se extiende entre ambos extremos, terminando en formas triangulares que indican puntos de corte diagonal para formar una abertura interna. La imagen se encuentra: Pág. 184 anexo 1, cargado al sharepoint Aguja pasa desde el reverso hacia el frente de una abertura rectangular, guiada por una puntada vertical. El hilo forma una curva amplia sobre el fondo, iniciando la fijación de los bordes. Abertura rectangular con bordes internos asegurados por pequeñas puntadas manuales. En los extremos, los cortes diagonales están reforzados para evitar desgarros, mientras el centro mantiene la forma alineada. Abertura rectangular terminada con bordes plegados hacia el interior, formando un ojal de acabado limpio y centrado sobre la superficie textil. La imagen se encuentra: Pág. 184 anexo 1, cargado al sharepoint')
                          figcaption Fuente: Knight, (2010)

                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 2. Meter la aguja por otro agujero y pasarlo por la tela, el hilo se debe dejar flojo.
                        .col-lg-6  
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 52. 
                            span  Pieza 2
                          img(src='@/assets/curso/Tema3/fig52.svg', alt='Pieza rectangular colocada sobre una superficie contrastante, asegurada con puntadas largas distribuidas en todo su contorno. Las costuras delimitan el perímetro de fijación. La imagen se encuentra: Pág. 184 anexo 1, cargado al sharepoint Dos rectángulos concéntricos marcados con líneas de puntadas largas delimitan una zona central sobre la tela. Una línea horizontal punteada atraviesa el espacio interior, indicando el eje de una futura abertura. La imagen se encuentra: Pág. 184 anexo 1, cargado al sharepoint Zona rectangular delimitada con líneas de puntadas largas. En el centro, una figura de corte horizontal se extiende entre ambos extremos, terminando en formas triangulares que indican puntos de corte diagonal para formar una abertura interna. La imagen se encuentra: Pág. 184 anexo 1, cargado al sharepoint Aguja pasa desde el reverso hacia el frente de una abertura rectangular, guiada por una puntada vertical. El hilo forma una curva amplia sobre el fondo, iniciando la fijación de los bordes. Abertura rectangular con bordes internos asegurados por pequeñas puntadas manuales. En los extremos, los cortes diagonales están reforzados para evitar desgarros, mientras el centro mantiene la forma alineada. Abertura rectangular terminada con bordes plegados hacia el interior, formando un ojal de acabado limpio y centrado sobre la superficie textil. La imagen se encuentra: Pág. 184 anexo 1, cargado al sharepoint')
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
                          img(src='@/assets/curso/Tema3/fig53.svg', alt='Pieza rectangular colocada sobre una superficie contrastante, asegurada con puntadas largas distribuidas en todo su contorno. Las costuras delimitan el perímetro de fijación. La imagen se encuentra: Pág. 184 anexo 1, cargado al sharepoint Dos rectángulos concéntricos marcados con líneas de puntadas largas delimitan una zona central sobre la tela. Una línea horizontal punteada atraviesa el espacio interior, indicando el eje de una futura abertura. La imagen se encuentra: Pág. 184 anexo 1, cargado al sharepoint Zona rectangular delimitada con líneas de puntadas largas. En el centro, una figura de corte horizontal se extiende entre ambos extremos, terminando en formas triangulares que indican puntos de corte diagonal para formar una abertura interna. La imagen se encuentra: Pág. 184 anexo 1, cargado al sharepoint Aguja pasa desde el reverso hacia el frente de una abertura rectangular, guiada por una puntada vertical. El hilo forma una curva amplia sobre el fondo, iniciando la fijación de los bordes. Abertura rectangular con bordes internos asegurados por pequeñas puntadas manuales. En los extremos, los cortes diagonales están reforzados para evitar desgarros, mientras el centro mantiene la forma alineada. Abertura rectangular terminada con bordes plegados hacia el interior, formando un ojal de acabado limpio y centrado sobre la superficie textil. La imagen se encuentra: Pág. 184 anexo 1, cargado al sharepoint')
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
                          img(src='@/assets/curso/Tema3/fig54.svg', alt='Pieza rectangular colocada sobre una superficie contrastante, asegurada con puntadas largas distribuidas en todo su contorno. Las costuras delimitan el perímetro de fijación. La imagen se encuentra: Pág. 184 anexo 1, cargado al sharepoint Dos rectángulos concéntricos marcados con líneas de puntadas largas delimitan una zona central sobre la tela. Una línea horizontal punteada atraviesa el espacio interior, indicando el eje de una futura abertura. La imagen se encuentra: Pág. 184 anexo 1, cargado al sharepoint Zona rectangular delimitada con líneas de puntadas largas. En el centro, una figura de corte horizontal se extiende entre ambos extremos, terminando en formas triangulares que indican puntos de corte diagonal para formar una abertura interna. La imagen se encuentra: Pág. 184 anexo 1, cargado al sharepoint Aguja pasa desde el reverso hacia el frente de una abertura rectangular, guiada por una puntada vertical. El hilo forma una curva amplia sobre el fondo, iniciando la fijación de los bordes. Abertura rectangular con bordes internos asegurados por pequeñas puntadas manuales. En los extremos, los cortes diagonales están reforzados para evitar desgarros, mientras el centro mantiene la forma alineada. Abertura rectangular terminada con bordes plegados hacia el interior, formando un ojal de acabado limpio y centrado sobre la superficie textil. La imagen se encuentra: Pág. 184 anexo 1, cargado al sharepoint')
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
                          img(src='@/assets/curso/Tema3/fig55.svg', alt='Pieza rectangular colocada sobre una superficie contrastante, asegurada con puntadas largas distribuidas en todo su contorno. Las costuras delimitan el perímetro de fijación. La imagen se encuentra: Pág. 184 anexo 1, cargado al sharepoint Dos rectángulos concéntricos marcados con líneas de puntadas largas delimitan una zona central sobre la tela. Una línea horizontal punteada atraviesa el espacio interior, indicando el eje de una futura abertura. La imagen se encuentra: Pág. 184 anexo 1, cargado al sharepoint Zona rectangular delimitada con líneas de puntadas largas. En el centro, una figura de corte horizontal se extiende entre ambos extremos, terminando en formas triangulares que indican puntos de corte diagonal para formar una abertura interna. La imagen se encuentra: Pág. 184 anexo 1, cargado al sharepoint Aguja pasa desde el reverso hacia el frente de una abertura rectangular, guiada por una puntada vertical. El hilo forma una curva amplia sobre el fondo, iniciando la fijación de los bordes. Abertura rectangular con bordes internos asegurados por pequeñas puntadas manuales. En los extremos, los cortes diagonales están reforzados para evitar desgarros, mientras el centro mantiene la forma alineada. Abertura rectangular terminada con bordes plegados hacia el interior, formando un ojal de acabado limpio y centrado sobre la superficie textil. La imagen se encuentra: Pág. 184 anexo 1, cargado al sharepoint')
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
                          img(src='@/assets/curso/Tema3/fig56.svg', alt='Pieza rectangular colocada sobre una superficie contrastante, asegurada con puntadas largas distribuidas en todo su contorno. Las costuras delimitan el perímetro de fijación. La imagen se encuentra: Pág. 184 anexo 1, cargado al sharepoint Dos rectángulos concéntricos marcados con líneas de puntadas largas delimitan una zona central sobre la tela. Una línea horizontal punteada atraviesa el espacio interior, indicando el eje de una futura abertura. La imagen se encuentra: Pág. 184 anexo 1, cargado al sharepoint Zona rectangular delimitada con líneas de puntadas largas. En el centro, una figura de corte horizontal se extiende entre ambos extremos, terminando en formas triangulares que indican puntos de corte diagonal para formar una abertura interna. La imagen se encuentra: Pág. 184 anexo 1, cargado al sharepoint Aguja pasa desde el reverso hacia el frente de una abertura rectangular, guiada por una puntada vertical. El hilo forma una curva amplia sobre el fondo, iniciando la fijación de los bordes. Abertura rectangular con bordes internos asegurados por pequeñas puntadas manuales. En los extremos, los cortes diagonales están reforzados para evitar desgarros, mientras el centro mantiene la forma alineada. Abertura rectangular terminada con bordes plegados hacia el interior, formando un ojal de acabado limpio y centrado sobre la superficie textil. La imagen se encuentra: Pág. 184 anexo 1, cargado al sharepoint')
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
                          img(src='@/assets/curso/Tema3/fig57.svg', alt='Una aguja atraviesa un botón de cuatro perforaciones mientras el hilo realiza un giro, asegurando el primer paso de fijación sobre una superficie textil plana. La imagen se encuentra: Pág.181 Anexo 1, cargado al sharepoint Un botón de cuatro perforaciones se encuentra asegurado sobre una superficie textil, con hilo cruzado que une dos orificios opuestos, mientras la aguja desciende para continuar la fijación. La imagen se encuentra: Pág.181 Anexo 1, cargado al sharepoint Una aguja con hilo comienza el proceso de unión pasando por uno de los orificios de un botón de cuatro perforaciones, ubicado sobre una superficie textil. La imagen se encuentra: Pág.181 Anexo 1, cargado al sharepoint Una aguja atraviesa una superficie textil desde el reverso hacia el frente, llevando un hilo que forma un arco amplio y se dirige hacia una zona previamente intervenida con puntada. La imagen se encuentra: Pág.181 Anexo 1, cargado al sharepoint Un botón grueso con base elevada ha sido asegurado sobre una superficie textil mediante una puntada central, mientras el hilo y la aguja permanecen listos para continuar el proceso de fijación. La imagen se encuentra: Pág.181 Anexo 1, cargado al sharepoint Dos elementos circulares acolchados están ubicados de forma paralela sobre una superficie textil, dispuestos simétricamente y con volumen uniforme. La imagen se encuentra: Pág.181 Anexo 1, cargado al sharepoint Dos botones circulares con cuatro perforaciones están alineados horizontalmente sobre una superficie textil, con bordes ligeramente elevados y disposición simétrica. La imagen se encuentra: Pág.181 Anexo 1, cargado al sharepoint')
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
                          img(src='@/assets/curso/Tema3/fig58.svg', alt='Una aguja atraviesa un botón de cuatro perforaciones mientras el hilo realiza un giro, asegurando el primer paso de fijación sobre una superficie textil plana. La imagen se encuentra: Pág.181 Anexo 1, cargado al sharepoint Un botón de cuatro perforaciones se encuentra asegurado sobre una superficie textil, con hilo cruzado que une dos orificios opuestos, mientras la aguja desciende para continuar la fijación. La imagen se encuentra: Pág.181 Anexo 1, cargado al sharepoint Una aguja con hilo comienza el proceso de unión pasando por uno de los orificios de un botón de cuatro perforaciones, ubicado sobre una superficie textil. La imagen se encuentra: Pág.181 Anexo 1, cargado al sharepoint Una aguja atraviesa una superficie textil desde el reverso hacia el frente, llevando un hilo que forma un arco amplio y se dirige hacia una zona previamente intervenida con puntada. La imagen se encuentra: Pág.181 Anexo 1, cargado al sharepoint Un botón grueso con base elevada ha sido asegurado sobre una superficie textil mediante una puntada central, mientras el hilo y la aguja permanecen listos para continuar el proceso de fijación. La imagen se encuentra: Pág.181 Anexo 1, cargado al sharepoint Dos elementos circulares acolchados están ubicados de forma paralela sobre una superficie textil, dispuestos simétricamente y con volumen uniforme. La imagen se encuentra: Pág.181 Anexo 1, cargado al sharepoint Dos botones circulares con cuatro perforaciones están alineados horizontalmente sobre una superficie textil, con bordes ligeramente elevados y disposición simétrica. La imagen se encuentra: Pág.181 Anexo 1, cargado al sharepoint')
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
                          img(src='@/assets/curso/Tema3/fig59.svg', alt='Una aguja atraviesa un botón de cuatro perforaciones mientras el hilo realiza un giro, asegurando el primer paso de fijación sobre una superficie textil plana. La imagen se encuentra: Pág.181 Anexo 1, cargado al sharepoint Un botón de cuatro perforaciones se encuentra asegurado sobre una superficie textil, con hilo cruzado que une dos orificios opuestos, mientras la aguja desciende para continuar la fijación. La imagen se encuentra: Pág.181 Anexo 1, cargado al sharepoint Una aguja con hilo comienza el proceso de unión pasando por uno de los orificios de un botón de cuatro perforaciones, ubicado sobre una superficie textil. La imagen se encuentra: Pág.181 Anexo 1, cargado al sharepoint Una aguja atraviesa una superficie textil desde el reverso hacia el frente, llevando un hilo que forma un arco amplio y se dirige hacia una zona previamente intervenida con puntada. La imagen se encuentra: Pág.181 Anexo 1, cargado al sharepoint Un botón grueso con base elevada ha sido asegurado sobre una superficie textil mediante una puntada central, mientras el hilo y la aguja permanecen listos para continuar el proceso de fijación. La imagen se encuentra: Pág.181 Anexo 1, cargado al sharepoint Dos elementos circulares acolchados están ubicados de forma paralela sobre una superficie textil, dispuestos simétricamente y con volumen uniforme. La imagen se encuentra: Pág.181 Anexo 1, cargado al sharepoint Dos botones circulares con cuatro perforaciones están alineados horizontalmente sobre una superficie textil, con bordes ligeramente elevados y disposición simétrica. La imagen se encuentra: Pág.181 Anexo 1, cargado al sharepoint')
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
                          img(src='@/assets/curso/Tema3/fig60.svg', alt='Una aguja atraviesa un botón de cuatro perforaciones mientras el hilo realiza un giro, asegurando el primer paso de fijación sobre una superficie textil plana. La imagen se encuentra: Pág.181 Anexo 1, cargado al sharepoint Un botón de cuatro perforaciones se encuentra asegurado sobre una superficie textil, con hilo cruzado que une dos orificios opuestos, mientras la aguja desciende para continuar la fijación. La imagen se encuentra: Pág.181 Anexo 1, cargado al sharepoint Una aguja con hilo comienza el proceso de unión pasando por uno de los orificios de un botón de cuatro perforaciones, ubicado sobre una superficie textil. La imagen se encuentra: Pág.181 Anexo 1, cargado al sharepoint Una aguja atraviesa una superficie textil desde el reverso hacia el frente, llevando un hilo que forma un arco amplio y se dirige hacia una zona previamente intervenida con puntada. La imagen se encuentra: Pág.181 Anexo 1, cargado al sharepoint Un botón grueso con base elevada ha sido asegurado sobre una superficie textil mediante una puntada central, mientras el hilo y la aguja permanecen listos para continuar el proceso de fijación. La imagen se encuentra: Pág.181 Anexo 1, cargado al sharepoint Dos elementos circulares acolchados están ubicados de forma paralela sobre una superficie textil, dispuestos simétricamente y con volumen uniforme. La imagen se encuentra: Pág.181 Anexo 1, cargado al sharepoint Dos botones circulares con cuatro perforaciones están alineados horizontalmente sobre una superficie textil, con bordes ligeramente elevados y disposición simétrica. La imagen se encuentra: Pág.181 Anexo 1, cargado al sharepoint')
                          figcaption Fuente: Knight, (2010)
                .row.justify-content-center
                  .col-sm-8.col-lg-12.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-3
                          p Paso 5. Repetir el proceso anterior, pero saque la aguja directamente por la patilla. Rematar por el revés de la misma manera que en el caso de los agujeros.
                        .col-lg-3.mb-3
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 61.  
                            span  Pieza 5
                          img(src='@/assets/curso/Tema3/fig61.svg', alt='Una aguja atraviesa un botón de cuatro perforaciones mientras el hilo realiza un giro, asegurando el primer paso de fijación sobre una superficie textil plana. La imagen se encuentra: Pág.181 Anexo 1, cargado al sharepoint Un botón de cuatro perforaciones se encuentra asegurado sobre una superficie textil, con hilo cruzado que une dos orificios opuestos, mientras la aguja desciende para continuar la fijación. La imagen se encuentra: Pág.181 Anexo 1, cargado al sharepoint Una aguja con hilo comienza el proceso de unión pasando por uno de los orificios de un botón de cuatro perforaciones, ubicado sobre una superficie textil. La imagen se encuentra: Pág.181 Anexo 1, cargado al sharepoint Una aguja atraviesa una superficie textil desde el reverso hacia el frente, llevando un hilo que forma un arco amplio y se dirige hacia una zona previamente intervenida con puntada. La imagen se encuentra: Pág.181 Anexo 1, cargado al sharepoint Un botón grueso con base elevada ha sido asegurado sobre una superficie textil mediante una puntada central, mientras el hilo y la aguja permanecen listos para continuar el proceso de fijación. La imagen se encuentra: Pág.181 Anexo 1, cargado al sharepoint Dos elementos circulares acolchados están ubicados de forma paralela sobre una superficie textil, dispuestos simétricamente y con volumen uniforme. La imagen se encuentra: Pág.181 Anexo 1, cargado al sharepoint Dos botones circulares con cuatro perforaciones están alineados horizontalmente sobre una superficie textil, con bordes ligeramente elevados y disposición simétrica. La imagen se encuentra: Pág.181 Anexo 1, cargado al sharepoint')
                          figcaption Fuente: Knight, (2010)
                        .col-lg-3.mb-3
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 62.  
                            span  Botones forrados con patilla  
                          img(src='@/assets/curso/Tema3/fig62.svg', alt='Una aguja atraviesa un botón de cuatro perforaciones mientras el hilo realiza un giro, asegurando el primer paso de fijación sobre una superficie textil plana. La imagen se encuentra: Pág.181 Anexo 1, cargado al sharepoint Un botón de cuatro perforaciones se encuentra asegurado sobre una superficie textil, con hilo cruzado que une dos orificios opuestos, mientras la aguja desciende para continuar la fijación. La imagen se encuentra: Pág.181 Anexo 1, cargado al sharepoint Una aguja con hilo comienza el proceso de unión pasando por uno de los orificios de un botón de cuatro perforaciones, ubicado sobre una superficie textil. La imagen se encuentra: Pág.181 Anexo 1, cargado al sharepoint Una aguja atraviesa una superficie textil desde el reverso hacia el frente, llevando un hilo que forma un arco amplio y se dirige hacia una zona previamente intervenida con puntada. La imagen se encuentra: Pág.181 Anexo 1, cargado al sharepoint Un botón grueso con base elevada ha sido asegurado sobre una superficie textil mediante una puntada central, mientras el hilo y la aguja permanecen listos para continuar el proceso de fijación. La imagen se encuentra: Pág.181 Anexo 1, cargado al sharepoint Dos elementos circulares acolchados están ubicados de forma paralela sobre una superficie textil, dispuestos simétricamente y con volumen uniforme. La imagen se encuentra: Pág.181 Anexo 1, cargado al sharepoint Dos botones circulares con cuatro perforaciones están alineados horizontalmente sobre una superficie textil, con bordes ligeramente elevados y disposición simétrica. La imagen se encuentra: Pág.181 Anexo 1, cargado al sharepoint')
                          figcaption Fuente: Knight, (2010)

                        .col-lg-3
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 63.  
                            span  Botones con agujeros
                          img(src='@/assets/curso/Tema3/fig63.svg', alt='Una aguja atraviesa un botón de cuatro perforaciones mientras el hilo realiza un giro, asegurando el primer paso de fijación sobre una superficie textil plana. La imagen se encuentra: Pág.181 Anexo 1, cargado al sharepoint Un botón de cuatro perforaciones se encuentra asegurado sobre una superficie textil, con hilo cruzado que une dos orificios opuestos, mientras la aguja desciende para continuar la fijación. La imagen se encuentra: Pág.181 Anexo 1, cargado al sharepoint Una aguja con hilo comienza el proceso de unión pasando por uno de los orificios de un botón de cuatro perforaciones, ubicado sobre una superficie textil. La imagen se encuentra: Pág.181 Anexo 1, cargado al sharepoint Una aguja atraviesa una superficie textil desde el reverso hacia el frente, llevando un hilo que forma un arco amplio y se dirige hacia una zona previamente intervenida con puntada. La imagen se encuentra: Pág.181 Anexo 1, cargado al sharepoint Un botón grueso con base elevada ha sido asegurado sobre una superficie textil mediante una puntada central, mientras el hilo y la aguja permanecen listos para continuar el proceso de fijación. La imagen se encuentra: Pág.181 Anexo 1, cargado al sharepoint Dos elementos circulares acolchados están ubicados de forma paralela sobre una superficie textil, dispuestos simétricamente y con volumen uniforme. La imagen se encuentra: Pág.181 Anexo 1, cargado al sharepoint Dos botones circulares con cuatro perforaciones están alineados horizontalmente sobre una superficie textil, con bordes ligeramente elevados y disposición simétrica. La imagen se encuentra: Pág.181 Anexo 1, cargado al sharepoint')
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
                            h5 Figura 64. 
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
                            h5 Figura 65. 
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
                            h5 Figura 66.  
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
                            h5 Figura 68. 
                            span  Pieza 1
                          img(src='@/assets/curso/Tema3/fig68.svg', alt='Tres piezas alineadas verticalmente indican el armado de un broche metálico, con una parte superior e inferior dispuestas para unirse a través de una superficie textil perforada. La imagen se encuentra: Pág.186 Anexo 1, cargado al sharepoint Una aguja enhebrada atraviesa un accesorio textil fruncido, adherido a una base rígida redonda, en el proceso de sujeción mediante puntadas a mano. La imagen se encuentra: Pág.186 Anexo 1, cargado al sharepoint Dos piezas redondas de superficie textil acolchada se disponen por separado; una integra un pequeño vástago central, mientras la otra presenta una hendidura circular, indicando su función como sistema de cierre. La imagen se encuentra: Pág.186 Anexo 1, cargado al sharepoint Dos piezas textiles superpuestas cuentan con botones cosidos sobre una superficie de tejido con textura gruesa y entramado visible, alineados para facilitar el cierre. La imagen se encuentra: Pág.186 Anexo 1, cargado al sharepoint')
                          figcaption Fuente: Knight, (2010)

                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 2.  Se debe coser un círculo de puntadas alrededor del cierre y fruncir. Cortar el exceso de tela.
                        .col-lg-6  
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 69. 
                            span  Pieza 2
                          img(src='@/assets/curso/Tema3/fig69.svg', alt='Tres piezas alineadas verticalmente indican el armado de un broche metálico, con una parte superior e inferior dispuestas para unirse a través de una superficie textil perforada. La imagen se encuentra: Pág.186 Anexo 1, cargado al sharepoint Una aguja enhebrada atraviesa un accesorio textil fruncido, adherido a una base rígida redonda, en el proceso de sujeción mediante puntadas a mano. La imagen se encuentra: Pág.186 Anexo 1, cargado al sharepoint Dos piezas redondas de superficie textil acolchada se disponen por separado; una integra un pequeño vástago central, mientras la otra presenta una hendidura circular, indicando su función como sistema de cierre. La imagen se encuentra: Pág.186 Anexo 1, cargado al sharepoint Dos piezas textiles superpuestas cuentan con botones cosidos sobre una superficie de tejido con textura gruesa y entramado visible, alineados para facilitar el cierre. La imagen se encuentra: Pág.186 Anexo 1, cargado al sharepoint')
                          figcaption Fuente: Knight, (2010)
                .row.mb-3
                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 3.  Repetir el proceso con la otra mitad del automático y luego coser ambos en su sitio.
                        .col-lg-6  
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 70.  
                            span  Pieza 3
                          img(src='@/assets/curso/Tema3/fig70.svg', alt='Tres piezas alineadas verticalmente indican el armado de un broche metálico, con una parte superior e inferior dispuestas para unirse a través de una superficie textil perforada. La imagen se encuentra: Pág.186 Anexo 1, cargado al sharepoint Una aguja enhebrada atraviesa un accesorio textil fruncido, adherido a una base rígida redonda, en el proceso de sujeción mediante puntadas a mano. La imagen se encuentra: Pág.186 Anexo 1, cargado al sharepoint Dos piezas redondas de superficie textil acolchada se disponen por separado; una integra un pequeño vástago central, mientras la otra presenta una hendidura circular, indicando su función como sistema de cierre. La imagen se encuentra: Pág.186 Anexo 1, cargado al sharepoint Dos piezas textiles superpuestas cuentan con botones cosidos sobre una superficie de tejido con textura gruesa y entramado visible, alineados para facilitar el cierre. La imagen se encuentra: Pág.186 Anexo 1, cargado al sharepoint')
                          figcaption Fuente: Knight, (2010)

                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 4.  Prenda terminada.
                        .col-lg-6  
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 71.  
                            span  Cierres cubiertos de tela
                          img(src='@/assets/curso/Tema3/fig71.svg', alt='Tres piezas alineadas verticalmente indican el armado de un broche metálico, con una parte superior e inferior dispuestas para unirse a través de una superficie textil perforada. La imagen se encuentra: Pág.186 Anexo 1, cargado al sharepoint Una aguja enhebrada atraviesa un accesorio textil fruncido, adherido a una base rígida redonda, en el proceso de sujeción mediante puntadas a mano. La imagen se encuentra: Pág.186 Anexo 1, cargado al sharepoint Dos piezas redondas de superficie textil acolchada se disponen por separado; una integra un pequeño vástago central, mientras la otra presenta una hendidura circular, indicando su función como sistema de cierre. La imagen se encuentra: Pág.186 Anexo 1, cargado al sharepoint Dos piezas textiles superpuestas cuentan con botones cosidos sobre una superficie de tejido con textura gruesa y entramado visible, alineados para facilitar el cierre. La imagen se encuentra: Pág.186 Anexo 1, cargado al sharepoint')
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
                            h5 Figura 72. 
                            span  Pieza 1
                          img(src='@/assets/curso/Tema3/fig72.svg', alt='La imagen se encuentra: Pág.183 Anexo 1, cargado al sharepoint Una aguja enhebrada realiza una puntada sobre un conjunto de capas rectangulares, donde una pieza central está reforzada con entretela y asegurada mediante costura perimetral. La imagen se encuentra: Pág.183 Anexo 1, cargado al sharepoint Una máquina de coser ejecuta una costura recta sobre una estructura rectangular reforzada con entretela, utilizando un prensatelas especializado para formar una abertura funcional. La imagen se encuentra: Pág.183 Anexo 1, cargado al sharepoint Una herramienta de corte con mango cilíndrico realiza una incisión precisa en una abertura rectangular previamente cosida sobre una superficie textil. La imagen se encuentra: Pág.183 Anexo 1, cargado al sharepoiint Una abertura rectangular terminada con costura densa y reforzada se encuentra centrada sobre una superficie textil, lista para cumplir su función de ojal. La imagen se encuentra: Pág.183 Anexo 1, cargado al sharepoint')
                          figcaption Fuente: Knight, (2010)

                  .col-sm-6.col-lg-6.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-6
                          p Paso 2.  Hilvanar las capas, marcar la posición del ojal y escoger la opción para ojales ligeros.
                        .col-lg-6  
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 73. 
                            span  Pieza 2
                          img(src='@/assets/curso/Tema3/fig73.svg', alt='La imagen se encuentra: Pág.183 Anexo 1, cargado al sharepoint Una aguja enhebrada realiza una puntada sobre un conjunto de capas rectangulares, donde una pieza central está reforzada con entretela y asegurada mediante costura perimetral. La imagen se encuentra: Pág.183 Anexo 1, cargado al sharepoint Una máquina de coser ejecuta una costura recta sobre una estructura rectangular reforzada con entretela, utilizando un prensatelas especializado para formar una abertura funcional. La imagen se encuentra: Pág.183 Anexo 1, cargado al sharepoint Una herramienta de corte con mango cilíndrico realiza una incisión precisa en una abertura rectangular previamente cosida sobre una superficie textil. La imagen se encuentra: Pág.183 Anexo 1, cargado al sharepoiint Una abertura rectangular terminada con costura densa y reforzada se encuentra centrada sobre una superficie textil, lista para cumplir su función de ojal. La imagen se encuentra: Pág.183 Anexo 1, cargado al sharepoint')
                          figcaption Fuente: Knight, (2010)
                .row.mb-3
                  .col-sm-6.col-lg-4.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-4
                          p Paso 3.  Coser el ojal en su sitio.
                        .col-lg-7  
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 74.  
                            span  Pieza 3
                          img(src='@/assets/curso/Tema3/fig74.svg', alt='La imagen se encuentra: Pág.183 Anexo 1, cargado al sharepoint Una aguja enhebrada realiza una puntada sobre un conjunto de capas rectangulares, donde una pieza central está reforzada con entretela y asegurada mediante costura perimetral. La imagen se encuentra: Pág.183 Anexo 1, cargado al sharepoint Una máquina de coser ejecuta una costura recta sobre una estructura rectangular reforzada con entretela, utilizando un prensatelas especializado para formar una abertura funcional. La imagen se encuentra: Pág.183 Anexo 1, cargado al sharepoint Una herramienta de corte con mango cilíndrico realiza una incisión precisa en una abertura rectangular previamente cosida sobre una superficie textil. La imagen se encuentra: Pág.183 Anexo 1, cargado al sharepoiint Una abertura rectangular terminada con costura densa y reforzada se encuentra centrada sobre una superficie textil, lista para cumplir su función de ojal. La imagen se encuentra: Pág.183 Anexo 1, cargado al sharepoint')
                          figcaption Fuente: Knight, (2010)

                  .col-sm-6.col-lg-4.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-4
                          p Paso 4.  Pulir el ojal.
                        .col-lg-7  
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 75.  
                            span  Pieza 4
                          img(src='@/assets/curso/Tema3/fig75.svg', alt='La imagen se encuentra: Pág.183 Anexo 1, cargado al sharepoint Una aguja enhebrada realiza una puntada sobre un conjunto de capas rectangulares, donde una pieza central está reforzada con entretela y asegurada mediante costura perimetral. La imagen se encuentra: Pág.183 Anexo 1, cargado al sharepoint Una máquina de coser ejecuta una costura recta sobre una estructura rectangular reforzada con entretela, utilizando un prensatelas especializado para formar una abertura funcional. La imagen se encuentra: Pág.183 Anexo 1, cargado al sharepoint Una herramienta de corte con mango cilíndrico realiza una incisión precisa en una abertura rectangular previamente cosida sobre una superficie textil. La imagen se encuentra: Pág.183 Anexo 1, cargado al sharepoiint Una abertura rectangular terminada con costura densa y reforzada se encuentra centrada sobre una superficie textil, lista para cumplir su función de ojal. La imagen se encuentra: Pág.183 Anexo 1, cargado al sharepoint')
                          figcaption Fuente: Knight, (2010)

                  .col-sm-6.col-lg-4.mb-4.mb-lg-0
                    .tarjeta--boton.p-4
                      .row.justify-content-center.align-items-center
                        .col-lg-4
                          p Paso 5.  Prenda terminada.
                        .col-lg-7  
                          .titulo-sexto.color-acento-contenido.mb-4
                            h5 Figura 76.  
                            span  Pieza 5
                          img(src='@/assets/curso/Tema3/fig76.svg', alt='La imagen se encuentra: Pág.183 Anexo 1, cargado al sharepoint Una aguja enhebrada realiza una puntada sobre un conjunto de capas rectangulares, donde una pieza central está reforzada con entretela y asegurada mediante costura perimetral. La imagen se encuentra: Pág.183 Anexo 1, cargado al sharepoint Una máquina de coser ejecuta una costura recta sobre una estructura rectangular reforzada con entretela, utilizando un prensatelas especializado para formar una abertura funcional. La imagen se encuentra: Pág.183 Anexo 1, cargado al sharepoint Una herramienta de corte con mango cilíndrico realiza una incisión precisa en una abertura rectangular previamente cosida sobre una superficie textil. La imagen se encuentra: Pág.183 Anexo 1, cargado al sharepoiint Una abertura rectangular terminada con costura densa y reforzada se encuentra centrada sobre una superficie textil, lista para cumplir su función de ojal. La imagen se encuentra: Pág.183 Anexo 1, cargado al sharepoint')
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
          .row
            .col-md-6.mb-4.mb-md-0
              h4 Paso 1. 
              p Cierre sin haberse intervenido.
            .col-md-5
              .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                h5 Figura 77. 
                span Paso 1 
              img(src='@/assets/curso/Tema3/img11.png', alt='Un cierre de cremallera se encuentra parcialmente abierto, con los extremos inferiores separados y el deslizador ubicado en el centro de la cinta textil. La imagen se encuentra en el anexo 3, libro elegantisima Pág. 63, cargado en el sharepoint')
              figcaption.text-regular Fuente: Delego, (1974)

          .row.texto-izquierda 
            .col-md-5
              .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                h5 Figura 78.  
                span Paso 2
              img(src='@/assets/curso/Tema3/img12.png', alt='Dos manos manipulan una cinta textil mientras una plancha aplica calor sobre su superficie, generando un doblez definido en uno de sus bordes. La imagen se encuentra en: Anexo 3 Pág. 63 cargado al sharepoint')
              figcaption.text-regular Fuente: Delego, (1974)

            .col-md-6.mb-4.mb-md-0
              h4 Paso 2. 
              p Humedezca la tela del cierre y aplique calor con la plancha mientras estira con la mano opuesta hasta formar una ligera ondulación. Repita el proceso en el otro lado.

          .row
            .col-md-6.mb-4.mb-md-0
              h4 Paso 3.  
              p Cierre con cambrado, de este modo, el cierre se ajustará perfectamente a la curvatura del cuerpo, brindando un acabado preciso y ergonómico.
            .col-md-5
              .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                h5 Figura 79.  
                span Paso 3 
              img(src='@/assets/curso/Tema3/img13.png', alt='Un cierre de cremallera está parcialmente abierto y doblado longitudinalmente, con ondulaciones visibles a lo largo de su cinta textil. La imagen se encuentra: Anexo 3 Pág. 63, cargado al sharepoint')
              figcaption.text-regular Fuente: Delego, (1974)

    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.3 Costuras manuales

    p.mb-3 El proceso de formación de un sastre comienza con el conocimiento y dominio de los principales tipos de puntadas a mano. Estas técnicas artesanales, que requieren únicamente una aguja, hilo y tela, son fundamentales tanto para la construcción de la prenda como para sus acabados. A continuación, se presentan las costuras manuales más representativas.

    .row.bg-slyder.align-items-center.p-3.p-md-4.p-lg-5(data-aos="fade").mb-5
      .col-lg-12.col-12.px-lg-4
        SlyderA(tipo="b").slyderblanco.p-4
          .row.justify-content-center.align-items-center
            .col-10.col-md-8.col-lg-5.mb-4.mb-lg-0
              .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                h5 Figura 80.
                span  Puntada de pespunte o continua
              img(src='@/assets/curso/Tema3/fig80.svg', alt='Representación del proceso de realización de una puntada de pespunte o continua, en la que la aguja atraviesa la tela hacia atrás, formando una línea de puntadas firmes y uniformes, ideal para costuras duraderas en confección a mano.')
              figcaption.d-none.d-lg-block Fuente: https://manosmaravillosas.com/2019/09/11/costura-tipos-de-puntadas-a-mano/
            
            .col-10.col-md-8.col-lg-5.mb-4.mb-lg-0
              .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                h5 Figura 81.
                span  Puntada punto atrás posterior o máquina.
              img(src='@/assets/curso/Tema3/fig81.svg', alt='Secuencia del procedimiento para realizar la puntada punto atrás, también conocida como puntada de máquina. Consiste en insertar la aguja hacia atrás del punto anterior, creando una línea continua de puntadas resistentes, ideal para costuras permanentes hechas a mano. ')
              figcaption.d-none.d-lg-block Fuente: https://elrincondecelestecielo.blogspot.com/2018/11/puntadas-mano.html


          .row.justify-content-center.align-items-center
            .col-10.col-md-8.col-lg-5.mb-4.mb-lg-0
              .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                h5 Figura 82.
                span Punto de hilván
              img(src='@/assets/curso/Tema3/fig82.svg', alt='Una aguja atraviesa una tela, realizando una puntada larga y espaciada, con el hilo formando un recorrido alternado que se emplea para unir temporalmente dos capas.')
              figcaption.d-none.d-lg-block Fuente:  https://manosmaravillosas.com/2019/09/11/costura-tipos-de-puntadas-a-mano/
            
            .col-10.col-md-8.col-lg-5.mb-4.mb-lg-0
              .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                h5 Figura 83.
                span   Puntada posterior separada
              img(src='@/assets/curso/Tema3/fig83.svg', alt='Pieza textil mientras una aguja atraviesa la superficie realizando una puntada lineal con hilo, formando una costura manual de tipo continuo.')
              figcaption.d-none.d-lg-block Fuente:  https://elrincondecelestecielo.blogspot.com/2018/11/puntadas-mano.html 
          
          .row.justify-content-center.align-items-center
            .col-10.col-md-8.col-lg-5.mb-4.mb-lg-0
              .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                h5 Figura 84.
                span  Puntada de bastilla o de frunce
              img(src='@/assets/curso/Tema3/fig84.svg', alt='Una secuencia de puntadas agrupadas de forma densa genera un fruncido sobre una tela, indicando un procedimiento para ajustar volumen mediante hilo tensado.')
              figcaption.d-none.d-lg-block Fuente: https://manosmaravillosas.com/2019/09/11/costura-tipos-de-puntadas-a-mano/
            
            .col-10.col-md-8.col-lg-5.mb-4.mb-lg-0
              .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                h5 Figura 85.
                span Puntada de sobrehilado
              img(src='@/assets/curso/Tema3/fig85.svg', alt='Una aguja realiza puntadas consecutivas que envuelven el borde de una tela, formando un patrón de refuerzo lineal conocido como sobrehilado.')
              figcaption.d-none.d-lg-block Fuente:  https://manosmaravillosas.com/2019/09/11/costura-tipos-de-puntadas-a-mano/
          
          .row.justify-content-center.align-items-center
            .col-10.col-md-8.col-lg-5.mb-4.mb-lg-0
              .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                h5 Figura 86.
                span  Punto de lado o inglés (para dobladillos)
              img(src='@/assets/curso/Tema3/fig86.svg', alt='Una aguja realiza una serie de puntadas diagonales que aseguran un doblez de una tela, formando una unión firme en el borde.')
              figcaption.d-none.d-lg-block Fuente:  https://manosmaravillosas.com/2019/09/11/costura-tipos-de-puntadas-a-mano/
            
            .col-10.col-md-8.col-lg-5.mb-4.mb-lg-0
              .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                h5 Figura 87.
                span  Puntada doble sobrehilado
              img(src='@/assets/curso/Tema3/fig87.svg', alt='Una aguja atraviesa dos piezas textiles superpuestas, fijando un doblez con puntadas rectas distribuidas de forma uniforme a lo largo del borde.')
              figcaption.d-none.d-lg-block Fuente:  https://elrincondecelestecielo.blogspot.com/2018/11/puntadas-mano.html
          
          .row.justify-content-center.align-items-center
            .col-10.col-md-8.col-lg-5.mb-4.mb-lg-0
              .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                h5 Figura 88.
                span   Punto deslizado
              img(src='@/assets/curso/Tema3/fig88.svg', alt='Una aguja realiza puntadas diagonales que unen dos bordes doblados sobre una tela, formando una costura manual que asegura los dobleces de manera cruzada.')
              figcaption.d-none.d-lg-block Fuente:   https://manosmaravillosas.com/2019/09/11/costura-tipos-de-puntadas-a-mano/
            
            .col-10.col-md-8.col-lg-5.mb-4.mb-lg-0
              .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                h5 Figura 89.
                span Puntada invisible
              img(src='@/assets/curso/Tema3/fig89.svg', alt='Una aguja realiza una serie de puntadas en zigzag que aseguran el borde de un doblez sobre una tela.')
              figcaption.d-none.d-lg-block Fuente: https://manosmaravillosas.com/2019/09/11/costura-tipos-de-puntadas-a-mano/
          
          .row.justify-content-center.align-items-center
            .col-10.col-md-8.col-lg-5.mb-4.mb-lg-0
              .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                h5 Figura 90.
                span  Punto de cruz 
              img(src='@/assets/curso/Tema3/fig90.svg', alt='Una aguja ejecuta puntadas cruzadas sobre el borde de un doblez, uniendo dos capas textiles mediante un patrón diagonal que proporciona firmeza y acabado manual.')
              figcaptio.d-none.d-lg-blockn Fuente:    https://manosmaravillosas.com/2019/09/11/costura-tipos-de-puntadas-a-mano/
            
            .col-10.col-md-8.col-lg-5.mb-4.mb-lg-0
              .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                h5 Figura 91.
                span  Puntada de filete, festón o manta
              img(src='@/assets/curso/Tema3/fig91.svg', alt='Una aguja atraviesa el borde de una tela, realizando puntadas envolventes en forma de espiral, generando un acabado de refuerzo con hilo continuo.')
              figcaption.d-none.d-lg-block Fuente: https://manosmaravillosas.com/2019/09/11/costura-tipos-de-puntadas-a-mano/
          
          .row.justify-content-center.align-items-center
            .col-10.col-md-8.col-lg-5.mb-4.mb-lg-0
              .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                h5 Figura 92.
                span  Costura cadeneta
              img(src='@/assets/curso/Tema3/fig92.svg', alt='Se representa el proceso de formación de una puntada cadeneta, donde la aguja atraviesa la tela y el hilo se dispone en forma de bucle para crear la característica cadena de este tipo de costura.')
              figcaption.d-none.d-lg-block Fuente:  https://www.freepik.es/fotos-premium/algunas-puntadas-bordado-lienzo-aguja_19078574.htm#from_element=cross_selling__photo
            
            .col-10.col-md-8.col-lg-5.mb-4.mb-lg-0
              .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                h5 Figura 93.
                span  Puntada de ojal 
              img(src='@/assets/curso/Tema3/fig93.svg', alt='Una aguja atraviesa una tela, en dirección vertical, mientras el hilo forma múltiples bucles consecutivos en un lateral.')
              figcaption.d-none.d-lg-block Fuente: https://manosmaravillosas.com/2019/09/11/costura-tipos-de-puntadas-a-mano/
          
          .row.justify-content-center.align-items-center
            .col-10.col-md-8.col-lg-5.mb-4.mb-lg-0
              .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                h5 Figura 94.
                span  Hilván flojo
              img(src='@/assets/curso/Tema3/fig94.svg', alt='A la izquierda, una aguja atraviesa una tela, realizando puntadas amplias y sueltas con trayecto ondulado. A la derecha, un doblez está sostenido por puntadas rectas verticales, con una indicación de apertura en línea recta acompañada por un símbolo de corte.')
              figcaption.d-none.d-lg-block Fuente:  https://manosmaravillosas.com/2019/09/11/costura-tipos-de-puntadas-a-mano/
            
            .col-10.col-md-8.col-lg-5.mb-4.mb-lg-0
              .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                h5 Figura 95.
                span  Puntada escapulario o gaviado
              img(src='@/assets/curso/Tema3/fig95.svg', alt='Una aguja realiza una serie de puntadas cruzadas en la parte inferior de una pieza con doblez, formando un patrón en forma de equis que asegura el borde doblado a la base.')
              figcaption.d-none.d-lg-block Fuente: https://elrincondecelestecielo.blogspot.com/2018/11/puntadas-mano.html



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
            span Principios en el control de la calidad
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
            span Niveles de revisión 
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
              span Beneficios de la implementación de la calidad 
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
