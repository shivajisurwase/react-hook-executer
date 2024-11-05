/* @uthor: Shivaji & Shyamal */
/* Perpose : "Allows a programmer to register custom hooks dynamically in React.js" */

import React from 'react';

class HooksExecuter {
    constructor() {
        this.a = {};
        this.tmp = {};
        this.setHook = this.setHook.bind(this);
        this.getHook = this.getHook.bind(this);
        this.putHooks = this.putHooks.bind(this);
    }

    setHook(n, h) {
        [
            { value: n, id: 'name', type: 'string' },
            { value: h, id: 'hook', type: 'function' }
        ].forEach(({ value, id, type }) => {
            if ((type === 'string' && typeof value !== 'string')) {
                throw new TypeError(`"${id}" expected to be of type ${type}`);
            }
        });
        this.a[n] = { n, h };
        return this;
    }

    putHooks(n, r) {
        this.tmp[n] = r;
    }

    component() {
        const EmptyComponent = () => {
            const that = this;
            Object.values(that.a).forEach(({ n, h }) => {
                that.putHooks(n, h());
            });
            return React.createElement(
                React.Fragment,
                null,
            );
        };
        return EmptyComponent;
    }

    getHook(n) {
        return this.tmp[n];
    }
}

const o = new HooksExecuter();
const ReactHooksWrapper = o.component();
const { getHook, setHook } = o;

export { ReactHooksWrapper, getHook, setHook };
