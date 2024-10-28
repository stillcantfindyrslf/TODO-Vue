<template>
  <div :class="$style.filterHolder">
    <button
      :class="$style.filterButton">
      All
    </button>
    <button
      :class="$style.filterButton">
      Active
    </button>
    <button
      :class="$style.filterButton">
      Completed
    </button>
  </div>
</template>

<script>
export default {

};
</script>

<style module lang="scss">
@import "./FilterView";
</style>
