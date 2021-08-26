<template>
   
   <button @click="$emit('click')" class="main__button flex items-center mx-auto space-x-4 select-none">

      <font-awesome-icon 
         v-if="icon" 
         :icon="['fas', icon]" 
         class="main__button--icon w-5 h-5 fill-current" />

      <span class="main__button--content inline-block">
         {{ content }}
      </span>
      
   </button>

</template>

<script lang="ts">

   import { Component, Prop, Vue } from "nuxt-property-decorator";

   @Component({
      name: 'GlobalButton',
      components: {}
   })
   export default class GlobalButton extends Vue {
      
      @Prop({ default: 'Empty button' }) content: string;
      @Prop({ default: '' }) icon: string;

   } 

</script>

<style lang="scss">

   .main__button {
      padding: 20px 28px;
      background: rgba($color-tertiary, .75);
      border-radius: $border-radius-lg;
      box-shadow: $shadow-xs;
      color: $color-secondary;
      @extend %base_transition;

      &:hover, &:focus {
         background: $color-tertiary;
         box-shadow: $shadow-sm;
      }

      &--content {
         @include typography($text-xl, 500, 1.5);
      }
   }

</style>