"use strict";

const middy = require("@middy/core");
const httpErrorHandler = require("@schibsted/middy-error-handler");
const createError = require("http-errors");

const { LambdaLog } = require("lambda-log");
const log = new LambdaLog({
  tags: ["foo"],
});

const baseHandler = async (event) => {
  log.info("starting up");
  throw new createError.InternalServerError("something went wrong");
};

const handler = middy(baseHandler).use(httpErrorHandler({ logger: log }));

module.exports = { handler };
