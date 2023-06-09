## Commands

To run the server:

```Bash
npx nodemon
```

To run the database:

```Bash
docker compose up
```

Connect to database:

```Bash
docker exec -it surfspot-postgres bash
psql -U postgres
\d  # Show tables
```

## Architecture

How you build this thing really depends on how much historical data you want to store.

As a bare minimum, you need a database to store the surf breaks (location, name, etc) to avoid data loss.

The forecasts themselves are less important and don't need to be persisted. You could probably use something like Redis and just keep them in memory. If the Redis instance died, it wouldn't matter long-term since you'd be updating every forecast on a schedule anyway.

Commands to start project:

```Bash
npm init
npm i --save-dev typescript ts-node nodemon @types/express @types/node
npm i express node

# Then use npx to create tsconfig.json file, then edit it
npx tsc --init

# Setup typescript-eslint
npm i --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint

# Create an .eslintrc.cjs file and add config to it.
```
