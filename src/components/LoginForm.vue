<template>
  <form @submit.prevent="handleSubmit" class="mx-auto my-5 w-80">
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
      Log in
    </button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { getUserStore } from "../stores/UserStore";

const emit = defineEmits(["login"]);

const email = ref("");
const password = ref("");

const userStore = getUserStore();
const { error, login } = userStore.useLogin();

const handleSubmit = async () => {
  await login(email.value, password.value);
  if (!error.value) {
    emit("login");
    email.value = "";
    password.value = "";
  }
};
</script>
