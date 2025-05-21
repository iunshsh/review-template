import { defineConfig } from "umi";
import path from "path";
import routes from "./routes";

export default defineConfig({
  npmClient: "pnpm",
  routes: routes,

  // 暂时只有develop，暂直接使用 source-map 未来可替换为 process.env.NODE_ENV === "development" ? "source-map" : false
  codeSplitting: {
    jsStrategy: "granularChunks",
    cssStrategy: "mergeAll"
  },
  devtool: "source-map",
  hash: true,

  chainWebpack(memo: any, { webpack }: { webpack: any }) {
    memo.resolve.alias
      .set("@", path.resolve(__dirname, "src"))
      .set("@components", path.resolve(__dirname, "src/components"))
      .set("@utils", path.resolve(__dirname, "src/utils"))
      .set("@pages", path.resolve(__dirname, "src/pages"));

    memo.plugin("define").use(webpack.DefinePlugin, [
      {
        "process.env.VERSION": JSON.stringify("1.0.0"), // 暂时写死
        __DEV__: process.env.NODE_ENV === "development"
      }
    ]);
  }
});
