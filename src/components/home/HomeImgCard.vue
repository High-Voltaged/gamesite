<template>
   
   <div class="home__cards-card flex flex-col w-full space-y-4 cursor-pointer">
            
      <div v-if="cardLink" @click="shown = true" class="card-img w-full">
         <img :src="cardLink" class="w-full h-full object-cover select-none" alt="First image"/>
      </div>
   
      <div class="card-content w-full space-y-3">
         
         <div class="card-content__title">
            {{ cardTitle }}
         </div>

         <div v-if="cardText" class="card-content__text opacity-75">
            {{ cardText }}
         </div>

      </div>

      <transition name="scale-out">

         <Modal
            v-if="shown"
            :imgSrc="cardLink"
            @close="shown = false"/>

      </transition>

   </div>

</template>

<script lang="ts">

   import { Component, Prop, Vue } from "nuxt-property-decorator";
   import Modal from '~/components/misc/ImgModal.vue';

   @Component({
      name: 'HomeImgCard',
      components: {
         Modal,
      }
   })
   export default class HomeImgCard extends Vue {

      @Prop({ default: 'Empty Image Title' }) cardTitle: string;
      @Prop({ default: '' }) cardText: string;
      @Prop({ default: '' }) cardLink: string;

      shown = false;


   } 

</script>

<style lang="scss" scoped>

   $card-padding: 20px;
   $img-size: calc(var(--card-width) - 2 * #{$card-padding});

   .home__cards-card {
      width: var(--card-width);
      padding: $card-padding;
      border-radius: $border-radius-sm;
      background: $color-primary;
      box-shadow: $shadow-sm;
      // @include verticalTranslation();

      .card-img {
         height: $img-size;
         overflow: hidden;
         margin-top: -2.5rem;
         border-radius: $border-radius-sm;
         box-shadow: $shadow-xs;
         @extend %base_transition;
      }

      &:hover .card-img {
         transform: translateY(5px);
      }

      .card-content {
         &__title {
            @include typography($text-lg, 500, 1.5);
            color: $color-text;
         }

         &__text {
            @include typography($text-sm, 400, 1.5);
            color: $color-text;
         }
      }

   }

</style>
