<template>
  <div
    class="mx-10 my-20 max-w-5xl rounded-3xl bg-white px-0 py-5 text-center lg:mx-auto"
  >
    <p>Welcome</p>
    <div v-if="showLogin">
      <h2 class="text-3xl font-bold">Login</h2>
      <LoginForm @login="enterChat" />
      <p class="text-lg">
        No account yet?
        <span
          @click="showLogin = false"
          class="cursor-pointer pb-px text-lg font-bold text-emerald-400 hover:border-b-2 hover:border-emerald-400"
          >Signup</span
        >
        instead
      </p>
    </div>
    <div v-else>
      <h2 class="text-3xl font-bold">Sign up</h2>
      <SignupForm @signup="enterChat" />
      <p class="text-lg">
        Already registered?
        <span
          @click="showLogin = true"
          class="cursor-pointer pb-px text-lg font-bold text-emerald-400 hover:border-b-2 hover:border-emerald-400"
          >Login</span
        >
        instead
      </p>
    </div>
  </div>
</template>

<script setup>
import SignupForm from "../components/SignupForm.vue";
import LoginForm from "../components/LoginForm.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const showLogin = ref(true);

const enterChat = () => {
  router.push({ name: "Chatroom" });
};
</script>
