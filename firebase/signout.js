import firebase from "@firebase/config"
import { getAuth } from "firebase/auth"

const auth = getAuth(firebase)

export default async function signOut() {
  let error = null
  try {
    await signOut(auth)
  } catch (e) {
    error = e
  }

  return { error }
}
