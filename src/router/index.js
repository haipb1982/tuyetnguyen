import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Detail from "../views/Detail.vue";
import Introduce from "../views/Introduce.vue";
import Account from "../views/Account.vue";
import Collection from "../views/Collection.vue";
import Favorite from "../views/Favorite.vue";


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
        path: "/detail/:id",
        name: "detail",
        component: Detail,
    },
    {
        path: "/yeuthich",
        name: "Favorite",
        component: Favorite,
    },
];

const router = new VueRouter({
    mode: "history",
    routes
});

export default router;