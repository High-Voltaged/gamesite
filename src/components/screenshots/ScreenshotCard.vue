<template>
   
   <div class="screenshots__cards-card flex items-center w-full space-x-10">
      
      <div v-if="imgSrc" class="card-img flex-0">
         <img :src="imgSrc" class="w-full h-full object-cover select-none" alt="Game Screenshot"/>
      </div>
   
      <div class="card-content space-y-3">
         {{ description }}
      </div>

   </div>

</template>

<script lang="ts">

   import { Component, Prop, Vue } from "nuxt-property-decorator";

   @Component({
      name: 'ScreenshotCard',
      components: {
      }
   })
   export default class ScreenshotCard extends Vue {

      @Prop({ default: '' }) imgSrc: string;
      @Prop({ default: 'Empty description' }) description: string;

   }      

</script>

<style lang="scss">

   $img-size-lg: 16rem;
   $img-size-md: 14rem;
   $img-size-sm: 12rem;

   .screenshots__cards-card {
      .card-img {
         width: $img-size-sm;
         height: $img-size-sm;

         @include media-query($screen-md) {
            width: $img-size-md;
            height: $img-size-md;
         }

         @include media-query($screen-lg) {
            width: $img-size-lg;
            height: $img-size-lg;
         }

         border-radius: $border-radius-sm;
         box-shadow: $shadow-sm;
         background: $color-primary;
         overflow: hidden;
      }

      .card-content {
         @include typography($text-lg, 400, 1.5);
         color: $color-4;
      }
   }

</style>