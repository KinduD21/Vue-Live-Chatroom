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
import { getUserStore } from "../stores/UserStore";
import { timestamp } from "../firebase/config";
import { useCollectionStore } from "../stores/CollectionStore";

const message = ref("");
const userStore = getUserStore();
const { user } = userStore.getUser();
const collectionStore = useCollectionStore();
const { addDoc, error } = collectionStore.useCollection("messages");

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
