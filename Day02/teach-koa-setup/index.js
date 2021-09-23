import fs from "fs";
import { createConfig } from "./config.js";
import { question } from "./question/index.js";
import { createIndexTemplate, createPackageJsonTemplate } from "./template.js";
import execa from "execa";
import path from "path";

export async function index(pathName){
  let ROOT_PATH = path.resolve(process.cwd(), pathName);
  // 获取用户输入
  const inputContent = await question({packageName: pathName});
  // 生成配置文件
  const config = createConfig(inputContent);

  // 1、创建文件夹（项目名）
  fs.mkdirSync(ROOT_PATH);
  // 2、创建主文件
  fs.writeFileSync(ROOT_PATH + "/index.js", createIndexTemplate(config));
  // 3、创建 package.json 文件
  fs.writeFileSync(
    ROOT_PATH + "/package.json",
    createPackageJsonTemplate(config)
  );
  // 4、安装依赖
  execa("yarn", {
    cwd: ROOT_PATH,
  }).stdout.pipe(process.stdout);
};
