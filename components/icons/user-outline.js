export default function UserOutline(props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={props.size ?? "2em"}
      height={props.size ?? "2em"}
      viewBox='0 0 24 24'
      style={{
        color: props.color ?? "var(--primary)",
      }}>
      <g fill='none' stroke='currentColor' strokeWidth='1.5'>
        <circle cx='12' cy='6' r='4' />
        <path d='M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5Z' />
      </g>
    </svg>
  )
}