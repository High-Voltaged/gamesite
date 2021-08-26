<template>
   
   <div class="main__container screenshots__container space-y-12 shadow-xl">
      
      <PageTitle :title="title" />

      <div class="screenshots__cards flex flex-col items-center w-full lg:w-4/5 mx-auto space-y-6">

         <div 
            v-for="(card, i) in cards"
            :key="i"
            class="screenshots__cards-card-wrapper flex flex-col items-center w-full space-y-6">

            <ScreenshotCard 
               :imgSrc="card.src"
               :description="card.text"
            />

            <Divider v-if="i < (cards.length - 1)" />

         </div>         

      </div>

      <slot />

   </div>

</template>

<script lang="ts">

   import { Component, Vue, Watch } from "nuxt-property-decorator";
   import ScreenshotCard from "./screenshots/ScreenshotCard.vue";
   import PageTitle from "~/components/misc/PageTitle.vue";
   import Divider from "~/components/misc/Divider.vue";

   @Component({
      name: 'ScreenshotsContainer',
      components: {
         ScreenshotCard,
         PageTitle,
         Divider,
      }
   })
   export default class ScreenshotsContainer extends Vue {

      title = "This game version's screenshots";

      cards = [
         { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id facilisi adipiscing tempor pulvinar lorem. Eu turpis morbi libero mattis tempus orci in nec elit', src: 'https://images.unsplash.com/photo-1611403204379-4e2b04837ffc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1lZGlldmFsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60' },
         { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id facilisi adipiscing tempor pulvinar lorem. Eu turpis morbi libero mattis tempus orci in nec elit', src:  'https://images.unsplash.com/photo-1599692988809-9f1b87e4fee8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fG1lZGlldmFsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60' },
         { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id facilisi adipiscing tempor pulvinar lorem. Eu turpis morbi libero mattis tempus orci in nec elit', src: 'https://images.unsplash.com/photo-1586962316657-ff64c26330bc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1lZGlldmFsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60' },
         { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id facilisi adipiscing tempor pulvinar lorem. Eu turpis morbi libero mattis tempus orci in nec elit', src: 'https://images.unsplash.com/photo-1560536270-b5855082dd85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1lZGlldmFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60' },
      ];

   }      

</script>

<style lang="scss">



</style>