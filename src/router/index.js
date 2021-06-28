import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import main_aside from "../components/main_aside";
import MainPage from "../views/MainPage";
import edit_aside from "../components/edit_aside";
import editpage from "../views/editpage";
const routes = [
    {
        path: "/",
        name: 'home',
        component: () => import("../views/Main"),
        children: [
            {
                path: "/main",
                components: {
                    sidebar: main_aside,
                    main: MainPage
                }
            },
            {
                path: "/edit",
                components: {
                    sidebar: edit_aside,
                    main: editpage
                }
            }
        ]
    }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
