<template>
  <div class="Projects container-fluid mb-5">
    <section
      class="cta-section theme-bg-light py-5"
      style="background: #fafafa !important;"
    >
      <div class="container text-center single-col-max-width py-5">
        <h2 class="heading">Projects</h2>
        <div class="intro2">
          <p>
            In-depth Case Studies to show you what I can offer and how I work.
            <br /><br />
            I'm taking on freelance work at the moment. Want some help building
            your software?
          </p>
        </div>
        <!-- intro div-->
      </div>
      <!-- container-->
    </section>
    <!-- cta-section-->

    <section class="projects-list px-3 py-5 p-md-5">
      <div class="container">
<!--        <div class="project-cards row isotope">-->
          <isotope
            ref="cpt"
            id="root_isotope1"
            class="project-cards row isotope"
            :list="projects"
            :options="option"
            v-images-loaded:on.progress="layout"
          >
            <div
              v-for="(project, index) in projects"
              :class="[project.category] + ' isotope-item col-md-6 mb-5 '" :data-date-updated="project.dateupdated"
              :key="index" @click="selected=project"
            >
                <div class="card project-card">
                  <div class="row no-gutters">
                    <div class="col-lg-4 card-img-holder">
                      <img :src="project.image" class="card-img" alt="image" />
                    </div>
                    <!-- col-lg-4-->

                    <div class="col-lg-8">
                      <div class="card-body">
                        <h5 class="card-title">
                          <a href="project.html" class="theme-link">{{
                            project.name
                          }}</a>
                        </h5>
                        <p class="card-text">{{ project.description }}</p>
                        <p class="card-text">
                          <small class="text-muted"
                            >Client: {{ project.client }}</small
                          >
                        </p>
                        <ul class="list-inline mb-0 mx-auto">
                          <li
                            class="list-inline-item"
                            v-for="techitem in project.technologies"
                            :key="techitem"
                          >
                            <span class="badge badge-secondary badge-pill">{{
                              techitem
                            }}</span>
                          </li>
                        </ul>
                      </div>
                      <!-- card-body-->
                    </div>
                    <!-- col-lg-8-->
                  </div>
                  <!-- row no-gutters -->
                </div>
                <!-- card project-card-->
            </div>
              <!-- isotope-item-->

          </isotope>
<!--        </div>-->
        <!-- project-cards -->
      </div>
      <!-- container -->
    </section>
    <!-- projects-list-->
  </div>
</template>

<script>
import "./_Projects.scss";
import isotope from "vueisotope";
import imagesLoaded from 'vue-images-loaded';

import yaml from "js-yaml";
import { project } from "./projects.yml";

export default {
  props: {},
  components: {
    isotope
  },
    directives: {
        'v-images-loaded': imagesLoaded,
      imagesLoaded,
    },
  data: function() {
    return {
      projects: yaml.load(project),
      layoutMode: "masonry",
      option: {
        itemSelector: ".isotope-item",
        layoutMode: "masonry",
        sortBy: "date",
        selected: null,
        sortAscending: false,
        getSortData: {
          date: "[data-date-updated]"
        },
        getFilterData: {
          "show all": function() {
            return true;
          }
        }
      }
    };
  },
  methods: {
    sort: function(key) {
      this.$refs.cpt.sort(key);
    },
    filter: function(key) {
      this.$refs.cpt.filter(key);
    },
    layout() {
      this.$refs.cpt.layout('masonry');
    }
  }
};
</script>
