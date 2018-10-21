#!/usr/bin/env bash
rm -rf lib
tsc -p .
for nm in lib/*.js lib/**/*.js; do
    mv "$nm" "${nm%.js}.mjs";
done
tsc -p . --module commonjs
rollup -c rollup.config.js
cp package.json lib
cp README.md lib
find ./lib -name '*.test.js' -or -name '*.test.mjs' -or -name '*.test.d.ts' | xargs rm
