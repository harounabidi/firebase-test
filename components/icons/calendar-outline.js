export default function CalendarOutline(props) {
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
      <g
        fill="none"
        stroke="currentColor"
        // stroke-width="1.5"
      >
        <path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12v2c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14z" />
        <path stroke-linecap="round" d="M7 4V2.5M17 4V2.5" />
        <circle cx="16.5" cy="16.5" r="1.5" />
        <path stroke-linecap="round" d="M2.5 9h19" />
      </g>
    </svg>
  )
}