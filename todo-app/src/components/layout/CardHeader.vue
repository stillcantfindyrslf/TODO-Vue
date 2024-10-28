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
  <div :class="$style.cardHeader">
    <h1>{{ title }}</h1>
  </div>
</template>

<style module lang="scss">
@import "./CardHeader";
</style>
