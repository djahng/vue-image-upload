import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App';
import AuthHandler from './components/AuthHandler';
import ImageList from './components/ImageList';
import UploadForm from './components/UploadForm';
import store from './store';

Vue.use(VueRouter);

// Export router so we can programmatically redirect users
export const router = new VueRouter({
  mode: 'history',  // Use Browser Router instead of default Hash Router
  routes: [
    {
      path: '/',
      component: ImageList
    },
    {
      path: '/upload',
      component: UploadForm
    },
    {
      path: '/oauth2/callback',
      component: AuthHandler
    }
  ]
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
