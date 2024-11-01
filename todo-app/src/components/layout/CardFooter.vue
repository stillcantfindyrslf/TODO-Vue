<template>
  <div class="todoFooter">
    <div class="footerItems">
      <h1>1/3 left</h1>
      <FilterView />
    </div>
  </div>
</template>

<script>
import FilterView from "@/components/filters/FilterView.vue";

export default {
  components: {
    FilterView,
  },
};
</script>

<style lang="scss">
@import "./CardFooter.scss";
</style>
