export default function Redo(props) {
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
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        // strokeWidth="1.5"
      >
        <path d="M18.364 18.364A9 9 0 1 1 12 3c4.058 0 6.518 2.705 9 5.5" />
        <path d="M21 4.5v4h-4" />
      </g>
    </svg>
  )
}
