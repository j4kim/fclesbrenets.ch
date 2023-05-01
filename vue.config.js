module.exports = {
  publicPath: process.env.VUE_APP_PATH,
  configureWebpack: {
    resolve: {
      alias: {
        vue$: "vue/dist/vue.esm.js",
      },
    },
  },
};
