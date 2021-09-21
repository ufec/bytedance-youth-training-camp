#!/usr/bin/env node
// 第一行 指定解释器类型

const program = require("commander");
program.version(require("../package").version);
program
  .command("init <name>")
  .description("init project")
  .action((name) => {
    console.log("init" + name);
  });

program.parse(process.argv);
