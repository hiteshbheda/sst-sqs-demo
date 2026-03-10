import { StackContext, Api, Queue } from "sst/constructs";

export function ApiStack({ stack }: StackContext) {

  const queue = new Queue(stack, "JobQueue", {
    consumer: {
      function: "packages/functions/src/worker.handler",
    },
  });

  const api = new Api(stack, "Api", {
    routes: {
      "POST /job": "packages/functions/src/sendJob.handler",
    },
  });

  api.bind([queue]);

  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}