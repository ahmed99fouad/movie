import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import MovieDetail from "../components/MovieDetail.vue";
import Actors from "../components/Actors.vue";
import ActorDetail from "../components/ActorDetail.vue";
Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "HomeView",
        component: HomeView,
    },
    {
        path: "/movie/:id",
        name: "Home",
        component: MovieDetail,
    },
    {
        path: "/actors",
        name: "actors",
        component: Actors,
    },
    {
        path: "/actor/:id",
        name: "actor",
        component: ActorDetail,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;