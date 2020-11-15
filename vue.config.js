module.exports = {
  pages: {
    index: {
      // точка входа для страницы
      entry: 'src/index.js',
      // исходный шаблон
    },
  },

  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "~@/theme/variables";',
      },
    },
  },

  lintOnSave: false,
}
