<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Bases de datos NoSQL

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7
        .crd.clr-paleBlue.p-4
          p.mb-0 Las bases de datos NoSQL nacen como una alternativa de almacenamiento de información con una estructura distinta a la convencional, comúnmente conocida como ‘base de datos relacional’, y poseen un importante segmento del mercado, abarcando gran parte de los procesos de negocio que manejan las empresas hoy día.

        p Los procesos, por lo general, tienden a evolucionar de acuerdo a como se desarrollan los procesos de negocio dentro de las organizaciones, esto quiere decir que las bases de datos NoSQL, de alguna manera, se relacionan en gran medida con la evolución de los procesos de almacenamiento de información, lo cual implica, a su vez, que en muchos de los procesos que hoy se manejan, las bases de datos NoSQL se implementan no solo por compañías o empresas específicas, también por diferentes actores del mundo de la computación, incluyendo empresas, particulares o comunidad en general, todos esperando generar soluciones de almacenamiento a sus proyectos.                  
      .col-lg-5
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-12
            figure(data-aos="fade-left")
              img(src="@/assets/curso/temas/tema1/tema1-img-01.svg", alt="Texto que describa la imagen")
    
    p Las bases de datos NoSQL tienen muchas ventajas, aunque también algunas desventajas, por ejemplo:

    .row.justify-content-around.aling-items-center
      .col-lg-10.mb-lg-0.mt-lg-3
        .tarjeta--container.row
          .col-md.tarjeta.color-secundario.p-5
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/temas/tema1/tema1-img-02.svg', alt='Texto que describa la imagen')
                
            h2.text-center Ventaja
            p Su rendimiento, en comparación con las bases de datos tradicionales, es superior y utiliza menos recursos de cómputo, evitan requerir una gran infraestructura de cómputo para llevar a cabo su instalación o el procesamiento de información.
          .col-md.tarjeta.color-primario.p-5
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/temas/tema1/tema1-img-03.svg', alt='Texto que describa la imagen')
            
            h2.text-center Desventaja
            p Debido a que estas bases de datos son utilizadas para el manejo de grandes volúmenes de información, en algunos casos podría haber un margen de error al realizar el procesamiento de la información, diferenciándose de las bases de datos convencionales que cuentan con una mayor estabilidad y fiabilidad al momento de procesar información.
        
    .row.mt-5
      .col-lg-5
      p Para ampliar la información, se le invita a ver el siguiente video:

      figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/M-Iw1awJ1NU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .row.mt-5
      h3 Modelo de datos

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5
        figure(data-aos="fade-right")
          img(src="@/assets/curso/temas/tema1/tema1-img-04.svg")
      .col-lg-7
        .crd.clr-paleBlue.p-4
          p.mb-0 El modelo de datos, está determinado por la forma en la cual se organizan los datos y los campos de la base misma. Es importante tener en cuenta que las bases de datos NoSQL utilizan un nivel de archivo para organizar la información que contienen, es decir, se utilizan como si fuesen archivos planos que contienen una estructura sencilla pero organizada, en la que se ubica toda la información que debe contener y generar al momento de realizar el registro de los datos. 

        p Al referirse a los tan populares archivos JSON o XML, los cuales contienen una estructura muy particular para la organización de la información implementada en las bases NoSQL, se evidencia la ventaja de almacenar información organizada y con poco espacio de almacenamiento. A continuación, se explica el almacenamiento de este tipo de modelo de datos:

      .titulo-sexto.color-acento-botones.mt-5
        h5 Figura 1
        p <em>Modelo de archivo JSONa</em>

      .col-lg-12.mt-3
            figure
              img(src='@/assets/curso/temas/tema1/tema1-img-05.svg', alt='Texto que describa la imagen')
      .row.justify-content-around.aling-items-center
        .col-lg-11.mb-lg-0.mt-lg-3
          .row.mt-5
            .col-lg-12
              .crd.clr-paleRose.p-4
                p.mb-0 Como se observa en la imagen, el modelo de datos de una base de datos NoSQL se refiere a la equivalencia o relación que puedan estar compuestas por una o más relaciones de datos, estos archivos se encuentran estrechamente relacionados con la información complementaria de cada uno de ellos, es decir, la información se va acumulando hasta que forma lo que conocemos como base de datos NoSQL.
              p.mt-2 Dentro de los aspectos a destacar en este proceso, es que la información no se encuentra estrechamente relacionada o restringida por algún tipo de integridad referencial, como sí suele suceder con las bases de datos convencionales, y al no existir dicha restricción, los datos fluyen de manera directa permitiendo que el procesamiento se haga al nivel de archivos planos, mejorando los tiempos de respuesta y, a su vez, procesando mayores cantidades de datos con un menor esfuerzo de cómputo.
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-12
            figure(data-aos="fade-right")
              img(src="@/assets/curso/temas/tema1/tema1-img-06.svg")
      .col-lg-7
        .crd.clr-paleBlue.p-4
          p Los modelos de datos son sumamente necesarios en los sistemas de información, permiten visualizar la manera en la que la información y los datos serán almacenados y procesados de acuerdo a las solicitudes del sistema de información. Es importante tener en cuenta que un sistema de información requiere de un sistema de almacenamiento eficiente y estable, no solo para almacenar la información, también, proporciona las bases necesarias que permite a los usuarios recibir los datos de manera íntegra, segura y en tiempos razonables; claro está, de acuerdo con la capacidad de respuesta de los sistemas implementados.

        p.mt-4 Para conocer el proceso de codificación de una base de datos en MongoDB, se invita a ver el video Mongodb para Visual Studio Code #[b Extensión], encontrado en el material complementario.
    
    .row.mt-5
      h3 Gestores

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .row.justify-content-up.align-items-center.mb-4
          .col-lg-9
            .cajon.color-acento-contenido.p-4
              p Existen diversos gestores de bases de datos NoSQL, algunos de ellos destacan por su facilidad de uso y por la integración que ofrecen al usuario o a los administradores de bases de datos (DBA).
          .col-lg-3
            figure(data-aos="fade-left")
              img(src="@/assets/curso/temas/tema1/tema1-img-07.png").tema1-decorativa-01
            
    img(src="@/assets/curso/temas/tema1/tema1-img-decorativa-01.svg").tema1-decorativa-02

    p.mt-5 #[b Algunos de estos gestores, son:]

    .tarjeta.color--secundario.p-8.p-md-5.mb-5
      .row.justify-content-center.mb-5
        .col-xl-6.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema1/tema1-img-08.svg", alt="alt")
            .crd_hover_txt--body
              h4.font-size-tarjeta-avatar-h.mb-3 MongoDB. 
              p.font-size-tarjeta-avatar-p.mb-0 Es un gestor de bases de datos que trabaja bajo la filosofía NoSQL, su proceso de manejo de la información es a nivel de archivos, MongoDB arma la secuencia de información que, posteriormente, puede ser relacionada mediante diferentes archivos planos. Adicional a esto, Mongo es una base de datos de código libre, es decir, puede ser modificada de acuerdo a las necesidades del usuario o de la organización que la implemente, su manejo interior se hace mediante archivos JSON que guardan las estructuras de la información para luego ser procesada y consultada.

        .col-xl-6.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema1/tema1-img-09.svg", alt="alt")
            .crd_hover_txt--body
              h4.font-size-tarjeta-avatar-h.mb-3 Cassandra.
              p.font-size-tarjeta-avatar-p.mb-0 Es un gestor de bases de datos orientado a la filosofía NoSQL, permite trabajar con grandes volúmenes de información. Su código es abierto, permitiendo cualquier modificación de acuerdo a las necesidades tecnológicas de la organización o de quien requiera utilizar la herramienta con propósitos particulares o empresariales. Se encuentra escrito en lenguaje Java, posibilitando una amplia capacidad de adaptación en diferentes sistemas operativos, de manera distribuida, con balanceo de carga.

    .row.justify-content-center.align-items-center.mb-4.tema1-bgr1.p-4
      .col-lg-8
        p Los gestores de bases de datos permiten realizar las funciones de administración y mantenimiento de los datos de manera fácil y sencilla, esto ayuda a los administradores de estos sistemas a realizar labores de mantenimiento y gestión de manera rápida y eficiente. No obstante, en algunas ocasiones este proceso se suele llevar a cabo a través de consolas de administración, dilatando el proceso al ser una labor más compleja, especialmente con respecto a las copias de seguridad, ya que normalmente, en estos sistemas, es posible ejecutar las copias de manera automática, sin requerir una persona que se dedique a realizar este proceso a diario en consola, cometiendo así menos errores al momento de manipular la información. Otros procesos pueden ser actualización de datos, inserción de datos nuevos o eliminación de datos que ya no corresponden o no se necesitan en los procesos de negocio de la organización. Ahora bien, los gestores de bases de datos tienen muchas ventajas, una de ellas es la forma de conectarse a diferentes bases de datos, independiente del motor de las bases, es decir, se puede administrar varias bases de datos al tiempo con múltiples conexiones, significando una gran ventaja desde el punto de vista de licenciamiento y la eficiencia.
      .col-lg-4
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema1/tema1-img-10.png", alt="Texto que describa la imagen")
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
