<template>
  <div>
    <div id="vcomments"></div>
  </div>
</template>

<script>

export default {
  mounted() {
    this.renderValine();
  },
  methods: {
    renderValine() {
      if (typeof window !== "undefined") {
        this.window = window;
        window.AV = require("leancloud-storage");
      }
      const Valine = require('valine');
      new Valine({
        el: "#vcomments",
        appId: "ARV3PfjCJG8mKiTrEDnsowwF-gzGzoHsz",
        appKey: "64oXlEAQT9aJvvzipcgHLjpf",
        notify: false,
        verify: false,
        avatar: "retro",
        placeholder: "欢迎留言"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

