import { initMiniStar } from 'mini-star';

console.log('Hello World');

initMiniStar({
  plugins: [
    {
      name: 'demo',
      url: 'plugins/demo/index.js',
    },
  ],
  pluginUrlBuilder: (pluginName) => `plugins/${pluginName}/index.js`,
});
