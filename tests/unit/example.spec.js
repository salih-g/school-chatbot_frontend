import { shallowMount } from '@vue/test-utils';
import ChatBox from '@/components/ChatBox.vue';

describe('ChatBox.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(ChatBox, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
