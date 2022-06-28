import { defineConfig } from 'vite'
import viteImagemin from 'vite-plugin-imagemin'

export default defineConfig({
    root: 'src',
    plugins: [
        viteImagemin({
            gifsicle: {
                optimizationLevel: 5,
                interlaced: false,
            },
            optipng: {
                optimizationLevel: 5,
            },
            mozjpeg: {
                quality: 82,
            },
            pngquant: {
                quality: [0.8, 0.9],
                speed: 4,
            },
            svgo: {
                plugins: [
                    {
                        name: 'removeViewBox',
                    },
                    {
                        name: 'removeEmptyAttrs',
                        active: false,
                    },
                ],
            },
        }),
    ],
    build: {
        outDir: '../dist',
        emptyOutDir: true,
    },
    server: {
        open: true,
    },
})
