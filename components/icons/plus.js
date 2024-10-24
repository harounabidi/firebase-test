export default function Plus(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ?? '1em'}
      height={props.size ?? '1em'}
      className={props.className}
      color={props.color ?? 'var(--primary)'}
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        // strokeWidth="1.5"
        d="M18 12h-6m0 0H6m6 0V6m0 6v6"
      />
    </svg>
  )
}
