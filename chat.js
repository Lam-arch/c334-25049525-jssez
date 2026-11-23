import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat@1.46.5/dist/chat.bundle.es.js';

const chatOptions = {
  webhookUrl: 'https://agenticflows.tokencraze.org/webhook/f6050f79-9c96-4548-afe0-945ee55bfb61/chat',
  mode: 'window',
  loadPreviousSession: false,
  initialMessages: [
    'Ask me about the JS-SEZ.',
    'I can help you explore zones and prepare your first questions.'
  ],
  i18n: {
    en: {
      title: 'JS-SEZ advisor',
      subtitle: 'A guide for Singapore manufacturers',
      getStarted: 'Start a conversation',
      inputPlaceholder: 'Ask a JS-SEZ question'
    }
  }
};

window.addEventListener('DOMContentLoaded', () => {
  createChat(chatOptions);

  const openChatButton = document.querySelector('#open-chat');
  openChatButton?.addEventListener('click', () => {
    const toggle = document.querySelector('[class*="chat-window-toggle"], [class*="chat"] button');
    toggle?.click();
  });
});
