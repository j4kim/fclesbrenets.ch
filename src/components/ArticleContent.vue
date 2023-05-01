<script>
import Vue from "vue";
import Calendar from "./Calendar";

// Credit: https://adrianjost.medium.com/how-to-render-an-html-string-with-custom-vue-components-2c9989a81a1
export default {
  components: {
    Calendar
  },
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
</script>

<style>
@container (min-width: 700px) {
  .article-content {
    font-size: 20px;
  }
}
@container (max-width: 500px) {
  .article-content {
    font-size: 16px;
  }
}
</style>