export default {
  install: (app) => {
    const globalComponentsPaths = import.meta.globEager('@/assets/icons/**/*.svg', { as: 'raw' });
    Object.entries(globalComponentsPaths).forEach(([path, module]) => {
      // "./assets/icons/fileName.svg" -> "fileNameIcon.vue"
      const fileName = path
        .split('/')
        .pop()
        .replace(/\.svg$/, '');
      const componentName = `${fileName}-icon`;
      const template = module.replace(/\n/g, '');

      app.component(componentName, { template });
    });
  },
}
