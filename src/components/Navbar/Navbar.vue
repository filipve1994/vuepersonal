<template>
  <div class="Navbar">
    <b-navbar toggleable="md" type="light" variant="light">
      <b-container>
        <b-navbar-brand href="#">

<img src="https://filipve1994.github.io/assets/images/icons/logo_transparent2.png" alt="FVE Theme for Jekyll" style="max-width: 100px;">

        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="/">Home</b-nav-item>
            <b-nav-item-dropdown  text="Blog" right>
              <b-dropdown-item href="/blog/tips">Tips</b-dropdown-item>
              <b-dropdown-item href="/blog/tags">Tags</b-dropdown-item>
              <b-dropdown-item href="/blog/categories">Categories</b-dropdown-item>
              <b-dropdown-item href="/blog/cheatsheets">Cheatsheets</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item href="/about">About</b-nav-item>
            <b-nav-item href="/contact">Contact</b-nav-item>
            <b-nav-item href="https://filipveportfolio.surge.sh/">Surge demo</b-nav-item>
             <b-nav-item-dropdown  text="Resume" right>
              <b-dropdown-item href="/resume">Resume</b-dropdown-item>
              <b-dropdown-item href="/resume2">Resume2</b-dropdown-item>
            </b-nav-item-dropdown>


          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>

    <router-view />
  </div>

</template>

<script>
export default {
  props: {},
  data() {
    return {
      meal: ""
    };
  },
  methods: {
    getMeal() {}
  }
};
</script>
