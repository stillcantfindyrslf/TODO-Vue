<template>
  <div :class="$style.todoFooter">
    <div :class="$style.footerItems">
      <h1>1/3 left</h1>
      <Filter @filter-changed="handleFilterChange" />
    </div>
  </div>
</template>

<script>
import Filter from "@/components/filters/Filter.vue";

export default {
  components: {
    Filter,
  },
};
</script>

<style module lang="scss">
@import "@/assets/styles/_variables.scss";
@import "@/assets/styles/_mixins.scss";
@import "@/assets/styles/_breakpoints.scss";

.todoFooter {
  background-color: $primary-color-elem;
  padding: 0.75rem 2rem;

  @include respond-to(sm) {
    padding: 0.6rem 1rem;
  }
}
.footerItems {
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: #c8945d;
    padding: 0 0.6rem;
    @include typography($font-size-primary, $font-weight-primary, #c8945d);
    margin: 0;
  }
}
</style>
