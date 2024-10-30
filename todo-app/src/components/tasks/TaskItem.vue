<script>
export default {
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  methods: {
    selectText(event) {
      event.target.select();
    }
  }
};
</script>

<template>
  <li :class="$style.todoTask">
    <input
      type="checkbox"
      :checked="task.completed"
      @change="$emit('toggle-task', task.id)"
      :id="`task-${task.id}`"
      :class="$style.taskCheckBox"
    />
    <input
      type="text"
      v-model="task.title"
      :class="$style.taskInput"
      placeholder="Enter task"
      @focus="selectText"
    />
    <button :class="$style.taskDelete" @click="$emit('delete-task', task.id)">
      ✖
    </button>
  </li>
</template>

<style module lang="scss">
@import "./TaskItem";
</style>
