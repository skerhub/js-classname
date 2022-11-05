import { babel } from "@rollup/plugin-babel";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import clear from 'rollup-plugin-clear'
export default {
  input: "./src/index.ts",
  output: [
    {format: "es",file: "./dist/index.esm.js",name:'index.esm',exports:'named'},
    {format: "cjs",file: "./dist/index.cjs.js",name:'index.cjs',exports:'named'},
    {format: "umd",file: "./dist/index.umd.js",name:'index.umd',exports:'named'},
  ],
  plugins: [
    clear({
      targets: ['dist'],
    }),
    typescript(),
    babel({
      babelHelpers: 'runtime',
      exclude: ["node_modules/**"],
    }),
    terser()
  ],
};
