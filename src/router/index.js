import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Details from "../views/Details.vue";
import Introduce from "../views/Introduce.vue";
import Account from "../views/Account.vue";
import Collection from "../views/Collection.vue";
import Favorite from "../views/Favorite.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import Register from "../views/Register.vue";


Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/gioithieu",
        name: "gioithieu",
        component: Introduce,
    },
    {
        path: "/taikhoan",
        name: "taikhoan",
        component: Account,
    },

    {
        path: "/bosuutap",
        name: "bosuutap",
        component: Collection,
    },
    {
        path: "/bosuutap/:id",
        name: "bosuutap",
        component: Collection,
    },
    {
        path: "/bosuutap/:id/:p/",
        name: "bosuutap",
        component: Collection,
    },
    {
        path: "/chitiet/:id",
        name: "chitiet",
        component: Details,
    },
    {
        path: "/yeuthich",
        name: "yeuthich",
        component: Favorite,
    },
    {
        path: "/dangnhap",
        name: "dangnhap",
        component: Login,
    },
    {
        path: "/dangxuat",
        name: "dangxuat",
        component: Logout,
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