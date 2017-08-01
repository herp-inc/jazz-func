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
