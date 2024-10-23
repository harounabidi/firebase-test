export default function X(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ?? '1em'}
      height={props.size ?? '1em'}
      className={props.className}
      viewBox="0 0 32 32"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3.5"
        d="M2 30L30 2m0 28L2 2"
      />
    </svg>
  )
}
