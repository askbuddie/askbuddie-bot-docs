// bootstrapped from https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config

module.exports = {
  webpack: (config, options) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    config.module.rules.push({
      test: /\.svg$/i,
      use: '@svgr/webpack'
    });

    // Important: return the modified config
    return config;
  },
  images: {
    disableStaticImages: true // refer: https://stackoverflow.com/a/68012194
  }
};
