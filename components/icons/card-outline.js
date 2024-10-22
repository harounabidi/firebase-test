export default function CardOutline(props) {
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
        // strokeWidth={props.strokeWidth ?? '1.5'}
      >
        <path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12Z"></path>
        <path strokeLinecap="round" d="M10 16H6m8 0h-1.5M2 10h20"></path>
      </g>
    </svg>
  )
}
