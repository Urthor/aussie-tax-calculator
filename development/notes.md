#### TODO

- Code coverage.
- 



npm install --save-dev ts-node nodemon

nodemon.json
{{{
{
"watch": ["src"],
"ext": ".ts,.js",
"ignore": [],
"exec": "npx ts-node ./src/index.ts"
}
}}}

Watches ts files for changes.

Run nodemon

{{{
nodemon
}}}