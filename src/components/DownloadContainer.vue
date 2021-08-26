<template>
   
   <div class="main__container download__container space-y-12 shadow-xl">

      <PageTitle :title="title" />

      <Button 
         :content="'Download the game'"
         :icon="'download'"
         @click="onDownload"
      />
      
      <slot />

   </div>

</template>

<script lang="ts">

   import { Component, Prop, Vue } from "nuxt-property-decorator";
   import Button from '~/components/misc/GlobalButton.vue';
   import PageTitle from "~/components/misc/PageTitle.vue";

   @Component({
      name: 'DownloadContainer',
      components: {
         Button,
         PageTitle,
      }
   })
   export default class DownloadContainer extends Vue {
      
      title = 'Download the game below'

      onDownload() {}

   } 

</script>