<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Bases de datos relacionales

    .row.justify-content-around.aling-items-center.mb-5
      .col-lg-12.mb-lg-0
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="flip-up")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/tema2-img-01.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
           p.mb-0 Las bases de datos relacionales son un modelo de datos en el que los datos y la información, se encuentran relacionados por medio de llaves, estas permiten que la información pueda ser consultada mediante una serie de secuencia de comandos llamadas instrucciones SQL. Hay 4 comandos básicos que permiten controlar y manipular los procesos de la base de datos.

    p La siguiente imagen presenta los comandos DML para la gestión de la información de la base de datos. 

    .row.justify-content-center
      .col-lg-11
        ImagenInfograficaB.color-primario
          template(v-slot:imagen)
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema2/tema2-img-02.svg', alt='Texto que describa la imagen')

          div(x="24%" y="101%" tooltip="Ver más" numero="+")
            .tarjeta.white-card.p-4
              .row
                .col-lg-12
                  .h5.mb-3 Insert
                  p Esta instrucción permite realizar el registro de nueva información dentro de la base de datos, es necesario aplicar las reglas de llaves, por ejemplo, si existe un registro que se repite,  automáticamente se procederá a rechazar el ingreso del nuevo dato, indicando que ese dato ya se encuentra registrado en la base de datos para evitar problemas de ambigüedad de datos o duplicidad.#[b insert into tbl_clientes(PKId, Nombre, Contacto, Fecha_Nac, Direccion, Correo, FKCodigo_tbl_Sexo)  values (‘123’,’Dulfran’,’3126954069’,’1983-04-20’,’Barranquilla’,’dulfranelinge@gmail.com’,1)]

          div(x="42%" y="101%" tooltip="Ver más" numero="+")
            .tarjeta.white-card.p-4
              .row
                .col-lg-12
                  .h5.mb-3 Update
                  p.mb-3 Esta instrucción permite realizar la actualización de un dato previamente registrado dentro de la base de datos, es importante destacar que para realizar la actualización, se debe cumplir con la regla de solo actualizar los campos que coincidan con el criterio de actualización, es decir, solo se deben actualizar los datos e información que coincidan con los datos relacionados.
                  p.mb-3 #[b update tbl_clientes set Nombre = 'Pepito' where PKId = '123']
                  p El código realiza la actualización del nombre de la persona registrada, teniendo en cuenta, como restricción, la identificación de la persona, por lo cual solo se actualizará la información de este cliente en particular, no la de los demás clientes.

          div(x="59%" y="101%" tooltip="Ver más" numero="+")
            .tarjeta.white-card.p-4
              .row
                .col-lg-12
                  .h5.mb-3 Delete
                  p.mb-3 Esta instrucción permite eliminar un registro que se encuentre registrado previamente dentro de la base de datos, se utiliza cuando el registro no se requiera dentro de los procesos de negocio y su información debe desaparecer del sistema de almacenamiento.
                  p.mb-3 #[b delete from tbl_clientes where PKId = ‘123’]
                  p La instrucción procede a eliminar el registro del cliente, pero, como condición a cumplir, se elimina solo el cliente con la identificación registrada, sin afectar a los demás registros de la base de datos.

          div(x="76%" y="101%" tooltip="Ver más" numero="+")
            .tarjeta.white-card.p-4
              .row
                .col-lg-12
                  .h5.mb-3 Select
                  p.mb-3 Esta instrucción permite efectuar búsquedas de información de acuerdo con lo requerido por el usuario, estas consultas pueden realizarse de forma general o específica, es decir, se pueden traer un conjunto de datos asociados al registro o el de un usuario en particular.
                  p.mb-3 #[b select * from tbl_clientes / select * from tbl_clientes where PKId = ‘123’]
                  p Se presentan, así, dos posibilidades. La primera permite traer los datos de todos los clientes registrados, la segunda, ejecuta un filtro y solo traerá la información del cliente que coincida con la condición dada, que el documento de identificación sea 123.
    
    .crd.clr-paleBlue.p-5.mt-5
      p Se ha abordado cada uno de los comandos que permiten manipular una base de datos relacional. A continuación se estudiará cuáles son los tipos de modelos que se manejan en este tipo de bases de datos.
    
    separador

    .titulo-segundo.color-acento-botones.mt-5
      h2 Modelo conceptual
    
    figure(data-aos="zoom-in-down")
      img(src="@/assets/curso/temas/tema2/tema2-img-03.svg", alt="Texto que describa la imagen")

    .row.justify-content-around.aling-items-center.mb-5
      .col-lg-10.col-sm-10.cont_bg-2(data-aos="zoom-in-down")
        .crd.clr-lightBlue.p-4
          p El modelo conceptual de la base de datos es una manera de interpretar las necesidades que se tienen al implementar un modelo de almacenamiento en una base de datos, y permite comprender, en principio, cómo estará conectado el negocio con las necesidades de almacenamiento de información.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7
        p.mb-4 Se debe considerar que este modelo conceptual inicia con la recolección de requerimientos, a través de los cuales se tendrá como meta adquirir todas las entidades y conexiones de la información, dirigida por los procesos de negocio de la aplicación a desarrollar, considerando el proceso real a simular en el sistema a desarrollar, para así tomar los datos involucrados y se plasman en un diseño que pueda ser comprendido para el desarrollador de la aplicación. De esta forma, no queda información o datos por fuera de las diferentes entidades que conforman la base de datos a desarrollar.
        p.mb-4 Uno de los puntos importantes que tiene este tipo de modelo es que permite visualizar de manera sencilla cada entidad, sus conexiones y los datos que involucra.
        p #[b La figura a continuación presenta un ejemplo de un modelo conceptual de una base de datos, teniendo en cuenta los siguientes pasos para su elaboración:]
      .col-lg-5
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-12
            figure(data-aos="fade-right")
              img(src="@/assets/curso/temas/tema2/tema2-img-04.svg")

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-12
            figure(data-aos="fade-right")
              img(src="@/assets/curso/temas/tema2/tema2-img-05.svg")    
      .col-lg-7
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Identificar las entidades.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Identificar las relaciones.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Identificar los atributos y asociarlos a entidades y relaciones.
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Determinar los dominios de los atributos.
          li 
            .lista-ol--cuadro__vineta
              span 5
            | Determinar los identificadores. 

      .titulo-sexto.color-acento-botones.mt-5
        h5 Figura 2.
         span Ejemplo Modelo conceptual
            
      .col-lg-10.mt-5.mb-5
        figure
          img(src='@/assets/curso/temas/tema2/tema2-img-06.svg', alt='Texto que describa la imagen')         

      .col-lg-10.mt-5.mb-5
        .cajon.color-acento-botones.p-4
          p Como se puede observar en este diagrama, existe una relación entre dos entidades, una llamada clientes y la otra llamada sexo. En este caso particular, se evidencia que un sexo (hombre – mujer) está asociado a varios clientes, es decir, varios clientes pueden estar asociados al sexo ‘hombre’ y otros al sexo ‘mujer’, de esta forma,  se interpreta la asociación de la información en el sistema informático desde la comprensión literal del proceso real, al proceso del sistema de información a desarrollar.

    .titulo-segundo.color-acento-botones.mt-5
      h2 Modelo lógico

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-12
            figure(data-aos="fade-right")
              img(src="@/assets/curso/temas/tema2/tema2-img-07.svg")    
      .col-lg-7
        p.mb-4 El modelo lógico es una etapa del desarrollo de una base de datos, donde se colocan todas las entidades con sus respectivas relaciones,  permite visualizar la manera como los datos se ven reflejados con sus tipos de datos asociados, en otras palabras, ayuda a visualizar el esquema de datos de manera más amplia, siendo el punto inicial para comprender todos los procesos de conexión de los datos dentro del sistema a desarrollar.
        p.mb-4 Es importante tener en cuenta que este modelo es el punto de partida para la construcción de las bases de datos en el sistema de implementación a utilizar, proporcionando así, la referencia a cada una de las entidades y su respectivo tipo de dato, correspondiente a su longitud, si aplica. Este campo es una llave primaria, foránea, que delimita las restricciones que se aplicarían en tal caso.
        p #[b La siguiente imagen ilustra el diagrama lógico de la secuencia del ejemplo señalado.]

      img(src="@/assets/curso/temas/tema2/tema2-img-decorativa-01.svg", alt="Texto que describa la imagen").tema2-decorativa-01

      .titulo-sexto.color-acento-botones.mt-5
        h5 Figura 3.
        span Ejemplo Modelo lógico 
            
      .col-lg-10.mt-5.mb-5
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema2/tema2-img-08.svg', alt='Texto que describa la imagen')         

      .cajon.color-acento-botones2.p-4
        p El modelo lógico anterior propone identificar cada uno de los tipos de datos que tienen las entidades en la base de datos, facilitando que el programador, o la persona encargada de realizar la codificación de la base de datos en un sistema de gestión de base de datos, cuente con la información precisa para realizar el proceso, porque al conocer los diferentes tipos de datos que se conectan con las llaves y la restricción que cada una de ellas tiene, el desarrollador puede construir el sistema de almacenamiento con los tipos de datos y conexiones que este requiera.
    
    separador

    .titulo-segundo.color-acento-botones.mt-5
      h2 Modelo físico

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3
        figure(data-aos="fade-right")
          img(src="@/assets/curso/temas/tema2/tema2-img-09.svg")
      .col-lg-9
        .crd.clr-paleBlue.p-4
          p.mb-0 El modelo físico constituye la etapa de implementación de la base de datos en un sistema de almacenamiento, esto es, un servidor de bases de datos en el que se codifica de acuerdo al modelo lógico y se crea de manera funcional todo el sistema de almacenamiento, sirviendo soporte a la aplicación informática, la cual requiere del servidor para poder procesar, almacenar y gestionar la información que la aplicación requiera.  

        p En este paso es primordial seleccionar el tipo de motor de base de datos que se utilizará para la implementación de la base de datos. En la actualidad, se pueden encontrar varios de ellos como Oracle, SQL Server, MYSQL Server, tres de los motores de bases de datos más utilizados a nivel mundial en lo que se refiere a servidores de bases de datos relacionales.

        p Seguidamente, podrá observar un ejemplo de la creación física de una base de datos y cómo quedaría implementada en un servidor de bases de datos real.

    .titulo-sexto.color-acento-botones.mt-5
      h5 Figura 4.
      span  Código implementación modelo físico

    .row.justify-content-center.mb-4
      .col-lg-6
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema2/tema2-img-10.svg")
      .col-lg-6
        .cajon.color-acento-botones3.p-4
            p La imagen anterior presenta la codificación utilizada para crear la base de datos en el servidor, facultando la aplicación a almacenar la información de manera correcta dentro del sistema de almacenamiento. Una vez realizada la codificación de la base de datos y su creación, se deben generar las diferentes conexiones de la información, tal como lo presenta la siguiente imagen.

      .titulo-sexto.color-acento-botones.mt-5
        h5 Figura 5.
        span  Diagrama entidad - relación en servidor de base de dato

      figure
        img(src="@/assets/curso/temas/tema2/tema2-img-11.svg")

    .row.justify-content-up.align-items-center.mt-5
      .col-lg-12
        .cajon.color-acento-contenido.p-4
          p Siguiendo la imagen, la base de datos está implementada en un servidor de bases de datos real, para este caso se ha utilizado el motor de bases de datos SQL Server para la codificación, pero aplicaría igual para cualquiera de los motores de bases de datos mencionados anteriormente.

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
