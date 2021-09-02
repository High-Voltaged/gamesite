<template>
   
   <div class="main__navbar min-w-full flex items-center justify-center py-4 px-6 relative shadow-lg">

      <div class="main__navbar__xs flex md:hidden items-center justify-between w-full">

         <div class="main__navbar__xs--tab flex md:hidden items-center select-none">
            {{ currentTab.name.toUpperCase() }}
         </div>

         <button @click="xsMenuOn = !xsMenuOn" class="main__navbar__xs--menu">
            <font-awesome-icon :icon="['fas', 'bars']" class="w-5 h-5 fill-current" />
         </button>

         <NavbarLinks 
            v-if="xsMenuOn" 
            :currentTabId="currentTab.id" 
            :links="partialLinks"
            @route="$emit('route', $event)" 
            class="absolute flex md:hidden flex-col items-start" />

      </div>
      
      <NavbarLinks 
         :links="links" 
         :currentTabId="currentTab.id" 
         @route="$emit('route', $event)" 
         class="hidden md:flex items-center justify-center h-full space-x-3" />
      
   </div>

</template>

<script lang="ts">

   import { Component, Prop, Vue } from "nuxt-property-decorator";
   import NavbarLinks from './NavbarLinks.vue';

   @Component({
      name: 'Navbar',
      components: {
         NavbarLinks,
      }
   })
   export default class Navbar extends Vue {
      
      @Prop({ default: [] }) links: { name: string, id: number }[];
      @Prop({ default: 0 }) currentTab: { name: string, id: number };
      xsMenuOn = false;

      get partialLinks() {

         return this.links.filter(link => {
            return (link.id != this.currentTab.id);
         })

      }

   }

</script>

<style lang="scss">

   .main__navbar {
      background: $color-tertiary;
      margin-right: $main-padding-x / -3;
      margin-left: $main-padding-x / -3;
      
      @include media-query($screen-xs, $screen-lg) {
         border-bottom: 1px $color-primary solid;
      }

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

      &__xs--tab {
         @include typography($text-md, 500, 1.5);
      }

      &__xs--tab, &__xs--menu {
         color: $color-text;
      }

   }

   @include media-query($screen-md, $screen-lg) {

      .main__navbar {
         margin-right: -1 * $main-padding-x;
         margin-left: -1 * $main-padding-x;
      }

   }

</style>
