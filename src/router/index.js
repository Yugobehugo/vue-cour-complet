import Vue from 'vue';
import VueRouter from 'vue-router';
import{ supabase } from './../supabase.js';
import HomeView from '../views/HomeView.vue';
import SignUpView from '../views/SignUpView.vue';
import SignInView from '../views/SignInView.vue';
import CatalogueView from '../views/CatalogueView.vue';
import CreateView from '../views/CreateView.vue';

// modules
import {user} from "@/store/modules/user.module";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta : {
      requireAuth: false,
    },
  },
  {
    path: '/SignUp',
    name: 'signUp',
    component: SignUpView,
    meta : {
      requireAuth: false,
    },
  },
  {
    path: '/SignIn',
    name: 'signIn',
    component: SignInView,
    meta : {
      requireAuth: false,
    },
  },
  {
    path: '/Catalogue',
    name: 'catalogue',
    component: CatalogueView,
    meta : {
      requireAuth: true,
    },
  },
  {
    path: '/Create',
    name: 'create',
    component: CreateView,
    meta : {
      requireAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  let has_user = supabase.auth.user();
  if(to.matched.some((record) => {return record.meta.requireAuth})){
    console.log("ici")
    if(has_user){
      user.state.user_data = has_user;
      next();
    }
    else{
      console.log("not login")
      next({
        name: "signIn",
      })
    }
  }
  else{
    next();
  }
});


export default router;
