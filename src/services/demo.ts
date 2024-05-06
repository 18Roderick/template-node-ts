import { Effect, pipe } from "effect";
import type { PokemonDetails } from "./PokemonSchema";

const byTwo = (x: number) => Effect.succeed(x / 2);

const square = (n: number) => Effect.succeed(n ** 2);

const fetchPokemon = Effect.tryPromise({
  try: (signal) =>
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu", {
      headers: {
        "Application-Type": "application/json",
      },
      signal,
    }),
  catch: (error) => new Error(`Fetching pokmemon failed${error}`),
});

const program = pipe(
  fetchPokemon,
  Effect.flatMap((x) => {
    if (!x.ok) return Effect.fail(new Error("Fetching pokmemon failed"));
    return Effect.tryPromise({
      try: async () => (await x.json()) as unknown as PokemonDetails,
      catch: () => new Error("Parsing json pokmemon failed"),
    });
  }),
);

const math = pipe(
  Effect.succeed(8),
  Effect.flatMap((x) => byTwo(x)),
  Effect.flatMap((x) => square(x))
);

Effect.runPromise(program).then(x => {
  console.log(x.name, x.species);
});
//Effect.runPromise(math).then(console.log);
