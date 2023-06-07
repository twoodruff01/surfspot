What language to use...

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

To run the server:

```Bash
npx nodemon
```
