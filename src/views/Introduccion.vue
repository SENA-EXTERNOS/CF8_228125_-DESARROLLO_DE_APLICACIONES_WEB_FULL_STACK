<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción   


    p.mb-4 Apreciado aprendiz, bienvenido a este componente formativo, donde encontrará diferentes temáticas orientadas al conocimiento de los sistemas de almacenamiento, desarrollando todas sus habilidades y capacidades en bases de datos. 

    P En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo:

    figure.mb-5.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/XsOb92mDUwg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
  
    
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
