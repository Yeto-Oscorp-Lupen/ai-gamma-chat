import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgTermsFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 13 14"
    {...props}>
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M0 2.8A2.8 2.8 0 0 1 2.8 0h7a2.8 2.8 0 0 1 2.8 2.8v8.4A2.8 2.8 0 0 1 9.8 14h-7A2.8 2.8 0 0 1 0 11.2zM2.8 5a.7.7 0 0 1 .7-.7h4.2a.7.7 0 1 1 0 1.4H3.5a.7.7 0 0 1-.7-.7m.7 3.1a.7.7 0 0 0 0 1.4h5.6a.7.7 0 1 0 0-1.4z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgTermsFill;
