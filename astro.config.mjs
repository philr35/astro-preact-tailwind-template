import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
    output: "server",
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
    server: {
        host: true,
        port: 3000
    },
    site: "https://hermes-ui.cloud-ops.prod.corp.mongodb.com"
});
