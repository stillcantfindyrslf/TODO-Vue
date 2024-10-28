<script>
export default {
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <li :class="$style.todoTask">
    <input
      type="checkbox"
      :id="`task-${task.id}`"
      :class="$style.taskCheckBox"
    />
    <input
        :for="`task-${task.id}`"
        :class="$style.taskInput"
        :placeholder="'Enter task'"
    />
    <button
        :class="$style.taskDelete">
      ✖
    </button>
  </li>
</template>

<style module lang="scss">
@import "./TaskItem";
</style>
