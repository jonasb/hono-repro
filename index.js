import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { streamSSE } from "hono/streaming";

const app = new Hono();

app.get("/normal-error", (c) => {
  throw new Error("Test error");
});

app.get("/sse-error", (c) =>
  streamSSE(c, async (stream) => {
    stream.writeSSE({ data: "Hello" });
    throw new Error("Test error");
  })
);

const port = 8001;
console.log(`Server is running on port ${port}`);

serve({ fetch: app.fetch, port });
