export default function Message(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ?? '2em'}
      height={props.size ?? '2em'}
      viewBox="0 0 21 21"
      style={{
        color: props.color ?? 'var(--primary)'
      }}
      className={props.className}
    >
      <g fill="none" fillRule="evenodd">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 3.5a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2l-2.999-.001l-2.294 2.294a1 1 0 0 1-1.32.083l-.094-.083l-2.294-2.294L4.5 17.5a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2z"
        />
        <path
          fill="currentColor"
          d="M10.499 11.5c.5 0 1-.5 1-1s-.5-1-1-1s-.999.5-.999 1s.499 1 .999 1m-4 0c.5 0 1-.5 1-1s-.5-1-1-1s-.999.5-.999 1s.499 1 .999 1m8 0c.5 0 1-.5 1-1s-.5-1-1-1s-.999.5-.999 1s.499 1 .999 1"
        />
      </g>
    </svg>
  )
}