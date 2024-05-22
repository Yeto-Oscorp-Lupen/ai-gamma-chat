import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgBackFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 7 11"
    {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M.267 6.094A.79.79 0 0 1 0 5.51c0-.219.096-.429.267-.584L5.431.252a.9.9 0 0 1 .296-.185 1 1 0 0 1 .706-.005.9.9 0 0 1 .3.18q.129.118.199.271a.76.76 0 0 1-.006.64.8.8 0 0 1-.205.267L2.203 5.51 6.721 9.6a.79.79 0 0 1 .257.581.8.8 0 0 1-.268.577.96.96 0 0 1-.637.242.97.97 0 0 1-.642-.232z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgBackFill;
