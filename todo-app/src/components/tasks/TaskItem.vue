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
    },
  },
};
</script>

<template>
  <li :class="['todoTask', { completed: task.completed }]">
    <input
      type="checkbox"
      :checked="task.completed"
      @change="$emit('toggle-task', task.id)"
      :id="`task-${task.id}`"
      class="taskCheckBox"
    />
    <input
      type="text"
      v-model="task.title"
      class="taskInput"
      placeholder="Enter task"
      @focus="selectText"
    />
    <button class="taskDelete" @click="$emit('delete-task', task.id)">✖</button>
  </li>
</template>

<style lang="scss">
@import "./TaskItem.scss";
</style>
