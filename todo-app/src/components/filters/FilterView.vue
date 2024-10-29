<template>
  <div :class="$style.filterHolder">
    <button
      :class="[
        $style.filterButton,
        { [$style.active]: activeFilter === 'all' },
      ]"
      @click="setFilter('all')"
    >
      All
    </button>
    <button
      :class="[
        $style.filterButton,
        { [$style.active]: activeFilter === 'active' },
      ]"
      @click="setFilter('active')"
    >
      Active
    </button>
    <button
      :class="[
        $style.filterButton,
        { [$style.active]: activeFilter === 'completed' },
      ]"
      @click="setFilter('completed')"
    >
      Completed
    </button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState("tasks", ["filter"]),
    activeFilter() {
      return this.filter;
    },
  },
  methods: {
    ...mapActions("tasks", ["setFilter"]),
  },
};
</script>

<style module lang="scss">
@import "./FilterView";
</style>
