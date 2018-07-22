
type LogoProps = {
  dim?: number;
};

const Logo: React.SFC<LogoProps> = ({ dim = 32 }) => (
  <svg
    width={dim}
    height={dim}
    stroke="currentColor"
    viewBox="0 0 35 50"
    fontSize="24"
    fontFamily="Junction, sans-serif"
    fillOpacity="null"
    strokeWidth="0"
    strokeOpacity="null"
  >
    <g>
      <text x="77" y="77" transform="matrix(1.75 0 0 1.75 -132.4 -94.1)">
        J
      </text>
      <text x="27.5" y="30" strokeWidth="5">
        l
      </text>
    </g>
  </svg>

);

export default Logo;