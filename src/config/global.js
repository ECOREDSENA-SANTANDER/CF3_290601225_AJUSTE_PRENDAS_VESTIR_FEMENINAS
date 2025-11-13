export default {
  global: {
    Name: 'Ajuste y precisión',
    Description:
      'Este componente formativo aborda las etapas clave en la intervención y ajuste de prendas: desde el modelado, trazo y corte, hasta el desarme, modificación y acabado final. Se incluyen técnicas de costura manual, control de calidad y procesos de suprareciclaje como alternativa sostenible, articulando precisión técnica y conciencia ambiental en la confección textil.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Modelado, trazo y corte',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Extendido de la tela',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tizado, trazo y señalización en el material textil',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Proceso de corte',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Técnicas y procesos para arreglo de prendas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Armado y desarmado de la prenda',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Enfoque técnico del proceso de modificación',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Acabados y terminados de la prenda',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Procesos de acabado',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Preparación y detalles en las piezas',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Costuras manuales',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Revisión y procesos de calidad en una prenda',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Control de calidad en industrial textil y confección',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Gestión ambiental y la moda sostenible',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Residuos textiles',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo:
              'Suprareciclaje: transformación creativa y sostenible de prendas',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF3_84220328_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Técnicas y procesos para arreglo de prendas',
      referencia:
        'McCauley, D. (2019). Full or Small Bust Adjustments Tutorial. Central Iowa Chapter of the American Sewing Guild.',
      tipo: 'PDF',
      link:
        'https://www.centraliowaasg.org/uploads/7/4/3/4/74341191/bust_pattern_adjustments.pdf?utm_source=chatgpt.com ',
    },
    {
      tema: 'Gestión ambiental y la moda sostenible',
      referencia:
        'Cruz Roldán, G.L (2021). <i>Upcycling</i> en las colecciones de Moda Sostenible contemporáneas de América Latina. [Trabajo de grado, UPC].',
      tipo: 'PDF',
      link:
        'https://repositorioacademico.upc.edu.pe/bitstream/handle/10757/658097/Cruz_RG.pdf?isAllowed=y&sequence=3&utm_source=chatgpt.com ',
    },
  ],
  glosario: [
    {
      termino: 'Forro',
      significado:
        'tela que está integrada a una prenda, comparten patrón y molde, pero estas difieren en largo, como por ejemplo, en chaquetas.',
    },
    {
      termino: 'Bies',
      significado:
        'término sinónimo de sesgo, quiere decir que fue cortado a un ángulo de 45°.',
    },
    {
      termino: 'Entretela',
      significado:
        'base que estabiliza una pieza que servirá de refuerzo en vistas o partes que necesiten dar soporte a una estructura de la prenda.',
    },
    {
      termino: 'Guata',
      significado:
        'grupo de filamentos que sirven para acolchar y suele ser usado en hombreras.',
    },
    {
      termino: 'Fibra textil',
      significado:
        'grupo de filamentos que pueden ser de origen natural, sintéticos o artificiales.',
    },
    {
      termino: 'Hilvanar',
      significado:
        'cosido manual empleado en diversas técnicas de tejido de acuerdo con el proceso empleado en confección de prendas.',
    },
    {
      termino: 'Alfileres',
      significado:
        'elementos utilizados para sostener prendas en el proceso de elaboración de prendas.',
    },
    {
      termino: 'Goma o caucho',
      significado:
        'elemento elástico utilizado para la elaboración de cinturillas o en partes que implique el recogido para que sea adaptable al cuerpo.',
    },
    {
      termino: 'Crin',
      significado:
        'insumo para la confección de prendas y accesorios, en algunos casos ayudan a dar soporte a las prendas, esto siempre dependerá de su uso.',
    },
    {
      termino: 'Pedal',
      significado:
        'elemento que forma parte de las máquinas de coser prendas, su función es permitir el funcionamiento de la máquina con la ayuda del motor.',
    },
    {
      termino: 'Ergonomía',
      significado:
        'disciplina que estudia las interacciones del ser humano con su entorno, reúne información que permite medir desempeño y optimización, buscando el bienestar de las personas.',
    },
    {
      termino: 'Ajuste',
      significado:
        'modificación aplicada a una prenda para adecuarla a las medidas, forma o comodidad del cuerpo de quien la usa.',
    },
    {
      termino: 'Reducción',
      significado:
        'proceso de disminución del volumen o talla de una prenda mediante ajustes en costuras, pinzas o cortes.',
    },
    {
      termino: 'Ampliación',
      significado:
        'intervención que permite aumentar dimensiones en zonas específicas de una prenda, añadiendo tela o soltando márgenes.',
    },
  ],
  referencias: [
    {
      referencia:
        'Delego, D. (1974). Elegantísima: La enciclopedia práctica de la moda (Tomo 1: Temas básicos de la costura). Editorial Mo­de­la­ndo, S. R. L., Buenos Aires.',
      link: '',
    },
    {
      referencia:
        'Jeffreys, C. (2005). Manual completo de costura (4. ª ed.). Editorial El Drac, S. L.',
      link: '',
    },
    {
      referencia:
        'Gilewska, T. (2009). Arreglos y modificaciones de prendas de vestir. Editorial El Drac.',
      link: '',
    },
    {
      referencia:
        'Gómez, M. L. (2020). Moda sostenible: Transforma y personaliza tu ropa. Editorial Gustavo Gili. Instituto Nacional Tecnológico. (2011). Manual de unión y acabado de prendas de vestir',
      link: 'https://es.scribd.com/document/412659427',
    },
    {
      referencia:
        'Knight, L. (2010). Secretos de la buena modista: guía completa sobre técnicas de costura de moda. Océano Ambar.',
      link: '',
    },
    {
      referencia:
        'Organización Internacional de Normalización (ISO). (2015). Sistemas de gestión de la calidad – Fundamentos y vocabulario (ISO 9000:2015). ',
      link: '',
    },
    {
      referencia:
        'Pacheco, V.H. (2023). Economía circular y el arreglo y modificación de ropa. LinkedIn. ',
      link:
        'https://es.linkedin.com/pulse/econom%C3%ADa-circular-y-el-arreglo-modificaci%C3%B3n-de-ropa-pacheco ',
    },
    {
      referencia:
        'Recovo. (2024). El creciente problema de los residuos textiles.',
      link:
        'https://recovo.co/es/blog/article/como-las-fibras-recicladas-estan-transformando-la-industria-textil',
    },
    {
      referencia:
        'SENA. (2021). Guía para el aprendizaje: Procesos de transformación y ensamble de prendas de vestir. Servicio Nacional de Aprendizaje.',
      link: '',
    },
    {
      referencia:
        'Textile Exchange. (2022). Preferred Fiber & Materials Market Report.',
      link:
        'https://textileexchange.org/app/uploads/2022/10/Textile-Exchange_PFMR_2022.pdf ',
    },
    {
      referencia: 'Vitral Textil. (2024). Informe de tendencias 2025.',
      link: 'https://vitraltextil.com/2025/01/07/informe-tendencias-2024-2-3/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Angélica Castro Salazar ',
          cargo: 'Experta temática',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Sandra Paola Morales Páez ',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jenny Rocio Reyes Acevedo',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Leonardo Castellanos Rodriguez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
