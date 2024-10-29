const state = {
  tasks: [
    { id: 1, title: "Task 1", completed: false },
    { id: 2, title: "Task 2", completed: true },
    { id: 3, title: "Task 3", completed: false },
  ],
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
    }
  },
  deleteTask(state, taskId) {
    state.tasks = state.tasks.filter((task) => task.id !== taskId);
  },
  addTask(state, taskTitle) {
    state.tasks.push({
      id: Date.now(),
      title: taskTitle,
      completed: false,
    });
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
    const taskTitle = `New Task ${state.taskCounter}`;
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
