/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    media: false,
    important: true,
    theme: {
        extend: {}
    },
    daisyui: {
        themes: [
            {
                tpwTheme: {
                    primary: "#00684A",
                    secondary: "#1C2D38",
                    accent: "#B45AF2",
                    neutral: "#C1C7C6",
                    "base-100": "#FFFFFF",
                    info: "#016BF8",
                    success: "#00A35C",
                    warning: "#FFC010",
                    error: "#DB3030"
                }
            }
        ]
    },
    plugins: [require("daisyui")]
};
