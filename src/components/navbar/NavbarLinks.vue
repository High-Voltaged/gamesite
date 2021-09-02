<template>

   <div class="main__navbar__links w-full inset-x-0 md:inset-x-auto px-6 md:px-0">

      <div 
         v-for="(link, i) in links"
         :key="link.id"
         class="main__navbar-link flex items-center space-x-3 select-none">

         <button
            @click="$emit('route', link.id)"
            :class="{ 'selected': (link.id == currentTabId) }"
            class="main__navbar-link--btn relative">
            
            <span>{{ link.name }}</span>
         
            <div v-if="link.id == currentTabId" class="selected-badge w-full absolute inset-x-0 flex justify-center">
               <div class="h-full"></div>
            </div>
         
         </button>

         <div v-if="i < (links.length - 1)" class="hidden md:block divider">|</div>

      </div>

   </div>

</template>

<script lang="ts">

   import { Component, Prop, Vue } from "nuxt-property-decorator";

   @Component({
      name: 'NavbarLinks',
      components: {}
   })
   export default class NavbarLinks extends Vue {
      
      @Prop({ default: [] }) links: { name: string, id: number }[];
      @Prop({ default: 0 }) currentTabId: number;

   } 

</script>

<style lang="scss">

   .main__navbar {
      background: $color-tertiary;

      &-link, &-link--btn {
         @include typography($text-md, 500, 1.5);
         color: $color-text;
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

      @include media-query($screen-xs, $screen-md) {
         &__links {
            top: calc(100% + 1px);
            background: $color-tertiary;
            padding: 10px 0;
            z-index: 30;
            > div {
               color: rgba($color-text, .7);
            }
         }
      }

   }

   @include media-query($screen-xs, $screen-lg) {

      .main__navbar {
         margin-right: -1 * $main-padding-x;
         margin-left: -1 * $main-padding-x;
      }

   }

</style>