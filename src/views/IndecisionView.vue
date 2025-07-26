<script setup lang="ts">
import ChatMessages from '@/components/chat/ChatMessages.vue';
import MessageBox from '@/components/chat/MessageBox.vue';
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import { ref } from 'vue';

const messages = ref<ChatMessage[]>([
  {
    id: new Date().getTime(),
    message: 'Hola!!!',
    itsMine: true,
  },
  {
    id: new Date().getTime() + 1,
    message: 'Si',
    itsMine: false,
  },
]);

const onMessage = (message: string) => {
  messages.value.push({
    id: new Date().getTime() + 1,
    message,
    itsMine: true,
  });
};
</script>

<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Mi esposa</span>
    </div>

    <ChatMessages :messages="messages" />

    <MessageBox v-on:send-message="onMessage($event)" />
  </div>
</template>
