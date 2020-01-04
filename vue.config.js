module.exports = {
  configureWebpack: {
    devServer: {
      proxy: {
        // /api/upload というリクエストが http://localhost:3000/upload にリライトされる
        "/api": {
          target: "http://localhost:3000",
          pathRewrite: {
            "^/api": ""
          }
        }
      }
    }
  }
};
