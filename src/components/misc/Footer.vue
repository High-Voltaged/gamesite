<template>
   
   <div class="main__footer flex flex-col md:flex-row items-center md:justify-between space-y-8 md:space-y-0 md:space-x-4">

      <div class="main__footer-links flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-6">

         <button 
            v-for="link in links"
            :key="link.id"
            class="main__footer-link flex items-center select-none"
            @click="$emit('route', link.id)">
            
            <span>{{ link.name }}</span>
         </button>

      </div>

      <div class="main__footer-icons flex items-center space-x-6">

         <button
            v-for="(icon, i) in icons"
            :key="i"
            class="main__footer-icon">
            
            <font-awesome-icon :icon="['fab', icon]" class="w-6 h-6 fill-current" />

         </button>

      </div>

   </div>

</template>

<script lang="ts">

   import { Component, Vue, Prop } from "nuxt-property-decorator";

   @Component({
      name: 'Footer',
      components: {
      }
   })
   export default class Footer extends Vue {

      @Prop({ default: [] }) links: { name: string, id: number }[];

      icons = ['discord', 'facebook', 'github'];

   } 

</script>

<style lang="scss">

   $padding: 24px 36px;

   .main__footer {
      width: 100%;
      margin-top: $margin-y;
      padding: $padding;

      border-radius: $border-radius-sm $border-radius-sm 0 0;
      background: $color-secondary;

      @include media-query($screen-lg) {
         width: $main-container-width;
         margin: $margin-y auto 0;
      }

      &-link {
         @include typography($text-sm, 400, 1.5);
         color: $color-text;
         letter-spacing: 0.1em;
         @extend %base_transition;
         &:hover {
            color: $color-tertiary;
         }
      }

      &-icon {
         color: $color-text;
         @extend %base_transition;
         &:hover {
            color: $color-tertiary;
         }
      }
   }

</style>
