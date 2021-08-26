<template>
   
   <div class="home__video flex justify-center w-full space-y-4">
            
      <div class="home__video-video flex w-auto">

         <video 
            :src="require(`~/assets/videos/${videoName}`)" 
            controls
            :poster="posterSrc"
            class="object-cover"
         ></video>

      </div>
      
   </div>

</template>

<script lang="ts">

   import { Component, Vue } from "nuxt-property-decorator";

   @Component({
      name: 'HomeDemoVideo',
      components: {
      }
   })
   export default class HomeDemoVideo extends Vue {

      videoName = 'demo.mp4';
      posterSrc = 'https://images.unsplash.com/photo-1512424113276-fa9f6a112384?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1lZGlldmFsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60';

   }

</script>

<style lang="scss" scoped>

   $video-height: 20rem;
   $video-width: 36rem;

   .home__video {
      
      &-video {
         height: $video-height;
         overflow: hidden;
         border-radius: $border-radius-sm;
         background: $color-primary;
         @include media-query($screen-lg) {
            width: $video-width;
         }

         video {
            width: 100%;
            max-height: 100% !important;
         }
      }
   }

</style>
