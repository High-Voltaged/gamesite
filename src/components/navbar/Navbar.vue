<template>
   
   <div class="main__navbar min-w-full flex items-center justify-center py-4 px-6 space-x-3 shadow-lg">

      <div 
         v-for="(link, i) in links"
         :key="i"
         class="main__navbar-link flex items-center space-x-3 select-none">

         <button 
            @click="$emit('route', i)" 
            :class="{ 'selected': (i == currentTabId) }" 
            class="main__navbar-link--btn relative">
            
            <span>{{ link }}</span>
         
            <div v-if="i == currentTabId" class="selected-badge w-full absolute inset-x-0 flex justify-center">
               <div class="h-full"></div>
            </div>
         
         </button>

         <div v-if="i < (links.length - 1)" class="divider">|</div>

      </div>
      
   </div>

</template>

<script lang="ts">

   import { Component, Prop, Vue } from "nuxt-property-decorator";

   @Component({
      name: 'Navbar',
      components: {}
   })
   export default class Navbar extends Vue {
      
      @Prop({ default: [] }) links: string[];
      @Prop({ default: 0 }) currentTabId;

   } 

</script>

<style lang="scss">

   .main__navbar {
      background: $color-tertiary;

      &-link, &-link--btn {
         @include typography($text-md, 500, 1.5);
         color: $color-4;
         letter-spacing: 0.1em;
      }

      &-link--btn {
         
         &.selected {
            @extend %base_transition;
            color: $color-secondary;
         }

         .selected-badge {
            height: 3px;
            bottom: -5px;

            div {
               width: 30px;
               background: $color-secondary;
               border-radius: 5px 5px 0 0;
            }
         }
      }

      &-link .divider {
         font-family: $font-medieval;
         font-size: $text-lg;
      }

   }

   @media screen and (min-width: $screen-xs) and (max-width: $screen-lg + 1) {

      .main__navbar {
         margin-right: -1 * $main-padding-x;
         margin-left: -1 * $main-padding-x;
      }

   }

</style>