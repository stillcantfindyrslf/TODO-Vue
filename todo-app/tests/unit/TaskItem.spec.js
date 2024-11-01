import { mount } from "@vue/test-utils";
import TaskItem from "@/components/tasks/TaskItem.vue";


describe("TaskItem.vue", () => {
  const task = { id: 1, title: "Test Task", completed: false };

  it("renders task item correctly", () => {
    const wrapper = mount(TaskItem, {
      props: { task },
    });
    const input = wrapper.find('input[type="text"]');
    expect(input.element.value).toBe("Test Task");
  });

  it('emits "toggle-task" event when checkbox is clicked', async () => {
    const wrapper = mount(TaskItem, {
      props: { task },
    });

    await wrapper.find('input[type="checkbox"]').trigger("change");
    expect(wrapper.emitted()["toggle-task"]).toBeTruthy();
    expect(wrapper.emitted()["toggle-task"][0]).toEqual([1]);
  });

  it('emits "delete-task" event when delete button is clicked', async () => {
    const wrapper = mount(TaskItem, {
      props: { task },
    });

    await wrapper.find("button").trigger("click");
    expect(wrapper.emitted()["delete-task"]).toBeTruthy();
    expect(wrapper.emitted()["delete-task"][0]).toEqual([1]);
  });

  it("updates task title when edited", async () => {
    const wrapper = mount(TaskItem, {
      props: { task },
    });

    const input = wrapper.find('input[type="text"]');
    await input.setValue("Updated Task");
    expect(input.element.value).toBe("Updated Task");
  });
});
