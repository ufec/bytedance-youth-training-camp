import inquirer from "inquirer";

export function question({ packageName = "koa-setup"}) {
  return inquirer.prompt([
    {
      type: "input",
      name: "packageName",
      message: "set package name",
      default: () => packageName,
    },
    {
      type: "number",
      name: "port",
      message: "set system port",
      default: () => 8000,
    },
    {
      type: "checkbox",
      name: "middleware",
      choices: [{ name: "koaStatic" }, { name: "koaRouter" }],
    },
  ]);
}
