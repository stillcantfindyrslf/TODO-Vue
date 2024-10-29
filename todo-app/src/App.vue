<script>
import { mapActions, mapGetters } from "vuex";
import CardHeader from "@/components/layout/CardHeader.vue";
import TaskItem from "@/components/tasks/TaskItem.vue";
import CardFooter from "@/components/layout/CardFooter.vue";

export default {
  components: {
    CardHeader,
    TaskItem,
    CardFooter,
  },
  computed: {
    ...mapGetters("tasks", ["filteredTasks"]),
  },
  methods: {
    ...mapActions("tasks", ["toggleTaskCompletion", "deleteTask", "addTask"]),

    addNewTask() {
      this.addTask();
    },
  },
};
</script>

<template>
  <div class="wrapper">
    <div class="bg-image">
      <img src="@/assets/img/task-list.png" alt="" />
    </div>
    <div class="todo__container">
      <div class="todo-app">
        <CardHeader />
        <div class="todo-list">
          <ul class="todo-tasks">
            <li v-if="filteredTasks.length === 0">
              <h2 class="no-tasks-message">No tasks yet</h2>
            </li>
            <TaskItem
              v-for="task in filteredTasks"
              :key="task.id"
              :task="task"
              @toggle-task="toggleTaskCompletion"
              @delete-task="deleteTask"
            />
            <li class="todo-task-add">
              <button @click="addNewTask">Add a new task</button>
            </li>
          </ul>
        </div>
        <CardFooter />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "./assets/styles/main.scss";
</style>
