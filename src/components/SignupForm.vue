<template>
  <form @submit.prevent="handleSubmit" class="mx-auto my-5 w-80">
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
    <button
      class="mt-2.5 rounded-3xl bg-emerald-400 px-7 py-2.5 text-xl text-white"
    >
      Sign up
    </button>
  </form>
</template>

<script setup>
import { ref } from "vue";

const displayName = ref("");
const email = ref("");
const password = ref("");

const handleSubmit = () => {
  console.log(displayName.value, email.value, password.value);
};
</script>
