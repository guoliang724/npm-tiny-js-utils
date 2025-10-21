import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";

const outputConfig = [
  // commonjs
  {
    file: "dist/tiny-js-util.cjs.js",
    format: "cjs",
    exports: "default",
  },
  // esm
  {
    file: "dist/tiny-js-util.esm.js",
    format: "esm",
    exports: "named",
  },
  // umd for browser
  {
    file: "dist/tiny-js-util.umd.js",
    format: "umd",
    name: "TinyJsUtil",
    exports: "default",
  },
];

export default outputConfig.map((config) => ({
  input: "src/index.ts",
  output: { ...config },
  plugins: [typescript(), resolve(), commonjs(), terser()],
}));
