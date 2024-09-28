import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";
import reactRefresh from "@vitejs/plugin-react-refresh";
import tailwindcss from "tailwindcss";

export default defineConfig({
    server: {
        hmr: {
            host: "localhost",
        },
    },
    plugins: [
        react(),
        reactRefresh(),
        laravel({
            input: ["resources/css/app.css", "resources/react/app.tsx"],
            refresh: true,
        }),
        tailwindcss("./tailwind.config.js"),
    ],
});
