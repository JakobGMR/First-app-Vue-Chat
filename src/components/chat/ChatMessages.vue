<template>
  <div ref="chatRef" class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <!-- Messages go here -->

      <ChatBubble v-for="message in messages" :key="message.id" v-bind="message" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import ChatBubble from './ChatBubble.vue';
import { ref, watch } from 'vue';

interface Props {
  messages: ChatMessage[];
}

const props = defineProps<Props>();
const { messages } = props;

const chatRef = ref<HTMLDivElement | null>(null);

//? watch se parece a useEffect
watch(messages, () => {
  console.log('messages cambió');

  // El setTimeout segun es para darle tiempo que se renderice de nuevo el componente
  // y tome en cuenta la altura real
  setTimeout(() => {
    chatRef.value?.scrollTo({
      top: chatRef.value.scrollHeight,
      behavior: 'smooth',
    });
  }, 100);
});
</script>
