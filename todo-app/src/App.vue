<script>
import CardHeader from "@/components/layout/CardHeader.vue";
import TaskItem from "@/components/tasks/TaskItem.vue";
import CardFooter from "@/components/layout/CardFooter.vue";

export default {
  components: {
    CardHeader,
    TaskItem,
    CardFooter,
  },
  data() {
    return {
      tasks: [
        { id: 1, completed: false },
        { id: 2, completed: false },
        { id: 3, completed: false },
      ],
    };
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
            <TaskItem v-for="task in tasks" :key="task.id" :task="task" />

            <li class="todo-task-add">
              <h2>Add a new task</h2>
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
