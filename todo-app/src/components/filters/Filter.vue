<template>
  <div :class="$style.filterHolder">
    <button
      :class="[$style.filterButton, active === 'all' ? $style.active : '']"
      @click="setFilter('all')"
    >
      All
    </button>
    <button
      :class="[$style.filterButton, active === 'active' ? $style.active : '']"
      @click="setFilter('active')"
    >
      Active
    </button>
    <button
      :class="[
        $style.filterButton,
        active === 'completed' ? $style.active : '',
      ]"
      @click="setFilter('completed')"
    >
      Completed
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "all",
    };
  },
  methods: {
    setFilter(filter) {
      this.active = filter;
      this.$emit("filter-changed", filter);
    },
  },
};
</script>

<style module lang="scss">
@import "@/assets/styles/_variables.scss";
@import "@/assets/styles/_mixins.scss";

.filterHolder {
  display: flex;
  gap: 2.3rem;
}

.filterButton {
  background-color: $primary-color-elem;
  border: none;
  font-family: inherit;
  padding: 0 0.6rem;
  @include typography($font-size-primary, $font-weight-primary, #c8945d);
  border-radius: 0.31rem;
  cursor: pointer;

  @include transition(background-color, 0.2s);

  &:hover {
    background-color: darken($primary-color-elem, 5%);
  }
}

.active {
  border: 0.125rem solid #c8945d;

  @include transition(background-color, 0.2s);
}
</style>
