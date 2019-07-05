<template>
  <div class="Blog">
    <router-view />
    <router-link to="/" tag="a" class="back">&laquo; Back</router-link>
  </div>
</template>

<script>
import "./_Blog.scss";

export default {
  props: {}
};
</script>
