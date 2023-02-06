export const font = ({ fs, fw, lh }) => `
    font-size:${fs ? `${fs}px` : '16px'};
    font-weight: ${fw ? `${fw}` : '500'};
    line-height: ${`${lh}px`};

`;
export const titleColor = () => `
    color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  background-image: conic-gradient(
    #553c9a 30%,
    #ee4b2b 40%,
    #ee4b2b 70%,
    #00c2cb 80%,
    #553c9a
  );
`;

export const btn = () => `
   background: #a99d9c;
  border: 1px solid #a99d9c;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.2) 1px 2px 4px;
  box-sizing: border-box;
  color: #ffffff;
  display: inline-block;
  font-family: nunito, roboto, proxima-nova, 'proxima nova', sans-serif;
  
  outline: 0;
  padding: 12px 14px;
  text-align: center;
  text-rendering: geometricprecision;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;

  &:hover,
  &:active {
    background-color: initial;
    background-position: 0 0;
    color: #ff4742;
  }

  &:active {
    opacity: 0.5;
  }
`;
