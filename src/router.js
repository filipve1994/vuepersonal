import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import BlogEntries from "./statics/data/blogs.json";
import CheatsheetEntries from "./statics/data/cheatsheets.json";

Vue.use(Router);

const blogRoutes = Object.keys(BlogEntries).map(section => {
  const children = BlogEntries[section].map(child => ({
    path: child.id,
    name: child.id,
    component: () => import(`./markdowns/${section}/${child.id}.md`)
  }));
  return {
    path: `/${section}`,
    name: section,
    component: () => import("./views/Blog/Blog.vue"),
    children
  };
});

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/resume",
      name: "resume",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "resume" */ "./views/Resume/Resume.vue")
    },
    {
      path: "/resume2",
      name: "resume2",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "resume2" */ "./views/Resume2/Resume2.vue")
    },
    {
      path: "/cheatsheets",
      name: "cheatsheets",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "cheatsheets" */ "./views/Cheatsheets/Cheatsheets.vue"),
      children: CheatsheetEntries.map(entry => ({
        path: entry.id,
        name: entry.id,
        component: () => import(`./markdowns/cheatsheets/${entry.id}.md`)
      }))
    },
    {
      path: "/cheatsheetsingle",
      name: "cheatsheetsingle",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
          import(/* webpackChunkName: "cheatsheets" */ "./views/Cheatsheets/CheatsheetSingleView/CheatsheetSingleView.vue"),
      children: CheatsheetEntries.map(entry => ({
        path: entry.id,
        name: entry.id,
        component: () => import(`./markdowns/cheatsheets/${entry.id}.md`)
      }))
    },
    // ...CheatsheetEntries.map(entry => {
    //   // console.log(entry);
    //   return {
    //     path: `/${entry.id}`,
    //     name: entry.id,
    //     component: () => import(`./markdowns/cheatsheets/${entry.id}.md`)
    //   };
    // }),
    ...blogRoutes
  ]
});
