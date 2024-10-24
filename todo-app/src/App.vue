<script setup></script>

<template>
  <div class="wrapper">
    <div class="bg-image">
      <img src="../public/img/task-list.png" alt="" />
    </div>
    <div class="todo__container">
      <section class="todo-app">
        <div class="todo-header">
          <h1>to do list</h1>
        </div>
        <div class="todo-list">
          <ul class="task-list">
            <li class="todo-task">
              <input type="checkbox" id="task1" class="task-check-box" />
              <label class="task-label" for="task1">Task 1</label>
              <button class="task-delete">✖</button>
            </li>
            <li class="todo-task">
              <input type="checkbox" id="task2" class="task-check-box" />
              <label class="task-label" for="task2">Task 2</label>
              <button class="task-delete">✖</button>
            </li>
            <li class="todo-task">
              <input type="checkbox" id="task3" class="task-check-box" />
              <label class="task-label" for="task3">Task 3</label>
              <button class="task-delete">✖</button>
            </li>
            <li class="todo-task-add">
              <h2>Add a new task</h2>
            </li>
          </ul>
        </div>
        <div class="todo-footer">
          <div class="footer-items">
            <div class="pages">
              <h1>1/3 left</h1>
            </div>
            <div class="filter-holder">
              <button class="filter active">All</button>
              <button class="filter">Active</button>
              <button class="filter">Completed</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss">
@import "./assets/styles/main.scss";
</style>
