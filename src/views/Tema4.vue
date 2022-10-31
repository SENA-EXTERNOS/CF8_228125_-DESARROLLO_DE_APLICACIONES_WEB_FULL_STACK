<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Control de acceso a datos

    .row.justify-content-around.aling-items-center.mb-5
      .col-lg-12.mb-lg-0
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="flip-up")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/tema4-img-01.png')})`}"
          )
          .bloque-texto-g__texto.p-4
           p.mb-0 Los controles de acceso a datos son reglas y políticas que deben implementarse para realizar un proceso de administración adecuado de los datos e información almacenada en los sistemas de información, esto quiere decir que se debe no solo crear los mecanismos para el acceso de los datos, los cuales deben incluir las diferentes configuraciones y creación de usuarios, contraseñas, niveles de acceso y todo lo referente a las credenciales de acceso que se deben tener para acceder a la información almacenada, además, debemos tener en cuenta que la información es un activo importante para las organizaciones, y se debe velar porque esta información se encuentre almacenada de manera segura,  y que las personas que tengan acceso a ella estén autorizados para realizar las operaciones requeridas para ser usada en la organización.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7
        p.mb-4 En la vida diaria se aplican controles de acceso en los hogares, utilizando mecanismos de protección y control como protección al ingreso de personas no deseadas que tengan intenciones malintencionadas, por ejemplo, las puertas permiten que solo las personas con llave puedan ingresar a la vivienda.  Esta es una manera muy sencilla de comprender la teoría de ‘controles de acceso’, básicamente son todas las barreras, tanto físicas como lógicas, aplicadas a la protección de elementos valiosos para una empresa o sistema de información.  Los controles se usan para proteger la información contenida en ese sistema en particular y los mecanismos de acceso deben ser implementados de acuerdo con una política de seguridad de la información, contemplando el debido y correcto uso de la información. 
        .cajon.color-primario.p-4
          p La información es un bien importante que personas y empresas usan para sus relaciones y procesos de negocio, por tanto, se ha establecido un código de leyes que aseguran tal bien. La ley 1273 del 5 de enero del 2009 modificó el código penal colombiano al crear un bien denominado “Información”, y sus subsiguientes artículos estipulan sanciones para todo aquel que atenten contra dicho bien.  Dos de sus artículos más importantes son: 
    
      .col-lg-5
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-12
            figure(data-aos="fade-right")
              img(src="@/assets/curso/temas/tema4/tema4-img-02.png")


    TabsA.color-acento--botones
      .tarjeta.color-acento-botones--borde.p-4(titulo="Artículo 269A")
        h4 Acceso abusivo a un sistema informático:
        p Quien, sin autorización o fuera de lo acordado, acceda, en todo o en parte, a un sistema informático protegido o no con una medida de seguridad, o se mantenga dentro del mismo en contra de la voluntad de quien tenga el legítimo derecho a excluirlo, incurrirá en pena de prisión de cuarenta y ocho (48) a noventa y seis (96) meses y en multa de cien (100) a mil (1.000) salarios mínimos legales mensuales vigentes.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Artículo 269E")
        h4 Uso de #[i software] malicioso: 
        p Quien sin estar facultado para ello, produzca, trafique, adquiera, distribuya, venda, envíe, introduzca o extraiga del territorio nacional #[i software] malicioso u otros programas de computación de efectos dañinos, incurrirá en pena de prisión de cuarenta y ocho (48) a noventa y seis (96) meses y en multa de cien (100) a mil (1.000) salarios mínimos legales mensuales vigentes.
    
    .row.justify-content-center.align-items-center.mb-3.mt-4
      .col-lg-10.estiloCol
        p La Ley 1273 explica las sanciones que se aplicarían si una persona, utilizando medidas o procesos informáticos, atenta contra la información o los datos almacenados en un sistema, de hacerlo, incurriría en sanciones significativas. Teniendo en cuenta que el propósito de las personas dedicadas al crimen cibernético es violar y atentar contra las medidas de seguridad que poseen los sistemas, se hace relevante tener en cuenta cada uno de estos procesos y estar atentos a todo lo ocurrido en una infraestructura y sistemas de almacenamiento de los sistemas. 
    img(src="@/assets/curso/temas/tema4/tema4-img-decorativa-01.svg", alt="Texto que describa la imagen").tema4-decorativa-01    
    
    separador
      
    .titulo-segundo.color-acento-botones.mt-5
      h2 Control de acceso basado en roles

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            figure(data-aos="fade-right")
              img(src="@/assets/curso/temas/tema4/tema4-img-03.png")
      .col-lg-7
        .crd.clr-paleBlue.p-4.mb-5
          p El control de acceso basado en roles (RBAC), es una función de seguridad para controlar el acceso de usuarios a tareas que habitualmente están restringidas a un superusuario que, mediante la aplicación de atributos de seguridad a procesos y usuarios, el RBAC puede dividir sus capacidades entre varios administradores. Tal gestión de derechos de procesos se implementan mediante privilegios, a través de RBAC como alternativa al modelo de superusuario. (Oracle, 2010.)
        p El usuario #[b #[i root]], también conocido como superusuario, es omnipotente, como también los programas que se ejecutan como root, o los programas #[b #[i setuid]]. El usuario #[b #[i root]] puede leer y escribir en cualquier archivo, ejecutar todos los programas y enviar señales de terminación a cualquier proceso. Un programa usurpado puede realizar cualquier tarea en el sistema (Oracle, 2010), de hecho, cualquier persona que puede convertirse en superusuario puede modificar el cortafuegos de un sitio, modificar la pista de auditoría, leer registros confidenciales y apagar toda la red. 

    p.mb-5 La flexibilidad en la configuración de los roles posibilita una variedad de políticas de seguridad, y aunque incluye pocos roles, es posible configurar fácilmente los tres roles recomendados, basados en perfiles de derechos con el mismo nombre (Oracle, 2010). Estos roles son:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Administrador principal")
            p Un rol poderoso equivalente al usuario #[i root] o superusuario.
          .row(titulo="<i>root</i>")
            p Al igual que el anterior es un rol potente con el impedimento de iniciar sesión. Un usuario debe iniciar primero sesión y luego asumir el rol #[i root] asignado.
          .row(titulo="Administrador del sistema")
            p Un rol menos poderoso para la administración y no está relacionado con la seguridad. Este rol puede gestionar sistemas de archivos, correo e instalación de #[i software], sin embargo, no puede definir contraseñas.
          .row(titulo="Operador")
            p Rol de administrador junior para operaciones como copias de seguridad y gestión de impresoras.                                    

      .col-lg-5
        figure(data-aos="fade-right")
          img(src="@/assets/curso/temas/tema4/tema4-img-04.png")

    separador

    .titulo-segundo.color-acento-botones.mt-5
      h2 Acceso basado en el computador principal

    .row.justify-content-center.align-items-center.mb-4    
      .col-lg-7
        p.mb-4 Este modelo de acceso es impreciso y poco seguro, consiste en tener una computadora que interactúa como intermediarioa con el servidor de almacenamiento, si esta computadora tiene privilegios de modificación o privilegios de acceso como usuario administrador, todos los usuarios asociados a ella podrían realizar modificaciones en la base de datos sin ninguna restricción. Aunque es un sistema simple que no representa un gran proceso de implementación, es utilizado comúnmente en muchas organizaciones por su fácil implementación y mantenimiento. Igualmente, la conexión de acceso remoto, regularmente usada para acceder a los equipos desde cualquier lugar, siempre y cuando se proporcionen las credenciales necesarias para poder tener el acceso, podría generar un problema a futuro, en tanto no se pueden controlar de manera adecuada los niveles de acceso a la información.
        p Dentro de las características principales a resaltar de los controles de acceso, se encuentran las siguientes:
      .col-lg-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            figure(data-aos="fade-right")
              img(src="@/assets/curso/temas/tema4/tema4-img-05.png")        

    TabsC.color-acento-botones
      .py-3.py-md-4(titulo="Protección de la información")
        .row
          .col-md-6
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema4/tema4-img-06.png', alt='Texto que describa la imagen')

          .col-md-6.mb-4.mb-md-0
            p Esta característica es fundamental al momento de pensar en la implementación de un sistema de almacenamiento, porque la información, al ser uno de los activos más importante de las empresas, sirve en la toma de decisiones o, en la mayoría de los casos, dependen de ella para realizar labores de adquisición de productos o servicios.
      .py-3.py-md-4(titulo="Integridad")
        .row
          .col-md-6
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema4/tema4-img-07.png', alt='Texto que describa la imagen')

          .col-md-6.mb-4.mb-md-0
            p Es la capacidad que tiene un sistema de información para realizar las operaciones procedimentales de manera adecuada, es decir que los procesos que han sido programados dentro del sistema se realizan de manera adecuada y arrojan los resultados esperados. Como ejemplo se puede observar el funcionamiento de un cajero automático, no solo está programado para la entrega de dinero a los usuarios, también para realizar las transacciones de forma adecuada. Si un usuario tiene $100.000 pesos en su cuenta y retira $40.000 y no existe ningún proceso de descuento por transacción, lo ideal es que dentro de la cuenta resten $60.000, porque el sistema realiza una operación matemática, la resta, y los valores resultantes deben ser precisos y acordes a lo solicitado por el usuario. En caso de arrojar un valor diferente, se podrá decir que el sistema no tiene integridad y debe ser revisado para que realice las operaciones de manera adecuada para los usuarios que utilicen este sistema de información.
      .py-3.py-md-4(titulo="Disponibilidad")
        .row
          .col-md-5
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema4/tema4-img-08.png', alt='Texto que describa la imagen')

          .col-md-7.mb-4.mb-md-0
            p.mb-4 Esta es una característica de los sistemas de almacenamiento que establece los mecanismos y tiempos en los que el sistema de información deberá responder a los usuarios que requieran acceso a la información, esto implica la verificación de si esa persona tiene acceso o no a dicha información. El proceso de disponibilidad depende de una política de acceso a la información que determina los tiempos de negociación de entrega de la información y cómo el sistema estará operable para el proceso. Existen diferentes modelos de disponibilidad dos de ellos son: 
            ul.mb-4.lista-ul
              li
                i.fas.fa-circle
                | #[b 24/7] : El sistema se encuentra disponible las 24 horas del día, los 7 días de la semana, a esto se le denomina también alta disponibilidad. 
              li 
                i.fas.fa-circle
                | #[b 8/7] : El sistema está disponible 8 horas al día, los 7 días de la semana. 


            p.mb-4 Este tipo de disponibilidad se utiliza cuando una empresa requiere que los empleados tengan restricción de acceso de acuerdo al horario, por ejemplo de 8 a 12 del mediodía o de 2 a 6 de la tarde, teniendo así una disponibilidad de 8 horas por día. 
            p Estas son formas de controlar el acceso a la información y políticas de acceso a ella.

      .py-3.py-md-4(titulo="Confidencialidad")
        .row
          .col-md-6
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema4/tema4-img-09.png', alt='Texto que describa la imagen')

          .col-md-6.mb-4.mb-md-0
            p Esta característica se relaciona con las credenciales de acceso, la información requiere tener un dueño o responsable de su manipulación y uso. Ejemplo, las redes sociales o correo electrónico, ambos tienen mecanismos de acceso como usuarios y contraseñas o, en algunos casos, el acceso utilizan códigos enviados a dispositivos móviles con el fin de garantizar que quien solicita el acceso a la información sea la persona responsable o dueña de ella.
   
    .tarjeta.color-secundario.p-3.mb-5.mt-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema4/tema4-img-10.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.

</template>

<script>
export default {
  name: 'Tema4',
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
