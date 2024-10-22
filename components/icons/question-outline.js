export default function QuestionOutline(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ?? '2em'}
      height={props.size ?? '2em'}
      viewBox="0 0 24 24"
      className={props.className}
      style={{
        color: props.color ?? 'var(--primary)'
      }}
    >
      <g fill="none">
        <circle
          cx={12}
          cy={12}
          r={10}
          stroke="currentColor"
          // strokeWidth={1.5}
        ></circle>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          // strokeWidth={1.5}
          d="M10.125 8.875a1.875 1.875 0 1 1 2.828 1.615c-.475.281-.953.708-.953 1.26V13"
        ></path>
        <circle cx={12} cy={16} r={1} fill="currentColor"></circle>
      </g>
    </svg>
  )
}
