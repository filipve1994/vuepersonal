<template>
  <section class="Hero intro full-width">
    <div class="wrapintro">
      <h1>Website made for myself, to show my programming articles</h1>
      <h2 class="lead">
        "FVE" is a Jekyll theme designed &amp; developed by Myself, for my
        programming blogs and tips.
      </h2>
      <a href="#" class="btn">Welcome</a>
    </div>
  </section>
</template>

<script>
export default {
  props: {}
};
</script>

<style lang="scss" scoped>
.full-width {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}

.intro {
  /*background-image: url(../images/head.jpg);*/
  background-image: url(./images/head.jpg);
  background-size: cover;
  padding: 9rem 0;
  /*margin-top: -87px;*/
  margin-bottom: 3.5rem;
  z-index: 1;
  position: relative;
  zoom: 1;
}

.intro h1 {
  font-weight: 700;
}

.intro h2 {
  margin-top: 2rem;
  margin-bottom: 2rem;
  color: #888;
  line-height: 1.6;
}

.intro .btn {
  background: #fff100;
  border: 0;
  color: #333;
  border-radius: 3px;
  font-weight: 500;
  padding: 15px 40px;
  -webkit-box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 1px;
}

.wrapintro {
  background: #fff;
  width: 700px;
  padding: 3rem;
  max-width: 90%;
  margin: 0px auto;
  text-align: center;
}
</style>
