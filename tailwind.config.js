module.exports = {
  purge: [
    // Use *.tsx if using TypeScript
    "./pages/**/*.js",
    "./components/**/*.js",
  ],
  theme: {
    colors: {
      bgWhite: "#e0e5ec",
      heartRed: "#e22d48",
    },
    fontFamily: {
      sans: ["Arial", "Microsoft YaHei", "黑体", "宋体", "sans-serif"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        sm: "1rem",
        md: "2rem",
        lg: "2rem",
        xl: "3rem",
        "2xl": "3rem",
      },
    },
  },
  // ...
};
