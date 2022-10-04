<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Fuentes de datos

    figure(data-aos="fade-right")
      img(src="@/assets/curso/temas/tema3/tema3-img-01.svg", alt="Texto que describa la imagen")

    .row.justify-content-around.aling-items-center.mb-5
      .col-lg-10.col-sm-10.cont_bg-2(data-aos="fade-right")
        .crd.clr-lightBlue.p-4.mb-5
          p Se denomina ‘fuente de dato’ a cualquier elemento que pueda suministrar datos e información, sin importar su formato o lugar de almacenamiento. Las fuentes de datos se originan a partir de las diferentes interacciones que los sistemas de información generan diariamente, por ejemplo, un archivo de Excel, empleado por una persona o compañía para disponer la información de la nómina de sus empleados, guarda, a su vez, información de nombres, contacto, correo, u otros datos diligenciados, y puede considerase una fuente de información.

        p.mb-5 Existen diferentes fuentes de información como los archivos de intercambio de información, utilizados a través de la internet para almacenar información temporal, que son recopilados por sistemas de tratamiento de información como bases de datos, entre otros.
        p #[b Conozca los diferentes tipos de fuentes de datos con sus respectivas características.]

    .row.justify-content-center
        .col-lg-11.mb-5
          ImagenInfograficaB.color-primario
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema3/tema3-img-02.svg', alt='Texto que describa la imagen')

            div(x="15%" y="78%" tooltip="Ver más" numero="+")
              .tarjeta.white-card.p-4
                .row
                  .col-lg-12
                    .h4 XLS
                    p.mb-3 Los archivos xls son una extensión de archivos utilizados en las hojas de cálculo, como las empleadas en Microsoft Excel, tienen una estructura conformada por filas y columnas que permiten registrar y manipular información de forma organizada. Teniendo en cuenta el esquema de filas y columnas, este tipo de archivos permite realizar procesamiento y aplicación de fórmulas para calcular valores de datos, entre otras operaciones, son fáciles de manejar y tienen una alta compatibilidad y conexión con sistemas de información en general.
                  

            div(x="41%" y="78%" tooltip="Ver más" numero="+")
              .tarjeta.white-card.p-4
                .row
                  .col-lg-7
                    .h4 TXT
                    p.mb-3  Los archivos con extensión TXT son archivos que se consideran planos debido a que no contienen ningún tipo de formato específico para el almacenamiento de la información. A pesar de esto, son utilizados para el almacenamiento de información porque ocupan muy poco espacio de almacenamiento en disco, además, otra de sus ventajas, es la compatibilidad que tienen con cualquier sistema operativo, es decir, con los editores de texto que tienen los principales sistemas operativos, por lo que pueden ser editados prácticamente en cualquier sistema.
                    

            div(x="66%" y="78%" tooltip="Ver más" numero="+")
              .tarjeta.white-card.p-4
                .row
                  .col-lg-12
                    .h4 XML
                    p.mb-3  Significa Extensible Markup Language. Es un lenguaje de marcado similar a HTML, pero es una especificación de W3C como lenguaje de marcado de propósito general. A diferencia de otros lenguajes de marcado, XML no está predefinido, por lo que al trabajarlo, se debe definir sus propias etiquetas. Su principal objetivo es compartir datos a través de diferentes sistemas como Internet.


            div(x="89%" y="78%" tooltip="Ver más" numero="+")
              .tarjeta.white-card.p-4
                .row
                  .col-lg-12
                    .h4 JSON
                    p.mb-3  JavaScript Object Notation (JSON) es un formato basado en texto estándar para representar datos estructurados en la sintaxis de objetos de JavaScript. Es comúnmente utilizado para transmitir datos en aplicaciones web, por ejemplo, para enviar algunos datos desde el servidor al cliente, así estos datos pueden ser mostrados en páginas web o viceversa.     
        
        p Ahora, se presentan las principales características de cada uno de estos tipos de fuentes.

        .titulo-sexto.color-acento-botones.mt-5
          h5 Características de los tipos de fuentes

        SlyderF.mb-5(columnas="col-12 col-lg-6 col-xl-6 col-xs-12")
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema3/tema3-img-03.svg' alt='AvatarTop')
            .tarjeta.color-secundario.p-4
              h2.mt-5 XML
              ul.lista-ul
                li
                  i.fa.fa-caret-right
                  | Es un lenguaje de etiquetado.
                li 
                  i.fa.fa-caret-right
                  | Con él se crean estructuras propias de información.
                li 
                  i.fa.fa-caret-right
                  | Es un estándar que permite intercambio de información entre varias plataformas.
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema3/tema3-img-04.svg' alt='AvatarTop')
            .tarjeta.color-secundario.p-4               
              h2.mt-5 JSON
              ul.lista-ul
                li
                  i.fa.fa-caret-right
                  | Formato ligero de intercambio de datos.
                li
                  i.fa.fa-caret-right
                  | De fácil lectura y escritura para los usuarios.
                li
                  i.fa.fa-caret-right
                  | Fácilmente analizado y generados por parte de las máquinas.
                li
                  i.fa.fa-caret-right
                  | Formato de texto completamente independiente del lenguaje.
                li
                  i.fa.fa-caret-right
                  | Familiar para los programadores de lenguajes de la familia C, incluidos C, C++, C#, Java™, JavaScript, Perl, Python y mucho otros.     
            
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema3/tema3-img-05.svg' alt='AvatarTop')
            .tarjeta.color-secundario.p-4
              h2.mt-5 XLS
              ul.lista-ul
                li
                  i.fa.fa-caret-right
                  | Sustituido por un formato de archivo XML de Open Office (XML Spreadsheet o XMLSS).
                li
                  i.fa.fa-caret-right
                  | Empleado habitualmente por aplicaciones de terceros, como navegadores, para evitar la implementación del uso de formatos de archivo binario.
                li
                  i.fa.fa-caret-right
                  | Contiene información de hojas de cálculo e incluye gráficos, cálculos, tablas y macros.
                li
                  i.fa.fa-caret-right
                  | Esta extensión de archivo también se utiliza en el lenguaje de programación Visual Basic. Excel forma parte de Microsoft Office y está disponible para Windows y Mac OS.
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema3/tema3-img-06.svg' alt='AvatarTop')
            .tarjeta.color-secundario.p-4                
              h2.mt-5 TXT
              ul.lista-ul
                li
                  i.fa.fa-caret-right
                  | Es universal debido a que cualquier procesador de texto puede leerlo.
                li
                  i.fa.fa-caret-right
                  | Puede utilizar Unicode para facilitar su lectura a usuarios de distintos idiomas.
                li
                  i.fa.fa-caret-right
                  | Exclusivamente en código ASCII pueden intercambiarse y leerse en Unix, Mac y Windows.          
          
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p.mb-4 Las fuentes de datos son una parte importante del proceso de manejo de la información, proveen el insumo necesario para realizar los procesos de adquisición de la información. Como es conocido, las empresas producen muchos tipos de información en diferentes presentaciones, a eso se le puede llamar fuente de información. Ahora bien, es necesario tener en cuenta que la información tiene diferentes maneras de ser procesada, por ejemplo, si la fuente de información es un archivo .txt, un archivo plano, la información carecería de algún tipo de tabulación, es decir, se deben utilizar mecanismos para garantizar su lectura de manera correcta y evitar tanto la pérdida de información como una lectura incorrecta de ella. En el caso de adquirir información de un archivo .xls, que está distribuido a través de filas y columnas, se debe establecer un método de lectura que garantice que se sustraiga la información de manera correcta, previniendo pérdidas o problemas en el proceso de recepción y, de igual forma, se aplicaría a los otros tipos de fuentes de información recopiladas en los diferentes tipos de archivos expuestos anteriormente.
      .col-lg-5
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-12
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/tema3/tema3-img-07.svg")

    .row
      .col-lg-10
        p.mb-5 Las fuentes de información son documentos de distintos tipos y orígenes que proveen datos y recursos sobre un tema o área determinada, según su nivel de información pueden ser clasificadas como:
        
    .bg--img_03
      .row.justify-content-center.mb-4
        .col-lg-6
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
            .row(titulo="Fuentes primarias")
              .col-12
                p.mb-0 Poseen información nueva que no ha sido modificada. 

            .row(titulo="Fuentes secundarias")
              .col-12
                p.mb-0 Contienen información que ha sufrido algún tipo de modificación.

            .row(titulo="Fuentes terciarias")
              .col-12
                p.mb-0 Comprenden solo una porción de información, la cual siempre debe ser consultada para obtener información de las fuentes anteriores. 
        .col-lg-6
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema3/tema3-img-08.svg", alt="alt").img400.m-auto

      .crd.clr-paleYellow.p-4
        .row.justify-content-center.align-items-center
          .col-lg-5
            .row.justify-content-center.align-items-center.mb-4
              .col-lg-12
                figure(data-aos="zoom-in")
                  img(src="@/assets/curso/temas/tema3/tema3-img-09.svg")
          .col-lg-7
            p.mb-4 Las fuentes de datos son una parte importante del proceso de manejo de la información, proveen el insumo necesario para realizar los procesos de adquisición de la información. Como es conocido, las empresas producen muchos tipos de información en diferentes presentaciones, a eso se le puede llamar fuente de información. Ahora bien, es necesario tener en cuenta que la información tiene diferentes maneras de ser procesada, por ejemplo, si la fuente de información es un archivo .txt, un archivo plano, la información carecería de algún tipo de tabulación, es decir, se deben utilizar mecanismos para garantizar su lectura de manera correcta y evitar tanto la pérdida de información como una lectura incorrecta de ella. En el caso de adquirir información de un archivo .xls, que está distribuido a través de filas y columnas, se debe establecer un método de lectura que garantice que se sustraiga la información de manera correcta, previniendo pérdidas o problemas en el proceso de recepción y, de igual forma, se aplicaría a los otros tipos de fuentes de información recopiladas en los diferentes tipos de archivos expuestos anteriormente.
      




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
