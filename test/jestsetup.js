import { shallow, render, mount } from 'enzyme';

global.shallow = shallow;
global.render = render;
global.mount = mount;

console.error = (msg) => {
  throw new Error(msg);
};
