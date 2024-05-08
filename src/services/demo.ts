import { Effect, Schedule, pipe, Console } from 'effect';
import type { PokemonDetails } from './PokemonSchema';

export class FetchError {
  readonly _tag = 'FetchError';
  readonly message: string;
  constructor(message: string) {
    this.message = message;
  }
}

export class FetchParsingError {
  readonly _tag = 'FetchError';
  readonly message: string;
  constructor(message: string) {
    this.message = message;
  }
}

export class ProgramError {
  readonly _tag = 'ProgramError';
}

const byTwo = (x: number) => Effect.succeed(x / 2);

const square = (n: number) => Effect.succeed(n ** 2);

const fetchPokemon = Effect.tryPromise({
  try: signal =>
    fetch('https://pokeapi.co/api/v2/pokemon/pikachu', {
      headers: {
        'Application-Type': 'application/json',
      },
      signal,
    }),
  catch: error => new FetchError(`Fetching pokmemon failed${error}`),
});

// reintenta 2 veces si falla la peticion con un delay de 500ms
const policy = Schedule.addDelay(Schedule.recurs(2), () => 500);

const program = pipe(
  Effect.retry(fetchPokemon, policy),
  Effect.flatMap(x => {
    if (!x.ok) return Effect.fail(new FetchParsingError('Fetching pokmemon failed'));
    return Effect.tryPromise({
      try: async () => (await x.json()) as unknown as PokemonDetails,
      catch: () => new FetchParsingError('Parsing json pokmemon failed'),
    });
  })
);

const generic = Effect.gen(function* () {
  const x = yield* Effect.succeed(8);
  const y = yield* byTwo(x);
  const z = yield* square(y);

  // const retryPromise = yield* program;
  // yield* Console.log(retryPromise);
  return z;
});

const math = pipe(
  Effect.succeed(8),
  Effect.flatMap(x => byTwo(x)),
  Effect.flatMap(x => square(x))
);

const sandboxed = Effect.sandbox(program.pipe(Effect.timeout(1000 * 5)));

const program2 = Effect.catchTags(sandboxed, {
  Die: cause => Console.log(`Caught a defect: ${cause.defect}`).pipe(Effect.as(new ProgramError())),
  Interrupt: cause =>
    Console.log(`Caught a defect: ${cause.fiberId}`).pipe(Effect.as(new ProgramError())),
  Fail: cause => Console.log(`Caught a defect: ${cause.error}`).pipe(Effect.as(new ProgramError())),
});

Effect.runPromise(Effect.unsandbox(program2)).then(x => {
  if(x instanceof ProgramError) return;

  console.log(x.name, x.forms);
});

export const run = () => Effect.runSync(generic);

//Effect.runPromise(math).then(console.log);
