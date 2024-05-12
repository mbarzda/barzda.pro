import OpenProps from 'open-props';
import postcssJitProps from 'postcss-jit-props';

/** @type {import('vite').CSSOptions['postcss']} */
export default { plugins: [postcssJitProps(OpenProps)] };
