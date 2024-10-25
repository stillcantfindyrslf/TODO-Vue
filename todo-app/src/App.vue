<script>
import Header from "@/components/layout/Header.vue";
import TaskItem from "@/components/tasks/TaskItem.vue";
import Footer from "@/components/layout/Footer.vue";

export default {
  components: {
    Header,
    TaskItem,
    Footer,
  },
  data() {
    return {
      tasks: [
        { id: 1, name: "Task 1", completed: false },
        { id: 2, name: "Task 2", completed: false },
        { id: 3, name: "Task 3", completed: false },
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
        <Header />
        <div class="todo-list">
          <ul class="todo-tasks">
            <TaskItem v-for="task in tasks" :key="task.id" :task="task" />

            <li class="todo-task-add">
              <h2>Add a new task</h2>
            </li>
          </ul>
        </div>
        <Footer />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "./assets/styles/main.scss";
</style>
