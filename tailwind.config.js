/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            Poppins: ["Poppins", "sans-serif"],
            Proxima: ["Proxima Nova Condensed", "sans-serif"],
            Cambay: ["Cambay", "sans-serif"],
        },
        extend: {
            colors: {
                brand: {
                    "space-cadet": "#17183B",
                    verdigris: "#3AA39F",
                },
            },
        },
    },
    darkMode: "class",
    plugins: [require("tailwindcss-debug-screens")],
};
