import type { Hono } from "hono";
import { runtime, runtimeInfo } from "std-env";

export const Runner = async (port: number, app: Hono) => {
  console.log(runtimeInfo, runtime);

  if (runtime === "node") {
    const runtimeOS = await import("@hono/node-server");

    console.log(runtimeOS)
  }
};
