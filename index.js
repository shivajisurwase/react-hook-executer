/* @uthor: Shivaji & Shyamal */
/* Perpose : "Allows a programmer to easily register custom hooks dynamically in React.js." */
import sss from 'react';

class HooksExecuter {
  constructor() {
    this.a = {};
    this.s = {};
    this.setHook = this.setHook.bind(this);
    this.getHook = this.getHook.bind(this);
    this.putHooks = this.putHooks.bind(this);
  }
  setHook(t, o) {
    [
      { value: t, id: 'name', type: 'string' },
      { value: o, id: 'hook', type: 'function' },
    ].forEach(({ value: t, id: o, type: e }) => {
      if (e === 'string' && typeof t !== 'string') {
        throw new TypeError(`"${o}" expected to be of type ${e}`);
      }
    });
    this.a[t] = {
      name: t,
      hook: o,
    };
    return this;
  }
  putHooks(t, o) {
    this.s[t] = o;
  }
  component() {
    const o = () => {
      const o = this;
      Object.values(o.a).forEach(({ name: t, hook: e }) => {
        o.putHooks(t, e());
      });
      return /*#__PURE__*/ sss.createElement(sss.Fragment, null);
    };
    return o;
  }
  getHook(t) {
    return this.s[t];
  }
}
const instance = new HooksExecuter();
const ReactHooksWrapper = instance.component();
const { getHook: o, setHook: e } = instance;
export { ReactHooksWrapper, o as getHook, e as setHook };
