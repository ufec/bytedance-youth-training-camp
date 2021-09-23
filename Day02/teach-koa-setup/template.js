import ejs from "ejs";
import fs from "fs";
import prettier from "prettier";
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export function createIndexTemplate(inputConfig) {
  const indexTemplate = fs.readFileSync(path.resolve(__dirname, "template/index.ejs"), "utf-8");
  const indexJs = ejs.render(indexTemplate, {
    router: inputConfig.middleware.router, // 是否需要路由
    static: inputConfig.middleware.static, // 静态资源目录
    port: inputConfig.port, // 端口
  });
  return prettier.format(indexJs, {
    parser: "babel"
  });
}

export function createPackageJsonTemplate(inputConfig) {
  const packageJsonTemplate = fs.readFileSync(path.resolve(__dirname, "template/package.json.ejs"), "utf-8");
  const packageJson = ejs.render(packageJsonTemplate, {
    router: inputConfig.middleware.router, // 是否需要路由
    static: inputConfig.middleware.static, // 静态资源目录
    packageName: inputConfig.packageName
  });
  return prettier.format(packageJson, {
    parser: "json"
  });
}
