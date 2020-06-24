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
import Article from "../views/news/article/article.vue";
import Contact from "../views/contact/contact.vue";
import Login from "../views/login/login.vue";
import Dashboard from "../views/login/dashboard/dashboard.vue";
import ManageAccount from "../views/login/dashboard/manage_account/manage_account.vue";
import ManageAuctions from "../views/login/dashboard/manage_auctions/manage_auctions.vue";
import Register from "../views/login/register/register.vue";

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
    path: "/grower",
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
  {
    path: "/article",
    name: "ARTICLE",
    component: Article
  },
  {
    path: "/contact",
    name: "CONTACT",
    component: Contact
  },
  {
    path: "/login",
    name: "LOGIN",
    component: Login
  },
  {
    path: "/dashboard",
    name: "DASHBOARD",
    component: Dashboard
  },
  {
    path: "/manage_account",
    name: "MANAGEACCOUNT",
    component: ManageAccount
  },
  {
    path: "/manage_auctions",
    name: "MANAGEAUCTIONS",
    component: ManageAuctions
  },
  {
    path: "/register",
    name: "REGISTER",
    component: Register
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
