import { Hono } from "hono";
import { handle } from "hono/aws-lambda";

const app = new Hono();

const route = app.get("/", (c) => {
  return c.json({ message: "Hello Hono!", name: "hi", age: 10 });
});

export type RouteType = typeof route;

export const handler = handle(app);
