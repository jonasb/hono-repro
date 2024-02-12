## Hono repro

Repro for https://github.com/honojs/hono/issues/2164

## Steps to reproduce

- `npm install`
- `npm start`
- `curl http://localhost:8001/normal-error` -> 500, can be run multiple times
- `curl http://localhost:8001/sse-error` -> 200, sends "data: Hello" and then closes the connection, server stops responding after this
