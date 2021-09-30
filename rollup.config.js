import { defineConfig } from 'rollup';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import html from '@rollup/plugin-html';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import purgeCss from '@fullhuman/postcss-purgecss';
import { terser } from 'rollup-plugin-terser';

function getPostCssPlugins() {
    const plugins = [autoprefixer()];

    if (process.env.production) {
        plugins.push(
            purgeCss({
                content: ['src/**/*.js'],
                safelist: ['html', 'body'],
            }),
            cssnano({
                preset: ['default', { discardComments: { removeAll: true } }],
            })
        );
    }

    return plugins;
}

function getRollupPlugins() {
    const plugins = [
        nodeResolve(),
        html({ title: 'Martynas Barzda | JavaScript & Front-end Developer' }),
        postcss({
            plugins: getPostCssPlugins(),
        }),
    ];

    if (process.env.production) {
        plugins.push(
            terser({
                compress: {
                    global_defs: {
                        module: false,
                    },
                },
            })
        );
    }

    return plugins;
}

export default defineConfig({
    input: 'src/index.js',
    output: {
        dir: './public',
    },
    plugins: getRollupPlugins(),
});
