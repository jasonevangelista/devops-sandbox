import { createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from 'lib/firebase/firebaseSetup';
import { signInWithEmailAndPassword, UserCredential } from "firebase/auth";
import { LoginPayload } from 'types/loginPayload';
import { User } from 'types/user';

export const loginEmailPassword = createAsyncThunk(
  'user/loginEmailPassword',
  async (payload: LoginPayload) => {
    const userCredentials: UserCredential = await signInWithEmailAndPassword(
      auth,
      payload.email.value,
      payload.password.value
    )
    const user: User = {
      uid: userCredentials.user.uid,
      email: userCredentials.user.email
    }
    return user
  }
)

