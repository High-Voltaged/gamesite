<template>
   
   <div class="main__container-title w-full px-8 text-center">

      <span>
         {{ title }}
      </span>

   </div>

</template>

<script lang="ts">

   import { Component, Prop, Vue } from "nuxt-property-decorator";

   @Component({
      name: 'PageTitle',
      components: {
      }
   })
   export default class PageTitle extends Vue {

      @Prop({ default: 'Empty title' }) title: string;

   }      

</script>

<style lang="scss">

   .main__container-title {
      @include typography($text-xl, 600, 1.6);
      letter-spacing: 0.09em;
      color: $color-4;
   }

</style>