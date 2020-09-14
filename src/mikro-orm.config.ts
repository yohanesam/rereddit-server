import { Post } from "./entities/Post";
import { __prod__ } from "./constants";
import { MikroORM } from "@mikro-orm/core";
import path from "path";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"), // path to the folder with migrations
    pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files
  },
  entities: [Post],
  dbName: "rereddit",
  type: "postgresql",
  host: "localhost",
  port: 5432,
  debug: !__prod__, // one of `mongo` | `mysql` | `mariadb` | `postgresql` | `sqlite`
} as Parameters<typeof MikroORM.init>[0];
