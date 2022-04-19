"use strict";

const middy = require("@middy/core");
const httpErrorHandler = require("@schibsted/middy-error-handler");
const createError = require("http-errors");
const eventLoopTracer = require("middy-event-loop-tracer");
const profiler = require("middy-profiler");

const { LambdaLog } = require("lambda-log");
const log = new LambdaLog({
  tags: ["foo"],
});

const baseHandler = async (event, context) => {
  log.info("waiting a second", {
    bucket: process.env.MIDDY_PROFILER_S3_BUCKET_NAME,
    event,
    context,
  });
  await new Promise((resolve) => setTimeout(resolve, 1000));
  log.info("done waiting");
  // return ok
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "ok",
    }),
  };
};

const handler = middy(baseHandler)
  .use(eventLoopTracer())
  .use(profiler())
  .use(httpErrorHandler({ logger: log }));

module.exports = { handler };
