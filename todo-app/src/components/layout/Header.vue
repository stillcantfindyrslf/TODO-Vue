<script>
export default {
  props: {
    title: {
      type: String,
      default: "to do list",
    },
  },
};
</script>

<template>
  <div :class="$style.todoHeader">
    <h1>{{ title }}</h1>
  </div>
</template>

<style module lang="scss">
@import "@/assets/styles/_mixins.scss";
@import "@/assets/styles/_variables.scss";
@import "@/assets/styles/_breakpoints.scss";

.todoHeader {
  background: $primary-color-elem;
  padding: 0.85rem;

  @include respond-to(sm) {
    padding: 0.6rem 1rem;
  }

  h1 {
    text-align: center;
    @include typography($font-size-primary, $font-weight-primary);
    margin: 0;
  }
}
</style>
