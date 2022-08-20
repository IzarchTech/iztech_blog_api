import envSchema from "env-schema";
import { Type, Static } from "@sinclair/typebox";

const schema = Type.Object({
  PORT: Type.Number({
    default: 4001,
  }),
  DB_NAME: Type.String(),
  DB_HOST: Type.String({
    default: 'localhost',
  }),
  DB_PORT: Type.Number(),
  DB_USER: Type.String(),
  DB_PASSWORD: Type.String(),
});

type Env = Static<typeof schema>;

export const config = envSchema<Env>({
  schema,
  dotenv: true,
});
