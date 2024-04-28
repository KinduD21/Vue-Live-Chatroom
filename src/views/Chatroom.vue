<template>
  <div
    class="m-10 max-w-5xl rounded-3xl bg-white px-0 py-5 text-center lg:mx-auto lg:my-20"
  >
    <Navbar />
    <ChatWindow />
    <NewChatForm />
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { watch } from "vue";
import NewChatForm from "../components/NewChatForm.vue";
import ChatWindow from "../components/ChatWindow.vue";
import Navbar from "../components/Navbar.vue";
import { getUserStore } from "../stores/UserStore";

const router = useRouter();
const userStore = getUserStore();
const { user } = userStore.getUser();

watch(user, () => {
  if (!user.value) {
    router.push({ name: "Welcome" });
  }
});
</script>
