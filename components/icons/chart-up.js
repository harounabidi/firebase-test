export default function ChartUp(props) {
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
        fill="currentColor"
        d="M13.75 9a.75.75 0 0 1 .75-.75H18a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-1.69l-4.72 4.72a.75.75 0 0 1-1.06 0L9 13.06l-2.47 2.47a.75.75 0 0 1-1.06-1.06l3-3a.75.75 0 0 1 1.06 0L12 13.94l4.19-4.19H14.5a.75.75 0 0 1-.75-.75"
      />
    </svg>
  )
}