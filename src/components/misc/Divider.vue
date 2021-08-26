<template>
   
    <div class="main__divider flex items-center justify-center w-full relative">
      <div class="main__divider--line w-full"></div>

      <img :src="require(`~/assets/images/square-dot.svg`)" class="main__divider--img absolute select-none" />
   </div>

</template>

<script lang="ts">

   import { Component, Vue } from "nuxt-property-decorator";

   @Component({
      name: 'Divider',
   })
   export default class Divider extends Vue {

   } 

</script>

<style lang="scss" scoped>

   $svg-size: 2rem;

   .main__divider {
      height: $svg-size;
      &--img {
         width: $svg-size;
         height: $svg-size;
      }

      &--line {
         height: 1px;
         background-image: linear-gradient(to right, transparent, $color-tertiary, transparent);
      }
   }

</style>