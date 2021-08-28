<template>
   
   <div class="main__modal flex items-center justify-center fixed inset-0">
            
      <div class="main__modal-wrapper relative h-full">

         <div class="main__modal-img w-full h-full">
            <img :src="imgSrc" class="main__modal-img--image w-full h-full object-cover select-none" />
         
            <button @click="$emit('close')" class="main__modal-img--btn absolute flex items-center justify-center">
               <font-awesome-icon :icon="['fas', 'times']" class="w-5 h-5 fill-current" />
            </button>
         </div>

      </div>

   </div>

</template>

<script lang="ts">

   import { Component, Prop, Vue } from "nuxt-property-decorator";

   @Component({
      name: 'ImgModal',
      components: {
      }
   })
   export default class ImgModal extends Vue {

      @Prop({ default: '' }) imgSrc: string;

   } 

</script>

<style lang="scss" scoped>

   $modal-width-xs: calc(100% - 3rem);
   $modal-width-sm: calc(100% - 5rem);
   $modal-width-lg: 600px;

   .main__modal {
      width: 100vw;
      height: 100vh;
      margin: 0;
      padding: 6rem 0;
      z-index: 1000;
      background: rgba(0, 0, 0, .7);

      &-wrapper {
         width: $modal-width-xs;
         @include media-query($screen-sm) {
            width: $modal-width-sm;
         }
         @include media-query($screen-md) {
            width: $modal-width-lg;
         }
      }

      &-img {
         background: $color-primary;
         border-radius: $border-radius-xs;
         overflow: hidden;

         &--btn {
            right: -9px;
            top: -9px;
            padding: 6px;
            background: $color-tertiary;
            border-radius: $border-radius-xs;
            box-shadow: $shadow-sm;
            color: $color-secondary;
            @include verticalTranslation(3px);
         }
      }

      &-overlay {
         background: rgba(0, 0, 0, .2);
         z-index: -5;
      }
   }   

</style>
