<template>
  <form class="m-2.5">
    <textarea
      placeholder="Type a message and hit enter to send..."
      v-model="message"
      @keypress.enter.prevent="handleSubmit"
      class="mb-2 box-border w-full rounded-2xl p-2.5 outline-none"
    ></textarea>
    <span>{{ error }}</span>
  </form>
</template>

<script setup>
import { ref } from "vue";
import getUser from "../composables/getUser";
import { timestamp } from "../firebase/config";
import useCollection from "../composables/useCollection";

const message = ref("");
const { user } = getUser();
const { addDoc, error } = useCollection("messages");

const handleSubmit = async () => {
  const chat = {
    name: user.value.displayName,
    message: message.value,
    createdAt: timestamp(),
  };
  await addDoc(chat);
  if (!error.value) {
    message.value = "";
  }
};
</script>
