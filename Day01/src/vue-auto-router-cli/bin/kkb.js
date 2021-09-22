#!/usr/bin/env node
// 第一行 指定解释器类型

const program = require("commander");
program.version(require("../package").version);
program
  .command("init <name> [owner] [path]")
  .description("init project")
  .action(require('../lib/init'));
program
  .command("refresh")
  .description("refresh routers...")
  .action(require("../lib/refresh"));

program.parse(process.argv);