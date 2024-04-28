<template>
  <nav
    v-if="user"
    class="flex items-center justify-between border-b border-gray-100 p-5"
  >
    <div>
      <p class="my-1 text-left text-lg font-semibold text-gray-600">
        Hey there, {{ user.displayName }}
      </p>
      <p class="my-1 text-left text-base text-gray-400">
        Currently logged in as {{ user.email }}
      </p>
    </div>
    <button
      @click="handleClick"
      class="rounded-3xl bg-emerald-400 px-7 pb-2.5 pt-2 text-xl text-white duration-100 hover:drop-shadow-lg"
    >
      Logout
    </button>
  </nav>
</template>

<script setup>
import { getUserStore } from "../stores/UserStore";

const userStore = getUserStore();

const { error, logout } = userStore.useLogout();
const { user } = userStore.getUser();

const handleClick = async () => {
  await logout();
  if (!error.value) {
    console.log("user logged out");
  }
};
</script>
