export default function Appearance(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ?? '2em'}
      height={props.size ?? '2em'}
      viewBox="0 0 256 256"
      style={{
        color: props.color ?? 'var(--primary)'
      }}
      className={props.className}
    >
      <path
        fill="currentColor"
        d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24M40 128a88.1 88.1 0 0 1 88-88v176a88.1 88.1 0 0 1-88-88"
      />
    </svg>
  )
}
