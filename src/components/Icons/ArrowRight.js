import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgArrowRight = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 20 16"
    {...props}>
    <Path
      fill="#fff"
      d="M1 7a1 1 0 0 0 0 2zm18.707 1.707a1 1 0 0 0 0-1.414L13.343.929a1 1 0 1 0-1.414 1.414L17.586 8l-5.657 5.657a1 1 0 0 0 1.414 1.414zM1 9h18V7H1z"
    />
  </Svg>
);
export default SvgArrowRight;
