import store from "@/store";


describe("Vuex - tasks module", () => {
  it("add a new task", () => {
    store.commit("tasks/addTask", "New Task");
    expect(store.state.tasks.tasks).toHaveLength(1);
    expect(store.state.tasks.tasks[0].title).toBe("New Task");
  });
});
