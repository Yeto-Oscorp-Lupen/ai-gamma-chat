import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgCrossFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 21 21"
    {...props}>
    <Path
      fill="currentColor"
      d="M20.247 18.19a1.456 1.456 0 0 1-2.059 2.06L10.5 12.558l-7.69 7.688a1.456 1.456 0 0 1-2.06-2.059L8.442 10.5.753 2.81A1.456 1.456 0 0 1 2.812.75L10.5 8.442 18.19.75a1.456 1.456 0 1 1 2.06 2.058L12.557 10.5z"
    />
  </Svg>
);
export default SvgCrossFill;
