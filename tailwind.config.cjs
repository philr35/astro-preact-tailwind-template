/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    daisyui: {
        themes: [
            {
                tpwTheme: {
                    accent: "#B45AF2",
                    "base-100": "#FFFFFF",
                    error: "#DB3030",
                    info: "#016BF8",
                    neutral: "#C1C7C6",
                    primary: "#00684A",
                    secondary: "#1C2D38",
                    success: "#00A35C",
                    warning: "#FFC010"
                }
            }
        ]
    },
    important: true,
    media: false,
    plugins: [require("daisyui")],
    theme: {
        extend: {}
    }
};
