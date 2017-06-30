#!/usr/bin/env bash
rm -rf lib
tsc -p .
for nm in lib/*.js lib/**/*.js; do
    mv "$nm" "${nm%.js}.mjs";
done
rollup -c rollup.config.js
tsc -p . --module commonjs
cp package.json lib
cp README.md lib
