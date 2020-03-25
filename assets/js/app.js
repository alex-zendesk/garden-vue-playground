import Client from "./services/client.js";
import {configure} from "./components/garden-vue/components.js";
import Main from "./components/main.js";
import Store from "./services/store.js";

document.addEventListener('DOMContentLoaded', () => {
  Client.init(() => {
    configure(Vue);

    Vue.component('quick-preview', {
      props: {
        code: {
          type: String,
          required: true
        },
        grid: {
          type: Number,
          required: false
        }
      },
      data: () => ({
        renderFn: null,
      }),
      render(h) {
        return h('div', {class: `example ${this.grid ? 'grid-'+this.grid : ''}`}, [this.renderFn ? this.renderFn() : '']);
      },
      mounted() {
        const { render } = Vue.compile(`<template>${this.code}</template>`);

        this.renderFn = render;
      }
    });

    new Vue({
      el: '#app',
      store: Store,
      render: function(h) {
        return h(Main);
      },
      mounted() {
        Prism.highlightAll();
      }
    });
  });
});
