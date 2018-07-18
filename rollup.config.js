import resolve from '_rollup-plugin-node-resolve@3.3.0@rollup-plugin-node-resolve';
// import commonjs from 'rollup-plugin-commonjs';
import babel from '_rollup-plugin-babel@3.0.7@rollup-plugin-babel';
import pkg from './package.json';

export default [
  // browser-friendly UMD build
  {
    input: 'src/index.js',
    output: {
	  name: 'Vector',
	  globals: 'Vector',
      file: pkg.browser,
      format: 'umd'
    },
    plugins: [
      resolve(),
	  babel({
		  exclude: 'node_modules/**' // 只编译我们的源代码
		})
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
      { file: pkg.main, format: 'cjs'},
      { file: pkg.module, format: 'es' }
	],
	  plugins: [
		  resolve(),
		  babel({
			  exclude: 'node_modules/**' // 只编译我们的源代码
		  })
	  ]
  }

];