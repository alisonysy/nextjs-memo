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
        DEFAULT: "1rem",
        sm: "1rem",
        md: "1.5rem",
        lg: "1.5rem",
      },
    },
    boxShadow: {
      neu:
        "9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255, 0.5)",
      pressed:
        "inset 6px 6px 10px 0 rgba(0, 0, 0, 0.2), inset -6px -6px 10px 0 rgba(255, 255, 255, 0.5)",
    },
  },
  // ...
};
