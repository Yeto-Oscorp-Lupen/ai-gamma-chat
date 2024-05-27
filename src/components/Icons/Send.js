import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgSend = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 27 26"
    {...props}>
    <Path
      fill="#EE8908"
      d="M25.44.626a2.16 2.16 0 0 0-2.186-.52L1.494 7.364a2.142 2.142 0 0 0-.341 3.941l9.028 4.462 4.462 9.058A2.14 2.14 0 0 0 16.56 26h.15a2.13 2.13 0 0 0 1.873-1.487l7.362-21.7a2.1 2.1 0 0 0-.505-2.187M2.418 9.416 21.41 3.08 10.865 13.626zM16.666 23.65l-4.225-8.448L22.987 4.657z"
    />
  </Svg>
);
export default SvgSend;
