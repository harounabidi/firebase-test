export default function Payment(props) {
  return (
    <svg
      width={props.size ?? '24'}
      height={props.size ?? '24'}
      fill="currentColor"
      focusable="false"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M13.086 8.57a3.45 3.45 0 0 0 3.042-1.843 6.26 6.26 0 0 1 1.415.943 6.862 6.862 0 0 1 2.314 4.329h1.714a8.635 8.635 0 0 0-3.428-6.043 8.917 8.917 0 0 0-1.629-.943c-.085-1.843-1.585-3.3-3.428-3.3s-3.343 1.457-3.429 3.3v.128c0 .558.129 1.115.386 1.586a3.45 3.45 0 0 0 3.043 1.843Zm-1.543-4.157a1.726 1.726 0 0 1 1.543-.986c.685 0 1.285.429 1.543.986.085.214.171.471.171.728 0 .386-.129.729-.343.986-.3.429-.814.729-1.371.729-.558 0-1.072-.3-1.372-.729a1.528 1.528 0 0 1-.343-.986c0-.257.043-.471.172-.728Zm8.785 10.156c-.02-.021-.042-.032-.064-.043a.224.224 0 0 1-.064-.043c-.471-.3-1.029-.428-1.543-.471a3.46 3.46 0 0 0-3.129 1.714c-.642 1.157-.6 2.529.086 3.557-.471.3-.986.557-1.543.772a6.76 6.76 0 0 1-4.928-.172c0 .043-.857 1.543-.857 1.5a8.522 8.522 0 0 0 6.943.043 7.99 7.99 0 0 0 1.67-.943 3.407 3.407 0 0 0 4.544-1.328c.943-1.586.428-3.6-1.115-4.586Zm-.342 3.729c-.343.6-.986.9-1.629.857-.257-.043-.471-.086-.686-.215-.343-.17-.557-.47-.685-.77-.215-.472-.215-1.072.085-1.544.3-.514.772-.771 1.329-.857.343-.043.686.043 1.029.214.214.129.385.3.514.472.3.557.385 1.243.043 1.843ZM4.943 12.557c1.243-.043 2.486.557 3.129 1.714.685 1.114.6 2.486-.086 3.643-.257.428-.686.814-1.157 1.114-.043 0-.086 0-.129.043-1.586.857-3.6.257-4.543-1.329a3.478 3.478 0 0 1 1.157-4.628 7.263 7.263 0 0 1 0-1.929 8.545 8.545 0 0 1 3.515-6c-.017-.032.097.164.246.421.244.422.584 1.01.61 1.036a6.808 6.808 0 0 0-2.613 4.2 5.795 5.795 0 0 0-.13 1.715Zm1.029 4.885c.3-.171.557-.471.685-.771.257-.471.215-1.071-.043-1.543a1.72 1.72 0 0 0-1.328-.857c-.343-.043-.686.043-1.029.214-.214.129-.385.257-.514.472-.386.514-.429 1.242-.086 1.842.343.6.986.9 1.629.858.214 0 .471-.086.686-.215Z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}