<template>
  <div
    class="mx-10 my-20 max-w-5xl rounded-3xl bg-white text-center lg:mx-auto"
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
import getUser from "../composables/getUser";

const router = useRouter();
const { user } = getUser();

watch(user, () => {
  if (!user.value) {
    router.push({ name: "Welcome" });
  }
});
</script>
