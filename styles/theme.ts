export const color = {
  white: "rgba(255,255,255,1)",
  black: "#111",
  black100: "rgba(0,0,0,0.1)",
  navy: "rgba(22, 27, 32, 1)",
  navy100: "rgba(6, 13, 23, 0.1)",
  yellow: "#ffcd2b",
  red: "#d30000",
  borderColor: "#c9d6df",
  lightGray: "#bbb",
  gray: "rgba(58,58,58,1)",
  gray700: "rgba(58,58,58,0.7)",
  gray800: "rgba(58,58,58,0.8)",
};

export const mixins = {
  flexBox: (direction = 'row', align = 'center', justify = 'center') => `
    display: flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content: ${justify};
  `,

  fadeIn: (isVisible: boolean, transformY: boolean, duration: number, delay: number) => `
    opacity: ${isVisible ? "1" : "0"};
    transform: translateY(${transformY ? "0px" : "10px"});
    transition: all ${duration}ms ease-in-out ${delay}ms;
  `
};

const theme = {
  color,
  mixins,
};

export default theme;