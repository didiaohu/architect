import Vue from 'vue'
import User from '@/page/user/user';

describe('User.vue', () => {
  it('User页面中的H4标题应为页面引入通用组件', () => {
    const Constructor = Vue.extend(User);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.user h4').textContent).to.equal('页面引入通用组件');
  });
});
