# vuepersonal

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## links

- https://blog.logrocket.com/getting-started-with-bootstrapvue-2d8bf907ef11/
- https://blog.carbonteq.com/bootrap-custom-scss-with-vue-cli-in-5-mins/
- https://www.npmjs.com/package/vue-cli-plugin-style-resources-loader
- https://bootstrap-vue.js.org/docs
- https://www.sitepoint.com/bootstrap-vue-js-bootstrap-vue/
- https://medium.com/@j_lim_j/summary-of-sass-tutorial-by-net-ninja-for-a-vue-js-project-part-1-of-2-6ee9dfa05aad
- https://dev.to/lynnewritescode/my-scss-setup-within-a-vue-cli-3-project-4jan
- https://dev.to/josephharveyangeles/creating-a-simple-blog-using-vue-with-markdown-2omd

## handy sites

- https://alligator.io/vuejs/dynamic-styles/
- https://michaelnthiessen.com/vue-props-vs-data/
- https://github.com/Justineo/vue-awesome/tree/master/src/icons/regular
- 

## netlify deploy

- https://levelup.gitconnected.com/task-management-application-using-vue-js-part-2-d785a96acda6
- 

## tips

### to read json in page:

1. import BLOGENTRIES from "@/statics/data/blogs.json"; in <script> in .vue component or view

2. make function in computed: {} part that returns json entries

3. loop over entries

=> see example views/Home.vue

```
<template>
  <div class="home">
    <Hero />
    <FeaturedPosts />
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <div class="sections">
      <div
        v-for="(section, index) in Object.keys(entries)"
        :key="index"
        class="group"
      >
        <h2 class="center">{{ section }}</h2>
        <div class="section" v-for="entry in entries[section]" :key="entry.id">
          <div class="entry">
            <h3 @click="$router.push({ name: entry.id })">
              {{ entry.title }}
              <span class="subtitle">{{ entry.date }}</span>
            </h3>
            <p>{{ entry.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import BLOGENTRIES from "@/statics/data/blogs.json";
import Hero from "../components/Hero/Hero";
import FeaturedPosts from "../components/Blog/Featured-Posts/Featured-Posts";

export default {
  name: "home",
  components: {
    FeaturedPosts,
    Hero,
    HelloWorld
  },
  computed: {
    entries() {
      return BLOGENTRIES;
    }
  }
};
</script>
```
