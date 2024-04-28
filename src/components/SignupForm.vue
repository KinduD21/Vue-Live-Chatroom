<template>
  <form @submit.prevent="handleSubmit" class="mx-auto my-5 flex w-80 flex-col px-3">
    <input
      type="text"
      required
      placeholder="display name"
      v-model="displayName"
      class="mx-auto my-2.5 w-full rounded-2xl border border-gray-200 p-2.5 text-gray-400"
    />
    <input
      type="email"
      required
      placeholder="email"
      v-model="email"
      class="mx-auto my-2.5 w-full rounded-2xl border border-gray-200 p-2.5 text-gray-400"
    />
    <input
      type="password"
      required
      placeholder="password"
      v-model="password"
      class="mx-auto my-2.5 w-full rounded-2xl border border-gray-200 p-2.5 text-gray-400"
    />
    <p class="text-lg text-red-500">{{ error }}</p>
    <button
      class="mt-2.5 rounded-3xl bg-emerald-400 px-7 pb-2.5 pt-2 text-xl text-white duration-100 hover:drop-shadow-lg"
    >
      Sign up
    </button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { getUserStore } from "../stores/UserStore";

const emit = defineEmits(["signup"]);

const displayName = ref("");
const email = ref("");
const password = ref("");

const userStore = getUserStore();
const { error, signup } = userStore.useSignup();

const handleSubmit = async () => {
  await signup(email.value, password.value, displayName.value);
  if (!error.value) {
    emit("signup");
    displayName.value = "";
    email.value = "";
    password.value = "";
  }
};
</script>
