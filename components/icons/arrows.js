export default function Arrows(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ?? '2em'}
      height={props.size ?? '2em'}
      viewBox="0 0 24 24"
      style={{
        color: props.color ?? 'var(--primary)'
      }}
    >
      <path
        fill="currentColor"
        d="M12.29 20.69a.8.8 0 0 0 .24-.16l4-4a.75.75 0 0 0-1.06-1.06l-2.72 2.72V5.81l2.72 2.72a.75.75 0 0 0 1.06-1.06l-4-4a.8.8 0 0 0-.24-.16a.73.73 0 0 0-.58 0a.8.8 0 0 0-.24.16l-4 4a.75.75 0 0 0 0 1.06a.75.75 0 0 0 1.06 0l2.72-2.72v12.38l-2.72-2.72a.75.75 0 0 0-1.06 0a.75.75 0 0 0 0 1.06l4 4a.8.8 0 0 0 .24.16a.73.73 0 0 0 .58 0"
      />
    </svg>
  )
}