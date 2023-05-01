import Vue from "vue";

Vue.component('calendar', {
  template: '<i>Calendrier ici</i>'
})

// Credit: https://adrianjost.medium.com/how-to-render-an-html-string-with-custom-vue-components-2c9989a81a1
export default {
  props: {
    html: {
      type: String,
      default: "",
    },
  },
  data() {
    return { templateRender: undefined };
  },
  watch: {
    html(to) {
      this.updateRender();
    },
  },
  created() {
    this.updateRender();
  },
  methods: {
    updateRender() {
      const wrapped = `<div class="article-content">${this.html}</div>`;
      const compiled = Vue.compile(wrapped);
      this.templateRender = compiled.render;
      this.$options.staticRenderFns = [];
      for (const staticRenderFunction of compiled.staticRenderFns) {
        this.$options.staticRenderFns.push(staticRenderFunction);
      }
    },
  },
  render() {
    return this.templateRender();
  },
};
