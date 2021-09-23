export function createConfig(inputContent) {
  const matchMiddleware = (name) => {
    return inputContent.middleware.indexOf(name) != -1;
  }
  return {
    packageName: inputContent.packageName,
    port: inputContent.port,
    middleware: {
      router: matchMiddleware('koaRouter'),
      static: matchMiddleware('koaStatic'),
    }
  };
}