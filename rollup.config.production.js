import resolve from 'rollup-plugin-node-resolve';
// import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import {uglify} from 'rollup-plugin-uglify';
import {terser} from 'rollup-plugin-terser';
import pkg from './package.json';
import path from 'path';

export default [
  // browser-friendly UMD build
  {
    input: 'src/index.js',
    output: {
      name: 'Vector',
      globals: 'Vector',
      file: path.join(__dirname, 'dist', [path.parse(pkg.browser).name, 'min', 'js'].join('.')),
      format: 'umd'
    },
    plugins: [
      resolve(),
      babel({
        exclude: 'node_modules/**' // 只编译我们的源代码
      }),
      uglify()
    ]
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify
  // `file` and `format` for each target)
  {
    input: 'src/index.js',
    external: ['big.js'],
    output: [
      {
        file: path.join(__dirname, 'dist', [path.parse(pkg.main).name, 'min', 'js'].join('.')),
        format: 'cjs'
      }
    ],
    plugins: [
      resolve(),
      babel({
        exclude: 'node_modules/**' // 只编译我们的源代码
      }),
      uglify()
    ]
  },

  {
    input: 'src/index.js',
    external: ['big.js'],
    output: [
      {
        file: path.join(__dirname, 'dist', [path.parse(pkg.module).name, 'min', 'js'].join('.')),
        format: 'es'
      }
    ],
    plugins: [
      resolve(),
      babel({
        exclude: 'node_modules/**' // 只编译我们的源代码
      }),
      terser()
    ]
  }
];
