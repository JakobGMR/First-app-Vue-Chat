import { ref } from 'vue';
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import type { YesNoResponse } from '@/interfaces/yes-no-response';
import { sleep } from '@/helpers/sleep';

export const useChat = () => {
  const messages = ref<ChatMessage[]>([]);

  const getHerResponse = async () => {
    const resp = await fetch('https://yesno.wtf/api');
    const data = (await resp.json()) as YesNoResponse;

    return data;
  };

  const onMessage = async (message: string) => {
    if (message.length === 0) return;

    messages.value.push({
      id: new Date().getTime() + 1,
      message,
      itsMine: true,
    });

    // Evaluar si termina en ?
    if (!message.endsWith('?')) return;

    const { answer, image } = await getHerResponse();

    await sleep(1); // Para relentizar
    messages.value.push({
      id: new Date().getTime() + 1,
      itsMine: false,
      message: answer,
      img: image,
    });
  };

  return {
    // Properties
    messages,

    // Methods
    onMessage,
  };
};
