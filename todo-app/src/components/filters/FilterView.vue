<template>
  <div class="filterHolder">
    <button
      :class="['filterButton', { active: activeFilter === 'all' }]"
      @click="setFilter('all')"
    >
      All
    </button>
    <button
      :class="['filterButton', { active: activeFilter === 'active' }]"
      @click="setFilter('active')"
    >
      Active
    </button>
    <button
      :class="['filterButton', { active: activeFilter === 'completed' }]"
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

<style lang="scss">
@import "./FilterView.scss";
</style>
