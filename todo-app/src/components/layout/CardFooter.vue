<template>
  <div :class="$style.todoFooter">
    <div :class="$style.footerItems">
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

<style module lang="scss">
@import "./CardFooter";
</style>
