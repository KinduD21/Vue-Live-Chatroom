<template>
  <div
    class="max-h-96 min-h-20 overflow-auto bg-slate-50 p-5 text-left"
    ref="messages"
  >
    <span v-if="error">{{ error }}</span>
    <div v-if="documents && documents.length">
      <div v-for="doc in formattedDocuments" :key="doc.id" class="my-4">
        <span class="mb-1 block text-xs text-gray-400"
          >{{ doc.createdAt }} ago</span
        >
        <span class="mr-2 font-bold">{{ doc.name }}</span>
        <span>{{ doc.message }}</span>
      </div>
    </div>
    <div v-else class="text-gray-400">No messages yet...</div>
  </div>
</template>

<script setup>
import { useCollectionStore } from "../stores/CollectionStore";
import { formatDistanceToNow } from "date-fns";
import { computed, onUpdated, ref } from "vue";

const collectionStore = useCollectionStore();
const { documents, error } = collectionStore.getCollection("messages");

const formattedDocuments = computed(() => {
  if (documents.value) {
    return documents.value.map((doc) => {
      let time = formatDistanceToNow(doc.createdAt.toDate());
      return { ...doc, createdAt: time };
    });
  }
});

//auto-scroll to bottom of messages
const messages = ref(null);
onUpdated(() => {
  messages.value.scrollTop = messages.value.scrollHeight;
});
</script>
