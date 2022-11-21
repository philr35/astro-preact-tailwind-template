import node from "@astrojs/node";
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
    adapter: node({
        mode: "middleware"
    }),
    integrations: [
        preact({
            compat: true
        }),
        tailwind(),
        compress()
    ],
    output: "server",
    server: {
        host: true,
        port: 3000
    },
    site: "https://hermes-ui.cloud-ops.prod.corp.mongodb.com"
});
