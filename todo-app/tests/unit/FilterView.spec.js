import { mount } from '@vue/test-utils';
import FilterView from '@/components/filters/FilterView.vue';
import store from "@/store";


let wrapper;
beforeEach(() => {
    wrapper = mount(FilterView, {
        global: {
            plugins: [store],
        },
    });
})

describe('FilterView.vue', () => {
    it('renders filter buttons correctly', () => {
        const buttons = wrapper.findAll('button');
        expect(buttons).toHaveLength(3);
        expect(buttons[0].text()).toBe('All');
        expect(buttons[1].text()).toBe('Active');
        expect(buttons[2].text()).toBe('Completed');
    });

    it('applies active class to the selected filter button', async () => {
        store.state.tasks.filter = 'active';

        await wrapper.vm.$nextTick();

        const activeButton = wrapper.find('.active');
        expect(activeButton.text()).toBe('Active');
    });
});
