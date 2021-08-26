<template>
   
   <div class="main w-full h-full relative overflow-x-hidden">
      
      <Navbar
         :links="navLinks"
         :currentTabId="currentTab.id"
         @route="routeToPage($event)"
      />
 
      <div class="main__title flex items-center justify-center w-full select-none">

         <div class="main__title-content flex items-center justify-center relative">
            
            <span class="text-center">Some Title Here</span>
            
            <div class="main__title-overlay-x absolute top-0 bottom-0"></div>

            <div class="main__title-overlay-y absolute right-0 left-0"></div>
         
         </div>

      </div>

      <router-view></router-view>

      <Footer 
         :links="navLinks" 
         @route="routeToPage($event)"/>

      <!-- <div class="main__overlay absolute top-0 inset-x-0">
         <img src="https://images.unsplash.com/photo-1519188992859-b0c57f23f5a8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fG1lZGlldmFsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" class="w-full object-cover" alt="Overlay image">
      </div> -->

   </div>

</template>

<script lang="ts">

   import { Component, Vue, Watch } from "nuxt-property-decorator";
   import Navbar from '~/components/navbar/Navbar.vue';
   import Footer from '~/components/misc/Footer.vue';

   @Component({
      name: 'index',
      components: {
         Navbar,
         Footer,
      }
   })
   export default class index extends Vue {

      navLinks = ['HOME', 'DOWNLOAD', 'NEWS', 'SCREENSHOTS'];

      currentTab = {
         id: 0,
         name: 'home',
      }

      routeToPage(index: number) {

         if (index != this.currentTab.id) {

            this.currentTab.id = index;
            this.currentTab.name = this.navLinks[index].toLowerCase();

         }
         this.$router.push(`/${this.currentTab.name}`);

      }

      mounted() {

         this.onRouteChange();

      }

      @Watch('$route.name') 
      onRouteChange() {

         let routeName = this.$route.name;
         if (routeName != this.currentTab.name) {

            this.currentTab.name = routeName;
            this.currentTab.id = this.navLinks.indexOf(routeName.toUpperCase());

         }

      }

   } 

</script>

<style lang="scss">

   $main-padding: 30px 56px;
   $overlay-inset: 5%;

   $title-overlay-offset: -10px;
   $overlay-padding: 16px 32px;
   $border-size: 2px;

   .main {
      padding: 0 $main-padding-x / 3;
      background: $color-primary;

      &__title {
         margin-top: $margin-y;

         &-content {
            padding: $overlay-padding;
            box-shadow: inset 0 0 0 $border-size $color-4;
         }

         &-overlay-y, &-overlay-x {
            &::before {
               content: '';
               position: absolute;
               border: inherit;
            }
         }

         &-overlay-x {
            left: $title-overlay-offset;
            right: $title-overlay-offset;
            border-top: $border-size solid $color-4;
            border-bottom: $border-size solid $color-4;

            &::before {
               right: -1 * $title-overlay-offset;
               left: -1 * $title-overlay-offset;
               top: $title-overlay-offset - $border-size;
               bottom: $title-overlay-offset - $border-size;
            }
         }

         &-overlay-y {
            top: $title-overlay-offset;
            bottom: $title-overlay-offset;
            border-left: $border-size solid $color-4;
            border-right: $border-size solid $color-4;

            &::before {
               top: -1 * $title-overlay-offset;
               bottom: -1 * $title-overlay-offset;
               left: $title-overlay-offset - $border-size;
               right: $title-overlay-offset - $border-size;
            }
         }

         span {
            @include typography(36px, 500, 1.5);
            font-family: $font-medieval;
            color: $color-4;
            letter-spacing: 0.07em;
         }
      }

      &__container {
         width: 100%;
         margin-top: $margin-y;
         padding: $main-padding;

         border-radius: $border-radius-lg;
         background: $color-secondary;
      }

      &__overlay {
         padding: 0 $overlay-inset;
         background: $color-primary;
         z-index: -10;
      }

   }

   @include media-query($screen-md) {
      .main {
         padding: 0 $main-padding-x;
      }
   }

   @include media-query($screen-lg) {
      .main {
         padding: 0;

         &__container {
            width: $main-container-width;
            margin: $margin-y auto 0;
         }

      }
   }

</style>
