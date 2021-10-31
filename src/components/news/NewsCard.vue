<template>
   
   <div class="news__container-card w-full h-auto flex flex-col space-y-4 overflow-hidden cursor-pointer">
      
      <div class="news__container-card--header flex flex-col space-y-2">

         <span class="title tracking-wide">
            {{ card.title }}
         </span>
         
         <span class="date inline-block tracking-wide opacity-75">
            {{ formatDate() }}
         </span>

      </div>

      <div class="news__container-card--text flex flex-col">

         <span class="inline-block">
            {{ card.text }}
         </span>

      </div>

   </div>

</template>

<script lang="ts">

   import { Component, Prop, Vue } from "nuxt-property-decorator";

   export interface ICard {

      id: number;
      date: Date;
      title: string;
      text: string;

   }

   @Component({
      name: 'NewsCard',
      components: {
      }
   })
   export default class NewsCard extends Vue {

      @Prop() card: ICard;

      formatDate(): string {

         let date = this.card.date;
         date.setMonth(date.getMonth() - 1)
         let [month, day, year] = [date.toLocaleString('default', { month: 'long' }), date.getDate(), date.getFullYear()];
         return `${month} ${day.toString()}, ${year}`;

      }

   } 

</script>

<style lang="scss" scoped>

   $padding: 16px;

   .news__container-card {
      padding: $padding;

      background: $color-primary;
      border-radius: $border-radius-sm;
      box-shadow: $shadow-sm;
      @include verticalTranslation();

      &--header .title {
         font-family: $font-medieval;
         @include typography($text-lg, 400, 1.5);
         color: $color-text;
      }
      &--header .date {
         @include typography($text-sm, 500, 1.5);
         color: $color-text;
      }
      &--text span {
         @include typography($text-md, 400, 1.5);
         color: $color-text;
      }
   }

</style>
