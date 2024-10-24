export default function Chart() {
  return (
    <svg
      tabIndex="0"
      role="application"
      className="recharts-surface"
      width="416"
      height="244"
      viewBox="0 0 416 244"
      style={{
        width: '100%',
        height: '100%'
      }}
    >
      <defs>
        <linearGradient id=":Rpfclvej6:" x1="0%" y1="0" x2="100%" y2="0">
          <stop offset="0%" stopColor="var(--color-interactive-primary)"></stop>
          <stop
            offset="100%"
            stopColor="var(--color-interactive-primary)"
          ></stop>
          <stop offset="100%" stopColor="var(--color-border-neutral)"></stop>
          <stop offset="100%" stopColor="var(--color-border-neutral)"></stop>
        </linearGradient>
      </defs>
      <g className="recharts-layer recharts-line bg-red-500">
        <path
          stroke="url(#:Rpfclvej6:)"
          strokeWidth="2"
          fill="none"
          width="356"
          height="219.5"
          className="recharts-curve recharts-line-curve"
          d="M0,184.54L11.867,227.5L23.733,194.273L35.6,219.781L47.467,213.068L59.333,213.068L71.2,216.089L83.067,197.965L94.933,159.703L106.8,148.963L118.667,142.922L130.533,109.695L142.4,109.695L154.267,107.01L166.133,109.359L178,109.359L189.867,90.9L201.733,86.537L213.6,88.215L225.467,88.215L237.333,80.831L249.2,72.44L261.067,58.008L272.933,44.248L284.8,27.131L296.667,48.611L308.533,48.611L320.4,49.953L332.267,19.411L344.133,8L356,8.336"
        ></path>
        <g className="recharts-layer"></g>
        <g className="recharts-layer recharts-line-dots">
          <circle
            cx="356"
            r="4"
            cy="8.33562691131495"
            fill="var(--color-interactive-primary)"
            stroke="var(--color-interactive-primary)"
            strokeWidth="12"
            strokeOpacity="0.1"
          >
            <animate
              attributeName="strokeWidth"
              values="12; 24; 24; 12; 12"
              dur="3s"
              keyTimes="0; 0.25; 0.5; 0.75; 1"
              repeatCount="indefinite"
            ></animate>
          </circle>
          <circle
            cx="356"
            r="4"
            cy="8.33562691131495"
            fill="transparent"
            stroke="var(--color-background-screen)"
            strokeWidth="2"
            strokeOpacity="1"
          ></circle>
        </g>
      </g>
    </svg>
  )
}
