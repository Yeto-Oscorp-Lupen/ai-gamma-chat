import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgArrowRightSafe = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 11 16"
    {...props}>
    <Path
      fill="currentColor"
      d="M8 7.997 1 14c-.187.164-.5.766-.5 1 0 .235.2.58.387.744s.436.256.703.256.516-.09.703-.256l8.099-7.126a.82.82 0 0 0 .29-.621.82.82 0 0 0-.29-.622L2.3.255A1.06 1.06 0 0 0 1.597 0c-.266 0-.516.09-.703.256C.506.596.112 1.159.5 1.5z"
    />
  </Svg>
);
export default SvgArrowRightSafe;
