export default function Bank(props) {
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
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        // strokeWidth="1.5"
        d="M3 9.5L12 4l9 5.5M5 20h14M10 9h4m-8 8v-5m4 5v-5m4 5v-5m4 5v-5"
      />
    </svg>
  )
}
