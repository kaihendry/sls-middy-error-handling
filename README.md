# Response from throwing an error

Uses [lambda-log](https://lambdalog.dev/) thanks to https://github.com/schibsted/middy-error-handler/issues/63

E.g. `throw new createError.InternalServerError("something went wrong");`

    {
      "statusCode": 500,
      "message": "something went wrong",
      "stack": "InternalServerError: something went wrong\n    at baseHandler (/var/task/handler.js:14:9)\n    at runRequest (/var/task/node_modules/@middy/core/index.js:86:32)"
    }
