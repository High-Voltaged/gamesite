<template>
   
   <div class="main__container news__container flex flex-col overflow-hidden space-y-8 shadow-xl">
      
      <PageTitle :title="title" />

      <div class="news__container-news flex flex-col w-full space-y-6">

         <div 
            v-for="card in cards"
            :key="card.id"
            class="news__container-news--wrapper w-full flex flex-col space-y-6">

            <NewsCard
               :card="card">
            </NewsCard>

            <Divider v-if="card.id < (cards.length - 1)" />

         </div>

      </div>

      <slot />

   </div>

</template>

<script lang="ts">

   import { Component, Vue } from "nuxt-property-decorator";
   import NewsCard, { ICard } from './news/NewsCard.vue'
   import PageTitle from "~/components/misc/PageTitle.vue";
   import Divider from "~/components/misc/Divider.vue";

   @Component({
      name: 'NewsContainer',
      components: {
         NewsCard,
         PageTitle,
         Divider,
      }
   })
   export default class NewsContainer extends Vue {

      title = "News & Fixes"
      cards: ICard[] = [
         { id: 0, date: new Date(2020, 11, 22), title: "First title on the Page", text: "Some content here. Second sentence. Third sentence. Fourth one" },
         { id: 1, date: new Date(2016, 12, 9), title: "Second title on the Page", text: "Some content here. Second sentence. Third sentence with more content. Fourth one" },
         { id: 2, date: new Date(2013, 4, 23), title: "Third title on the Page", text: "Some content here. Second sentence. Third sentence with less text. Fourth one" },
      ]

   } 

</script>

<style lang="scss" scoped>

   $svg-size: 2rem;

   .news__container-divider {
      height: $svg-size;
      &--img {
         width: $svg-size;
         height: $svg-size;
      }

      &--line {
         height: 1px;
         background-image: linear-gradient(to right, transparent, $color-tertiary, transparent);
      }
   }

</style>