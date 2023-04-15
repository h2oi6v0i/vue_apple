import { createWebHistory, createRouter } from "vue-router";
import BlogList from "./components/BlogList.vue"
import MainPage from "./components/MainPage.vue"
import DetailPage from "./components/DetailPage.vue"
import AuthorView from "./components/AuthorView.vue"
import CommentView from "./components/CommentView.vue"

const routes = [
  {
    path: "/detail/:id", // url의 파라미터 문법
    component: DetailPage,
    children: [
      {
        path: "author",
        component: AuthorView,
      },
      {
        path: "comment",      
        component: CommentView, 
      }
    ]
  },
  {
    path: "/list",      // /list로 접속하면
    component: BlogList // <Bloglist /> 보여주기
  },
  {
    path: "/main",      
    component: MainPage, 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 