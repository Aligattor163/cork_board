import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from "path";

export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            "/api": {
                target: "http://localhost:3001",
                changeOrigin: true,
                rewrite: (path) => path
            }
        }
    },
    resolve: {
        alias: {
            "@shared": resolve(__dirname, "../shared")
        }
    }
})
