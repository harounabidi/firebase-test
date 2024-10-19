import firebase from "@firebase/config"
import { signInWithEmailAndPassword, getAuth } from "firebase/auth"

const auth = getAuth(firebase)

export default async function signIn(email, password) {
  let data = null,
    error = null
  try {
    const result = await signInWithEmailAndPassword(auth, email, password)
    const idToken = await result.user.getIdToken()

    const response = await fetch(process.env.NEXT_PUBLIC_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ idToken }),
    })

    if (!response.ok) {
      throw new Error("Failed to authenticate with the server")
    }

    data = await response.json()
  } catch (e) {
    error = e
  }

  return { data, error }
}
