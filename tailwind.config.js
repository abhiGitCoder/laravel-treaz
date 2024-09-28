module.exports = {
    content: [
        "./resources/**/*.html",
        "./resources/**/*.js",
        "./resources/**/*.jsx",
        "./resources/**/*.ts",
        "./resources/**/*.tsx",
    ],
    theme: {
        extend: {
            colors: {
                yellow: "#F7FF00",
            },
            fontFamily: {
                MontBold: ["MontBold"],
                MontRegular: ["MontRegular"],
                MontSemibold: ["MontSemibold"],
            },
            boxShadow: {
                lightblue: "0 0 30px rgba(0, 171, 255, 0.8)",
            },
        },
    },
    plugins: [require("@tailwindcss/aspect-ratio")],
};
