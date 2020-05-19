import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/home.vue";
import About from "../views/about/about.vue";
import Growers from "../views/growers/growers.vue";
import Grower from "../views/growers/grower/grower.vue";
import Auctions from "../views/auctions/auctions.vue";
import Auction from "../views/auctions/auction/auction.vue";
import Varieties from "../views/varieties/varieties.vue";
import Variety from "../views/varieties/variety/variety.vue";
import News from "../views/news/news.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HOME",
    component: Home
  },
  {
    path: "/about",
    name: "ABOUT",
    component: About
  },
  {
    path: "/growers",
    name: "GROWERS",
    component: Growers
  },
  {
    path: "/growers",
    name: "GROWER",
    component: Grower
  },
  {
    path: "/auctions",
    name: "AUCTIONS",
    component: Auctions
  },
  {
    path: "/auction",
    name: "AUCTION",
    component: Auction
  },
  {
    path: "/varieties",
    name: "VARIETIES",
    component: Varieties
  },
  {
    path: "/variety",
    name: "VARIETY",
    component: Variety
  },
  {
    path: "/news",
    name: "NEWS",
    component: News
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
