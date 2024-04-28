import { defineStore } from "pinia";
import { ref } from "vue";
import { projectAuth } from "../firebase/config";

export const getUserStore = defineStore("userStore", () => {
  const user = ref(projectAuth.currentUser);
  const error = ref(null);

  projectAuth.onAuthStateChanged((_user) => {
    user.value = _user;
  });

  const getUser = () => {
    return { user };
  };

  const login = async (email, password) => {
    error.value = null;

    try {
      const res = await projectAuth.signInWithEmailAndPassword(email, password);
      error.value = null;
      return res;
    } catch (err) {
      console.log(err.value);
      error.value = "Incorrect login credentials";
    }
  };

  const useLogin = () => {
    return { error, login };
  };

  const logout = async () => {
    error.value = null;

    try {
      await projectAuth.signOut();
    } catch (err) {
      console.log(err.message);
      error.value = err.message;
    }
  };

  const useLogout = () => {
    return { error, logout };
  };

  const signup = async (email, password, displayName) => {
    error.value = null;
    try {
      const res = await projectAuth.createUserWithEmailAndPassword(
        email,
        password,
      );
      if (!res) {
        throw new Error("Could not complete the signup");
      }
      await res.user.updateProfile({ displayName });
      error.value = null;
      return res;
    } catch (err) {
      error.value = err.message;
    }
  };

  const useSignup = () => {
    return { error, signup };
  };

  return { getUser, useLogin, useLogout, useSignup };
});
