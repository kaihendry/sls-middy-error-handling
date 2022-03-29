# Response from throwing an error

Uses [lambda-log](https://lambdalog.dev/) thanks to https://github.com/schibsted/middy-error-handler/issues/63

E.g. `throw new createError.InternalServerError("something went wrong");`

    {
      "statusCode": 500,
      "message": "something went wrong",
      "stack": "InternalServerError: something went wrong\n    at baseHandler (/var/task/handler.js:14:9)\n    at runRequest (/var/task/node_modules/@middy/core/index.js:86:32)"
    }

# Profiler

https://github.com/serkan-ozal/middy-profiler

<img src="https://s.natalian.org/2022-03-29/1648528442_1918x1047.png">

Example https://s.natalian.org/2022-03-29/cpu_profile.cpuprofile
