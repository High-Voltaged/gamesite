<template>
   
   <div class="home__advantages w-4/5 mx-auto">

      <div class="home__advantages-title">{{ title }}</div>

      <div v-if="items.length > 0" class="home__advantages-list flex flex-col items-start space-y-3 mt-5">
         
         <div
            v-for="(item, i) in items"
            :key="i"
            class="home__advantages-list--item flex items-center space-x-5">

            <font-awesome-icon :icon="['fas', 'check']" class="w-4 h-4 fill-current" />

            <span>{{ item }}</span>   
            
         </div>
      
      </div>

   </div>

</template>

<script lang="ts">

   import { Component, Prop, Vue } from "nuxt-property-decorator";

   @Component({
      name: 'HomeAdvantages',
      components: {
      }
   })
   export default class HomeAdvantages extends Vue {

      @Prop({ default: [] }) items: string[];

      title = 'Primary advantages of this game version';

   } 

</script>

<style lang="scss" scoped>

   $padding: 36px 44px;

   .home__advantages {
      padding: $padding;
      background: transparent;
      border: 25px solid $color-tertiary;
      border-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='75' height='75'%3E%3Cg fill='none' stroke='%23A4735C' stroke-width='2'%3E%3Cpath d='M1 1h73v73H1z'/%3E%3Cpath d='M8 8h59v59H8z'/%3E%3Cpath d='M8 8h16v16H8zM51 8h16v16H51zM51 51h16v16H51zM8 51h16v16H8z'/%3E%3C/g%3E%3Cg fill='%23A4735C'%3E%3Ccircle cx='16' cy='16' r='2'/%3E%3Ccircle cx='59' cy='16' r='2'/%3E%3Ccircle cx='59' cy='59' r='2'/%3E%3Ccircle cx='16' cy='59' r='2'/%3E%3C/g%3E%3C/svg%3E") 25;

      &-title {
         @include typography($text-lg, 500, 1.5);
         color: $color-4;
         font-family: $font-medieval;
      }
      
      &-list {
         &--item {
            @include typography($text-md, 400, 1.5);
            color: $color-4;
         }
      }
   }

</style>
