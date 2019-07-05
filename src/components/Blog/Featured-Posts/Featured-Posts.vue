<template>
  <section class="Featured-Posts featured-posts">
    <b-container>
      <div class="section-title">
        <h2><span>Featured</span></h2>
      </div>

      <div class="row listfeaturedtag">
        <div
          v-for="(section, index) in Object.keys(entries)"
          :key="index"
          class="group"
        >
          <div class="" v-for="entry in entries[section]" :key="entry.id">
            <div class="entry" v-if="entry.featured === true">
              <h3 @click="$router.push({ name: entry.id })">
                {{ entry.title }}
                <span class="subtitle">{{ entry.date }}</span>
              </h3>
              <p>{{ entry.description }}</p>
            </div>

            <div class="entry featuredfalse" v-else>
              <h3 @click="$router.push({ name: entry.id })">
                {{ entry.title }}
                <span class="subtitle">{{ entry.date }}</span>
              </h3>
              <p>{{ entry.description }}</p>
            </div>
          </div>
        </div>

        <!-- begin post -->

        <div class="col-sm-6">
          <div class="card">
            <div class="row">
              <div class="col-md-5 wrapthumbnail">
                <a
                  href="/tips/jekyll/tutorial/2019/01/12/we-all-wait-for-summer/"
                >
                  <div
                    class="thumbnail"
                    style="background-image:url(https://filipve1994.github.io/assets/images/1.jpg);"
                  >
                    <!--                  style="background-image:url(/assets/images/1.jpg);"-->
                  </div>
                </a>
              </div>
              <div class="col-md-7">
                <div class="card-block card-body">
                  <h2 class="card-title">
                    <a
                      href="/tips/jekyll/tutorial/2019/01/12/we-all-wait-for-summer/"
                      >We all wait for summer</a
                    >
                  </h2>
                  <h4 class="card-text">
                    This is changed. As I engage in the so-called “bull
                    sessions” around and about the school, I too often find that
                    most college men have...
                  </h4>
                  <div class="metafooter">
                    <div class="wrapfooter">
                      <span class="post-date">12 Jan 2019</span>
                      <div class="clearfix"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end post -->

        <!-- begin post -->

        <div class="col-sm-6">
          <div class="card">
            <div class="row">
              <div class="col-md-5 wrapthumbnail">
                <a href="/jekyll/tutorial/2018/01/12/we-all-wait-for-summer/">
                  <div
                    class="thumbnail"
                    style="background-image:url(https://filipve1994.github.io/assets/images/1.jpg);"
                  >
                    <!--                  style="background-image:url(/assets/images/1.jpg);"-->
                  </div>
                </a>
              </div>
              <div class="col-md-7">
                <div class="card-block card-body">
                  <h2 class="card-title">
                    <a
                      href="/jekyll/tutorial/2018/01/12/we-all-wait-for-summer/"
                      >We all wait for summer</a
                    >
                  </h2>
                  <h4 class="card-text">
                    This is changed. As I engage in the so-called “bull
                    sessions” around and about the school, I too often find that
                    most college men have...
                  </h4>
                  <div class="metafooter">
                    <div class="wrapfooter">
                      <span class="post-date">12 Jan 2018</span>
                      <div class="clearfix"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end post -->

        <!-- begin post -->

        <div class="col-sm-6">
          <div class="card">
            <div class="row">
              <div class="col-md-5 wrapthumbnail">
                <a
                  href="/jekyll/tutorial/2018/01/12/powerful-things-markdown-editor/"
                >
                  <div
                    class="thumbnail"
                    style="background-image:url(https://filipve1994.github.io/assets/images/4.jpg);"
                  >
                    <!--                  style="background-image:url(/assets/images/1.jpg);"-->
                  </div>
                </a>
              </div>
              <div class="col-md-7">
                <div class="card-block card-body">
                  <h2 class="card-title">
                    <a
                      href="/jekyll/tutorial/2018/01/12/powerful-things-markdown-editor/"
                      >Powerful things you can do with the Markdown editor</a
                    >
                  </h2>
                  <h4 class="card-text">
                    There are lots of powerful things you can do with the
                    Markdown editor If you’ve gotten pretty comfortable with
                    writing in Markdown, then you may...
                  </h4>
                  <div class="metafooter">
                    <div class="wrapfooter">
                      <span class="meta-footer-thumb">
                        <img
                          class="author-thumb"
                          src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&amp;d=mm&amp;r=x"
                          alt="FVE"
                        />
                      </span>
                      <span class="author-meta">
                        <span class="post-name"
                          ><a
                            target="_blank"
                            href="http://filipve1994.gitlab.io/"
                            >FVE</a
                          ></span
                        ><br />

                        <span class="post-date">12 Jan 2018</span>
                      </span>
                      <div class="clearfix"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end post -->
      </div>
    </b-container>
  </section>
</template>

<script>
import "./_Featured-Posts.scss";
import BLOGENTRIES from "@/statics/data/blogs.json";

export default {
  props: {},
  data() {
    return {
      meals: []
    };
  },
  computed: {
    entries() {
      return BLOGENTRIES;
    }
  }
};
</script>
