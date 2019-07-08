<template>
  <div class="fullwidth mb-5">
    <section
      class="cta-section theme-bg-light py-5"
      style="background: #41A4F5 !important;"
    >
      <div class="container text-center single-col-max-width py-5">
        <h2 class="heading">cheatsheets</h2>
        <div class="intro2">
          <p>Want to get connected? Follow me on the social channels below.</p>
        </div>
        <!-- intro div-->
      </div>
      <!-- container-->
    </section>

    <section class="Cheatsheets container">
      <div class="section-title__v2 cheatsheets">
        <h2><span>cheatsheets</span></h2>
      </div>

      <div class="row pages-list">
        <a
          v-for="cheatsheet in cheatsheets"
          :class="'item top-sheet -item-' + cheatsheet.title"
          :href="'/cheatsheetsingle/' + cheatsheet.id" :key="cheatsheet.title"
        >
          <span class="info">
            <code class="slug">{{ cheatsheet.title }}</code>
            <span class="title">{{ cheatsheet.title }}</span>
          </span>
        </a>
      </div>

      <div class="row pages-list">
        <a
          v-for="cheatsheet in cheatsheets"
          :class="'cheatsheets article item -item-' + cheatsheet.title"
          :href="'/cheatsheetsingle/' + cheatsheet.title" :key="cheatsheet.title"
        >
          <span class="info">
            <code class="slug">{{ cheatsheet.title }}</code>
            <span class="title">{{ cheatsheet.title }}</span>
          </span>
        </a>
      </div>
    </section>
  </div>
  <!-- container-fluid -->
</template>

<script>
import "./_Cheatsheets.scss";
import CHEATSHEETENTRIES from "@/statics/data/cheatsheets.json";

export default {
  props: {},
  computed: {
    cheatsheets() {
      return CHEATSHEETENTRIES;
    }
  }
};
</script>
