import { StackContext, Api, Bucket } from "sst/constructs";

export function API({ stack }: StackContext) {
  const api = new Api(stack, "api", {
    routes: {
      "GET /": "packages/functions/src/lambda.handler",
      "GET /hello": "packages/functions/src/hello.handler",
      "GET /jsx": "packages/functions/src/hello-jsx.handler",
    },
  });

  // const bucket = new Bucket()

  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
