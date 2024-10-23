import { NextResponse } from 'next/server'

// const isLogged = false

export function middleware(request) {
  // if (!isLogged) {
  //   return NextResponse.redirect(new URL('/', request.url))
  // }
  return NextResponse.next()
}

// export const config = {
//   matcher: []
// }
