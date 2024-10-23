export default function ArrowLeft(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ?? '2em'}
      height={props.size ?? '2em'}
      viewBox="0 0 24 24"
      style={{
        color: props.color ?? 'var(--primary)'
      }}
      className={props.className}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        // strokeWidth="1.5"
        d="M20 12H4m0 0l6-6m-6 6l6 6"
      />
    </svg>
  )
}
