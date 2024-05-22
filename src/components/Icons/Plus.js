import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgPlus = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 22 23"
    {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M11 .951c.76 0 1.375.615 1.375 1.372v8.234h8.25c.76 0 1.375.614 1.375 1.372s-.616 1.372-1.375 1.372h-8.25v8.233c0 .758-.616 1.372-1.375 1.372-.76 0-1.375-.614-1.375-1.372v-8.233h-8.25C.615 13.3 0 12.687 0 11.929s.616-1.373 1.375-1.373h8.25V2.323c0-.757.616-1.372 1.375-1.372"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgPlus;
