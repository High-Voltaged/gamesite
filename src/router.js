import Vue from 'vue'
import Router from 'vue-router'

import index from '~/pages/index.vue'
import HomeContainer from '~/components/HomeContainer.vue'
import DownloadContainer from '~/components/DownloadContainer.vue'
import NewsContainer from '~/components/NewsContainer.vue'
import ScreenshotsContainer from '~/components/ScreenshotsContainer.vue'

Vue.use(Router);


export function createRouter() {

   return new Router({
      mode: 'history',
      routes: [
         {
            path: '/',
            component: index,
            name: 'index',
            children: [
               {
                  name: 'home',
                  path: 'home',
                  component: HomeContainer,
               },
               {
                  name: 'news',
                  path: 'news',
                  component: NewsContainer,
               },
               {
                  name: 'download',
                  path: 'download',
                  component: DownloadContainer,
               },
               {
                  name: 'screenshots',
                  path: 'screenshots',
                  component: ScreenshotsContainer,
               },
            ]
         },
      ],
   
   })
}