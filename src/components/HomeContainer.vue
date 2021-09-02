<template>
   
   <div class="main__container home__container flex flex-col items-center space-y-12 shadow-xl">
      
      <PageTitle :title="title" />

      <DemoVideo />

      <Advantages :items="advantages" />

      <div class="home__cards grid lg:gap-x-4 space-y-10 lg:space-y-0">

         <ImgCard 
            v-for="(card, i) in cards"
            :key="i"
            :cardLink="card.link"
            :cardTitle="card.title"
            :cardText="card.text"
         />

      </div>

      <GlobalButton
         :content="'Try the game now'"
         :icon="'play'"
         @click="redirect"
      />

      <slot />

   </div>

</template>

<script lang="ts">

   import { Component, Vue } from "nuxt-property-decorator";
   import ImgCard from "./home/HomeImgCard.vue";
   import Advantages from "./home/HomeAdvantages.vue";
   import DemoVideo from "./home/HomeDemoVideo.vue";
   import GlobalButton from "~/components/misc/GlobalButton.vue";
   import PageTitle from "~/components/misc/PageTitle.vue";

   @Component({
      name: 'HomeContainer',
      components: {
         ImgCard,
         Advantages,
         DemoVideo,
         GlobalButton,
         PageTitle,
      }
   })
   export default class HomeContainer extends Vue {

      title = "Welcome to the Home Page!";
      text = [
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus luctus non neque eget ullamcorper. Sed semper faucibus sagittis. Nunc sagittis consectetur cursus. Maecenas nec finibus odio. Nunc id magna a leo mollis finibus.',
         'Advantages',
      ]
   
      advantages = [
         'Some advantage regarding the game here', 
         'Lorem ipsum dolor stuff here',
         'Much more lorem ipsum placeholder text here and here',
         'Other lorem ipsum stuff here',
         'More words with letters, that weren’t mentioned earlier'
      ];

      cards = [
         { title: 'Introducing a new version of the game.', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id facilisi adipiscing tempor pulvinar lorem. Eu turpis morbi libero mattis tempus orci in nec elit', link: 'https://images.unsplash.com/photo-1553986782-9f6de60b51b4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVkaWV2YWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60' },
         { title: 'Some other comment on the game here.', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id facilisi adipiscing tempor pulvinar lorem.', link: 'https://images.unsplash.com/photo-1541543975512-86aad5d2cf93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80' },
         { title: 'A different significantly interesting title', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id facilisi adipiscing', link: 'https://images.unsplash.com/photo-1471624257787-362e0c864ab2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80' }
      ];

      redirect(): void {

         this.$router.push('/download');

      }

   } 

</script>

<style lang="scss" scoped>

   .home__cards, .home__cards-card, .home__video {
      --card-width: 17rem;
   }

   .home__cards {
      grid-template-columns: minmax(auto, 100%);
   }

   @include media-query($screen-sm) {
      .home__cards {
         --card-width: 24rem;
         grid-template-columns: minmax(auto, var(--card-width));
      }
   }

   @include media-query($screen-lg) {
      .home__cards {
         grid-template-columns: repeat(3, minmax(auto, var(--card-width)));
      }
   }

</style>
