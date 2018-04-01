import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';

export default {
  input: 'src/index.js',
  output: {
    file: 'lib/index.js',
    format: 'cjs',
  },
  external: ['react'],
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers'],
    }),
    commonjs({
      include: ['node_modules/**'],
    }),
    uglify({
      sourceMap: false,
    }),
  ],
};
