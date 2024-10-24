export default function Chart() {
  return (
    <svg viewBox="0 0 356 230" width="100%" xmlns="http://www.w3.org/2000/svg">
      <path
        stroke="#44403c"
        strokeWidth="2"
        fill="none"
        d="M0,184.54L11.867,227.5L23.733,194.273L35.6,219.781L47.467,213.068L59.333,213.068L71.2,216.089L83.067,197.965L94.933,159.703L106.8,148.963L118.667,142.922L130.533,109.695L142.4,109.695L154.267,107.01L166.133,109.359L178,109.359L189.867,90.9L201.733,86.537L213.6,88.215L225.467,88.215L237.333,80.831L249.2,72.44L261.067,58.008L272.933,44.248L284.8,27.131L296.667,48.611L308.533,48.611L320.4,49.953L332.267,19.411L344.133,8L350,8.336"
      />

      <path
        d="M0 115 H350"
        stroke="#D3D4CF"
        lineCap="round"
        strokeWidth="1"
        strokeDasharray="5,5"
        fill="none"
      />

      <path
        d="M0 1 H350"
        stroke="#D3D4CF"
        lineCap="round"
        strokeWidth="1"
        strokeDasharray="5,5"
        fill="none"
      />

      <path
        d="M0 229 H350"
        stroke="#D3D4CF"
        lineCap="round"
        strokeWidth="1"
        fill="none"
      />

      <path
        d="M350 0 V356"
        stroke="#D3D4CF"
        lineCap="round"
        strokeWidth="1"
        fill="none"
      />

      <circle
        cx="350"
        r="5"
        className="animate-pulse"
        cy="8.33562691131495"
        fill="#44403c"
        stroke="white"
        strokeWidth="2"
      ></circle>
    </svg>
  )
}
