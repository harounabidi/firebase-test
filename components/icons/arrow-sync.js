export default function ArrowSync(props) {
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
        d="M3.548 9.735a8.75 8.75 0 0 1 16.03-2.11l.335.759m.837-5.134v4.147a1 1 0 0 1-.837.987m-4.31.013h4.147q.083 0 .163-.013M3.25 20.75v-4.147a1 1 0 0 1 1-1m0 0h4.147m-4.147 0l.172.772a8.75 8.75 0 0 0 16.03-2.11"
      />
    </svg>
  )
}