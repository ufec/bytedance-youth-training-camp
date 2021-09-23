#!/usr/bin/env node
// 第一行 指定解释器类型

import program from "commander";
import { index } from "../index.js";
// import path from "path";
// import { fileURLToPath } from "url";
// const __dirname = path.dirname(fileURLToPath(import.meta.url));

program.version("1.0.0");
program
  .command("init <path>")
  .description("init project")
  .action(index);

program.parse(process.argv);