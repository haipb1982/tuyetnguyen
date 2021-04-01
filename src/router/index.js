import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Details from "../views/Details.vue";
import Introduce from "../views/Introduce.vue";
import Account from "../views/Account.vue";
import Collection from "../views/Collection.vue";
import Favorite from "../views/Favorite.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";


Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/gioithieu",
        name: "introduce",
        component: Introduce,
    },
    {
        path: "/account",
        name: "account",
        component: Account,
    },
    {
        path: "/bosuutap",
        name: "collection",
        component: Collection,
    },
    {
        path: "/details/:id",
        name: "details",
        component: Details,
    },
    {
        path: "/yeuthich",
        name: "Favorite",
        component: Favorite,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/dangky",
        name: "Register",
        component: Register,
    },
];

const router = new VueRouter({
    mode: "history",
    routes
});

export default router;