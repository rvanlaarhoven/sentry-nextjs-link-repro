/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { webpack }) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        __SOMETHING__: false,
      })
    );
    return config;
  },
};

module.exports = nextConfig;
