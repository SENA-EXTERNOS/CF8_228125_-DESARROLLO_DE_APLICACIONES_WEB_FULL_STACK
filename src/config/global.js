export default {
  global: {
    componenteFormativo: 'Diseño y modelo de datos',
    descripcionCurso:
      'Este componente formativo está diseñado para comprender los principios básicos de las bases de datos NoSQL, las bases relacionales y las diferentes fuentes de datos y controles de acceso.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Bases de datos NoSQL',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Bases de datos relacionales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Fuentes de datos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Control de acceso a datos',
        desarrolloContenidos: true,
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
      tema: 'Bases de datos NoSQL',
      referencia:
        'FaztCode. (2021). <i>Mongodb para Visual Studio Code Extensión</i> (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=fZgJHJO81dw',
    },
    {
      tema: 'Bases de datos relacionales',
      referencia:
        'Coronado, D., Rodríguez, R., Tineo, L. & Carrasquel Oropeza, S. (2018). Gestión de Datos Difusos: Atributos Tipo 2 y Tipo 3 en bases de datos relacionales. <i>Publicaciones En Ciencias Y Tecnología, 12</i>(2), p. 83-95.',
      tipo: 'Artículo',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_doaj_primary_oai_doaj_org_article_b4db22235526430295652b34b49ad6dd ',
    },
  ],
  glosario: [
    {
      termino: 'Bases de datos relacionales',
      significado:
        'Es un modelo de datos en el que los datos e información se encuentran relacionados por medio de llaves que permiten consultar la información mediante una serie de secuencias de comandos llamada instrucciones SQL.',
    },
    {
      termino: 'Confidencialidad',
      significado:
        'Esta característica se relaciona con las credenciales de acceso, esto quiere decir que la información debe tener un dueño o responsable para su manipulación y uso. Las redes sociales o correo electrónico son ejemplo de ello, ambos tienen mecanismos de acceso basados en usuario y contraseña.',
    },
    {
      termino: 'Control de acceso',
      significado:
        'Son reglas y políticas que se implementan para realizar un proceso de administración adecuado de los datos y la información almacenada en los sistemas de información. Al tiempo, se deben crear los mecanismos para el acceso de los datos.',
    },
    {
      termino: 'Disponibilidad',
      significado:
        'Es una característica de los sistemas de almacenamiento al establecer los mecanismos y tiempos en los cuales el sistema de información responderá a los usuarios que requieren acceso a la información.',
    },
    {
      termino: 'Fuentes de datos',
      significado:
        'Se conoce como fuente de datos a cualquier elemento que pueda suministrar datos e información sin importar su formato o lugar de almacenamiento. Las fuentes de datos se originan a partir de las diferentes interacciones que tienen a diario los sistemas de información.',
    },
    {
      termino: 'Gestores',
      significado:
        'O DBA, son sistemas de administración de bases de datos que se destacan por su facilidad de uso y por la integración que le ofrece al usuario y/o administradores de bases de datos.',
    },
    {
      termino: 'Integridad',
      significado:
        'Es la capacidad que tiene un sistema de información para realizar las operaciones procedimentales de manera adecuada, es decir que los procesos que han sido programados dentro del sistema se realizan de manera adecuada y arrojan los resultados esperados.',
    },
    {
      termino: 'Modelo conceptual',
      significado:
        'El modelo conceptual de una base de datos es la manera de interpretar las necesidades que se tienen en un modelo de almacenamiento a una base de datos, permitiendo comprender, inicialmente, cómo estará conectado el negocio.',
    },
    {
      termino: 'Modelo de datos',
      significado:
        'El modelo de datos está determinado por la forma en la cual se organizan los datos y los campos de la base de datos.',
    },
    {
      termino: 'Modelo físico',
      significado:
        'El modelo físico constituye la etapa de implementación de la base de datos en un sistema de almacenamiento, en un servidor de bases de datos, en el que se codifica de acuerdo al modelo lógico, creando de manera funcional todo el sistema de almacenamiento que sirve de soporte a la aplicación informática.',
    },
    {
      termino: 'Modelo lógico',
      significado:
        'El modelo lógico es una etapa del desarrollo de una base de datos, aquí se disponen todas las entidades, junto a sus respectivas relaciones, y permite visualizar la manera en que los datos se ven reflejados con sus tipos de datos asociados.',
    },
    {
      termino: 'NoSQL',
      significado:
        'Nace como una alternativa de almacenamiento de información, posee una estructura distinta a la convencional, comúnmente denominada bases de datos relacional.',
    },
  ],
  referencias: [
    {
      referencia:
        'Graterol, Y. (2021). <i>MongoDB en español, tomo I: El principio.</i> Blog Facialix',
      link:
        'https://blog.facialix.com/wp-content/uploads/2021/11/MongoDB-El-principio.pdf',
    },
    {
      referencia:
        'Ley 1273 de 2009. Por medio de la cual se modifica el Código Penal, se crea un nuevo bien jurídico tutelado – denominado “de la protección de la información y de los datos” – y se preservan integralmente los sistemas que utilicen las tecnologías de la información y las comunicaciones, entre otras disposiciones. Enero de 2009. DO 47.223.',
      link: '',
    },
    {
      referencia:
        'Oracle. (2010). <i>Mecanismos de control de acceso.</i> Oracle. ',
      link: 'https://docs.oracle.com/cd/E19620-01/805-7644/x-5m6d6/index.html',
    },
  ],
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
