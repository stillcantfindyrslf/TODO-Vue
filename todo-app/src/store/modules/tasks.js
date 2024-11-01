function saveTasksToLocalStorage(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

const state = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || [],
  filter: "all",
  taskCounter: 1,
};

const mutations = {
  setFilter(state, filter) {
    state.filter = filter;
  },
  toggleTaskCompletion(state, taskId) {
    const task = state.tasks.find((t) => t.id === taskId);
    if (task) {
      task.completed = !task.completed;
      saveTasksToLocalStorage(state.tasks);
    }
  },
  deleteTask(state, taskId) {
    state.tasks = state.tasks.filter((task) => task.id !== taskId);
    saveTasksToLocalStorage(state.tasks);
  },
  addTask(state, taskTitle) {
    const newTask = {
      id: Date.now(),
      title: taskTitle,
      completed: false,
    };
    state.tasks.push(newTask);
    saveTasksToLocalStorage(state.tasks);
  },
  incrementTaskCounter(state) {
    state.taskCounter += 1;
  },
};

const actions = {
  setFilter({ commit }, filter) {
    commit("setFilter", filter);
  },
  toggleTaskCompletion({ commit }, taskId) {
    commit("toggleTaskCompletion", taskId);
  },
  deleteTask({ commit }, taskId) {
    commit("deleteTask", taskId);
  },
  addTask({ commit, state }) {
    const taskTitle = `New Task ${state.taskCounter} (you can change task by click)`;
    commit("addTask", taskTitle);
    commit("incrementTaskCounter");
  },
};

const getters = {
  filteredTasks: (state) => {
    if (state.filter === "all") return state.tasks;
    if (state.filter === "active")
      return state.tasks.filter((task) => !task.completed);
    if (state.filter === "completed")
      return state.tasks.filter((task) => task.completed);
    return state.tasks;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
