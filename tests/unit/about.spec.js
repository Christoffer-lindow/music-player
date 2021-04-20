import About from '@/views/About.vue';
import { shallowMount } from '@vue/test-utils';

describe('About.vue', () => {
  test('renders inner text', () => {
    const wrapper = shallowMount(About);
    const actual = wrapper.text();
    const expected = 'about';

    expect(actual).toContain(expected);



  });
});