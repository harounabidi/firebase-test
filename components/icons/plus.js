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
      <path fill="currentColor" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" />
    </svg>
  )
}