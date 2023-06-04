/**
 * @type {import('next').NextConfig}
 */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  images: {
    domains: [
      "flytime-media.s3.us-east-2.amazonaws.com",
      "images.app.goo.gl/Ses84qpLP5u2QQyg8",
    ],
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
};

module.exports = nextConfig;

module.exports = withBundleAnalyzer();
