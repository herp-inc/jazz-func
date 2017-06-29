import resolve from 'rollup-plugin-node-resolve';

export default {
    entry: 'lib/index.mjs',
    format: 'cjs',
    plugins: [resolve({
        extensions: [ '.mjs', '.js' ]

    })],
    dest: 'lib/index.js'
};
