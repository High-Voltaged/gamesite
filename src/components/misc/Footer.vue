<template>
   
   <div class="main__footer flex items-center justify-between space-x-4">

      <div class="main__footer-links flex items-center space-x-6">

         <button 
            v-for="(link, i) in links"
            :key="i"
            class="main__footer-link flex items-center select-none"
            @click="$emit('route', i)">
            
            <span>{{ link }}</span>
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

      @Prop({ default: [] }) links: string[];

      icons = ['discord', 'facebook', 'github'];

   } 

</script>

<style lang="scss">

   .main__footer {
      width: 100%;
      margin-top: $margin-y;
      padding: 24px 36px;

      border-radius: $border-radius-sm $border-radius-sm 0 0;
      background: $color-secondary;

      @include media-query($screen-lg) {
         width: $main-container-width;
         margin: $margin-y auto 0;
      }

      &-link {
         @include typography($text-sm, 400, 1.5);
         color: $color-4;
         letter-spacing: 0.1em;
         @extend %base_transition;
         &:hover {
            color: $color-tertiary;
         }
      }

      &-icon {
         color: $color-4;
         @extend %base_transition;
         &:hover {
            color: $color-tertiary;
         }
      }
   }

</style>
