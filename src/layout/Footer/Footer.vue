<template>
  <!--    <div class="Footer footer">-->
  <footer class="Footer footer">
    <div class="container">
      <div class="row">
        <div class="col-sm-3">
          <div class="footer-widget">
            <a href="/contact">
              <img src="https://filipve1994.github.io/assets/images/logo-footer.png" />
            </a>
          </div>
        </div>

        <div class="col-sm-3">
          <div class="footer-widget">
            <h5 class="title">Resources</h5>
            <ul>
              <li>
                <a
                  target="blank"
                  href="https://kramdown.gettalong.org/quickref.html"
                  >Kramdown reference</a
                >
              </li>
              <li>
                <a
                  target="blank"
                  href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet"
                  >Markdown Cheatsheet</a
                >
              </li>
            </ul>
          </div>
        </div>

        <div class="col-sm-3">
          <div class="footer-widget">
            <h5 class="title">Author</h5>
            <ul>
              <li><a href="/about/">About Us</a></li>
              <li><a href="https://filipve1994.github.io/">Blog</a></li>
              <li>
                <a href="https://filipve1994.github.io/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-sm-3">
          <div class="footer-widget textwidget">
            <h5 class="title">Download</h5>
            <p>
              Download "FVE" theme and use it for your next Jekyll project. If
              you have a question, a bug report, or if you simply want to say
              hi, <a href="#/support">contact us here</a>.
            </p>
            <a href="">Download Theme</a>
          </div>
        </div>
      </div>

      <div class="copyright">
        <p class="pull-left">
          Copyright © 2019 FVE Theme for Jekyll.
        </p>
        <p class="pull-right">
          <!-- Please, leave credit to author unless you own a commercial license: https://www.fve.be/freebies-license/ -->
          <a target="_blank" href="#">"FVE Theme"</a> - Design &amp; Code by
          FVE.be
        </p>
        <div class="clearfix"></div>
      </div>
    </div>
  </footer>
  <!--    </div>-->
</template>

<script>
    import "./_Footer.scss";

    export default {
  props: {}
};
</script>
