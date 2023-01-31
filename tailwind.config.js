/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

module.exports = {
  corePlugins: {
    container: false,
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": " 0px 0px 27px rgba(0, 0, 0, 0.05);",
      },
      fontSize: {
        sm: "0.8rem",
        Content: "21px",
        list: "18px",
        45: "45px",
        13: "13px",
        25: "25px",
        14: "14px",
        16: "16px",
        30: "30px",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
      fontWeight: {
        thin: "100",
        hairline: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        "extra-bold": "800",
        black: "900",
      },
      lineHeight: {
        "extra-loose": "2.5",
        12: "3rem",
        13: "13rem",
        32: "32px",
        20: "20px",
        40: "40px",
        21: "21px",
        18: "18px",
        24: "24px",
        38: "38px",
        68: "68px",
        27: "27px",
      },
      colors: {
        while: "#ffffff",
        gray72: "#727272",
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
      },
      lineHeight: {
        "extra-loose": "2.5",
        12: "3rem",
        72: "72px",
      },
      spacing: {
        18: "18px",
        13: "13px",
      },
      gridTemplateColumns: {
        4: "repeat(4, 1fr)",
      },
      gridRowStart: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
        14: "14",
        15: "15",
        16: "16",
      },
      gridRowEnd: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
        14: "14",
        15: "15",
        16: "16",
      },
      gridColumnStart: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
        14: "14",
        15: "15",
        16: "16",
      },
      gridColumnEnd: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
        14: "14",
        15: "15",
        16: "16",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "640px",
          },
          "@screen md": {
            maxWidth: "768px",
          },
          "@screen lg": {
            maxWidth: "1200px",
          },
          "@screen xl": {
            maxWidth: "1200px",
          },
        },
      });
    },
  ],
};
