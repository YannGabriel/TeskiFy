module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightBlue: "#90e0ef",
        darkBlue: "#00b4d8",
        pastelBlue: "#0077b6",
      },
      animation: {
        spin360: "spin360 1s linear infinite", // Adiciona a animação spin360
      },
      keyframes: {
        spin360: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
