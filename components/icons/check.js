export default function Check(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ?? '2em'}
      height={props.size ?? '2em'}
      viewBox="0 0 20 20"
      style={{
        color: props.color ?? 'var(--primary)'
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 20 20"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M6.267 3.455a3.07 3.07 0 0 0 1.745-.723a3.066 3.066 0 0 1 3.976 0a3.07 3.07 0 0 0 1.745.723a3.066 3.066 0 0 1 2.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 0 1 0 3.976a3.07 3.07 0 0 0-.723 1.745a3.066 3.066 0 0 1-2.812 2.812a3.07 3.07 0 0 0-1.745.723a3.066 3.066 0 0 1-3.976 0a3.07 3.07 0 0 0-1.745-.723a3.066 3.066 0 0 1-2.812-2.812a3.07 3.07 0 0 0-.723-1.745a3.066 3.066 0 0 1 0-3.976a3.07 3.07 0 0 0 .723-1.745a3.066 3.066 0 0 1 2.812-2.812m7.44 5.252a1 1 0 0 0-1.414-1.414L9 10.586L7.707 9.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0z"
          clipRule="evenodd"
        ></path>
      </svg>
    </svg>
  )
}
