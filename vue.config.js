module.exports = {
  // pages: {
  //   index: {
  //     entry: 'src/entry.js',
  //   },
  // },

  css: {
    loaderOptions: {
      scss: {
        sassOptions: {
          prependData: '@import "~@/theme/variables";',
        },
      },
    },
  },

  lintOnSave: false,
}
