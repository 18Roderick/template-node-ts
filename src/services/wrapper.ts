import { Effect, Console, Schedule, Fiber } from "effect";
const program = Effect.repeat(
  Console.log("running..."),
  Schedule.spaced(500)
);
const fiber = Effect.runFork(program);
console.log(fiber.id())
setTimeout(() => {
  Effect.runFork(Fiber.interrupt(fiber));
}, 1000 * 1);
