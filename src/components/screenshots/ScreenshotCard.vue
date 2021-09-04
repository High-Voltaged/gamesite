<template>
   
   <div class="screenshots__cards-card flex flex-col sm:flex-row items-center w-full space-y-4 sm:space-y-0 sm:space-x-6 md:space-x-10 px-4 sm:px-0 md:px-10">
      
      <div v-if="imgSrc" @click="shown = true" class="card-img flex-0 cursor-pointer">
         <img :src="imgSrc" class="w-full h-full object-cover select-none" alt="Game Screenshot"/>
      </div>
   
      <div class="card-content space-y-3 text-justify sm:text-left">
         {{ description }}
      </div>

      <transition name="scale-out">

         <Modal
            v-if="shown"
            :imgSrc="imgSrc"
            @close="shown = false"/>

      </transition>

   </div>

</template>

<script lang="ts">

   import { Component, Prop, Vue } from "nuxt-property-decorator";
   import Modal from '~/components/misc/ImgModal.vue';

   @Component({
      name: 'ScreenshotCard',
      components: {
         Modal,
      }
   })
   export default class ScreenshotCard extends Vue {

      @Prop({ default: '' }) imgSrc: string;
      @Prop({ default: 'Empty description' }) description: string;
      shown = false;

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
         @include verticalTranslation();

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
         color: $color-text;
      }
   }

</style>
